/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('my-element')
export class MyElement extends LitElement {
  static styles = css`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
  `;

  /**
   * The name to say "Hello" to.
   */
  @property({type: String})
  input = null;

  @property({type: String})
  token = undefined;

  /**
   * The number of times the button has been clicked.
   */
  @property({type: Number})
  count = 0;

  render() {
    return html`
      <input type="text" @input=${this.onInputChange} .value="${this.input}">
      <slot></slot>
    `;
  }

  private onInputChange(event: any): void {
    console.log('EVENT: ', event.target.value);
    this.getLibraries(event.target.value);
  }

  private getLibraries(libName: string) {

  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement;
  }
}
