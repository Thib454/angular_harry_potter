import { Routes } from '@angular/router';
import { Home } from './core/home/home';
import { Notfound } from './core/notfound/notfound';
import { charactersResolver } from './shared/resolvers/characters.resolver';
import { CharacterService } from './shared/services/character-service';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterModel } from './shared/models/character.model';

export const routes: Routes = [
  { path: '', component: Home, title: 'Home' }, // Eager.
  {
    path: 'characters', // Lazy-loading.
    children: [
      {
        path: '', loadComponent: () => import('./components/characters/characters')
          .then(component => component.Characters),
        title: 'Characters',
        data: {
          section: 'Harry Potter',
          breadcrumb: 'Characters'
        },
        resolve: { 
          characters: (): Observable<CharacterModel[]> => inject(CharacterService).getAllCharacter()
         }
      },
      {
        path: ':id', loadComponent: () => import('./components/character-detail/character-detail')
          .then(component => component.CharacterDetail),
        title: 'Character Detail',
      }
    ],
  },
  {
    path: 'staff', // Lazy-loading.
    loadComponent: () => import('./components/staff/staff')
      .then(component => component.StaffPage),
    title: 'Staff',
    data: {
      section: 'Harry Potter',
      breadcrumb: 'Staff'
    }
  },
  { path: '**', component: Notfound, title: 'Not Found', pathMatch: 'full' },
];