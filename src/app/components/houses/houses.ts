import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-houses',
  imports: [],
  templateUrl: './houses.html',
  styleUrl: './houses.scss',
})
export class Houses {

  private router = inject(Router);

  goToHouseDetail(houseId: string) {
    return this.router.navigate(['/houses', houseId]);
  }
}
