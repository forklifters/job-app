import { Component, Input } from '@angular/core';
import { Job } from '../../../models/job.model';

@Component({
  selector: 'app-job-item',
  templateUrl: './job-item.component.html',
  styleUrls: ['./job-item.component.css']
})
export class JobItemComponent {
  /*
    This is a child component of the job feed
    This goal of this component is to design the
    inputs and outputs for the job items
      - Acts as the Job description model
  */
  @Input() jobItem: Job;
  constructor() { }

}
