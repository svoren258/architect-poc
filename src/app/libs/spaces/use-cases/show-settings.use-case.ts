import { Injectable } from '@angular/core';
import { SpacesDataPort } from './ports/infrastructure/spaces-data.port';
import { ShowSettingsUiPort } from './ports/ui/show-settings-ui.port';

@Injectable({ providedIn: 'root' })
export class ShowSettingsUseCase implements ShowSettingsUiPort {
  constructor(private readonly infrastructure: SpacesDataPort) {}

  showSettings(): void {
    this.infrastructure.showSpacesSettings();
  }
}