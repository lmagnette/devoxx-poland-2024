import {Component, computed, DestroyRef, inject, signal} from '@angular/core';
import {DinoService} from "../../services/dino.service";
import {takeUntilDestroyed, toSignal} from "@angular/core/rxjs-interop";
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

  dinos$ = toSignal(this.service.list().pipe( takeUntilDestroyed(this.destroyRef)));
  filteredDinos = computed( () => this.dinos$()?.filter(value => value.name.toUpperCase().includes(this.searchTerm().toUpperCase())));

  searchTerm = signal<string>('');



  searchTermChanged(value: any) {
    this.searchTerm.set(value);
  }

  countChanged($event: number) {
    console.log('Count changed ',$event)
  }
}
