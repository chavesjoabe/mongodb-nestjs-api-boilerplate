import { registerAs } from "@nestjs/config";

export interface IMongoDbOptions {
  uri: string;
  user: string;
  pass: string;
  dbName: string;
};

export interface IApplicationConfig {
  port: number;
  mongodb: IMongoDbOptions;
};

const mongodbOptions = (): IMongoDbOptions => {
  return {
    uri: process.env.DATABASE_URL,
    user: process.env.MONGO_DB_USER,
    pass: process.env.MONGO_DB_PASS,
    dbName: process.env.DATABASE_NAME,
  }
}

export const configFactory = (): IApplicationConfig => ({
  port: process.env.PORT ? Number(process.env.PORT) : 3000,
  mongodb: mongodbOptions(),
});

export const applicationConfig = registerAs('application', configFactory);
