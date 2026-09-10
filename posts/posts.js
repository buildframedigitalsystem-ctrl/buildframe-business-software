/* =========================================================
   BUILDFRAME WEBSITE POSTS
   ========================================================= */

const BUILDFRAME_POST_SOURCES = [
    'posts/buildframe-construction-400-post-rotation-FINAL.csv',
    'posts/buildframe-content-creators-200-day-cycle-FINAL.csv'
];

const PHILIPPINE_TIME_ZONE = 'Asia/Manila';

const LATEST_POST_LIMIT = 10;

const CAMPAIGN_START = '2026-09-11';

const DAILY_POST_TIME = '08:00';

function parseCsv(text) {
    const rows = [];
    let row = [];
    let field = '';
    let insideQuotes = false;

    for (let i = 0; i < text.length; i += 1) {
        const character = text[i];
        const nextCharacter = text[i + 1];

        if (character === '"') {
            if (insideQuotes && nextCharacter === '"') {
                field += '"';
                i += 1;
            } else {
                insideQuotes = !insideQuotes;
            }

            continue;
        }

        if (character === ',' && !insideQuotes) {
            row.push(field);
            field = '';
            continue;
        }

        if (
            (character === '\n' || character === '\r') &&
            !insideQuotes
        ) {
            if (character === '\r' && nextCharacter === '\n') {
                i += 1;
            }

            row.push(field);

            if (row.some(value => value.trim() !== '')) {
                rows.push(row);
            }

            row = [];
            field = '';
            continue;
        }

        field += character;
    }

    if (field.length > 0 || row.length > 0) {
        row.push(field);

        if (row.some(value => value.trim() !== '')) {
            rows.push(row);
        }
    }

    return rows;
}

function rowsToObjects(rows) {
    if (!Array.isArray(rows) || rows.length < 2) {
        return [];
    }

    const headers = rows[0].map(header => header.trim());

    return rows.slice(1).map(row => {
        const item = {};

        headers.forEach((header, index) => {
            item[header] = (row[index] ?? '').trim();
        });

        return item;
    });
}

async function loadPostSource(sourceUrl) {
    const response = await fetch(sourceUrl, {
        cache: 'no-store'
    });

    if (!response.ok) {
        throw new Error(
            `Could not load post source: ${sourceUrl}`
        );
    }

    const text = await response.text();
    const rows = parseCsv(text);

    return rowsToObjects(rows);
}

async function loadAllPosts() {
    const postGroups = await Promise.all(
        BUILDFRAME_POST_SOURCES.map(sourceUrl =>
            loadPostSource(sourceUrl)
        )
    );

    return postGroups.flat();
}

function isValidPost(post) {
    return Boolean(
        post &&
        post.id &&
        post.market &&
        post.category &&
        post.caption &&
        post.image
    );
}

async function getValidPosts() {
    const posts = await loadAllPosts();

    return posts.filter(isValidPost);
}

const BUILDFRAME_MARKET_ORDER = [
    'General Contractors',
    'Roofing Contractors',
    'Electrical Contractors',
    'Plumbing Contractors',
    'HVAC Contractors',
    'Renovation & Remodeling',
    'Handyman & Property Maintenance',
    'Tiling & Flooring Contractors',
    'Landscaping Contractors',
    'Metal Fabrication',
    'Glass & Aluminum Contractors',
    'Woodworking & Carpentry',
    'Solar Installation Contractors',
    'Construction Suppliers & Building Materials',
    'Aggregates, Anapog & Filling Materials',
    'Property Management',
    'Engineering Services',
    'Architectural & Design Services',
    'Specialty Subcontractors & Trade Specialists',
    'Emergency Repair & Construction Services'
];

function groupPostsByMarket(posts) {
    const grouped = new Map();

    BUILDFRAME_MARKET_ORDER.forEach(market => {
        grouped.set(market, []);
    });

    posts.forEach(post => {
        if (!grouped.has(post.market)) {
            return;
        }

        grouped.get(post.market).push(post);
    });

    return grouped;
}

