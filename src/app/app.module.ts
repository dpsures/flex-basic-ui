import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import 'hammerjs';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProgressComponent } from './progress/progress.component';
import { ModulesComponent } from './modules/modules.component';
import { NoticesComponent } from './notices/notices.component';
import { ProfileComponent } from './profile/profile.component';
import { LanguageComponent } from './language/language.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { CoursesComponent } from './courses/courses.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProgressComponent,
    ModulesComponent,
    NoticesComponent,
    ProfileComponent,
    LanguageComponent,
    NotificationsComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule,MaterialModule,FlexLayoutModule,BrowserAnimationsModule
  ],
  providers: [],
  entryComponents:[ProfileComponent, NotificationsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
