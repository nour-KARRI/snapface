import { Component, Input, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './models/face-snap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FaceSnapComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  mySnaps!: FaceSnap[];

  ngOnInit(): void {
    this.mySnaps = [
      new FaceSnap(
      'Archibald',
      'https://cdn.pixabay.com/photo/2024/09/05/09/00/watzmann-9024287_1280.jpg',
      'Mon meilleur ami depuis tout petit !',
      new Date(),
      9
    ),
    new FaceSnap(
      'Rayon de soleil',
      'https://media.istockphoto.com/id/1413700004/fr/photo/rayon-de-soleil-dans-les-pyr%C3%A9n%C3%A9es.jpg?s=2048x2048&w=is&k=20&c=5NmmZQsgNjPkYrqx7jwT8tZh__dH71tBMNSgAZ-K4GU=',
      'Rayon de soleil dans les Pyrénées !',
      new Date(),
      125
    ).setLocation("to the mountain"),
    new FaceSnap(
      'hummingbird',
      'https://cdn.pixabay.com/photo/2024/02/20/05/16/hummingbird-8584603_960_720.jpg',
      'Mon meilleur ami depuis tout petit !',
      new Date(),
      360
    )
  ]
  }
}
