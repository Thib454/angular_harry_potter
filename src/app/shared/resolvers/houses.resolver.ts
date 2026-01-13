import { ResolveFn } from '@angular/router';
import { CharacterModel } from '../models/character.model';
import { HouseService } from '../services/houses/house-service';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';

export const houseResolver: ResolveFn<CharacterModel[]> =
    (route): Observable<CharacterModel[]> => 
    {
        return inject(HouseService).getAllHouses(route.params['id']);
    }