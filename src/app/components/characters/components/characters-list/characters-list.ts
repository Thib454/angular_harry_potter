import { Component, Input } from '@angular/core';
import { CharacterModel } from '../../../../shared/models/character.model';

@Component({
  selector: 'app-characters-list',
  imports: [],
  templateUrl: './characters-list.html',
  styleUrl: './characters-list.scss',
})
export class CharactersList {

  @Input() characters: CharacterModel[] = [];

}
