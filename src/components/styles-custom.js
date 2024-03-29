import {html} from '@polymer/lit-element';


export const StyleCustom = html`
<style>
:root {
  --main-1: #f4f4f1;
  --main-2: #e8e9e2;
  --main-3: #989a7e;
  --main-4: #464738;
  --main-5: #2a2b22;
  --prime-1: #f0eef6;
  --prime-2: #dbd6f5;
  --prime-3: #8067fe;
  --prime-4: #3617cf;
  --prime-5: #2e1f7a;
  --warn-1: #f7f4d4;
  --warn-2: #e6df99;
  --warn-3: #e4d101;
  --warn-4: #8a800f;
  --warn-5: #524d14;
  --danger-1: #fcf2e8;
  --danger-2: #efd5be;
  --danger-3: #fe9934;
  --danger-4: #8a0f0f;
  --danger-5: #661a1a;
  --success-1: #eef9ec;
  --success-2: #dbf5d6;
  --success-3: #2bfe01;
  --success-4: #388a0f;
  --success-5: #335214;
  --shadow-1: rgba(0, 0, 0, 0.1);
  --shadow-2: rgba(0, 0, 0, 0.25);
  --highlight-1: rgba(244, 244, 241, 0.1);
  --highlight-2: rgba(244, 244, 241, 0.25);
  --color-main-1: var(--main-1);
  --color-main-2: var(--main-2);
  --color-main-3: var(--main-3);
  --color-main-4: var(--main-4);
  --color-main-5: var(--main-5);
  --color-prime-1: var(--prime-1);
  --color-prime-2: var(--prime-2);
  --color-prime-3: var(--prime-3);
  --color-prime-4: var(--prime-4);
  --color-prime-5: var(--prime-5);
  --color-warn-1: var(--warn-1);
  --color-warn-2: var(--warn-2);
  --color-warn-3: var(--warn-3);
  --color-warn-4: var(--warn-4);
  --color-warn-5: var(--warn-5);
  --color-danger-1: var(--danger-1);
  --color-danger-2: var(--danger-2);
  --color-danger-3: var(--danger-3);
  --color-danger-4: var(--danger-4);
  --color-danger-5: var(--danger-5);
  --color-success-1: var(--success-1);
  --color-success-2: var(--success-2);
  --color-success-3: var(--success-3);
  --color-success-4: var(--success-4);
  --color-success-5: var(--success-5);
  --color-shadow-1: var(--shadow-1);
  --color-shadow-2: var(--shadow-2);
  --color-highlight-1: var(--highlight-1);
  --color-highlight-2: var(--highlight-2); }

:root {
  --space-base: 0.25rem;
  --space-ratio: 2.5;
  --space-xs: var(--space-base);
  --space-s: calc(var(--space-ratio) * var(--space-xs));
  --space-m: calc(var(--space-ratio) * var(--space-s));
  --space-l: calc(var(--space-ratio) * var(--space-m));
  --space-xl: calc(var(--space-ratio) * var(--space-l));
  --space-xxl: calc(var(--space-ratio) * var(--space-xl));
  --space-px: 1px; }

:root {
  --text-base: 1em;
  --text-ratio: 1.25;
  --text-xxxl: calc(var(--text-ratio) * var(--text-xxl));
  --text-xxl: calc(var(--text-ratio) * var(--text-xl));
  --text-xl: calc(var(--text-ratio) * var(--text-l));
  --text-l: calc(var(--text-ratio) * var(--text-m));
  --text-m: var(--text-base);
  --text-s: calc(var(--text-m)     / var(--text-ratio));
  --text-xs: calc(var(--text-s)     / var(--text-ratio)); }

:root {
  --font-body:     
  Constantia, 
  'Lucida Bright',
  Lucidabright,
  'Lucida Serif',
  Lucida,
  'DejaVu Serif',
  Georgia,
  'Palatino Linotype',
  Palatino,
  serif
;
  --font-standard: 
  -apple-system, 
  BlinkMacSystemFont, 
  'Segoe UI', 
  Roboto, 
  Helvetica, 
  Arial, 
  sans-serif
;
  --font-headline: 
  -apple-system, 
  BlinkMacSystemFont, 
  'Segoe UI', 
  Roboto, 
  Helvetica, 
  Arial, 
  sans-serif
; }

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline; }

dfn {
  font-style: italic; }

small {
  font-size: 80%; }

audio:not([controls]) {
  display: none;
  height: 0; }

* {
  box-sizing: border-box;
  color: var(--color, var(--color-main-5));
  -webkit-overflow-scrolling: touch; }

body {
  font-family: var(--font-family, var(--font-standard));
  background-color: var(--color-bg-1, var(--color-main-1));
  --line-height:    var(--text-ratio);
  line-height: var(--line-height);
  --font-size:      var(--text-base);
  font-size: var(--font-size); }

ul {
  list-style: none; }

@media (max-width: 800px) {
  .hide-t {
    display: none !important; }
  .columns.collapse-t {
    column-count: 1 !important; } }

@media (max-width: 400px) {
  .hide-p {
    display: none !important; }
  .columns.collapse-p {
    column-count: 1 !important; } }

@media (max-width: 800px) {
  html {
    font-size: 90%; } }

@media (max-width: 400px) {
  html {
    font-size: 80%; } }

[class*="zi-"] {
  position: relative; }

.zi-0 {
  z-index: 0; }

.zi-1 {
  z-index: 1; }

.zi-2 {
  z-index: 2; }

.zi-3 {
  z-index: 3; }

.zi-4 {
  z-index: 4; }

.zi-99 {
  z-index: 99; }

.zi-max {
  z-index: 9999; }

menu {
  padding: 0;
  margin: 0; }

form {
  display: block;
  width: 100%; }

.button, .input, .select, .textarea {
  font-size: var(--text-m); }

input::-moz-focus-inner, input::-moz-focus-outer {
  border: 0; }

.input,
.button,
.textarea,
.select {
  -webkit-appearance: none;
  border-radius: 0;
  padding-top: var(--space-s);
  padding-bottom: var(--space-s);
  padding-left: var(--space-s);
  padding-right: var(--space-s);
  margin: 0;
  font-family: var(--font-standard);
  text-align: left;
  line-height: var(--line-height);
  border: var(--space-px) solid;
  outline: none;
  background-color: var(--color-bg-1, var(--color-prime-1));
  color: var(--color, var(--color-main-5));
  cursor: pointer; }
  .input:hover,
  .button:hover,
  .textarea:hover,
  .select:hover {
    background-color: var(--color-bg-2, var(--color-prime-2));
    z-index: 2; }
  .input:focus,
  .button:focus,
  .textarea:focus,
  .select:focus {
    background-color: var(--color-bg-1, var(--color-prime-1)); }

.input,
.textarea,
.select {
  display: block;
  width: 100%; }

.button:not(.block) {
  display: inline-block; }

.input, .textarea {
  box-shadow: inset 0 calc(var(--space-px)*2) 0 var(--color-shadow-1); }
  .input::placeholder, .textarea::placeholder {
    color: var(--color-shadow-2); }
  .input:-ms-input-placeholder, .textarea:-ms-input-placeholder {
    color: var(--color-shadow-2); }
  .input[readonly], .textarea[readonly] {
    user-select: all;
    -moz-user-select: text; }

.input:invalid {
  border-color: var(--color, var(--color-main-5));
  color: var(--color-danger-4); }

.textarea {
  resize: vertical;
  width: 100%;
  min-height: var(--textarea-height, 3.6rem); }

.label {
  user-select: none;
  cursor: pointer; }
  .label.required:after {
    content: '*';
    color: var(--color-main-5);
    padding-left: var(--space-xs); }

.select {
  appearance: none;
  -moz-appearance: none;
  cursor: pointer;
  background-image: linear-gradient(45deg, transparent 50%, var(--color-bg-1, var(--color-prime-1)) 50%), linear-gradient(-45deg, transparent 50%, var(--color-bg-1, var(--color-prime-1)) 50%), linear-gradient(to top, var(--color, var(--color-main-5)), var(--color, var(--color-main-5)));
  background-size: 14px 14px;
  background-repeat: no-repeat;
  background-position: right 0.8rem top calc(50% - 3.5px);
  position: relative; }
  .select:hover {
    background-image: linear-gradient(45deg, transparent 50%, var(--color-bg-2, var(--color-prime-2)) 50%), linear-gradient(-45deg, transparent 50%, var(--color-bg-2, var(--color-prime-2)) 50%), linear-gradient(to top, var(--color, var(--color-main-5)), var(--color, var(--color-main-5))); }
  .select:disabled {
    background-size: 100% 100%;
    background-position: left top; }
  .select optgroup {
    color: var(--colored-5, var(--color-main-5)); }
  .select option:disabled {
    color: var(--color-main-3); }
  .select:-ms-expand {
    display: none; }

.search-box {
  position: relative;
  padding: 0; }
  .search-box:before {
    position: absolute;
    content: '⚲';
    transform: rotate(-45deg);
    font-size: 24px;
    line-height: 24px;
    height: 24px;
    margin-top: -12.63158px;
    z-index: 12;
    user-select: none;
    pointer-events: none;
    top: 50%;
    left: var(--padding, 0.8rem); }
  .search-box .input[type="search"] {
    padding-left: 2.2rem; }
  .search-box.right .input[type="search"], .search-box.form-box .input[type="search"] {
    padding-right: 2.2rem;
    padding-left: var(--padding, var(--space-s)); }
    .search-box.right .input[type="search"]::-webkit-search-cancel-button, .search-box.form-box .input[type="search"]::-webkit-search-cancel-button {
      -webkit-appearance: none; }
  .search-box.right:before, .search-box.form-box:before {
    left: auto;
    right: 0.8rem;
    transform: rotate(45deg); }
    .search-box.right:before .input[type="search"], .search-box.form-box:before .input[type="search"] {
      padding-left: auto; }

.form-box {
  display: block;
  position: relative;
  overflow: hidden; }
  .form-box:not(.no-label) .input, .form-box:not(.no-label) .button, .form-box:not(.no-label) .textarea, .form-box:not(.no-label) .select {
    padding-top: calc(1 * var(--space-m)) !important; }
  .form-box.active, .form-box:hover {
    z-index: 2; }
    .form-box.active .mini-info, .form-box:hover .mini-info {
      visibility: visible; }
  .form-box .input ~ .mini-info,
  .form-box .select ~ .mini-info,
  .form-box .textarea ~ .mini-info {
    visibility: hidden; }
  .form-box .input:hover ~ .mini-info,
  .form-box .input:focus ~ .mini-info, .form-box .select:hover ~ .mini-info,
  .form-box .select:focus ~ .mini-info, .form-box .input:hover ~ .mini-info,
  .form-box .input:focus ~ .mini-info, .form-box .textarea:hover ~ .mini-info,
  .form-box .textarea:focus ~ .mini-info {
    visibility: visible; }
  .form-box.pa_m {
    padding: 0; }
    .form-box.pa_m .input, .form-box.pa_m .button, .form-box.pa_m .textarea, .form-box.pa_m .select {
      padding-left: var(--space-m);
      padding-right: var(--space-m);
      padding-top: calc(1.3 * var(--space-m)) !important;
      padding-bottom: calc(.7 * var(--space-m)) !important; }
    .form-box.pa_m .mini-label {
      left: var(--space-m);
      top: calc(1.6 * var(--space-s)); }

.mini-label {
  background-color: transparent;
  font-size: var(--text-s);
  position: absolute;
  white-space: nowrap;
  pointer-events: none;
  z-index: 3;
  left: var(--space-s);
  top: var(--space-s);
  font-weight: normal;
  font-family: var(--font-standard); }

.mini-info {
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: var(--color, var(--color-main-5));
  color: var(--color-bg-1, var(--color-main-1));
  padding: var(--space-xs);
  font-size: var(--text-xs);
  border: 0;
  white-space: nowrap;
  pointer-events: none;
  z-index: 3;
  font-weight: normal;
  font-family: var(--font-standard); }
  .mini-info.shown {
    visibility: visible !important; }

.radio, .checkbox {
  -moz-user-select: none;
  -webkit-user-select: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  vertical-align: -1px;
  padding: 0;
  margin: 0;
  font-size: 100%;
  outline: none;
  background-image: linear-gradient(transparent, var(--color-shadow-2));
  background-color: transparent;
  border: var(--space-px) solid var(--color, var(--color-main-5));
  outline: none;
  width: 12px;
  height: 12px;
  position: relative;
  display: inline-block;
  cursor: pointer;
  transition: box-shadow .4s;
  border-radius: 0; }
  .radio:focus, .checkbox:focus {
    box-shadow: 0 0 0 var(--space-px) var(--color, var(--color-main-5)); }
  .radio:disabled, .checkbox:disabled {
    opacity: .3;
    cursor: not-allowed; }
  .radio:after, .radio:before, .checkbox:after, .checkbox:before {
    content: '';
    position: absolute;
    background-color: var(--color, var(--color-main-5)); }

.radio {
  border-radius: 50%; }
  .radio:after {
    border: 1px solid var(--color, var(--color-main-5));
    border-radius: 50%;
    width: 4px;
    height: 4px;
    top: 50%;
    left: 50%;
    transform: scale(0) translateX(-50%) translateY(-50%);
    transform-origin: 0% 0%; }
  .radio:checked:after {
    transform: scale(1) translateX(-50%) translateY(-50%); }

.checkbox {
  position: relative; }
  .checkbox:before, .checkbox:after {
    width: 3px;
    height: 6px;
    top: 0;
    left: 0; }
  .checkbox:after {
    transform: scale(0) translateX(2px) translateY(2px) rotate(-45deg); }
  .checkbox:before {
    transform: scale(0) translateX(7px) translateY(-5px) rotate(45deg);
    transform-origin: 2px 7px;
    height: 14px; }
  .checkbox:checked:after {
    transform: scale(1) translateX(2px) translateY(2px) rotate(-45deg); }
  .checkbox:checked:before {
    transform: scale(1) translateX(7px) translateY(-5px) rotate(45deg); }

.active .radio, .active .checkbox {
  background-image: linear-gradient(var(--color-highlight-3), var(--color-highlight-1));
  border-color: var(--color-main-1); }
  .active .radio:after, .active .radio:before, .active .checkbox:after, .active .checkbox:before {
    background-color: var(--color-main-1); }
  .active .radio:focus, .active .checkbox:focus {
    box-shadow: 0 0 0 var(--space-px) var(--color-main-1); }

.progress {
  --bar-border-color: var(--color-shadow-1);
  --value-color:      var(--color-bg-3, var(--color-main-3));
  --background-color: var(--color-bg-1, var(--color-main-1));
  outline: none;
  appearance: none;
  background-color: var(--background-color);
  border: var(--border-width, var(--space-px)) solid;
  display: block;
  width: 100%;
  min-height: 20px;
  border-color: var(--color-main-5);
  color: var(--value-color);
  position: relative;
  overflow: hidden; }
  .progress::-webkit-progress-bar {
    background-color: transparent; }
  .progress::-webkit-progress-value {
    background-color: var(--value-color);
    border-right: 1px solid var(--bar-border-color, var(--color-shadow-1)); }
  .progress::-moz-progress-bar {
    background-color: var(--value-color);
    border-right: 1px solid var(--bar-border-color, var(--color-shadow-1)); }
  .progress:not([value]):after {
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    position: absolute;
    background: linear-gradient(to left, var(--background-color), var(--color-main-3), var(--background-color));
    background-size: 100% 100%;
    animation: scroll-background 4s infinite alternate; }
  .progress::-ms-fill {
    border: none; }

@keyframes scroll-background {
  0% {
    transform: translateX(90%); }
  100% {
    transform: translateX(-90%); } }

.progress-box {
  position: relative;
  padding: var(--padding, var(--space-s));
  --border-width: var(--space-px);
  border: var(--border-width) solid;
  --border-height-t:  calc(2 * var(--border-width));
  --padding-height-t: calc(2 * var(--padding, var(--space-s)));
  --line-height-t:    calc(var(--font-size) * var(--line-height));
  min-height: calc(var(--line-height-t) + var(--padding-height-t) + var(--border-height-t)); }
  .progress-box > *:not(.progress) {
    position: relative;
    z-index: 1; }
  .progress-box .progress {
    position: absolute;
    border: 0;
    top: 0px;
    bottom: 0;
    left: 0;
    height: 100%;
    z-index: 0; }

.meter {
  --bar-border-color:       var(--color-shadow-2);
  --bar-color:              var(--color-main-1);
  --optimum-color:          var(--color-success-2);
  --suboptimum-color:       var(--color-warn-2);
  --even-less-good-color:   var(--color-danger-2);
  border: 0;
  outline: var(--space-px) solid;
  background: var(--bar-color);
  display: block;
  width: 100%;
  min-height: 20px; }
  .meter::-webkit-meter-bar {
    background: var(--bar-color); }
  .meter:-moz-meter-bar {
    -moz-appearance: meterchunk;
    background: var(--bar-color); }
  .meter:-ms-fill {
    background: var(--bar-color); }
  .meter:-moz-meter-optimum::-moz-meter-bar {
    background: var(--optimum-color);
    border-right: 1px solid var(--bar-border-color, var(--color-shadow-1)); }
  .meter::-webkit-meter-optimum-value {
    background: var(--optimum-color);
    border-right: 1px solid var(--bar-border-color, var(--color-shadow-1)); }
  .meter:-moz-meter-sub-optimum::-moz-meter-bar {
    background: var(--suboptimum-color);
    border-right: 1px solid var(--bar-border-color, var(--color-shadow-1)); }
  .meter::-webkit-meter-suboptimum-value {
    background: var(--suboptimum-color);
    border-right: 1px solid var(--bar-border-color, var(--color-shadow-1)); }
  .meter:-moz-meter-sub-sub-optimum::-moz-meter-bar {
    background: var(--even-less-good-color);
    border-right: 1px solid var(--bar-border-color, var(--color-shadow-1)); }
  .meter::-webkit-meter-even-less-good-value {
    background: var(--even-less-good-color);
    border-right: 1px solid var(--bar-border-color, var(--color-shadow-1)); }

.meter-box {
  position: relative;
  padding: var(--padding, var(--space-s));
  --border-width: var(--space-px);
  border: var(--border-width) solid;
  --border-height-t:  calc(2 * var(--border-width));
  --padding-height-t: calc(2 * var(--padding, var(--space-s)));
  --line-height-t:    calc(var(--font-size) * var(--line-height));
  min-height: calc(var(--line-height-t) + var(--padding-height-t) + var(--border-height-t)); }
  .meter-box > *:not(.meter) {
    position: relative;
    z-index: 1; }
  .meter-box .meter {
    position: absolute;
    border: 0;
    top: 0px;
    bottom: 0;
    left: 0;
    height: 100%;
    z-index: 0; }

input[type=number] {
  -moz-appearance: textfield; }

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  margin: 0; }

[type='range'].range {
  margin: 0;
  height: 22px;
  background-color: transparent;
  -webkit-appearance: none; }
  [type='range'].range::-webkit-slider-thumb {
    background-color: var(--colored-2, var(--color-prime-2));
    background-image: linear-gradient(transparent, var(--color-shadow-2));
    border: 1px solid var(--colored-5, var(--color-main-5));
    border-radius: 50%;
    height: 20px;
    width: 20px;
    cursor: pointer;
    box-shadow: 0 2px 2px var(--color-shadow-2);
    -webkit-appearance: none;
    margin-top: -8px; }
  [type='range'].range::-webkit-slider-runnable-track {
    cursor: pointer;
    height: 6px;
    background-color: var(--colored-4, var(--color-main-4));
    border: 1px solid var(--colored-5, var(--color-main-5));
    border-radius: 229939393px; }
  [type='range'].range::-moz-range-track {
    cursor: pointer;
    height: 4px;
    background-color: var(--colored-4, var(--color-main-4));
    border: 1px solid var(--colored-5, var(--color-main-5));
    border-radius: 229939393px;
    margin-bottom: 2px; }
  [type='range'].range::-moz-range-thumb {
    background-color: var(--colored-2, var(--color-prime-2));
    background-image: linear-gradient(transparent, var(--color-shadow-2));
    border: 1px solid var(--colored-5, var(--color-main-5));
    border-radius: 50%;
    height: 20px;
    width: 20px;
    cursor: pointer;
    box-shadow: 0 2px 2px var(--color-shadow-2); }
  [type='range'].range::-ms-track {
    cursor: pointer;
    height: 6px;
    background-color: var(--colored-4, var(--color-main-4));
    border: 1px solid var(--colored-5, var(--color-main-5));
    border-radius: 229939393px;
    border-width: 1px; }
  [type='range'].range::-ms-fill-lower {
    background-color: #3617cf;
    border: 1px solid #2a2b22;
    border-radius: 229939393px; }
  [type='range'].range::-ms-fill-upper {
    background-color: #464738;
    border: 1px solid #2a2b22;
    border-radius: 229939393px; }
  [type='range'].range::-ms-thumb {
    background-color: #dbd6f5;
    background-image: linear-gradient(transparent, var(--color-shadow-2));
    border: 1px solid #2a2b22;
    border-radius: 50%;
    height: 14px;
    width: 14px;
    cursor: pointer;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);
    margin-top: 2px; }
  [type='range'].range:focus, [type='range'].range:hover {
    outline: 0; }
    [type='range'].range:focus::-moz-range-thumb, [type='range'].range:hover::-moz-range-thumb {
      background-color: var(--colored-3, var(--color-prime-3)); }
    [type='range'].range:focus::-webkit-slider-thumb, [type='range'].range:hover::-webkit-slider-thumb {
      background-color: var(--colored-3, var(--color-prime-3)); }
    [type='range'].range:focus::-ms-thumb, [type='range'].range:hover::-ms-thumb {
      background-color: #8067fe; }
  [type='range'].range:focus::-moz-range-thumb, [type='range'].range:active::-moz-range-thumb {
    box-shadow: 0 0 0 2px var(--color-main-5); }
  [type='range'].range:focus::-webkit-slider-thumb, [type='range'].range:active::-webkit-slider-thumb {
    box-shadow: 0 0 0 2px var(--color-main-5); }
  [type='range'].range:focus::-ms-thumb, [type='range'].range:active::-ms-thumb {
    box-shadow: 0 0 0 2px #2a2b22; }

.range-box {
  position: relative;
  padding: var(--padding, var(--space-s));
  --border-width: var(--space-px);
  border: var(--border-width) solid; }
  .range-box > .range {
    width: 100%; }

.color {
  --border-width: var(--space-px);
  border: var(--border-width) solid;
  outline: none;
  background: transparent;
  margin: 0;
  width: 100%;
  min-height: 20px;
  display: block;
  padding: 0;
  cursor: pointer; }
  .color::-webkit-color-swatch-wrapper {
    padding: 0; }
  .color::-webkit-color-swatch {
    border: none; }
  .color::-moz-color-swatch {
    border: none; }
  .color::-moz-focus-inner {
    border: none;
    padding: 0; }
  .color:focus {
    outline: none; }
  .color:disabled::-moz-color-swatch {
    background: var(--color-main-2) !important; }
  .color:disabled::-webkit-color-swatch {
    background: var(--color-main-2) !important; }

.color-box {
  position: relative;
  padding: var(--padding, var(--space-s));
  --border-width: var(--space-px);
  border: var(--border-width) solid;
  --border-height-t:  calc(2 * var(--border-width));
  --padding-height-t: calc(2 * var(--padding, var(--space-s)));
  --line-height-t:    calc(var(--font-size) * var(--line-height));
  min-height: calc(var(--line-height-t) + var(--padding-height-t) + var(--border-height-t)); }
  .color-box > *:not(.color) {
    position: relative;
    z-index: 1; }
  .color-box .color {
    position: absolute;
    border: 0;
    top: 0px;
    bottom: 0;
    left: 0;
    height: 100%;
    z-index: 0; }

.file {
  line-height: 1;
  font-size: 14px;
  color: var(--color-main-4);
  font-family: var(--font-standard); }
  .file:focus {
    outline: none; }
  .file::-webkit-file-upload-button {
    font-size: 12px;
    background-color: var(--color-main-5);
    color: var(--color-main-1);
    padding: 1px 3px;
    font-weight: bold;
    border: 0; }

.button {
  padding: var(--space-s);
  position: relative;
  border-style: solid;
  background-image: linear-gradient(transparent, var(--color-shadow-1)); }
  .button:hover, .button:focus {
    z-index: 2; }
  .button.active:hover {
    cursor: default;
    background-color: currentColor;
    color: currentColor; }
  .button:hover, .button:focus {
    color: var(--color, var(--color-main-5)); }

.prime {
  border-width: var(--space-px);
  border-color: var(--color, var(--color-main-5));
  color: var(--color-bg-1, var(--color-prime-1));
  background-color: var(--color-bg-4, var(--color-prime-4));
  cursor: pointer; }
  .prime:hover, .prime:focus {
    z-index: 2;
    color: var(--color-bg-1, var(--color-prime-1));
    background-color: var(--color-bg-5, var(--color-prime-5)); }

.ghost {
  background-color: transparent;
  color: var(--color-bg-4, var(--color-prime-4));
  background-image: none !important; }
  .ghost:hover {
    background-color: var(--color-bg-2, var(--color-prime-2)); }

.focusstyle, .input:focus,
.button:focus,
.textarea:focus,
.select:focus, a.box:focus, button.box:focus, label.box:focus {
  position: relative;
  z-index: 1;
  box-shadow: inset 0 0 0 3px var(--color, var(--color-main-5));
  transition: box-shadow .4s ease-out; }

.box.active, .button.active, label.active, .active {
  background-color: var(--color, var(--color-main-5));
  border-color: var(--color, var(--color-main-5));
  color: var(--color-bg-1, var(--color-main-1));
  z-index: 3; }
  .box.active *, .button.active *, label.active *, .active * {
    color: var(--color-bg-1, var(--color-main-1)); }
  .box.active:hover, .box.active:focus, .button.active:hover, .button.active:focus, label.active:hover, label.active:focus, .active:hover, .active:focus {
    background-color: var(--color, var(--color-main-5));
    cursor: default;
    color: var(--color-bg-1, var(--color-main-1)); }

* {
  text-rendering: optimizeLegibility; }

h1, h2, h3, h4, h5 {
  font-family: var(--font-headline);
  margin: 0;
  word-wrap: break-word; }

*::selection {
  background-color: var(--color-warn-3); }

*::-moz-selection {
  background-color: var(--color-warn-3); }

p {
  line-height: var(--text-ratio);
  font-family: var(--font-body); }

blockquote {
  text-wrap: balanced;
  margin: 0; }
  blockquote p {
    font-family: var(--text-serif-font);
    font-style: italic;
    line-height: normal;
    letter-spacing: .03rem;
    margin: 0; }

time {
  white-space: nowrap; }

a {
  text-decoration: none;
  color: var(--color-main-5);
  outline: 0; }

hr {
  height: 0;
  margin: 0;
  border: 0;
  border-top: var(--space-xs) solid; }

mark {
  background-color: var(--color-bg-2, var(--color-warn-2));
  box-shadow: 0 0 0 1px var(--color-bg-2, var(--color-warn-2)); }

abbr {
  text-decoration: none;
  border-bottom: 1px dotted var(--color-main-5); }

.link, p a, td a, li a, .block-link {
  color: var(--color-bg-4, var(--color-prime-4)); }
  .link:hover, p a:hover, td a:hover, li a:hover, .block-link:hover {
    color: var(--color-bg-5, var(--color-prime-5)); }
  .link:visited, p a:visited, td a:visited, li a:visited, .block-link:visited {
    color: var(--color-bg-3, var(--color-prime-3)); }
  .link:visited:hover, p a:visited:hover, td a:visited:hover, li a:visited:hover, .block-link:visited:hover {
    color: var(--color-bg-4, var(--color-prime-4)); }

.text-thin {
  font-weight: lighter; }

.text-normal {
  font-weight: normal; }

.text-bold {
  font-weight: bold; }

.text-black {
  font-weight: bolder; }

.text-italic {
  font-style: italic; }

.text-center {
  text-align: center; }

.text-right {
  text-align: right; }

.text-select-all {
  user-select: all;
  -webkit-user-select: all;
  -moz-user-select: all;
  -ms-user-select: all; }

.text-select-no {
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none; }

.text-point-no {
  pointer-events: none; }

.text-sans {
  font-family:  -apple-system,  BlinkMacSystemFont,  'Segoe UI',  Roboto,  Helvetica,  Arial,  sans-serif ; }

.text-serif {
  font-family:  Constantia,  'Lucida Bright', Lucidabright, 'Lucida Serif', Lucida, 'DejaVu Serif', Georgia, 'Palatino Linotype', Palatino, serif ; }

.text-mono {
  font-family:  'DejaVu sans mono',  'Anonymous Pro',  'Ubuntu Mono',  'Droid Sans Mono Consolas',  'Andale Mono',  Consolas,  Monaco,  'Courier New',  monospace ; }

input.text-mono,
textarea.text-mono,
.text-mono > input,
.text-mono > textarea {
  font-family:  'DejaVu sans mono',  'Anonymous Pro',  'Ubuntu Mono',  'Droid Sans Mono Consolas',  'Andale Mono',  Consolas,  Monaco,  'Courier New',  monospace ; }

.text_xxxl, h1 {
  --font-size: var(--text-xxxl) ; }

.text_xxl, h2 {
  --font-size: var(--text-xxl)  ; }

.text_xl, h3 {
  --font-size: var(--text-xl)   ; }

.text_l, h4 {
  --font-size: var(--text-l)    ; }

.text_m, h5, h6 {
  --font-size: var(--text-m)    ; }

.text_s {
  --font-size: var(--text-s)    ; }

.text_xs {
  --font-size: var(--text-xs)   ; }

[class*="text_"],
h1, h2, h3, h4, h5, h6 {
  font-size: var(--font-size); }

h1, h2, h3, h4 {
  line-height: 1.15; }

[class*="text-all"] {
  font-size: var(--text-all); }

.text-all_s {
  --text-all:  80% ; }

.text-all_l {
  --text-all: 120% ; }

.text-all_xl {
  --text-all: 180% ; }

.text-hero_l {
  line-height: 1;
  font-size: calc(var(--text-xxxl) + var(--text-hero-l,   4vw)); }

.text-hero_m {
  line-height: 1;
  font-size: calc(var(--text-xxxl) + var(--text-hero-m,   2.5vw)); }

.read_s {
  max-width: var(--read-w-s, 24rem); }

.read_m {
  max-width: var(--read-w-m, 28rem); }

.read_l {
  max-width: var(--read-w-l, 37rem); }

.read_xl {
  max-width: var(--read-w-xl, 47rem); }

.text-clip, .block-link {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0; }

.text-keep {
  white-space: nowrap; }

.text-hyphen {
  hyphens: auto; }

.ov-h {
  overflow: hidden; }

.anchor {
  font-weight: lighter;
  color: currentcolor;
  text-decoration: none;
  padding: 0 .5em;
  opacity: 0;
  box-shadow: none; }
  .anchor:after {
    content: "¶"; }
  .anchor:hover {
    opacity: 1 !important; }

h1:hover .anchor, h2:hover .anchor, h3:hover .anchor, h4:hover .anchor, h5:hover .anchor, h6:hover .anchor {
  opacity: .2; }

*:target {
  background-color: var(--color-warn-2);
  box-shadow: 0 0 0 var(--space-xs) var(--color-warn-2); }

.article img {
  width: 100%;
  margin: 0;
  border: var(--space-px) solid var(--color-main-5); }

.article a {
  text-decoration: underline;
  text-decoration-skip-ink: auto;
  text-decoration-skip: ink; }

.article pre {
  margin: var(--space-xs) calc(-1 * var(--space-m)); }

.article accr {
  border-bottom: 1px dotted var(--color-main-5); }

.article hr {
  margin: var(--space-l) 0; }

.article ul {
  list-style-type: disc; }

.article ul ul {
  list-style-type: circle; }

.article p, .article ul, .article ol, .article dl, .article table {
  margin-top: var(--space-s);
  margin-bottom: var(--space-s); }

.article dd {
  margin-left: var(--space-s); }

.article li, .article blockquote, .article dt, .article dd {
  font-family: var(--font-body); }

.article blockquote {
  font-size: 120%;
  border-left: var(--space-xs) solid var(--color-main-5);
  margin-left: calc(-1 * var(--space-m));
  padding-left: calc(var(--space-m)  - var(--space-xs)); }

.article p, .article li, .article dt, .article dd {
  line-height: 1.5; }

.article li {
  margin-top: var(--space-xs);
  margin-bottom: var(--space-xs); }

.article table {
  font-family: var(--font-body); }

.article h1:not(:first-child) {
  margin-top: var(--space-xxl); }

.article h2:not(:first-child) {
  margin-top: var(--space-xl); }

.article h3:not(:first-child) {
  margin-top: var(--space-l); }

.article h4:not(:first-child) {
  margin-top: var(--space-m); }

.article h5:not(:first-child) {
  margin-top: var(--space-s); }

.article li > ul, .article li > ol {
  margin-left: var(--space-m); }

th {
  text-align: left; }

.table, .article table {
  font-variant-numeric: lining-nums tabular-nums;
  width: 100%;
  border-collapse: collapse; }
  .table td, .table th, .article table td, .article table th {
    vertical-align: middle;
    padding: var(--space-s);
    border: var(--space-px) solid; }
  .table.bo-v th, .table.bo-v td, .article table.bo-v th, .article table.bo-v td {
    border-top: none;
    border-bottom: none; }
    .table.bo-v th:first-child, .table.bo-v td:first-child, .article table.bo-v th:first-child, .article table.bo-v td:first-child {
      border-left: none; }
    .table.bo-v th:last-child, .table.bo-v td:last-child, .article table.bo-v th:last-child, .article table.bo-v td:last-child {
      border-right: none; }
  .table.bo-h th, .table.bo-h td, .article table.bo-h th, .article table.bo-h td {
    border-left: none;
    border-right: none; }
  .table.bo-h tr:first-child th, .table.bo-h tr:first-child td, .article table.bo-h tr:first-child th, .article table.bo-h tr:first-child td {
    border-top: none; }
  .table.bo-h tr:last-child th, .table.bo-h tr:last-child td, .article table.bo-h tr:last-child th, .article table.bo-h tr:last-child td {
    border-bottom: none; }
  .table.bo-no th, .table.bo-no td, .article table.bo-no th, .article table.bo-no td {
    border: none; }
  .table.auto, .article table.auto {
    width: auto; }
  .table.fixed, .article table.fixed {
    table-layout: fixed; }
  .table.dense td, .table.dense th, .article table.dense td, .article table.dense th {
    padding-top: var(--space-xs);
    padding-bottom: var(--space-xs);
    padding-left: var(--space-xs);
    padding-right: var(--space-xs); }
  .table.space td, .table.space th, .article table.space td, .article table.space th {
    padding-top: var(--space-m);
    padding-bottom: var(--space-m);
    padding-left: var(--space-m);
    padding-right: var(--space-m); }

.scroll-h {
  overflow-x: scroll;
  white-space: nowrap; }
  .scroll-h.show-scrollbar::-webkit-scrollbar {
    height: 8px; }

.scroll-v {
  overflow-y: scroll; }
  .scroll-v.show-scrollbar::-webkit-scrollbar {
    width: 8px; }

.scroll-h.show-scrollbar::-webkit-scrollbar-track, .scroll-v.show-scrollbar::-webkit-scrollbar-track {
  background: var(--color-main-5); }

.scroll-h.show-scrollbar::-webkit-scrollbar-thumb, .scroll-v.show-scrollbar::-webkit-scrollbar-thumb {
  border: 2px solid var(--color-main-5);
  border-radius: 8px;
  background: var(--color-main-3); }

.inverted {
  --color-main-1: var(--main-5);
  --color-main-2: var(--main-4);
  --color-main-4: var(--main-2);
  --color-main-5: var(--main-1);
  --color-prime-1: var(--prime-5);
  --color-prime-2: var(--prime-4);
  --color-prime-4: var(--prime-2);
  --color-prime-5: var(--prime-1);
  --color-warn-1: var(--warn-5);
  --color-warn-2: var(--warn-4);
  --color-warn-4: var(--warn-2);
  --color-warn-5: var(--warn-1);
  --color-danger-1: var(--danger-5);
  --color-danger-2: var(--danger-4);
  --color-danger-4: var(--danger-2);
  --color-danger-5: var(--danger-1);
  --color-success-1: var(--success-5);
  --color-success-2: var(--success-4);
  --color-success-4: var(--success-2);
  --color-success-5: var(--success-1);
  background-color: var(--color-main-1); }
  .inverted .progress, .inverted .meter {
    --bar-border-color: var(--highlight-1) ; }
  .inverted .disabled *, .inverted :disabled * {
    color: var(--color-shadow-2); }
  .inverted .disabled:not(.loading):not(.range), .inverted :disabled:not(.loading):not(.range) {
    color: var(--color-highlight-3); }
    .inverted .disabled:not(.loading):not(.range):hover, .inverted :disabled:not(.loading):not(.range):hover {
      color: var(--color-highlight-2); }
  .inverted .input::placeholder, .inverted .textarea::placeholder {
    color: var(--color-highlight-2); }
  .inverted .input:-ms-input-placeholder, .inverted .textarea:-ms-input-placeholder {
    color: var(--color-highlight-2); }

pre, code,
.text-mono,
input.text-mono,
textarea.text-mono,
.text-mono > input,
.text-mono > textarea {
  font-family:  'DejaVu sans mono',  'Anonymous Pro',  'Ubuntu Mono',  'Droid Sans Mono Consolas',  'Andale Mono',  Consolas,  Monaco,  'Courier New',  monospace ; }

pre {
  position: relative;
  -webkit-text-size-adjust: none; }
  pre > code {
    margin: 0;
    color: var(--color, var(--color-main-5));
    overflow-y: auto;
    display: block;
    padding-top: var(--padding, var(--space-m));
    padding-bottom: var(--padding, var(--space-m));
    padding-left: var(--padding, var(--space-m));
    padding-right: var(--padding, var(--space-m));
    font-size: var(--text-s); }
  pre .code {
    white-space: pre; }

pre > code {
  background-color: var(--color-bg-2, var(--color-main-2)); }

div > code, p > code, li > code {
  font-size: .9em;
  background-color: var(--color-bg-2, var(--color-main-2));
  box-shadow: 0 0 0 1px var(--color-bg-2, var(--color-main-2));
  white-space: nowrap;
  user-select: all; }

pre .hll {
  background-color: #cccc00; }

pre .ge {
  font-style: italic; }

pre .gs {
  font-weight: bold; }

pre .c, pre .cs, pre .cm, pre .hljs-comment, pre .token.comment, pre .token.prolog, pre .token.doctype, pre .token.cdata {
  color: #01a3cb;
  font-style: italic; }

pre .gt, pre .gh, pre .nn, pre .nt, pre .hljs-tag {
  color: #5a7087; }

pre .na, pre .s, pre .nl, pre .nf, pre .hljs-function {
  color: #806699; }

pre .vc, pre .vg, pre .vi, pre .nv, pre .ni, pre .n, pre .token.function, pre .hljs-title {
  color: #9540bf; }

pre .gu, pre .gd, pre .hljs-variable {
  color: #981b98; }

pre .nc, pre .no, pre .nb, pre .hljs-built_in, pre .namespace {
  color: #089108; }

pre .k, pre .kc, pre .kd, pre .kn, pre .kp, pre .kr, pre .ne, pre .mf, pre .mh, pre .mo, pre .gi, pre .n, pre .token.keyword, pre .hljs-keyword {
  color: #29a37a; }

pre .mi, pre .m, pre .hljs-number {
  color: #2e6b4d; }

pre .hljs-attr, pre .hljs-literal {
  color: #364d63; }

pre .cp, pre .c1, pre .hljs-preprocessor {
  color: #3d748f; }

pre .si, pre .sb, pre .sc, pre .sd, pre .s1, pre .s2, pre .se, pre .sh, pre .sx, pre .token.string, pre .hljs-string {
  color: #7a3d1f; }

pre .gr, pre .kt, pre .gp, pre .sr, pre .hljs-regexp, pre .token.regex {
  color: #a32929; }

pre .err {
  color: #f31212; }

pre .w, pre .o, pre .ow, pre .p, pre .token.operator, pre .token.punctuation {
  color: gray; }

pre .go, pre .ss, pre .il, pre .bp, pre .hljs-name {
  color: #6b6161; }

pre .nd, pre .hljs-params {
  color: #4d4d4d; }

.box {
  padding: var(--space-s);
  --border-width: var(--space-px);
  border: var(--border-width) solid;
  color: var(--color, var(--color-main-5));
  position: relative;
  display: block;
  min-width: 0px; }
  .box:target {
    border-color: currentColor;
    z-index: 1; }

a.box, button.box, label.box {
  cursor: pointer;
  background-color: var(--color-bg-1, var(--color-prime-1)); }
  a.box:hover, button.box:hover, label.box:hover {
    background-color: var(--color-bg-2, var(--color-prime-2));
    z-index: 3; }

.box.active-tab, a.active-tab, button.active-tab, label.active-tab {
  background-color: var(--color-main-1);
  border-bottom-color: var(--color-main-1); }
  .box.active-tab:hover, a.active-tab:hover, button.active-tab:hover, label.active-tab:hover {
    background-color: var(--color-main-1);
    border-bottom-color: var(--color-main-1);
    cursor: default; }

.media {
  background-color: var(--color-bg-3, var(--color-main-3));
  position: relative; }
  .media img:not(.cover) {
    display: block;
    margin: 0;
    padding: 0;
    width: 100%;
    height: auto; }
  .media iframe, .media embed, .media object, .media video {
    border: 0; }

.cover {
  background-size: cover;
  background-position: var(--cover-v, top) var(--cover-h, center);
  object-fit: cover; }

.ar-4-3 {
  --ar-x: 4;
  --ar-y: 3; }

.ar-3-4 {
  --ar-x: 3;
  --ar-y: 4; }

.ar-3-2 {
  --ar-x: 3;
  --ar-y: 2; }

.ar-2-3 {
  --ar-x: 2;
  --ar-y: 3; }

.ar-16-9 {
  --ar-x: 16;
  --ar-y: 9; }

.ar-9-16 {
  --ar-x: 9;
  --ar-y: 16; }

.ar-2-1 {
  --ar-x: 2;
  --ar-y: 1; }

.ar-1-2 {
  --ar-x: 1;
  --ar-y: 2; }

.ar-1-1 {
  --ar-x: 1;
  --ar-y: 1; }

[class*="ar-"] {
  width: var(--media-width, 100%);
  display: block;
  position: relative;
  overflow-y: hidden; }
  [class*="ar-"]:before {
    content: "";
    width: 1px;
    margin-left: -1px;
    float: left;
    height: 0;
    padding-top: calc( var(--ar-y, 1) / var(--ar-x, 1) * 100%); }
  [class*="ar-"]:after {
    content: "";
    display: table;
    clear: both; }
  [class*="ar-"] > :first-child:not(.mini-info) {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0; }
  [class*="ar-"] > img:not(.cover) {
    height: auto !important; }
  [class*="ar-"] iframe, [class*="ar-"] embed, [class*="ar-"] object, [class*="ar-"] video {
    border: 0; }

.width_s {
  width: var(--space-s); }

.min-width_s {
  min-width: var(--space-s); }

.height_s {
  height: var(--space-s); }

.min-height_s {
  min-height: var(--space-s); }

.size_s {
  width: var(--space-s);
  height: var(--space-s); }

.min-size_s {
  min-width: var(--space-s);
  min-height: var(--space-s); }

.width_m {
  width: var(--space-m); }

.min-width_m {
  min-width: var(--space-m); }

.height_m {
  height: var(--space-m); }

.min-height_m {
  min-height: var(--space-m); }

.size_m {
  width: var(--space-m);
  height: var(--space-m); }

.min-size_m {
  min-width: var(--space-m);
  min-height: var(--space-m); }

.width_l {
  width: var(--space-l); }

.min-width_l {
  min-width: var(--space-l); }

.height_l {
  height: var(--space-l); }

.min-height_l {
  min-height: var(--space-l); }

.size_l {
  width: var(--space-l);
  height: var(--space-l); }

.min-size_l {
  min-width: var(--space-l);
  min-height: var(--space-l); }

.width_xl {
  width: var(--space-xl); }

.min-width_xl {
  min-width: var(--space-xl); }

.height_xl {
  height: var(--space-xl); }

.min-height_xl {
  min-height: var(--space-xl); }

.size_xl {
  width: var(--space-xl);
  height: var(--space-xl); }

.min-size_xl {
  min-width: var(--space-xl);
  min-height: var(--space-xl); }

.width_xxl {
  width: var(--space-xxl); }

.min-width_xxl {
  min-width: var(--space-xxl); }

.height_xxl {
  height: var(--space-xxl); }

.min-height_xxl {
  min-height: var(--space-xxl); }

.size_xxl {
  width: var(--space-xxl);
  height: var(--space-xxl); }

.min-size_xxl {
  min-width: var(--space-xxl);
  min-height: var(--space-xxl); }

.min-width-half {
  min-width: 50vw; }

.min-height-half {
  min-height: 50vh; }

.min-width-full {
  min-width: 100vw; }

.min-height-full {
  min-height: 100vh; }

[class*="arrow"] {
  position: relative; }

.arrow, [data-tooltip] {
  --t-size:  8px; }

.arrow_l {
  --t-size: 12px; }

.arrow_xl {
  --t-size: 18px; }

.arrow:before, [data-tooltip]:before,
.arrow_l:before,
.arrow_xl:before {
  content: '';
  position: absolute;
  left: 50%;
  bottom: calc(var(--t-size) * -1);
  width: 0;
  height: 0;
  border-style: solid;
  border-color: var(--color, var(--color-main-5)) transparent transparent transparent;
  border-width: var(--t-size) var(--t-size) 0 var(--t-size);
  transform: translateX(calc(var(--t-size) * -1)); }

[data-tooltip] {
  position: relative;
  z-index: 1000000; }
  [data-tooltip]:before, [data-tooltip]:after {
    font-family: var(--font-standard);
    transition: transform .8s;
    transform: translateX(-50%) translateY(-9px);
    position: absolute;
    visibility: hidden; }
  [data-tooltip]:hover, [data-tooltip]:focus {
    z-index: 2; }
    [data-tooltip]:hover:before, [data-tooltip]:hover:after, [data-tooltip]:focus:before, [data-tooltip]:focus:after {
      visibility: visible;
      transform: translateX(-50%) translateY(0); }
  [data-tooltip]:before {
    top: -10px; }
  [data-tooltip]:after {
    content: attr(data-tooltip);
    top: -30px;
    text-align: center;
    font-weight: normal;
    left: 50%;
    font-size: 11px;
    background: var(--color-main-5);
    color: var(--color-main-1);
    padding: 4px;
    max-width: 500px;
    white-space: nowrap; }

.striped, .loading:after {
  background-image: repeating-linear-gradient(45deg, var(--color-shadow-1), var(--color-shadow-1) 12px, var(--color-highlight-1) 12px, var(--color-highlight-1) 24px); }

.loading {
  cursor: wait;
  position: relative;
  overflow: hidden; }
  .loading:after {
    content: '';
    top: 0;
    left: 0;
    width: 200%;
    height: 100%;
    pointer-events: none;
    position: absolute;
    animation-name: move;
    animation-iteration-count: infinite;
    animation-duration: .7s;
    animation-timing-function: linear; }

@keyframes move {
  0% {
    transform: translateX(-33.6px); }
  100% {
    transform: translateX(0); } }

.pos-abs {
  position: absolute; }

.pos-rel {
  position: relative; }

.pos-fix {
  position: fixed; }

.pos-stick {
  position: -webkit-sticky;
  position: -moz-sticky;
  position: -ms-sticky;
  position: sticky; }

.pos-tl {
  top: 0;
  right: auto;
  bottom: auto;
  left: 0; }

.pos-tr {
  top: 0;
  right: 0;
  bottom: auto;
  left: auto; }

.pos-bl {
  top: auto;
  right: auto;
  bottom: 0;
  left: 0; }

.pos-br {
  top: auto;
  right: 0;
  bottom: 0;
  left: auto; }

.pos-c {
  top: 50%;
  right: auto;
  bottom: auto;
  left: 50%;
  transform: translate(-50%, -50%); }

.pos-ct {
  top: 0;
  right: auto;
  bottom: auto;
  left: 50%;
  transform: translate(-50%, 0); }

.pos-cb {
  top: auto;
  right: auto;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0); }

.pos-cr {
  top: 50%;
  right: 0;
  bottom: auto;
  left: auto;
  transform: translate(0, -50%); }

.pos-cl {
  top: 50%;
  right: auto;
  bottom: auto;
  left: 0;
  transform: translate(0, -50%); }

.disabled:focus, :disabled:focus {
  box-shadow: none !important; }

.disabled,
:disabled {
  cursor: not-allowed; }
  .disabled .mini-label,
  :disabled .mini-label {
    color: var(--color-main-3); }
  .disabled:not(.loading):not(.range),
  :disabled:not(.loading):not(.range) {
    border-color: var(--color, var(--color-main-5));
    color: var(--color-main-3);
    background-color: var(--color-bg-1, var(--color-prime-1));
    background-image: repeating-linear-gradient(45deg, var(--color-shadow-1), var(--color-shadow-1) 12px, var(--color-highlight-1) 12px, var(--color-highlight-1) 24px); }
    .disabled:not(.loading):not(.range):hover,
    :disabled:not(.loading):not(.range):hover {
      background-color: var(--color-bg-1, var(--color-prime-1)); }
  .disabled.button,
  :disabled.button {
    border-color: var(--color-5, var(--color-main-5)); }
    .disabled.button:hover,
    :disabled.button:hover {
      background-color: var(--color--bg-1, var(--color-prime-1)); }
  .disabled.button.prime,
  :disabled.button.prime {
    cursor: not-allowed;
    background-color: var(--color-bg-3, var(--color-prime-3));
    color: var(--color-prime-2); }
    .disabled.button.prime:hover,
    :disabled.button.prime:hover {
      background-color: var(--color-bg-3, var(--color-prime-3));
      color: var(--color-prime-2); }

.grid {
  --grid-cols: 12;
  --grid-gaps: calc(var(--grid-cols) - 1);
  --col-size:  calc(100%/var(--grid-cols));
  --gap-total: calc(var(--gap-space, 0px) * var(--grid-gaps));
  --gap-subst: calc(var(--gap-total) / var(--grid-cols));
  display: grid;
  grid-template-columns: repeat(var(--grid-cols), calc(var(--col-size) - var(--gap-subst)));
  grid-gap: var(--gap-space, 0px);
  gap: var(--gap-space, 0px);
  grid-auto-flow: dense; }

.span-1 {
  grid-column: span 1; }

.start-1 {
  grid-column-start: 1; }

.end-1 {
  grid-column-end: 1; }

.start-y-1 {
  grid-row-start: 1; }

.end-y-1 {
  grid-row-end: 1; }

.span-2 {
  grid-column: span 2; }

.start-2 {
  grid-column-start: 2; }

.end-2 {
  grid-column-end: 2; }

.start-y-2 {
  grid-row-start: 2; }

.end-y-2 {
  grid-row-end: 2; }

.span-3 {
  grid-column: span 3; }

.start-3 {
  grid-column-start: 3; }

.end-3 {
  grid-column-end: 3; }

.start-y-3 {
  grid-row-start: 3; }

.end-y-3 {
  grid-row-end: 3; }

.span-4 {
  grid-column: span 4; }

.start-4 {
  grid-column-start: 4; }

.end-4 {
  grid-column-end: 4; }

.start-y-4 {
  grid-row-start: 4; }

.end-y-4 {
  grid-row-end: 4; }

.span-5 {
  grid-column: span 5; }

.start-5 {
  grid-column-start: 5; }

.end-5 {
  grid-column-end: 5; }

.start-y-5 {
  grid-row-start: 5; }

.end-y-5 {
  grid-row-end: 5; }

.span-6 {
  grid-column: span 6; }

.start-6 {
  grid-column-start: 6; }

.end-6 {
  grid-column-end: 6; }

.start-y-6 {
  grid-row-start: 6; }

.end-y-6 {
  grid-row-end: 6; }

.span-7 {
  grid-column: span 7; }

.start-7 {
  grid-column-start: 7; }

.end-7 {
  grid-column-end: 7; }

.start-y-7 {
  grid-row-start: 7; }

.end-y-7 {
  grid-row-end: 7; }

.span-8 {
  grid-column: span 8; }

.start-8 {
  grid-column-start: 8; }

.end-8 {
  grid-column-end: 8; }

.start-y-8 {
  grid-row-start: 8; }

.end-y-8 {
  grid-row-end: 8; }

.span-9 {
  grid-column: span 9; }

.start-9 {
  grid-column-start: 9; }

.end-9 {
  grid-column-end: 9; }

.start-y-9 {
  grid-row-start: 9; }

.end-y-9 {
  grid-row-end: 9; }

.span-10 {
  grid-column: span 10; }

.start-10 {
  grid-column-start: 10; }

.end-10 {
  grid-column-end: 10; }

.start-y-10 {
  grid-row-start: 10; }

.end-y-10 {
  grid-row-end: 10; }

.span-11 {
  grid-column: span 11; }

.start-11 {
  grid-column-start: 11; }

.end-11 {
  grid-column-end: 11; }

.start-y-11 {
  grid-row-start: 11; }

.end-y-11 {
  grid-row-end: 11; }

.span-12 {
  grid-column: span 12; }

.start-12 {
  grid-column-start: 12; }

.end-12 {
  grid-column-end: 12; }

.start-y-12 {
  grid-row-start: 12; }

.end-y-12 {
  grid-row-end: 12; }

.span-13 {
  grid-column: span 13; }

.start-13 {
  grid-column-start: 13; }

.end-13 {
  grid-column-end: 13; }

.start-y-13 {
  grid-row-start: 13; }

.end-y-13 {
  grid-row-end: 13; }

.span-14 {
  grid-column: span 14; }

.start-14 {
  grid-column-start: 14; }

.end-14 {
  grid-column-end: 14; }

.start-y-14 {
  grid-row-start: 14; }

.end-y-14 {
  grid-row-end: 14; }

.span-15 {
  grid-column: span 15; }

.start-15 {
  grid-column-start: 15; }

.end-15 {
  grid-column-end: 15; }

.start-y-15 {
  grid-row-start: 15; }

.end-y-15 {
  grid-row-end: 15; }

.span-16 {
  grid-column: span 16; }

.start-16 {
  grid-column-start: 16; }

.end-16 {
  grid-column-end: 16; }

.start-y-16 {
  grid-row-start: 16; }

.end-y-16 {
  grid-row-end: 16; }

[class*="grid"].gap_xs {
  --gap-space: var(--space-xs) ; }

[class*="grid"].gap-h_xs {
  grid-row-gap: var(--space-xs); }

[class*="grid"].gap_s {
  --gap-space: var(--space-s) ; }

[class*="grid"].gap-h_s {
  grid-row-gap: var(--space-s); }

[class*="grid"].gap_m {
  --gap-space: var(--space-m) ; }

[class*="grid"].gap-h_m {
  grid-row-gap: var(--space-m); }

.grid-auto {
  display: grid;
  grid-gap: var(--gap-space, var(--space-s));
  grid-template-columns: repeat(auto-fit, minmax(var(--grid-auto-min, 8rem), var(--grid-auto-max, 1fr)));
  grid-auto-flow: dense; }

.grid-auto.min_m {
  --grid-auto-min: 12rem; }

.grid-auto.min_l {
  --grid-auto-min: 16rem; }

.grid-auto.min_xl {
  --grid-auto-min: 22rem; }

@media (max-width: 800px) {
  [class*="grid"].collapse-t {
    grid-template-columns: 1fr; }
  [class*="grid"] > .span-3-t {
    grid-column: span 3; }
  [class*="grid"] > .span-4-t {
    grid-column: span 4; }
  [class*="grid"] > .span-5-t {
    grid-column: span 5; }
  [class*="grid"] > .span-6-t {
    grid-column: span 6; }
  [class*="grid"] > .span-7-t {
    grid-column: span 7; }
  [class*="grid"] > .span-8-t {
    grid-column: span 8; }
  [class*="grid"] > .span-9-t {
    grid-column: span 9; }
  [class*="grid"] > .span-10-t {
    grid-column: span 10; }
  [class*="grid"] > .span-11-t {
    grid-column: span 11; }
  [class*="grid"] > .span-12-t {
    grid-column: span 12; } }

@media (max-width: 400px) {
  [class*="grid"].collapse-p {
    grid-template-columns: 1fr; }
  [class*="grid"] > .span-6-p {
    grid-column: span 6; }
  [class*="grid"] > .span-7-p {
    grid-column: span 7; }
  [class*="grid"] > .span-8-p {
    grid-column: span 8; }
  [class*="grid"] > .span-9-p {
    grid-column: span 9; }
  [class*="grid"] > .span-10-p {
    grid-column: span 10; }
  [class*="grid"] > .span-11-p {
    grid-column: span 11; }
  [class*="grid"] > .span-12-p {
    grid-column: span 12; } }

.flex {
  display: flex;
  flex-wrap: wrap; }
  .flex.wrap-no {
    flex-wrap: nowrap; }
  .flex > div,
  .flex > a,
  .flex > .button,
  .flex > .input {
    display: block;
    flex-grow: 1; }

.flex .flex {
  display: flex; }

.flex.column {
  flex-direction: column; }

.flex > .span-twothird,
.flex > .span-half,
.flex > .span-third,
.flex > .span-quarter,
.flex > .span-fifth,
.flex > .span-media,
.flex > .span-auto {
  flex-grow: 0;
  flex-shrink: 0; }

.flex > .span-full {
  flex-basis: 100%; }

.flex > .span-twothird {
  flex-basis: 66.6666%; }

.flex > .span-half {
  flex-basis: 50%; }

.flex > .span-third {
  flex-basis: 33.3333%; }

.flex > .span-quarter {
  flex-basis: 25%; }

.flex > .span-fifth {
  flex-basis: 20%; }

.flex > .span-auto {
  flex: 0 0 auto; }

.flex.gap_xs {
  margin-left: calc(-1 * var(--gap-space, var(--space-xs)));
  margin-bottom: calc(-1 * var(--gap-space, var(--space-xs))); }
  .flex.gap_xs > * {
    padding-left: var(--gap-space, var(--space-xs));
    padding-bottom: var(--gap-space, var(--space-xs)); }

.flex.gap-h_xs {
  margin-left: calc(-1 * var(--gap-space, var(--space-xs))) !important; }
  .flex.gap-h_xs > * {
    padding-left: var(--gap-space, var(--space-xs)) !important; }

.flex.gap_s {
  margin-left: calc(-1 * var(--gap-space, var(--space-s)));
  margin-bottom: calc(-1 * var(--gap-space, var(--space-s))); }
  .flex.gap_s > * {
    padding-left: var(--gap-space, var(--space-s));
    padding-bottom: var(--gap-space, var(--space-s)); }

.flex.gap-h_s {
  margin-left: calc(-1 * var(--gap-space, var(--space-s))) !important; }
  .flex.gap-h_s > * {
    padding-left: var(--gap-space, var(--space-s)) !important; }

.flex.gap_m {
  margin-left: calc(-1 * var(--gap-space, var(--space-m)));
  margin-bottom: calc(-1 * var(--gap-space, var(--space-m))); }
  .flex.gap_m > * {
    padding-left: var(--gap-space, var(--space-m));
    padding-bottom: var(--gap-space, var(--space-m)); }

.flex.gap-h_m {
  margin-left: calc(-1 * var(--gap-space, var(--space-m))) !important; }
  .flex.gap-h_m > * {
    padding-left: var(--gap-space, var(--space-m)) !important; }

.flex.gap_l {
  margin-left: calc(-1 * var(--gap-space, var(--space-l)));
  margin-bottom: calc(-1 * var(--gap-space, var(--space-l))); }
  .flex.gap_l > * {
    padding-left: var(--gap-space, var(--space-l));
    padding-bottom: var(--gap-space, var(--space-l)); }

.flex.gap-h_l {
  margin-left: calc(-1 * var(--gap-space, var(--space-l))) !important; }
  .flex.gap-h_l > * {
    padding-left: var(--gap-space, var(--space-l)) !important; }

.flex.gap_xl {
  margin-left: calc(-1 * var(--gap-space, var(--space-xl)));
  margin-bottom: calc(-1 * var(--gap-space, var(--space-xl))); }
  .flex.gap_xl > * {
    padding-left: var(--gap-space, var(--space-xl));
    padding-bottom: var(--gap-space, var(--space-xl)); }

.flex.gap-h_xl {
  margin-left: calc(-1 * var(--gap-space, var(--space-xl))) !important; }
  .flex.gap-h_xl > * {
    padding-left: var(--gap-space, var(--space-xl)) !important; }

@media (max-width: 800px) {
  .flex.collapse-t {
    display: block; }
    .flex.collapse-t.gap-no .input {
      width: 100%; }
    .flex.collapse-t.gap-no > * {
      margin-left: 0; }
  .flex .collapse-t {
    flex-basis: 100% !important; }
  .flex > .span-half-t {
    flex-basis: 50% !important; }
  .flex > .span-full-t {
    flex-basis: 100% !important; } }

@media (max-width: 400px) {
  .flex.collapse-p {
    display: block; }
  .flex .collapse-p {
    flex-basis: 100% !important; }
  .flex > .span-half-p {
    flex-basis: 50% !important; }
  .flex > .span-full-p {
    flex-basis: 100% !important; } }

.content-start {
  align-content: flex-start; }

.content-end {
  align-content: flex-end; }

.content-center {
  align-content: center; }

.content-between {
  align-content: space-between; }

.content-around {
  align-content: space-around; }

.items-stretch {
  align-items: stretch; }

.items-end {
  align-items: flex-end; }

.items-center {
  align-items: center; }

.items-baseline {
  align-items: baseline; }

.justify-start {
  justify-content: flex-start; }

.justify-end {
  justify-content: flex-end; }

.justify-center {
  justify-content: center; }

.justify-between {
  justify-content: space-between; }

.justify-around {
  justify-content: space-around; }

.self-start {
  align-self: flex-start; }

.self-center {
  align-self: center; }

.self-end {
  align-self: flex-end; }

.ma-auto {
  margin: auto; }

.ma-v-auto {
  margin-top: auto;
  margin-bottom: auto; }

.ma-h-auto {
  margin-left: auto;
  margin-right: auto; }

.ma-t-auto {
  margin-top: auto !important; }

.ma-r-auto {
  margin-right: auto !important; }

.ma-b-auto {
  margin-bottom: auto !important; }

.ma-l-auto {
  margin-left: auto !important; }

.columns:not(.break-inside) > * {
  -webkit-column-break-inside: avoid;
  page-break-inside: avoid;
  break-inside: avoid; }

.columns:not(.article) > *:not(:first-child) {
  margin-top: var(--gap-space, 0); }

.columns .span-all {
  column-span: all; }

.columns {
  column-count: 2; }
  .columns.cols-3 {
    column-count: 3; }
  .columns.cols-4 {
    column-count: 4; }
  .columns.cols-5 {
    column-count: 5; }
  .columns.cols-6 {
    column-count: 6; }
  .columns.cols-7 {
    column-count: 7; }
  .columns.cols-8 {
    column-count: 8; }
  .columns.cols-9 {
    column-count: 9; }
  .columns.cols-10 {
    column-count: 10; }

@media (max-width: 800px) {
  .columns.cols-2-t {
    column-count: 2; }
  .columns.cols-3-t {
    column-count: 3; }
  .columns.cols-4-t {
    column-count: 4; }
  .columns.cols-5-t {
    column-count: 5; }
  .columns.cols-6-t {
    column-count: 6; }
  /* Hello. You there? */
  .columns.collapse-t {
    column-count: 1 !important; } }

@media (max-width: 400px) {
  .columns.cols-2-p {
    column-count: 2; }
  .columns.cols-3-p {
    column-count: 3; }
  .columns.cols-4-p {
    column-count: 4; }
  .columns.cols-5-p {
    column-count: 5; }
  .columns.cols-6-p {
    column-count: 6; }
  .columns.collapse-p {
    column-count: 1 !important; } }

.columns {
  column-gap: var(--gap-size, 0); }
  .columns.gap-no {
    margin-left: 1px; }
    .columns.gap-no > * {
      margin-left: -1px;
      margin-bottom: -1px; }
  .columns.gap_px, .columns.gap-h_px {
    column-gap: var(--space-px); }
  .columns.gap_xs, .columns.gap-h_xs {
    column-gap: var(--space-xs); }
  .columns.gap_s, .columns.gap-h_s {
    column-gap: var(--space-s); }
  .columns.gap_m, .columns.gap-h_m {
    column-gap: var(--space-m); }
  .columns.gap_l, .columns.gap-h_l {
    column-gap: var(--space-l); }
  .columns.gap_xl, .columns.gap-h_xl {
    column-gap: var(--space-xl); }

.columns.gap-bo_px {
  column-rule: var(--space-px) solid; }

.columns.gap-bo_xs {
  column-rule: var(--space-xs) solid; }

.columns.gap-bo_s {
  column-rule: var(--space-s) solid; }

.gap-no > * {
  margin-bottom: calc(-1 * var(--space-px)); }

.gap-no > .gap-no {
  margin-bottom: 0; }

.grid.gap-no, .grid-auto.gap-no {
  --gap-space: 0px;
  margin-left: var(--space-px); }
  .grid.gap-no > *, .grid-auto.gap-no > * {
    margin-left: calc(-1 * var(--space-px)); }

.flex.gap-no {
  margin-left: var(--space-px);
  margin-bottom: 0; }
  .flex.gap-no > * {
    margin-left: calc(-1 * var(--space-px)); }
  .flex.gap-no > .span-twothird {
    flex-basis: calc(66.6666% + var(--space-px)); }
  .flex.gap-no > .span-half {
    flex-basis: calc(50%      + var(--space-px)); }
  .flex.gap-no > .span-third {
    flex-basis: calc(33.3333% + var(--space-px)); }
  .flex.gap-no > .span-quarter {
    flex-basis: calc(25%      + var(--space-px)); }
  .flex.gap-no > .span-fifth {
    flex-basis: calc(20%      + var(--space-px)); }

.gap_xs:not(.grid):not(.grid-auto):not(.flex) > *:not(:first-child) {
  margin-top: var(--space-xs); }

.gap_s:not(.grid):not(.grid-auto):not(.flex) > *:not(:first-child) {
  margin-top: var(--space-s); }

.gap_m:not(.grid):not(.grid-auto):not(.flex) > *:not(:first-child) {
  margin-top: var(--space-m); }

.gap_l:not(.grid):not(.grid-auto):not(.flex) > *:not(:first-child) {
  margin-top: var(--space-l); }

.gap-custom:not(.grid):not(.grid-auto):not(.flex) > *:not(:first-child) {
  margin-top: var(--gap-size); }

[class*="bs_"] {
  --shadow-left: 0;
  --shadow-top:  0;
  --shadow-size: 0;
  box-shadow: var(--shadow-left) var(--shadow-top) var(--shadow-size) var(--shadow-color, var(--color-shadow-2)); }

.bs_xs {
  --shadow-top:  var(--space-px);
  --shadow-size: var(--space-xs)
; }

.bs_s {
  --shadow-top:  var(--space-xs);
  --shadow-size: var(--space-s)
; }

.bs_m {
  --shadow-top:  var(--space-s);
  --shadow-size: var(--space-m)
; }

.bs_l {
  --shadow-top:  var(--space-m);
  --shadow-size: var(--space-l)
; }

.bs-no {
  box-shadow: none; }

[class*="bo-"], [class*="bo_"] {
  --border-color: var(--color);
  border-style: var(--border-style, solid);
  border-color: var(--border-color, var(--color-main-5)); }

.bo_px {
  --border-width: var(--space-px);
  border-width: var(--border-width); }

.bo-t_px {
  --border-top-width: var(--space-px);
  border-top-width: var(--border-top-width); }

.bo-r_px {
  --border-right-width: var(--space-px);
  border-right-width: var(--border-right-width); }

.bo-b_px {
  --border-bottom-width: var(--space-px);
  border-bottom-width: var(--border-bottom-width); }

.bo-l_px {
  --border-left-width: var(--space-px);
  border-left-width: var(--border-left-width); }

.bo_xs {
  --border-width: var(--space-xs);
  border-width: var(--border-width); }

.bo-t_xs {
  --border-top-width: var(--space-xs);
  border-top-width: var(--border-top-width); }

.bo-r_xs {
  --border-right-width: var(--space-xs);
  border-right-width: var(--border-right-width); }

.bo-b_xs {
  --border-bottom-width: var(--space-xs);
  border-bottom-width: var(--border-bottom-width); }

.bo-l_xs {
  --border-left-width: var(--space-xs);
  border-left-width: var(--border-left-width); }

.bo_s {
  --border-width: var(--space-s);
  border-width: var(--border-width); }

.bo-t_s {
  --border-top-width: var(--space-s);
  border-top-width: var(--border-top-width); }

.bo-r_s {
  --border-right-width: var(--space-s);
  border-right-width: var(--border-right-width); }

.bo-b_s {
  --border-bottom-width: var(--space-s);
  border-bottom-width: var(--border-bottom-width); }

.bo-l_s {
  --border-left-width: var(--space-s);
  border-left-width: var(--border-left-width); }

.bo-no {
  border: none !important; }

.ma-t_px {
  margin-top: var(--space-px); }

.ma-t_px- {
  margin-top: calc(-1 * var(--space-px)); }

.ma-r_px {
  margin-right: var(--space-px); }

.ma-r_px- {
  margin-right: calc(-1 * var(--space-px)); }

.ma-b_px {
  margin-bottom: var(--space-px); }

.ma-b_px- {
  margin-bottom: calc(-1 * var(--space-px)); }

.ma-l_px {
  margin-left: var(--space-px); }

.ma-l_px- {
  margin-left: calc(-1 * var(--space-px)); }

.ma-v_px {
  margin-top: var(--space-px);
  margin-bottom: var(--space-px); }

.ma-v_px- {
  margin-top: calc(-1 * var(--space-px));
  margin-bottom: calc(-1 * var(--space-px)); }

.ma-h_px {
  margin-left: var(--space-px);
  margin-right: var(--space-px); }

.ma-h_px- {
  margin-left: calc(-1 * var(--space-px));
  margin-right: calc(-1 * var(--space-px)); }

.ma-t_xs {
  margin-top: var(--space-xs); }

.ma-t_xs- {
  margin-top: calc(-1 * var(--space-xs)); }

.ma-r_xs {
  margin-right: var(--space-xs); }

.ma-r_xs- {
  margin-right: calc(-1 * var(--space-xs)); }

.ma-b_xs {
  margin-bottom: var(--space-xs); }

.ma-b_xs- {
  margin-bottom: calc(-1 * var(--space-xs)); }

.ma-l_xs {
  margin-left: var(--space-xs); }

.ma-l_xs- {
  margin-left: calc(-1 * var(--space-xs)); }

.ma-v_xs {
  margin-top: var(--space-xs);
  margin-bottom: var(--space-xs); }

.ma-v_xs- {
  margin-top: calc(-1 * var(--space-xs));
  margin-bottom: calc(-1 * var(--space-xs)); }

.ma-h_xs {
  margin-left: var(--space-xs);
  margin-right: var(--space-xs); }

.ma-h_xs- {
  margin-left: calc(-1 * var(--space-xs));
  margin-right: calc(-1 * var(--space-xs)); }

.ma-t_s {
  margin-top: var(--space-s); }

.ma-t_s- {
  margin-top: calc(-1 * var(--space-s)); }

.ma-r_s {
  margin-right: var(--space-s); }

.ma-r_s- {
  margin-right: calc(-1 * var(--space-s)); }

.ma-b_s {
  margin-bottom: var(--space-s); }

.ma-b_s- {
  margin-bottom: calc(-1 * var(--space-s)); }

.ma-l_s {
  margin-left: var(--space-s); }

.ma-l_s- {
  margin-left: calc(-1 * var(--space-s)); }

.ma-v_s {
  margin-top: var(--space-s);
  margin-bottom: var(--space-s); }

.ma-v_s- {
  margin-top: calc(-1 * var(--space-s));
  margin-bottom: calc(-1 * var(--space-s)); }

.ma-h_s {
  margin-left: var(--space-s);
  margin-right: var(--space-s); }

.ma-h_s- {
  margin-left: calc(-1 * var(--space-s));
  margin-right: calc(-1 * var(--space-s)); }

.ma-t_m {
  margin-top: var(--space-m); }

.ma-t_m- {
  margin-top: calc(-1 * var(--space-m)); }

.ma-r_m {
  margin-right: var(--space-m); }

.ma-r_m- {
  margin-right: calc(-1 * var(--space-m)); }

.ma-b_m {
  margin-bottom: var(--space-m); }

.ma-b_m- {
  margin-bottom: calc(-1 * var(--space-m)); }

.ma-l_m {
  margin-left: var(--space-m); }

.ma-l_m- {
  margin-left: calc(-1 * var(--space-m)); }

.ma-v_m {
  margin-top: var(--space-m);
  margin-bottom: var(--space-m); }

.ma-v_m- {
  margin-top: calc(-1 * var(--space-m));
  margin-bottom: calc(-1 * var(--space-m)); }

.ma-h_m {
  margin-left: var(--space-m);
  margin-right: var(--space-m); }

.ma-h_m- {
  margin-left: calc(-1 * var(--space-m));
  margin-right: calc(-1 * var(--space-m)); }

.ma-t_l {
  margin-top: var(--space-l); }

.ma-t_l- {
  margin-top: calc(-1 * var(--space-l)); }

.ma-r_l {
  margin-right: var(--space-l); }

.ma-r_l- {
  margin-right: calc(-1 * var(--space-l)); }

.ma-b_l {
  margin-bottom: var(--space-l); }

.ma-b_l- {
  margin-bottom: calc(-1 * var(--space-l)); }

.ma-l_l {
  margin-left: var(--space-l); }

.ma-l_l- {
  margin-left: calc(-1 * var(--space-l)); }

.ma-v_l {
  margin-top: var(--space-l);
  margin-bottom: var(--space-l); }

.ma-v_l- {
  margin-top: calc(-1 * var(--space-l));
  margin-bottom: calc(-1 * var(--space-l)); }

.ma-h_l {
  margin-left: var(--space-l);
  margin-right: var(--space-l); }

.ma-h_l- {
  margin-left: calc(-1 * var(--space-l));
  margin-right: calc(-1 * var(--space-l)); }

.ma-t_xl {
  margin-top: var(--space-xl); }

.ma-t_xl- {
  margin-top: calc(-1 * var(--space-xl)); }

.ma-r_xl {
  margin-right: var(--space-xl); }

.ma-r_xl- {
  margin-right: calc(-1 * var(--space-xl)); }

.ma-b_xl {
  margin-bottom: var(--space-xl); }

.ma-b_xl- {
  margin-bottom: calc(-1 * var(--space-xl)); }

.ma-l_xl {
  margin-left: var(--space-xl); }

.ma-l_xl- {
  margin-left: calc(-1 * var(--space-xl)); }

.ma-v_xl {
  margin-top: var(--space-xl);
  margin-bottom: var(--space-xl); }

.ma-v_xl- {
  margin-top: calc(-1 * var(--space-xl));
  margin-bottom: calc(-1 * var(--space-xl)); }

.ma-h_xl {
  margin-left: var(--space-xl);
  margin-right: var(--space-xl); }

.ma-h_xl- {
  margin-left: calc(-1 * var(--space-xl));
  margin-right: calc(-1 * var(--space-xl)); }

.ma-t_xxl {
  margin-top: var(--space-xxl); }

.ma-t_xxl- {
  margin-top: calc(-1 * var(--space-xxl)); }

.ma-r_xxl {
  margin-right: var(--space-xxl); }

.ma-r_xxl- {
  margin-right: calc(-1 * var(--space-xxl)); }

.ma-b_xxl {
  margin-bottom: var(--space-xxl); }

.ma-b_xxl- {
  margin-bottom: calc(-1 * var(--space-xxl)); }

.ma-l_xxl {
  margin-left: var(--space-xxl); }

.ma-l_xxl- {
  margin-left: calc(-1 * var(--space-xxl)); }

.ma-v_xxl {
  margin-top: var(--space-xxl);
  margin-bottom: var(--space-xxl); }

.ma-v_xxl- {
  margin-top: calc(-1 * var(--space-xxl));
  margin-bottom: calc(-1 * var(--space-xxl)); }

.ma-h_xxl {
  margin-left: var(--space-xxl);
  margin-right: var(--space-xxl); }

.ma-h_xxl- {
  margin-left: calc(-1 * var(--space-xxl));
  margin-right: calc(-1 * var(--space-xxl)); }

.ma-no {
  margin: 0; }

.ra_xs {
  border-radius: var(--space-xs); }

.ra-t_xs {
  border-top-right-radius: var(--space-xs);
  border-top-left-radius: var(--space-xs); }

.ra-r_xs {
  border-top-right-radius: var(--space-xs);
  border-bottom-right-radius: var(--space-xs); }

.ra-b_xs {
  border-bottom-left-radius: var(--space-xs);
  border-bottom-right-radius: var(--space-xs); }

.ra-l_xs {
  border-bottom-left-radius: var(--space-xs);
  border-top-left-radius: var(--space-xs); }

.ra-tr_xs {
  border-top-right-radius: var(--space-xs); }

.ra-br_xs {
  border-bottom-right-radius: var(--space-xs); }

.ra-bl_xs {
  border-bottom-left-radius: var(--space-xs); }

.ra-tl_xs {
  border-top-left-radius: var(--space-xs); }

.ra_s {
  border-radius: var(--space-s); }

.ra-t_s {
  border-top-right-radius: var(--space-s);
  border-top-left-radius: var(--space-s); }

.ra-r_s {
  border-top-right-radius: var(--space-s);
  border-bottom-right-radius: var(--space-s); }

.ra-b_s {
  border-bottom-left-radius: var(--space-s);
  border-bottom-right-radius: var(--space-s); }

.ra-l_s {
  border-bottom-left-radius: var(--space-s);
  border-top-left-radius: var(--space-s); }

.ra-tr_s {
  border-top-right-radius: var(--space-s); }

.ra-br_s {
  border-bottom-right-radius: var(--space-s); }

.ra-bl_s {
  border-bottom-left-radius: var(--space-s); }

.ra-tl_s {
  border-top-left-radius: var(--space-s); }

.ra_m {
  border-radius: var(--space-m); }

.ra-t_m {
  border-top-right-radius: var(--space-m);
  border-top-left-radius: var(--space-m); }

.ra-r_m {
  border-top-right-radius: var(--space-m);
  border-bottom-right-radius: var(--space-m); }

.ra-b_m {
  border-bottom-left-radius: var(--space-m);
  border-bottom-right-radius: var(--space-m); }

.ra-l_m {
  border-bottom-left-radius: var(--space-m);
  border-top-left-radius: var(--space-m); }

.ra-tr_m {
  border-top-right-radius: var(--space-m); }

.ra-br_m {
  border-bottom-right-radius: var(--space-m); }

.ra-bl_m {
  border-bottom-left-radius: var(--space-m); }

.ra-tl_m {
  border-top-left-radius: var(--space-m); }

.ra-pill {
  border-radius: 290486px; }

.ra-pill-l {
  border-top-left-radius: 290486px;
  border-bottom-left-radius: 290486px; }

.ra-pill-r {
  border-top-right-radius: 290486px;
  border-bottom-right-radius: 290486px; }

.ra-circle {
  border-radius: 50%; }

.ra-no {
  border-radius: 0 !important; }

@media (max-width: 800px) {
  .ra-no-t {
    border-radius: 0 !important; } }

@media (max-width: 400px) {
  .r-no-p {
    border-radius: 0 !important; } }

.visible {
  visibility: visible; }

.invisible {
  visibility: hidden; }

.removed {
  display: none; }

.block {
  display: block;
  width: 100%; }

.inline {
  display: inline; }

.inline-block {
  display: inline-block; }

.inline-flex {
  display: inline-flex; }

.block-link {
  display: block;
  padding: var(--padding, var(--space-xs)); }
  .block-link.active {
    color: var(--color-main-1) !important; }
    .block-link.active:hover {
      background-color: var(--color-main-5); }
  .block-link:hover {
    background-color: var(--color-prime-2); }

.pa_px {
  padding-top: var(--space-px);
  padding-bottom: var(--space-px);
  padding-left: var(--space-px);
  padding-right: var(--space-px); }

.pa-v_px {
  padding-top: var(--space-px);
  padding-bottom: var(--space-px); }

.pa-h_px {
  padding-left: var(--space-px);
  padding-right: var(--space-px); }

.pa-t_px {
  padding-top: var(--space-px); }

.pa-r_px {
  padding-right: var(--space-px); }

.pa-b_px {
  padding-bottom: var(--space-px); }

.pa-l_px {
  padding-left: var(--space-px); }

.pa_xs {
  padding-top: var(--space-xs);
  padding-bottom: var(--space-xs);
  padding-left: var(--space-xs);
  padding-right: var(--space-xs); }

.pa-v_xs {
  padding-top: var(--space-xs);
  padding-bottom: var(--space-xs); }

.pa-h_xs {
  padding-left: var(--space-xs);
  padding-right: var(--space-xs); }

.pa-t_xs {
  padding-top: var(--space-xs); }

.pa-r_xs {
  padding-right: var(--space-xs); }

.pa-b_xs {
  padding-bottom: var(--space-xs); }

.pa-l_xs {
  padding-left: var(--space-xs); }

.pa_s {
  padding-top: var(--space-s);
  padding-bottom: var(--space-s);
  padding-left: var(--space-s);
  padding-right: var(--space-s); }

.pa-v_s {
  padding-top: var(--space-s);
  padding-bottom: var(--space-s); }

.pa-h_s {
  padding-left: var(--space-s);
  padding-right: var(--space-s); }

.pa-t_s {
  padding-top: var(--space-s); }

.pa-r_s {
  padding-right: var(--space-s); }

.pa-b_s {
  padding-bottom: var(--space-s); }

.pa-l_s {
  padding-left: var(--space-s); }

.pa_m {
  padding-top: var(--space-m);
  padding-bottom: var(--space-m);
  padding-left: var(--space-m);
  padding-right: var(--space-m); }

.pa-v_m {
  padding-top: var(--space-m);
  padding-bottom: var(--space-m); }

.pa-h_m {
  padding-left: var(--space-m);
  padding-right: var(--space-m); }

.pa-t_m {
  padding-top: var(--space-m); }

.pa-r_m {
  padding-right: var(--space-m); }

.pa-b_m {
  padding-bottom: var(--space-m); }

.pa-l_m {
  padding-left: var(--space-m); }

.pa_l {
  padding-top: var(--space-l);
  padding-bottom: var(--space-l);
  padding-left: var(--space-l);
  padding-right: var(--space-l); }

.pa-v_l {
  padding-top: var(--space-l);
  padding-bottom: var(--space-l); }

.pa-h_l {
  padding-left: var(--space-l);
  padding-right: var(--space-l); }

.pa-t_l {
  padding-top: var(--space-l); }

.pa-r_l {
  padding-right: var(--space-l); }

.pa-b_l {
  padding-bottom: var(--space-l); }

.pa-l_l {
  padding-left: var(--space-l); }

.pa_xl {
  padding-top: var(--space-xl);
  padding-bottom: var(--space-xl);
  padding-left: var(--space-xl);
  padding-right: var(--space-xl); }

.pa-v_xl {
  padding-top: var(--space-xl);
  padding-bottom: var(--space-xl); }

.pa-h_xl {
  padding-left: var(--space-xl);
  padding-right: var(--space-xl); }

.pa-t_xl {
  padding-top: var(--space-xl); }

.pa-r_xl {
  padding-right: var(--space-xl); }

.pa-b_xl {
  padding-bottom: var(--space-xl); }

.pa-l_xl {
  padding-left: var(--space-xl); }

.pa-no {
  padding: 0 !important; }

[class*="bg-main-1"] {
  background-color: var(--color-main-1); }

[class*="bg-main-2"] {
  background-color: var(--color-main-2); }

[class*="bg-main-3"] {
  background-color: var(--color-main-3); }

[class*="bg-main-4"] {
  background-color: var(--color-main-4); }

[class*="bg-main-5"] {
  background-color: var(--color-main-5); }

[class*="bg-prime-1"] {
  background-color: var(--color-prime-1); }

[class*="bg-prime-2"] {
  background-color: var(--color-prime-2); }

[class*="bg-prime-3"] {
  background-color: var(--color-prime-3); }

[class*="bg-prime-4"] {
  background-color: var(--color-prime-4); }

[class*="bg-prime-5"] {
  background-color: var(--color-prime-5); }

[class*="bg-warn-1"] {
  background-color: var(--color-warn-1); }

[class*="bg-warn-2"] {
  background-color: var(--color-warn-2); }

[class*="bg-warn-3"] {
  background-color: var(--color-warn-3); }

[class*="bg-warn-4"] {
  background-color: var(--color-warn-4); }

[class*="bg-warn-5"] {
  background-color: var(--color-warn-5); }

[class*="bg-danger-1"] {
  background-color: var(--color-danger-1); }

[class*="bg-danger-2"] {
  background-color: var(--color-danger-2); }

[class*="bg-danger-3"] {
  background-color: var(--color-danger-3); }

[class*="bg-danger-4"] {
  background-color: var(--color-danger-4); }

[class*="bg-danger-5"] {
  background-color: var(--color-danger-5); }

[class*="bg-success-1"] {
  background-color: var(--color-success-1); }

[class*="bg-success-2"] {
  background-color: var(--color-success-2); }

[class*="bg-success-3"] {
  background-color: var(--color-success-3); }

[class*="bg-success-4"] {
  background-color: var(--color-success-4); }

[class*="bg-success-5"] {
  background-color: var(--color-success-5); }

.bg-main-1-h:hover, .bg-main-1-h:focus {
  background-color: var(--color-main-2); }

.bg-main-2-h:hover, .bg-main-2-h:focus {
  background-color: var(--color-main-3); }

.bg-main-3-h:hover, .bg-main-3-h:focus {
  background-color: var(--color-main-4); }

.bg-main-4-h:hover, .bg-main-4-h:focus {
  background-color: var(--color-main-5); }

.bg-main-5-h:hover, .bg-main-5-h:focus {
  background-color: var(--color-main-6);
  background-color: black; }

.bg-prime-1-h:hover, .bg-prime-1-h:focus {
  background-color: var(--color-prime-2); }

.bg-prime-2-h:hover, .bg-prime-2-h:focus {
  background-color: var(--color-prime-3); }

.bg-prime-3-h:hover, .bg-prime-3-h:focus {
  background-color: var(--color-prime-4); }

.bg-prime-4-h:hover, .bg-prime-4-h:focus {
  background-color: var(--color-prime-5); }

.bg-prime-5-h:hover, .bg-prime-5-h:focus {
  background-color: var(--color-prime-6);
  background-color: black; }

.bg-warn-1-h:hover, .bg-warn-1-h:focus {
  background-color: var(--color-warn-2); }

.bg-warn-2-h:hover, .bg-warn-2-h:focus {
  background-color: var(--color-warn-3); }

.bg-warn-3-h:hover, .bg-warn-3-h:focus {
  background-color: var(--color-warn-4); }

.bg-warn-4-h:hover, .bg-warn-4-h:focus {
  background-color: var(--color-warn-5); }

.bg-warn-5-h:hover, .bg-warn-5-h:focus {
  background-color: var(--color-warn-6);
  background-color: black; }

.bg-danger-1-h:hover, .bg-danger-1-h:focus {
  background-color: var(--color-danger-2); }

.bg-danger-2-h:hover, .bg-danger-2-h:focus {
  background-color: var(--color-danger-3); }

.bg-danger-3-h:hover, .bg-danger-3-h:focus {
  background-color: var(--color-danger-4); }

.bg-danger-4-h:hover, .bg-danger-4-h:focus {
  background-color: var(--color-danger-5); }

.bg-danger-5-h:hover, .bg-danger-5-h:focus {
  background-color: var(--color-danger-6);
  background-color: black; }

.bg-success-1-h:hover, .bg-success-1-h:focus {
  background-color: var(--color-success-2); }

.bg-success-2-h:hover, .bg-success-2-h:focus {
  background-color: var(--color-success-3); }

.bg-success-3-h:hover, .bg-success-3-h:focus {
  background-color: var(--color-success-4); }

.bg-success-4-h:hover, .bg-success-4-h:focus {
  background-color: var(--color-success-5); }

.bg-success-5-h:hover, .bg-success-5-h:focus {
  background-color: var(--color-success-6);
  background-color: black; }

.bg-shadow-1 {
  background-color: var(--color-shadow-1); }

.bg-shadow-2 {
  background-color: var(--color-shadow-2); }

.bg-highlight-1 {
  background-color: var(--color-highlight-1); }

.bg-highlight-2 {
  background-color: var(--color-highlight-2); }

.bg-a {
  background-color: #dbc4bd; }

.bg-b {
  background-color: #dbcbbd; }

.bg-c {
  background-color: #dbd2bd; }

.bg-d {
  background-color: #dbd9bd; }

.bg-e {
  background-color: #d7dbbd; }

.bg-f {
  background-color: #d0dbbd; }

.bg-g {
  background-color: #c8dbbd; }

.bg-h {
  background-color: #c1dbbd; }

.bg-i {
  background-color: #bddbbf; }

.bg-j {
  background-color: #bddbc6; }

.bg-k {
  background-color: #bddbcd; }

.bg-l {
  background-color: #bddbd4; }

.bg-m {
  background-color: #bddbdb; }

.bg-n {
  background-color: #bdd4db; }

.bg-o {
  background-color: #bdcddb; }

.bg-p {
  background-color: #bdc6db; }

.bg-q {
  background-color: #bdbfdb; }

.bg-r {
  background-color: #c1bddb; }

.bg-s {
  background-color: #c8bddb; }

.bg-t {
  background-color: #d0bddb; }

.bg-u {
  background-color: #d7bddb; }

.bg-v {
  background-color: #dbbdd9; }

.bg-w {
  background-color: #dbbdd2; }

.bg-x {
  background-color: #dbbdcb; }

.bg-y {
  background-color: #dbbdc4; }

.bg-z {
  background-color: #dbbdbd; }

.bg-0 {
  background-color: #dbdbdb; }

.bg-1 {
  background-color: #c7c7c7; }

.bg-2 {
  background-color: #b3b3b3; }

.bg-3 {
  background-color: #9e9e9e; }

.bg-4 {
  background-color: #8a8a8a; }

.bg-5 {
  background-color: #757575; }

.bg-6 {
  background-color: #616161; }

.bg-7 {
  background-color: #4d4d4d; }

.bg-8 {
  background-color: #383838; }

.bg-9 {
  background-color: #242424; }

.tinted-warn, .tinted-warn * {
  --color: var(--color-warn-4); }

.tinted-success, .tinted-success * {
  --color: var(--color-success-4); }

.tinted-danger, .tinted-danger * {
  --color: var(--color-danger-4); }

.tinted-prime, .tinted-prime * {
  --color: var(--color-prime-4); }

.tinted-bg-warn, .tinted-bg-warn * {
  --color-bg-1: var(--color-warn-1);
  --color-bg-2: var(--color-warn-2);
  --color-bg-3: var(--color-warn-3);
  --color-bg-4: var(--color-warn-4);
  --color-bg-5: var(--color-warn-5); }

.tinted-bg-success, .tinted-bg-success * {
  --color-bg-1: var(--color-success-1);
  --color-bg-2: var(--color-success-2);
  --color-bg-3: var(--color-success-3);
  --color-bg-4: var(--color-success-4);
  --color-bg-5: var(--color-success-5); }

.tinted-bg-danger, .tinted-bg-danger * {
  --color-bg-1: var(--color-danger-1);
  --color-bg-2: var(--color-danger-2);
  --color-bg-3: var(--color-danger-3);
  --color-bg-4: var(--color-danger-4);
  --color-bg-5: var(--color-danger-5); }

.tinted-bg-prime, .tinted-bg-prime * {
  --color-bg-1: var(--color-prime-1);
  --color-bg-2: var(--color-prime-2);
  --color-bg-3: var(--color-prime-3);
  --color-bg-4: var(--color-prime-4);
  --color-bg-5: var(--color-prime-5); }

[class*="tinted-bg-"].media img, [class*="tinted-bg-"].media .img, [class*="tinted-bg-"] .media img, [class*="tinted-bg-"] .media .img {
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
  mix-blend-mode: multiply; }


</style>
`