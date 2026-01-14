import { Component, inject, Signal, computed, signal } from '@angular/core';
import { CharacterModel } from '@shared/models/character.model';
import { CharactersList } from './components/characters-list/characters-list';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { AddCharacter } from './components/add-character/add-character';

@Component({
  selector: 'app-characters',
  imports: [CharactersList, AddCharacter],
  templateUrl: './characters.html',
  styleUrl: './characters.scss',
})
export class Characters {

  // Mode Subscription
  // protected characters: CharacterModel[] = [];
  // private cdref = inject(ChangeDetectorRef);
  // private characterService = inject(CharacterService);

  // Subscription
  //   private subscriptions: Subscription[] = [];
  //   // private subscription = new Subscription();

  //   ngOnInit(): void {
  //     this.subscriptions.push(this.characterService.getAllCharacter().subscribe((allCharacters: CharacterModel[]) => {
  //       // Mode Signal
  //       this.characters.set(allCharacters);
  //       // this.characters = allCharacters;
  //       // this.cdref.detectChanges();
  //     }));
  //   }
  //   ngOnDestroy(): void {
  //     this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
  //     // this.subscription.unsubscribe();
  //   }

  // Mode Signal
  // protected characters = signal<CharacterModel[]>([]);

  //Mode Signal dérivé du route resolver
  private activatedRoute = inject(ActivatedRoute);

  protected showAddCharacter = signal<boolean>(false);
  private routeData = toSignal(this.activatedRoute.data, {
    initialValue: this.activatedRoute.snapshot.data
  });

  protected characters: Signal<CharacterModel[]> = computed(() => {
    return this.routeData()['characters'] as CharacterModel[];
  });

  protected section = computed(() => this.routeData()['section']);
  protected breadcrumb = computed(() => this.routeData()['breadcrumb']);

  protected toggleAddCharacter(): void {
    this.showAddCharacter.update(show => !show);
  }
}