import { myBaseElement } from "../../core/base-element.js";
import { html } from "../../core/utils.js";

export class TaskItem extends myBaseElement {
  get observedAttributes() {
    return ["text", "start", "end", "createdAt"];
  }
  get styles() {
    return `

              *{
                  box-sizing: border-box;
                }
              .task-item{
                  //background-color:rgba(242, 242, 242);
                  height: 50px;
                  width: 100%;
                  border-radius: 20px;
                  display: flex;
                  gap: 3px;
                  padding: 15px;
              }

              
              .date-indicator{
                  transform: rotate(-90deg);
                  font-size: 9px;
                  font-weight:bold;
                  color:rgba(12, 10, 10, 0.79);
                  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
              }

              input[type="checkbox"] {
                  width: 18px;
                  height: 18px;
                  border-radius:15px;
              }

              .task-content{
                  display: flex;
                  flex-direction: column;
                 padding: 0 0 0 15px;
              }

              .task-content span:first-child{
                  font-family: 'Courier New', Courier, monospace;
                  font-size: 15px;
              }

              .task-content span:last-child{
                  font-family: 'Courier New', Courier, monospace;
                  font-size: 12px;
              }
      `;
  }

  connectedCallback() {
    super.connectedCallback();
    this.renderRoot
      .querySelector('input[type="checkbox"]')
      .addEventListener("click", () => {
        console.log("dans le bouton");
        this.dispatchEvent(
          new CustomEvent("task-delete", {
            bubbles: true,
            composed: true,
            detail: this.getAttribute("id"),
          }),
        );
      });
  }

  render() {
    return html` <div class="task-item">
      <span class="date-indicator">${this.getAttribute("createdAt")}</span>
      <input type="checkbox" name="" id="" />
      <div class="task-content">
        <span>${this.getAttribute("text")}</span>
        <span>${this.getAttribute("start")}-${this.getAttribute("end")}</span>
      </div>
    </div>`;
  }
}
customElements.define("my-task", TaskItem);
