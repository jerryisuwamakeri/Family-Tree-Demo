# Imam Abdullahi Maliki Family Tree

A comprehensive web application for managing and visualizing the Imam Abdullahi Maliki family genealogy, featuring 12 progenitor lines across three compounds (Oke Odan, Iwaye, and Oke Yara).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone)

## 🚀 Quick Start

### Local Development

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Serve locally
npx serve public
```

Open http://localhost:3000

### Deploy to Vercel

See [VERCEL_DEPLOYMENT.md](VERCEL_DEPLOYMENT.md) for complete deployment instructions.

```bash
# Quick deploy
vercel --prod
```

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
- **Vercel** - Static site hosting and deployment

## Setup Instructions

### Prerequisites

- Node.js (v18 or higher)
- Git (for deployment)

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd Famtree
```

2. Install dependencies:
```bash
npm install
```

3. Build the project:
```bash
npm run build
```

4. Serve locally:
```bash
npx serve public
```

## Project Structure

```
Famtree/
├── public/              # Static files for deployment (auto-generated)
│   ├── *.html          # All HTML pages
│   ├── *.js            # Compiled TypeScript
│   └── assets/         # Images and media
├── src/                 # TypeScript source files
│   ├── types.ts        # Type definitions
│   ├── theme.ts        # Theme management
│   ├── auth.ts         # Authentication logic
│   ├── add-member.ts   # Add member form
│   ├── dashboard.ts    # Dashboard functionality
│   ├── tree.ts         # Tree visualization
│   └── index.ts        # Landing page
├── dist/                # Compiled JavaScrprepare for deployment
- `npm run watch` - Watch mode for development
- `npm run dev` - Alias for watch mode
- `npm run vercel-build` - Production build for Vercel

### Deployment

See [VERCEL_DEPLOYMENT.md](VERCEL_DEPLOYMENT.md) for complete Vercel deployment guide.

Quick deploy:
```bash
vercel --prod
```iguration
├── tsconfig.json        # TypeScript configuration
└── package.json   n     # TypeScript configuration
└── package.json      # Project dependencies
The application consists of 9 pages (all in `public/` after build)

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
