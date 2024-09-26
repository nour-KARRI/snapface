import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { SnapType } from '../models/snap-type.type';
import { HttpClient } from '@angular/common/http';
import { map, Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapService {

  faceSnapById!: FaceSnap | undefined;

  constructor(private http: HttpClient) { }

  mySnaps: FaceSnap[] = [];

addFaceSnap(snapForm: {title: string, imageUrl: string, description: string, location?: string}): void{
  const faceSnap: FaceSnap ={
    ...snapForm,
    createdDate: new Date,
    snaps: 0,
    id: this.mySnaps[this.mySnaps.length - 1].id + 1,
  }
  this.mySnaps.push(faceSnap); 
}

getAllFaceSnaps(): Observable<FaceSnap[]>{
  return this.http.get<FaceSnap[]>('http://localhost:3000/faceSnaps');
}

getFaceSnapById(faceSnapedId: number): Observable<FaceSnap> {
  return this.http.get<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapedId}`)
}

snapFaceSnapById(faceSnapedId: number, snapType: SnapType): Observable<FaceSnap>{
    return this.getFaceSnapById(faceSnapedId).pipe(
      map(faceSnap => ({
        ...faceSnap,
        snaps: faceSnap.snaps + (snapType === 'snap' ? + 1 : -1)
      })),
      switchMap(updatedFaceSnap => this.http.put<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapedId}`, updatedFaceSnap))
    )
}
}
