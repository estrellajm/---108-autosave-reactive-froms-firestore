import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {
  MatIconModule,
  MatInputModule,
  MatButtonModule,
  MatSelectModule,
  MatGridListModule
} from '@angular/material';
import { FireFormDirective } from './fire-form.directive';
import { FormComponentComponent } from './component/form-component/form-component.component';
import { environment } from '../environments/environment';
import { FormContainerComponent } from './container/form-container/form-container.component';

const routes: Routes = [
  {
    path: 'form',
    component: FormContainerComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: FormContainerComponent
  }
];

@NgModule({
  declarations: [AppComponent, FireFormDirective, FormComponentComponent, FormContainerComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatGridListModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
