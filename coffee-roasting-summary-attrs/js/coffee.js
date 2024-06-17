export default class CoffeeRoasting extends HTMLElement {
  static get observedAttributes() {
    return ["heading", "summary", "citations"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.content = {};
  }

  _getCitationListItem(item) {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    return listItem;
  }

  attributeChangedCallback(name, _oldValue, newValue) {
    if (name === "heading") {
      this.content.heading = newValue;
    }

    if (name === "summary") {
      this.content.summary = newValue;
    }

    if (name === "citations") {
      this.content.citations = newValue.split(",");
    }
  }

  connectedCallback() {
    const heading = document.createElement("h2");
    heading.textContent = this.content.heading;

    const summary = document.createElement("p");
    summary.textContent = this.content.summary;

    const citationsHeading = document.createElement("h3");
    citationsHeading.textContent = "Citations";

    const citations = document.createElement("ul");
    this.content.citations.forEach((item) => {
      citations.append(this._getCitationListItem(item));
    });

    this.shadowRoot.append(heading, summary, citationsHeading, citations);
  }
}

customElements.define("coffee-roasting", CoffeeRoasting);
