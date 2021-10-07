
export default class GotService {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    } 

    async getResource (url) {
        const res = await fetch(`${this._apiBase}${url}`); 
    
        if (!res.ok) {
            throw new Error(`could not fetch ${url}, status: ${res.status}`)
        }
        
        return await res.json();
    };

    async getAllCharacters() {
        const res = await this.getResource('/characters?page=5&pageSize=10');
        return res.map( );
    }

    async getCharacter(id){
        const character = await this.getResource(`/characters/${id}`)
        return this._transformCharacter(character);
    }

    getAllHouses(){
        return this.getResource(`/houses/`);
    }

    getHouse(id) {
        return this.getResource(`/houses/${id}/`);
    }

    getAllBooks() {
        return this.getResource(`/books/`);
    }

    getBook(id) {
        return this.getResource(`/books/${id}/`);
    }

    _transformCharacter(char) {

        let character = {
            name: char.name,
            gender: char.gender,
            born: char.born,
            died: char.died,
            culture: char.culture   
        }

        for (let value in character) {
            if (!character[value]) {
                character[value] = "---"
            }
        }

        return character

    }

    _transformHouse(house) {

        let familyHouse = {
            name: house.name,
            region: house.region,
            words: house.words,
            titles: house.titles,
            overlord: house.overlord,
            ancestralWeapons: house.ancestralWeapons
        }

        for (let value of familyHouse) {
            if (!familyHouse[value]) {
                familyHouse[value] = "---"
            }
        }

        return familyHouse
    }

    _transformBook(book) {
        return {
            name: book.name,
            numberOfPages: book.numberOfPages,
            publisher: book.publisher,
            released: book.released
        }
    }
    
}


/* 
const got = new GotService();

got.getAllCharacters()
   .then(res => {
       res.forEach(item => console.log(item.name));
    });

got.getCharacter(130)
   .then(res => console.log(res));
 */