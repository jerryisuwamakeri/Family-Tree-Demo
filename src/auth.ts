// Authentication logic
import type { UserData } from './types';

export class AuthManager {
  private currentMode: 'login' | 'signup' = 'login';

  constructor() {
    this.init();
  }

  private init(): void {
    this.setupEventListeners();
  }

  private setupEventListeners(): void {
    const form = document.getElementById('authForm') as HTMLFormElement;
    if (form) {
      form.addEventListener('submit', (e) => this.handleSubmit(e));
    }
  }

  public switchTab(mode: 'login' | 'signup'): void {
    this.currentMode = mode;

    const loginTab = document.getElementById('loginTab');
    const signupTab = document.getElementById('signupTab');
    const formTitle = document.getElementById('formTitle');
    const formSubtitle = document.getElementById('formSubtitle');
    const nameField = document.getElementById('nameField') as HTMLElement;
    const confirmPasswordField = document.getElementById('confirmPasswordField') as HTMLElement;
    const termsField = document.getElementById('termsField') as HTMLElement;
    const forgotPassword = document.getElementById('forgotPassword') as HTMLElement;
    const submitBtn = document.getElementById('submitBtn') as HTMLButtonElement;

    if (!loginTab || !signupTab || !formTitle || !formSubtitle || !submitBtn) return;

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
    } else {
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

  private handleSubmit(event: Event): void {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const name = formData.get('name') as string;
    const confirmPassword = formData.get('confirm-password') as string;
    const terms = formData.get('terms') as string;

    const isSignup = this.currentMode === 'signup';

    if (isSignup) {
      if (!this.validateSignup(name, email, password, confirmPassword, terms)) {
        return;
      }

      const userData: UserData = {
        name,
        email,
        password,
        registeredAt: new Date().toISOString()
      };

      localStorage.setItem('currentUser', JSON.stringify(userData));
      alert('Account created successfully!');
    } else {
      if (!this.validateLogin(email, password)) {
        return;
      }

      const storedUser = localStorage.getItem('currentUser');
      if (storedUser) {
        const user: UserData = JSON.parse(storedUser);
        if (user.email === email && user.password === password) {
          alert('Login successful!');
        } else {
          alert('Invalid email or password');
          return;
        }
      } else {
        const userData: UserData = {
          email,
          loginAt: new Date().toISOString()
        };
        localStorage.setItem('currentUser', JSON.stringify(userData));
        alert('Login successful!');
      }
    }

    window.location.href = 'dashboard.html';
  }

  private validateSignup(
    name: string,
    email: string,
    password: string,
    confirmPassword: string,
    terms: string
  ): boolean {
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

  private validateLogin(email: string, password: string): boolean {
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
  (window as any).switchTab = (mode: 'login' | 'signup') => authManager.switchTab(mode);
});
