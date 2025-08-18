#!/usr/bin/env node

import { fileURLToPath } from 'url';
import { dirname, join, resolve } from 'path';
import { existsSync, mkdirSync, writeFileSync, readFileSync } from 'fs';
import { ProjectConfig } from './interfaces.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function initializeProject(projectName: string, config: ProjectConfig) {
    console.log(`🚀 Initializing project: ${projectName}`);
    
    try {
        // Create project directory
        const projectPath = resolve(process.cwd(), projectName);
        
        if (existsSync(projectPath)) {
            console.error(`❌ Directory ${projectName} already exists`);
            process.exit(1);
        }
        
        mkdirSync(projectPath, { recursive: true });
        console.log(`✅ Created project directory: ${projectPath}`);
        
        // Create package.json for the new project
        const packageJson = {
            name: projectName,
            version: "0.0.0",
            description: config.description || "A Node.js project",
            license: config.license || "ISC",
            author: config.author || "",
            type: "module",
            main: "src/index.ts",
            scripts: {
                "test": "echo \"Error: no test specified\" && exit 1",
                "release:patch": "npm version patch && npm run push",
                "release:minor": "npm version minor && npm run push",
                "release:major": "npm version major && npm run push",
                "push": "git push && git push --tags"
            },
            devDependencies: {
                "@types/node": "^24.3.0",
                "prettier": "^3.6.2",
                "prettier-plugin-organize-imports": "^4.2.0"
            }
        };
        
        writeFileSync(
            join(projectPath, 'package.json'),
            JSON.stringify(packageJson, null, 2)
        );
        console.log('✅ Created package.json');
        
        // Create src directory and basic files
        const srcPath = join(projectPath, 'src');
        mkdirSync(srcPath, { recursive: true });
        
        // Create index.ts
        const indexContent = `import { ProjectConfig } from './interfaces.js';

export async function boot() {
    console.log('Booting application...');
}

export function initializeProject(name: string, config: ProjectConfig) {
    console.log(\`Initializing project: \${name}\`);
    // Add your initialization logic here
}
`;
        
        writeFileSync(join(srcPath, 'index.ts'), indexContent);
        console.log('✅ Created src/index.ts');
        
        // Create interfaces.ts
        const interfacesContent = `// interfaces and types file
export interface ProjectConfig {
  name: string;
  description?: string;
  author?: string;
  license?: string;
}
`;
        
        writeFileSync(join(srcPath, 'interfaces.ts'), interfacesContent);
        console.log('✅ Created src/interfaces.ts');
        
        // Create main.ts
        const mainContent = `import { boot } from "./index.js";

boot().then(() => {
    console.log('Boot completed');
}).catch(err => {
    console.error('Boot failed:', err);
    process.exit(1);
});
`;
        
        writeFileSync(join(srcPath, 'main.ts'), mainContent);
        console.log('✅ Created src/main.ts');
        
        // Create AGENTS.mdc file
        const agentsContent = `---
name: Vibecoder
description: Vibecoder Project Boilerplate Specs
globs:
alwaysApply: false
---


# vibecoder Project Role Specification

You are an AI coding assistant working on the vibecoder project. Follow these specifications strictly.

## Project Context

- **Project Type**: TypeScript Node.js application targeting Node.js 24 with native TypeScript support, so never use vanilla js or ts-node and not install external or typescript libs, use only the integrated one in nodejs 24
- **Architecture**: Library-first design with functions exportable from \`src/index.ts\`
- **Language**: All code, comments, logs, and documentation must be in English
- **Formatting**: Use Prettier for all code formatting

## Core Responsibilities

### Code Development
- Write clean, maintainable TypeScript code with strict typing
- Implement proper error handling with try-catch blocks
- Use async/await patterns over raw promises
- Avoid \`any\` types unless absolutely necessary
- Export reusable functions from \`src/index.ts\`
- Avoid using vanilla .js nodejs files, use .ts files in any case
- all Nodejs code live inside src folder, except package.json and package-lock.json

### Documentation Management
- Update README.md to reflect new functionality
- Update CHANGELOG.md for all modifications
- Provide clear usage examples and API documentation
- Maintain consistency across all documentation

### Quality Assurance
- Ensure all code compiles without TypeScript errors
- Implement appropriate logging with correct log levels
- Add meaningful comments for complex logic
- Test functionality before suggesting changes

## Workflow Guidelines

### Before Making Changes
1. Analyze the exact requirements
2. Review existing code to avoid conflicts
3. Plan minimal changes needed
4. Consider impact on other system components

### During Implementation
1. Make incremental, focused changes
2. Follow existing code patterns and style
3. Implement proper error handling
4. Consider edge cases and error conditions

### After Implementation
1. Update README.md with new functionality
2. Add entries to CHANGELOG.md
3. Verify functions are properly exported from \`src/index.ts\`
4. Check for unnecessary dependencies

## Code Standards

### TypeScript Best Practices
\`\`\`typescript
// ✅ Good: Proper typing - Define interfaces in interfaces.ts
interface UserConfig {
  name: string;
  age: number;
  preferences?: string[];
}

// ❌ Avoid: Any types
const data: any = getData();

// ✅ Good: Async/await
async function fetchUser(id: string): Promise<User> {
  try {
    const response = await api.get(\`/users/\${id}\`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('User not found');
  }
}
\`\`\`

### Type Definition Rules
- **Centralized Types**: All interfaces and types consumed by the application must be defined in \`src/interfaces.ts\`
- **Export Strategy**: Export types from interfaces.ts and import them where needed
- **Type Organization**: Group related interfaces together with clear comments
- **Naming Convention**: Use PascalCase for interfaces and types

\`\`\`typescript
// ✅ Good: Define in interfaces.ts
// src/interfaces.ts
export interface UserConfig {
  name: string;
  age: number;
  preferences?: string[];
}

export interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}

// ✅ Good: Import and use
// src/services/UserService.ts
import { UserConfig, ApiResponse } from '../interfaces.js';

async function fetchUser(id: string): Promise<ApiResponse<UserConfig>> {
  // implementation
}
\`\`\`

### Logging Standards
\`\`\`typescript
// ✅ Good: Appropriate log levels
console.info('Application started successfully');
console.warn('Deprecated function called');
console.error('Database connection failed:', error);
console.log('Processing user request:', userId);
\`\`\`

### Export Strategy
\`\`\`typescript
// ✅ Good: Clean exports from index.ts
export { boot } from './boot.js';
export { UserService } from './services/UserService.js';
export type { UserConfig, ApiResponse } from './interfaces.js';
\`\`\`

## File Modification Rules

### Allowed Changes
- Directly related to the specific request
- Maintains existing file structure
- Preserves naming conventions
- Follows established patterns

### Prohibited Changes
- Unrelated functionality modifications
- Breaking changes without clear justification
- Style changes beyond Prettier formatting
- Dependency additions without necessity

## Communication Protocol

### Response Format
1. **Summary**: Brief description of changes made
2. **Implementation**: Detailed explanation of the approach
3. **Code Examples**: Usage examples for new functionality
4. **Impact**: How changes affect the project
5. **Next Steps**: Suggested follow-up actions

### Error Handling
- Provide clear error messages
- Suggest recovery options
- Log errors with appropriate detail
- Document troubleshooting steps

## Quality Checklist

Before submitting any changes, verify:

- [ ] TypeScript compiles without errors
- [ ] All functions are properly typed
- [ ] Error handling is implemented
- [ ] Logging uses appropriate levels
- [ ] README.md is updated
- [ ] CHANGELOG.md is updated
- [ ] Code is formatted with Prettier
- [ ] No unnecessary dependencies added
- [ ] Functions are exported from \`src/index.ts\` if needed
- [ ] Comments are in English
- [ ] Variable names are descriptive
- [ ] Types and interfaces are defined in interfaces.ts

## Emergency Procedures

### When Issues Arise
1. **Assess**: Identify the scope and impact
2. **Document**: Record what went wrong and why
3. **Plan**: Develop a rollback or fix strategy
4. **Communicate**: Explain the situation clearly
5. **Execute**: Apply fixes incrementally

### Recovery Steps
- Apply fixes in small, manageable steps
- Test each fix before proceeding
- Update documentation to reflect changes
- Document lessons learned

## Project-Specific Rules

### Library Usage
- Design all functions for library import
- Maintain backward compatibility
- Provide clear API documentation
- Include usage examples

### Testing Requirements
- Write tests for new functionality
- Test error conditions and edge cases
- Ensure integration with existing code
- Use descriptive test names in English

### Dependency Management
- Minimize external dependencies
- Document major version changes
- Audit for security vulnerabilities
- Keep dependencies up to date

Remember: You are working on the vibecoder project. Always prioritize code quality, maintainability, and proper documentation while following these specifications exactly.
`;
        
        writeFileSync(join(projectPath, 'AGENTS.mdc'), agentsContent);
        console.log('✅ Created AGENTS.mdc');
        
        // Create README.md
        const readmeContent = `# ${projectName}

${config.description || 'A Node.js project'}

## Installation

\`\`\`bash
npm install
\`\`\`

## Usage

\`\`\`bash
npm start
\`\`\`

## Development

This project uses TypeScript with Node.js 24 native TypeScript support.

## License

${config.license || 'ISC'}
`;
        
        writeFileSync(join(projectPath, 'README.md'), readmeContent);
        console.log('✅ Created README.md');
        
        // Create CHANGELOG.md
        const changelogContent = `# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Initial project setup
`;
        
        writeFileSync(join(projectPath, 'CHANGELOG.md'), changelogContent);
        console.log('✅ Created CHANGELOG.md');
        
        console.log(`\n🎉 Project ${projectName} initialized successfully!`);
        console.log(`\nNext steps:`);
        console.log(`  cd ${projectName}`);
        console.log(`  npm install`);
        console.log(`  npm start`);
        
    } catch (error) {
        console.error('❌ Failed to initialize project:', error);
        process.exit(1);
    }
}

// Main execution
async function main() {
    const args = process.argv.slice(2);
    
    if (args.length === 0) {
        console.log('Usage: npx vibecodernode <project-name>');
        console.log('Example: npx vibecodernode my-awesome-project');
        process.exit(1);
    }
    
    const projectName = args[0];
    
    // Validate project name
    if (!/^[a-z0-9-]+$/.test(projectName)) {
        console.error('❌ Project name must contain only lowercase letters, numbers, and hyphens');
        process.exit(1);
    }
    
    const config: ProjectConfig = {
        name: projectName,
        description: args[1] || undefined,
        author: process.env.USER || undefined,
        license: 'ISC'
    };
    
    await initializeProject(projectName, config);
}

// Run if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
    main().catch(error => {
        console.error('❌ Initialization failed:', error);
        process.exit(1);
    });
}

export { initializeProject };
