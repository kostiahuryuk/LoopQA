import { defineConfig } from '@playwright/test';

export default defineConfig({
    use: {
        baseURL: 'https://animated-gingersnap-8cf7f2.netlify.app/',
        headless: true,
        screenshot: 'on',
        video: 'retain-on-failure',
    },
    projects: [
        {
            name: 'chromium',
            use: { browserName: 'chromium' },
        },
        // {
        //     name: 'firefox',
        //     use: { browserName: 'firefox' },
        // },
        // {
        //     name: 'webkit',
        //     use: { browserName: 'webkit' },
        // },
    ],
});