function buildMarketCycles(posts) {
    const grouped = groupPostsByMarket(posts);
    const cycles = [];

    let cycleIndex = 0;

    while (true) {
        const cycle = [];

        for (const market of BUILDFRAME_MARKET_ORDER) {
            const marketPosts = grouped.get(market) || [];
            const post = marketPosts[cycleIndex];

            if (post) {
                cycle.push(post);
            }
        }

        if (cycle.length === 0) {
            break;
        }

        cycles.push(cycle);
        cycleIndex += 1;
    }

    return cycles;
}

function splitPostsByCampaign(posts) {
    return {
        construction: posts.filter(
            post => post.category === 'construction'
        ),

        contentCreator: posts.filter(
            post => post.category === 'content-creator'
        )
    };
}

function buildMasterRotation(posts) {
    const {
        construction,
        contentCreator
    } = splitPostsByCampaign(posts);

    const constructionCycles =
        buildMarketCycles(construction);

    const contentCreatorCycles =
        buildMarketCycles(contentCreator);

    const masterCycles = [];

    for (let index = 0; index < 10; index += 1) {
        masterCycles.push(
            constructionCycles[index],
            contentCreatorCycles[index]
        );
    }

    for (let index = 10; index < constructionCycles.length; index += 1) {
        masterCycles.push(
            constructionCycles[index]
        );
    }

    return masterCycles.flat();
}

function getScheduledDate(dayIndex) {
    const [year, month, day] =
        CAMPAIGN_START.split('-').map(Number);

    const [hour, minute] =
        DAILY_POST_TIME.split(':').map(Number);

    const startUtc = Date.UTC(
        year,
        month - 1,
        day,
        hour - 8,
        minute
    );

    return new Date(
        startUtc + dayIndex * 24 * 60 * 60 * 1000
    );
}

function getPublishedPosts(posts, now = new Date()) {
    return posts.filter((post, index) => {
        const scheduledDate =
            getScheduledDate(index);

        return scheduledDate <= now;
    });
}

function getLatestPublishedPosts(posts, now = new Date()) {
    const publishedPosts =
        getPublishedPosts(posts, now);

    return publishedPosts
        .slice(-LATEST_POST_LIMIT)
        .reverse();
}

function escapeHtml(value) {
    return String(value)
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#039;');
}

function createPostCard(post) {
    return `
        <article class="scheduled-post-card">
            <img
                src="${escapeHtml(post.image)}"
                alt="${escapeHtml(post.market)}"
                class="scheduled-post-image"
            >

            <div class="scheduled-post-body">
                <div class="scheduled-post-meta">
                    ${escapeHtml(post.market)}
                </div>

                <p class="scheduled-post-caption">
                    ${escapeHtml(post.caption).replaceAll('\n', '<br>')}
                </p>
            </div>
        </article>
    `;
}

function renderHomepagePosts(posts, now = new Date()) {
    const grid =
        document.getElementById('scheduledPostsGrid');

    if (!grid) {
        return;
    }

    const latestPosts =
        getLatestPublishedPosts(posts, now);

    if (latestPosts.length === 0) {
        grid.innerHTML = `
            <p class="module-empty-state">
                No BuildFrame posts are published yet.
            </p>
        `;
        return;
    }

    grid.innerHTML =
        latestPosts
            .map(createPostCard)
            .join('');
}

async function initializeBuildFramePosts() {
    try {
        const posts = await getValidPosts();

        const rotation =
            buildMasterRotation(posts);

        renderHomepagePosts(rotation);
        renderArchivePosts(rotation);

    } catch (error) {
        console.error(
            'BuildFrame posts failed to load:',
            error
        );
    }
}

function renderArchivePosts(posts, now = new Date()) {
    const grid =
        document.getElementById('allPostsGrid');

    if (!grid) {
        return;
    }

    const publishedPosts =
        getPublishedPosts(posts, now)
            .slice()
            .reverse();

    if (publishedPosts.length === 0) {
        grid.innerHTML = `
            <p class="module-empty-state">
                No BuildFrame posts are published yet.
            </p>
        `;
        return;
    }

    grid.innerHTML =
        publishedPosts
            .map(createPostCard)
            .join('');
}

document.addEventListener(
    'DOMContentLoaded',
    initializeBuildFramePosts
);