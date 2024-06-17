export default class CoffeeRoasting extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  _getSlot(name) {
    const slot = document.createElement("slot");
    slot.name = name;
    return slot;
  }

  connectedCallback() {
    const heading = document.createElement("h2");
    heading.appendChild(this._getSlot("heading"));

    const summary = document.createElement("p");
    summary.appendChild(this._getSlot("summary"));

    const citationsHeading = document.createElement("h3");
    citationsHeading.textContent = "Citations";
    const citations = this._getSlot("citations");

    this.shadowRoot.append(heading, summary, citationsHeading, citations);
  }
}

customElements.define("coffee-roasting", CoffeeRoasting);
