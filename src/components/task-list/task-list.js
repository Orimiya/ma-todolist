// import './task-list/task-list.js'
import { myBaseElement } from "../../core/base-element.js";

export class TaskList extends myBaseElement {
  constructor() {
    super();
    this._tasks = [
      { title: "ma première tache", start: "13h00", end: "13h30" },
      { title: "ma première tache", start: "13h00", end: "13h30" },
      { title: "ma première tache", start: "13h00", end: "13h30" },
      { title: "ma première tache", start: "13h00", end: "13h30" },
    ];
  }

  get styles(){
    return `
        :host{
            display:flex;
            flex-direction:column;
            gap:15px;
            padding: 0 20px 0 0;
            border-right: solid 3px rgb(242,242,242);
        }
    `
  }

    get tasks(){
        return this._tasks;
    }

    set tasks(newValue){
      this._tasks = newValue;
      this.update();
    }

  render() {
    if (!this.tasks.length) return "";

    return this.tasks
      .map(
        (task) =>
          `
            <my-task 
                text='${task.title} '
                start='${task.start}' 
                end='${task.end}'
                createdAt='${new Date().toLocaleDateString()}'
            ></my-task>
            `,
      )
      .join("");
  }
}

customElements.define("tasks-list", TaskList);
