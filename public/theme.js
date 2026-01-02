// Theme management for dark/light mode
export class ThemeManager {
    constructor() {
        this.storageKey = 'theme';
        this.htmlElement = document.documentElement;
        this.init();
    }
    init() {
        const currentTheme = this.getTheme();
        this.applyTheme(currentTheme);
    }
    getTheme() {
        const stored = localStorage.getItem(this.storageKey);
        return (stored === 'dark' ? 'dark' : 'light');
    }
    setTheme(theme) {
        localStorage.setItem(this.storageKey, theme);
        this.applyTheme(theme);
    }
    toggleTheme() {
        const currentTheme = this.getTheme();
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        this.setTheme(newTheme);
    }
    applyTheme(theme) {
        if (theme === 'dark') {
            this.htmlElement.classList.add('dark');
        }
        else {
            this.htmlElement.classList.remove('dark');
        }
    }
    setupToggleButton(buttonId) {
        const button = document.getElementById(buttonId);
        if (button) {
            button.addEventListener('click', () => this.toggleTheme());
        }
    }
}
//# sourceMappingURL=theme.js.map