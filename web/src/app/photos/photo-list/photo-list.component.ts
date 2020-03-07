import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html'
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = [];
  filter: string = "";  
  hasMore: boolean = true;
  page: number = 1;
  userName = "";

  constructor(private activatedRoute: ActivatedRoute, private photoService: PhotoService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.userName = params.userName;
      this.photos = this.activatedRoute.snapshot.data['photos'];
    });
  }

  load() {

    this.photoService.listFromUserPaginated(this.userName, ++this.page)
      .subscribe(photos => {
        this.filter = '';
        this.photos = this.photos.concat(photos);
        this.hasMore = photos.length > 0;
      });
  }
}
