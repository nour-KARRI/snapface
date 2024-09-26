import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { FaceSnap } from '../models/face-snap';
import { CommonModule, DatePipe, TitleCasePipe } from '@angular/common';
import { FaceSnapService } from '../services/face-snap.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-face-snap',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    DatePipe,
    TitleCasePipe,
    CommonModule
  ],
  templateUrl: './new-face-snap.component.html',
  styleUrl: './new-face-snap.component.scss'
})
export class NewFaceSnapComponent implements OnInit{

  snapForm!:FormGroup;
  faceSnapPreview$!: Observable<FaceSnap>
  urlRegex!: RegExp;
  faceSnap!: FaceSnap;

  constructor(private formBuilder: FormBuilder, 
              private faceSnapService: FaceSnapService,
              private router: Router){}

  ngOnInit(): void {
    this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
    
    this.snapForm = this.formBuilder.group({
      title: [null, Validators.required],
      description: [null, Validators.required],
      imageUrl: [null, [Validators.required, Validators.pattern(this.urlRegex)]],
      location: [null]
    }, {
      updateOn : 'blur'
    });

    this.faceSnapPreview$ = this.snapForm.valueChanges.pipe(
      map(formValue => ({
        ...formValue,
        createdDate: new Date(),
        id: 0,
        snaps: 0
      })
    )
    );
  }

  onSubmitForm(): void{
    this.faceSnapService.addFaceSnap(this.snapForm.value);
    this.router.navigateByUrl('/facesnaps')
  }

}
