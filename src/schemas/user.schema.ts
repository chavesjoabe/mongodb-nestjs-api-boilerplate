import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type AnyDocument = HydratedDocument<Any>

@Schema()
export class Any {
  
  @Prop()
  name: string;

  @Prop()
  email: string;
}

export const AnySchema = SchemaFactory.createForClass(Any);
