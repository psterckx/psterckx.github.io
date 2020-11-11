import BaseComponent from './baseComponent.js';
import {betterCreateElement, appendMany} from '../lib/uiUtils.js';

export default class NavBar extends BaseComponent {

    constructor() {
        super();
    }

    build() {
        const main = betterCreateElement('nav');

        const ul = betterCreateElement('ul', 'nav');

        const liLogo = betterCreateElement('li', {
            class: 'nav-item',
        });
        const aLogo = betterCreateElement('a', {
            class: 'nav-link active',
            attributes: {href: '#'},
            innerText: 'Peter Sterckx'
        })
        appendMany(liLogo, [aLogo]);

        // const liAbout = betterCreateElement('li', {
        //     class: 'nav-item',
        // });
        // const aAbout = betterCreateElement('a', {
        //     class: 'nav-link active',
        //     attributes: {href: '#'},
        //     innerText: 'Peter Sterckx'
        // })
        // appendMany(liAbout, [aAbout]);



        appendMany(ul, [liLogo]);
        appendMany(main, [ul]);

        this.element = main;
    }

}