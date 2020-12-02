import { betterCreateElement, appendMany } from "./uiUtils.js";

export default class DayComponent {

    constructor(dayNumber, giftImage, giftUrl) {
        this.dayNumber = dayNumber;
        this.giftImage = giftImage;
        this.giftUrl = giftUrl;
        this.element = null;
    } 

    build() {
        const frame = betterCreateElement('div', {
            class: 'day',
            attributes: {id: `day-${this.dayNumber}`}
        });

        const window = betterCreateElement('div', 'window');

        const gift = betterCreateElement('div', {
            attributes: {id: `gift-${this.dayNumber}`},
            class: 'gift hidden'
        });

        const giftLink = betterCreateElement('a', {
            attributes: {href: this.giftUrl}
        });

        const giftImage = betterCreateElement('img', {
            attributes: {src: this.giftImage}
        });

        const button = betterCreateElement('button', {
            class: 'number btn btn-link',
            innerText: String(this.dayNumber)
        });

        appendMany(window,[button]);
        appendMany(giftLink, [giftImage])
        appendMany(gift, [giftLink]);
        appendMany(frame, [window, gift]);

        // event listeners

        button.addEventListener('click', (e) => {
            const today = new Date();
            const d = new Date(2020, 11, this.dayNumber, 0, 0, 0, 0); // 11 - December
            if (today >= d) {
                e.target.parentElement.classList.add('hidden');
                document.getElementById(`gift-${this.dayNumber}`).classList.remove('hidden')
            }
        });

        this.element = frame;
    }

    appendToRoot() {
        const root = document.getElementById('root');
        root.appendChild(this.element);
    }


}