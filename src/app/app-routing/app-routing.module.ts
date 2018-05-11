import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LunchListComponent } from '../lunch-list/lunch-list.component'
import { AdminComponent } from '../admin/admin.component'

const routes: Routes = [

    {
        path: 'lunchadmin',
        component: AdminComponent,
    },
    {
        path: '',
        component: LunchListComponent,
    },
    {
        path: '**',
        component: LunchListComponent,
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
