import { LitElement, html } from '@polymer/lit-element';
import productPath from '../data-products-path';

import {iFace,iBagel, iCroissant, iPastry, iMuffin, iCrois, iBread, iRoll} from "../svg-items";
import {StyleCustom} from "../styles-custom";
// This element is *not* connected to the Redux store.
class FixedIcon extends LitElement {
    _render(props) {
        return html`
${StyleCustom}
 <style>
.fixed-icon {
  position: fixed;
  top: 30px;
  right: 60px;
  width: 120px;
  height: 110px;
  text-align: center;
 z-index: 2;
 }
  .fixed-icon svg {
    width: 100%;
    height: auto;
    fill: rgba(255,255,255,.6);
    stroke-width: 6px;
    stroke: rgba(0,0,0,.95);
   }
 .fixed-icon svg .Frame {
 stroke-width: 2px;
  stroke: black;
  fill:  #f7f4d4;
}
  .fixed-icon svg .with-filter {
 stroke-width: 2px;
  stroke: white;
  fill: darkseagreen;
}
@media (min-width: 1250px) {
 .fixed-icon {
  top: 35px;
  right: 230px;
  }
  }

@media (max-width: 800px) {
 .fixed-icon {
  top: 20px;
  right: 40px;
  }
  .fixed-icon svg {
    fill: #dbc4bd;
}
  }
 @media (max-width: 960px) {
 .fixed-icon {
  top: 20px;
  right: 10px;
 }
 } 
@media (max-width: 460px) {
 .fixed-icon {
  width: 70px;
  height: 70px;
  text-align: center;
 z-index: 2;
 }
 h4 {
 display: none;
 }
} 
</style>
    <div class="fixed-icon">
        <h4 class="text-mono text-thin">${props.item}</h4>${this.onIcon(props.item)}</div>
    `;
    }

    static get properties() {
        return {
            item: String
        }
    }
    onIcon(p) {
        switch(p) {
            case productPath.bagels:
                return html`${iBagel}`
                break;
            case productPath.croissants:
                return html`${iCroissant}`
                break;
            case productPath.bread:
                return html`${iBread}`
                break;
            case productPath.muffins:
                return html`${iMuffin}`
                break;
            case productPath.rolls:
                return html`${iRoll}`
                break;
            case productPath.pastry:
                return html`${iPastry}`
                break;
            default:
                return html`${iBagel}`
        }
    }
}

window.customElements.define('fixed-icon', FixedIcon);
