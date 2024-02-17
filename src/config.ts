import { config } from "dotenv";

config();

export const port = process.env.PORT || 3001;
export const host = process.env.HOST || "localhost";
export const user = process.env.USER || "root";
export const password = process.env.PASSWORD || "";
export const db = process.env.DB || "test";