import { html, LitElement } from '@polymer/lit-element';
import {StyleCustom} from "../styles-custom";

class ProductDetail extends LitElement {
    _render(props) {
        return html`
${StyleCustom}
    <style>
    .item-wrap {
    top: 0;
    bottom: 0;
    left: 0;
    position: fixed;
    height: 105vh;
    width: 100vw;
    background-color: rgba(255,255,255,.9);
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    }
    .detail-box {
    width: 400px;
    height: auto;
    }
    img {
       
    }
    @media (max-width: 500px) {
    .detail-box {
    width: 100%;
    height: auto;
    }
    }
   </style>
   <div class="item-wrap">
  <div class="grid-auto gap-no detail-box">
  <div class="span-12 box bg-danger-2-h bs_l" data-tooltip="Click any Place to close">
    <figure class="media">
    <img src="${props.imglg}" data-tooltip="Click any Place to close">
     <div class="text-mono mini-info">${props.itemTitle}</div>
      <article class="text-serif text-italic pa_m">
        <p class="text_xl">${props.itemTitle}</p>
        <p class="text_s ma-t_s">${props.itemDetail}</p>
        <p class="text_s ma-t_s">${props.spec}</p>
      </article>
      <div class="text-mono mini-info">${props.spec}</div>
    </figure>
  </div>
</div>
</div>
`

    }

    static get properties() {
        return {

            img: String,
            imglg: String,
            itemTitle: String,
            itemDetail: String,
            spec: String
        }
    }


}

customElements.define('product-detail', ProductDetail);
