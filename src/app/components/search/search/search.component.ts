import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  /*
    Search landing page to look at job descriptions
      - Reactive search that async grabs all the jobs that match descrition and tag
  */
  constructor() { }

  ngOnInit() {
  }

}
