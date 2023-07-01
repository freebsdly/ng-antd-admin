import { Component, EventEmitter, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { CommonModule } from '@angular/common';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { AppMenu, AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NzAvatarModule,
    NzGridModule, NzLayoutModule,
    NzMenuModule,
    NzIconModule, NzSpaceModule,
    NzImageModule, NzDropDownModule,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  private isCollapsed = false;
  @Output() siderCollapseChange = new EventEmitter<boolean>();
  private headerMenus: AppMenu[] = [];

  get collapsed(): boolean {
    return this.isCollapsed;
  }

  set collapsed(value: boolean) {
    this.isCollapsed = value;
    this.siderCollapseChange.emit(this.isCollapsed);
  }

  get menus(): AppMenu[] {
    return this.headerMenus;
  }

  constructor(authService: AuthService) {
    authService.getHeaderMenus().subscribe((menus) => {
      this.headerMenus = menus
    });
  }

}
