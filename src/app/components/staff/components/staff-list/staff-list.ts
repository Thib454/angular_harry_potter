import { Component, Input } from '@angular/core';
import { Staff } from '../../../../shared/models/staff.model';

@Component({
  selector: 'app-staff-list',
  imports: [],
  templateUrl: './staff-list.html',
  styleUrl: './staff-list.scss',
})
export class StaffList {
  @Input() staff: Staff[] = [];

}
