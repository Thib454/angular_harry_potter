import { Injectable } from '@angular/core';
// import { STAFF } from '../../mocks/staff.mock';
import { HttpClient } from '@angular/common/http';
import { Staff } from '../models/staff.model';
// import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StaffService {
  constructor(private http: HttpClient) { }

  getStaff() {
    // Simulated HTTP request using mock data
  return this.http.get<Staff[]>(
    'https://hp-api.onrender.com/api/characters/staff'
  );
    // For now, returning mock data as an observable
    // return of(STAFF);
  };
}