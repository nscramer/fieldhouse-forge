import { defineConfig, devices } from "@playwright/test";
export default defineConfig({
  testDir: "./tests/e2e",
  webServer: {
    command: "npm run dev -- --hostname 127.0.0.1 --port 3007",
    url: "http://127.0.0.1:3007",
    reuseExistingServer: false,
  },
  use: { baseURL: "http://127.0.0.1:3007", trace: "retain-on-failure" },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
});
