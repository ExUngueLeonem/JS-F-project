
export default class GotService {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    } 
  
    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`); 
    
        if (!res.ok) {
            throw new Error(`could not fetch ${url}, status: ${res.status}`)
        }
        
        return await res.json();
    };

    getAllCharacters = async () => {
        const res = await this.getResource('/characters?page=5&pageSize=10');
        return res.map(this._transformCharacter);
    }

    getCharacter = async (id) => {
        const character = await this.getResource(`/characters/${id}`);
        return this._transformCharacter(character);
    }

    getAllHouses = async () => {
        const res = await this.getResource('/houses/');
        return res.map(this._transformHouse);
    }

    getHouse = async (id) => {
        const house = await this.getResource(`/houses/${id}/`);
        return this._transformHouse(house);
    }

    getAllBooks = async () => {
        const res = await this.getResource(`/books/`);
        return res.map(this._transformBook);
    }

    getBook = async (id) => {
        const book = await this.getResource(`/books/${id}/`);
        return this._transformBook(book);
    }

    _extractId = (item) => {
        const idRegExp = /\/( [0-9]*)$/;
        return item.url.match(idRegExp)[1];
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

        
        /* 
        for (let value of familyHouse) {
            if (!familyHouse[value]) {
                familyHouse[value] = "---"
            }
        } 
        */

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
