import { myBaseElement } from "../../core/base-element.js";
import { html } from "../../core/utils.js";

export class TaskItem extends myBaseElement {
  get observedAttributes() {
    return ["text", "start", "end", "createdAt",'id'];
  }
  get styles() {
    return `

              *{
                  box-sizing: border-box;
                  transition: all .1s;
                }
              .task-item{
                  //background-color:rgba(242, 242, 242);
                  height: 50px;
                  width: 100%;
                  border-radius: 20px;
                  display: flex;
                  align-items:center;
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
                  position:relative;
                  appearance:none;
                  width: 18px;
                  height: 18px;
                  border: 1px solid rgba(61, 67, 198);
                  cursor:pointer;
                  border-radius:5px;
                  
              }

              input[type="checkbox"]::after{
                  content: '';
                  position: absolute;
                  height: 10px;
                  width: 10px;
                  border-radius: 50%;
                  bottom: -25%;
                  right: -25%;
                  background:rgba(61, 67, 198);
              }

              .task-content{
                  display: flex;
                  flex-direction: column;
                 padding: 0 0 0 15px;
              }

              .task-content span:first-child{
                  font-family: 'Courier New', Courier, monospace;
                  font-size: 15px;
                  font-weight: bold;
              }

              .task-content span:last-child{
                  font-family: 'Courier New', Courier, monospace;
                  font-size: 12px;
              }
              
              .blue-hover:hover{
                  cursor:pointer;
                  box-shadow: 0 0 6px rgba(61, 67, 198);
                  background: rgba(61, 67, 198);
                  color: white;
                  height:70px;
              }

              .blue-hover:hover input[type="checkbox"]{
                border-color:white;
                background: rgba(61, 67, 198);

              }

              .blue-hover:hover input[type="checkbox"]::after{
                background:white;
              }

      `;
  }

  connectedCallback() {
    super.connectedCallback();
    setTimeout(() => {
      this.renderRoot
        .querySelector('input[type="checkbox"]')
        .addEventListener("click", () => {
          console.log("dans le bouton");
          this.dispatchEvent(
            new CustomEvent("task-deleted", {
              bubbles: true,
              composed: true,
              detail: this.getAttribute("id"),
            }),
          );
        });
    }, 0);
  }

  render() {
    return html` <div class="task-item">
      <span class="date-indicator">${this.getAttribute("createdAt")}</span>
      <div class="task-item blue-hover">
          <input type="checkbox" name="" id="" />
          <div class="task-content">
            <span>${this.getAttribute("text")}</span>
            <span>${this.getAttribute("start")}-${this.getAttribute("end")}</span>
          </div>
      </div>
      
    </div>`;
  }
}
customElements.define("my-task", TaskItem);
