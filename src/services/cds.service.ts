import { Cd } from "../models/Cd";

export class CdsService{
    
    cdsList: Cd[] =[
        {
            auteur:'Shakira',
            title:"Whenever Wherever",
            isLend:false
        },
        {
            auteur:'Sniper',
            title:'Graver dans la roche',
            isLend:false
        },
        {
            auteur:'Shaggy',
            title:'It wasn\'t me',
            isLend:true

        }
    ]
}