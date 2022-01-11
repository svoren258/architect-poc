import { Injectable } from '@angular/core';
import { MenuItem } from '@architect-poc/design-system/public/ui';
import { SettingsType } from '@architect-poc/settings/domain';
import { Observable } from 'rxjs';

@Injectable()
export abstract class SettingsAdapter {
  abstract triggerAction(action: string): void;
  abstract actionHistory$: Observable<string[]>;
  // TODO: add menuItems$: Observable or clarify how we render different types otherwise
  abstract activeMenu$: Observable<SettingsType | null>;
  abstract menuItems$: Observable<MenuItem[]>;
}