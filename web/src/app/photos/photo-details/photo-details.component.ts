import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoService } from '../photo/photo.service';
import { Observable } from 'rxjs';
import { Photo } from '../photo/photo';

@Component({
  selector: 'ap-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: [ './photo-details.component.css' ]
})
export class PhotoDetailsComponent implements OnInit {

  photo$: Observable<Photo>

  constructor(private route: ActivatedRoute,
    private photoService: PhotoService) { }

  ngOnInit() {    
    this.photo$ = this.photoService.findById(this.route.snapshot.params.id);
  }

}
