import { Component, inject, OnInit, ChangeDetectorRef, signal } from '@angular/core';
import { CharacterModel } from '../../shared/models/character.model';
import { CharacterService } from '../../shared/services/character-service';
import { CharactersList } from './components/characters-list/characters-list';

@Component({
  selector: 'app-characters',
  imports: [CharactersList],
  templateUrl: './characters.html',
  styleUrl: './characters.scss',
})
export class Characters implements OnInit {

  // protected characters: CharacterModel[] = [];

  // Mode Signal
  protected characters = signal<CharacterModel[]>([]);

  private characterService = inject(CharacterService);

  // private cdref = inject(ChangeDetectorRef);

  ngOnInit(): void {
    this.characterService.getAllCharacter().subscribe((allCharacters: CharacterModel[]) => {
      // Mode Signal
      this.characters.set(allCharacters);
      // this.characters = allCharacters;
      // this.cdref.detectChanges();
    })
  }
}
