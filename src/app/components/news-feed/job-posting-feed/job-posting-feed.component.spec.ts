import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobPostingFeedComponent } from './job-posting-feed.component';

describe('JobPostingFeedComponent', () => {
  let component: JobPostingFeedComponent;
  let fixture: ComponentFixture<JobPostingFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobPostingFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobPostingFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
