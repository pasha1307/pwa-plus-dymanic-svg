import { html } from '@polymer/lit-element';
import { PageViewElement } from './page-view-element.js';
import './baker-composite.js'
import {Baker} from "./data-baker";

import {StyleCustom} from "./styles-custom";

class PageContacts extends PageViewElement {
    _render(props) {
        return html`
    ${StyleCustom}
      <style>
      :host {}
      .contact-img {
      max-width: 600px;
      }
     .page-contacts {
     display: flex;
     flex-wrap: wrap;
     justify-content: center;
     align-items: center;
     width: 100%;
     }
     .contact-img {
     flex: 1 1 auto;
     flex-basis: 400px;
     order:2;
     }
    .contact-baker {
    flex: 0 1 auto;
    flex-basis: 500px;
    margin-right: 100px;
    order: 1;
    }
   @media (max-width: 960px) {
   .contact-img {
    order: 1;
     }
    .contact-baker {
    order: 2;
    }
   }
    </style>
    <div class="bg-i">
  <div class="bo-t_s bo-b_xs pa_m bg-main-2 page-contacts">
<div class="contact-baker">
   <i-baker 
   group="Bagel"
   style="width: 100%; height:auto;"
   hh="100%"
   apron="white"
   shirt = "lightgray"
   hat="white"
   AllFill="none" 
   AllWidth="4px" 
   AllStroke="black"
   txtA="ALWAYS"
   txtB="FRESH!"
   txtC="YR'"
   txtD="STYLE"
   fillApronTxt = "red"
   fillShovelTxt="green"
   ></i-baker>
   </div>


  <div class="contact-img">
  <figure class="media bo_px pa_xs">
      <img class="" src="images/home-page.png" alt="">
      <div class="text-mono mini-info">794 Main St, Winchester, MA 01890</div>
    </figure>
    <div class="text-center">
    <p class="box bg-j ma-t_xs">Opened from 6am to 3pm every day
    </p>
    <a href="mailto:info@bagellandwinchester.com">
    <p  class="ma-t_xs pa_s"><mark>EMAIL US</mark> info@bagellandwinchester.com </p>
    </a>
    <p><mark>CALL US</mark> (781)-721-5855 </p>
    </div>
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

}

window.customElements.define('page-contacts', PageContacts);