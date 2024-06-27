import { db } from "./db";
import { AIOutput } from "./schema";

export const fetchAIOutputList = async () => {
  try {
    const result = await db.select().from(AIOutput).execute();
    return result;
  } catch (error) {
    console.error("Error fetching data from the database:", error);
    return [];
  }
};
