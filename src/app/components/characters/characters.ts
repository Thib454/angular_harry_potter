import { Component, inject, OnInit, ChangeDetectorRef, signal, OnDestroy, Signal, computed } from '@angular/core';
import { CharacterModel } from '../../shared/models/character.model';
import { CharacterService } from '../../shared/services/character-service';
import { CharactersList } from './components/characters-list/characters-list';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-characters',
  imports: [CharactersList],
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

  private routeData = toSignal(this.activatedRoute.data, {
    initialValue: this.activatedRoute.snapshot.data
  });

  protected characters: Signal<CharacterModel[]> = computed(() => {
    return this.routeData()['characters'] as CharacterModel[];
  });

  protected section = computed(() => this.routeData()['section']);
  protected breadcrumb = computed(() => this.routeData()['breadcrumb']);
}