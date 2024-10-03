import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, switchMap } from 'rxjs';
import { FaceSnap } from '../models/face-snap';
import { SnapType } from '../models/snap-type.type';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapService {

  faceSnapById!: FaceSnap | undefined;

  constructor(private http: HttpClient) { }

  mySnaps$!: Observable<FaceSnap[]>;
  lengthSnaps!: number;

addFaceSnap(snapForm: {title: string, imageUrl: string, description: string, location?: string}): Observable<FaceSnap>{

  return this.getAllFaceSnaps().pipe(
    map(snapfaces => [...snapfaces].sort((a,b)=> a.id - b.id)),
    map(snapfacesSorted => snapfacesSorted[snapfacesSorted.length - 1]),
    map(facesnap=>({
      ...snapForm,
      createdDate: new Date,
      snaps: 0,
      id: facesnap.id + 1
    })),
    switchMap(facesnap=>this.http.post<FaceSnap>('http://localhost:3000/facesnaps',facesnap))
  )
}

postFaceSnap(faceSnap: FaceSnap): Observable<FaceSnap>{
  return this.http.post<FaceSnap>('http://localhost:3000/facesnaps',faceSnap)
}


getAllFaceSnaps(): Observable<FaceSnap[]>{
  return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps');
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
