import { Component, inject, OnInit, ChangeDetectorRef, signal, OnDestroy } from '@angular/core';
import { CharacterModel } from '../../shared/models/character.model';
import { CharacterService } from '../../shared/services/character-service';
import { CharactersList } from './components/characters-list/characters-list';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-characters',
  imports: [CharactersList],
  templateUrl: './characters.html',
  styleUrl: './characters.scss',
})
export class Characters implements OnInit, OnDestroy {

  // protected characters: CharacterModel[] = [];
  // private cdref = inject(ChangeDetectorRef);

  // Mode Signal
  protected characters = signal<CharacterModel[]>([]);

  private characterService = inject(CharacterService);

  // Subscription
  private subscriptions: Subscription[] = [];
  // private subscription = new Subscription();

  ngOnInit(): void {
    this.subscriptions.push(this.characterService.getAllCharacter().subscribe((allCharacters: CharacterModel[]) => {
      // Mode Signal
      this.characters.set(allCharacters);
      // this.characters = allCharacters;
      // this.cdref.detectChanges();
    }));
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
    // this.subscription.unsubscribe();
  }

}
