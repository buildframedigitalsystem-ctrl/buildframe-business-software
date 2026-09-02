'use strict';

/**
 * BuildFrame Business Assessment
 * Frontend Controller
 *
 * Part 1:
 * - Read assessment interest from the URL
 * - Store the starting assessment context
 * - Start the assessment experience
 */

const assessmentState = {
    interest: '',
    currentStep: 1,
    totalSteps: 6,

    answers: {
        businessName: '',
        businessIndustry: '',
        businessLocation: '',
        businessDescription: '',

        currentTools: '',
        customerHandling: '',
        salesProcess: '',
        recordKeeping: '',
        dailyOperations: '',

        painPoints: '',
        timeConsumingWork: '',
        missedOpportunities: '',

        workingWell: '',
        toolsToKeep: '',
        processesToKeep: '',

        desiredImprovements: '',
        priorityImprovement: '',
        futureGoals: '',

        contactName: '',
        contactEmail: '',
        contactPhone: '',
        preferredContact: ''
    }
};


/* ========================================
   ELEMENTS
======================================== */

const assessmentIntro =
    document.getElementById('assessment-intro');

const assessmentWorkspace =
    document.getElementById('assessment-workspace');

const assessmentStartButton =
    document.getElementById('assessment-start-button');

const assessmentStepLabel =
    document.getElementById('assessment-step-label');

const assessmentProgressLabel =
    document.getElementById('assessment-progress-label');

const assessmentProgressBar =
    document.getElementById('assessment-progress-bar');

/* ========================================
   ANSWER COLLECTION
======================================== */

function collectCurrentStepAnswers() {

    if (assessmentState.currentStep === 1) {
        const businessName =
            document.getElementById('business-name');

        const businessIndustry =
            document.getElementById('business-industry');

        const businessLocation =
            document.getElementById('business-location');

        const businessDescription =
            document.getElementById('business-description');

        assessmentState.answers.businessName =
            businessName
                ? businessName.value.trim()
                : '';

        assessmentState.answers.businessIndustry =
            businessIndustry
                ? businessIndustry.value.trim()
                : '';

        assessmentState.answers.businessLocation =
            businessLocation
                ? businessLocation.value.trim()
                : '';

        assessmentState.answers.businessDescription =
            businessDescription
                ? businessDescription.value.trim()
                : '';

        return;
    }


    if (assessmentState.currentStep === 2) {
        const currentTools =
            document.getElementById('current-tools');

        const customerHandling =
            document.getElementById('customer-handling');

        const salesProcess =
            document.getElementById('sales-process');

        const recordKeeping =
            document.getElementById('record-keeping');

        const dailyOperations =
            document.getElementById('daily-operations');

        assessmentState.answers.currentTools =
            currentTools
                ? currentTools.value.trim()
                : '';

        assessmentState.answers.customerHandling =
            customerHandling
                ? customerHandling.value.trim()
                : '';

        assessmentState.answers.salesProcess =
            salesProcess
                ? salesProcess.value.trim()
                : '';

        assessmentState.answers.recordKeeping =
            recordKeeping
                ? recordKeeping.value.trim()
                : '';

        assessmentState.answers.dailyOperations =
            dailyOperations
                ? dailyOperations.value.trim()
                : '';

        return;
    }


    if (assessmentState.currentStep === 3) {
        const painPoints =
            document.getElementById('pain-points');

        const timeConsumingWork =
            document.getElementById('time-consuming-work');

        const missedOpportunities =
            document.getElementById('missed-opportunities');

        assessmentState.answers.painPoints =
            painPoints
                ? painPoints.value.trim()
                : '';

        assessmentState.answers.timeConsumingWork =
            timeConsumingWork
                ? timeConsumingWork.value.trim()
                : '';

        assessmentState.answers.missedOpportunities =
            missedOpportunities
                ? missedOpportunities.value.trim()
                : '';

        return;
    }


    if (assessmentState.currentStep === 4) {
        const workingWell =
            document.getElementById('working-well');

        const toolsToKeep =
            document.getElementById('tools-to-keep');

        const processesToKeep =
            document.getElementById('processes-to-keep');

        assessmentState.answers.workingWell =
            workingWell
                ? workingWell.value.trim()
                : '';

        assessmentState.answers.toolsToKeep =
            toolsToKeep
                ? toolsToKeep.value.trim()
                : '';

        assessmentState.answers.processesToKeep =
            processesToKeep
                ? processesToKeep.value.trim()
                : '';

        return;
    }


    if (assessmentState.currentStep === 5) {
        const desiredImprovements =
            document.getElementById('desired-improvements');

        const priorityImprovement =
            document.getElementById('priority-improvement');

        const futureGoals =
            document.getElementById('future-goals');

        assessmentState.answers.desiredImprovements =
            desiredImprovements
                ? desiredImprovements.value.trim()
                : '';

        assessmentState.answers.priorityImprovement =
            priorityImprovement
                ? priorityImprovement.value.trim()
                : '';

        assessmentState.answers.futureGoals =
            futureGoals
                ? futureGoals.value.trim()
                : '';

        return;
    }


    if (assessmentState.currentStep === 6) {
        const contactName =
            document.getElementById('contact-name');

        const contactEmail =
            document.getElementById('contact-email');

        const contactPhone =
            document.getElementById('contact-phone');

        const preferredContact =
            document.getElementById('preferred-contact');

        assessmentState.answers.contactName =
            contactName
                ? contactName.value.trim()
                : '';

        assessmentState.answers.contactEmail =
            contactEmail
                ? contactEmail.value.trim()
                : '';

        assessmentState.answers.contactPhone =
            contactPhone
                ? contactPhone.value.trim()
                : '';

        assessmentState.answers.preferredContact =
            preferredContact
                ? preferredContact.value.trim()
                : '';

        return;
    }
}

