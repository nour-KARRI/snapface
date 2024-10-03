import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { FaceSnap } from '../../../core/models/face-snap';
import { Router } from '@angular/router';
import { FaceSnapService } from '../../../core/services/face-snap.service';

@Component({
  selector: 'app-new-face-snap',
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
