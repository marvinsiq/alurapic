import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { PhotoService } from '../photo/photo.service';
import { Photo } from '../photo/photo';

@Component({
  selector: 'ap-photo-details',
  templateUrl: './photo-details.component.html'
})
export class PhotoDetailsComponent implements OnInit {

  photoId: number;
  photo$: Observable<Photo>;

  constructor(private route: ActivatedRoute,
    private photoService: PhotoService,
    private router: Router) { }

  ngOnInit() {
    this.photoId = this.route.snapshot.params.id;
    this.photo$ = this.photoService.findById(this.photoId);
  }

  remove() {
    this.photoService
      .removePhoto(this.photoId)
      .subscribe(() => this.router.navigate(['']));
  }

}
