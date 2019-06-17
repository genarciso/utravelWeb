import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PaginaInicialComponent} from './pagina-inicial/pagina-inicial.component';
import {PaginaCentralComponent} from './pagina-central/pagina-central.component';
const routes: Routes = [
    {
        path: '',
        component: PaginaInicialComponent
    },
    /*{
        path: 'dashboard',
        component: PaginaCentralComponent,
        data: {
            title: 'Home'
        },
        children: [
            {
                path: 'base',
                loadChildren: () => import('./views/base/base.module').then(m => m.BaseModule)
            },
            {
                path: 'buttons',
                loadChildren: () => import('./views/buttons/buttons.module').then(m => m.ButtonsModule)
            },
            {
                path: 'charts',
                loadChildren: () => import('./views/chartjs/chartjs.module').then(m => m.ChartJSModule)
            },
            {
                path: 'dashboard',
                loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
            },
            {
                path: 'icons',
                loadChildren: () => import('./views/icons/icons.module').then(m => m.IconsModule)
            },
            {
                path: 'notifications',
                loadChildren: () => import('./views/notifications/notifications.module').then(m => m.NotificationsModule)
            },
            {
                path: 'theme',
                loadChildren: () => import('./views/theme/theme.module').then(m => m.ThemeModule)
            },
            {
                path: 'widgets',
                loadChildren: () => import('./views/widgets/widgets.module').then(m => m.WidgetsModule)
            }
        ]
    },*/

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
