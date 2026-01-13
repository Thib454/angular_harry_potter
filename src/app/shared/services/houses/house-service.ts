import { inject, Injectable } from '@angular/core';
import { CharacterModel } from '../../models/character.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';


@Injectable({
  providedIn: 'root',
})
export class HouseService {

  private HttpClient = inject(HttpClient);

  getAllHouses(id: string): Observable<CharacterModel[]> {
    console.log('getAllHouses called with id:', id);
    return this.HttpClient.get<CharacterModel[]>(environment.baseUrl + '/characters/house/' + id);
  }
}
