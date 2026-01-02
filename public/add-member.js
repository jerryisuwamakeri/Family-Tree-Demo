export class AddMemberForm {
    constructor() {
        this.form = document.getElementById('memberForm');
        this.init();
    }
    init() {
        // Form is ready
    }
    submitForm() {
        if (!this.form || !this.form.checkValidity()) {
            this.form?.reportValidity();
            return;
        }
        const formData = {
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
    getInputValue(id) {
        const element = document.getElementById(id);
        return element ? element.value : '';
    }
    getStoredMembers() {
        const stored = localStorage.getItem('familyMembers');
        return stored ? JSON.parse(stored) : [];
    }
}
export class MobileMenu {
    constructor(sidebarId, overlayId) {
        this.sidebar = document.getElementById(sidebarId);
        this.overlay = document.getElementById(overlayId);
    }
    toggle() {
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
    window.submitForm = () => addMemberForm.submitForm();
    window.toggleMobileSidebar = () => mobileMenu.toggle();
});
//# sourceMappingURL=add-member.js.map