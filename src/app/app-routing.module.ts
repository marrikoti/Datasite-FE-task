import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegisteredUsersComponent} from "./components/registered-users/registered-users.component";

const routes: Routes = [
    {path: '', component: RegisteredUsersComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}