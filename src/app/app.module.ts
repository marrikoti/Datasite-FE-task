import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { environment } from '../environments/environment';
import { CrudReducer } from './store/reducers/crud.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CrudEffects } from './store/effects/crud.effects';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RegisteredUsersComponent } from './components/registered-users/registered-users.component';
import { UnregisteredUsersComponent } from './components/unregistered-users/unregistered-users.component';
import { TotalUsersComponent } from './components/total-users/total-users.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import {MatSortModule} from "@angular/material/sort";
import { ProjectMembershipComponent } from './components/project-membership/project-membership.component';
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    RegisteredUsersComponent,
    UnregisteredUsersComponent,
    TotalUsersComponent,
    ProjectMembershipComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        StoreModule.forRoot({userState: CrudReducer}, {
            runtimeChecks: {
                strictStateImmutability: true,
                strictActionImmutability: true
            }
        }),
        EffectsModule.forRoot([CrudEffects]),
        StoreDevtoolsModule.instrument({
            maxAge: 25, // Retains last 25 states
            logOnly: environment.production, // Restrict extension to log-only mode
        }),
        BrowserAnimationsModule,
        MatTableModule,
        MatSortModule,
        MatButtonModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
