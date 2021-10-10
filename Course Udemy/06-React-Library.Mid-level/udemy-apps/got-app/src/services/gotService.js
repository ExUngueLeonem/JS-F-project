
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

    getAllBooks = async () => {
        const res = await this.getResource(`/books/`);
        return res.map(this._transformBook);
    }

    getBook = async (id) => {
        const book = await this.getResource(`/books/${id}/`);
        return this._transformBook(book);
    }

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

    isSet(data) {
        if (data) {
            return data
        } else {
            return 'no data'
        }
    }

    _extractId = (item) => {
        const idRegExp = /\/([0-9]*)$/;
        return item.url.match(idRegExp)[1];
    }

    _transformCharacter = (char) => {
        //let id = this._extractId(char);

        let character = {
            name: this.isSet(char.name),
            gender: this.isSet(char.gender),
            born: this.isSet(char.born),
            died: this.isSet(char.died),
            culture: this.isSet(char.culture)//,
            //id: id   
        }

        character.id = this._extractId(char);

        return character

    }

    _transformHouse = (house) => {
        let transformedHouse = {
            name: house.name,
            region: house.region,
            words: house.words,
            titles: house.titles,
            overlord: house.overlord,
            ancestralWeapons: house.ancestralWeapons
        }
        transformedHouse.id = this._extractId(house);
        return transformedHouse

        
        /* 
        for (let value of familyHouse) {
            if (!familyHouse[value]) {
                familyHouse[value] = "---"
            }
        } 
        */

    }

    _transformBook = (book) => {
        //let id = this._extractId(book);
        let transformedBook = {
            name: book.name,
            numberOfPages: book.numberOfPages,
            publisher: book.publisher,
            released: book.released           
        }
        transformedBook.id = this._extractId(book);
        return transformedBook
    }
    
}
