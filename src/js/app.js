import { myBaseElement } from "../core/base-element.js";
import { html } from "../core/utils.js";
// import "./components/add-button/add-button.js";
// import "./components/calendar-strip/calendar-strip.js";
// import "./components/task-list/task-list.js";

export class App extends myBaseElement {
  constructor() {
    super();
    this._tasks = [
      { title: "ma première tache", start: "13h00", end: "13h30", id: 0 },
      { title: "ma première tache", start: "13h00", end: "13h30", id: 1 },
      { title: "ma première tache", start: "13h00", end: "13h30", id: 2 },
      { title: "ma première tache", start: "13h00", end: "13h30", id: 3 },
    ];
    this.tasksList = null;
  }

  get tasks() {
    return this._tasks;
  }

  set tasks(newvalue) {
    this._tasks = newvalue;
    for (let i = 0; i < this.tasks.length; i++) {
      this._tasks[i]["id"] = i;
    }
    this.update();
  }

  get styles() {
    return `

            :host{
                background:linear-gradient(to bottom,rgba(61, 67, 198),white,white);
                width: 50%;
                overflow:hidden;
                border-radius: 20px;
            }
            
            .slider{
              display:flex;
              width:200%;
              transition: transform .3s ease;
            }

            .left,
            .right{
              width:50%;
              box-sizing:border-box;
            }

            .show-form{
              transform: translateX(-50%);
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

  connectedCallback() {
    super.connectedCallback();
    setTimeout(() => {
      this.tasksList = this.renderRoot.querySelector("tasks-list");
      this.tasksList.tasks = this.tasks;
      this.addEventListener("task-deleted", (event) => {
        this.tasks = this.tasks.filter((task, index) => index != event.detail);
      });
      this.addEventListener("goOrConfirmForm", (event) => {
        const slider = this.renderRoot.querySelector(".slider");
        if (event.detail == "go") slider.classList.toggle("show-form");
        else if (event.detail == "confirm") {
          const formulaire = this.renderRoot.querySelector("create-task-form");
          let title = formulaire.InputValue[0].value;
          let start = formulaire.InputValue[1].value;
          let end = formulaire.InputValue[2].value;
          if (title && start && end) {
            if (!formulaire.checkInputValue) {
              alert("le format de l'heure de début/fin est invalide");
              return;
            }
            let NewTask = { title: title, start: start, end: end };
            this.tasks.push(NewTask);
            this.tasks = this.tasks;
          } else {
            console.log("n'y allons pas");
          }
          slider.classList.remove("show-form");
        } else alert("attribut de add-button invalid ou non renseigné");
      });
    }, 0);
  }

  render() {
    const date = new Date();
    const month = date.toLocaleDateString("fr-FR", { month: "long" });
    const day = date.getDate();
    return html`
      <div class="slider">
        <div class="left">
          <div class="header">
            <div class="head">
              <p>${day} ${month}</p>
            </div>
            <div class="sub">
              <span class="tasks-numbers"
                ><span>Today</span><span>${this.tasks.length} Tasks</span></span
              >
              <add-button
                class-button="white"
                text="Add New"
                use-for="go"
              ></add-button>
            </div>
          </div>
          <div class="tasks">
            <!--  -->
            <this-day></this-day>
            <tasks-list></tasks-list>
          </div>
        </div>
        <create-task-form class="right"></create-task-form>
      </div>
    `;
  }

  update() {
    super.update();
    this.renderRoot.querySelector("tasks-list").tasks = this.tasks;
  }
}

customElements.define("to-do-list", App);
