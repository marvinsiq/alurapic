import { Component, OnInit, Input } from '@angular/core';
import { environment } from '../../../environments/environment'

const CLOUD = environment.apiUrl + "/imgs/";

@Component({
  selector: 'ap-photo',
  templateUrl: './photo.component.html'
})
export class PhotoComponent {

  private _url = '';

  @Input() description = '';

  constructor() { }

  @Input() set url(url: string) {
    if (!url.startsWith('data')) {
      this._url = CLOUD + url;
    } else {
      this._url = url;
    }
  }

  get url() {
    return this._url;
  }

}
