import { ModuleWithProviders, NgModule } from '@angular/core';
import {
  APPLICATION_PROVIDERS,
  INFRASTRUCTURE_PROVIDERS,
} from './infrastructure';
import { UiModule, UI_PROVIDERS } from './ui';

@NgModule({
  exports: [UiModule],
})
export class SettingsModule {
  static forRoot(): ModuleWithProviders<SettingsModule> {
    return {
      ngModule: SettingsModule,
      providers: [
        ...INFRASTRUCTURE_PROVIDERS,
        ...APPLICATION_PROVIDERS,
        ...UI_PROVIDERS,
      ],
    };
  }
}