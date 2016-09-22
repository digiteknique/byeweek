import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `

    <ul class="nav nav-pills nav-justified">
       <li role="presentation" routerLinkActive="active"><a routerLink="league/1" routerLinkActive="active">Zima Division</a></li>
       <li role="presentation" routerLinkActive="active"><a routerLink="league/2" routerLinkActive="active">Bourbon Division</a></li>
    </ul>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app/app.component.css'],
})

export class AppComponent {
  title = 'Mercury Bye Week';
}
