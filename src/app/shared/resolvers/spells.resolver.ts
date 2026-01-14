import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { SpellService } from '../services/spells/spell-service';
import { SpellModel } from '../models/spell.model';

export const spellResolver: ResolveFn<SpellModel[]> =
    (): Observable<SpellModel[]> => inject(SpellService).getAllSpells();