import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../../../core/models/face-snap';
import { Observable } from 'rxjs';
import { FaceSnapService } from '../../../core/services/face-snap.service';


@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent implements OnInit{
  mySnaps!: FaceSnap[];
  faceSnaps$!: Observable<FaceSnap[]>

  constructor(private faceSnapService: FaceSnapService){}
 
  ngOnInit(): void {
    this.faceSnaps$ = this.faceSnapService.getAllFaceSnaps();
  }
}
