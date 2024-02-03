import { CommonModule } from '@angular/common';
import { Component, Input, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

export interface MenuItem {
  icon: string;
  label: string;
  route?: string | undefined;
}

@Component({
  selector: 'astra-custom-sidenav',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatListModule, RouterModule],
  templateUrl: './custom-sidenav.component.html',
  styleUrl: './custom-sidenav.component.scss',
})
export class CustomSidenavComponent {
  sideNavCollapsed = signal(false);
  @Input() set collapsed(val: boolean) {
    this.sideNavCollapsed.set(val);
  }

  menuItems = signal<MenuItem[]>([
    { icon: 'dashboard', label: 'Dashboard', route: 'dashboard' },
    { icon: 'person', label: 'Users', route: 'users' },
    { icon: 'settings', label: 'Settings', route: 'settings' },
  ]);
}
