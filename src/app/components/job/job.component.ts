import { Component, OnInit } from '@angular/core';
import { Job } from '../../models/job.model';
import { Observable } from 'rxjs/Observable';
import * as fromJobs from '../../reducers/job.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {
 /*
    This component is going to be the component
    that gets all the jobs from the state

 */
  jobs: Observable<any>;
  constructor(private store: Store<fromJobs.State>) { }

  ngOnInit() {
    this.jobs = this.store.select(fromJobs.selectAll);
  }

}
