import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { JobPostingFormComponent } from './components/forms/job-posting-form/job-posting-form.component';
import { SearchComponent } from './components/search/search/search.component';
import { JobPostingFeedComponent } from './components/news-feed/job-posting-feed/job-posting-feed.component';
import { JobDetailComponent } from './components/job/job-detail/job-detail.component';
import { JobEditComponent } from './components/job/job-edit/job-edit.component';
import { JobItemComponent } from './components/job/job-item/job-item.component';
import { JobComponent } from './components/job/job.component';

import { routing } from './app.routing';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './reducers/index';

@NgModule({
  declarations: [
    AppComponent,
    JobPostingFormComponent,
    SearchComponent,
    JobPostingFeedComponent,
    JobDetailComponent,
    JobEditComponent,
    JobItemComponent,
    JobComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

