import { core } from '@angular/compiler';
import { Component, computed, Signal, signal } from '@angular/core';
import { Gender, House, Species } from '@shared/models/character.model';
import { WandModel } from '@shared/models/wand.model';

@Component({
  selector: 'app-add-character',
  imports: [],
  templateUrl: './add-character.html',
  styleUrl: './add-character.scss',
})

export class AddCharacter {

  protected houses: House[] = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];
  protected genders: Gender[] = ['male', 'female'];
  protected speciesList: Species[] = ['human', 'half-giant', 'giant', 'dog', 'werewolf', 'ghost', 'elf', 'house-elf', 'goblin', 'owl'];

  protected name = signal<string>('');
  protected alternateNames = signal<string[]>([]);
  protected species = signal<Species>('half-giant');
  protected gender = signal<Gender>('male');
  protected house = signal<House>('Gryffindor');
  protected dateOfBirth = signal<string>('');
  protected yearOfBirth = signal<number | null>(null);
  protected wizard = signal<boolean>(false);
  protected ancestry = signal<string>('');
  protected eyeColour = signal<string>('');
  protected hairColour = signal<string>('');
  protected wand = signal<WandModel>({
    wood: '',
    core: '',
    length: null,
  });
  protected patronus = signal<string>('');
  protected hogwartsStudent = signal<boolean>(false);
  protected hogwartsStaff = signal<boolean>(false);
  protected actor = signal<string>('');
  protected alternateActors = signal<string[]>([]);
  protected alive = signal<boolean>(true);
  protected image = signal<string>('');

  nameValid: Signal<boolean> = computed((): boolean => this.name().trim().length > 2);
  actorValid: Signal<boolean> = computed((): boolean => this.actor().trim().length > 2);
  patronusValid: Signal<boolean> = computed((): boolean => this.patronus().trim().length > 2 || this.patronus().trim().length === 0);

  protected submit(): void {
    const newCharacter = {
      name: this.name(),
      alternateNames: this.alternateNames(),
      species: this.species(),
      gender: this.gender(),
      house: this.house(),
      dateOfBirth: this.dateOfBirth(),
      yearOfBirth: this.yearOfBirth(),
      wizard: this.wizard(),
      ancestry: this.ancestry(),
      eyeColour: this.eyeColour(),
      hairColour: this.hairColour(),
      wand: this.wand(),
      patronus: this.patronus(),
      hogwartsStudent: this.hogwartsStudent(),
      hogwartsStaff: this.hogwartsStaff(),
      actor: this.actor(),
      alternateActors: this.alternateActors(),
      alive: this.alive(),
      image: this.image(),
    };
    console.log('Nouveau personnage ajouté : ', newCharacter);
  }
}