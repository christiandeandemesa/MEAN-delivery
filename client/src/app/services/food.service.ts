import { Injectable } from "@angular/core";
import { sample_foods } from "src/data";
import { Food } from "../shared/models/Food";

@Injectable({
  providedIn: "root",
})
export class FoodService {
  constructor() {}

  getAllFood(): Food[] {
    return sample_foods;
  }
}

