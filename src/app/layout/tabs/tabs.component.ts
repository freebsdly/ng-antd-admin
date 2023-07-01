import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTabPosition, NzTabsModule } from 'ng-zorro-antd/tabs';
import { NumberInput } from 'ng-zorro-antd/core/types';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [
    CommonModule, NzTabsModule
  ],
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {
  tabs: Array<{ name: string; content: string; disabled: boolean }> = [];;
  nzTabPosition: NzTabPosition = 'top';;
  selectedIndex: NumberInput;

  log(args: any[]) {
    console.log(args);
  }

  closeTab({ index }: { index: number }): void {
    this.tabs.splice(index, 1);
  }

  ngOnInit(): void {
    for (let i = 0; i < 15; i++) {
      this.tabs.push({
        name: `Tab ${i}`,
        disabled: i === 28,
        content: `Content of tab ${i}`
      });
    }
  }

}
