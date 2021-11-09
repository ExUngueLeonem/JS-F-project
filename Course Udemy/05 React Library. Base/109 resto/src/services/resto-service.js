export default class RestoService {
    async getMenuItems() {
        let menuTitle =[];
        await fetch('http://localhost:3000/menu')
            .then(res => res.json())
            //.then(res => {return menuTitle = res.map(obj => obj.title)})
            .then(res => {return menuTitle = res})
            .then(res => console.log(res))
        return menuTitle;
    }
}