import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Dino} from "../models/dino";

@Injectable({
  providedIn: 'root'
})
export class DinoService {

  private http = inject(HttpClient);

  list(){
    return this.http.get<Dino[]>('/assets/dino/list.json')
  }

  getById(id:number){
    return this.http.get<Dino>(`/assets/dino/${id}.json`);
  }

  facts(name:string){
    return this.http.get<string>('./api/facts/name');
  }
}
