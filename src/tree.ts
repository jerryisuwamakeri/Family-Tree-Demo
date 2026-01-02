// Tree visualization functionality
import { ThemeManager } from './theme';

export class TreeVisualization {
  private sidebar: HTMLElement | null;
  private overlay: HTMLElement | null;

  constructor() {
    // Initialize theme manager
    new ThemeManager();
    this.sidebar = document.getElementById('treeSidebar');
    this.overlay = document.getElementById('sidebarOverlay');
    this.init();
  }

  private init(): void {
    // Tree visualization is ready
  }

  public toggleSidebar(): void {
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
  (window as any).toggleSidebar = () => treeViz.toggleSidebar();
});
