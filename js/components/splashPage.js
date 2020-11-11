import BaseComponent from './baseComponent.js';
import {betterCreateElement, appendMany} from '../lib/uiUtils.js';

export default class SplashPage extends BaseComponent {

    constructor() {
        super();
    }

    build() {

        const main = betterCreateElement('section');

        const row = betterCreateElement('div');

        const col1 = betterCreateElement('div', {
            class: 'col-md-4 bg-primary',
            innerText: 'col-md-4'
        });

        const col2 = betterCreateElement('div', {
            class: 'col-md-4 bg-primary',
            innerText: 'col-md-4'
        });

        appendMany(row, [col1, col2]);
        appendMany(main, [row]);

        this.element = main;

    }


}