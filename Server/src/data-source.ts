import "reflect-metadata"
import { DataSource } from "typeorm";


export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  username:'postgres',
  password:'root',
  port: 5432,
  database: 'graphql',
  synchronize: true,
  logging: true,
  entities: [__dirname + "/entities/*{.js,.ts}"],
  subscribers: [],
  migrations: [],
});
