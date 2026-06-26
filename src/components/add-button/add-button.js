import { myBaseElement } from "../../core/base-element.js";
import { html } from "../../core/utils.js";

export class AddButton extends myBaseElement {
  get observedAttributes() {
    return ["class-button", "text"];
  }
  get styles(){
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
            }
            .white{
                background:white;
                color:rgba(61, 67, 198);
                box-shadow:0 0 6px black;
            }
    `
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
