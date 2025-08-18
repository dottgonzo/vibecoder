# vibecoder

A **template library** for Node.js TypeScript projects that provides a foundation for building scalable applications. This template is designed to be customized and extended according to your specific project needs.

## ⚠️ Template Notice

**This is a template project that requires customization before use.** The current implementation contains placeholder code and configuration that must be replaced with your actual application logic.

## Features

- **TypeScript Template**: Built with TypeScript and runs on Node.js 24 with native TypeScript support
- **Library Ready**: Can be used as a library by importing functions from `src/index.ts`
- **Code Quality**: Uses Prettier for consistent code formatting
- **Logging**: Implements proper log levels (info, warn, log, error)
- **Template Structure**: Pre-configured project structure ready for customization

## Prerequisites

- Node.js 24 or higher
- npm or yarn package manager

## Getting Started

### 1. Clone and Customize

```bash
# Clone the template repository
git clone <repository-url>
cd vibecoder

# Install dependencies
npm install
```

### 2. Required Customizations

Before using this template, you **must** customize the following:

#### Package Configuration
- Update `package.json`:
  - `name`: Change to your project name
  - `description`: Add your project description
  - `author`: Add your name/organization
  - `repository`: Update with your repository URL
  - `keywords`: Add relevant keywords for your project

#### Application Logic
- **`src/index.ts`**: Replace the placeholder `boot()` function with your actual application logic
- **`src/main.ts`**: Customize the application entry point
- **`src/interfaces.ts`**: Define your application-specific types and interfaces

#### Documentation
- **`README.md`**: Update with your project-specific information
- **`CHANGELOG.md`**: Start fresh with your project's version history
- **`AGENTS.mdc`**: Customize agent rules for your project needs

#### Project Identity
- **Project Name**: Replace "vibecoder" with your project name throughout the codebase
- **Repository URL**: Update all placeholder URLs
- **License**: Verify the license matches your requirements

## Usage

### As a Library (After Customization)

```typescript
import { boot } from 'your-project-name';

// Initialize your customized application
await boot();
```

### Running the Application (After Customization)

```bash
# Run your customized application
node src/main.ts
```

## Development

### Project Structure

```
vibecoder/
├── src/
│   ├── index.ts      # Main library exports (customize this)
│   ├── main.ts       # Application entry point (customize this)
│   └── interfaces.ts # Type definitions (customize this)
├── package.json      # Project configuration (customize this)
├── AGENTS.mdc        # Project rules and guidelines (customize this)
├── README.md         # This file (customize this)
└── CHANGELOG.md      # Version history (start fresh)
```

### Code Style

This template follows strict coding guidelines:

- All comments must be written in English
- All logs must be written in English
- Use appropriate log levels (console.info, console.warn, console.log, console.error)
- Code is formatted using Prettier
- All types and interfaces must be defined in `src/interfaces.ts`

### Available Scripts

```bash
# Run tests (implement your tests)
npm test

# Format code with Prettier
npx prettier --write .
```

## Template Customization Checklist

Before using this template in production:

- [ ] Update `package.json` with your project details
- [ ] Replace placeholder functions in `src/index.ts`
- [ ] Customize application logic in `src/main.ts`
- [ ] Define your types in `src/interfaces.ts`
- [ ] Update project name throughout the codebase
- [ ] Customize `README.md` with your project information
- [ ] Start fresh with `CHANGELOG.md`
- [ ] Update `AGENTS.mdc` for your project rules
- [ ] Verify license compliance
- [ ] Test your customized implementation

## Contributing

1. Follow the project rules outlined in `AGENTS.mdc`
2. Ensure all code is properly formatted with Prettier
3. Update both `README.md` and `CHANGELOG.md` when making modifications
4. Write all comments and logs in English
5. Define all types in `src/interfaces.ts`

## License

ISC License - see package.json for details.

## Version

Current version: 0.0.0 (Template Version)

---

**Note**: This is a template project. After customization, start your version history from 1.0.0.
