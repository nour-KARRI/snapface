import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { CommonModule, DatePipe, NgClass, NgStyle, TitleCasePipe } from '@angular/common';
import { FaceSnapService } from '../services/face-snap.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'single-app-face-snap',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    TitleCasePipe,
    DatePipe,
    RouterLink,
    CommonModule
  ],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss'
})
export class SingleFaceSnapComponent implements OnInit{

  faceSnap$!: Observable<FaceSnap>;
  buttonText!: string;

  constructor(private faceSnapService: FaceSnapService,
    private route: ActivatedRoute){}

  ngOnInit() {
    this.buttonText = "Oh Snap!";
    const faceSnapId = this.route.snapshot.params['id'];
    this.faceSnap$ = this.faceSnapService.getFaceSnapById(faceSnapId);
  }

  onSnap(faceSnapId: number){
    if (this.buttonText === "Oh Snap!") {
      this.faceSnap$ = this.faceSnapService.snapFaceSnapById(faceSnapId, 'snap').pipe(
        tap(()=>this.buttonText = "Oops, Un Snap!")
      )
     } else {
      this.faceSnap$ = this.faceSnapService.snapFaceSnapById(faceSnapId, 'unsnap').pipe(
        tap(()=>this.buttonText = "Oh Snap!"
      )
    )      
    }
  }
}
