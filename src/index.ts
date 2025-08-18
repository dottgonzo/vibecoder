import { ProjectConfig } from './interfaces.ts';

export async function boot(){
    console.log('Booting application...');
}

export function initializeProject(name: string, config: ProjectConfig) {
    console.log(`Initializing project: ${name}`);
    // Add your initialization logic here
}

// Export the initializeProject function from init.ts
export { initializeProject as createProject } from './init.js';