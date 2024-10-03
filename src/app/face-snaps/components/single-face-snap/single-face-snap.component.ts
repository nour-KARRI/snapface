import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../../../core/models/face-snap';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { FaceSnapService } from '../../../core/services/face-snap.service';

@Component({
  selector: 'single-app-face-snap',
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
