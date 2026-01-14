import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-spells',
  imports: [],
  templateUrl: './spells.html',
  styleUrl: './spells.scss',
})
export class Spells {

  private route = inject(ActivatedRoute);
  spells = this.route.snapshot.data['spells'];

  getAllSpells() {
    return this.spells;
  }

  goToSpellDetail(spellName: string) {
    // Navigation logic to spell detail can be implemented here
  }

}
