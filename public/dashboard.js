// Dashboard functionality
import { ThemeManager } from './theme';
export class Dashboard {
    constructor() {
        // Initialize theme manager
        new ThemeManager();
        this.sidebar = document.getElementById('sidebar');
        this.overlay = document.getElementById('mobileMenuOverlay');
        this.init();
    }
    init() {
        // Dashboard is ready
    }
    toggleMobileMenu() {
        if (this.sidebar && this.overlay) {
            this.sidebar.classList.toggle('-translate-x-full');
            this.overlay.classList.toggle('hidden');
        }
    }
}
// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    const dashboard = new Dashboard();
    // Expose function globally for onclick handlers
    window.toggleMobileMenu = () => dashboard.toggleMobileMenu();
});
//# sourceMappingURL=dashboard.js.map