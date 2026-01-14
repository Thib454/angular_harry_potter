import { Routes } from '@angular/router';
import { Home } from './core/home/home';
import { Notfound } from './core/notfound/notfound';
import { CharacterService } from './shared/services/characters/character-service';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterModel } from './shared/models/character.model';
import { characterDetailResolver } from './shared/resolvers/character-detail.resolver';
import { houseResolver } from './shared/resolvers/houses.resolver';
import { spellResolver } from './shared/resolvers/spells.resolver';
import { authGuard } from './shared/guards/auth-guard';

export const routes: Routes = [
  { path: '', component: Home, title: 'Home' }, // Eager.
  {
    path: 'characters', // Lazy-loading.
    canActivate: [authGuard],
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
        resolve: {
          character: characterDetailResolver
        }
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
  {
    path: 'houses', // Lazy-loading.
    children: [
      {
        path: '', loadComponent: () => import('./components/houses/houses')
          .then(component => component.Houses),
        title: 'Houses',
        data: {
          section: 'Harry Potter',
          breadcrumb: 'Houses'
        },
      },
      {
        path: ':id', loadComponent: () => import('./components/house-detail/house-detail')
          .then(component => component.HouseDetail),
        title: 'House Detail',
        resolve: {
          house: houseResolver
        }
      }
    ],
  },
  { path: 'spells', loadComponent: () => import('./components/spells/spells')
    .then(component => component.Spells), 
    title: 'Spells',
    resolve: {
      spells: spellResolver
    }
  },
  { path: '**', component: Notfound, title: 'Not Found', pathMatch: 'full' },
];