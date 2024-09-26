import { Component, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { DatePipe, NgClass, NgStyle, TitleCasePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    TitleCasePipe,
    DatePipe
  ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent{
  @Input() faceSnap!:FaceSnap;
  
  userHasSnaped!:boolean;

  constructor(private route: Router){}

  onViewFaceSnap(){
      this.route.navigateByUrl(`/facesnaps/${this.faceSnap.id}`);
  }
}
