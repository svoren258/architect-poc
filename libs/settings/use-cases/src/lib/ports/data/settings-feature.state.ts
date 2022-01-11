import { Injectable } from '@angular/core';
import { MenuItem } from '@architect-poc/design-system/public/ui';
import { SettingsState, SettingsType } from '@architect-poc/settings/domain';
import { Observable } from 'rxjs';

@Injectable()
export abstract class SettingsFeatureState {
  abstract writeAction(action: string): void;
  abstract activeMenu$: Observable<SettingsType | null>;
  abstract settingsState$: Observable<SettingsState>;
  abstract menuItems$: Observable<MenuItem[]>;
}