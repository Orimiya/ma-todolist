import { myBaseElement } from "../../core/base-element.js";
import { html } from "../../core/utils.js";

export class AddButton extends myBaseElement {
  get observedAttributes() {
    return ["class-button", "text", "use-for"];
  }
  get styles() {
    return `

            button{
            height: 55px;
            padding: 10px 30px 10px 30px;
            border:none;
            border-radius:20px;
            cursor:pointer;
            
            }
            .blue{
                background: rgba(61, 67, 198);
                color:white;
                box-shadow:0 4px 6px rgba(0,0,0,0.3);
                font-size:25px;
                font-weight:bold;
            }
            .white{
                background:white;
                color:rgba(61, 67, 198);
                box-shadow:0 0 6px black;
            }
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    setTimeout(() => {
      this.addEventListener("click", () => {
        this.dispatchEvent(
          new CustomEvent("goOrConfirmForm", {
            composed: true,
            bubbles: true,
            detail: this.getAttribute("use-for"),
          }),
        );
      });
    }, 0);
  }

  render() {
    return html`
      <button class="${this.getAttribute("class-button")}">
        ${this.getAttribute("text")}
      </button>
    `;
  }
}

customElements.define("add-button", AddButton);
