import {html, LitElement} from "@polymer/lit-element";
import {PageViewElement} from "../page-view-element";

import {BAGELS} from "../data-products";

import '../ui/product-page-container'
import {StyleCustom} from "../styles-custom";

class ViewBagels extends PageViewElement {
    _render() {
        return html`
${StyleCustom}
 <style>
 :host {}
 </style>
 <product-category item="bagels" dataName=${BAGELS}></product-category>
    `;
    }
    static get properties() {
        return {
        }
    }
}

window.customElements.define('view-bagels', ViewBagels);