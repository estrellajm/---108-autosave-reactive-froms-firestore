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
import { FormDemoComponent } from './form-demo/form-demo.component';
import { FireFormDirective } from './fire-form.directive';
import { FormComponentComponent } from './form-component/form-component.component';
import { environment } from '../environments/environment';

const routes: Routes = [
  {
    path: 'form',
    component: FormDemoComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: FormDemoComponent
  }
];

@NgModule({
  declarations: [AppComponent, FormDemoComponent, FireFormDirective, FormComponentComponent],
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
