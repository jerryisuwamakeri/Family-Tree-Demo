// Tree visualization functionality
import { ThemeManager } from './theme';
export class TreeVisualization {
    constructor() {
        // Initialize theme manager
        new ThemeManager();
        this.sidebar = document.getElementById('treeSidebar');
        this.overlay = document.getElementById('sidebarOverlay');
        this.init();
    }
    init() {
        // Tree visualization is ready
    }
    toggleSidebar() {
        if (this.sidebar && this.overlay) {
            this.sidebar.classList.toggle('translate-x-full');
            this.overlay.classList.toggle('hidden');
        }
    }
}
// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    const treeViz = new TreeVisualization();
    // Expose function globally for onclick handlers
    window.toggleSidebar = () => treeViz.toggleSidebar();
});
//# sourceMappingURL=tree.js.map