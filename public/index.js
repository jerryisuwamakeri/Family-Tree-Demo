// Index page functionality
import { ThemeManager } from './theme';
export class IndexPage {
    constructor() {
        this.themeManager = new ThemeManager();
        this.init();
    }
    init() {
        this.setupThemeToggle();
    }
    setupThemeToggle() {
        const themeToggle = document.getElementById('theme-toggle');
        const icon = themeToggle?.querySelector('.material-symbols-outlined');
        if (themeToggle && icon) {
            // Update icon based on current theme
            const currentTheme = this.themeManager.getTheme();
            icon.textContent = currentTheme === 'dark' ? 'light_mode' : 'dark_mode';
            themeToggle.addEventListener('click', () => {
                this.themeManager.toggleTheme();
                const newTheme = this.themeManager.getTheme();
                icon.textContent = newTheme === 'dark' ? 'light_mode' : 'dark_mode';
            });
        }
    }
}
// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    new IndexPage();
});
//# sourceMappingURL=index.js.map