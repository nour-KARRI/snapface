import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { DatePipe, NgClass, NgStyle, TitleCasePipe } from '@angular/common';

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
export class FaceSnapComponent implements OnInit{
  @Input() faceSnap!:FaceSnap;
  
  userHasSnaped!:boolean;
  snapButtonText!: string;

  ngOnInit() {
    this.userHasSnaped=false
    this.snapButtonText="Oh Snap!"
  }

  onAddSnap(){
    if (this.userHasSnaped) {
      this.unSnap();
    } else {
      this.snap();
    }
  }

  private snap() {
    this.userHasSnaped = true;
    this.snapButtonText = "Oh Snap!";
    this.faceSnap.addSnap();
  }

  private unSnap() {
    this.userHasSnaped = false;
    this.snapButtonText = "Oops, Un Snap";
    this.faceSnap.removeSnap();
  }
}
