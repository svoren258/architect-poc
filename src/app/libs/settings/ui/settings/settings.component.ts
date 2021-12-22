import { Component } from '@angular/core';
import { SettingsType } from '../../domain';
import { SettingsUiPort } from '../../use-cases';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
})
export class SettingsComponent {
  readonly history$ = this.settingsUseCase.getActionHistory();
  readonly activeMenu$ = this.settingsUseCase.getActiveMenu();

  readonly SettingsType = SettingsType;

  constructor(
    private readonly settingsUseCase: SettingsUiPort,
  ) {
    this.activeMenu$.subscribe(m => console.log('activeMenu', m))
  }

  triggerAction(action: string): void {
    this.settingsUseCase.triggerAction(action);
  }

}