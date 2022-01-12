import { Injectable } from '@angular/core';
import { DashboardModel } from '@architect-poc/dashboards/domain';
import {
  SettingsSharedStore,
  SettingsType,
} from '@architect-poc/settings-public-state';
import { concatMap, filter, Observable } from 'rxjs';
import { DashboardResource } from '../resource/dashboard.resource';

@Injectable({ providedIn: 'root' })
export class DashboardsStore {
  readonly settingsActions$ = this.settingsStore.actions$;
  readonly dashboards$: Observable<DashboardModel[]> = this.dashboardResource.getDashboards();

  constructor(
    private readonly settingsStore: SettingsSharedStore,
    private readonly dashboardResource: DashboardResource
  ) {
    this.settingsStore.actions$.pipe(
      filter(action => action.type === 'dashboard-update'),
      concatMap((action) => this.dashboardResource.postDashboard(action.payload as any))
    ).subscribe();
  }

  showDashboardSettings(): void {
    this.settingsStore.showSettings(SettingsType.DASHBOARDS);
  }
}
