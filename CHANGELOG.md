# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Task 1 implementation: Template initializer for npx boilerplate installation
- Created `src/init.ts` as the main entry point for project initialization
- Updated `package.json` to enable npx installation with `vibecodernode` command
- Implemented AGENTS.mdc file generation during project creation
- Added project structure generation with TypeScript files
- Created comprehensive project initialization logic
- Added validation for project names (lowercase, numbers, hyphens only)
- Implemented proper error handling and user feedback
- Updated documentation to reflect npx functionality

### Changed
- Updated package.json bin configuration to use `vibecodernode` command
- Modified import statements to use `.js` extensions for ES modules
- Updated README.md with new npx usage instructions
- Removed @types/node dependency (not needed with Node.js 24 native TypeScript support)

### Deprecated
- N/A

### Removed
- N/A

### Fixed
- Fixed template literal syntax issues in init.ts
- Corrected import paths for ES module compatibility

### Security
- N/A

## [0.0.0] - 2024-01-XX

### Added
- Initial project initialization
- TypeScript project structure
- Node.js 24 compatibility with native TypeScript support
- Basic boot function for application initialization
- Prettier integration for code formatting
- Project documentation and guidelines
- ISC license configuration

---

## Version History

- **0.0.0**: Initial project setup and foundation
