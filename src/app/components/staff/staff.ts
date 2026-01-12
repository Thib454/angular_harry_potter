import { Component, signal, effect } from '@angular/core';
import { Staff } from '../../shared/models/staff.model';
import { StaffService } from '../../shared/services/staff-service';
import { StaffList } from './components/staff-list/staff-list';

@Component({
  selector: 'app-staff',
  imports: [StaffList],
  templateUrl: './staff.html',
  styleUrl: './staff.scss',
})
export class StaffPage {
  staff = signal<Staff[]>([]);
  loading = signal(true);
  error = signal('');

  constructor(private staffService: StaffService) {
    this.loadStaff();
  }

  loadStaff() {
    this.loading.set(true);
    this.error.set('');

    this.staffService.getStaff().subscribe({
      next: (data) => {
        this.staff.set(data);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set('Impossible de charger le staff.');
        this.loading.set(false);
      },
    });
  }
}