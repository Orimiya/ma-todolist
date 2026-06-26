import { myBaseElement } from "../core/base-element.js";
import { html } from "../core/utils.js";
// import "./components/add-button/add-button.js";
// import "./components/calendar-strip/calendar-strip.js";
// import "./components/task-list/task-list.js";

export class App extends myBaseElement {
  constructor() {
    super();
    this.tasks = [];
  }

  get styles() {
    return `

            :host{
                background: rgba(61, 67, 198);
                width: 50%;
                border-radius: 20px;
            }

            .header {
                /* background:rgba(61, 67, 198);  */
                padding: 20px;
            }

            .header div {
                display: flex;
                align-items: center;
            }

            .sub :last-child {
                margin-left: auto;
            }

            .tasks-numbers {
                color: white;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }

            .tasks-numbers :first-child {
                font-size: 20px;
                font-weight: 500;
                font-family: "Times New Roman", Times, serif;
            }

            .tasks-numbers :last-child {
                font-family: 9px;
                font-style: italic;
            }

            .head {
                color: white;
                display: flex;
                font-size: 20px;
                font-style: italic;
                font-family:
                    "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
                    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
                margin-bottom: 20px;
            }



            .head p {
                width: 100%;
                text-align: center;
            }

            .tasks {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 40px;
                border-top-left-radius: 40px;
                padding: 20px 0 0 0;
                /* width: 50%; */
                background-color: white;
            }
        `;
  }

  render() {
    const date = new Date();
    const month = date.toLocaleDateString("fr-FR", { month: "long" });
    const day = date.getDate();
    return html`
      <div class="header">
        <div class="head">
          <p>${day} ${month}</p>
        </div>
        <div class="sub">
          <span class="tasks-numbers"
            ><span>Today</span><span>${this.tasks.length} Tasks</span></span
          >
          <add-button class-button="white" text="Add New"></add-button>
        </div>
      </div>
      <div class="tasks">
        <this-day></this-day>
        <tasks-list></tasks-list>
      </div>
    `;
  }
}

customElements.define("to-do-list", App);
