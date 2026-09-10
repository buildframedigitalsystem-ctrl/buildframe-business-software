'use strict';


/* =========================================================
   BUILDFRAME BUSINESS SOFTWARE
   Public Website Interactions
   ========================================================= */


/* =========================================================
   CURRENT YEAR
   ========================================================= */

const currentYearElement =
    document.getElementById('currentYear');

if (currentYearElement) {
    currentYearElement.textContent =
        String(new Date().getFullYear());
}


/* =========================================================
   MOBILE NAVIGATION
   ========================================================= */

const mobileMenuButton =
    document.getElementById('mobileMenuButton');

const mainNavigation =
    document.getElementById('mainNavigation');


if (
    mobileMenuButton &&
    mainNavigation
) {

    mobileMenuButton.addEventListener(
        'click',
        () => {

            const isOpen =
                mainNavigation.classList.toggle('open');

            mobileMenuButton.setAttribute(
                'aria-expanded',
                String(isOpen)
            );

            mobileMenuButton.textContent =
                isOpen
                    ? '×'
                    : '☰';
        }
    );


    mainNavigation
        .querySelectorAll('a')
        .forEach(
            (link) => {

                link.addEventListener(
                    'click',
                    () => {

                        mainNavigation
                            .classList
                            .remove('open');

                        mobileMenuButton.setAttribute(
                            'aria-expanded',
                            'false'
                        );

                        mobileMenuButton.textContent =
                            '☰';
                    }
                );
            }
        );
}


/* =========================================================
   BUSINESS SYSTEMS VOCABULARY
   ========================================================= */

