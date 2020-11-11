export default class BaseComponent {

    constructor() {
        this.element = null;
    }

    appendToRoot() {
        const root = document.getElementById('root');
        root.appendChild(this.element);
    }

    hide() {
        this.element.classList.add('d-none');
    }

    show() {
        this.element.classList.remove('d-none');
    }

}