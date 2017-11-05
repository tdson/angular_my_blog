import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Entry } from '../models/entry';

import 'rxjs/add/operator/toPromise';
import axios from 'axios';

@Injectable()
export class EntryService {
  private host = 'http://localhost:3000';
  private namespace = 'api';
  private apiVersion = 'v1';
  private entryApi = `${this.host}/${this.namespace}/${this.apiVersion}/entries`;

  constructor(private http: Http) { }

  index(): Promise<Entry[]> {
    return axios.get(this.entryApi)
      .then(response => response.data.data as Entry [])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    alert(error.message || error);
    return Promise.reject(error.message || error);
  }
}
