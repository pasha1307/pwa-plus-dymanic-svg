import { html } from '@polymer/lit-element';
import { PageViewElement } from './page-view-element.js';
import { repeat } from 'lit-html/lib/repeat.js';

// These are the shared styles needed by this element.
import {BREAD, MUFFINS, PASTRY, CROISSANTS, BAGELS, ROLLS} from "./data-products";
import {Baker} from "./data-baker";
import productPath from './data-products-path'
import './baker-composite.js'
import './product-pages/product-details'
import {iBagel, iBread,iMuffin, iPastry, iRoll,iHome, iCroissant} from "./svg-items";
import './ui/icons-panel'
import {StyleCustom} from "./styles-custom";

class PageHome extends PageViewElement {
  _render(props) {
    return html`
     ${StyleCustom}
     <style>
    i-baker {
    width: 100%;
    align-self: flex-start;
    margin-top: 20px;
     max-height: 670px;
    }
    .icon-test {
    stroke-width: 12px;
    stroke: green;
    }
    .second-color {
    stroke: mediumvioletred;
    }
    .icon-shape {
    fill: palegoldenrod;
    stroke-width: 2px;
    stroke:cadetblue;
    }
 .menu-item {
 text-align: center;
 }
    .menu-item-svg svg {
   fill: none;
   stroke: blueviolet;
   color: white;
   stroke-width: 7px;
   max-width: 85px;
 
 }
.menu-item-svg svg .eye {
fill: none;
stroke: currentStroke;
}

.menu-item-svg svg .Frame {
    fill: rgba(0,0,0,.1);
    stroke: none;
}
home-right .Frame {
    fill: gold;
}
.home-right svg {
stroke: rebeccapurple;
fill: wheat;
opacity: 0.3;
}

figure.home-right-figure {
border:none;
display: inline-block; 
width: 75px; 
float: left; 
margin-right: 10px; 
margin-bottom: 0;
}
.home-right-figure #Face {
  stroke: antiquewhite;
  stroke-width: 3px;
  fill: none;
  }
  .home-right-figure .second-color {
  fill: blanchedalmond;
 stroke: antiquewhite;
  }
.home-right-figure .Frame {
  fill: blueviolet;
  }
  .home-bottom-panel {
  display: none;
  }
  
@media screen and (max-width: 550px) {
 .home-bottom-panel {
  display: block;
  }
  .home-menu-wrap {
  display: none;
  }
.block-link.menu-item.span-3 {
text-align: center;
}
.menu-item {
   padding-right: 5px;
        margin-right: 0;
  }
  .menu-item-svg {
         margin: 0;
         padding: 0;
        }
        .menu-item-svg svg {
          stroke: currentColor;
          stroke-width: 4px;
          fill:none;
        }
        .menu-item-svg svg .Frame {
        stroke: none;
        fill: palegoldenrod;
        }
        .home-menu-wrap {
        max-width: 50px;
   background-color: transparent;
   }  
      }
  
</style>
${this.showItem ? html`<product-detail 
itemTitle=${this.singleItem.title}
itemDetail = ${this.singleItem.detail}
spec="${this.singleItem.spec}"
imglg="${this.singleItem.imglg}"
on-click=${()=>this.onClose()}
></product-detail>
` : ""}

<div class="bo-t_s bo-b_xs grid no-gap bg-main-2 span-12 span-12-p hpage">
    <div class="flex gap-no span-5 span-8-t span-9-p">
  <i-baker 
 group=${this.grp}
 fltr="url(#drop-shadow)"
apron=${this.apron}
shovel = ${this.shovel}
shirt=${this.shirt}
hat= ${this.hat}
boots=${this.shovel}
wface="4px"
txtA="${this.txtA}" txtB="${this.txtB}" txtC="${this.txtC}" txtD="${this.txtD}"
fillShovelTxt="${this.fill1}" fillApronTxt="${this.fill2}"
nosmile="${this.nosmile}"
></i-baker></div>

<div class="span-2 span-3-t span-2-p pa-t_s bg-success-1 home-menu-wrap">
    <div class="grid-auto no-gap">
               <a class="block-link menu-item span-3" href="/${productPath.bagels}" 
               on-mouseenter="${(e) => this.onItemShow("Bagels")}">
                  <div class="menu-item-svg"> ${iBagel}</div>
                  <div class="menu-item-title text-mono hide-p">Bagels</div>
              </a> 
               <a class="block-link menu-item span-3" href="/${productPath.bread}" on-mouseenter="${(e) => this.onItemShow("Bread")}">
                  <div class="menu-item-svg"> ${iBread}</div>
                  <div class="menu-item-title text-mono hide-p">Bread</div> 
              <a class="block-link menu-item span-3" href="/${productPath.muffins}" on-mouseenter="${(e) => this.onItemShow("Muffins")}">
                  <div class="menu-item-svg"> ${iMuffin}</div>
                  <div class="menu-item-title text-mono hide-p">Muffins</div>
              </a>
               <a class="block-link menu-item span-3" href="/${productPath.pastry}"
               on-mouseenter="${(e) => this.onItemShow("Pastry")}">
                  <div class="menu-item-svg">${iPastry}</div>
                  <div class="menu-item-title text-mono hide-p">Pastry</div>
              </a>
               <a class="block-link menu-item span-3" href="/${productPath.rolls}" on-mouseenter="${(e) => this.onItemShow("Rolls")}">
                  <div class="menu-item-svg"> ${iRoll}</div>
                  <div class="menu-item-title text-mono hide-p">Rolls</div>
              </a>
              <a class="block-link menu-item span-3" href="${productPath.croissants}" on-mouseenter="${(e) => this.onItemShow("Crois")}">
                  <div class="menu-item-svg">${iCroissant}</div>
                  <div class="menu-item-title text-mono hide-p">Crois</div>
              </a>
             <a class="block-link menu-item span-3" href="/" on-mouseenter="${(e) => this.onItemShow("Home")}">
                  <div class="menu-item-svg">${iHome}</div>
                  <div class="menu-item-title text-mono hide-p">Home</div>
              </a>
</div>
</div>
    <div class="span-5 span-12-t span-12-p pa_m text-serif article">
    ${this.showRight ? html`
        <div>
        <h3 class="text-clip text-mono pa-b_m">Welcome to Our Bakery!</h3>
        <figure class="home-right-figure">
           ${iHome}
        </figure>
         <h5 class="text-mono bg-highlight-1">..voted Best in Town for 28 years</h5>
        
        <mark>Bagel Land was established in 1991.</mark>
        Bagel Land continues to be a stable part of Winchester, MA 
        through outstanding service, consistency and superb quality of its baked goods. 
        It has been voted Best Bagel Shop in Town for over 20 consecutive years. 
        Bagel Land also supports various local community events and organizations. 
        The experienced, well-oiled team of bakers produces bagels, breads, muffins, cookies, brownies, scones, 
        and pastries for wholesale and retail according to traditional, old world recipes using all-natural, pure ingredients.<hr>
      <mark>As a wholesale bakery</mark>  we offer a wide variety of New York Style bagels, 
    artisan breads, muffins, and pastries for the food service industry in the Greater Boston area and Massachusetts.
     Our wholesale division caters to restaurants, coffee shops, office parks (cafeterias), variety stores, 
     and catering businesses in the Greater Boston area and throughout all of Massachusetts. 
     We proudly serve some of the biggest delis within Massachusetts. 
    Open every day, Bagel Land is the only place in town that bakes bagels, muffins, and breads from scratch daily.
        </div>`
         :
         html`<div class="show-right">
                <h4 class="text-clip text-mono">${this.showCat}</h4>
            <div hidden ="${this.showCat !== 'Crois'}" class="home-right pos-rel">${iCroissant}
                <div class="pos-abs zi-max ma-l_l" style="top: 0">
                 ${repeat(CROISSANTS, item => html`<p class="text-clip text-mono item-p" on-click="${()=> this.onSingleItem(item)}">${item.title}</p>`)}
                </div>
            </div>
             <div hidden ="${this.showCat !== 'Pastry'}" class="home-right pos-rel">${iPastry}
             <div class="pos-abs zi-max ma-l_l" style="top: 0">
                 ${repeat(PASTRY, item => html`<p class="text-clip text-mono item-p" on-click="${()=> this.onSingleItem(item)}">${item.title}</p>`)}
                </div>
            </div>
            <div hidden ="${this.showCat !== 'Bread'}" class="home-right pos-rel">${iBread}
                <div class="pos-abs zi-max ma-l_l" style="top: 0">
                 ${repeat(BREAD, item => html`<p class="text-clip text-mono item-p" on-click="${()=> this.onSingleItem(item)}">${item.title}</p>`)}
                </div>
             </div>
            <div hidden ="${this.showCat !== 'Bagels'}" class="home-right pos-rel">${iBagel}
                  <div class="pos-abs zi-max ma-l_l" style="top: 0">
                 ${repeat(BAGELS, item => html`<p class="text-clip text-mono item-p" on-click="${()=> this.onSingleItem(item)}">${item.title}</p>`)}
                </div>
            </div>
            <div hidden ="${this.showCat !== 'Muffins'}" class="home-right pos-rel">${iMuffin}
                <div class="pos-abs zi-max ma-l_l" style="top: 0">
                 ${repeat(MUFFINS, item => html`<p class="text-clip text-mono item-p" on-click="${()=> this.onSingleItem(item)}">${item.title}</p>`)}
                </div>
            </div>
            <div hidden ="${this.showCat !== 'Rolls'}" class="home-right pos-rel">${iRoll}
                <div class="pos-abs zi-max ma-l_l" style="top: 0">
                 ${repeat(ROLLS, item => html`<p class="text-clip text-mono item-p" on-click="${()=> this.onSingleItem(item)}">${item.title}</p>`)}
                </div>
            </div>
         <div hidden ="${this.showCat !== 'Home'}" class="span-5 span-12-t span-12-p pa_m text-serif article" >
         <h5 class="text-mono bg-highlight-1">..voted Best in Town for 28 years</h5>
        <figure class="home-right-figure">
           ${iHome}
        </figure>
        <span><mark>Bagel Land was established in 1991.</mark>
        Bagel Land continues to be a stable part of Winchester, MA 
        through outstanding service, consistency and superb quality of its baked goods. 
        It has been voted Best Bagel Shop in Town for over 20 consecutive years. 
        Bagel Land also supports various local community events and organizations. 
        The experienced, well-oiled team of bakers produces bagels, breads, muffins, cookies, brownies, scones, 
        and pastries for wholesale and retail according to traditional, old world recipes using all-natural</span>
        <span>
        <mark>As a wholesale bakery</mark>  we offer a wide variety of New York Style bagels, 
        artisan breads, muffins, and pastries for the food service industry in the Greater Boston area and Massachusetts.
         Our wholesale division caters to restaurants, coffee shops, office parks (cafeterias), variety stores, 
         and catering businesses in the Greater Boston area and throughout all of Massachusetts. 
         We proudly serve some of the biggest delis within Massachusetts. 
        Open every day, Bagel Land is the only place in town that bakes bagels, muffins, and breads from scratch daily.
        </span>
      </div>
        </div>`}
    </div>
    </div>
    <div class="home-bottom-panel">
    <icons-panel></icons-panel>
    </div>
`
 }
    constructor() {
        super();
        this.hat = "yellow";
        this.shirt = "violet";
        this.apron = "red";
        this.shovel = "rgba(0,0,0,.3)";
        this.pants = "black";
        this.txtA = "HOT";
        this.txtB = "BAGELS";
        this.txtC = "NY"
        this.txtD = "Style"
        this.fill1 = "white";
        this.fill2 = "white";
        this.showCat = "Bagel";
        this.grp = "Bagel";
        this.nosmile = "block";
        this.showRight = true;
        this.showItem = false;
        this.baker = Baker;
    }

