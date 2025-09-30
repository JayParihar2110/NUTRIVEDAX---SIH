// AyurNutri Application - Complete JavaScript Implementation

// AyurNutri Application - Complete JavaScript Implementation

// Application State Management
let appState = {
    currentUser: null,
    currentRole: null,
    isAuthenticated: false,
    authMode: 'login',
    currentQuestion: 0,
    doshaScores: { vata: 0, pitta: 0, kapha: 0 },
    assessmentAnswers: [],
    navigationHistory: []
};

// Sample Data
const doshaQuestions = [
    {
        id: 1,
        category: "Physical Characteristics",
        question: "What is your natural body frame?",
        options: [
            { text: "Thin, light frame with prominent joints", vata: 3, pitta: 0, kapha: 0 },
            { text: "Medium, well-proportioned build", vata: 0, pitta: 3, kapha: 0 },
            { text: "Large, heavy frame with broad shoulders", vata: 0, pitta: 0, kapha: 3 }
        ]
    },
    {
        id: 2,
        category: "Appetite & Digestion",
        question: "How would you describe your appetite?",
        options: [
            { text: "Variable - sometimes strong, sometimes weak", vata: 3, pitta: 0, kapha: 0 },
            { text: "Strong and regular - get irritable when hungry", vata: 0, pitta: 3, kapha: 0 },
            { text: "Steady and low - can easily skip meals", vata: 0, pitta: 0, kapha: 3 }
        ]
    },
    {
        id: 3,
        category: "Physical Characteristics",
        question: "What is your skin type?",
        options: [
            { text: "Dry, thin, cool to touch", vata: 3, pitta: 0, kapha: 0 },
            { text: "Warm, oily, prone to rashes", vata: 0, pitta: 3, kapha: 0 },
            { text: "Thick, moist, cool and smooth", vata: 0, pitta: 0, kapha: 3 }
        ]
    },
    {
        id: 4,
        category: "Mental Characteristics",
        question: "How do you handle stress?",
        options: [
            { text: "Get anxious and worried easily", vata: 3, pitta: 0, kapha: 0 },
            { text: "Become irritated and angry", vata: 0, pitta: 3, kapha: 0 },
            { text: "Stay calm but may withdraw", vata: 0, pitta: 0, kapha: 3 }
        ]
    },
    {
        id: 5,
        category: "Sleep Patterns",
        question: "What is your sleep pattern?",
        options: [
            { text: "Light sleeper, wake up frequently", vata: 3, pitta: 0, kapha: 0 },
            { text: "Sound sleep but short duration", vata: 0, pitta: 3, kapha: 0 },
            { text: "Heavy sleeper, hard to wake up", vata: 0, pitta: 0, kapha: 3 }
        ]
    },
    {
        id: 6,
        category: "Energy Levels",
        question: "How is your energy throughout the day?",
        options: [
            { text: "Comes in bursts, easily exhausted", vata: 3, pitta: 0, kapha: 0 },
            { text: "Steady and intense when focused", vata: 0, pitta: 3, kapha: 0 },
            { text: "Slow to start but sustained", vata: 0, pitta: 0, kapha: 3 }
        ]
    },
    {
        id: 7,
        category: "Mental Characteristics",
        question: "How do you make decisions?",
        options: [
            { text: "Quickly but may change mind often", vata: 3, pitta: 0, kapha: 0 },
            { text: "Decisively and stick to them", vata: 0, pitta: 3, kapha: 0 },
            { text: "Slowly after careful consideration", vata: 0, pitta: 0, kapha: 3 }
        ]
    },
    {
        id: 8,
        category: "Physical Characteristics",
        question: "What is your natural body temperature preference?",
        options: [
            { text: "Love warmth, get cold easily", vata: 3, pitta: 0, kapha: 0 },
            { text: "Prefer cool environments, get hot easily", vata: 0, pitta: 3, kapha: 0 },
            { text: "Comfortable in most temperatures", vata: 0, pitta: 0, kapha: 3 }
        ]
    }
];

