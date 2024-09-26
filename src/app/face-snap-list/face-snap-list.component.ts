import { Component, OnInit } from '@angular/core';
import { FaceSnapComponent } from '../face-snap/face-snap.component';
import { FaceSnap } from '../models/face-snap';
import { FaceSnapService } from '../services/face-snap.service';
import { SingleFaceSnapComponent } from '../single-face-snap/single-face-snap.component';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [
    FaceSnapComponent,
    SingleFaceSnapComponent,
    CommonModule
  ],
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
