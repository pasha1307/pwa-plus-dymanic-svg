import {html, LitElement} from "@polymer/lit-element";
import {PageViewElement} from "../page-view-element";

import {MUFFINS} from "../data-products";

import '../ui/product-page-container'
import {StyleCustom} from "../styles-custom";

class ViewMuffins extends PageViewElement {
    _render() {
        return html`
${StyleCustom}
 <style>
 :host {}
 </style>
 <product-category item="muffins" dataName=${MUFFINS}></product-category>
    `;
    }
    static get properties() {
        return {
        }
    }
}

window.customElements.define('view-muffins', ViewMuffins);
