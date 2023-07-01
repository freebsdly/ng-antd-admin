import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export type AppMenu = {
  icon?: string;
  title: string;
  key: string;
  children?: AppMenu[];
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  headerMenus = [
    { icon: 'appstore', title: '应用市场', key: 'appstore' },
    { icon: 'bar-chart', title: '工作台', key: 'workspace' },
    { icon: 'cluster', title: '流水线', key: 'pipeline' },
    { icon: 'control', title: '系统设置', key: 'setting' },
    { icon: 'area-chart', title: '报告报表', key: 'report' },
    { icon: 'audit', title: '审计日志', key: 'audit' },
  ]

  data: Map<string, AppMenu[]> = new Map();

  constructor() { 
    this.headerMenus.forEach((v) => {
      this.data.set(v.key, []);
    })
  }

  getHeaderMenus(): Observable<AppMenu[]> {
    return of(this.headerMenus);
  }

  getSiderMenus(key: string): Observable<AppMenu[]> {
    
    return of([

    ])
  }
}
