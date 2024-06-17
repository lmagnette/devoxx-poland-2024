import {Component, Input} from '@angular/core';
import {Dino} from "../../models/dino";
import {NgOptimizedImage} from "@angular/common";
import {IsmPipe} from "../../pipes/ism.pipe";
import {DinoFactsComponent} from "../dino-facts/dino-facts.component";
import {DinoPlaceholderComponent} from "../dino-placeholder/dino-placeholder.component";
import {DinoLoadingComponent} from "../dino-loading/dino-loading.component";

@Component({
  selector: 'app-dino-details',
  standalone: true,
  imports: [
    NgOptimizedImage,
    IsmPipe,
    DinoFactsComponent,
    DinoPlaceholderComponent,
    DinoLoadingComponent
  ],
  templateUrl: './dino-details.component.html',
  styleUrl: './dino-details.component.scss'
})
export class DinoDetailsComponent {

  @Input({required:true})
  dino!:Dino;
}