 static get properties() {
    return {
        baker: Object,
        id: Object,
        shovel: String,
        hat:String,
        shirt:String,
        apron:String,
        txtA:String,txtB:String, txtC:String,txtD:String,
        todisplay: Boolean,
        showCat: String,
        showRight: Boolean,
        grp: String,
        nosmile: String,
        showItem: Boolean,
        singleItem: Object
    }
 }
    onItemShow(cat) {
        this.showRight = false;
        this.showCat = cat;
        this.hat = this.baker[cat].hat;
        this.shirt = this.baker[cat].shirt;
        this.apron = this.baker[cat].apron;
        this.shovel = this.baker[cat].shovel;
        this.pants = this.baker[cat].pants;
        this.txtA = this.baker[cat].txtA;
        this.txtB = this.baker[cat].txtB;
        this.txtC = this.baker[cat].txtC;
        this.txtD = this.baker[cat].txtD;
        this.fill1 = this.baker[cat].fill2;
        this.fill2 = this.baker[cat].fill1;
        this.grp = this.baker[cat].grp;
        this.nosmile = "block";
        if(this.showCat === 'Home') {
            setTimeout(()=> {this.nosmile = "none"},2000)
        }
    }
    onSingleItem(item) {
     this.showItem = true;
     this.singleItem = item;
    }
    onClose() {
        this.showItem = false;
    }
}

window.customElements.define('page-home', PageHome);
