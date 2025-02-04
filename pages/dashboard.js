const { expect } = require("@playwright/test");

class Dashboard {
    async verifyTaskAndTags(page, testCase) {
        const { column, task, tags } = testCase;

        // Verify column exists
        const columnLocator = page.locator(`//h2[contains(text(),'${column}')]`);
        await expect(columnLocator).toBeVisible();

        // Verify task is in the correct column
        const taskLocator = page.locator(`//h2[contains(text(),'${column}')]//parent::div//h3[contains(text(),'${task}')]`);
        await expect(taskLocator).toBeVisible();

        // Verify the tags under the task and column
        for (const tag of tags) {
            const tagLocator = page.locator(`//h2[contains(text(),'${column}')]//parent::div//h3[contains(text(),'${task}')]//following-sibling::div//span[contains(text(),'${tag}')]`);
            await expect(tagLocator).toBeVisible();
        }
    }
}

module.exports = { Dashboard };