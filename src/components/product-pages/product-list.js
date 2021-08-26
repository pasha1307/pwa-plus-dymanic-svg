import {html, LitElement} from "@polymer/lit-element";
import { repeat } from 'lit-html/lib/repeat.js';

import {StyleCustom} from "../styles-custom";
import './product-details'

class ProductList extends LitElement {
    _render(props) {
        return html`
${StyleCustom}
 <style>
 .it-list {
 text-align: center;
 }
</style>
${this.showItem ? html`<product-detail
itemTitle=${this.Product.title}
itemDetail = ${this.Product.detail}
spec="${this.Product.spec}"
imglg="${this.Product.imglg}"
on-click=${()=>this.onClose()}
></product-detail>` : "" }

        ${repeat( props.productData, item => html`
        <div class="it-list" on-click="${(e) => this.onDetail(item)}">
            <h4 class="block-link ma-t_m box bg-i text-mono ra_m">${item.title}</h4>
       </div>
        `)}
 
`;
    }
    constructor() {
        super();
        this.showItem = false;
        this.Indi = {};
    }
    static get properties() {
        return {
            Product: Object,
            productData: Array,
            showItem: Boolean
        }
    }
    _firstRendered() {

    }

    onDetail(item) {
        this.showItem = true;
        return this.Product = item;
    }
    onClose() {
        this.showItem = false;
    }

}

window.customElements.define('product-list', ProductList);
