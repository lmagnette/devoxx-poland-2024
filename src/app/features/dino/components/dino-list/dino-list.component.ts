import {Component, DestroyRef, inject} from '@angular/core';
import {DinoService} from "../../services/dino.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {AsyncPipe, NgForOf} from "@angular/common";
import {DinoCardComponent} from "../dino-card/dino-card.component";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-dino-list',
  standalone: true,
  imports: [
    AsyncPipe,
    DinoCardComponent,
    NgForOf,
    FormsModule
  ],
  templateUrl: './dino-list.component.html',
  styleUrl: './dino-list.component.scss'
})
export class DinoListComponent {

  private destroyRef = inject(DestroyRef);
  private service = inject(DinoService);

  dinos$ = this.service.list().pipe( takeUntilDestroyed(this.destroyRef));


  searchTerm() {
    
  }

  searchTermChanged($event: any) {
    
  }
}