const vocabulary = {

    website: {
        title: 'Website',

        meaning:
            'A website is your business location on the internet. It can present your company, services, products, contact information, and other information customers need.',

        help:
            'A professional website can make your business easier to find, explain what you offer, receive inquiries, support selling, and give customers a reliable place to learn about your business.',

        need:
            'You may need one if customers rely mainly on social media to find you, your current website is outdated, or you need a more professional online presence.'
    },


    software: {
        title: 'Business Software',

        meaning:
            'Business software is a digital system used to manage part of a business operation, such as customers, projects, orders, inventory, documents, appointments, or reports.',

        help:
            'It can organize information, reduce repetitive manual work, improve visibility, and make important business processes easier to manage.',

        need:
            'You may need it when spreadsheets, notebooks, messaging apps, or disconnected tools are becoming difficult to manage.'
    },


    platform: {
        title: 'Platform',

        meaning:
            'A platform is a larger digital environment where several related business functions can work together in one system.',

        help:
            'Instead of using many disconnected tools, a platform can provide one organized place for the parts of the business that need to work together.',

        need:
            'You may need a platform when your operation has several connected processes that are difficult to manage separately.'
    },


    database: {
        title: 'Database',

        meaning:
            'A database is an organized place where a system stores information such as customers, products, orders, projects, users, or records.',

        help:
            'It allows business information to be stored consistently and retrieved when needed instead of being scattered across multiple files.',

        need:
            'You may need structured database management when business records have become too large or complicated for separate documents and spreadsheets.'
    },


    dashboard: {
        title: 'Dashboard',

        meaning:
            'A dashboard is a screen that summarizes important information and activities from a business system.',

        help:
            'It can give you a quick view of what is happening without opening multiple reports or searching through individual records.',

        need:
            'You may need one when you frequently need to check orders, projects, sales, appointments, tasks, or other business activity.'
    },


    crm: {
        title: 'CRM',

        meaning:
            'CRM stands for Customer Relationship Management. It is a system for organizing customer information, inquiries, conversations, leads, and follow-ups.',

        help:
            'A CRM can help keep customer information in one place, reduce forgotten follow-ups, and make it easier to understand where each customer is in your business process.',

        need:
            'You may need a CRM when inquiries are being forgotten, follow-ups are inconsistent, or customer information is scattered across several tools.'
    },


    lead: {
        title: 'Lead',

        meaning:
            'A lead is a person or business that may become a customer because they have shown interest or may have a need for what you offer.',

        help:
            'Tracking leads helps your business remember who has inquired, who needs follow-up, and which opportunities may become customers.',

        need:
            'You may need lead tracking when inquiries arrive through several channels and are difficult to follow consistently.'
    },


    funnel: {
        title: 'Sales Funnel',

        meaning:
            'A sales funnel represents the stages a potential customer moves through before becoming a paying customer.',

        help:
            'It can help your business understand where prospects are in the buying process and what follow-up may be appropriate.',

        need:
            'You may need a clearer funnel if many people inquire but you have difficulty tracking what happens afterward.'
    },


    booking: {
        title: 'Booking & Scheduling',

        meaning:
            'Booking and scheduling systems help manage appointments, consultations, reservations, or scheduled services.',

        help:
            'They can reduce scheduling confusion and make it easier for customers and staff to understand available times.',

        need:
            'You may need one if appointments are handled manually through messages, phone calls, or separate calendars.'
    },


    payment: {
        title: 'Payments',

        meaning:
            'Digital payment systems allow customers to pay for products or services electronically through supported payment providers.',

        help:
            'They can make transactions more convenient and connect payment information with orders, bookings, or invoices.',

        need:
            'You may need payment integration if customers currently pay through a manual process that is difficult to track.'
    },


    invoice: {
        title: 'Invoicing',

        meaning:
            'Invoicing is the process of creating and sending a structured bill for products or services provided to a customer.',

        help:
            'A digital invoicing workflow can keep billing records organized and make it easier to track what has been billed and paid.',

        need:
            'You may need it if invoices are created manually and payment tracking is becoming difficult.'
    },


    portal: {
        title: 'Customer Portal',

        meaning:
            'A customer portal is a private online area where customers can access information related to their account or transactions.',

        help:
            'Depending on the business, customers may be able to view orders, documents, project information, appointments, or other relevant records.',

        need:
            'You may need one when customers frequently request information that could be securely provided through self-service access.'
    },


    workflow: {
        title: 'Workflow',

        meaning:
            'A workflow is the sequence of steps your business follows to complete a task or process.',

        help:
            'Understanding workflows makes it easier to identify unnecessary steps, delays, repeated work, and opportunities for improvement.',

        need:
            'You may need workflow improvement when staff handle the same task differently or when processes have become unnecessarily complicated.'
    },


    inventory: {
        title: 'Inventory Management',

        meaning:
            'Inventory management tracks products, materials, supplies, or stock that a business owns or uses.',

        help:
            'It can help you understand what is available, what is running low, and how inventory changes through purchasing and sales.',

        need:
            'You may need it if stock is difficult to track accurately or is managed through several separate records.'
    },


    orders: {
        title: 'Order Management',

        meaning:
            'Order management organizes customer orders from the time they are received until they are completed or fulfilled.',

        help:
            'It can help staff track order status, customer details, products, payment information, and fulfillment steps.',

        need:
            'You may need one when orders arrive through different channels and are becoming difficult to monitor.'
    },


    projects: {
        title: 'Project Management',

        meaning:
            'Project management systems organize projects, tasks, schedules, documents, progress, and other project-related information.',

        help:
            'They can provide a clearer view of project status and help teams manage work in a more consistent way.',

        need:
            'You may need one if your business handles several client or internal projects at the same time.'
    },


    tasks: {
        title: 'Task Management',

        meaning:
            'Task management organizes the individual pieces of work that need to be completed.',

        help:
            'It helps clarify who is responsible, what needs to be done, and whether work is pending or completed.',

        need:
            'You may need it when responsibilities are communicated mainly through messages or verbal instructions.'
    },


    documents: {
        title: 'Document Management',

        meaning:
            'Document management organizes files and records so they can be stored, located, and associated with the appropriate customer, project, or business process.',

        help:
            'It can reduce time spent looking for documents and improve consistency in how business files are handled.',

        need:
            'You may need it when files are scattered across computers, email, messaging apps, or different cloud folders.'
    },


    scheduling: {
        title: 'Scheduling',

        meaning:
            'Scheduling systems organize appointments, tasks, staff availability, project activities, or other time-based business work.',

        help:
            'They can reduce conflicts and provide a clearer view of when work is expected to happen.',

        need:
            'You may need scheduling tools when several people or activities depend on shared time and availability.'
    },


    ecommerce: {
        title: 'E-Commerce',

        meaning:
            'E-commerce is the process of selling products or services online through a digital store or ordering system.',

        help:
            'It can allow customers to browse products, place orders, provide information, and sometimes pay without visiting a physical location.',

        need:
            'You may need e-commerce when you want customers to purchase or order online instead of relying entirely on manual messages.'
    },


    store: {
        title: 'Online Store',

        meaning:
            'An online store is a customer-facing website or platform where products or services can be presented and purchased or ordered.',

        help:
            'It gives customers a structured way to browse what you sell instead of requesting product information one message at a time.',

        need:
            'You may need one when your products are already promoted online but the actual ordering process remains manual.'
    },


    catalog: {
        title: 'Product Catalog',

        meaning:
            'A product catalog organizes the products or services your business offers, including names, descriptions, images, prices, and other information.',

        help:
            'It helps customers and staff understand what is available and can support websites, online stores, quotations, and order systems.',

        need:
            'You may need one when product information is scattered across social posts, spreadsheets, or separate files.'
    },


    ordering: {
        title: 'Online Ordering',

        meaning:
            'Online ordering allows customers to submit an order digitally through a website or system.',

        help:
            'It can reduce repetitive order-taking conversations and provide more structured order information.',

        need:
            'You may need it if customers currently place orders primarily through chat or manual forms.'
    },


    landing: {
        title: 'Landing Page',

        meaning:
            'A landing page is a focused webpage designed around one specific offer, campaign, product, service, or action.',

        help:
            'It gives visitors a simple path to understand an offer and take the next step without being distracted by unrelated information.',

        need:
            'You may need one when promoting a particular service, campaign, product, event, or customer-acquisition offer.'
    },


    digitalpresence: {
        title: 'Digital Presence',

        meaning:
            'Digital presence is the overall way your business appears and operates online across websites, social media, search, content, and other digital channels.',

        help:
            'A consistent digital presence can make it easier for customers to find, understand, and communicate with your business.',

        need:
            'You may need improvement when your business looks inconsistent online or important channels are inactive or outdated.'
    },


    socialmedia: {
        title: 'Social Media Management',

        meaning:
            'Social media management includes planning, preparing, publishing, and organizing content for business social accounts.',

        help:
            'It can help maintain a consistent presence without requiring the business owner to personally manage every post.',

        need:
            'You may need it when your social pages are inactive or managing content takes too much time from daily operations.'
    },


    content: {
        title: 'Content Management',

        meaning:
            'Content management is the organization and maintenance of digital content such as text, images, videos, pages, posts, and product information.',

        help:
            'It can make updates easier and help businesses maintain consistent information across digital channels.',

        need:
            'You may need it when content has become difficult to organize or update consistently.'
    },


    seo: {
        title: 'SEO',

        meaning:
            'SEO stands for Search Engine Optimization. It involves improving a website so search engines can better understand and present its content.',

        help:
            'Good SEO practices can improve the technical and content foundation that helps people discover your business through search.',

        need:
            'You may need SEO improvement when your website exists but is difficult to discover through relevant searches.'
    },


    emailmarketing: {
        title: 'Email Marketing',

        meaning:
            'Email marketing uses email to communicate useful information, offers, announcements, or follow-ups to an appropriate audience.',

        help:
            'It can provide a direct communication channel with customers or prospects who have a legitimate reason to receive your messages.',

        need:
            'You may need it when you want a structured way to maintain contact with customers beyond social media.'
    },


    automation: {
        title: 'Automation',

        meaning:
            'Automation allows a system to perform certain repetitive actions automatically when defined conditions are met.',

        help:
            'It can reduce repetitive work, improve consistency, and allow staff to spend less time performing simple routine actions manually.',

        need:
            'You may need automation when the same predictable task is being repeated frequently and can be handled safely by a system.'
    },


    integration: {
        title: 'Integration',

        meaning:
            'Integration allows two compatible systems or services to exchange information or work together.',

        help:
            'It can reduce duplicate data entry and create smoother workflows between the tools your business already uses.',

        need:
            'You may need integration when information must repeatedly be copied manually from one system into another.'
    },


    api: {
        title: 'API',

        meaning:
            'API stands for Application Programming Interface. It is a technical way for compatible software systems to communicate with each other.',

        help:
            'APIs can make useful integrations possible, such as connecting a business system to payment, email, publishing, or other external services.',

        need:
            'You may encounter APIs when your business needs different digital tools to exchange information or trigger actions.'
    },


    notification: {
        title: 'Notifications',

        meaning:
            'Notifications are messages or alerts generated when something important happens inside a business system.',

        help:
            'They can remind staff or customers about actions, updates, appointments, orders, or other relevant events.',

        need:
            'You may need them when important activities are being missed because people have to manually remember to check.'
    },


    chatbot: {
        title: 'Chatbot',

        meaning:
            'A chatbot is a digital conversation tool that can respond to defined questions or help guide visitors toward information or actions.',

        help:
            'It can help answer common questions or direct inquiries when designed around a clear business purpose.',

        need:
            'You may need one when customers repeatedly ask the same basic questions or need guidance before speaking with a person.'
    },


    forms: {
        title: 'Digital Forms',

        meaning:
            'Digital forms collect structured information from customers, staff, applicants, respondents, or other users.',

        help:
            'They can replace unstructured messages or paper forms and send information directly into an organized workflow.',

        need:
            'You may need digital forms when important information is repeatedly collected manually.'
    },


    survey: {
        title: 'Survey System',

        meaning:
            'A survey system collects structured responses from people for research, feedback, assessment, evaluation, or data collection.',

        help:
            'It can organize questions, respondents, submissions, and results more consistently than manual collection.',

        need:
            'You may need one when your organization regularly collects responses from many people.'
    },


    reports: {
        title: 'Reports',

        meaning:
            'Reports organize business information into summaries that help explain what has happened during a particular period or process.',

        help:
            'They can make raw records easier to review and support operational or management decisions.',

        need:
            'You may need reports when important information exists but requires too much manual work to summarize.'
    },


    analytics: {
        title: 'Analytics',

        meaning:
            'Analytics involves examining data to understand patterns, performance, activity, or trends.',

        help:
            'It can help a business move beyond simply storing information and begin using that information to understand what is happening.',

        need:
            'You may need analytics when you have enough reliable data to begin comparing performance or activity over time.'
    },


    users: {
        title: 'User Accounts',

        meaning:
            'User accounts allow different people to securely access a business system using their own identity.',

        help:
            'They help a system distinguish between users, record activities, and provide appropriate access to different people.',

        need:
            'You may need user accounts when several employees, managers, customers, or members need to use the same system.'
    },


    permissions: {
        title: 'Roles & Permissions',

        meaning:
            'Roles and permissions determine what different users are allowed to see or do inside a system.',

        help:
            'They can help protect information and prevent users from accessing tools or records that are not relevant to their responsibilities.',

        need:
            'You may need permissions when several types of users require different levels of system access.'
    },


    backup: {
        title: 'Backup',

        meaning:
            'A backup is an additional copy of important digital information that can help with recovery if original data becomes unavailable or damaged.',

        help:
            'Appropriate backup practices can reduce the risk of losing important business information.',

        need:
            'Backup planning is important whenever a business depends on digital records that would be difficult or impossible to recreate.'
    }

};


