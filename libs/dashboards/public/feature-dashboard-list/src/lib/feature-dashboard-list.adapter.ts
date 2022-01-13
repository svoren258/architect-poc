import { Injectable } from '@angular/core';
import { DashboardsStore } from '@architect-poc/dashboards/data';
import { Signal } from '@architect-poc/utils';
import { map, Observable } from 'rxjs';
import { stateToFeature } from './feature-dashboard-list.mapper';

@Injectable({ providedIn: 'root' })
export class FeatureDashboardListAdapter {
  readonly dashboards$ = this.dashboardsStore.dashboards$.pipe(
    map((arr) => arr.map(stateToFeature))
  );
  readonly action$: Observable<Signal<string> | null> =
    this.dashboardsStore.settingsActions$;

  constructor(private readonly dashboardsStore: DashboardsStore) {}

  showSettings(): void {
    this.dashboardsStore.showDashboardSettings();
  }
}
