import { Injectable } from "@nestjs/common";
import { Model } from "mongoose";

@Injectable()
export class FactoryDbService {
  constructor(private repository: Model<any>){}

  public async findAll() {
    return this.repository.find();
  }
}
