import {html, LitElement} from "@polymer/lit-element";
import {PageViewElement} from "../page-view-element";

import {ROLLS} from "../data-products";

import '../ui/product-page-container'
import {StyleCustom} from "../styles-custom";

class ViewRolls extends PageViewElement {
    _render() {
        return html`
${StyleCustom}
 <style>
 :host {
 /*display: block;*/
 /*background-color: rgba(0,0,0,.1);*/
 /*min-height: 100vh;*/
 }

 </style>
  <product-category item="rolls" dataName=${ROLLS}></product-category>
`;
    }
    static get properties() {
        return {
        }
    }
}

window.customElements.define('view-rolls', ViewRolls);