import {Component, effect, inject, input, Input, signal} from '@angular/core';
import {Dino} from "../../models/dino";
import {NgOptimizedImage, NgSwitch, NgSwitchCase} from "@angular/common";
import {MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {RouterLink} from "@angular/router";
import {MatBadge} from "@angular/material/badge";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-dino-card',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgSwitch,
    NgSwitchCase,
    MatIconButton,
    MatIcon,
    RouterLink,
    MatBadge
  ],
  templateUrl: './dino-card.component.html',
  styleUrl: './dino-card.component.scss'
})
export class DinoCardComponent {

  @Input({required:true})
  dino!:Dino;

  likeCount = signal<number>(0);

  private snack = inject(MatSnackBar)

  constructor() {
    effect(() =>{
      this.snack.open(`${this.dino.name} has been liked ${this.likeCount()}`);
    })
  }


  like() {
    this.likeCount.update( value => value+1);
  }
}
