import { Routes } from '@angular/router';
import { AngularComponent } from './angular/angular.component';
import { HtmlComponent } from './html/html.component';
import { CssComponent } from './css/css.component';
import { ComponentComponent } from './angular/component/component.component';
import { AngularinfoComponent } from './angular/angularinfo/angularinfo.component';

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
            { path: '', redirectTo: 'overview', pathMatch: 'full' },
          { path: 'overview', component: AngularinfoComponent },
          {path : 'component' , component : ComponentComponent}
        ]
    }
];
