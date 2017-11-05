import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EntryService } from './services/entry.service';
import { Entry } from './models/entry';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  entries: Entry[];
  entry: Entry;

  constructor(
    private entryService: EntryService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.entryService.index().then(entries => this.entries = entries);
  }

  onSelect(entry: Entry) {
    this.entry = entry;
  }

  showEntry(entry: Entry): void {
    this.router.navigate(['/entries', entry.id]);
  }
}
