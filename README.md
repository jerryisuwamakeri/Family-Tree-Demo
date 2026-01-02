# Imam Abdullahi Maliki Family Tree

A comprehensive web application for managing and visualizing the Imam Abdullahi Maliki family genealogy, featuring 12 progenitor lines across three compounds (Oke Odan, Iwaye, and Oke Yara).

## Features

- **Interactive Family Tree Visualization** - Explore family connections across generations
- **12 Progenitor Lineages** - Track descent from the founding ancestors
- **Compound Organization** - Members organized by Oke Odan, Iwaye, and Oke Yara
- **Member Profiles** - Detailed information including lineage documentation
- **Search & Discovery** - Advanced search by progenitor, compound, generation
- **Dark Mode Support** - Full theme customization
- **Mobile Responsive** - Works seamlessly on all devices
- **Authentication System** - Secure login and member management

## Technology Stack

- **TypeScript** - Type-safe JavaScript for better development
- **HTML5 & Tailwind CSS** - Modern, responsive design
- **Material Symbols** - Google's icon system
- **LocalStorage** - Client-side data persistence

## Setup Instructions

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Build the TypeScript code:
```bash
npm run build
```

3. For development with auto-recompilation:
```bash
npm run watch
```

## Development

The project structure:

```
Famtree/
├── src/              # TypeScript source files
│   ├── types.ts      # Type definitions
│   ├── theme.ts      # Theme management
│   ├── auth.ts       # Authentication logic
│   ├── add-member.ts # Add member form
│   ├── dashboard.ts  # Dashboard functionality
│   └── tree.ts       # Tree visualization
├── assets/           # Images and media
├── dist/             # Compiled JavaScript (generated)
├── *.html            # Application pages
├── tsconfig.json     # TypeScript configuration
└── package.json      # Project dependencies
```

### Building

- `npm run build` - Compile TypeScript and copy to root
- `npm run watch` - Watch mode for development
- `npm run dev` - Alias for watch mode

## HTML Pages

After building, open any HTML file in a browser:

- `index.html` - Landing page
- `dashboard.html` - Main dashboard with progenitor showcase
- `tree.html` - Family tree visualization
- `add_member.html` - Add new family member
- `search.html` - Search and filter members
- `profile.html` - Individual member profile
- `calendar.html` - Family events calendar
- `manage_codes.html` - Settings
- `auth.html` - Login/signup

## Featured Progenitors

1. **Imam Abdullahi Maliki** - Main Progenitor & Family Patriarch
2. **Ambassador Lamidi Alabi Maliki** - Diplomat (Oke Yara)
3. **Alhaja Memunat Wuraola Maliki (Iya Ilawe)** - Matriarch (Iwaye)
4. **Alhaji Mustapha Adedokun Maliki** - Scholar (Oke Yara)

Plus 8 other founding progenitors across the three compounds.

## Compounds

- **Oke Odan** - 1 progenitor lineage
- **Iwaye** - 4 progenitor lineages
- **Oke Yara** - 7 progenitor lineages

## License

MIT

## Contact

For questions or contributions, please contact the family tree administrator.
