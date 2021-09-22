import { Book } from "../models/Book";

export class BooksService{
    
    booksList: Book [] =[
        {
            title:'Le Bourgeois gentille homme',
            nomAuteur:'Molière',
            isLend: true
        },
        {
            title:'Harry Potter',
            nomAuteur:'JK Rowling',
            isLend: true
        },
        {
            title:'Le chien de Baskerville',
            nomAuteur:'Conan Doyle',
            isLend: false
        }
    ]
}