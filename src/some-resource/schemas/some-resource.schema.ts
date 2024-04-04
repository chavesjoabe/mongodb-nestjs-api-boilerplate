import { Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type SomeResourceDocument = HydratedDocument<SomeResource>
@Schema()
export class SomeResource {}

export const SomeResourceSchema = SchemaFactory.createForClass(SomeResource);
