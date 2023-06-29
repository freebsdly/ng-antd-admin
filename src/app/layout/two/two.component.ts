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

@Component({
  selector: 'app-two',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NzAvatarModule,
    NzGridModule, NzLayoutModule,
    NzBreadCrumbModule, NzMenuModule,
    NzIconModule, NzSpaceModule,
  ],
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoLayoutComponent {
  isCollapsed = false;

}