const vocabularyButtons =
    document.querySelectorAll(
        '.vocab-button'
    );

const vocabTitle =
    document.getElementById(
        'vocabTitle'
    );

const vocabMeaning =
    document.getElementById(
        'vocabMeaning'
    );

const vocabHelp =
    document.getElementById(
        'vocabHelp'
    );

const vocabNeed =
    document.getElementById(
        'vocabNeed'
    );


function renderVocabularyTerm(
    termKey
) {

    const term =
        vocabulary[termKey];

    if (!term) {
        return;
    }


    if (vocabTitle) {
        vocabTitle.textContent =
            term.title;
    }

    if (vocabMeaning) {
        vocabMeaning.textContent =
            term.meaning;
    }

    if (vocabHelp) {
        vocabHelp.textContent =
            term.help;
    }

    if (vocabNeed) {
        vocabNeed.textContent =
            term.need;
    }


    vocabularyButtons.forEach(
        (button) => {

            const isActive =
                button.dataset.term ===
                termKey;

            button
                .classList
                .toggle(
                    'active',
                    isActive
                );
        }
    );
}


vocabularyButtons.forEach(
    (button) => {

        button.addEventListener(
            'click',
            () => {

                renderVocabularyTerm(
                    button.dataset.term
                );
            }
        );
    }
);


/*
 * Default vocabulary item.
 */

renderVocabularyTerm(
    'website'
);


/* =========================================================
   FAQ ACCORDION
   ========================================================= */

const faqItems =
    document.querySelectorAll(
        '.faq-item'
    );


faqItems.forEach(
    (item) => {

        const question =
            item.querySelector(
                '.faq-question'
            );

        if (!question) {
            return;
        }


        question.addEventListener(
            'click',
            () => {

                const isOpen =
                    item
                        .classList
                        .toggle('open');

                question.setAttribute(
                    'aria-expanded',
                    String(isOpen)
                );


                const indicator =
                    question.querySelector(
                        'span'
                    );

                if (indicator) {
                    indicator.textContent =
                        isOpen
                            ? '−'
                            : '+';
                }
            }
        );
    }
);
