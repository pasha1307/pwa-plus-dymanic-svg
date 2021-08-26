import { html } from '@polymer/lit-element';
import { PageViewElement } from './page-view-element.js';
import { connect } from 'pwa-helpers/connect-mixin.js';

// This element is connected to the Redux store.
import { store } from '../store.js';
import {ITEMS} from "./data-products";
import {iMuffin, iPastry, iRoll, iBagel, iCroissant, iBread} from "./svg-items";
import productPath from "./data-products-path";
import {StyleCustom} from "./styles-custom";
class PageProducts extends connect(store)(PageViewElement) {
    _render(props) {
        return html`
    ${StyleCustom}
      <style>
      :host {
      }
      a {
        width: 120px;
        margin: 10px;
        }
      a span {
      display: block;
      width: 80px;
     margin: -10px auto 0 auto;
     text-align: center;
   }   
      a svg {
      max-width: 120px;
      fill:rgba(255,255,255,.95);
      stroke: red;
      stroke-width: 4px;
      }
      
      a:hover svg {
      fill:rgba(0,0,0,.1);
      stroke: white;
      stroke-width: 4px;
      }
    a svg .Frame {
        stroke:none;
        fill: rgba(0,0,0,.5);
     }
      .icons-wrap {
      display: flex;
      flex-wrap: wrap;
      max-width: 410px;
      margin: auto;
      justify-content: center;
      align-items: center;
      }
      
     .page-products {
     justify-content: center;
    } 
    .page-products-1 {
      flex: 1 1 20%;
      flex-basis: 300px;
      order:1;
      margin: 10px;
    }
    .page-products-2 {
       flex: 1 1 40%;
      order: 2;
      flex-basis: 320px;
        margin: 10px;
    }
    .page-products-3 {
     flex: 1 1 40%;
     order: 3;
     flex-basis: 350px;
     max-width: 700px;
     margin: 10px;
     padding: 20px;
    }
      
@media (max-width: 960px) {
.page-products-1 {
     order: 2;
    }
    .page-products-2 {
    order: 1;
    }
    .page-products-3 {
      order: 3;
    }
}
@media (max-width: 420px) {
 a {
        width: 90px;
        margin: 8px;
        }
}
</style>
  <div class="bo-t_s bo-b_xs pa_m flex page-products">
    <div class="page-products-1 pa_xs text-serif article">
     <mark>BAGEL LAND OF WINCHESTER</mark> offers a wide variety of <i>New York Style bagels, 
    artisan breads, muffins, and pastries</i> for the food service industry in the Greater Boston area and Massachusetts.
     Our <i>wholesale</i> division caters to restaurants, coffee shops, office parks (cafeterias), variety stores, 
     and catering businesses in the Greater Boston area and throughout all of Massachusetts. 
     We proudly serve some of the biggest delis within Massachusetts. 
    Open every day, Bagel Land is the only place in town that bakes bagels, muffins, and breads from scratch daily.
   </div>
   <div class="page-products-2">
  <div class="icons-wrap bg-a ra_m pa_m bo_px" >
   <a href="/${productPath.bread}">${iBread}<span class="text-mono">Bread</span></a>
   <a href="/${productPath.bagels}">${iBagel}<span class="text-mono">Bagels</span></a>
   <a href="/${productPath.rolls}">${iRoll}<span class="text-mono">Rolls</span></a>
   <a href="/${productPath.muffins}">${iMuffin}<span class="text-mono">Muffins</span></a>
   <a href="/${productPath.pastry}">${iPastry}<span class="text-mono">Pastry</span></a>
   <a href="/${productPath.croissants}">${iCroissant}<span class="text-mono">Croissants</span></a>
    </div></div>
    <div class="page-products-3 bg-success-1">
    <div class="text-serif article products-3-txt">
    <h4 class="text-mono">Our Products</h4>
    ${ITEMS.map(el => html`
    <mark>${el.title}</mark>${el.detail}<br>`)}
    </div>
</div>
   </div>
`;
    }
    constructor() {
        super();


    }
    static get properties() {
        return {

        }
    }
    _firstRendered() {
    }
  _stateChanged(state) {

  }
}
window.customElements.define('page-products', PageProducts);