function restoreAssessmentStepAnswers() {
    const answers = assessmentState.answers;

    const fieldMap = {
        'business-name': answers.businessName,
        'business-industry': answers.businessIndustry,
        'business-location': answers.businessLocation,
        'business-description': answers.businessDescription,

        'current-tools': answers.currentTools,
        'customer-handling': answers.customerHandling,
        'sales-process': answers.salesProcess,
        'record-keeping': answers.recordKeeping,
        'daily-operations': answers.dailyOperations,

        'pain-points': answers.painPoints,
        'time-consuming-work': answers.timeConsumingWork,
        'missed-opportunities': answers.missedOpportunities,

        'working-well': answers.workingWell,
        'tools-to-keep': answers.toolsToKeep,
        'processes-to-keep': answers.processesToKeep,

        'desired-improvements': answers.desiredImprovements,
        'priority-improvement': answers.priorityImprovement,
        'future-goals': answers.futureGoals,

        'contact-name': answers.contactName,
        'contact-email': answers.contactEmail,
        'contact-phone': answers.contactPhone,
        'preferred-contact': answers.preferredContact
    };

    Object.entries(fieldMap).forEach(
        ([fieldId, fieldValue]) => {
            const field =
                document.getElementById(fieldId);

            if (!field) {
                return;
            }

            field.value = fieldValue || '';
        }
    );
}


/* ========================================
   NEXT STEP
======================================== */

function goToNextAssessmentStep() {
    collectCurrentStepAnswers();

    console.log(
        '[BuildFrame Assessment] Saved answers:',
        assessmentState.answers
    );

    if (
        assessmentState.currentStep <
        assessmentSteps.length
    ) {
        assessmentState.currentStep += 1;

        updateAssessmentProgress();
        renderAssessmentStep();

        assessmentPreviousButton.hidden = false;

        assessmentWorkspace.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

        return;
    }

    console.log(
        '[BuildFrame Assessment] Assessment complete:',
        {
            interest: assessmentState.interest,
            answers: assessmentState.answers
        }
    );
}


/* ========================================
   URL INTEREST
======================================== */

function getAssessmentInterestFromUrl() {
    const urlParams =
        new URLSearchParams(window.location.search);

    const interest =
        urlParams.get('interest');

    return interest
        ? interest.trim().toLowerCase()
        : '';
}


function initializeAssessmentContext() {
    assessmentState.interest =
        getAssessmentInterestFromUrl();

    if (assessmentState.interest) {
        console.log(
            '[BuildFrame Assessment] Starting interest:',
            assessmentState.interest
        );
    }
}


/* ========================================
   PROGRESS
======================================== */

function updateAssessmentProgress() {
    const {
        currentStep,
        totalSteps
    } = assessmentState;

    const progressPercentage =
        (currentStep / totalSteps) * 100;

    assessmentStepLabel.textContent =
        `Step ${currentStep}`;

    assessmentProgressLabel.textContent =
        `${currentStep} of ${totalSteps}`;

    assessmentProgressBar.style.width =
        `${progressPercentage}%`;
}


/* ========================================
   START ASSESSMENT
======================================== */

