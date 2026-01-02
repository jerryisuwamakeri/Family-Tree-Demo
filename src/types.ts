// Type definitions for the Family Tree application

export interface FamilyMember {
  email: string;
  progenitor: string;
  compound: string;
  name: string;
  middleName: string;
  fatherName: string;
  motherName: string;
  dateOfBirth: string;
  currentLocation: string;
  education: string;
  phone: string;
  occupation: string;
  spouses: string;
  offsprings: string;
  summary: string;
}

export interface UserData {
  name?: string;
  email: string;
  password?: string;
  registeredAt?: string;
  loginAt?: string;
}

export interface ThemeConfig {
  theme: 'light' | 'dark';
}
