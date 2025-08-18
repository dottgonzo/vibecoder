# vibecodernode

A Node.js project template initializer that creates new projects with a standardized structure and AGENTS.mdc rules file.

## Installation

```bash
npm install -g vibecodernode
```

## Usage

### Using npx (recommended)

```bash
npx vibecodernode <project-name>
```

### Using globally installed package

```bash
vibecodernode <project-name>
```

### Example

```bash
npx vibecodernode my-awesome-project
```

This will create a new directory called `my-awesome-project` with the following structure:

```
my-awesome-project/
├── package.json
├── README.md
├── CHANGELOG.md
├── AGENTS.mdc
└── src/
    ├── index.ts
    ├── interfaces.ts
    └── main.ts
```

## Features

- ✅ Creates standardized project structure
- ✅ Generates package.json with proper configuration
- ✅ Sets up TypeScript project with interfaces
- ✅ Creates README.md with basic documentation
- ✅ Creates CHANGELOG.md for version tracking
- ✅ Generates AGENTS.mdc rules file for AI coding assistants
- ✅ Supports Node.js 24 native TypeScript support
- ✅ Uses Prettier for code formatting

## Development

```bash
# Install dependencies
npm install

# Run tests
npm test

# Release new version
npm run release:patch  # or release:minor, release:major
```

## Project Structure

The generated project follows the vibecoder project specifications:

- **TypeScript**: Uses Node.js 24 native TypeScript support (no compilation needed)
- **Architecture**: Library-first design with functions exportable from `src/index.ts`
- **Code Quality**: Strict typing, proper error handling, async/await patterns
- **Documentation**: Comprehensive README and CHANGELOG
- **AI Integration**: AGENTS.mdc file for AI coding assistant rules
