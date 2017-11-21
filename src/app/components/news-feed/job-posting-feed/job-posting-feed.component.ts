import { Component, OnInit } from '@angular/core';
import { JOBS } from '../../../mock-data/mock-jobs';

// import * as fromJobs from '../../../reducers/job.reducer';
// import * as actions from '../../../actions/job.actions';
// import { Store } from '@ngrx/store';
// import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-job-posting-feed',
  templateUrl: './job-posting-feed.component.html',
  styleUrls: ['./job-posting-feed.component.css']
})
export class JobPostingFeedComponent {
  jobs = JOBS;
 /*
    This component is going to be the component
    that gets all the jobs from the storage
 */

  // constructor(private store: Store<fromJobs.State>) { }

  constructor() {

  }

  // ngOnInit() {
  //   this.jobs = this.store.select(fromJobs.selectAll);
  // }

}
