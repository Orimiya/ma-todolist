import { myBaseElement } from "../../core/base-element.js";
import { html } from "../../core/utils.js";

export class Tof extends myBaseElement {
  get observedAttributes() {
    return ['titre','sub-title','alt-img','src-img',];
  }
  get styles() {
    return `
            :host{
                --vert-spe: rgba(91, 117, 20);
                display: flex;
                flex-direction:column;
                align-items:center;
                gap: 10px;
                margin-bottom:10px;
            }

            img{
                width: 25%;
                border-radius: 50%;
                margin-bottom:10px;

            }

            p:first-of-type{
            font-size: 25px;
            font-weight: bold;
            font-family: 'Times New Roman', Times, serif;
            color:white;
            font-style: italic;
            margin:0;
            }

            p:last-of-type{
            color: var(--vert-spe);
            font-weight: bold;
            font-size: 15px;
            margin:0;
            }
        `;
  }

  render() {
    return html`
      <img src="${this.getAttribute('src-img')}" alt="${this.getAttribute('alt-img')}" />
      <p>${this.getAttribute('titre')}</p>
      <p>${this.getAttribute('sub-title')}</p>
    `;
  }
}

customElements.define("image-titre", Tof);
