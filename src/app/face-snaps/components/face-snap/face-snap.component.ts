import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnap } from '../../../core/models/face-snap';

@Component({
  selector: 'app-face-snap',
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
