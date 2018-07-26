import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EntryListComponent } from './entry-list/entry-list.component';
import { JournalService } from './services/journal.service';
import { EntryFormComponent } from './entry-form/entry-form.component';

@NgModule({
  declarations: [
    AppComponent,
    EntryListComponent,
    EntryFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [JournalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
