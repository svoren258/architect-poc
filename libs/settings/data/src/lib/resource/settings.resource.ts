import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SettingsType } from '@architect-poc/settings/domain';
import { MenuItem } from '@architect-poc/utils';
import { Observable, of } from 'rxjs';

const SPACE_MENU_ITEMS_MOCK: MenuItem[] = [
  {
    id: 'create-new',
    name: 'Create new',
  },
  {
    id: 'color-and-avatar',
    name: 'Color & Avatar',
  },
  {
    id: 'favorite',
    name: 'Favorite',
  },
  {
    id: 'hide-in-my-sidebar',
    name: 'Hide in my sidebar',
  },
  {
    id: 'duplicate',
    name: 'Duplicate',
  },
  {
    id: 'sharing-ang-permission',
    name: 'Sharing & Permissions',
  },
  {
    id: 'archive',
    name: 'Archive',
  },
  {
    id: 'delete',
    name: 'Delete',
  },
  {
    id: 'template-center',
    name: 'Template Center',
  },
  {
    id: 'statuses',
    name: 'Statuses',
  },
  {
    id: 'automations',
    name: 'Automations',
  },
  {
    id: 'more',
    name: 'More',
  },
];

const SIDEBAR_MENU_ITEMS_MOCK: MenuItem[] = [
  {
    id: 'show-archived',
    name: 'Show archived',
  },
  {
    id: 'expand-all-folders',
    name: 'Expand all Folders',
  },
  {
    id: 'layout-size-and-style',
    name: 'Layout size & style',
  },
];

const DASHBOARD_MENU_ITEMS_MOCK: MenuItem[] = [
  {
    id: 'new-dashboard',
    name: 'New dashboard',
  },
  {
    id: 'sharing-and-permissions',
    name: 'Sharing & Permissions',
  },
  {
    id: 'rename',
    name: 'Rename',
  },
  {
    id: 'duplicate',
    name: 'Duplicate',
  },
  {
    id: 'favorite',
    name: 'Favorite',
  },
  {
    id: 'delete-dashboard',
    name: 'Delete Dashboard',
  },
];

// helper function that simulates the response from the server
const createMenuItemArray = (type: SettingsType): MenuItem[] => {
  switch (type) {
    case SettingsType.SPACES:
      return SPACE_MENU_ITEMS_MOCK;
    case SettingsType.SIDEBAR:
      return SIDEBAR_MENU_ITEMS_MOCK;
    case SettingsType.DASHBOARDS:
      return DASHBOARD_MENU_ITEMS_MOCK;
  }
};

@Injectable({ providedIn: 'root' })
export class SettingsResource {
  constructor(private readonly http: HttpClient) {}

  getMenuItems(type: SettingsType): Observable<MenuItem[]> {
    return of(createMenuItemArray(type));
  }
}
