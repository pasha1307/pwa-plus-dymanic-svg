import { LitElement, html } from '@polymer/lit-element';
import {BREAD} from "../data-products";
import '../product-pages/product-list';
import './icons-panel';
import './fixed-icon';
import {StyleCustom} from "../styles-custom";// This element is *not* connected to the Redux store.

class ProductCategory extends LitElement {
    _render(props) {
        return html`
${StyleCustom}
 <style>
 :host { }
  .page-wrap {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
  .list-wrap {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  }
  @media (max-width: 800px) {

}
</style>
 <fixed-icon item = ${props.item}></fixed-icon>
 <div class="page-wrap pa-b_l bo-b_xs bg-warn-1 bo-t_s">
 <icons-panel item=${props.item}></icons-panel>
 <div class="list-wrap">
   <product-list productData=${props.dataName}></product-list>
 </div>
 </div>
    `;
    }

    static get properties() {
        return {
            item: String,
            dataName: Object
        }
    }
}

window.customElements.define('product-category', ProductCategory);
