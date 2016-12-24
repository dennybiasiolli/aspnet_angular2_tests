import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: `
        <input type="text" [value]="food" />
        <p>Sriracha sauce is great with {{ food }}</p>
    `,
})
export class AppComponent {
    food = 'kielbasa';
}
