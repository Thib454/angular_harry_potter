import { Component, signal } from '@angular/core';
import { Staff } from '../../shared/models/staff.model';
import { StaffService } from '../../shared/services/staff-service';
import { StaffList } from './components/staff-list/staff-list';
// import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-staff',
  imports: [StaffList],
  templateUrl: './staff.html',
  styleUrl: './staff.scss',
})
export class StaffPage {

  // Autre méthode avec toSignal
  // private staffservice = inject(StaffService);
  // protected staffSignal = toSignal(this.staffservice.getStaff(), { initialValue: [] });

  protected staff = signal<Staff[]>([]);
  protected loading = signal(true);
  protected error = signal('');

  constructor(private staffService: StaffService) {
    this.loadStaff();
  }

  private loadStaff() {
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