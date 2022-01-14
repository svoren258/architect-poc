import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'button[ds-button]',
  template: `<ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      :host {
        padding: 0.5rem 1rem;
        border-radius: 6px;
        color: black;
        background-color: white;
        cursor: pointer;
      }
    `
  ]
})
export class ButtonComponent {}

const exports = [ButtonComponent];

@NgModule({
  declarations: exports,
  exports
})
export class ButtonComponentModule {}
