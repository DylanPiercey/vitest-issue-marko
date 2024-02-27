import { defineWorkspace } from "vitest/config";

export default defineWorkspace([
  {
    extends: "vitest.config.ts",
    test: {
      name: "server",
      environment: "node",
      include: ["src/**/{,*.}server.test.ts"],
    },
  },
  {
    extends: "vitest.config.ts",
    resolve: {
      conditions: ["browser"]
    },
    test: {
      name: "browser",
      environment: "jsdom",
      include: ["src/**/{,*.}browser.test.ts"],
    },
  },
]);
