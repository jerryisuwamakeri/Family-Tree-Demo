// Add family member form logic
import type { FamilyMember } from './types';

export class AddMemberForm {
  private form: HTMLFormElement | null;

  constructor() {
    this.form = document.getElementById('memberForm') as HTMLFormElement;
    this.init();
  }

  private init(): void {
    // Form is ready
  }

  public submitForm(): void {
    if (!this.form || !this.form.checkValidity()) {
      this.form?.reportValidity();
      return;
    }

    const formData: FamilyMember = {
      email: this.getInputValue('email'),
      progenitor: this.getInputValue('progenitor'),
      compound: this.getInputValue('compound'),
      name: this.getInputValue('name'),
      middleName: this.getInputValue('middleName'),
      fatherName: this.getInputValue('fatherName'),
      motherName: this.getInputValue('motherName'),
      dateOfBirth: this.getInputValue('dateOfBirth'),
      currentLocation: this.getInputValue('currentLocation'),
      education: this.getInputValue('education'),
      phone: this.getInputValue('phone'),
      occupation: this.getInputValue('occupation'),
      spouses: this.getInputValue('spouses'),
      offsprings: this.getInputValue('offsprings'),
      summary: this.getInputValue('summary')
    };

    // Store in localStorage (in production, this would be sent to a server)
    const members = this.getStoredMembers();
    members.push(formData);
    localStorage.setItem('familyMembers', JSON.stringify(members));

    alert('Family member added successfully!');
    window.location.href = 'profile.html';
  }

  private getInputValue(id: string): string {
    const element = document.getElementById(id) as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
    return element ? element.value : '';
  }

  private getStoredMembers(): FamilyMember[] {
    const stored = localStorage.getItem('familyMembers');
    return stored ? JSON.parse(stored) : [];
  }
}

export class MobileMenu {
  private sidebar: HTMLElement | null;
  private overlay: HTMLElement | null;

  constructor(sidebarId: string, overlayId: string) {
    this.sidebar = document.getElementById(sidebarId);
    this.overlay = document.getElementById(overlayId);
  }

  public toggle(): void {
    if (this.sidebar && this.overlay) {
      this.sidebar.classList.toggle('-translate-x-full');
      this.overlay.classList.toggle('hidden');
    }
  }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  const addMemberForm = new AddMemberForm();
  const mobileMenu = new MobileMenu('mobileSidebar', 'mobileSidebarOverlay');

  // Expose functions globally for onclick handlers
  (window as any).submitForm = () => addMemberForm.submitForm();
  (window as any).toggleMobileSidebar = () => mobileMenu.toggle();
});
