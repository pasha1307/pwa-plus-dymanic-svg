import {html, LitElement} from "@polymer/lit-element";
import {PageViewElement} from "../page-view-element";

import {PASTRY} from "../data-products";

import '../ui/product-page-container'
import {StyleCustom} from "../styles-custom";

class ViewPastry extends PageViewElement {
    _render() {
        return html`
${StyleCustom}
 <style>
 :host {}
 </style>
 <product-category item="pastry" dataName=${PASTRY}></product-category>
    `;
    }
    static get properties() {
        return {
        }
    }
}

window.customElements.define('view-pastry', ViewPastry);
