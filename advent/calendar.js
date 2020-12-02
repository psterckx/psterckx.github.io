import { betterCreateElement, appendMany } from "./uiUtils.js";
import DayComponent from "./day.js";

export default class CalendarComponent {

    constructor(days) {
        this.element = null;
        this.days = days; // an array of 25 numbers
    } 

    build() {

        const main = betterCreateElement('div');

        for (let i = 0; i <= 4; i++) {

            const row = betterCreateElement('div', 'row');
            const columns = [];

            for (let j = i*5; j <= (i*5)+4; j++) { 

                const cell = betterCreateElement('div', {
                    class: 'col-md',
                });

                const dayData = this.days[j];
                const day = new DayComponent(dayData.dayNumber, dayData.giftImageUrl, dayData.giftUrl);
                day.build();

                appendMany(cell, [day.element]);

                columns.push(cell);


            }

            appendMany(row, columns);
            appendMany(main, [row]);
        }

        return this.element = main;
    }

    appendToRoot() {
        const root = document.getElementById('root');
        root.appendChild(this.element);
    }


}