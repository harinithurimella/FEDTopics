import { Routes } from '@angular/router';
import { AngularComponent } from './angular/angular.component';
import { HtmlComponent } from './html/html.component';
import { CssComponent } from './css/css.component';
import { SubAngularComponent } from './angular/sub-angular/sub-angular.component';

export const routes: Routes = [

    {
        path: 'html', component : HtmlComponent
    },
    {
        path : 'css', component: CssComponent
    },
    {
        path: 'angular',
        component: AngularComponent, // Parent Component
        children: [
          { path: 'whatisFrontend', component:SubAngularComponent },
          { path: 'whyAngular', component: SubAngularComponent },
         { path: '', redirectTo: 'whatisFrontend', pathMatch: 'full' }
        ]
    }
];
