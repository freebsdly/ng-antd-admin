import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { CommonModule } from '@angular/common';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { TabsComponent } from "../tabs/tabs.component";
import { HeaderComponent } from "../header/header.component";
import { SiderComponent } from "../sider/sider.component";

@Component({
  selector: 'app-default',
  standalone: true,
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css'],
  imports: [
    CommonModule,
    RouterOutlet,
    NzAvatarModule,
    NzGridModule, NzLayoutModule,
    NzBreadCrumbModule, NzMenuModule,
    NzIconModule, NzSpaceModule,
    NzImageModule, NzDropDownModule,
    TabsComponent,
    HeaderComponent,
    SiderComponent
  ]
})
export class DefaultLayoutComponent {
  private isCollapsed = false;

  get collapsed(): boolean {
    return this.isCollapsed;
  }

  set collapsed(value: boolean) {
    this.isCollapsed = value;
  }
}
