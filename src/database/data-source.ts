import * as dotenv from "dotenv";
import { DataSource } from "typeorm";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST || "127.0.0.1",
  port: Number(process.env.DB_PORT) || 3306,
  username: process.env.DB_USER || "contacts_user",
  password: process.env.DB_PASSWORD || "contacts_pwd",
  database: process.env.DB_DATABASE || "contacts_db",
  migrations: ["src/database/migrations/*.{js,ts}"],
  logging: process.env.ORM_LOGGING === "true",
  entities: ["core/data/entity/**/*.{js,ts}"],
  synchronize: false,
  subscribers: [],
});