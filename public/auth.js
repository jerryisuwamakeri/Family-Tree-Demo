export class AuthManager {
    constructor() {
        this.currentMode = 'login';
        this.init();
    }
    init() {
        this.setupEventListeners();
    }
    setupEventListeners() {
        const form = document.getElementById('authForm');
        if (form) {
            form.addEventListener('submit', (e) => this.handleSubmit(e));
        }
    }
    switchTab(mode) {
        this.currentMode = mode;
        const loginTab = document.getElementById('loginTab');
        const signupTab = document.getElementById('signupTab');
        const formTitle = document.getElementById('formTitle');
        const formSubtitle = document.getElementById('formSubtitle');
        const nameField = document.getElementById('nameField');
        const confirmPasswordField = document.getElementById('confirmPasswordField');
        const termsField = document.getElementById('termsField');
        const forgotPassword = document.getElementById('forgotPassword');
        const submitBtn = document.getElementById('submitBtn');
        if (!loginTab || !signupTab || !formTitle || !formSubtitle || !submitBtn)
            return;
        const activeClasses = ['border-primary', 'text-primary', 'dark:text-primary'];
        const inactiveClasses = [
            'border-transparent',
            'text-slate-500',
            'hover:border-slate-300',
            'hover:text-slate-700',
            'dark:text-slate-400',
            'dark:hover:text-slate-300'
        ];
        if (mode === 'login') {
            loginTab.classList.add(...activeClasses);
            loginTab.classList.remove(...inactiveClasses);
            signupTab.classList.remove(...activeClasses);
            signupTab.classList.add(...inactiveClasses);
            formTitle.textContent = 'Welcome back';
            formSubtitle.textContent = 'Sign in to access your family tree';
            nameField.style.display = 'none';
            confirmPasswordField.style.display = 'none';
            termsField.style.display = 'none';
            forgotPassword.style.display = 'flex';
            submitBtn.textContent = 'Sign In';
        }
        else {
            signupTab.classList.add(...activeClasses);
            signupTab.classList.remove(...inactiveClasses);
            loginTab.classList.remove(...activeClasses);
            loginTab.classList.add(...inactiveClasses);
            formTitle.textContent = 'Create an account';
            formSubtitle.textContent = 'Join your family tree today';
            nameField.style.display = 'block';
            confirmPasswordField.style.display = 'block';
            termsField.style.display = 'flex';
            forgotPassword.style.display = 'none';
            submitBtn.textContent = 'Create Account';
        }
    }
    handleSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const email = formData.get('email');
        const password = formData.get('password');
        const name = formData.get('name');
        const confirmPassword = formData.get('confirm-password');
        const terms = formData.get('terms');
        const isSignup = this.currentMode === 'signup';
        if (isSignup) {
            if (!this.validateSignup(name, email, password, confirmPassword, terms)) {
                return;
            }
            const userData = {
                name,
                email,
                password,
                registeredAt: new Date().toISOString()
            };
            localStorage.setItem('currentUser', JSON.stringify(userData));
            alert('Account created successfully!');
        }
        else {
            if (!this.validateLogin(email, password)) {
                return;
            }
            const storedUser = localStorage.getItem('currentUser');
            if (storedUser) {
                const user = JSON.parse(storedUser);
                if (user.email === email && user.password === password) {
                    alert('Login successful!');
                }
                else {
                    alert('Invalid email or password');
                    return;
                }
            }
            else {
                const userData = {
                    email,
                    loginAt: new Date().toISOString()
                };
                localStorage.setItem('currentUser', JSON.stringify(userData));
                alert('Login successful!');
            }
        }
        window.location.href = 'dashboard.html';
    }
    validateSignup(name, email, password, confirmPassword, terms) {
        if (!name || name.trim() === '') {
            alert('Please enter your full name');
            return false;
        }
        if (!email || !email.includes('@')) {
            alert('Please enter a valid email address');
            return false;
        }
        if (!password || password.length < 6) {
            alert('Password must be at least 6 characters long');
            return false;
        }
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return false;
        }
        if (!terms) {
            alert('Please agree to the Terms of Service and Privacy Policy');
            return false;
        }
        return true;
    }
    validateLogin(email, password) {
        if (!email || !email.includes('@')) {
            alert('Please enter a valid email address');
            return false;
        }
        if (!password) {
            alert('Please enter your password');
            return false;
        }
        return true;
    }
}
// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    const authManager = new AuthManager();
    // Expose switchTab function globally for onclick handlers
    window.switchTab = (mode) => authManager.switchTab(mode);
});
//# sourceMappingURL=auth.js.map