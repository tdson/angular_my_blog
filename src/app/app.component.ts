import { Component, OnInit } from '@angular/core';

import { EntryService } from './services/entry.service';
import { Entry } from './models/entry';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  entries: Entry [];

  constructor(private entryService: EntryService) { }

  ngOnInit(): void {
    this.entryService.index().then(entries => console.log(entries));
  }
}
