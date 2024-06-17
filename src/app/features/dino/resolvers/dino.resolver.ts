import { ResolveFn } from '@angular/router';
import {Dino} from "../models/dino";
import {inject} from "@angular/core";
import {DinoService} from "../services/dino.service";

export const dinoResolver: ResolveFn<Dino> = (route, state) => {
  return inject(DinoService).getById(Number.parseInt(route.paramMap.get('id')|| '1'));
};