const indianFoods = [
    {
        id: 1,
        name: "Basmati Rice",
        category: "Grains",
        region: "North India",
        nutrients: { calories: 130, protein: 3, carbs: 28, fat: 0.3, fiber: 0.4 },
        ayurvedic: { rasa: ["Sweet"], virya: "Cold", vipaka: "Sweet" },
        dosha: { vata: "Decrease", pitta: "Decrease", kapha: "Increase" }
    },
    {
        id: 2,
        name: "Turmeric",
        category: "Spices",
        region: "All India",
        nutrients: { calories: 29, protein: 1, carbs: 6, fat: 0.3, fiber: 2 },
        ayurvedic: { rasa: ["Bitter", "Pungent"], virya: "Hot", vipaka: "Pungent" },
        dosha: { vata: "Increase", pitta: "Increase", kapha: "Decrease" }
    },
    {
        id: 3,
        name: "Ghee",
        category: "Fats",
        region: "All India",
        nutrients: { calories: 112, protein: 0, carbs: 0, fat: 12.8, fiber: 0 },
        ayurvedic: { rasa: ["Sweet"], virya: "Cold", vipaka: "Sweet" },
        dosha: { vata: "Decrease", pitta: "Decrease", kapha: "Increase" }
    }
];

const samplePatients = [
    {
        id: 1,
        name: "Rajesh Kumar",
        age: 35,
        weight: 70,
        height: 175,
        dosha: { vata: 60, pitta: 25, kapha: 15 },
        healthGoals: ["Increase Energy", "Improve Digestion"],
        lastVisit: "2024-09-15",
        primaryDosha: "Vata"
    },
    {
        id: 2,
        name: "Priya Sharma",
        age: 28,
        weight: 58,
        height: 165,
        dosha: { vata: 20, pitta: 65, kapha: 15 },
        healthGoals: ["Stress Management", "Better Sleep"],
        lastVisit: "2024-09-20",
        primaryDosha: "Pitta"
    },
    {
        id: 3,
        name: "Amit Patel",
        age: 42,
        weight: 78,
        height: 170,
        dosha: { vata: 15, pitta: 30, kapha: 55 },
        healthGoals: ["Weight Loss", "Increase Energy"],
        lastVisit: "2024-09-22",
        primaryDosha: "Kapha"
    }
];

