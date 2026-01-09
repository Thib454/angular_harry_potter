import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
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

  protected characters: CharacterModel[] = [];

  private characterService = inject(CharacterService);

  private cdref = inject(ChangeDetectorRef);

  ngOnInit(): void {
    this.characterService.getAllCharacter().subscribe((allCharacters: CharacterModel[]) => {
      this.characters = allCharacters;
      this.cdref.detectChanges();
    })
  }
}