function startAssessment() {
    assessmentIntro.hidden = true;
    assessmentWorkspace.hidden = false;

    updateAssessmentProgress();
    renderAssessmentStep();

    assessmentWorkspace.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

function goToPreviousAssessmentStep() {
    if (assessmentState.currentStep <= 1) {
        return;
    }

    collectCurrentStepAnswers();

    assessmentState.currentStep -= 1;

    updateAssessmentProgress();
    renderAssessmentStep();

    assessmentPreviousButton.hidden =
        assessmentState.currentStep === 1;

    assessmentWorkspace.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}


/* ========================================
   EVENTS
======================================== */

const assessmentPreviousButton =
    document.getElementById('assessment-previous-button');

const assessmentNextButton =
    document.getElementById('assessment-next-button');

assessmentStartButton.addEventListener(
    'click',
    startAssessment
);

assessmentPreviousButton.addEventListener(
    'click',
    goToPreviousAssessmentStep
);

assessmentNextButton.addEventListener(
    'click',
    goToNextAssessmentStep
);

/* ========================================
   INITIALIZE
======================================== */

initializeAssessmentContext();
updateAssessmentProgress();

/* ========================================
   STEP DEFINITIONS
======================================== */

const assessmentSteps = [
    {
        id: 'business-profile',
        title: 'Tell Us About Your Business',
        description:
            'Start with the basics so we can understand what kind of business you operate and how it currently works.',
        render() {
            return `
                <div class="assessment-step">

                    <h2 class="assessment-step-title">
                        ${this.title}
                    </h2>

                    <p class="assessment-step-description">
                        ${this.description}
                    </p>

                    <div class="assessment-field-group">
                        <label
                            class="assessment-label"
                            for="business-name"
                        >
                            Business Name
                        </label>

                        <input
                            class="assessment-input"
                            id="business-name"
                            name="businessName"
                            type="text"
                            autocomplete="organization"
                            placeholder="Example: ABC Construction Services"
                        >
                    </div>

                    <div class="assessment-field-group">
                        <label
                            class="assessment-label"
                            for="business-industry"
                        >
                            Business Type or Industry
                        </label>

                        <input
                            class="assessment-input"
                            id="business-industry"
                            name="businessIndustry"
                            type="text"
                            placeholder="Example: Construction, Retail, Dental Clinic"
                        >
                    </div>

                    <div class="assessment-field-group">
                        <label
                            class="assessment-label"
                            for="business-location"
                        >
                            Primary Business Location
                        </label>

                        <input
                            class="assessment-input"
                            id="business-location"
                            name="businessLocation"
                            type="text"
                            placeholder="City, Province/State, or Country"
                        >
                    </div>

                    <div class="assessment-field-group">
                        <label
                            class="assessment-label"
                            for="business-description"
                        >
                            What does your business do?
                        </label>

                        <textarea
                            class="assessment-textarea"
                            id="business-description"
                            name="businessDescription"
                            placeholder="Briefly describe your products, services, customers, and how the business operates."
                        ></textarea>
                    </div>

                </div>
            `;
        }
    },

    {
        id: 'current-operations',
        title: 'How Does Your Business Work Today?',
        description:
            'Help us understand your current process before we suggest anything new.',
        render() {
            return `
                <div class="assessment-step">

                    <h2 class="assessment-step-title">
                        ${this.title}
                    </h2>

                    <p class="assessment-step-description">
                        ${this.description}
                    </p>

                    <div class="assessment-field-group">
                        <label
                            class="assessment-label"
                            for="current-tools"
                        >
                            What tools or systems do you currently use?
                        </label>

                        <textarea
                            class="assessment-textarea"
                            id="current-tools"
                            name="currentTools"
                            placeholder="Example: Excel, notebooks, Facebook Messenger, POS system, accounting software, Google Sheets..."
                        ></textarea>
                    </div>

                    <div class="assessment-field-group">
                        <label
                            class="assessment-label"
                            for="customer-handling"
                        >
                            How do you currently handle customers or inquiries?
                        </label>

                        <textarea
                            class="assessment-textarea"
                            id="customer-handling"
                            name="customerHandling"
                            placeholder="Example: Facebook messages, phone calls, walk-ins, email, website forms..."
                        ></textarea>
                    </div>

                    <div class="assessment-field-group">
                        <label
                            class="assessment-label"
                            for="sales-process"
                        >
                            How do you currently handle sales, orders, or bookings?
                        </label>

                        <textarea
                            class="assessment-textarea"
                            id="sales-process"
                            name="salesProcess"
                            placeholder="Describe what happens from customer inquiry to completed sale, order, booking, or service."
                        ></textarea>
                    </div>

                    <div class="assessment-field-group">
                        <label
                            class="assessment-label"
                            for="record-keeping"
                        >
                            How do you keep business records today?
                        </label>

                        <textarea
                            class="assessment-textarea"
                            id="record-keeping"
                            name="recordKeeping"
                            placeholder="Example: paper records, Excel files, accounting system, separate apps..."
                        ></textarea>
                    </div>

                    <div class="assessment-field-group">
                        <label
                            class="assessment-label"
                            for="daily-operations"
                        >
                            Is there anything else we should know about your daily operations?
                        </label>

                        <textarea
                            class="assessment-textarea"
                            id="daily-operations"
                            name="dailyOperations"
                            placeholder="Tell us about any important process, workflow, or routine in your business."
                        ></textarea>
                    </div>

                </div>
            `;
        }
    },

    {
        id: 'problems-bottlenecks',
        title: 'What Is Making Business Harder Than It Should Be?',
        description:
            'Tell us about the problems, delays, repetitive work, or frustrations you experience today.',
        render() {
            return `
                <div class="assessment-step">

                    <h2 class="assessment-step-title">
                        ${this.title}
                    </h2>

                    <p class="assessment-step-description">
                        ${this.description}
                    </p>

                    <div class="assessment-field-group">
                        <label
                            class="assessment-label"
                            for="pain-points"
                        >
                            What are the biggest problems in your current operation?
                        </label>

                        <textarea
                            class="assessment-textarea"
                            id="pain-points"
                            name="painPoints"
                            placeholder="Example: scattered records, slow follow-ups, manual order tracking, scheduling problems..."
                        ></textarea>
                    </div>

                    <div class="assessment-field-group">
                        <label
                            class="assessment-label"
                            for="time-consuming-work"
                        >
                            What tasks take too much time or are repeated often?
                        </label>

                        <textarea
                            class="assessment-textarea"
                            id="time-consuming-work"
                            name="timeConsumingWork"
                            placeholder="Tell us about repetitive work that could possibly be simplified."
                        ></textarea>
                    </div>

                    <div class="assessment-field-group">
                        <label
                            class="assessment-label"
                            for="missed-opportunities"
                        >
                            Are there inquiries, sales, tasks, or opportunities that sometimes get missed?
                        </label>

                        <textarea
                            class="assessment-textarea"
                            id="missed-opportunities"
                            name="missedOpportunities"
                            placeholder="Describe anything that tends to fall through the cracks."
                        ></textarea>
                    </div>

                </div>
            `;
        }
    },

    {
        id: 'keep-what-works',
        title: 'What Already Works Well?',
        description:
            'BuildFrame does not need to replace something simply because it already exists. Tell us what you want to keep.',
        render() {
            return `
                <div class="assessment-step">

                    <h2 class="assessment-step-title">
                        ${this.title}
                    </h2>

                    <p class="assessment-step-description">
                        ${this.description}
                    </p>

                    <div class="assessment-field-group">
                        <label
                            class="assessment-label"
                            for="working-well"
                        >
                            What parts of your current setup work well?
                        </label>

                        <textarea
                            class="assessment-textarea"
                            id="working-well"
                            name="workingWell"
                            placeholder="Tell us what you are already happy with."
                        ></textarea>
                    </div>

                    <div class="assessment-field-group">
                        <label
                            class="assessment-label"
                            for="tools-to-keep"
                        >
                            Are there tools or systems you definitely want to keep?
                        </label>

                        <textarea
                            class="assessment-textarea"
                            id="tools-to-keep"
                            name="toolsToKeep"
                            placeholder="Example: accounting software, Excel files, POS, website, Facebook page..."
                        ></textarea>
                    </div>

                    <div class="assessment-field-group">
                        <label
                            class="assessment-label"
                            for="processes-to-keep"
                        >
                            Are there business processes you do not want changed?
                        </label>

                        <textarea
                            class="assessment-textarea"
                            id="processes-to-keep"
                            name="processesToKeep"
                            placeholder="Tell us about processes your team or customers already rely on."
                        ></textarea>
                    </div>

                </div>
            `;
        }
    },

    {
        id: 'desired-improvements',
        title: 'What Would You Like to Improve?',
        description:
            'Now tell us what a better version of your business operation would look like.',
        render() {
            return `
                <div class="assessment-step">

                    <h2 class="assessment-step-title">
                        ${this.title}
                    </h2>

                    <p class="assessment-step-description">
                        ${this.description}
                    </p>

                    <div class="assessment-field-group">
                        <label
                            class="assessment-label"
                            for="desired-improvements"
                        >
                            What would you most like to improve?
                        </label>

                        <textarea
                            class="assessment-textarea"
                            id="desired-improvements"
                            name="desiredImprovements"
                            placeholder="Example: customer follow-up, online ordering, records, scheduling, reports, website, digital presence..."
                        ></textarea>
                    </div>

                    <div class="assessment-field-group">
                        <label
                            class="assessment-label"
                            for="priority-improvement"
                        >
                            If we could improve one thing first, what should it be?
                        </label>

                        <textarea
                            class="assessment-textarea"
                            id="priority-improvement"
                            name="priorityImprovement"
                            placeholder="What is your highest priority right now?"
                        ></textarea>
                    </div>

                    <div class="assessment-field-group">
                        <label
                            class="assessment-label"
                            for="future-goals"
                        >
                            Where would you like your business to be in the future?
                        </label>

                        <textarea
                            class="assessment-textarea"
                            id="future-goals"
                            name="futureGoals"
                            placeholder="Tell us about the growth or improvements you want to achieve."
                        ></textarea>
                    </div>

                </div>
            `;
        }
    },

    {
        id: 'contact-review',
        title: 'Almost Done',
        description:
            'Tell us how we can reach you after reviewing your assessment.',
        render() {
            return `
                <div class="assessment-step">

                    <h2 class="assessment-step-title">
                        ${this.title}
                    </h2>

                    <p class="assessment-step-description">
                        ${this.description}
                    </p>

                    <div class="assessment-field-group">
                        <label
                            class="assessment-label"
                            for="contact-name"
                        >
                            Your Name
                        </label>

                        <input
                            class="assessment-input"
                            id="contact-name"
                            name="contactName"
                            type="text"
                            autocomplete="name"
                            placeholder="Your name"
                        >
                    </div>

                    <div class="assessment-field-group">
                        <label
                            class="assessment-label"
                            for="contact-email"
                        >
                            Email Address
                        </label>

                        <input
                            class="assessment-input"
                            id="contact-email"
                            name="contactEmail"
                            type="email"
                            autocomplete="email"
                            placeholder="you@example.com"
                        >
                    </div>

                    <div class="assessment-field-group">
                        <label
                            class="assessment-label"
                            for="contact-phone"
                        >
                            Phone or Mobile Number
                        </label>

                        <input
                            class="assessment-input"
                            id="contact-phone"
                            name="contactPhone"
                            type="tel"
                            autocomplete="tel"
                            placeholder="Optional"
                        >
                    </div>

                    <div class="assessment-field-group">
                        <label
                            class="assessment-label"
                            for="preferred-contact"
                        >
                            Preferred Way to Contact You
                        </label>

                        <select
                            class="assessment-select"
                            id="preferred-contact"
                            name="preferredContact"
                        >
                            <option value="">
                                Select one
                            </option>

                            <option value="email">
                                Email
                            </option>

                            <option value="phone">
                                Phone / Mobile
                            </option>

                            <option value="messaging">
                                Messaging
                            </option>
                        </select>
                    </div>

                    <div class="assessment-field-group">
                        <p class="assessment-intro-note">
                            BuildFrame will review what you actually need before
                            recommending software, website, e-commerce, digital
                            presence, automation, or other improvements.
                        </p>
                    </div>

                </div>
            `;
        }
    }
];

/* ========================================
   STEP RENDERING
======================================== */

const assessmentStepContainer =
    document.getElementById('assessment-step-container');


function renderAssessmentStep() {
    const stepIndex =
        assessmentState.currentStep - 1;

    console.log(
        '[BuildFrame Assessment] Current step:',
        assessmentState.currentStep
    );

    console.log(
        '[BuildFrame Assessment] Step index:',
        stepIndex
    );

    console.log(
        '[BuildFrame Assessment] assessmentSteps:',
        assessmentSteps
    );

    const step =
        assessmentSteps[stepIndex];

    console.log(
        '[BuildFrame Assessment] Selected step:',
        step
    );

    if (!step) {
        assessmentStepContainer.innerHTML = `
            <div style="padding: 40px;">
                <h2>No assessment step was found.</h2>
                <p>
                    Check the Console for the current step,
                    step index, and assessmentSteps values.
                </p>
            </div>
        `;

        return;
    }

    assessmentStepContainer.innerHTML =
        step.render();

    restoreAssessmentStepAnswers();

    assessmentNextButton.textContent =
        assessmentState.currentStep ===
            assessmentSteps.length
            ? 'Finish Assessment'
            : 'Continue';

    console.log(
        '[BuildFrame Assessment] Step rendered successfully.'
    );
}