// Utility Functions
function showNotification(message, type = 'success') {
    const container = document.getElementById('notification-container');
    if (!container) return;
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span>${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">&times;</button>
        </div>
    `;
    
    container.appendChild(notification);
    
    // Show animation
    setTimeout(() => notification.classList.add('show'), 100);
    
    // Auto remove after 4 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, 300);
    }, 4000);
}

function showLoading() {
    const overlay = document.getElementById('loading-overlay');
    if (overlay) {
        overlay.classList.remove('hidden');
    }
}

function hideLoading() {
    const overlay = document.getElementById('loading-overlay');
    if (overlay) {
        overlay.classList.add('hidden');
    }
}

function hideAllPages() {
    const pages = [
        'homepage', 'patient-dashboard', 'dietitian-dashboard', 
        'admin-dashboard', 'dosha-assessment', 'ar-scanner'
    ];
    
    pages.forEach(pageId => {
        const page = document.getElementById(pageId);
        if (page) {
            page.classList.add('hidden');
        }
    });
}

function addToHistory(pageId) {
    appState.navigationHistory.push(pageId);
}

function goBack() {
    if (appState.navigationHistory.length > 1) {
        // Remove current page
        appState.navigationHistory.pop();
        // Get previous page
        const previousPage = appState.navigationHistory[appState.navigationHistory.length - 1];
        
        if (previousPage === 'homepage') {
            showHomepage();
        } else if (previousPage === 'patient-dashboard') {
            showPatientDashboard();
        } else if (previousPage === 'dietitian-dashboard') {
            showDietitianDashboard();
        } else if (previousPage === 'admin-dashboard') {
            showAdminDashboard();
        }
    } else {
        // Default back to homepage
        showHomepage();
    }
}

// Navigation Functions
function showHomepage() {
    hideAllPages();
    document.getElementById('homepage').classList.remove('hidden');
    appState.navigationHistory = ['homepage'];
}

function showLoginOptions() {
    showNotification('Please select your role from the cards below', 'info');
}

// Authentication Functions
function showAuth(role) {
    appState.currentRole = role;
    const modal = document.getElementById('auth-modal');
    const title = document.getElementById('auth-title');
    const extraFields = document.getElementById('patient-extra-fields');
    const googleLogin = document.getElementById('google-login');
    
    if (title) title.textContent = appState.authMode === 'login' ? 'Login' : 'Sign Up';
    
    if (role === 'patient' && appState.authMode === 'register') {
        if (extraFields) extraFields.classList.remove('hidden');
        if (googleLogin) googleLogin.classList.remove('hidden');
    } else {
        if (extraFields) extraFields.classList.add('hidden');
        if (googleLogin) googleLogin.classList.add('hidden');
    }
    
    if (modal) modal.classList.remove('hidden');
}

function closeAuth() {
    const modal = document.getElementById('auth-modal');
    const form = document.getElementById('auth-form');
    
    if (modal) modal.classList.add('hidden');
    if (form) form.reset();
}

function toggleAuthMode() {
    appState.authMode = appState.authMode === 'login' ? 'register' : 'login';
    const title = document.getElementById('auth-title');
    const btnText = document.getElementById('auth-btn-text');
    const switchText = document.getElementById('auth-switch');
    
    if (appState.authMode === 'register') {
        if (title) title.textContent = 'Sign Up';
        if (btnText) btnText.textContent = 'Sign Up';
        if (switchText) switchText.innerHTML = '<a href="#" onclick="toggleAuthMode()">Already have an account? Login</a>';
    } else {
        if (title) title.textContent = 'Login';
        if (btnText) btnText.textContent = 'Login';
        if (switchText) switchText.innerHTML = '<a href="#" onclick="toggleAuthMode()">Don\'t have an account? Sign up</a>';
    }
    
    const extraFields = document.getElementById('patient-extra-fields');
    const googleLogin = document.getElementById('google-login');
    
    if (appState.currentRole === 'patient' && appState.authMode === 'register') {
        if (extraFields) extraFields.classList.remove('hidden');
        if (googleLogin) googleLogin.classList.remove('hidden');
    } else {
        if (extraFields) extraFields.classList.add('hidden');
        if (googleLogin) googleLogin.classList.add('hidden');
    }
}

function googleLogin() {
    showLoading();
    setTimeout(() => {
        hideLoading();
        authenticateUser('patient', 'Google User', 'google-user@ayurnutri.com');
    }, 1500);
}

function authenticateUser(role, name, email) {
    appState.currentUser = { 
        name, 
        email, 
        role, 
        plan: 'free',
        doshaResults: role === 'patient' ? null : undefined
    };
    appState.isAuthenticated = true;

    // Save the user session to localStorage
    localStorage.setItem('ayurNutriUser', JSON.stringify(appState.currentUser));
    
    closeAuth();
    showNotification(`Welcome, ${name}!`, 'success');
    
    setTimeout(() => {
        if (role === 'patient') {
            if (!appState.currentUser.doshaResults) {
                if (confirm('Would you like to complete your Ayurvedic constitution assessment now?')) {
                    startDoshaAssessment();
                } else {
                    showPatientDashboard();
                }
            } else {
                showPatientDashboard();
            }
        } else if (role === 'dietitian') {
            showDietitianDashboard();
        } else if (role === 'admin') {
            showAdminDashboard();
        }
    }, 1000);
}

function logout() {
    // Clear user from localStorage
    localStorage.removeItem('ayurNutriUser');

    appState.currentUser = null;
    appState.isAuthenticated = false;
    appState.navigationHistory = [];
    showHomepage();
    showNotification('Logged out successfully', 'success');
}

// Dashboard Functions
function showPatientDashboard() {
    hideAllPages();
    addToHistory('patient-dashboard');
    document.getElementById('patient-dashboard').classList.remove('hidden');
    
    const nameEl = document.getElementById('patient-name');
    const planEl = document.getElementById('patient-plan');
    
    if (nameEl) nameEl.textContent = appState.currentUser.name;
    
    if (planEl) {
        if (appState.currentUser.plan === 'premium') {
            planEl.textContent = 'Premium Plan';
            planEl.className = 'plan-badge premium';
            planEl.style.background = 'var(--success)';
            planEl.style.color = 'var(--white)';
        } else {
            planEl.textContent = 'Free Plan';
            planEl.className = 'plan-badge';
        }
    }
    
    // Initialize charts with delay to ensure DOM is ready
    setTimeout(() => {
        try {
            initializeDoshaChart();
            initializeNutritionChart();
        } catch (error) {
            console.log('Charts will initialize when data is available');
        }
    }, 500);
    
    updatePremiumFeaturesDisplay();
}

function showDietitianDashboard() {
    hideAllPages();
    addToHistory('dietitian-dashboard');
    document.getElementById('dietitian-dashboard').classList.remove('hidden');
    
    const nameEl = document.getElementById('dietitian-name');
    if (nameEl) nameEl.textContent = appState.currentUser.name;
    
    setTimeout(() => {
        loadPatientsList();
        setupSearchFunctionality();
    }, 100);
}

function showAdminDashboard() {
    hideAllPages();
    addToHistory('admin-dashboard');
    document.getElementById('admin-dashboard').classList.remove('hidden');
    
    setTimeout(() => {
        try {
            initializeAnalyticsChart();
        } catch (error) {
            console.log('Analytics chart will initialize when ready');
        }
    }, 500);
}

// Dosha Assessment Functions
function startDoshaAssessment() {
    hideAllPages();
    addToHistory('dosha-assessment');
    document.getElementById('dosha-assessment').classList.remove('hidden');
    
    appState.currentQuestion = 0;
    appState.doshaScores = { vata: 0, pitta: 0, kapha: 0 };
    appState.assessmentAnswers = [];
    
    showQuestion();
}

function retakeDosha() {
    startDoshaAssessment();
}

function showQuestion() {
    const container = document.getElementById('question-container');
    const question = doshaQuestions[appState.currentQuestion];
    const progress = ((appState.currentQuestion + 1) / doshaQuestions.length) * 100;
    
    const progressEl = document.getElementById('assessment-progress');
    if (progressEl) {
        progressEl.style.width = `${progress}%`;
    }
    
    if (container) {
        container.innerHTML = `
            <h3 class="question-title">Question ${appState.currentQuestion + 1} of ${doshaQuestions.length}</h3>
            <p class="question-text">${question.question}</p>
            <div class="question-options">
                ${question.options.map((option, index) => `
                    <div class="question-option" onclick="selectOption(${index})">
                        ${option.text}
                    </div>
                `).join('')}
            </div>
        `;
    }
    
    // Update navigation buttons
    const prevBtn = document.getElementById('prev-question');
    const nextBtn = document.getElementById('next-question');
    const submitBtn = document.getElementById('submit-assessment');
    
    if (prevBtn) prevBtn.disabled = appState.currentQuestion === 0;
    
    if (appState.currentQuestion === doshaQuestions.length - 1) {
        if (nextBtn) nextBtn.classList.add('hidden');
        if (submitBtn) submitBtn.classList.remove('hidden');
    } else {
        if (nextBtn) nextBtn.classList.remove('hidden');
        if (submitBtn) submitBtn.classList.add('hidden');
    }
}

function selectOption(optionIndex) {
    const options = document.querySelectorAll('.question-option');
    options.forEach((option, index) => {
        option.classList.toggle('selected', index === optionIndex);
    });
    
    const selectedOption = doshaQuestions[appState.currentQuestion].options[optionIndex];
    appState.assessmentAnswers[appState.currentQuestion] = selectedOption;
}

function nextQuestion() {
    if (!appState.assessmentAnswers[appState.currentQuestion]) {
        showNotification('Please select an answer', 'warning');
        return;
    }
    
    appState.currentQuestion++;
    showQuestion();
}

function previousQuestion() {
    appState.currentQuestion--;
    showQuestion();
}

function submitAssessment() {
    if (!appState.assessmentAnswers[appState.currentQuestion]) {
        showNotification('Please select an answer', 'warning');
        return;
    }
    
    // Calculate dosha scores
    appState.doshaScores = { vata: 0, pitta: 0, kapha: 0 }; // Reset scores before recalculating
    appState.assessmentAnswers.forEach(answer => {
        appState.doshaScores.vata += answer.vata;
        appState.doshaScores.pitta += answer.pitta;
        appState.doshaScores.kapha += answer.kapha;
    });
    
    // Normalize scores to percentages
    const total = appState.doshaScores.vata + appState.doshaScores.pitta + appState.doshaScores.kapha;
    const doshaResults = {
        vata: Math.round((appState.doshaScores.vata / total) * 100),
        pitta: Math.round((appState.doshaScores.pitta / total) * 100),
        kapha: Math.round((appState.doshaScores.kapha / total) * 100)
    };
    
    appState.currentUser.doshaResults = doshaResults;
    // Update the saved user data in localStorage with the new results
    localStorage.setItem('ayurNutriUser', JSON.stringify(appState.currentUser));
    
    showNotification('Assessment completed successfully!', 'success');
    
    setTimeout(() => {
        showPatientDashboard();
    }, 1500);
}

// Chart Functions
function initializeDoshaChart() {
    const ctx = document.getElementById('dosha-chart');
    if (!ctx) return;

    // Destroy existing chart if it exists to prevent conflicts on retake
    const existingChart = Chart.getChart(ctx);
    if (existingChart) {
        existingChart.destroy();
    }
    
    if (!appState.currentUser?.doshaResults) return;
    
    try {
        const results = appState.currentUser.doshaResults;
        
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Vata', 'Pitta', 'Kapha'],
                datasets: [{
                    data: [results.vata, results.pitta, results.kapha],
                    backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C'],
                    borderWidth: 2,
                    borderColor: '#ffffff'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 10,
                            usePointStyle: true,
                            font: {
                                family: 'General Sans Variable'
                            }
                        }
                    }
                }
            }
        });
    } catch (error) {
        console.log('Dosha chart will display after assessment completion');
    }
}

function initializeNutritionChart() {
    const ctx = document.getElementById('nutrition-chart');
    if (!ctx) return;
    
    try {
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Calories', 'Protein', 'Carbs', 'Fat'],
                datasets: [{
                    label: 'Daily Intake',
                    data: [1800, 60, 200, 50],
                    backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5'],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    } catch (error) {
        console.log('Nutrition chart initialization deferred');
    }
}

function initializeAnalyticsChart() {
    const ctx = document.getElementById('analytics-chart');
    if (!ctx) return;
    
    try {
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'New Users',
                    data: [120, 190, 300, 500, 200, 300],
                    borderColor: '#1FB8CD',
                    backgroundColor: 'rgba(31, 184, 205, 0.1)',
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    } catch (error) {
        console.log('Analytics chart initialization deferred');
    }
}

// Premium Features Functions
function handlePremiumFeature(featureName) {
    if (appState.currentUser?.plan !== 'premium') {
        showNotification(`${featureName} is a premium feature. Upgrade to access!`, 'warning');
        setTimeout(() => upgradeToPremium(), 1000);
        return;
    }
    
    if (featureName.includes('AR Food Scanner')) {
        openArScanner();
    } else if (featureName.includes('IoT')) {
        showNotification('IoT Dashboard would open here', 'success');
    } else if (featureName.includes('Advanced Analytics')) {
        showNotification('Advanced Analytics dashboard would open here', 'success');
    } else if (featureName.includes('Priority Support')) {
        showNotification('Priority Support chat would open here', 'success');
    }
}

function upgradeToPremium() {
    const modal = document.getElementById('upgrade-modal');
    if (modal) modal.classList.remove('hidden');
}

function closeUpgradeModal() {
    const modal = document.getElementById('upgrade-modal');
    if (modal) modal.classList.add('hidden');
}

function processPremiumPayment() {
    if (typeof Razorpay === 'undefined') {
        // Fallback for when Razorpay isn't loaded
        appState.currentUser.plan = 'premium';
        localStorage.setItem('ayurNutriUser', JSON.stringify(appState.currentUser)); // Update localStorage
        showNotification('Payment successful! Welcome to Premium!', 'success');
        closeUpgradeModal();
        updatePremiumFeaturesDisplay();
        return;
    }
    
    const options = {
        key: 'rzp_test_YOUR_KEY_HERE', // Use a real test key
        amount: 99900,
        currency: 'INR',
        name: 'AyurNutri',
        description: 'Premium Plan Upgrade',
        handler: function(response) {
            appState.currentUser.plan = 'premium';
            localStorage.setItem('ayurNutriUser', JSON.stringify(appState.currentUser)); // Update localStorage
            showNotification('Payment successful! Welcome to Premium!', 'success');
            closeUpgradeModal();
            updatePremiumFeaturesDisplay();
        },
        prefill: {
            name: appState.currentUser.name,
            email: appState.currentUser.email
        },
        theme: {
            color: '#023E20'
        }
    };
    
    const razorpay = new Razorpay(options);
    razorpay.open();
}

function updatePremiumFeaturesDisplay() {
    const premiumLock = document.querySelector('.premium-lock');
    if (premiumLock && appState.currentUser?.plan === 'premium') {
        premiumLock.textContent = '✓ Unlocked';
        premiumLock.style.background = 'var(--success)';
        
        const upgradeBtn = document.querySelector('.premium-card .btn-primary');
        if (upgradeBtn) {
            upgradeBtn.textContent = 'Access Features';
            upgradeBtn.onclick = () => showNotification('Premium features now available!', 'success');
        }
    }
    
    // Update plan badge
    const planEl = document.getElementById('patient-plan');
    if (planEl && appState.currentUser?.plan === 'premium') {
        planEl.textContent = 'Premium Plan';
        planEl.style.background = 'var(--success)';
        planEl.style.color = 'var(--white)';
    }
}

// AR Scanner Functions
function openArScanner() {
    if (appState.currentUser?.plan !== 'premium') {
        showNotification('🔒 AR Scanner is a premium feature. Please upgrade to access!', 'warning');
        setTimeout(() => upgradeToPremium(), 1500);
        return;
    }
    
    hideAllPages();
    addToHistory('ar-scanner');
    document.getElementById('ar-scanner').classList.remove('hidden');
}

function scanFood() {
    showLoading();
    setTimeout(() => {
        hideLoading();
        const results = document.getElementById('scan-results');
        if (results) {
            results.classList.remove('hidden');
        }
        showNotification('Food scanned successfully!', 'success');
    }, 2000);
}

function closeArScanner() {
    showPatientDashboard();
}

// Patient Dashboard Functions
function viewFullDietPlan() {
    showNotification('Comprehensive diet plan would open here', 'info');
}

function startYoga() {
    showNotification('Starting yoga session...', 'success');
}

function viewSchedule() {
    showNotification('Yoga schedule would open here', 'info');
}

function viewNutritionDetails() {
    showNotification('Detailed nutrition analysis would open here', 'info');
}

function logProgress() {
    showNotification('Progress logging form would open here', 'info');
}

// Dietitian Dashboard Functions
function loadPatientsList() {
    const container = document.getElementById('patients-list');
    if (!container) return;
    
    container.innerHTML = samplePatients.map(patient => `
        <div class="patient-item" onclick="viewPatient(${patient.id})">
            <div class="patient-info">
                <h4>${patient.name}</h4>
                <p>Age: ${patient.age} | Weight: ${patient.weight}kg | Primary Dosha: ${patient.primaryDosha}</p>
                <p>Last Visit: ${patient.lastVisit}</p>
            </div>
            <div class="patient-actions">
                <button class="btn btn-outline btn-sm" onclick="event.stopPropagation(); viewPatient(${patient.id})">View</button>
                <button class="btn btn-primary btn-sm" onclick="event.stopPropagation(); createDietPlanForPatient(${patient.id})">Diet Plan</button>
            </div>
        </div>
    `).join('');
}

function addPatient() {
    showNotification('Add patient form would open here', 'info');
}

function viewPatient(id) {
    const patient = samplePatients.find(p => p.id === id);
    if (patient) {
        showNotification(`Viewing details for ${patient.name}`, 'info');
    }
}

function createDietPlan() {
    showLoading();
    setTimeout(() => {
        hideLoading();
        showNotification('Diet plan creation interface would open here', 'success');
    }, 1000);
}

function createDietPlanForPatient(id) {
    const patient = samplePatients.find(p => p.id === id);
    if (patient) {
        showLoading();
        setTimeout(() => {
            hideLoading();
            showNotification(`Diet plan created successfully for ${patient.name}`, 'success');
        }, 1000);
    }
}

function scheduleConsultation() {
    showNotification('Consultation scheduling interface would open here', 'info');
}

function generateReport() {
    showNotification('Generating comprehensive report...', 'info');
    showLoading();
    setTimeout(() => {
        hideLoading();
        showNotification('Report generated successfully!', 'success');
    }, 2000);
}

// Admin Dashboard Functions
function verifyDietitian(id) {
    showNotification('Dietitian verified successfully!', 'success');
    const pendingList = document.getElementById('pending-verifications');
    if (pendingList) {
        pendingList.innerHTML = '<p style="color: var(--text-secondary); text-align: center; padding: var(--space-lg);">No pending verifications</p>';
    }
}

function rejectDietitian(id) {
    showNotification('Dietitian application rejected', 'warning');
    const pendingList = document.getElementById('pending-verifications');
    if (pendingList) {
        pendingList.innerHTML = '<p style="color: var(--text-secondary); text-align: center; padding: var(--space-lg);">No pending verifications</p>';
    }
}

function manageUsers() {
    showNotification('User management interface would open here', 'info');
}

function viewPaymentDetails() {
    showNotification('Payment details interface would open here', 'info');
}

// Search Functionality
function setupSearchFunctionality() {
    const searchInput = document.getElementById('patient-search');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            const patients = document.querySelectorAll('.patient-item');
            
            patients.forEach(patient => {
                const name = patient.querySelector('h4').textContent.toLowerCase();
                if (name.includes(searchTerm)) {
                    patient.style.display = 'flex';
                } else {
                    patient.style.display = 'none';
                }
            });
        });
    }
}

// Form Event Listeners
function setupFormListeners() {
    const authForm = document.getElementById('auth-form');
    if (authForm) {
        authForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('auth-email').value;
            const password = document.getElementById('auth-password').value;
            const name = document.getElementById('auth-name').value || email.split('@')[0];
            
            if (!email || !password) {
                showNotification('Please fill in all required fields', 'warning');
                return;
            }
            
            showLoading();
            
            setTimeout(() => {
                hideLoading();
                authenticateUser(appState.currentRole, name, email);
            }, 1000);
        });
    }
}

// Mobile Menu Toggle
function setupMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
}

// Initialize Application
function initializeApp() {
    // Check for a saved user session in localStorage
    const savedUser = localStorage.getItem('ayurNutriUser');
    if (savedUser) {
        appState.currentUser = JSON.parse(savedUser);
        appState.isAuthenticated = true;
        showNotification(`Welcome back, ${appState.currentUser.name}!`, 'success');
        
        // Go directly to the correct dashboard
        if (appState.currentUser.role === 'patient') {
            showPatientDashboard();
        } else if (appState.currentUser.role === 'dietitian') {
            showDietitianDashboard();
        } else if (appState.currentUser.role === 'admin') {
            showAdminDashboard();
        }
    } else {
        // If no user is saved, show the homepage
        showHomepage();
        // Show welcome message only for new visitors
        setTimeout(() => {
            showNotification('Welcome to AyurNutri! Choose your role to get started.', 'info');
        }, 1000);
    }
    
    // Setup event listeners
    setupFormListeners();
    setupMobileMenu();
    
    // Log demo credentials
    console.log('=== AyurNutri Demo Credentials ===');
    console.log('Patient: patient@demo.com / password');
    console.log('Dietitian: dietitian@demo.com / password'); 
    console.log('Admin: admin@demo.com / password');
    console.log('===================================');
}

// Improved Error Handling
window.addEventListener('error', function(e) {
    console.error('Application error:', e.error);
    // Only show user-facing errors for critical issues
    if (e.error && e.error.message && !e.error.message.includes('Chart')) {
        showNotification('An error occurred. Please try again.', 'error');
    }
});

// Global Function Exports
window.showAuth = showAuth;
window.closeAuth = closeAuth;
window.toggleAuthMode = toggleAuthMode;
window.googleLogin = googleLogin;
window.logout = logout;
window.goBack = goBack;
window.showLoginOptions = showLoginOptions;
// learnMore is removed as it's no longer used by the button
window.retakeDosha = retakeDosha;
window.selectOption = selectOption;
window.nextQuestion = nextQuestion;
window.previousQuestion = previousQuestion;
window.submitAssessment = submitAssessment;
window.handlePremiumFeature = handlePremiumFeature;
window.viewFullDietPlan = viewFullDietPlan;
window.startYoga = startYoga;
window.viewSchedule = viewSchedule;
window.viewNutritionDetails = viewNutritionDetails;
window.logProgress = logProgress;
window.upgradeToPremium = upgradeToPremium;
window.closeUpgradeModal = closeUpgradeModal;
window.processPremiumPayment = processPremiumPayment;
window.openArScanner = openArScanner;
window.scanFood = scanFood;
window.closeArScanner = closeArScanner;
window.addPatient = addPatient;
window.viewPatient = viewPatient;
window.createDietPlan = createDietPlan;
window.createDietPlanForPatient = createDietPlanForPatient;
window.scheduleConsultation = scheduleConsultation;
window.generateReport = generateReport;
window.verifyDietitian = verifyDietitian;
window.rejectDietitian = rejectDietitian;
window.manageUsers = manageUsers;
window.viewPaymentDetails = viewPaymentDetails;

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeApp);
