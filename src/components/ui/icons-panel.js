import { LitElement, html } from '@polymer/lit-element';
import productPath from '../data-products-path';

import {iFace,iBagel, iCroissant, iPastry, iMuffin, iBread, iRoll} from "../svg-items";
import {StyleCustom} from "../styles-custom";
// This element is *not* connected to the Redux store.
class IconsPanel extends LitElement {
    _render(props) {
        return html`
${StyleCustom}
<style>
.icons-panel {
   display: flex;
   justify-content: center;
   flex-wrap: wrap;
   width: 100%;
  }
 .menu-item-svg svg {
         stroke-width: 2px;
         fill: rgba(255,255,255,.7);
         max-width: 75px;
         stroke: rgba(0,0,0,.8);
          }
        
  .menu-item-svg svg .Frame {
          stroke: rgba(255,255,255,1);
          stroke-width: 5px;
          fill: none;
        }
 .menu-item-svg.isActive svg {
         stroke-width: 4px;
         fill: rgba(255,165,0,.7);
         stroke: rgba(255,255,255,1);
       }
       .menu-item-svg.isActive svg .Frame {
         stroke:red;
          stroke-width: 3px;
          fill: #f7f4d4;
          /*#dbf5d6;*/
       }
        .menu-item-title.text-mono {
       margin-top: -10px;
       padding: 0;
       text-align: center;
       color: rgba(255,255,255,1);
       }  

    @media (max-width: 600px) {
     .menu-item-title.text-mono.hide-p {
        display: none;
     }
     .menu-item-home {
     display: none;
     }
     .menu-item-svg svg {
      max-width: 50px;
     }
     .menu-item-svg.isActive svg {
         stroke-width: 2px;
         fill: rgba(255,255,255,.7);
         stroke: rgba(0,0,0,.8);
        }
    }
   
</style>
     <div class="icons-panel bg-main-3">
               <a class="block-link menu-item" href="/${productPath.bagels}">
                  <div class="menu-item-svg" className="${props.item === 'bagels' ? 'menu-item-svg isActive' : 'menu-item-svg'}"> ${iBagel}</div>
                  <div class="menu-item-title text-mono hide-p">Bagels</div>
              </a>
               <a class="block-link menu-item" href="/${productPath.bread}">
                  <div class="menu-item-svg" className="${props.item === 'bread' ? 'menu-item-svg isActive' : 'menu-item-svg'}"> ${iBread}</div>
                  <div class="menu-item-title text-mono hide-p">Bread</div> 
                </a>
              <a class="block-link menu-item" href="/${productPath.muffins}">
                  <div class="menu-item-svg" className="${props.item === 'muffins' ? 'menu-item-svg isActive' : 'menu-item-svg'}"> ${iMuffin}</div>
                  <div class="menu-item-title text-mono hide-p">Muffins</div>
              </a>
               <a class="block-link menu-item " href="/${productPath.pastry}" >
                  <div class="menu-item-svg" className="${props.item === 'pastry' ? 'menu-item-svg isActive' : 'menu-item-svg'}"> ${iPastry}</div>
                  <div class="menu-item-title text-mono hide-p">Pastry</div>
              </a>
               <a class="block-link menu-item" href="/${productPath.rolls}" >
                  <div className="${props.item === 'rolls'? 'menu-item-svg isActive' : 'menu-item-svg'}"> ${iRoll}</div>
                  <div class="menu-item-title text-mono hide-p">Rolls</div>
              </a>
              <a class="block-link menu-item " href="/${productPath.croissants}" >
                  <div className="${props.item === 'croissants'? 'menu-item-svg isActive' : 'menu-item-svg'}"> ${iCroissant}</div>
                  <div class="menu-item-title text-mono hide-p">Croissants</div>
              </a>
             <a class="block-link menu-item menu-item-home" href="/home" >
                  <div class="menu-item-svg">${iFace}</div>
                  <div class="menu-item-title text-mono hide-p">Home</div>
              </a>
              
</div>
    `;
    }

    static get properties() {
        return {
            item: String
        }
    }
}

window.customElements.define('icons-panel', IconsPanel);
