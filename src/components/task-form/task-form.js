import { myBaseElement } from "../../core/base-element.js";
// import { FormElement } from "../../core/form-element.js";
import { html } from "../../core/utils.js";

export class TaskForm extends myBaseElement {
  constructor() {
    super();
    this.inputs = null;
  }

  connectedCallback() {
    super.connectedCallback();
    setTimeout(() => {
      this.inputs = [...this.renderRoot.querySelectorAll("form-input")].map(
        (i) => i.renderRoot.querySelector("input"),
      );
    }, 0);
  }
  get styles() {
    return `
            :host {
                position:relative;
                --vert-spe: rgba(91, 117, 20);
                --white-spe: rgba(194, 194, 194);
                --background1: rgba(31, 31, 31);
                background: rgba(20, 20, 20);
                padding:20px;
            }


            .form-container {
                display: flex;
                flex-direction: column;
                align-items: center;
                background:var(--background1) ;
                padding:25px;
                border-radius:20px;
            }

            .input {
                display: flex;
                flex-direction: column;
                gap: 15px;
                width:80%;
            }

            p {
                color:var(--white-spe) ;
            }
        
        `;
  }

  get InputValue() {
    return this.inputs;
  }

  get checkInputValue() {
    for (let i = 1; i < this.inputs.length; i++) {
      if (!this.checkHoursFormat(this.inputs[i].value)) return false;
    }
    return true;
  }

  checkHoursFormat(hours) {
    console.log(hours);
    return /^([01]\d|2[0-3]):([0-5]\d|0\d)$/.test(hours);
  }

  render() {
    return `
            <add-button
                class-button="blue"
                text="+"
                use-for="confirm"
            ></add-button>
            <div class="form-container">
                <image-titre
                titre="TaskFlow"
                sub-title="manage your tasks easily"
                src-img="../design/todolistnow.webp"
                alt-img="Create a new task"
                ></image-titre>
                <p>"register data for a new task"</p>
                <div class="input">
                <form-input text="task description"></form-input>
                <form-input text="task start at"></form-input>
                <form-input text="task end at"></form-input>
                </div>
            </div>
        
        `;
  }
}

customElements.define("create-task-form", TaskForm);
