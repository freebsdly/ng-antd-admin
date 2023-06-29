import { Component } from '@angular/core';
import { DefaultLayoutComponent } from "./layout/default/default.component";
import { TwoLayoutComponent } from "./layout/two/two.component";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [
        DefaultLayoutComponent,
        TwoLayoutComponent,
    ]
})
export class AppComponent {
}
