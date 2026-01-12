import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { CharacterModel } from '../models/character.model';
import { CharacterService } from '../services/character-service';
import { Observable } from 'rxjs';

export const charactersResolver: ResolveFn<CharacterModel[]> =
    (): Observable<CharacterModel[]> => inject(CharacterService).getAllCharacter();