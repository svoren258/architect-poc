import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, NgModule } from '@angular/core';
import { MenuItem } from '@architect-poc/utils';

@Component({
  selector: 'ds-menu-item',
  template: `<div class="menu-item" *ngIf="menuItem">{{menuItem.name}}</div>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuItemComponent {
  @Input() menuItem: MenuItem | undefined;
}

@NgModule({
  declarations: [MenuItemComponent],
  imports: [
    CommonModule
  ],
  exports: [MenuItemComponent]
})
export class MenuItemComponentModule {}
