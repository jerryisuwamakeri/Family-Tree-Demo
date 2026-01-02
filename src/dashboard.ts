// Dashboard functionality
import { ThemeManager } from './theme';

export class Dashboard {
  private sidebar: HTMLElement | null;
  private overlay: HTMLElement | null;

  constructor() {
    // Initialize theme manager
    new ThemeManager();
    this.sidebar = document.getElementById('sidebar');
    this.overlay = document.getElementById('mobileMenuOverlay');
    this.init();
  }

  private init(): void {
    // Dashboard is ready
  }

  public toggleMobileMenu(): void {
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
  (window as any).toggleMobileMenu = () => dashboard.toggleMobileMenu();
});
