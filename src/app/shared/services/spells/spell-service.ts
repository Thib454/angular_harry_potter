import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpellModel } from '../../models/spell.model';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class SpellService {
  
  private HttpClient = inject(HttpClient);

  // Méthode pour obtenir tous les sorts
  getAllSpells(): Observable<SpellModel[]> {
    return this.HttpClient.get<SpellModel[]>(environment.baseUrl + '/spells');
  } 
}
