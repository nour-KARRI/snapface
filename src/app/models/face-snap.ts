export class FaceSnap{

  location?: string;
  constructor(
    public title: string,
    public imageUrl:string,
    public description: string, 
    public createdDate: Date, 
    public snaps:number){
      console.log(this)
    }

    addSnap():void{
      this.snaps++;
    }

    removeSnap(): void{
      this.snaps--;
    }

    setLocation(location: string): FaceSnap{
      this.location=location;
      return this;
    }
}