import { NgModule } from '@angular/core';
import { CommonModule, DatePipe, NgStyle, TitleCasePipe } from '@angular/common';
import { FaceSnapComponent } from './components/face-snap/face-snap.component';
import { FaceSnapListComponent } from './components/face-snap-list/face-snap-list.component';
import { NewFaceSnapComponent } from './components/new-face-snap/new-face-snap.component';
import { SingleFaceSnapComponent } from './components/single-face-snap/single-face-snap.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FaceSnapRoutingModule } from './face-snaps-routing.module';



@NgModule({
  declarations: [
    FaceSnapComponent,
    FaceSnapListComponent,
    NewFaceSnapComponent,
    SingleFaceSnapComponent
  ],
  imports: [
    CommonModule,
    NgStyle,
    TitleCasePipe,
    DatePipe,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    FaceSnapRoutingModule
  ],
  exports:[
    FaceSnapComponent,
    FaceSnapListComponent,
    NewFaceSnapComponent,
    SingleFaceSnapComponent
  ]
})
export class FaceSnapsModule { }
