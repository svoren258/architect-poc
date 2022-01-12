import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SpacesAdapter } from '@architect-poc/spaces/use-cases';

@Component({
  selector: 'architect-poc-spaces',
  templateUrl: './spaces.component.html',
  styles: [
    `
      .container {
        background: lightskyblue;
      }

      .spaces-list {
        display: flex;
        flex-direction: column;
        width: 250px;
        border: 1px solid blue;
      }

      .space {
        padding: 1rem 0.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    `,
  ],
})
export class SpacesComponent {
  readonly settingsActions$ = this.spacesUseCase.settingsActions$;
  readonly spaces$ = this.spacesUseCase.loadSpaces();

  constructor(private readonly spacesUseCase: SpacesAdapter) {}

  showSpacesSettings() {
    this.spacesUseCase.showSettings();
  }

  clearHistory() {
    this.spacesUseCase.triggerClearHistory();
  }
}

@NgModule({
  declarations: [SpacesComponent],
  exports: [SpacesComponent],
  imports: [CommonModule, RouterModule],
})
export class FeatureSpacesListModule {}