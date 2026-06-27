import { myBaseElement } from "../../core/base-element.js";
// import { FormElement } from "../../core/form-element.js";
import { html } from "../../core/utils.js";

export class Input extends myBaseElement{

    get observedAttributes(){
        return ['text'];
    }

    get styles(){
        return`
            :host{
                --input: rgba(51, 51, 51);
                --texte: rgba(91, 117, 20);
                --sub: rgba(194, 194, 194);
                --back: rgba(31, 31, 31);
                --fond: rgba(20, 20, 20);
            }

            input {
                height: 50px;
                outline: none;
                border: none;
                border-radius: 15px;
                background: var(--input);
                text-align: center;
                width: 100%;
                font-size: 20px;
                font-weight: bold;
                font-style: italic;
                color: white;
            }

            input::placeholder {
                font-size: 20px;
                font-weight: bold;
                font-style: italic;
                color: white;
            }
        `;
    }
    
    render(){
        return html`
            *<input type="text" placeholder="${this.getAttribute('text')}"  required>
        `;
    }
}

customElements.define("form-input",Input);