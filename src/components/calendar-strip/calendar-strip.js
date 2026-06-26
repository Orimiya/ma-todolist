import { myBaseElement } from "../../core/base-element.js";
import { html } from "../../core/utils.js";

export class CalendarStrip extends myBaseElement {
  get styles() {
    return `

        :host{
            display: flex;
            flex-direction:column;
            gap: 5px;
            align-items:center;
            justify-content:center;
        }

        p{
            font-style: italic;
            font-family: 'Courier New', Courier, monospace;
            color:rgba(61, 67, 198);
            text-align: center;
        }

        .calendar{
            display: flex;
            justify-content:center;
            align-items:center;
            flex-direction: column;
            padding: 10px;
            gap: 5px;
            color: white;
            background:rgba(61, 67, 198);
            border-radius:20px;
            width:50px;
        }

        .chiffre{
            font-size: 25px;
            font-weight: bold;
        }

        .lettre{
            font-size: 12px;
            font-weight: bold;
        }
    `;
  }
  constructor() {
    super();
    this.intervalId = null;
  }
  connectedCallback() {
    super.connectedCallback();
    this.refresh();
  }
  disconnectedCallback() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }
  render() {
    const date = new Date();
    const weekday = date.toLocaleDateString("fr-FR", { weekday: "long" });
    const day = date.getDate();
    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999);
    let remainingTime = endOfDay - date;
    let hours = Math.floor(remainingTime / (3600 * 1000));
    let minutes = Math.floor((remainingTime % (3600 * 1000)) / (1000 * 60));
    let seconds = Math.floor(
      ((remainingTime % (3600 * 1000)) % (1000 * 60)) / 1000,
    );

    return html`
      <div class="calendar">
        <span class="chiffre">${day}</span>
        <span class="lettre">${weekday}</span>
      </div>
      <p>remaining ${hours}h ${minutes}min ${seconds}sec in the day.</p>
    `;
  }
  refresh() {
    this.intervalId = setInterval(() => {
      this.update();
    }, 1000);
  }
}

customElements.define("this-day", CalendarStrip);
