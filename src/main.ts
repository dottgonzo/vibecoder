import { boot } from "./index.ts";


boot().then(() => {
    console.log('Boot completed');
}).catch(err => {
    console.error('Boot failed:', err);
    process.exit(1);
});