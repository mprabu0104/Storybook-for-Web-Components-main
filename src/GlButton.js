import { LitElement, html, css } from 'lit-element';

export class GlButton extends LitElement {
  static get properties() {
    return {
      buttonText: { type: String }
    };
  }

  constructor() {
      super();
      this.buttonText = this.getAttribute("buttonText");
  }
  render() {
    return html`<button type="button" class="${this.buttonText.toLowerCase()}">${this.buttonText}</button>`;
  }

  static getStyles() {
    return css`
      button {
        background-color: var(--gl-button-bg-color, #4caf50);
        border: none;
        color: var(--gl-button-font-color, white);
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: var(--gl-button-font-size, 16px);
        margin: 4px 2px;
        cursor: pointer;
      }
      .primary {
        background-color: var(--gl-button-bg-color, #4caf50);
      }
      .danger {
        background-color: var(--gl-button-bg-color, #cd2b2c); 
      }
    `;
  }
}
