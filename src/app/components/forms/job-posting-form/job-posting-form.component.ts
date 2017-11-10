import { Component, OnInit } from '@angular/core';
import { Job } from '../../../models/job.model';
import { Store } from '@ngrx/store';
import * as actions from '../../../actions/job.actions';
import * as fromJobs from '../../../reducers/job.reducer';

@Component({
  selector: 'app-job-posting-form',
  templateUrl: './job-posting-form.component.html',
  styleUrls: ['./job-posting-form.component.css']
})
export class JobPostingFormComponent implements OnInit {
  /*
    This componenet is responsible from getting the job information
    and creating jobs for the jobs list
  */
  constructor(private store: Store<fromJobs.State>) { }

  ngOnInit() {
  }

  createJobPosting() {
    const job: Job = {
      id: new Date().getUTCMilliseconds().toString(),
      title: 'Testing',
      desc: 'Testing'
    };
    this.store.dispatch(new actions.Create(job));
  }

}
