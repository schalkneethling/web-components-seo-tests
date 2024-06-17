export default class CoffeeRoasting extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const slot = document.createElement('slot');
        this.shadowRoot.append(slot);
    }
}

customElements.define('coffee-roasting', CoffeeRoasting);
