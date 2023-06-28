import { Component } from '@angular/core';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzTransferModule, TransferChange, TransferItem, TransferSelectChange } from 'ng-zorro-antd/transfer';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { BooleanInput } from 'ng-zorro-antd/core/types';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzCalendarMode, NzCalendarModule } from 'ng-zorro-antd/calendar';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    standalone: true,
    imports: [
        NzButtonModule,
        NzDropDownModule,
        NzPageHeaderModule,
        NzIconModule,
        NzInputNumberModule,
        NzTransferModule,
        NzSwitchModule,
        NzDrawerModule,
        NzModalModule,
        NzCalendarModule,
        NzPopoverModule,
        NzCardModule,
        NzCollapseModule,
        NzDescriptionsModule
    ],
})
export class HomeComponent {
    panels = [
        {
            active: true,
            name: 'This is panel header 1',
            disabled: false
        },
        {
            active: false,
            disabled: false,
            name: 'This is panel header 2'
        },
        {
            active: false,
            disabled: true,
            name: 'This is panel header 3'
        }
    ];
    visible = false;
    date = new Date(2012, 11, 21);
    mode: NzCalendarMode = 'month';
    fullScreen = true;

    panelChange(change: any): void {
        console.log(change.date, change.mode);
    }

    selectChange(select: any): void {
        console.log(`Select value: ${select}`);
    }

    open(): void {
        this.visible = true;
    }

    close(): void {
        this.visible = false;
    }
    change($event: TransferChange) {
        throw new Error('Method not implemented.');
    }
    select($event: TransferSelectChange) {
        throw new Error('Method not implemented.');
    }
    demoValue: number = 10;
    list: TransferItem[] = [
        { title: 'a' },
        { title: 'b' }
    ];
    disabled: BooleanInput;
    onBack() {
        console.log('on back');
    }

    isVisible = false;

    constructor() { }

    showModal(): void {
        this.isVisible = true;
    }

    handleOk(): void {
        console.log('Button ok clicked!');
        this.isVisible = false;
    }

    handleCancel(): void {
        console.log('Button cancel clicked!');
        this.isVisible = false;
    }
}
