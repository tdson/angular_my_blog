import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/layouts/header/header.component';
import { FooterComponent } from './shared/layouts/footer/footer.component';

import { RoutesModule } from './config/routes.module';
import { EntryService } from './services/entry.service';
import { EntryComponent } from './entry/entry.component';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: true });

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EntryComponent
  ],
  imports: [
    BrowserModule,
    rootRouting,
    HttpModule
  ],
  providers: [EntryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
