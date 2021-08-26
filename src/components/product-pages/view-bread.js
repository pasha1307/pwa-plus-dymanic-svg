import {html, LitElement} from "@polymer/lit-element";
import {PageViewElement} from "../page-view-element";

import {BREAD} from "../data-products";

import '../ui/product-page-container'
import {StyleCustom} from "../styles-custom";

class ViewBread extends PageViewElement {
    _render() {
        return html`
${StyleCustom}
 <style>
 :host {}
 </style>
 <product-category item="bread" dataName=${BREAD}></product-category>
    `;
    }
    static get properties() {
        return {
        }
    }
}

window.customElements.define('view-bread', ViewBread);
