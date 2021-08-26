import {html, LitElement} from "@polymer/lit-element";
import {PageViewElement} from "../page-view-element";

import {CROISSANTS} from "../data-products";

import '../ui/product-page-container'
import {StyleCustom} from "../styles-custom";

class ViewCroissants extends PageViewElement {
    _render() {
        return html`
${StyleCustom}
 <style>
 :host {}
 </style>
 <product-category item="croissants" dataName=${CROISSANTS}></product-category>
    `;
    }
    static get properties() {
        return {
        }
    }
}

window.customElements.define('view-croissants', ViewCroissants);
