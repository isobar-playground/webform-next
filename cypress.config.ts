import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: `https://3000-${process.env.HOSTNAME}.${process.env.GITPOD_WORKSPACE_CLUSTER_HOST}`,
    supportFile: false,
  },
});
