function cards() {
    // menu item используем классы для Карточек

    class MenuItem {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            //this.currency = currency;
            this.parent = document.querySelector(parentSelector);
            this.classes = classes;
            this.transfer = 27;
            this.changeToUAH();
        }

        render() {
            let menuItemDiv = document.createElement('div');

            if (this.classes.length === 0) {
                this.element = 'menu__item';
                menuItemDiv.classList.add(this.element);
            } else {
                this.classes.forEach(className => menuItemDiv.classList.add(className));
            }

            menuItemDiv.innerHTML = `
                        <img src="${this.src}" alt="${this.alt}">
                        <h3 class="menu__item-subtitle">${this.title}</h3>
                        <div class="menu__item-descr">${this.descr}</div>
                        <div class="menu__item-divider"></div>
                        <div class="menu__item-price">
                            <div class="menu__item-cost">Цена:</div>
                            <div class="menu__item-total"><span>${this.price}</span>'грн/день'</div>
                        </div>
                `;

            //console.log(menuContainer);
            this.parent.append(menuItemDiv);
        }

        changeToUAH() {
            this.price = this.price * this.transfer;
        }


    } // -------- class MenuItem


    const getResource = async (url) => {
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    };

    getResource('http://localhost:3000/menu')
        .then(data => {
            data.forEach(({
                img,
                altimg,
                title,
                descr,
                price
            }) => {
                new MenuItem(img, altimg, title, descr, price, '.menu__field .container').render();
            });
        });

    // -------- menu item
}

module.exports = cards;
