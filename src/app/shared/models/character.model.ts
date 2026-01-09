import { WandModel } from "./wand.model";

export interface CharacterModel {
  id: string;
  name: string;
  alternate_names: string[];
  species: Species;
  gender: Gender;
  house: House;
  dateOfBirth: string | null;
  yearOfBirth: number | null;
  wizard: boolean;
  ancestry: string;
  eyeColour: string;
  hairColour: string;
  wand: WandModel;
  patronus: string;
  hogwartsStudent: boolean;
  hogwartsStaff: boolean;
  actor: string;
  alternate_actors: string[];
  alive: boolean;
  image: string;
}
export type House = 'Gryffindor' | 'Hufflepuff' |'Ravenclaw' | 'Slytherin';
export type Gender = 'male' | 'female';
export type Species = 'human' | 'half-giant' | 'giant' | 'dog' | 'werewolf' | 'ghost' | 'elf' | 'house-elf' | 'goblin' | 'owl';