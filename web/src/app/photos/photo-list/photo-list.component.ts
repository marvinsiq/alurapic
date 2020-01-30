import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit, OnDestroy {

  photos: Photo[] = [];
  filter: string = "";

  // padrao de projeto Debounce
  debounce: Subject<string> = new Subject<string>();

  hasMore: boolean = true;
  page: number = 1;

  constructor(private activatedRoute: ActivatedRoute, private photoService: PhotoService) { }

  ngOnInit(): void {
    this.photos = this.activatedRoute.snapshot.data.photos;

    // Só executa o subscribe depois de 300ms.
    // subscribe irá escutar o evento de debounce.next (disparado no template)
    this.debounce
      .pipe(debounceTime(300))
      .subscribe(filter => this.filter = filter);
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

  load() {
    let userName = this.activatedRoute.snapshot.params.userName;

    this.photoService.listFromUserPaginated(userName, ++this.page)
      .subscribe(photos => {
        this.photos = this.photos.concat(photos);
        this.hasMore = photos.length > 0;
      });
  }
}
