import { Component, computed, effect, inject, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-house-detail',
  imports: [RouterLink],
  templateUrl: './house-detail.html',
  styleUrl: './house-detail.scss',
})
export class HouseDetail {

  private titleService = inject(Title);
  private activatedRoute = inject(ActivatedRoute);

  private routeData = toSignal(this.activatedRoute.data, {
    initialValue: this.activatedRoute.snapshot.data
  });

  protected house = computed(() => this.routeData()['house']);

  constructor() {
    effect(() => {
      this.titleService.setTitle('House -' + (this.house()?.name ?? 'Unknown'));
    });
  }
}