import { Component, Input } from '@angular/core';
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
import { AppMenu } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sider',
  standalone: true,
  imports: [
    CommonModule,
    NzAvatarModule,
    NzGridModule, NzLayoutModule,
    NzBreadCrumbModule, NzMenuModule,
    NzIconModule, NzSpaceModule,
    NzImageModule, NzDropDownModule,
  ],
  templateUrl: './sider.component.html',
  styleUrls: ['./sider.component.css']
})
export class SiderComponent {

  private isCollapsed = false;
  private siderMenus: AppMenu[] = [
    { title: '菜单1', key: 'menu1', icon: 'android' },
    { title: '菜单2', key: 'menu2', icon: 'windows' },
    { title: '菜单3', key: 'menu3', icon: 'chrome' },
    {
      title: '菜单4', key: 'menu4', icon: 'chrome', children: [
        { title: '菜单1', key: 'menu1', icon: 'android' },
        { title: '菜单2', key: 'menu2', icon: 'windows' },
        { title: '菜单3', key: 'menu3', icon: 'chrome' },
      ]
    },
  ];

  @Input()
  get collapsed(): boolean {
    return this.isCollapsed;
  }

  set collapsed(value: boolean) {
    this.isCollapsed = value;
  }

  get menus(): AppMenu[] {
    return this.siderMenus;
  }
}
