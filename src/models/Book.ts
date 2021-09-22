export class Book{

    title:string;
    nomAuteur:string;
    isLend:boolean;

    constructor(title:string){
        this.title=title;
        this.isLend=false;
    }
}