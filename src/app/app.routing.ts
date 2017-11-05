import { SearchComponent } from './components/search/search/search.component';
import { RouterModule, Routes } from '@angular/router';
import { JobPostingFormComponent } from './components/forms/job-posting-form/job-posting-form.component';

const APP_ROUTES: Routes = [
    { path: '', redirectTo: 'search', pathMatch: 'full'},
    { path: 'search', component: SearchComponent },
    { path: 'form', component: JobPostingFormComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
