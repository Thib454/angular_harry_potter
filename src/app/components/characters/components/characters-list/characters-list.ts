import { Component, input, Input, inject } from '@angular/core';
import { CharacterModel } from '../../../../shared/models/character.model';
import { Router, RouterLink } from "@angular/router";


@Component({
  selector: 'app-characters-list',
  imports: [RouterLink],
  templateUrl: './characters-list.html',
  styleUrl: './characters-list.scss',
})
export class CharactersList {

  private router = inject(Router);

  // Mode Input
  // @Input() characters: CharacterModel[] = [];

  // Mode Signal
  characters = input.required<CharacterModel[]>();

  protected gotocharacterid(id: string) {
    this.router.navigate(['/characters', id]);
  }
  // Autre méthode avec trackBy
  // protected trackById(index: number, character: CharacterModel) {
  //   return character.id;
  // }

}
