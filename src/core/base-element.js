export class myBaseElement extends HTMLElement {
  static get observedAttributes() {
    return [];
  }

  constructor() {
    super();
    this._renderRoot = this.attachShadow({ mode: "open" });
  }

  get renderRoot() {
    return this._renderRoot;
  }

  get styles() {
    return "";
  }

  connectedCallback() {
    this.update();
  }

  attributeChangedCallback(name, lastValue, newValue) {
    try {
      this[name] = JSON.parse(decodeURIComponent(newValue));
    } catch {
      this[name] = newValue;
    }

    this.update();
  }

  updateStyles() {
    const style = this.renderRoot.querySelector("style")
      ? this.renderRoot.querySelector("style")
      : document.createElement("style");
    style.innerText = this.styles;
    this.renderRoot.appendChild(style);
  }

  update() {
    this.renderRoot.innerHTML = this.render();
    this.updateStyles();
  }

  render() {
    return "";
  }
}
