/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.tsx",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://ai-content-genarater_owner:VoNHrZjw29WL@ep-frosty-night-a5gr8y06.us-east-2.aws.neon.tech/ai-content-genarater?sslmode=require",
  },
};
