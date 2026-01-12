// export interface Staff {
//     id: string;
//     name: string;
//     role?: string;
//     image: string;
//     house: string;
//     gender: string;
//     actor: string;
//     alive: boolean;
// }

// Autre Méthode en utilisant l'héritage d'interface
import { CharacterModel } from './character.model';

export interface Staff extends CharacterModel {
  hogwartsStudent: false;
  hogwartsStaff: true;
}
