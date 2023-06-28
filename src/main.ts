/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app/app-routing.module';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { NZ_I18N, zh_CN } from 'ng-zorro-antd/i18n';
import zh from '@angular/common/locales/zh';
import { registerLocaleData } from '@angular/common';
import { NzConfig, NZ_CONFIG } from 'ng-zorro-antd/core/config';
import { HttpClientModule } from '@angular/common/http';

const ngZorroConfig: NzConfig = {
    // 注意组件名称没有 nz 前缀
    message: { nzTop: 120 },
    notification: { nzTop: 240 }
};

registerLocaleData(zh);

const prividerModules = [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
];

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(prividerModules),
        { provide: NZ_CONFIG, useValue: ngZorroConfig },
        { provide: NZ_I18N, useValue: zh_CN },
        provideHttpClient(withInterceptorsFromDi()),
        provideAnimations()
    ]
})
    .catch(err => console.error(err));
