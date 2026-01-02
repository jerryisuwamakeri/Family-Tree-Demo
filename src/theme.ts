// Theme management for dark/light mode

export class ThemeManager {
  private htmlElement: HTMLElement;
  private readonly storageKey = 'theme';

  constructor() {
    this.htmlElement = document.documentElement;
    this.init();
  }

  private init(): void {
    const currentTheme = this.getTheme();
    this.applyTheme(currentTheme);
  }

  public getTheme(): 'light' | 'dark' {
    const stored = localStorage.getItem(this.storageKey);
    return (stored === 'dark' ? 'dark' : 'light') as 'light' | 'dark';
  }

  public setTheme(theme: 'light' | 'dark'): void {
    localStorage.setItem(this.storageKey, theme);
    this.applyTheme(theme);
  }

  public toggleTheme(): void {
    const currentTheme = this.getTheme();
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    this.setTheme(newTheme);
  }

  private applyTheme(theme: 'light' | 'dark'): void {
    if (theme === 'dark') {
      this.htmlElement.classList.add('dark');
    } else {
      this.htmlElement.classList.remove('dark');
    }
  }

  public setupToggleButton(buttonId: string): void {
    const button = document.getElementById(buttonId);
    if (button) {
      button.addEventListener('click', () => this.toggleTheme());
    }
  }
}
