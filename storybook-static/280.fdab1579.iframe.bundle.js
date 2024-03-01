/*! For license information please see 280.fdab1579.iframe.bundle.js.LICENSE.txt */
    :host {
        box-shadow: 0 0 2px var(--at-gray-soft);
    }

    .header {
        border: none;
        padding: 8px 16px;
        margin: 0;
        text-align: left;
        min-height: var(--awf-accordion-panel-header-height-inner);
        height: var(--awf-accordion-panel-header-height-inner);
        width: 100%;
        display: flex;
        align-items: center;
        background-color: var(--at-white);
        border-top: var(--awf-accordion-panel-item-separator-border-inner);
        color: var(--at-dark-navy);
        font-family: "Noto Sans Display", sans-serif;
    }
    
    .body {
        padding: 8px 0px 8px 16px;
        color: var(--at-dark-navy);
    }

    awf-icon {
        padding-left: 16px;
        flex: 0 0 auto;
    }
    
    .label {
        padding-right: 16px;
        overflow: hidden;
        color: var(--awf-state-rest-foreground);
        font-size: var(--awf-accordion-panel-header-font-size-inner);
        font-weight: var(--awf-accordion-panel-header-font-weight-inner);
        white-space: nowrap;
        text-overflow: ellipsis;
        flex: 0 1 35%;
    }

    ::slotted([slot="prefix"]) {
        margin-right: 10px;
    }

    slot[name='header'] {
        display: flex;
        min-width: 0;
        flex: 1 1 0%;
        padding-right: 16px;
        justify-content: left;
    }

    ::slotted([slot="header"]) {
        min-width: 0;
    }

    button:enabled:hover {
        background-color: var(--awf-state-hover-background);
        cursor: pointer;
    }

    button:enabled:active {
        background-color: var(--awf-state-selected-background);
    }

    button[disabled] > .label {
        color: var(--awf-state-disabled-foreground);
    }

    button[disabled] > awf-icon {
        display: none;
    }
`,ACCORDION_PANEL_CSS_VARIABLES=lit.iv`
    :host {
        --awf-accordion-panel-item-separator-border-inner: var(--accordion-item-separator-border, 1px solid var(--at-gray));
        --awf-accordion-panel-header-font-size-inner: var(--awf-accordion-panel-header-font-size, 18px);
        --awf-accordion-panel-header-font-weight-inner: var(--awf-accordion-panel-header-font-weight, 600);
        --awf-accordion-panel-header-height-inner: var(--awf-accordion-panel-header-height, 40px);
    }
`,typography_styles=lit.iv`
/*
 * © Agilent Technologies, Inc. 2023.
 *
 * Warning: Unauthorized reproduction or distribution of this program, or any portion of it,
 * is prohibited and will be prosecuted to the maximum extent under the law.
 *
 */
html {
    font-size: 16px;
    color: var(--at-dark-navy);
}

h1 {
    font-family: 'Noto Sans Display', sans-serif;
    font-size: 1.5rem;
    font-weight: 400;
    margin: 0;
}

h2 {
    font-family: 'Noto Sans Display', sans-serif;
    font-size: 1.375rem;
    font-weight: 400;
    margin: 0;
}

h3 {
    font-family: 'Noto Sans Display', sans-serif;
    font-size: 1.125rem;
    font-weight: 400;
    margin: 0;
}

h4 {
    font-family: 'Noto Sans Display', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    margin: 0;
}

h5 {
    font-family: 'Noto Sans Display', sans-serif;
    font-size: 0.875rem;
    font-weight: 500;
    margin: 0;
}

body,
:host {
    font-family: 'Noto Sans Display', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
}

.awf-medium {
    font-weight: 500;
}

.awf-semibold {
    font-weight: 600;
}

.awf-bold {
    font-weight: 700;
}

.awf-italic {
    font-style: italic;
}

.awf-underlined {
    text-decoration: underline;
}

.awf-body-small {
    font-size: 0.75rem
}

.awf-body-extra-small {
    font-size: 0.625rem;
    font-weight: 700;
}

`,colors_styles=lit.iv`
/*!
* © Agilent Technologies, Inc. 2022-2023.
*
* Warning: Unauthorized reproduction or distribution of this program, or any portion of it,
* is prohibited and will be prosecuted to the maximum extent under the law.
*
*/

/*
 * This code has been automatically generated from colors defined by https://brand.agilent.com/api/color/library/61,
 * using the command: node ./scripts/generate-agilent-colors.js
 */
:root,
:host {
    --at-black: #000000;
    --at-blue-dark-tint: #1171ad;
    --at-blue-dark: #225d85;
    --at-blue-fog: #e8eef1;
    --at-blue-luminous: #e2eef5;
    --at-blue-medium: #99ceee;
    --at-blue-midtone: #88c4e8;
    --at-blue-pale-luminous: #f1f7fa;
    --at-blue-pale: #e5f3fb;
    --at-blue-shade: #037cc2;
    --at-blue-soft: #cce7f7;
    --at-blue: #0085d5;
    --at-cobalt-dark: #382f76;
    --at-cobalt-light: #bfb8e8;
    --at-cobalt: #5f4ac9;
    --at-dark-gray: #6c747d;
    --at-dark-midnight: #252a30;
    --at-dark-navy: #384350;
    --at-dark-pale: #d4dded;
    --at-dark-shadow: #2e446b;
    --at-dark: #4d72b3;
    --at-gray-3q-dark: #848e99;
    --at-gray-dark: #6c747d;
    --at-gray-extra-pale: #f5f5f5;
    --at-gray-light: #e1e3e5;
    --at-gray-medium-shadow: #252a30;
    --at-gray-medium: #a1a7af;
    --at-gray-pale: #eaebed;
    --at-gray-soft: #e1e3e5;
    --at-gray: #c1c6c8;
    --at-green-dark: #4a8030;
    --at-green-extra-light: #e3f2d6;
    --at-green-light: #c8e7ae;
    --at-green-pale: #dff2cf;
    --at-green-shadow: #487821;
    --at-green: #75c335;
    --at-light-blue-pale: #c2e8ff;
    --at-light-blue-shadow: #005e99;
    --at-light-blue: #009dff;
    --at-magenta-pale: #f2d0e5;
    --at-magenta-shadow: #772256;
    --at-magenta: #c63990;
    --at-navy-extra-light: #fafafa;
    --at-navy-soft: #c1cad2;
    --at-navy-tint: #4c5662;
    --at-olive-shadow: #666614;
    --at-olive: #9eaf20;
    --at-orange-dark: #a15819;
    --at-orange-light: #ffce99;
    --at-orange-pale: #ffe2c2;
    --at-orange-shadow: #994f00;
    --at-orange: #ff8400;
    --at-periwinkle-dark: #36507e;
    --at-periwinkle-extra-light: #d9e5fa;
    --at-periwinkle-light: #b5ccf7;
    --at-periwinkle: #4780ea;
    --at-purple-dark: #533e71;
    --at-purple-light: #d3bdf5;
    --at-purple-pale: #e1cef4;
    --at-purple-shadow: #4e1d7c;
    --at-purple: #925be5;
    --at-red-dark-tint: #bf1f02;
    --at-red-dark: #961802;
    --at-red-extra-light: #fedcd6;
    --at-red-light: #febaaf;
    --at-red-pale: #fecbc3;
    --at-red-shadow: #971602;
    --at-red: #e72503;
    --at-teal-dark: #148082;
    --at-teal-light: #ace4e5;
    --at-teal-pale: #cef2f3;
    --at-teal-shadow: #1f797a;
    --at-teal: #2ec0c2;
    --at-violet-pale: #f5ccff;
    --at-violet-shadow: #832999;
    --at-violet: #cc43ff;
    --at-white: #ffffff;
    --at-yellow-dark: #a57b1b;
    --at-yellow-extra-light: #fff0cb;
    --at-yellow-light: #ffe399;
    --at-yellow-pale: #ffefc2;
    --at-yellow-shadow: #997000;
    --at-yellow: #ffba00;
    --blank: #cdd3ea;
    --calibration-standard: #478ecc;
    --dark-navy: #384350;
    --double-blank: #f57e2b;
    --olive-pale: #eef2b6;
    --qc-check: #79287d;
    --sample: #83c441;
    --spike: #b83685;
    --system-suitability: #a57c2c;
}

`,selection_states_styles=lit.iv`
:root,
:host {
    /* Selection states */
    --awf-state-rest-background: var(--at-white);
    --awf-state-rest-background-transparency: transparent;
    --awf-state-rest-border: var(--at-gray);
    --awf-state-rest-foreground: var(--at-dark-navy);

    --awf-state-hover-background: var(--at-blue-soft);
    --awf-state-hover-border: var(--at-blue-medium);
    --awf-state-hover-color: var(--at-blue-shade);

    --awf-state-selected-background: var(--at-blue-medium);
    --awf-state-selected-border: var(--at-blue-shade);
    --awf-state-selected-foreground: var(--at-dark-navy);

    --awf-state-disabled-background: var(--at-white);
    --awf-state-disabled-border: var(--at-gray);
    --awf-state-disabled-foreground: var(--at-gray);

    --awf-state-focused-border: var(--at-blue-shade);
    --awf-state-focused-foreground: var(--at-blue-shade);
}
`,validation_states_styles=lit.iv`
:root,
:host {
    /* Validation Colors */
    --awf-validation-error-background-color: var(--at-red-extra-light);
    --awf-validation-error-focus-background-color: var(--at-red-light);
    --awf-validation-error-border-color: var(--at-red);
    --awf-validation-error-font-color: var(--at-dark-navy);
    --awf-validation-error-message-font-color: var(--at-red);
    --awf-validation-label-error-font-color: var(--at-red);

    --awf-validation-warning-background-color: var(--at-yellow-extra-light);
    --awf-validation-warning-focus-background-color: var(--at-yellow-light);
    --awf-validation-warning-border-color: var(--at-yellow);
    --awf-validation-warning-font-color: var(--at-yellow);
}

`,PLACEHOLDER_STYLE="\n    input.slotted-input::placeholder {\n        color: var(--awf-input-placeholder-color-inner);\n        font-size: var(--awf-input-font-size-inner);\n        font-style: italic;\n        padding-left: 1px;\n        text-align: left;\n        text-shadow: none;\n    }\n\n    *:not([labelPosition='left']) > input.slotted-input-hidden::placeholder {\n        visibility: hidden;\n    }\n\n    *:not([labelPosition='left']):not(:focus-within) > input.slotted-input.slotted-label::placeholder {\n        visibility: hidden;\n    }\n",NUMBER_SPINNER_STYLE="\n    input[type='number']::-webkit-inner-spin-button,\n    input[type='number']::-webkit-outer-spin-button {\n        -webkit-appearance: none;\n        margin-left: 2px;\n    }\n",COMMON_STYLES=[colors_styles,lit.iv`
    :host {
        --awf-elevation-z1: 1;
        --awf-elevation-z2: 10;
        --awf-elevation-z3: 100;
        --awf-elevation-z4: 1000;
        --awf-elevation-z5: 10000;
        --awf-elevation-z6: 100000;
        --awf-elevation-z7: 1000000;
    }
`,selection_states_styles,validation_states_styles,typography_styles,lit.iv`
        :host {
            --disabled-opacity: 0.4;
            --transition-duration: 0.15s;
            --transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
            --awf-line-height-inner: var(--awf-line-height, 20px);
        }
    `];let AwfAccordionPanel=class AwfAccordionPanel extends lit.oi{constructor(){super(...arguments),this.disabled=!1,this.expanded=!1,this.label=null,this.hasNoContent=!0,this.dispatchCustomEvent=dispatchCustomEvent.bind(this)}toggle(){this.changeState(!this.expanded)}expand(){this.changeState(!0)}collapse(){this.changeState(!1)}render(){const expanded=this.expanded&&!this.disabled,icon=expanded?less_details_column_ascending.e:drop_down_more_details_column_descending.$,iconId=expanded?"collapse":"expand";return lit.dy`
            <button class="header" @click=${this.onButtonClick} ?disabled=${this.disabled||this.hasNoContent}>
                <slot name="prefix"></slot>
                ${this.renderLabel()}
                <slot name="header"></slot>
                <awf-icon id=${iconId} raw=${icon}></awf-icon>
            </button>

            <div ?hidden="${!this.expanded}" class="body">
                <slot name="body" @slotchange=${this.onBodySlotChange}></slot>
            </div>
        `}updated(_changedProperties){this.hasNoContent=0===this.slottedBody.length}changeState(expanded){if(this.disabled||this.hasNoContent)return;this.expanded=expanded;const eventType=this.expanded?AwfEvent.OPEN:AwfEvent.CLOSE;this.dispatchCustomEvent(eventType)}onButtonClick(event){this.isExpansionClick(event)&&this.changeState(!this.expanded)}isExpansionClick({target}){return target===this.header||Array.from(this.header.children).includes(target)}renderLabel(){return this.label?lit.dy`<span class="label">${this.label}</span>`:lit.dy``}onBodySlotChange(){this.hasNoContent=0===this.slottedBody.length}};AwfAccordionPanel.styles=[COMMON_STYLES,ACCORDION_PANEL_CSS_VARIABLES,ACCORDION_PANEL_STYLES],(0,tslib_es6.gn)([(0,decorators.Cb)({type:Boolean,reflect:!0})],AwfAccordionPanel.prototype,"disabled",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)({type:Boolean,reflect:!0})],AwfAccordionPanel.prototype,"expanded",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)()],AwfAccordionPanel.prototype,"label",void 0),(0,tslib_es6.gn)([(0,decorators.IO)(".header")],AwfAccordionPanel.prototype,"header",void 0),(0,tslib_es6.gn)([(0,decorators.NH)({slot:"body",flatten:!0})],AwfAccordionPanel.prototype,"slottedBody",void 0),(0,tslib_es6.gn)([(0,decorators.SB)()],AwfAccordionPanel.prototype,"hasNoContent",void 0),AwfAccordionPanel=(0,tslib_es6.gn)([(0,awf_custom_element.M)("awf-accordion-panel",!0)],AwfAccordionPanel);class ElementStyleController{constructor(host,cssStyles){this.host=host,this.cssStyles=cssStyles,this.host.addController(this)}hostConnected(){this.cssStyles.map((cssStyle=>{const style=document.createElement("style");return style.innerText=cssStyle,style})).forEach((style=>this.host.appendChild(style)))}}const BREADCRUMBS_STYLES=lit.iv`
    :host,
    ::slotted(a) {
        position: relative;
        display: flex;
        align-items: center;
    }

    ::slotted(a:last-of-type) {
        pointer-events: none;
    }

    ::slotted(a:not(:last-of-type)) {
        cursor: pointer;
    }

    ::slotted(a:last-of-type:not(:only-of-type)) {
        font-family: 'Noto Sans Display Semibold', sans-serif;
    }

    ::slotted(a:not(:last-of-type):hover) {
        --awf-icon-color: var(--at-blue-shade);
        color: var(--at-blue-shade);
        text-decoration: underline;
    }
`;let AwfBreadcrumbs=class AwfBreadcrumbs extends lit.oi{constructor(){super(),new ElementStyleController(this,["\n            a awf-icon {\n                width: 16px;\n                height: 16px;\n                padding-right: 4px;\n            }\n            a:not(:last-of-type)::after {\n                content: '';\n                display: block;\n                position: relative;\n                width: 16px;\n                height: 16px;\n                padding: 0 4px;\n                background-image: url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='none' stroke='%23384350' stroke-miterlimit='10' d='M10 6l6 6-6 6' style='stroke: %23384350;'/%3E%3C/svg%3E%0A\");\n                background-repeat: no-repeat, repeat;\n                background-position: center;\n                background-size: 16px 16px;\n                pointer-events: none;\n            }\n        "])}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.stopEventPropagation)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.stopEventPropagation)}render(){return lit.dy`<slot></slot>`}stopEventPropagation(event){const{target}=event;target instanceof HTMLAnchorElement||event.stopPropagation()}};AwfBreadcrumbs.styles=[COMMON_STYLES,BREADCRUMBS_STYLES],AwfBreadcrumbs=(0,tslib_es6.gn)([(0,awf_custom_element.M)("awf-breadcrumbs",!0)],AwfBreadcrumbs);var lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js");const l=l=>null!=l?l:lit_html.Ld;const eventsService=new class EventsService{manageFocus(element){element.addEventListener("click",(event=>{element.disabled?event.stopImmediatePropagation():element.classList.contains("activated")||element.blur()})),element.addEventListener("keydown",(event=>{element.disabled||"Enter"!==event.key&&"Space"!==event.code||(event.preventDefault(),element.classList.add("activated"),element.click())})),element.addEventListener("keyup",(event=>{element.disabled||"Enter"!==event.key&&"Space"!==event.code||element.classList.remove("activated")}))}},BUTTON_CSS_VARIABLES=[lit.iv`
    :host {
        --awf-button-primary-rest-background-inner: var(--awf-button-primary-rest-background, var(--at-blue-pale));
        --awf-button-primary-rest-border-inner: var(--awf-button-primary-rest-border, solid 1px var(--at-blue-shade));
        --awf-button-primary-rest-font-color-inner: var(--awf-button-primary-rest-font-color, var(--at-dark-navy));

        --awf-button-primary-hover-background-inner: var(--awf-button-primary-hover-background, var(--at-blue-soft));
        --awf-button-primary-hover-border-inner: var(--awf-button-primary-hover-border, solid 1px var(--at-blue-shade));
        --awf-button-primary-hover-font-color-inner: var(--awf-button-primary-hover-font-color, var(--at-dark-navy));

        --awf-button-primary-active-background-inner: var(--awf-button-primary-active-background, var(--at-blue-shade));
        --awf-button-primary-active-border-inner: var(--awf-button-primary-active-border, solid 1px var(--at-dark-navy));
        --awf-button-primary-active-font-color-inner: var(--awf-button-primary-active-font-color, var(--at-white));

        --awf-button-primary-disabled-background-inner: var(--awf-button-primary-disabled-background, var(--at-white));
        --awf-button-primary-disabled-border-inner: var(--awf-button-primary-disabled-border, solid 1px var(--at-gray-soft));
        --awf-button-primary-disabled-font-color-inner: var(--awf-button-primary-disabled-font-color, var(--at-gray));
    }
`,lit.iv`
    :host {
        --awf-button-secondary-rest-background-inner: var(--awf-button-secondary-rest-background, var(--at-navy-extra-light));
        --awf-button-secondary-rest-border-inner: var(--awf-button-secondary-rest-border, solid 1px var(--at-gray-soft));
        --awf-button-secondary-rest-font-color-inner: var(--awf-button-secondary-rest-font-color, var(--at-dark-navy));

        --awf-button-secondary-hover-background-inner: var(--awf-button-secondary-hover-background, var(--at-gray-extra-pale));
        --awf-button-secondary-hover-border-inner: var(--awf-button-secondary-hover-border, solid 1px var(--at-gray-soft));
        --awf-button-secondary-hover-font-color-inner: var(--awf-button-secondary-hover-font-color, var(--at-dark-navy));

        --awf-button-secondary-active-background-inner: var(--awf-button-secondary-active-background, var(--at-gray-soft));
        --awf-button-secondary-active-border-inner: var(--awf-button-secondary-active-border, solid 1px var(--at-gray-soft));
        --awf-button-secondary-active-font-color-inner: var(--awf-button-secondary-active-font-color, var(--at-dark-navy));

        --awf-button-secondary-disabled-background-inner: var(--awf-button-secondary-disabled-background, var(--at-white));
        --awf-button-secondary-disabled-border-inner: var(--awf-button-secondary-disabled-border, solid 1px var(--at-gray-soft));
        --awf-button-secondary-disabled-font-color-inner: var(--awf-button-secondary-disabled-font-color, var(--at-gray));
    }
`,lit.iv`
    :host {
        --awf-button-special-rest-background-inner: var(--awf-button-special-rest-background, var(--at-green-pale));
        --awf-button-special-rest-border-inner: var(--awf-button-special-rest-border, solid 1px var(--at-green));
        --awf-button-special-rest-font-color-inner: var(--awf-button-special-rest-font-color, var(--at-dark-navy));

        --awf-button-special-hover-background-inner: var(--awf-button-special-hover-background, var(--at-green-light));
        --awf-button-special-hover-border-inner: var(--awf-button-special-hover-border, solid 1px var(--at-green));
        --awf-button-special-hover-font-color-inner: var(--awf-button-special-hover-font-color, var(--at-dark-navy));

        --awf-button-special-active-background-inner: var(--awf-button-special-active-background, var(--at-green));
        --awf-button-special-active-border-inner: var(--awf-button-special-active-border, solid 1px var(--at-green));
        --awf-button-special-active-font-color-inner: var(--awf-button-special-active-font-color, var(--at-dark-navy));

        --awf-button-special-disabled-background-inner: var(--awf-button-special-disabled-background, var(--at-white));
        --awf-button-special-disabled-border-inner: var(--awf-button-special-disabled-border, solid 1px var(--at-gray-soft));
        --awf-button-special-disabled-font-color-inner: var(--awf-button-special-disabled-font-color, var(--at-gray));
    }
`,lit.iv`
    :host {
        --awf-button-critical-rest-background-inner: var(--awf-button-critical-rest-background, var(--at-red));
        --awf-button-critical-rest-border-inner: var(--awf-button-critical-rest-border, solid 1px var(--at-red));
        --awf-button-critical-rest-font-color-inner: var(--awf-button-critical-rest-font-color, var(--at-white));

        --awf-button-critical-hover-background-inner: var(--awf-button-critical-hover-background, var(--at-red-dark-tint));
        --awf-button-critical-hover-border-inner: var(--awf-button-critical-hover-border, solid 1px var(--at-red-dark-tint));
        --awf-button-critical-hover-font-color-inner: var(--awf-button-critical-hover-font-color, var(--at-white));

        --awf-button-critical-active-background-inner: var(--awf-button-critical-active-background, var(--at-red-dark));
        --awf-button-critical-active-border-inner: var(--awf-button-critical-active-border, solid 1px var(--at-red-dark));
        --awf-button-critical-active-font-color-inner: var(--awf-button-critical-active-font-color, var(--at-white));

        --awf-button-critical-disabled-background-inner: var(--awf-button-critical-disabled-background, var(--at-white));
        --awf-button-critical-disabled-border-inner: var(--awf-button-critical-disabled-border, solid 1px var(--at-gray-soft));
        --awf-button-critical-disabled-font-color-inner: var(--awf-button-critical-disabled-font-color, var(--at-gray));
    }
`,lit.iv`
    :host {
        --awf-button-dark-primary-rest-background-inner: var(--awf-button-dark-primary-rest-background, var(--at-dark-navy));
        --awf-button-dark-primary-rest-border-inner: var(--awf-button-dark-primary-rest-border, solid 1px var(--at-dark-navy));
        --awf-button-dark-primary-rest-font-color-inner: var(--awf-button-dark-primary-rest-font-color, var(--at-white));

        --awf-button-dark-primary-hover-background-inner: var(--awf-button-dark-primary-hover-background, var(--at-blue-dark));
        --awf-button-dark-primary-hover-border-inner: var(--awf-button-dark-primary-hover-border, solid 1px var(--at-dark-navy));
        --awf-button-dark-primary-hover-font-color-inner: var(--awf-button-dark-primary-hover-font-color, var(--at-white));

        --awf-button-dark-primary-active-background-inner: var(--awf-button-dark-primary-active-background, var(--at-blue-shade));
        --awf-button-dark-primary-active-border-inner: var(--awf-button-dark-primary-active-border, solid 1px var(--at-dark-navy));
        --awf-button-dark-primary-active-font-color-inner: var(--awf-button-dark-primary-active-font-color, var(--at-white));

        --awf-button-dark-primary-disabled-background-inner: var(--awf-button-dark-primary-disabled-background, var(--at-blue-pale-luminous));
        --awf-button-dark-primary-disabled-border-inner: var(--awf-button-dark-primary-disabled-border, solid 1px var(--at-blue-pale-luminous));
        --awf-button-dark-primary-disabled-font-color-inner: var(--awf-button-dark-primary-disabled-font-color, var(--at-gray));
    }
`,lit.iv`
    :host{
        --awf-button-dark-secondary-rest-background-inner: var(--awf-button-dark-secondary-rest-background, var(--at-blue-pale));
        --awf-button-dark-secondary-rest-border-inner: var(--awf-button-dark-secondary-rest-border, solid 1px var(--at-blue-shade));
        --awf-button-dark-secondary-rest-font-color-inner: var(--awf-button-dark-secondary-rest-font-color, var(--at-dark-navy));

        --awf-button-dark-secondary-hover-background-inner: var(--awf-button-dark-secondary-hover-background, var(--at-blue-soft));
        --awf-button-dark-secondary-hover-border-inner: var(--awf-button-dark-secondary-hover-border, solid 1px var(--at-blue-shade));
        --awf-button-dark-secondary-hover-font-color-inner: var(--awf-button-dark-secondary-hover-font-color, var(--at-dark-navy));

        --awf-button-dark-secondary-active-background-inner: var(--awf-button-dark-secondary-active-background, var(--at-blue-shade));
        --awf-button-dark-secondary-active-border-inner: var(--awf-button-dark-secondary-active-border, solid 1px var(--at-dark-navy));
        --awf-button-dark-secondary-active-font-color-inner: var(--awf-button-dark-secondary-active-font-color, var(--at-white));

        --awf-button-dark-secondary-disabled-background-inner: var(--awf-button-dark-secondary-disabled-background, var(--at-blue-pale-luminous));
        --awf-button-dark-secondary-disabled-border-inner: var(--awf-button-dark-secondary-disabled-border, solid 1px var(--at-blue-pale-luminous));
        --awf-button-dark-secondary-disabled-font-color-inner: var(--awf-button-dark-secondary-disabled-font-color, var(--at-gray));
    }
`,lit.iv`
    :host {
        --awf-button-dark-special-rest-background-inner: var(--awf-button-dark-special-rest-background, var(--at-green-pale));
        --awf-button-dark-special-rest-border-inner: var(--awf-button-dark-special-rest-border, solid 1px var(--at-green));
        --awf-button-dark-special-rest-font-color-inner: var(--awf-button-dark-special-rest-font-color, var(--at-dark-navy));

        --awf-button-dark-special-hover-background-inner: var(--awf-button-dark-special-hover-background, var(--at-green-light));
        --awf-button-dark-special-hover-border-inner: var(--awf-button-dark-special-hover-border, solid 1px var(--at-green));
        --awf-button-dark-special-hover-font-color-inner: var(--awf-button-dark-special-hover-font-color, var(--at-dark-navy));

        --awf-button-dark-special-active-background-inner: var(--awf-button-dark-special-active-background, var(--at-green));
        --awf-button-dark-special-active-border-inner: var(--awf-button-dark-special-active-border, solid 1px var(--at-green));
        --awf-button-dark-special-active-font-color-inner: var(--awf-button-dark-special-active-font-color, var(--at-dark-navy));

        --awf-button-dark-special-disabled-background-inner: var(--awf-button-dark-special-disabled-background, var(--at-white));
        --awf-button-dark-special-disabled-border-inner: var(--awf-button-dark-special-disabled-border, solid 1px var(--at-gray-soft));
        --awf-button-dark-special-disabled-font-color-inner: var(--awf-button-dark-special-disabled-font-color, var(--at-gray));
    }
`,lit.iv`
        :host {
            --awf-button-content-alignment-inner: var(--awf-button-content-alignment, center);
            --awf-button-font-size-inner: var(--awf-button-font-size, 0.875rem);
            --awf-button-height-inner: var(--awf-button-height, 32px);
            --awf-button-icon-margin-inner: var(--awf-button-icon-margin, 4px);
            --awf-button-icon-size-inner: var(--awf-button-icon-size, 24px);
            --awf-button-label-display-inner: var(--awf-button-label-display, inline);
            --awf-button-label-margin-inner: var(--awf-button-label-margin, 0);
            --awf-button-padding-left-inner: var(--awf-button-padding-left, 12px);
            --awf-button-padding-right-inner: var(--awf-button-padding-right, 12px);
            --awf-button-width-inner: var(--awf-button-width, unset);

            /* Rest */
            --awf-button-border-inner: var(--awf-button-border, var(--awf-button-primary-rest-border-inner));
            --awf-button-background-inner: var(--awf-button-background, var(--awf-button-primary-rest-background-inner));
            --awf-button-font-color-inner: var(--awf-button-font-color, var(--awf-button-primary-rest-font-color-inner));

            /* Hover */
            --awf-button-hover-background-inner: var(--awf-button-hover-background, var(--awf-button-primary-hover-background-inner));
            --awf-button-hover-border-inner: var(--awf-button-hover-border, var(--awf-button-primary-hover-border-inner));
            --awf-button-hover-font-color-inner: var(--awf-button-hover-font-color, var(--awf-button-primary-hover-font-color-inner));
            
            /* Active */
            --awf-button-active-background-inner: var(--awf-button-active-background, var(--awf-button-primary-active-background-inner));
            --awf-button-active-border-inner: var(--awf-button-active-border, var(--awf-button-primary-active-border-inner));
            --awf-button-active-font-color-inner: var(--awf-button-active-font-color, var(--awf-button-primary-active-font-color-inner));

            /* Disabled */
            --awf-button-disabled-background-inner: var(--awf-button-disabled-background, var(--awf-button-primary-disabled-background-inner));
            --awf-button-disabled-border-inner: var(--awf-button-disabled-border, var(--awf-button-primary-disabled-border-inner));
            --awf-button-disabled-font-color-inner: var(--awf-button-disabled-font-color, var(--awf-button-primary-disabled-font-color-inner));

            /* Icon buttons */
            --awf-button-icon-only-background-inner: var(--awf-button-icon-only-background, var(--awf-state-rest-background-transparency));
            --awf-button-icon-only-hover-background-inner: var(--awf-button-icon-only-hover-background, var(--awf-state-hover-background));
            --awf-button-icon-only-active-background-inner: var(--awf-button-icon-only-active-background, var(--awf-state-selected-background));
            --awf-button-icon-only-active-foreground-inner: var(--awf-button-icon-only-active-foreground, var(--at-dark-navy));
        }
    `],BUTTON_STYLES=lit.iv`
    :host {
        display: inline-block;
        height: var(--awf-button-height-inner);
        width: var(--awf-button-width-inner);
        --awf-icon-color: var(--awf-button-font-color-inner);
        --awf-icon-size: var(--awf-button-icon-size-inner);
    }

    button {
        align-items: center;
        background-color: var(--awf-button-background-inner);
        border: var(--awf-button-border-inner);
        color: var(--awf-button-font-color-inner);
        display: inline-flex;
        font-family: inherit; /*Required to override User Agent settings*/
        font-size: var(--awf-button-font-size-inner);
        height: 100%;
        justify-content: var(--awf-button-content-alignment-inner);
        padding-left: var(--awf-button-padding-left-inner);
        padding-right: var(--awf-button-padding-right-inner);
        transition: var(--transition-duration) var(--transition-timing-function);
        transition-property: color, background-color, border-color;
        width: 100%;
        --awf-icon-color: var(--awf-button-font-color-inner);
    }

    #label {
        display: var(--awf-button-label-display-inner);
        margin: var(--awf-button-label-margin-inner);
    }

    ::slotted(awf-icon),
    ::slotted(ag-icon),
    ::slotted(awf-icon-ng),
    ::slotted(ag-icon-wc),
    ::slotted(awf-notification-bubble) {
        margin: var(--awf-button-icon-margin-inner);
    }

    slot:not([name]) {
        display: none;
    }

    button:focus {
        outline: var(--at-blue-shade) solid 1px;
        outline-offset: 1px;
    }

    @media (hover: hover) {
        button:hover {
            background: var(--awf-button-hover-background-inner);
            border: var(--awf-button-hover-border-inner);
            color: var(--awf-button-hover-font-color-inner);
            cursor: pointer;
            --awf-icon-color: var(--awf-button-hover-font-color-inner);
            --awf-notification-bubble-stroke-color: var(--awf-button-hover-background-inner);
        }

        :host(:not([disabled]):hover) button.awf-icon-button {
            background-color: var(--awf-button-icon-only-hover-background-inner);
        }
    }

    :host(.activated) button,
    button:active {
        background: var(--awf-button-active-background-inner);
        border: var(--awf-button-active-border-inner);
        color: var(--awf-button-active-font-color-inner);
        --awf-icon-color: var(--awf-button-active-font-color-inner);
    }

    button:active {
        outline: none;
    }

    :host([disabled]) button,
    :host([disabled]) button:hover {
        background: var(--awf-button-disabled-background-inner);
        border: var(--awf-button-disabled-border-inner);
        color: var(--awf-button-disabled-font-color-inner);
        cursor: not-allowed;
        --awf-icon-color: var(--awf-button-disabled-font-color-inner);
    }

    /* Primary dark */
    :host([dark]) {
        --awf-button-background-inner: var(--awf-button-background, var(--awf-button-dark-primary-rest-background-inner));
        --awf-button-border-inner: var(--awf-button-border, var(--awf-button-dark-primary-rest-border-inner));
        --awf-button-font-color-inner: var(--awf-button-font-color, var(--awf-button-dark-primary-rest-font-color-inner));
        --awf-button-hover-background-inner: var(--awf-button-hover-background, var(--awf-button-dark-primary-hover-background-inner));
        --awf-button-hover-border-inner: var(--awf-button-hover-border, var(--awf-button-dark-primary-hover-border-inner));
        --awf-button-hover-font-color-inner: var(--awf-button-hover-font-color, var(--awf-button-dark-primary-hover-font-color-inner));
        --awf-button-active-background-inner: var(--awf-button-active-background, var(--awf-button-dark-primary-active-background-inner));
        --awf-button-active-border-inner: var(--awf-button-active-border, var(--awf-button-dark-primary-active-border-inner));
        --awf-button-active-font-color-inner: var(--awf-button-active-font-color, var(--awf-button-dark-primary-active-font-color-inner));
        --awf-button-disabled-background-inner: var(--awf-button-disabled-background, var(--awf-button-dark-primary-disabled-background-inner));
        --awf-button-disabled-border-inner: var(--awf-button-disabled-border, var(--awf-button-dark-primary-disabled-border-inner));
        --awf-button-disabled-font-color-inner: var(--awf-button-disabled-font-color, var(--awf-button-dark-primary-disabled-font-color-inner));
    }

    /* Secondary */
    :host([type='secondary']) {
        --awf-button-border-inner: var(--awf-button-border, var(--awf-button-secondary-rest-border-inner));
        --awf-button-background-inner: var(--awf-button-background, var(--awf-button-secondary-rest-background-inner));
        --awf-button-font-color-inner: var(--awf-button-font-color, var(--awf-button-secondary-rest-font-color-inner));
        --awf-button-hover-border-inner: var(--awf-button-hover-border, var(--awf-button-secondary-hover-border-inner));
        --awf-button-hover-background-inner: var(--awf-button-hover-background, var(--awf-button-secondary-hover-background-inner));
        --awf-button-hover-font-color-inner: var(--awf-button-hover-font-color, var(--awf-button-secondary-hover-font-color-inner));
        --awf-button-active-background-inner: var(--awf-button-active-background, var(--awf-button-secondary-active-background-inner));
        --awf-button-active-border-inner: var(--awf-button-active-border, var(--awf-button-secondary-active-border-inner));
        --awf-button-active-font-color-inner: var(--awf-button-active-font-color, var(--awf-button-secondary-active-font-color-inner));
        --awf-button-disabled-background-inner: var(--awf-button-disabled-background, var(--awf-button-secondary-disabled-background-inner));
        --awf-button-disabled-border-inner: var(--awf-button-disabled-border, var(--awf-button-secondary-disabled-border-inner));
        --awf-button-disabled-font-color-inner: var(--awf-button-disabled-font-color, var(--awf-button-secondary-disabled-font-color-inner));
    }

    /* Secondary dark */
    :host([type='secondary'][dark]) {
        --awf-button-border-inner: var(--awf-button-border, var(--awf-button-dark-secondary-rest-border-inner));
        --awf-button-background-inner: var(--awf-button-background, var(--awf-button-dark-secondary-rest-background-inner));
        --awf-button-font-color-inner: var(--awf-button-font-color, var(--awf-button-dark-secondary-rest-font-color-inner));
        --awf-button-hover-border-inner: var(--awf-button-hover-border, var(--awf-button-dark-secondary-hover-border-inner));
        --awf-button-hover-background-inner: var(--awf-button-hover-background, var(--awf-button-dark-secondary-hover-background-inner));
        --awf-button-hover-font-color-inner: var(--awf-button-hover-font-color, var(--awf-button-dark-secondary-hover-font-color-inner));
        --awf-button-active-background-inner: var(--awf-button-active-background, var(--awf-button-dark-secondary-active-background-inner));
        --awf-button-active-border-inner: var(--awf-button-active-border, var(--awf-button-dark-secondary-active-border-inner));
        --awf-button-active-font-color-inner: var(--awf-button-active-font-color, var(--awf-button-dark-secondary-active-font-color-inner));
        --awf-button-disabled-background-inner: var(--awf-button-disabled-background, var(--awf-button-dark-secondary-disabled-background-inner));
        --awf-button-disabled-border-inner: var(--awf-button-disabled-border, var(--awf-button-dark-secondary-disabled-border-inner));
        --awf-button-disabled-font-color-inner: var(--awf-button-disabled-font-color, var(--awf-button-dark-secondary-disabled-font-color-inner));
    }

    /* Special */
    :host([type='special']) {
        --awf-button-border-inner: var(--awf-button-border, var(--awf-button-special-rest-border-inner));
        --awf-button-background-inner: var(--awf-button-background, var(--awf-button-special-rest-background-inner));
        --awf-button-font-color-inner: var(--awf-button-font-color, var(--awf-button-special-rest-font-color-inner));
        --awf-button-hover-border-inner: var(--awf-button-hover-border, var(--awf-button-special-hover-border-inner));
        --awf-button-hover-background-inner: var(--awf-button-hover-background, var(--awf-button-special-hover-background-inner));
        --awf-button-hover-font-color-inner: var(--awf-button-hover-font-color, var(--awf-button-special-hover-font-color-inner));
        --awf-button-active-background-inner: var(--awf-button-active-background, var(--awf-button-special-active-background-inner));
        --awf-button-active-border-inner: var(--awf-button-active-border, var(--awf-button-special-active-border-inner));
        --awf-button-active-font-color-inner: var(--awf-button-active-font-color, var(--awf-button-special-active-font-color-inner));
        --awf-button-disabled-background-inner: var(--awf-button-disabled-background, var(--awf-button-special-disabled-background-inner));
        --awf-button-disabled-border-inner: var(--awf-button-disabled-border, var(--awf-button-special-disabled-border-inner));
        --awf-button-disabled-font-color-inner: var(--awf-button-disabled-font-color, var(--awf-button-special-disabled-font-color-inner));
    }

    :host([type='critical']) {
        --awf-button-border-inner: var(--awf-button-border, var(--awf-button-critical-rest-border-inner));
        --awf-button-background-inner: var(--awf-button-background, var(--awf-button-critical-rest-background-inner));
        --awf-button-font-color-inner: var(--awf-button-font-color, var(--awf-button-critical-rest-font-color-inner));
        --awf-button-hover-border-inner: var(--awf-button-hover-border, var(--awf-button-critical-hover-border-inner));
        --awf-button-hover-background-inner: var(--awf-button-hover-background, var(--awf-button-critical-hover-background-inner));
        --awf-button-hover-font-color-inner: var(--awf-button-hover-font-color, var(--awf-button-critical-hover-font-color-inner));
        --awf-button-active-background-inner: var(--awf-button-active-background, var(--awf-button-critical-active-background-inner));
        --awf-button-active-border-inner: var(--awf-button-active-border, var(--awf-button-critical-active-border-inner));
        --awf-button-active-font-color-inner: var(--awf-button-active-font-color, var(--awf-button-critical-active-font-color-inner));
        --awf-button-disabled-background-inner: var(--awf-button-disabled-background, var(--awf-button-critical-disabled-background-inner));
        --awf-button-disabled-border-inner: var(--awf-button-disabled-border, var(--awf-button-critical-disabled-border-inner));
        --awf-button-disabled-font-color-inner: var(--awf-button-disabled-font-color, var(--awf-button-critical-disabled-font-color-inner));
    }

    /* Special dark */
    :host([type='special'][dark]) {
        --awf-button-border-inner: var(--awf-button-border, var(--awf-button-dark-special-rest-border-inner));
        --awf-button-background-inner: var(--awf-button-background, var(--awf-button-dark-special-rest-background-inner));
        --awf-button-font-color-inner: var(--awf-button-font-color, var(--awf-button-dark-special-rest-font-color-inner));
        --awf-button-hover-border-inner: var(--awf-button-hover-border, var(--awf-button-dark-special-hover-border-inner));
        --awf-button-hover-background-inner: var(--awf-button-hover-background, var(--awf-button-dark-special-hover-background-inner));
        --awf-button-hover-font-color-inner: var(--awf-button-hover-font-color, var(--awf-button-dark-special-hover-font-color-inner));
        --awf-button-active-background-inner: var(--awf-button-active-background, var(--awf-button-dark-special-active-background-inner));
        --awf-button-active-border-inner: var(--awf-button-active-border, var(--awf-button-dark-special-active-border-inner));
        --awf-button-active-font-color-inner: var(--awf-button-active-font-color, var(--awf-button-dark-special-active-font-color-inner));
        --awf-button-disabled-background-inner: var(--awf-button-disabled-background, var(--awf-button-dark-special-disabled-background-inner));
        --awf-button-disabled-border-inner: var(--awf-button-disabled-border, var(--awf-button-dark-special-disabled-border-inner));
        --awf-button-disabled-font-color-inner: var(--awf-button-disabled-font-color, var(--awf-button-dark-special-disabled-font-color-inner));
    }

    /* Icon buttons */
    button.awf-icon-button {
        align-items: center;
        border-radius: inherit;
        display: inline-flex;
        justify-content: center;
        outline: none;
        width: var(--awf-button-width-inner, var(--awf-button-height-inner));
        padding: 0;
        border: 1px solid transparent;
        background-color: var(--awf-button-icon-only-background-inner);
        --awf-button-icon-margin-inner: 0;
        --awf-button-active-font-color-inner: var(--awf-button-icon-only-active-foreground-inner);
    }

    :host(.activated) button.awf-icon-button,
    :host(:not([disabled]):active) button.awf-icon-button {
        background-color: var(--awf-button-icon-only-active-background-inner);
        border-color: transparent;
        --awf-notification-bubble-stroke-color: var(--awf-button-icon-only-active-background-inner);
    }

    :host(:not([disabled]):not(:active):focus) button.awf-icon-button,
    :host(:not([disabled]):not(:active):focus-visible) button.awf-icon-button {
        border-color: var(--awf-state-focused-border);
    }

    :host([disabled]) button.awf-icon-button {
        --awf-icon-color: var(--awf-state-disabled-foreground);
        background-color: var(--awf-button-icon-only-background-inner);
        border-color: transparent;
    }
`;var ButtonType;!function(ButtonType){ButtonType.Primary="primary",ButtonType.Secondary="secondary",ButtonType.Special="special",ButtonType.Critical="critical"}(ButtonType||(ButtonType={}));let AwfButton=class AwfButton extends lit.oi{constructor(){super(),this.type=ButtonType.Primary,this.label=null,this.dark=!1,this.disabled=!1,eventsService.manageFocus(this)}requestFocus(){this.buttonElement.focus()}render(){const ariaLabel=this.getAttribute("aria-label")||void 0,commonTemplate=lit.dy`
            <button ?disabled=${this.disabled} aria-label=${l(ariaLabel)}>
                <slot name="icon" @slotchange=${this.handleIconSlotChange}></slot>
            </button>
            <slot @slotchange=${this.handleSlotChange}></slot>
        `;return lit.dy` ${commonTemplate} `}updated(_changedProperties){_changedProperties.has("label")&&this.replaceLabel(this.label??"")}handleSlotChange(){if(this.shadowRoot){const defaultSlot=this.shadowRoot.querySelector("slot:not([name])");defaultSlot&&moveElementsIntoSlot(defaultSlot,"awf-icon","icon")}const text=this.label??this.slottedContent.map((n=>n?.textContent)).join("").trim();text&&this.replaceLabel(text)}handleIconSlotChange(){const[icon]=this.slottedIcon;if(icon){const label=this.shadowRoot?.getElementById("label");label?.textContent?(this.style.setProperty("--awf-button-padding-left","0px"),this.buttonElement.classList.remove("awf-icon-button")):this.buttonElement.classList.add("awf-icon-button")}else this.buttonElement.classList.remove("awf-icon-button")}replaceLabel(text){const label=this.shadowRoot?.getElementById("label");if(label&&this.buttonElement.removeChild(label),text){const labelElement=this.createLabel(text);this.buttonElement.appendChild(labelElement)}this.handleIconSlotChange()}createLabel(text){const labelElement=document.createElement("span");return labelElement.id="label",labelElement.innerText=text,labelElement}};AwfButton.styles=[COMMON_STYLES,BUTTON_CSS_VARIABLES,BUTTON_STYLES],(0,tslib_es6.gn)([(0,decorators.Cb)({reflect:!0})],AwfButton.prototype,"type",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)({reflect:!0})],AwfButton.prototype,"label",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)({type:Boolean,reflect:!0})],AwfButton.prototype,"dark",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)({type:Boolean,reflect:!0})],AwfButton.prototype,"disabled",void 0),(0,tslib_es6.gn)([(0,decorators.vZ)({flatten:!0})],AwfButton.prototype,"slottedContent",void 0),(0,tslib_es6.gn)([(0,decorators.NH)({slot:"icon"})],AwfButton.prototype,"slottedIcon",void 0),(0,tslib_es6.gn)([(0,decorators.IO)("button")],AwfButton.prototype,"buttonElement",void 0),AwfButton=(0,tslib_es6.gn)([(0,awf_custom_element.M)("awf-button",!0)],AwfButton);let AwfCarouselPage=class AwfCarouselPage extends lit.oi{render(){return lit.dy`<slot></slot>`}};AwfCarouselPage.styles=[COMMON_STYLES,lit.iv`
        :host {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    `],AwfCarouselPage=(0,tslib_es6.gn)([(0,awf_custom_element.M)("awf-carousel-page",!0)],AwfCarouselPage);var delete_cross=__webpack_require__("./node_modules/@agilent/web-icons/core/delete-cross.js");const CHIP_ACTIVE=lit.iv`
    :host {
        --awf-chip-active-background-inner: var(--awf-chip-active-background, var(--at-blue-shade));
        --awf-chip-active-border-inner: var(--awf-chip-active-border, 1px solid var(--at-blue-shade));
        --awf-chip-active-font-color-inner: var(--awf-chip-active-font-color, var(--at-white));

        --awf-chip-active-disabled-background-inner: var(--awf-chip-active-disabled-background, var(--at-blue-soft));
        --awf-chip-active-disabled-border-inner: var(--awf-chip-active-disabled-border, 1px solid var(--at-blue-soft));
        --awf-chip-active-disabled-font-color-inner: var(--awf-chip-active-disabled-font-color, var(--at-gray-medium));

        --awf-chip-active-light-background-inner: var(--awf-chip-active-light-background, var(--at-blue-medium));
        --awf-chip-active-light-border-inner: var(--awf-chip-active-light-border, 1px solid var(--at-blue-medium));
        --awf-chip-active-light-font-color-inner: var(--awf-chip-active-light-font-color, var(--at-dark-navy));
    }
`,CHIP_CSS_VARIABLES=[lit.iv`
    :host {
        --awf-chip-rest-background-inner: var(--awf-chip-rest-background, none);
        --awf-chip-rest-border-inner: var(--awf-chip-rest-border, 1px solid var(--at-gray));
        --awf-chip-rest-font-color-inner: var(--awf-chip-rest-font-color, var(--at-dark-navy));

        --awf-chip-rest-disabled-background-inner: var(--awf-chip-rest-disabled-background, none);
        --awf-chip-rest-disabled-border-inner: var(--awf-chip-rest-disabled-border, 1px solid var(--at-gray));
        --awf-chip-rest-disabled-font-color-inner: var(--awf-chip-rest-disabled-font-color, var(--at-gray-medium));

        --awf-chip-rest-light-hover-background-inner: var(--awf-chip-rest-light-background, var(--at-blue-soft));
        --awf-chip-rest-light-hover-border-inner: var(--awf-chip-rest-light-border, 1px solid var(--at-blue-soft));
        --awf-chip-rest-light-hover-font-color-inner: var(--awf-chip-rest-light-font-color, var(--at-dark-navy));

        --awf-chip-rest-hover-background-inner: var(--awf-chip-rest-hover-background, var(--at-blue-medium));
        --awf-chip-rest-hover-border-inner: var(--awf-chip-rest-hover-border, 1px solid var(--at-blue-medium));
        --awf-chip-rest-hover-font-color-inner: var(--awf-chip-rest-hover-font-color, var(--at-dark-navy));
    }
`,CHIP_ACTIVE,lit.iv`
        :host {
            --awf-chip-height-inner: var(--awf-chip-height, 32px);
            --awf-chip-padding-left-right-inner: var(--awf-chip-padding-left-right, 16px);
            --awf-chip-padding-top-bottom-inner: var(--awf-chip-padding-top-bottom, 3px);
            --awf-chip-wrapper-padding-inner: var(--awf-chip-wrapper-padding, 3px);
            
            /* Remove button */
            --awf-chip-remove-button-hover-background-inner: var(--awf-chip-remove-button-hover-background, var(--at-blue-medium));
            --awf-chip-remove-button-size-inner: var(--awf-chip-remove-button-size, 16px);
            --awf-chip-remove-button-wrapper-margin-inner: var(--awf-chip-remove-button-wrapper-margin, 5px);
            --awf-chip-remove-button-wrapper-size-inner: var(--awf-chip-remove-button-wrapper-size, 24px);
        }
    `],CHIP_TRANSITIONS=lit.iv`
    transition: var(--transition-duration) var(--transition-timing-function);
    transition-property: color, background-color, border-color, opacity, box-shadow;
`,CHIP_STYLES=lit.iv`
    .chip-wrapper {
        display: flex;
        border-radius: 16px;
        width: fit-content;
        align-items: center;
        justify-content: center;
        padding: var(--awf-chip-padding-top-bottom-inner) var(--awf-chip-padding-left-right-inner);
        height: var(--awf-chip-height-inner);

        background-color: var(--awf-chip-rest-background-inner);
        border: var(--awf-chip-rest-border-inner);
        color: var(--awf-chip-rest-font-color-inner);
        cursor: pointer;
        --awf-icon-color: var(--awf-chip-rest-font-color-inner);
    }

    .chip-wrapper,
    .chip-wrapper > * {
        opacity: 1;

        ${CHIP_TRANSITIONS};
    }

    :host {
        display: inline-block;
    }

    :host([active][light]) .chip-wrapper {
        background-color: var(--awf-chip-active-light-background-inner);
        border: var(--awf-chip-active-light-border-inner);
        color: var(--awf-chip-active-light-font-color-inner);
    }

    :host([disabled]) .chip-wrapper {
        background-color: var(--awf-chip-rest-disabled-background-inner);
        border: var(--awf-chip-rest-disabled-border-inner);
        color: var(--awf-chip-rest-disabled-font-color-inner);
    }

    :host([active][disabled]) .chip-wrapper {
        background-color: var(--awf-chip-active-disabled-background-inner);
        border: var(--awf-chip-active-disabled-border-inner);
        color: var(--awf-chip-active-disabled-font-color-inner);
        --awf-icon-color: var(--awf-chip-active-disabled-font-color-inner);
    }

    :host([active]) .chip-wrapper {
        background-color: var(--awf-chip-active-background-inner);
        border: var(--awf-chip-active-border-inner);
        color: var(--awf-chip-active-font-color-inner);
        --awf-icon-color: var(--awf-chip-active-font-color-inner);
    }

    :host([disabled]) .chip-wrapper {
        cursor: not-allowed;
    }

    :host([disabled]) .chip-wrapper > img {
        opacity: var(--disabled-opacity);
    }

    :host([light]:not([active]):not([disabled])) .chip-wrapper:hover {
        background-color: var(--awf-chip-rest-light-hover-background-inner);
        border: var(--awf-chip-rest-light-hover-border-inner);
        color: var(--awf-chip-rest-light-hover-font-color-inner);
    }

    :host(:not([disabled]):not([active])) .chip-wrapper:hover {
        background-color: var(--awf-chip-rest-hover-background-inner);
        border: var(--awf-chip-rest-hover-border-inner);
        color: var(--awf-chip-rest-hover-font-color-inner);
    }

    :host(:not([disabled])) .remove-button:hover {
        cursor: pointer;
        background-color: var(--awf-chip-remove-button-hover-background-inner);
    }

    :host(:not([disabled])[light]) .remove-button:hover {
        background-color: var(--at-blue-soft);
    }

    :host([removeable]) .chip-wrapper {
        padding-right: var(--awf-chip-wrapper-padding-inner);
    }

    img,
    .icon {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        margin-right: 5px;
        margin-left: -13px;
        object-fit: cover;
    }

    .icon awf-icon {
        margin: 1px 1px 1px 2px;
    }

    .remove-button {
        border-radius: 50%;
        border-width: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        background-color: transparent;
        width: var(--awf-chip-remove-button-wrapper-size-inner);
        height: var(--awf-chip-remove-button-wrapper-size-inner);
        margin-left: var(--awf-chip-remove-button-wrapper-margin-inner);
    }

    .remove-button awf-icon {
        height: var(--awf-chip-remove-button-size-inner);
        width: var(--awf-chip-remove-button-size-inner);
    }

    .label {
        white-space: nowrap;
    }
`;let AwfChip=class AwfChip extends lit.oi{constructor(){super(...arguments),this.label="",this.light=!1,this.active=!1,this.disabled=!1,this.removeable=!1,this.dispatchCustomEvent=dispatchCustomEvent.bind(this)}render(){return lit.dy`<button aria-label="chip" class="chip-wrapper" ?disabled=${this.disabled}>
            ${this.getPictureTemplate()}
            <span class="label">${this.label}</span>
            ${this.getRemoveButton()}
        </button>`}updated(changes){super.updated(changes),changes.has("disabled")&&(this.disabled?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled"))}getPictureTemplate(){return this.image?lit.dy`<img alt="" src="${this.image}" />`:this.icon?lit.dy`<span class="icon"><awf-icon name=${this.icon}></awf-icon></span>`:lit.dy``}getRemoveButton(){return this.removeable?lit.dy` <button aria-label="remove-chip" class="remove-button" @click=${this.removeChip}>
                <awf-icon raw=${delete_cross.C}></awf-icon>
            </button>`:lit.dy``}removeChip(event){event.preventDefault(),event.stopPropagation(),this.disabled||this.dispatchCustomEvent(AwfEvent.DELETE)}};AwfChip.styles=[COMMON_STYLES,CHIP_CSS_VARIABLES,CHIP_STYLES],(0,tslib_es6.gn)([(0,decorators.Cb)()],AwfChip.prototype,"label",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)()],AwfChip.prototype,"value",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)()],AwfChip.prototype,"icon",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)()],AwfChip.prototype,"image",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)({type:Boolean,reflect:!0})],AwfChip.prototype,"light",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)({type:Boolean,reflect:!0})],AwfChip.prototype,"active",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)({type:Boolean,reflect:!0})],AwfChip.prototype,"disabled",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)({type:Boolean,reflect:!0})],AwfChip.prototype,"removeable",void 0),AwfChip=(0,tslib_es6.gn)([(0,awf_custom_element.M)("awf-chip",!0)],AwfChip);var page_previous=__webpack_require__("./node_modules/@agilent/web-icons/core/page-previous.js"),page_next=__webpack_require__("./node_modules/@agilent/web-icons/core/page-next.js");const str=(strings,...values)=>({strTag:!0,strings,values}),joinStringsAndValues=(strings,values,valueOrder)=>{let concat=strings[0];for(let i=1;i<strings.length;i++)concat+=values[valueOrder?valueOrder[i-1]:i-1],concat+=strings[i];return concat},default_msg_defaultMsg=template=>{return"string"!=typeof(val=template)&&"strTag"in val?joinStringsAndValues(template.strings,template.values):template;var val};class LocalizeController{constructor(host){this.__litLocalizeEventHandler=event=>{"ready"===event.detail.status&&this.host.requestUpdate()},this.host=host}hostConnected(){window.addEventListener("lit-localize-status",this.__litLocalizeEventHandler)}hostDisconnected(){window.removeEventListener("lit-localize-status",this.__litLocalizeEventHandler)}}const updateWhenLocaleChanges=host=>host.addController(new LocalizeController(host)),localized=()=>classOrDescriptor=>"function"==typeof classOrDescriptor?legacyLocalized(classOrDescriptor):standardLocalized(classOrDescriptor),standardLocalized=({kind,elements})=>({kind,elements,finisher(clazz){clazz.addInitializer(updateWhenLocaleChanges)}}),legacyLocalized=clazz=>(clazz.addInitializer(updateWhenLocaleChanges),clazz);class Deferred{constructor(){this.settled=!1,this.promise=new Promise(((resolve,reject)=>{this._resolve=resolve,this._reject=reject}))}resolve(value){this.settled=!0,this._resolve(value)}reject(error){this.settled=!0,this._reject(error)}}const hl=[];for(let i=0;i<256;i++)hl[i]=(i>>4&15).toString(16)+(15&i).toString(16);const HASH_DELIMITER="",HTML_PREFIX="h",STRING_PREFIX="s";function generateMsgId(strings,isHtmlTagged){return(isHtmlTagged?HTML_PREFIX:STRING_PREFIX)+function fnv1a64(str){let t0=0,v0=8997,t1=0,v1=33826,t2=0,v2=40164,t3=0,v3=52210;for(let i=0;i<str.length;i++)v0^=str.charCodeAt(i),t0=435*v0,t1=435*v1,t2=435*v2,t3=435*v3,t2+=v0<<8,t3+=v1<<8,t1+=t0>>>16,v0=65535&t0,t2+=t1>>>16,v1=65535&t1,v3=t3+(t2>>>16)&65535,v2=65535&t2;return hl[v3>>8]+hl[255&v3]+hl[v2>>8]+hl[255&v2]+hl[v1>>8]+hl[255&v1]+hl[v0>>8]+hl[255&v0]}("string"==typeof strings?strings:strings.join(HASH_DELIMITER))}const expressionOrders=new WeakMap,hashCache=new Map;function runtimeMsg(templates,template,options){var _a;if(templates){const id=null!==(_a=null==options?void 0:options.id)&&void 0!==_a?_a:function generateId(template){const strings="string"==typeof template?template:template.strings;let id=hashCache.get(strings);void 0===id&&(id=generateMsgId(strings,"string"!=typeof template&&!("strTag"in template)),hashCache.set(strings,id));return id}(template),localized=templates[id];if(localized){if("string"==typeof localized)return localized;if("strTag"in localized)return joinStringsAndValues(localized.strings,template.values,localized.values);{let order=expressionOrders.get(localized);return void 0===order&&(order=localized.values,expressionOrders.set(localized,order)),{...localized,values:order.map((i=>template.values[i]))}}}}return default_msg_defaultMsg(template)}function dispatchStatusEvent(detail){window.dispatchEvent(new CustomEvent("lit-localize-status",{detail}))}let loadingLocale,sourceLocale,validLocales,loadLocale,templates,activeLocale="",loading=new Deferred;loading.resolve();let requestId=0;const configureLocalization=config=>(function lit_localize_installMsgImplementation(impl){if(installed)throw new Error("lit-localize can only be configured once");msg=impl,installed=!0}(((template,options)=>runtimeMsg(templates,template,options))),activeLocale=sourceLocale=config.sourceLocale,validLocales=new Set(config.targetLocales),validLocales.add(config.sourceLocale),loadLocale=config.loadLocale,{getLocale,setLocale}),getLocale=()=>activeLocale,setLocale=newLocale=>{if(newLocale===(null!=loadingLocale?loadingLocale:activeLocale))return loading.promise;if(!validLocales||!loadLocale)throw new Error("Internal error");if(!validLocales.has(newLocale))throw new Error("Invalid locale code");requestId++;const thisRequestId=requestId;loadingLocale=newLocale,loading.settled&&(loading=new Deferred),dispatchStatusEvent({status:"loading",loadingLocale:newLocale});return(newLocale===sourceLocale?Promise.resolve({templates:void 0}):loadLocale(newLocale)).then((mod=>{requestId===thisRequestId&&(activeLocale=newLocale,loadingLocale=void 0,templates=mod.templates,dispatchStatusEvent({status:"ready",readyLocale:newLocale}),loading.resolve())}),(err=>{requestId===thisRequestId&&(dispatchStatusEvent({status:"error",errorLocale:newLocale,errorMessage:err.toString()}),loading.reject(err))})),loading.promise};let msg=default_msg_defaultMsg,installed=!1;var directive=__webpack_require__("./node_modules/lit-html/directive.js");const{I:directive_helpers_l}=lit_html._$LH,r=()=>document.createComment(""),directive_helpers_c=(o,i,n)=>{var t;const v=o._$AA.parentNode,d=void 0===i?o._$AB:i._$AA;if(void 0===n){const i=v.insertBefore(r(),d),t=v.insertBefore(r(),d);n=new directive_helpers_l(i,t,o,o.options)}else{const l=n._$AB.nextSibling,i=n._$AM,u=i!==o;if(u){let l;null===(t=n._$AQ)||void 0===t||t.call(n,o),n._$AM=o,void 0!==n._$AP&&(l=o._$AU)!==i._$AU&&n._$AP(l)}if(l!==d||u){let o=n._$AA;for(;o!==l;){const l=o.nextSibling;v.insertBefore(o,d),o=l}}}return n},f=(o,l,i=o)=>(o._$AI(l,i),o),s={},directive_helpers_a=(o,l=s)=>o._$AH=l,directive_helpers_p=o=>{var l;null===(l=o._$AP)||void 0===l||l.call(o,!1,!0);let i=o._$AA;const n=o._$AB.nextSibling;for(;i!==n;){const o=i.nextSibling;i.remove(),i=o}},repeat_u=(e,s,t)=>{const r=new Map;for(let l=s;l<=t;l++)r.set(e[l],l);return r},c=(0,directive.XM)(class extends directive.Xe{constructor(e){if(super(e),e.type!==directive.pX.CHILD)throw Error("repeat() can only be used in text expressions")}ct(e,s,t){let r;void 0===t?t=s:void 0!==s&&(r=s);const l=[],o=[];let i=0;for(const s of e)l[i]=r?r(s,i):i,o[i]=t(s,i),i++;return{values:o,keys:l}}render(e,s,t){return this.ct(e,s,t).values}update(s,[t,r,c]){var d;const a=(o=>o._$AH)(s),{values:p,keys:v}=this.ct(t,r,c);if(!Array.isArray(a))return this.ut=v,p;const h=null!==(d=this.ut)&&void 0!==d?d:this.ut=[],m=[];let y,x,j=0,k=a.length-1,w=0,A=p.length-1;for(;j<=k&&w<=A;)if(null===a[j])j++;else if(null===a[k])k--;else if(h[j]===v[w])m[w]=f(a[j],p[w]),j++,w++;else if(h[k]===v[A])m[A]=f(a[k],p[A]),k--,A--;else if(h[j]===v[A])m[A]=f(a[j],p[A]),directive_helpers_c(s,m[A+1],a[j]),j++,A--;else if(h[k]===v[w])m[w]=f(a[k],p[w]),directive_helpers_c(s,a[j],a[k]),k--,w++;else if(void 0===y&&(y=repeat_u(v,w,A),x=repeat_u(h,j,k)),y.has(h[j]))if(y.has(h[k])){const e=x.get(v[w]),t=void 0!==e?a[e]:null;if(null===t){const e=directive_helpers_c(s,a[j]);f(e,p[w]),m[w]=e}else m[w]=f(t,p[w]),directive_helpers_c(s,a[j],t),a[e]=null;w++}else directive_helpers_p(a[k]),k--;else directive_helpers_p(a[j]),j++;for(;w<=A;){const e=directive_helpers_c(s,m[A+1]);f(e,p[w]),m[w++]=e}for(;j<=k;){const e=a[j++];null!==e&&directive_helpers_p(e)}return this.ut=v,directive_helpers_a(s,m),lit_html.Jb}}),o=(0,directive.XM)(class extends directive.Xe{constructor(t){var i;if(super(t),t.type!==directive.pX.ATTRIBUTE||"class"!==t.name||(null===(i=t.strings)||void 0===i?void 0:i.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((i=>t[i])).join(" ")+" "}update(i,[s]){var r,o;if(void 0===this.it){this.it=new Set,void 0!==i.strings&&(this.nt=new Set(i.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in s)s[t]&&!(null===(r=this.nt)||void 0===r?void 0:r.has(t))&&this.it.add(t);return this.render(s)}const e=i.element.classList;this.it.forEach((t=>{t in s||(e.remove(t),this.it.delete(t))}));for(const t in s){const i=!!s[t];i===this.it.has(t)||(null===(o=this.nt)||void 0===o?void 0:o.has(t))||(i?(e.add(t),this.it.add(t)):(e.remove(t),this.it.delete(t)))}return lit_html.Jb}});var asyncToGenerator=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");const targetLocales=["en-US","es-ES","fr-FR","ja-JP","pt-BR","ru-RU","zh-HANS"],allLocales=["en-US","en-US","es-ES","fr-FR","ja-JP","pt-BR","ru-RU","zh-HANS"],en_US_templates={"date-format":"^([0-9]{4})-([0-9]{2})-([0-9]{2})$","displayed-date":str`${0}-${1}-${2}`,s09054e07b59e9271:"Fr",s09165907b5ad1855:"Mo",s09353807b5c790d1:"Th",s09353907b5c79284:"To",s09354307b5c7a382:"Su",s09385307b5c9f489:"We",s09462f07b5d5f4b9:"Sa",s09464307b5d616b5:"Su",s47319a3cf96f6c33:str`The value must be less than or equal to ${0}.`,s8793b9cfd66015ff:"This input is not a whole number.",s9f0004e449fc0e1b:"true",sa55d612602b943e5:"yyyy-mm-dd",sa6ab5184d6315895:"From",sa82bbe4f3a4d328d:str`Add item "${0}"`,sb4f1dffbb6be6302:"Clear",sc29f0fc2ea7235f9:str`The value must be higher than or equal to ${0}.`,sc57b150b53a3b9e6:"This field is required.",sd47de5e6aac88782:"Invalid date format (yyyy-mm-dd)",sd5be895f328fdb8d:str`The value must be higher than or equal to ${0}`,sf9ce70dc72fea861:"Please Select",sff4529d78884abaf:str`The value must be less than or equal to ${0}`,"date-time-format":"^(.*) (.*) (.*)$",s62931b2a50168976:"Previous month",s46d6587089bd0356:"Next month",sc92905d14a9421f3:"Idle",s9c13a2548d254014:"Ready",sc71b3854a2f58e3e:"Pre-Run",sb11b62fb6b2c22d3:"Tune",sb7313be9db9b8cb4:"Acquiring",s85994a70cd39166c:"Running",s3626b7b894dd4bc4:"Injecting",sb37aaf430e2b29dd:"Not Ready",s34be76c6b1eadbef:"Warning",s5f343a43e7ea9f91:"Error",s302552ff507cf49e:"Standby",scde3342a428aaee8:"Offline",s45a3285dc4ef2177:"Post-Run",sa6ab28c69299397d:"12 hours",s36409bb50f9177a0:"24 hours",sfa0c0738d0d2a5a9:"No item found",s31763966e49b8aac:"Invalid date time format (yyyy-mm-dd hh:mm AM|PM)",sbeb80a553c5afbc0:"yyyy-mm-dd hh:mm AM|PM",key:"Hello"},es_ES_templates={"date-format":"^([0-9]{4})-([0-9]{2})-([0-9]{2})$","date-time-format":"^(.*) (.*) (.*)$","displayed-date":str`${0}-${1}-${2}`,key:"Hello",s09054e07b59e9271:"VI",s09165907b5ad1855:"LU",s09353807b5c790d1:"JU",s09353907b5c79284:"A",s09354307b5c7a382:"MA",s09385307b5c9f489:"MI",s09462f07b5d5f4b9:"SA",s09464307b5d616b5:"DO",s302552ff507cf49e:"En espera",s31763966e49b8aac:"Invalid date time format (yyyy-mm-dd hh:mm AM|PM)",s34be76c6b1eadbef:"Advertencia",s3626b7b894dd4bc4:"Inyectando",s36409bb50f9177a0:"24 hours",s45a3285dc4ef2177:"Post-Run",s46d6587089bd0356:"Mes siguiente",s47319a3cf96f6c33:str`El valor debe ser menor o igual que ${0}.`,s5f343a43e7ea9f91:"Error",s62931b2a50168976:"Mes anterior",s85994a70cd39166c:"Funcionamiento",s8793b9cfd66015ff:"No ha introducido un número entero.",s9c13a2548d254014:"Preparado",s9f0004e449fc0e1b:"false",sa55d612602b943e5:"aaaa-mm-dd",sa6ab28c69299397d:"12 hours",sa6ab5184d6315895:"De",sa82bbe4f3a4d328d:str`Add item "${0}"`,sb11b62fb6b2c22d3:"Ajuste",sb37aaf430e2b29dd:"No preparado",sb4f1dffbb6be6302:"Borrar",sb7313be9db9b8cb4:"Acquiring",sbeb80a553c5afbc0:"yyyy-mm-dd hh:mm AM|PM",sc29f0fc2ea7235f9:str`El valor debe ser mayor o igual a ${0}.`,sc57b150b53a3b9e6:"Este campo es obligatorio.",sc71b3854a2f58e3e:"Prefuncionamiento",sc92905d14a9421f3:"Inactivo",scde3342a428aaee8:"Desconectado",sd47de5e6aac88782:"Formato de fecha no válido (aaaa-mm-dd)",sd5be895f328fdb8d:str`El valor debe ser mayor o igual a ${0}`,sf9ce70dc72fea861:"Por favor seleccione",sfa0c0738d0d2a5a9:"No item found",sff4529d78884abaf:str`El valor debe ser menor o igual que ${0}`},fr_FR_templates={"date-format":"^(\\d{2})-(\\d{2})-(\\d{4})$","date-time-format":"^(.*) (.*) (.*)$","displayed-date":str`${2}-${1}-${0}`,key:"Monde",s09054e07b59e9271:"ve",s09165907b5ad1855:"lu",s09353807b5c790d1:"je",s09353907b5c79284:"A",s09354307b5c7a382:"ma",s09385307b5c9f489:"me",s09462f07b5d5f4b9:"sa",s09464307b5d616b5:"di",s302552ff507cf49e:"En attente",s31763966e49b8aac:"Mauvais format de date et heure (jj-mm-aaaa hh:mm)",s34be76c6b1eadbef:"Attention",s3626b7b894dd4bc4:"Injection en cours",s36409bb50f9177a0:"24 hours",s45a3285dc4ef2177:"Post-Run",s46d6587089bd0356:"Mois suivant",s47319a3cf96f6c33:str`La valeur doit être inférieure ou égale à ${0}.`,s5f343a43e7ea9f91:"Erreur",s62931b2a50168976:"Mois précédent",s85994a70cd39166c:"En cours",s8793b9cfd66015ff:"Cette entrée n'est pas un entier.",s9c13a2548d254014:"Prêt",s9f0004e449fc0e1b:"false",sa55d612602b943e5:"jj-mm-aaaa",sa6ab28c69299397d:"12 hours",sa6ab5184d6315895:"De",sa82bbe4f3a4d328d:str`Add item "${0}"`,sb11b62fb6b2c22d3:"Tune",sb37aaf430e2b29dd:"Pas prêt",sb4f1dffbb6be6302:"Effacer",sb7313be9db9b8cb4:"Acquisition en cours",sbeb80a553c5afbc0:"jj-mm-aaaa hh:mm",sc29f0fc2ea7235f9:str`La valeur doit être supérieure ou égale à ${0}.`,sc57b150b53a3b9e6:"Ce champs est obligatoire.",sc71b3854a2f58e3e:"Pre-Run",sc92905d14a9421f3:"En attente",scde3342a428aaee8:"Déconnecté",sd47de5e6aac88782:"Format de date invalide (jj-mm-aaaa)",sd5be895f328fdb8d:str`La valeur doit être supérieure ou égale à ${0}`,sf9ce70dc72fea861:"Veuillez sélectionner",sfa0c0738d0d2a5a9:"Aucun élément trouvé",sff4529d78884abaf:str`La valeur doit être inférieure ou égale à ${0}`},ja_JP_templates={"date-format":"^([0-9]{4}年)([0-9]{2}月)([0-9]{2}日)$","date-time-format":"^(.*) (.*) (.*)$","displayed-date":str`${0}年${1}月${2}日`,key:"Hello",s09054e07b59e9271:"金",s09165907b5ad1855:"月",s09353807b5c790d1:"木",s09353907b5c79284:"終了",s09354307b5c7a382:"火",s09385307b5c9f489:"水",s09462f07b5d5f4b9:"土",s09464307b5d616b5:"日",s302552ff507cf49e:"Standby",s31763966e49b8aac:"Invalid date time format (yyyy-mm-dd hh:mm AM|PM)",s34be76c6b1eadbef:"警告",s3626b7b894dd4bc4:"注入中",s36409bb50f9177a0:"24 hours",s45a3285dc4ef2177:"ポストラン",s46d6587089bd0356:"来月",s47319a3cf96f6c33:str`値を ${0} 以下にしてください。`,s5f343a43e7ea9f91:"エラー",s62931b2a50168976:"先月",s85994a70cd39166c:"実行中",s8793b9cfd66015ff:"整数を入力してください。",s9c13a2548d254014:"レディ",s9f0004e449fc0e1b:"false",sa55d612602b943e5:"yyyy年mm月dd日",sa6ab28c69299397d:"12 hours",sa6ab5184d6315895:"開始",sa82bbe4f3a4d328d:str`Add item "${0}"`,sb11b62fb6b2c22d3:"チューニング",sb37aaf430e2b29dd:"ノットレディ",sb4f1dffbb6be6302:"クリア",sb7313be9db9b8cb4:"Acquiring",sbeb80a553c5afbc0:"yyyy-mm-dd hh:mm AM|PM",sc29f0fc2ea7235f9:str`値を ${0} 以上にしてください。`,sc57b150b53a3b9e6:"このフィールドは必須です。",sc71b3854a2f58e3e:"プレラン",sc92905d14a9421f3:"待機",scde3342a428aaee8:"スタンバイ",sd47de5e6aac88782:"日付の形式が無効です (yyyy-mm-dd)",sd5be895f328fdb8d:str`値を ${0} 以上にしてください。`,sf9ce70dc72fea861:"選んでください",sfa0c0738d0d2a5a9:"No item found",sff4529d78884abaf:str`値を ${0} 以下にしてください。`},pt_BR_templates={"date-format":"^([0-9]{2})-([0-9]{2})-([0-9]{4})$","date-time-format":"^(.*) (.*) (.*)$","displayed-date":str`${2}-${1}-${0}`,key:"Hello",s09054e07b59e9271:"sex.",s09165907b5ad1855:"seg.",s09353807b5c790d1:"qui.",s09353907b5c79284:"Até",s09354307b5c7a382:"ter.",s09385307b5c9f489:"qua.",s09462f07b5d5f4b9:"sáb.",s09464307b5d616b5:"dom.",s302552ff507cf49e:"Em espera",s31763966e49b8aac:"Invalid date time format (yyyy-mm-dd hh:mm AM|PM)",s34be76c6b1eadbef:"Aviso",s3626b7b894dd4bc4:"Injetando",s36409bb50f9177a0:"24 hours",s45a3285dc4ef2177:"Pós-corrida",s46d6587089bd0356:"Próximo mês",s47319a3cf96f6c33:str`O valor deve ser menor ou igual a ${0}.`,s5f343a43e7ea9f91:"Erro",s62931b2a50168976:"Mês anterior",s85994a70cd39166c:"Correndo",s8793b9cfd66015ff:"Esta entrada não é um número inteiro.",s9c13a2548d254014:"Pronto",s9f0004e449fc0e1b:"false",sa55d612602b943e5:"dd-mm-aaaa",sa6ab28c69299397d:"12 hours",sa6ab5184d6315895:"De",sa82bbe4f3a4d328d:str`Add item "${0}"`,sb11b62fb6b2c22d3:"Tune",sb37aaf430e2b29dd:"Não pronto",sb4f1dffbb6be6302:"Limpar",sb7313be9db9b8cb4:"Acquiring",sbeb80a553c5afbc0:"yyyy-mm-dd hh:mm AM|PM",sc29f0fc2ea7235f9:str`O valor deve ser maior ou igual a ${0}.`,sc57b150b53a3b9e6:"Este campo é obrigatório.",sc71b3854a2f58e3e:"Pré-corrida",sc92905d14a9421f3:"Ocioso",scde3342a428aaee8:"Offline",sd47de5e6aac88782:"Formato de data inválido (dd-mm-aaaa)",sd5be895f328fdb8d:str`O valor deve ser maior ou igual a ${0}`,sf9ce70dc72fea861:"Por favor selecione",sfa0c0738d0d2a5a9:"No item found",sff4529d78884abaf:str`O valor deve ser menor ou igual a ${0}`},ru_RU_templates={"date-format":"^([0-9]{2})\\.([0-9]{2})\\.([0-9]{4})$","date-time-format":"^(.*) (.*) (.*)$","displayed-date":str`${2}.${1}.${0}`,key:"Hello",s09054e07b59e9271:"пт",s09165907b5ad1855:"пн",s09353807b5c790d1:"чт",s09353907b5c79284:"До",s09354307b5c7a382:"вт",s09385307b5c9f489:"ср",s09462f07b5d5f4b9:"сб",s09464307b5d616b5:"вс",s302552ff507cf49e:"Ожидание",s31763966e49b8aac:"Invalid date time format (yyyy-mm-dd hh:mm AM|PM)",s34be76c6b1eadbef:"Warning",s3626b7b894dd4bc4:"Ввод пробы",s36409bb50f9177a0:"24 hours",s45a3285dc4ef2177:"Post-Run",s46d6587089bd0356:"Следующий месяц",s47319a3cf96f6c33:str`Значение должно быть меньше или равно ${0}.`,s5f343a43e7ea9f91:"Ошибка",s62931b2a50168976:"Предыдущий месяц",s85994a70cd39166c:"Выполняется",s8793b9cfd66015ff:"Значение не полное число.",s9c13a2548d254014:"Ready",s9f0004e449fc0e1b:"false",sa55d612602b943e5:"дд.мм.гггг",sa6ab28c69299397d:"12 hours",sa6ab5184d6315895:"От",sa82bbe4f3a4d328d:str`Add item "${0}"`,sb11b62fb6b2c22d3:"Настройка",sb37aaf430e2b29dd:"Не готов",sb4f1dffbb6be6302:"Очистить",sb7313be9db9b8cb4:"Acquiring",sbeb80a553c5afbc0:"yyyy-mm-dd hh:mm AM|PM",sc29f0fc2ea7235f9:str`Значение должно быть больше или равно ${0}.`,sc57b150b53a3b9e6:"Требуется это поле.",sc71b3854a2f58e3e:"Предв. цикл",sc92905d14a9421f3:"Бездействие",scde3342a428aaee8:"Автономно",sd47de5e6aac88782:"Неверный формат даты (дд.мм.гггг)",sd5be895f328fdb8d:str`Значение должно быть больше или равно ${0}`,sf9ce70dc72fea861:"Пожалуйста выберите",sfa0c0738d0d2a5a9:"No item found",sff4529d78884abaf:str`Значение должно быть меньше или равно ${0}`},zh_HANS_templates={"date-format":"^([0-9]{4}年)([0-9]{2}月)([0-9]{2}日)$","date-time-format":"^(.*) (.*) (.*)$","displayed-date":str`${0}年${1}月${2}日`,key:"Hello",s09054e07b59e9271:"周五",s09165907b5ad1855:"周一",s09353807b5c790d1:"周四",s09353907b5c79284:"到",s09354307b5c7a382:"周二",s09385307b5c9f489:"周三",s09462f07b5d5f4b9:"周六",s09464307b5d616b5:"周日",s302552ff507cf49e:"待机",s31763966e49b8aac:"Invalid date time format (yyyy-mm-dd hh:mm AM|PM)",s34be76c6b1eadbef:"警告",s3626b7b894dd4bc4:"正在进样",s36409bb50f9177a0:"24 hours",s45a3285dc4ef2177:"后运行",s46d6587089bd0356:"下个月",s47319a3cf96f6c33:str`值必须小于或等于 ${0}。`,s5f343a43e7ea9f91:"错误",s62931b2a50168976:"上个月",s85994a70cd39166c:"正在运行",s8793b9cfd66015ff:"此输入不是整数。",s9c13a2548d254014:"就绪",s9f0004e449fc0e1b:"false",sa55d612602b943e5:"yyyy年mm月dd日",sa6ab28c69299397d:"12 hours",sa6ab5184d6315895:"从",sa82bbe4f3a4d328d:str`Add item "${0}"`,sb11b62fb6b2c22d3:"调谐",sb37aaf430e2b29dd:"未就绪",sb4f1dffbb6be6302:"清除",sb7313be9db9b8cb4:"Acquiring",sbeb80a553c5afbc0:"yyyy-mm-dd hh:mm AM|PM",sc29f0fc2ea7235f9:str`值必须大于或等于 ${0}。`,sc57b150b53a3b9e6:"此字段是必填项。",sc71b3854a2f58e3e:"预运行",sc92905d14a9421f3:"空闲",scde3342a428aaee8:"离线",sd47de5e6aac88782:"无效日期格式 (yyyy年mm月dd日)",sd5be895f328fdb8d:str`值必须大于或等于 ${0}。`,sf9ce70dc72fea861:"请选择",sfa0c0738d0d2a5a9:"No item found",sff4529d78884abaf:str`值必须小于或等于 ${0}。`};class AWFTranslateService{constructor(){this.localizedTemplates=new Map([["en-US",en_US_namespaceObject],["es-ES",es_ES_namespaceObject],["fr-FR",fr_FR_namespaceObject],["ja-JP",ja_JP_namespaceObject],["pt-BR",pt_BR_namespaceObject],["ru-RU",ru_RU_namespaceObject],["zh-HANS",zh_HANS_namespaceObject]]),this.getLocale=()=>"en-US",this.setLocale=function(){var _ref=(0,asyncToGenerator.Z)((function*(locale){throw new Error("AWFTranslateService is not initialized. call awfTranslateService.init method first.")}));return function(_x){return _ref.apply(this,arguments)}}(),this.customTranslations=new Map,this.locale$=new Subject.x}init(translations){var _this=this;return(0,asyncToGenerator.Z)((function*(){if(!AWFTranslateService.INITIALIZED){AWFTranslateService.INITIALIZED=!0;const extendedTargetLocales=[...targetLocales];translations?.forEach((t=>{_this.customTranslations.set(t.locale,t.localeModule),extendedTargetLocales.push(t.locale)}));const{getLocale,setLocale}=configureLocalization({sourceLocale:"en-US",targetLocales:extendedTargetLocales,loadLocale:locale=>_this.customTranslations?.has(locale)?Promise.resolve(_this.customTranslations.get(locale)):Promise.resolve(_this.localizedTemplates.get(locale))});_this.getLocale=getLocale,_this.setLocale=setLocale,_this.listenForLitLocalizeChange(),_this.syncWithBrowserLang()}}))()}onLangChange(){return this.locale$.asObservable()}listenForLitLocalizeChange(){window.addEventListener("lit-localize-status",(event=>{"ready"===event.detail.status&&this.locale$.next(event.detail.readyLocale)}))}syncWithBrowserLang(){const browserLangCode=window?.navigator?.language;allLocales.includes(browserLangCode)?this.setLocale(browserLangCode):this.setLocale(this.findLightMatch(browserLangCode))}findLightMatch(browserLangCode){const simplified=browserLangCode.split("-")[0];return allLocales.find((locale=>locale.startsWith(simplified)))||"en-US"}}AWFTranslateService.INITIALIZED=!1,window.awfTranslateService||(window.awfTranslateService=new AWFTranslateService);const translate_service_awfTranslateService=window.awfTranslateService,TIME_REGEX="\\b(1[0-2]|0?[1-9]):([0-5][0-9]) ([AaPp][Mm])";const dateUtil=new class DateUtil{compareDates(date1,date2,compareTime=!1){let d1=date1,d2=date2;return compareTime||(d1=new Date(date1.getFullYear(),date1.getMonth(),date1.getDate()),d2=new Date(date2.getFullYear(),date2.getMonth(),date2.getDate())),d1.getTime()<d2.getTime()?-1:d1.getTime()>d2.getTime()?1:0}datesAreEqual(date1,date2,compareTime=!1){return!date1&&!date2||!(!date1&&date2||date1&&!date2)&&0===this.compareDates(date1,date2,compareTime)}formatDate(date,includeTime=!1){let displayedDate="";if(date){const month=`${date.getMonth()+1}`.padStart(2,"0"),day=`${date.getDate()}`.padStart(2,"0");if(displayedDate=msg(str`${date.getFullYear()}-${month}-${day}`,{id:"displayed-date"}),includeTime){const formatOptions={hour:"2-digit",minute:"2-digit",hourCycle:"h12"};displayedDate+=` ${date.toLocaleString(["en"],formatOptions)}`}}return displayedDate}parseDate(dateStr){if(dateStr&&this.validateDateFormat(dateStr))return this.toDate(dateStr)}parseDateTime(dateTimeStr){let date=null;if(this.validateDateTimeFormat(dateTimeStr)){const split=dateTimeStr.split(" ");date=this.toDate(split[0]);const time=this.timeToDate(`${split[1]} ${split[2]}`);date.setHours(time.getHours(),time.getMinutes())}else this.validateDateFormat(dateTimeStr)?date=this.toDate(dateTimeStr):this.validateTimeFormat(dateTimeStr)&&(date=this.timeToDate(dateTimeStr));return date}validateDateFormat(dateStr){const dateFormat=new RegExp(msg("^(\\d{4})-(\\d{2})-(\\d{2})$",{id:"date-format"}),"g"),m=dateStr.matchAll(dateFormat).next();let pass=!m.done;if(pass&&(pass=4===m.value.length),pass){const date=this.extractDate(m.value);pass&&(pass=date.year>=1970),pass&&(pass=date.month<=12),pass&&(pass=date.monthDay<=new Date(date.year,date.month,0).getDate())}return pass}validateDateTimeFormat(dateTimeStr){const dateTimeFormat=new RegExp(msg("^(.*) (.*) (.*)$",{id:"date-time-format"}),"g"),m=dateTimeStr.matchAll(dateTimeFormat).next();let pass=!m.done;return pass&&(pass=4===m.value.length),pass&&(pass&&(pass=this.validateDateFormat(m.value[1])),pass&&(pass=this.validateTimeFormat(`${m.value[2]} ${m.value[3]}`))),pass}validateTimeFormat(timeStr){const timeFormat=new RegExp(TIME_REGEX,"g"),m=timeStr.matchAll(timeFormat).next();let pass=!m.done;if(pass&&(pass=4===m.value.length),pass){const time=this.extractTime(m.value);pass&&(pass=time.hours<24),pass&&(pass="AM"===time.ampm&&time.hours<13||"PM"===time.ampm&&time.hours>=12),pass&&(pass=time.minutes<60)}return pass}toDate(dateStr){const dateFormat=new RegExp(msg("^(\\d{4})-(\\d{2})-(\\d{2})$",{id:"date-format"}),"g"),date=this.extractDate(dateStr.matchAll(dateFormat).next().value);return new Date(Number(date.year),Number(date.month)-1,Number(date.monthDay))}timeToDate(timeStr){const timeFormat=new RegExp(TIME_REGEX,"g"),m=timeStr.matchAll(timeFormat).next(),time=this.extractTime(m.value),date=new Date;return date.setHours(time.hours,time.minutes,0,0),date}extractDate(value){const date={year:value[1].split(/[年月日]/)[0],month:value[2].split(/[年月日]/)[0],monthDay:value[3].split(/[年月日]/)[0]};return"ru-RU"!==translate_service_awfTranslateService.getLocale()&&"pt-BR"!==translate_service_awfTranslateService.getLocale()&&"fr-FR"!==translate_service_awfTranslateService.getLocale()||(date.year=value[3],date.month=value[2],date.monthDay=value[1]),date}extractTime(value){let hours=Number(value[1]);const minutes=Number(value[2]),ampm=value[3];return"AM"===ampm&&12===hours?hours=0:"PM"===ampm&&12!==hours&&(hours+=12),{hours,minutes,ampm}}};const localizationUtil=new class LocalizationUtil{computeMonthName(displayedMonth){const locale=awfTranslateService.getLocale().replace("_","-"),monthName=new Intl.DateTimeFormat(locale,{month:"long"}).format(displayedMonth);return monthName.charAt(0).toLocaleUpperCase(locale)+monthName.substring(1)}},DATE_PICKER_CSS_VARIABLES=lit.iv`
    :host {
        --awf-datepicker-day-height-inner: var(--awf-datepicker-day-height, 32px);
        --awf-datepicker-day-width-inner: var(--awf-datepicker-day-width, 32px);

        --awf-date-time-picker-width-inner: var(--awf-date-time-picker-width, 370px);
    }
`,DATEPICKER_STYLES=lit.iv`
    .datepicker {
        background-color: white;
        cursor: default;
        width: calc(7 * var(--awf-datepicker-day-width-inner));
    }

    .header {
        display: grid;
        grid-template-columns: auto 1fr auto;
        color: var(--awf-state-rest-foreground);
    }

    .month {
        background-color: white;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(7, var(--awf-datepicker-day-width-inner));
        grid-template-rows: repeat(7, var(--awf-datepicker-day-height-inner));
    }

    .grid:focus-visible {
        outline: none;
    }

    .weekday {
        color: var(--awf-state-disabled-foreground);
        border-bottom: solid 1px var(--at-gray);
        line-height: 2;
        text-align: center;
        font-style: italic;
        font-size: smaller;
    }

    .day-of-month {
        background-color: white;
        border: none;
        box-sizing: border-box;
        color: var(--awf-state-rest-foreground);
        cursor: pointer;
        font-family: inherit; /*Required to override User Agent settings*/
        font-size: var(--awf-button-font-size-inner);
        height: var(--awf-datepicker-day-height-inner);
        width: var(--awf-datepicker-day-width-inner);
    }

    .day-of-month.disabled {
        color: var(--awf-state-disabled-foreground);
        cursor: not-allowed;
    }

    .day-of-month.focused {
        border: solid 1px var(--awf-state-selected-border);
    }

    .day-of-month:focus-visible {
        outline: none;
    }

    .day-of-month:hover:not(.disabled),
    .day-of-month.selected:hover:not(.disabled),
    .day-of-month.highlighted:not(.disabled) {
        background-color: var(--awf-state-hover-background);
    }

    .day-of-month.selected:not(.disabled),
    .day-of-month:active:not(.disabled) {
        background-color: var(--awf-state-selected-background);
        color: var(--awf-state-selected-foreground);
    }

    .day-of-month.selected {
        outline: none;
    }
`;let AwfDatePicker=class AwfDatePicker extends lit.oi{constructor(){super(...arguments),this.dateRange=!1,this.monthLabel="",this.displayedDates=[],this._onKeydown=this.onKeydown.bind(this),this._onKeypress=this.onKeypress.bind(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this._onKeydown),this.addEventListener("keypress",this._onKeypress)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this._onKeydown),this.removeEventListener("keypress",this._onKeypress)}requestFocus(){this.focusedDayBtn?.focus()}render(){return lit.dy`
            <div class="datepicker">
                <div class="header">
                    <awf-button id="previousMonthBtn" @click=${this.gotoPreviousMonth} aria-label="previous month">
                        <awf-icon raw=${page_previous.g}></awf-icon>
                    </awf-button>
                    <awf-tooltip trigger="previousMonthBtn" message=${msg("Previous month")} tip></awf-tooltip>
                    <div class="month">${this.monthLabel} ${this.displayedMonth.getFullYear()}</div>
                    <awf-button id="nextMonthBtn" @click=${this.gotoNextMonth} aria-label="next month">
                        <awf-icon raw=${page_next._}></awf-icon>
                    </awf-button>
                    <awf-tooltip trigger="nextMonthBtn" message=${msg("Next month")} tip></awf-tooltip>
                </div>
                <div class="grid" @mouseleave=${this.onMouseLeaveGrid}>
                    ${c([msg("Su"),msg("Mo"),msg("Tu"),msg("We"),msg("Th"),msg("Fr"),msg("Sa")],this.renderWeekday)}
                    ${c(this.displayedDates,this.renderDates.bind(this))}
                </div>
            </div>
        `}willUpdate(_changedProperties){const valueChanged=_changedProperties.has("value"),minChanged=_changedProperties.has("min"),maxChanged=_changedProperties.has("max");(!this.focusedDate||valueChanged||minChanged||maxChanged)&&this.initFocusedDate(this.value||new Date),(!this.displayedMonth||valueChanged||minChanged||maxChanged)&&(this.displayedMonth=new Date(this.focusedDate.getFullYear(),this.focusedDate.getMonth(),1)),this.monthLabel=localizationUtil.computeMonthName(this.displayedMonth),this.displayedDates=this.computeDisplayedDates(this.displayedMonth)}updated(_changedProperties){this.requestFocus()}renderDates(date){const classes=o({"day-of-month":!0,disabled:this.isDateDisabled(date),selected:this.isDateSelected(date),highlighted:this.isDateHighlighted(date),focused:this.isDateFocused(date)});return lit.dy`<button class=${classes} @click=${()=>this.selectDate(date)} @mouseenter=${()=>this.onMouseEnter(date)}>
            ${date.getDate()}
        </button>`}renderWeekday(weekday){return lit.dy`<div class="weekday">${weekday}</div>`}initFocusedDate(date){let dateToSet=date.getTime();dateToSet=this.min&&dateToSet<this.min.getTime()?this.min.getTime():dateToSet,dateToSet=this.max&&dateToSet>this.max.getTime()?this.max.getTime():dateToSet,this.focusedDate=new Date(dateToSet)}computeDisplayedDates(displayedMonth){const dates=new Array(42),firstDisplayedDate=new Date(displayedMonth.getFullYear(),displayedMonth.getMonth(),1-displayedMonth.getDay());for(let i=0;i<42;i++){const date=new Date(firstDisplayedDate);date.setDate(firstDisplayedDate.getDate()+i),dates[i]=date}return dates}isDateDisabled(date){let disabled=date.getMonth()!==this.displayedMonth.getMonth();return this.min&&(disabled||(disabled=dateUtil.compareDates(date,this.min)<0)),this.max&&(disabled||(disabled=dateUtil.compareDates(date,this.max)>0)),this.dateRange&&this.value&&(disabled||(disabled=-1===dateUtil.compareDates(date,this.value))),disabled}isDateSelected(date){return[this.value,this.endValue].some((d=>d?.toDateString()===date.toDateString()))}isDateFocused(date){return!this.isDateDisabled(date)&&date.toDateString()===this.focusedDate.toDateString()}isDateHighlighted(date){if(this.dateRange&&this.value){const targetDate=this.endValue||this.hoveredDay;if(targetDate)return date.getTime()>=this.value.getTime()&&date.getTime()<=targetDate.getTime()}return!1}gotoPreviousMonth(){this.displayedMonth=new Date(this.displayedMonth.getFullYear(),this.displayedMonth.getMonth()-1)}gotoNextMonth(){this.displayedMonth=new Date(this.displayedMonth.getFullYear(),this.displayedMonth.getMonth()+1)}selectDate(date){this.isDateDisabled(date)||(this.focusedDate=date,this.value&&this.dateRange?(this.endValue=date,this.dispatchEvent(createCustomEvent(AwfEvent.VALUE_CHANGE,{startDate:this.value,endDate:this.endValue}))):(this.value=date,this.dispatchEvent(createCustomEvent(AwfEvent.VALUE_CHANGE,this.value))))}onMouseEnter(date){this.dateRange&&this.value&&date.getTime()>this.value.getTime()?this.hoveredDay=date:this.hoveredDay=void 0}onMouseLeaveGrid(){this.hoveredDay=void 0}onKeypress(event){["Enter","Space"].some((key=>key===event.code))&&this.selectDate(this.focusedDate)}onKeydown(event){let dayShift=0;switch(event.code){case"ArrowRight":dayShift=1;break;case"ArrowLeft":dayShift=-1;break;case"ArrowDown":dayShift=7;break;case"ArrowUp":dayShift=-7;break;case"Tab":dayShift=event.shiftKey?-1:1}0!==dayShift&&event.preventDefault(),this.focusedDate=new Date(this.focusedDate.getFullYear(),this.focusedDate.getMonth(),this.focusedDate.getDate()+dayShift),this.displayedMonth=new Date(this.focusedDate.getFullYear(),this.focusedDate.getMonth(),1)}};AwfDatePicker.styles=[COMMON_STYLES,BUTTON_CSS_VARIABLES,DATE_PICKER_CSS_VARIABLES,DATEPICKER_STYLES],(0,tslib_es6.gn)([(0,decorators.Cb)({attribute:!1})],AwfDatePicker.prototype,"value",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)({attribute:!1})],AwfDatePicker.prototype,"endValue",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)({attribute:!1})],AwfDatePicker.prototype,"min",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)({attribute:!1})],AwfDatePicker.prototype,"max",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)({type:Boolean})],AwfDatePicker.prototype,"dateRange",void 0),(0,tslib_es6.gn)([(0,decorators.IO)("button.day-of-month.focused")],AwfDatePicker.prototype,"focusedDayBtn",void 0),(0,tslib_es6.gn)([(0,decorators.SB)()],AwfDatePicker.prototype,"displayedMonth",void 0),(0,tslib_es6.gn)([(0,decorators.SB)()],AwfDatePicker.prototype,"focusedDate",void 0),(0,tslib_es6.gn)([(0,decorators.SB)()],AwfDatePicker.prototype,"hoveredDay",void 0),AwfDatePicker=(0,tslib_es6.gn)([localized(),(0,awf_custom_element.M)("awf-datepicker",!0)],AwfDatePicker);let AwfForm=class AwfForm extends lit.oi{render(){return lit.dy`<slot @slotchange=${this.onSlotChange}></slot>`}onSlotChange(){this.slottedForms?.forEach((form=>form.setAttribute("novalidate","")))}};(0,tslib_es6.gn)([(0,decorators.NH)({selector:"form"})],AwfForm.prototype,"slottedForms",void 0),AwfForm=(0,tslib_es6.gn)([(0,awf_custom_element.M)("awf-form",!0)],AwfForm);const async_directive_s=(i,t)=>{var e,o;const r=i._$AN;if(void 0===r)return!1;for(const i of r)null===(o=(e=i)._$AO)||void 0===o||o.call(e,t,!1),async_directive_s(i,t);return!0},async_directive_o=i=>{let t,e;do{if(void 0===(t=i._$AM))break;e=t._$AN,e.delete(i),i=t}while(0===(null==e?void 0:e.size))},async_directive_r=i=>{for(let t;t=i._$AM;i=t){let e=t._$AN;if(void 0===e)t._$AN=e=new Set;else if(e.has(i))break;e.add(i),async_directive_l(t)}};function async_directive_n(i){void 0!==this._$AN?(async_directive_o(this),this._$AM=i,async_directive_r(this)):this._$AM=i}function async_directive_h(i,t=!1,e=0){const r=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(t)if(Array.isArray(r))for(let i=e;i<r.length;i++)async_directive_s(r[i],!1),async_directive_o(r[i]);else null!=r&&(async_directive_s(r,!1),async_directive_o(r));else async_directive_s(this,i)}const async_directive_l=i=>{var t,s,o,r;i.type==directive.pX.CHILD&&(null!==(t=(o=i)._$AP)&&void 0!==t||(o._$AP=async_directive_h),null!==(s=(r=i)._$AQ)&&void 0!==s||(r._$AQ=async_directive_n))};class async_directive_c extends directive.Xe{constructor(){super(...arguments),this._$AN=void 0}_$AT(i,t,e){super._$AT(i,t,e),async_directive_r(this),this.isConnected=i._$AU}_$AO(i,t=!0){var e,r;i!==this.isConnected&&(this.isConnected=i,i?null===(e=this.reconnected)||void 0===e||e.call(this):null===(r=this.disconnected)||void 0===r||r.call(this)),t&&(async_directive_s(this,i),async_directive_o(this))}setValue(t){if((o=>void 0===o.strings)(this._$Ct))this._$Ct._$AI(t,this);else{const i=[...this._$Ct._$AH];i[this._$Ci]=t,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}}const ref_e=()=>new ref_o;class ref_o{}const ref_h=new WeakMap,ref_n=(0,directive.XM)(class extends async_directive_c{render(t){return lit_html.Ld}update(t,[s]){var e;const o=s!==this.G;return o&&void 0!==this.G&&this.ot(void 0),(o||this.rt!==this.lt)&&(this.G=s,this.dt=null===(e=t.options)||void 0===e?void 0:e.host,this.ot(this.lt=t.element)),lit_html.Ld}ot(i){var t;if("function"==typeof this.G){const s=null!==(t=this.dt)&&void 0!==t?t:globalThis;let e=ref_h.get(s);void 0===e&&(e=new WeakMap,ref_h.set(s,e)),void 0!==e.get(this.G)&&this.G.call(this.dt,void 0),e.set(this.G,i),void 0!==i&&this.G.call(this.dt,i)}else this.G.value=i}get rt(){var i,t,s;return"function"==typeof this.G?null===(t=ref_h.get(null!==(i=this.dt)&&void 0!==i?i:globalThis))||void 0===t?void 0:t.get(this.G):null===(s=this.G)||void 0===s?void 0:s.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});var LabelPosition;__webpack_require__("./node_modules/element-internals-polyfill/dist/index.js");class FormValidationController{constructor(host){this.host=host,this.firstUpdate=!0,this.dirty=!1,this._onBlur=this.onBlur.bind(this),this._onInput=this.onInput.bind(this),this.host.addController(this),this.host.internals=host.attachInternals()}hostDisconnected(){this.host.field?.removeEventListener("input",this._onInput),this.host.field?.removeEventListener("blur",this._onBlur),this.host.field?.removeEventListener("change",this._onBlur)}hostUpdated(){this.firstUpdate&&!this.host.hasAttribute("novalidate")&&(this.host.field.addEventListener("input",this._onInput),this.host.field.addEventListener("blur",this._onBlur),this.host.field.addEventListener("change",this._onBlur)),this.firstUpdate=!1}formAssociatedCallback(form){this.host.hasForm=!!form,form&&form.addEventListener("submit",(event=>{this.host.validateValue()||event.preventDefault()}),!0)}markAsDirty(){this.dirty=!0}onInput(){this.dirty=!0,this.host.clearInternalErrorMessage()}onBlur(){let shouldBeCleared=this.host.hasForm&&this.dirty;shouldBeCleared||(shouldBeCleared=!this.host.hasForm&&this.dirty&&this.host.validateValue()),shouldBeCleared&&this.host.clearInternalErrorMessage()}}!function(LabelPosition){LabelPosition.Top="top",LabelPosition.Left="left",LabelPosition.Right="right"}(LabelPosition||(LabelPosition={}));const LABEL_CSS_VARIABLES=lit.iv`
    :host {
        /* Common font colors */
        --awf-label-disabled-font-color-inner: var(--awf-label-disabled-font-color, var(--at-gray));
        --awf-label-error-font-color-inner: var(--awf-label-error-font-color, var(--awf-validation-label-error-font-color));
        --awf-label-focus-font-color-inner: var(--awf-label-focus-font-color, var(--at-blue-shade));
        --awf-label-hover-font-color-inner: var(--awf-label-hover-font-color, var(--at-blue-shade));
        --awf-label-warning-font-color-inner: var(--awf-label-warning-font-color, var(--awf-validation-warning-font-color));

        /* Label inside field */
        --awf-label-inside-position-font-color-inner: var(--awf-label-inside-position-font-color, var(--at-gray-medium));
        --awf-label-inside-position-font-size-inner: var(--awf-label-inside-position-font-size, 14px);
        --awf-label-inside-position-font-style-inner: var(--awf-label-inside-position-font-style, italic);
        --awf-label-inside-position-height-inner: var(--awf-label-inside-position-height, 19px);
        --awf-label-inside-position-padding-left-inner: var(--awf-label-inside-position-padding-left, 9px);
        --awf-label-inside-position-padding-right-inner: var(--awf-label-inside-position-padding-right, 8px);
        --awf-label-inside-position-top-inner: var(--awf-label-inside-position-top, 24px);

        /* Label on top of the field */
        --awf-label-top-position-font-color-inner: var(--awf-label-top-position-font-color, var(--at-dark-navy));
        --awf-label-top-position-font-size-inner: var(--awf-label-top-position-font-size, 11px);
        --awf-label-top-position-font-style-inner: var(--awf-label-top-position-font-style, normal);
        --awf-label-top-position-padding-left-inner: var(--awf-label-top-position-padding-left, 0);
        --awf-label-top-position-padding-right-inner: var(--awf-label-top-position-padding-right, 0);
        --awf-label-top-position-top-inner: var(--awf-label-top-position-top, 0);

        /* Label on left of the field */
        --awf-label-left-position-font-color-inner: var(--awf-label-left-position-font-color, var(--at-dark-navy));
        --awf-label-left-position-font-size-inner: var(--awf-label-left-position-font-size, 14px);
        --awf-label-left-position-font-style-inner: var(--awf-label-left-position-font-style, normal);
        --awf-label-left-position-margin-bottom-inner: var(--awf-label-left-position-margin-bottom, 7px);
        --awf-label-left-position-margin-top-inner: var(--awf-label-left-position-margin-top, 5px);
    }
`,FLOATING_ATTR=lit.iv`floating`,FLOATING_FORCED_ATTR=lit.iv`floating-forced`,LABEL_STYLE=[LABEL_CSS_VARIABLES,lit.iv`
        :host([warning]) {
            --awf-label-font-color: var(--awf-label-warning-font-color-inner);
        }

        :host([error]) {
            --awf-label-font-color: var(--awf-label-error-font-color-inner);
        }

        :host(:not([labelPosition='left']).has-label) {
            padding-top: 19px;
            position: relative;
        }

        /* Label top-inside: transition */
        :host(:not([labelPosition='left'])) ::slotted(label) {
            transition: all var(--transition-duration) var(--transition-timing-function);
            pointer-events: none;
            z-index: var(--awf-elevation-z2);

            display: block;
            height: var(--awf-label-inside-position-height-inner);
            overflow: hidden;
            position: absolute;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        /* Label inside */
        :host(:not([labelPosition='left'])):host(:not(:focus-within)) ::slotted(label:not([${FLOATING_ATTR}]):not([${FLOATING_FORCED_ATTR}])) {
            --awf-label-internal-font-color: var(--awf-label-inside-position-font-color-inner);
            --awf-label-font-size: var(--awf-label-inside-position-font-size-inner);
            --awf-label-font-style: var(--awf-label-inside-position-font-style-inner);
            --awf-label-padding-left: var(--awf-label-inside-position-padding-left-inner);
            --awf-label-padding-right: var(--awf-label-inside-position-padding-right-inner);
            --awf-label-top: var(--awf-label-inside-position-top-inner);
        }

        :host(:not([labelPosition='left'])):host(:not(:focus-within)):host(:hover)
                                                                    ::slotted(label:not([${FLOATING_ATTR}]):not([${FLOATING_FORCED_ATTR}])) {
            --awf-label-internal-font-color: var(--awf-label-hover-font-color-inner);
        }

        :host(:not([labelPosition='left'])):host(:not(:focus-within)):host([disabled])
                                                                    ::slotted(label:not([${FLOATING_ATTR}]):not([${FLOATING_FORCED_ATTR}])) {
            --awf-label-internal-font-color: var(--awf-label-disabled-font-color-inner);
        }

        /* label left */
        :host([labelPosition='left']) ::slotted(label) {
            --awf-label-internal-font-color: var(--awf-label-left-position-font-color-inner);
            --awf-label-font-size: var(--awf-label-left-position-font-size-inner);
            --awf-label-font-style: var(--awf-label-left-position-font-style-inner);
            --awf-label-top: 0;
            --awf-label-margin-top: var(--awf-label-left-position-margin-top-inner);
            --awf-label-margin-bottom: var(--awf-label-left-position-margin-bottom-inner);

            padding-right: 1rem;
        }

        :host([labelPosition='left']):host(:focus-within) ::slotted(label),
        :host([labelPosition='left']) ::slotted(label[${FLOATING_FORCED_ATTR}]) {
            --awf-label-internal-font-color: var(--awf-label-focus-font-color-inner);
        }

        :host([labelPosition='left']):host(:hover) ::slotted(label) {
            --awf-label-internal-font-color: var(--awf-label-hover-font-color-inner);
        }

        :host([labelPosition='left']):host([disabled]) ::slotted(label) {
            --awf-label-internal-font-color: var(--awf-label-disabled-font-color-inner);
        }

        /* label top */
        :host(:not([labelPosition='left'])) ::slotted(label[${FLOATING_ATTR}]),
        :host(:not([labelPosition='left'])) ::slotted(label[${FLOATING_FORCED_ATTR}]),
        :host(:not([labelPosition='left'])):host(:focus-within) ::slotted(label) {
            --awf-label-internal-font-color: var(--awf-label-top-position-font-color-inner);
            --awf-label-font-size: var(--awf-label-top-position-font-size-inner);
            --awf-label-font-style: var(--awf-label-top-position-font-style-inner);
            --awf-label-padding-left: var(--awf-label-top-position-padding-left-inner);
            --awf-label-padding-right: var(--awf-label-top-position-padding-right);
            --awf-label-top: var(--awf-label-top-position-top-inner);
        }

        :host(:not([labelPosition='left'])):host(:focus-within) ::slotted(label),
        :host(:not([labelPosition='left'])) ::slotted(label[${FLOATING_FORCED_ATTR}]) {
            --awf-label-internal-font-color: var(--awf-label-focus-font-color-inner);
        }

        :host(:not([labelPosition='left'])):host(:hover) ::slotted(label[${FLOATING_ATTR}]),
        :host(:not([labelPosition='left'])):host(:hover) ::slotted(label[${FLOATING_FORCED_ATTR}]) {
            --awf-label-internal-font-color: var(--awf-label-hover-font-color-inner);
        }

        :host(:not([labelPosition='left'])):host([disabled]) ::slotted(label[${FLOATING_ATTR}]),
        :host(:not([labelPosition='left'])):host([disabled]) ::slotted(label[${FLOATING_FORCED_ATTR}]) {
            --awf-label-internal-font-color: var(--awf-label-disabled-font-color-inner);
        }

        ::slotted(label) {
            box-sizing: border-box;
            color: var(--awf-label-font-color, var(--awf-label-internal-font-color));
            font-size: var(--awf-label-font-size);
            font-style: var(--awf-label-font-style);
            line-height: var(--awf-line-height-inner);
            margin-left: var(--awf-label-margin-left);
            margin-top: var(--awf-label-margin-top);
            margin-bottom: var(--awf-label-margin-bottom);
            padding-left: var(--awf-label-padding-left);
            padding-right: var(--awf-label-padding-right);
            position: relative;
            top: var(--awf-label-top);
            white-space: nowrap;
            width: var(--awf-label-width);
            user-select: none;
        }

        :host([required]) ::slotted(label)::after {
            content: ' *';
            color: var(--awf-label-font-color, var(--awf-label-internal-font-color));
        }
    `];class LabelController{get label(){return this.host.slottedLabel[0]}constructor(host){this.host=host,this._updateLabelPosition=()=>{},this._onFocusIn=()=>{},this._onFocusOut=()=>{},this._onLabelSlotChange=()=>{},this.host.addController(this)}hostConnected(){var _this=this;return(0,asyncToGenerator.Z)((function*(){yield _this.host.updateComplete,_this.updateLabelFloatingAttribute(),_this.updateLabelWidth(),_this._updateLabelPosition=()=>_this.updateLabelFloatingAttribute(),_this._onFocusIn=()=>_this.updateLabelWidthOnTop(),_this._onFocusOut=()=>_this.updateLabelWidth(),_this._onLabelSlotChange=()=>_this.updateLabelFloatingAttribute(),_this.host.field.addEventListener("change",_this._updateLabelPosition),_this.host.addEventListener("focusin",_this._onFocusIn),_this.host.addEventListener("focusout",_this._onFocusOut);const slotLabel=_this.host.shadowRoot?.querySelector("slot[name=label]");slotLabel?.addEventListener("slotchange",_this._onLabelSlotChange)}))()}hostDisconnected(){this.host.field?.removeEventListener("change",this._updateLabelPosition),this.host.removeEventListener("focusin",this._onFocusIn),this.host.removeEventListener("focusout",this._onFocusOut);const slotLabel=this.host.shadowRoot?.querySelector("slot[name=label]");slotLabel?.removeEventListener("slotchange",this._onLabelSlotChange)}hostUpdated(){this.updateLabelWidth()}updateLabelFloatingAttribute(){if(this.host.labelPosition===LabelPosition.Top&&this.label){this.host.value.length>0?this.label?.setAttribute(`${FLOATING_ATTR}`,""):this.label?.removeAttribute(`${FLOATING_ATTR}`)}this.label?this.host.classList.add("has-label"):this.host.classList.remove("has-label")}updateLabelWidth(){this.host.labelPosition===LabelPosition.Top?this.isLabelFloating()?this.updateLabelWidthOnTop():this.updateLabelWidthInside():(this.label?.style.removeProperty("--awf-label-padding-left"),this.label?.style.removeProperty("--awf-label-width"))}isLabelFloating(){return!!this.label&&(this.label.hasAttribute(`${FLOATING_ATTR}`)||this.label.hasAttribute(`${FLOATING_FORCED_ATTR}`))}updateLabelWidthInside(){setTimeout((()=>{if(this.host.labelPosition===LabelPosition.Top){const fieldWidth=this.host.field.getBoundingClientRect().width,fieldPaddingRight=(getComputedStyle(this.host.field).paddingRight.match(/([0-9]+)/g)??["0"])[0],fieldPaddingLeft=(getComputedStyle(this.host.field).paddingLeft.match(/([0-9]+)/g)??["0"])[0],labelMarginLeft=this.host.field.getBoundingClientRect().left-this.host.getBoundingClientRect().left;this.label?.style.setProperty("--awf-label-padding-left",`${fieldPaddingLeft}px`),this.label?.style.setProperty("--awf-label-padding-right",`${fieldPaddingRight}px`),this.label?.style.setProperty("--awf-label-margin-left",`${labelMarginLeft}px`),this.label?.style.setProperty("--awf-label-width",`${fieldWidth}px`)}}))}updateLabelWidthOnTop(){setTimeout((()=>{this.host.labelPosition===LabelPosition.Top&&(this.label?.style.removeProperty("--awf-label-padding-left"),this.label?.style.removeProperty("--awf-label-padding-right"),this.label?.style.removeProperty("--awf-label-margin-left"),this.label?.style.setProperty("--awf-label-width",`${this.host.labelTopWidth}px`))}))}}function listenPropertyChangeWithCallback(element,callbackFn,property="value"){const actual=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(element),property);actual&&Object.defineProperty(element,property,{get:actual.get,set(value){actual.set&&actual.set.call(element,value),callbackFn()}})}function listenPropertyChange(element,property="value",event=new Event("change",{bubbles:!0})){const actual=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(element),property);actual&&Object.defineProperty(element,property,{get:actual.get,set(value){actual.set&&actual.set.call(element,value),element.dispatchEvent(event)}})}var MessageLevel;function when_n(n,o,r){return n?o():null==r?void 0:r()}!function(MessageLevel){MessageLevel.ERROR="error",MessageLevel.WARNING="warning"}(MessageLevel||(MessageLevel={}));const floating_ui_utils_min=Math.min,floating_ui_utils_max=Math.max,round=Math.round,floor=Math.floor,createCoords=v=>({x:v,y:v}),oppositeSideMap={left:"right",right:"left",bottom:"top",top:"bottom"},oppositeAlignmentMap={start:"end",end:"start"};function clamp(start,value,end){return floating_ui_utils_max(start,floating_ui_utils_min(value,end))}function floating_ui_utils_evaluate(value,param){return"function"==typeof value?value(param):value}function floating_ui_utils_getSide(placement){return placement.split("-")[0]}function floating_ui_utils_getAlignment(placement){return placement.split("-")[1]}function floating_ui_utils_getOppositeAxis(axis){return"x"===axis?"y":"x"}function getAxisLength(axis){return"y"===axis?"height":"width"}function floating_ui_utils_getSideAxis(placement){return["top","bottom"].includes(floating_ui_utils_getSide(placement))?"y":"x"}function getAlignmentAxis(placement){return floating_ui_utils_getOppositeAxis(floating_ui_utils_getSideAxis(placement))}function floating_ui_utils_getOppositeAlignmentPlacement(placement){return placement.replace(/start|end/g,(alignment=>oppositeAlignmentMap[alignment]))}function getOppositePlacement(placement){return placement.replace(/left|right|bottom|top/g,(side=>oppositeSideMap[side]))}function floating_ui_utils_getPaddingObject(padding){return"number"!=typeof padding?function expandPaddingObject(padding){return{top:0,right:0,bottom:0,left:0,...padding}}(padding):{top:padding,right:padding,bottom:padding,left:padding}}function floating_ui_utils_rectToClientRect(rect){return{...rect,top:rect.y,left:rect.x,right:rect.x+rect.width,bottom:rect.y+rect.height}}function computeCoordsFromPlacement(_ref,placement,rtl){let{reference,floating}=_ref;const sideAxis=floating_ui_utils_getSideAxis(placement),alignmentAxis=getAlignmentAxis(placement),alignLength=getAxisLength(alignmentAxis),side=floating_ui_utils_getSide(placement),isVertical="y"===sideAxis,commonX=reference.x+reference.width/2-floating.width/2,commonY=reference.y+reference.height/2-floating.height/2,commonAlign=reference[alignLength]/2-floating[alignLength]/2;let coords;switch(side){case"top":coords={x:commonX,y:reference.y-floating.height};break;case"bottom":coords={x:commonX,y:reference.y+reference.height};break;case"right":coords={x:reference.x+reference.width,y:commonY};break;case"left":coords={x:reference.x-floating.width,y:commonY};break;default:coords={x:reference.x,y:reference.y}}switch(floating_ui_utils_getAlignment(placement)){case"start":coords[alignmentAxis]-=commonAlign*(rtl&&isVertical?-1:1);break;case"end":coords[alignmentAxis]+=commonAlign*(rtl&&isVertical?-1:1)}return coords}const computePosition=function(){var _ref2=(0,asyncToGenerator.Z)((function*(reference,floating,config){const{placement="bottom",strategy="absolute",middleware=[],platform}=config,validMiddleware=middleware.filter(Boolean),rtl=yield null==platform.isRTL?void 0:platform.isRTL(floating);let rects=yield platform.getElementRects({reference,floating,strategy}),{x,y}=computeCoordsFromPlacement(rects,placement,rtl),statefulPlacement=placement,middlewareData={},resetCount=0;for(let i=0;i<validMiddleware.length;i++){const{name,fn}=validMiddleware[i],{x:nextX,y:nextY,data,reset}=yield fn({x,y,initialPlacement:placement,placement:statefulPlacement,strategy,middlewareData,rects,platform,elements:{reference,floating}});x=null!=nextX?nextX:x,y=null!=nextY?nextY:y,middlewareData={...middlewareData,[name]:{...middlewareData[name],...data}},reset&&resetCount<=50&&(resetCount++,"object"==typeof reset&&(reset.placement&&(statefulPlacement=reset.placement),reset.rects&&(rects=!0===reset.rects?yield platform.getElementRects({reference,floating,strategy}):reset.rects),({x,y}=computeCoordsFromPlacement(rects,statefulPlacement,rtl))),i=-1)}return{x,y,placement:statefulPlacement,strategy,middlewareData}}));return function computePosition(_x,_x2,_x3){return _ref2.apply(this,arguments)}}();function detectOverflow(_x4,_x5){return _detectOverflow.apply(this,arguments)}function _detectOverflow(){return _detectOverflow=(0,asyncToGenerator.Z)((function*(state,options){var _await$platform$isEle;void 0===options&&(options={});const{x,y,platform,rects,elements,strategy}=state,{boundary="clippingAncestors",rootBoundary="viewport",elementContext="floating",altBoundary=!1,padding=0}=floating_ui_utils_evaluate(options,state),paddingObject=floating_ui_utils_getPaddingObject(padding),element=elements[altBoundary?"floating"===elementContext?"reference":"floating":elementContext],clippingClientRect=floating_ui_utils_rectToClientRect(yield platform.getClippingRect({element:null==(_await$platform$isEle=yield null==platform.isElement?void 0:platform.isElement(element))||_await$platform$isEle?element:element.contextElement||(yield null==platform.getDocumentElement?void 0:platform.getDocumentElement(elements.floating)),boundary,rootBoundary,strategy})),rect="floating"===elementContext?{...rects.floating,x,y}:rects.reference,offsetParent=yield null==platform.getOffsetParent?void 0:platform.getOffsetParent(elements.floating),offsetScale=(yield null==platform.isElement?void 0:platform.isElement(offsetParent))&&(yield null==platform.getScale?void 0:platform.getScale(offsetParent))||{x:1,y:1},elementClientRect=floating_ui_utils_rectToClientRect(platform.convertOffsetParentRelativeRectToViewportRelativeRect?yield platform.convertOffsetParentRelativeRectToViewportRelativeRect({elements,rect,offsetParent,strategy}):rect);return{top:(clippingClientRect.top-elementClientRect.top+paddingObject.top)/offsetScale.y,bottom:(elementClientRect.bottom-clippingClientRect.bottom+paddingObject.bottom)/offsetScale.y,left:(clippingClientRect.left-elementClientRect.left+paddingObject.left)/offsetScale.x,right:(elementClientRect.right-clippingClientRect.right+paddingObject.right)/offsetScale.x}})),_detectOverflow.apply(this,arguments)}function _convertValueToCoords(){return _convertValueToCoords=(0,asyncToGenerator.Z)((function*(state,options){const{placement,platform,elements}=state,rtl=yield null==platform.isRTL?void 0:platform.isRTL(elements.floating),side=floating_ui_utils_getSide(placement),alignment=floating_ui_utils_getAlignment(placement),isVertical="y"===floating_ui_utils_getSideAxis(placement),mainAxisMulti=["left","top"].includes(side)?-1:1,crossAxisMulti=rtl&&isVertical?-1:1,rawValue=floating_ui_utils_evaluate(options,state);let{mainAxis,crossAxis,alignmentAxis}="number"==typeof rawValue?{mainAxis:rawValue,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...rawValue};return alignment&&"number"==typeof alignmentAxis&&(crossAxis="end"===alignment?-1*alignmentAxis:alignmentAxis),isVertical?{x:crossAxis*crossAxisMulti,y:mainAxis*mainAxisMulti}:{x:mainAxis*mainAxisMulti,y:crossAxis*crossAxisMulti}})),_convertValueToCoords.apply(this,arguments)}const offset=function(options){return void 0===options&&(options=0),{name:"offset",options,fn:state=>(0,asyncToGenerator.Z)((function*(){var _middlewareData$offse,_middlewareData$arrow;const{x,y,placement,middlewareData}=state,diffCoords=yield function convertValueToCoords(_x6,_x7){return _convertValueToCoords.apply(this,arguments)}(state,options);return placement===(null==(_middlewareData$offse=middlewareData.offset)?void 0:_middlewareData$offse.placement)&&null!=(_middlewareData$arrow=middlewareData.arrow)&&_middlewareData$arrow.alignmentOffset?{}:{x:x+diffCoords.x,y:y+diffCoords.y,data:{...diffCoords,placement}}}))()}};function getNodeName(node){return isNode(node)?(node.nodeName||"").toLowerCase():"#document"}function getWindow(node){var _node$ownerDocument;return(null==node||null==(_node$ownerDocument=node.ownerDocument)?void 0:_node$ownerDocument.defaultView)||window}function getDocumentElement(node){var _ref;return null==(_ref=(isNode(node)?node.ownerDocument:node.document)||window.document)?void 0:_ref.documentElement}function isNode(value){return value instanceof Node||value instanceof getWindow(value).Node}function isElement(value){return value instanceof Element||value instanceof getWindow(value).Element}function isHTMLElement(value){return value instanceof HTMLElement||value instanceof getWindow(value).HTMLElement}function isShadowRoot(value){return"undefined"!=typeof ShadowRoot&&(value instanceof ShadowRoot||value instanceof getWindow(value).ShadowRoot)}function isOverflowElement(element){const{overflow,overflowX,overflowY,display}=floating_ui_utils_dom_getComputedStyle(element);return/auto|scroll|overlay|hidden|clip/.test(overflow+overflowY+overflowX)&&!["inline","contents"].includes(display)}function isTableElement(element){return["table","td","th"].includes(getNodeName(element))}function isContainingBlock(element){const webkit=isWebKit(),css=floating_ui_utils_dom_getComputedStyle(element);return"none"!==css.transform||"none"!==css.perspective||!!css.containerType&&"normal"!==css.containerType||!webkit&&!!css.backdropFilter&&"none"!==css.backdropFilter||!webkit&&!!css.filter&&"none"!==css.filter||["transform","perspective","filter"].some((value=>(css.willChange||"").includes(value)))||["paint","layout","strict","content"].some((value=>(css.contain||"").includes(value)))}function isWebKit(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function isLastTraversableNode(node){return["html","body","#document"].includes(getNodeName(node))}function floating_ui_utils_dom_getComputedStyle(element){return getWindow(element).getComputedStyle(element)}function getNodeScroll(element){return isElement(element)?{scrollLeft:element.scrollLeft,scrollTop:element.scrollTop}:{scrollLeft:element.pageXOffset,scrollTop:element.pageYOffset}}function getParentNode(node){if("html"===getNodeName(node))return node;const result=node.assignedSlot||node.parentNode||isShadowRoot(node)&&node.host||getDocumentElement(node);return isShadowRoot(result)?result.host:result}function getNearestOverflowAncestor(node){const parentNode=getParentNode(node);return isLastTraversableNode(parentNode)?node.ownerDocument?node.ownerDocument.body:node.body:isHTMLElement(parentNode)&&isOverflowElement(parentNode)?parentNode:getNearestOverflowAncestor(parentNode)}function getOverflowAncestors(node,list,traverseIframes){var _node$ownerDocument2;void 0===list&&(list=[]),void 0===traverseIframes&&(traverseIframes=!0);const scrollableAncestor=getNearestOverflowAncestor(node),isBody=scrollableAncestor===(null==(_node$ownerDocument2=node.ownerDocument)?void 0:_node$ownerDocument2.body),win=getWindow(scrollableAncestor);return isBody?list.concat(win,win.visualViewport||[],isOverflowElement(scrollableAncestor)?scrollableAncestor:[],win.frameElement&&traverseIframes?getOverflowAncestors(win.frameElement):[]):list.concat(scrollableAncestor,getOverflowAncestors(scrollableAncestor,[],traverseIframes))}function getCssDimensions(element){const css=floating_ui_utils_dom_getComputedStyle(element);let width=parseFloat(css.width)||0,height=parseFloat(css.height)||0;const hasOffset=isHTMLElement(element),offsetWidth=hasOffset?element.offsetWidth:width,offsetHeight=hasOffset?element.offsetHeight:height,shouldFallback=round(width)!==offsetWidth||round(height)!==offsetHeight;return shouldFallback&&(width=offsetWidth,height=offsetHeight),{width,height,$:shouldFallback}}function unwrapElement(element){return isElement(element)?element:element.contextElement}function getScale(element){const domElement=unwrapElement(element);if(!isHTMLElement(domElement))return createCoords(1);const rect=domElement.getBoundingClientRect(),{width,height,$}=getCssDimensions(domElement);let x=($?round(rect.width):rect.width)/width,y=($?round(rect.height):rect.height)/height;return x&&Number.isFinite(x)||(x=1),y&&Number.isFinite(y)||(y=1),{x,y}}const noOffsets=createCoords(0);function getVisualOffsets(element){const win=getWindow(element);return isWebKit()&&win.visualViewport?{x:win.visualViewport.offsetLeft,y:win.visualViewport.offsetTop}:noOffsets}function getBoundingClientRect(element,includeScale,isFixedStrategy,offsetParent){void 0===includeScale&&(includeScale=!1),void 0===isFixedStrategy&&(isFixedStrategy=!1);const clientRect=element.getBoundingClientRect(),domElement=unwrapElement(element);let scale=createCoords(1);includeScale&&(offsetParent?isElement(offsetParent)&&(scale=getScale(offsetParent)):scale=getScale(element));const visualOffsets=function shouldAddVisualOffsets(element,isFixed,floatingOffsetParent){return void 0===isFixed&&(isFixed=!1),!(!floatingOffsetParent||isFixed&&floatingOffsetParent!==getWindow(element))&&isFixed}(domElement,isFixedStrategy,offsetParent)?getVisualOffsets(domElement):createCoords(0);let x=(clientRect.left+visualOffsets.x)/scale.x,y=(clientRect.top+visualOffsets.y)/scale.y,width=clientRect.width/scale.x,height=clientRect.height/scale.y;if(domElement){const win=getWindow(domElement),offsetWin=offsetParent&&isElement(offsetParent)?getWindow(offsetParent):offsetParent;let currentWin=win,currentIFrame=currentWin.frameElement;for(;currentIFrame&&offsetParent&&offsetWin!==currentWin;){const iframeScale=getScale(currentIFrame),iframeRect=currentIFrame.getBoundingClientRect(),css=floating_ui_utils_dom_getComputedStyle(currentIFrame),left=iframeRect.left+(currentIFrame.clientLeft+parseFloat(css.paddingLeft))*iframeScale.x,top=iframeRect.top+(currentIFrame.clientTop+parseFloat(css.paddingTop))*iframeScale.y;x*=iframeScale.x,y*=iframeScale.y,width*=iframeScale.x,height*=iframeScale.y,x+=left,y+=top,currentWin=getWindow(currentIFrame),currentIFrame=currentWin.frameElement}}return floating_ui_utils_rectToClientRect({width,height,x,y})}const topLayerSelectors=[":popover-open",":modal"];function isTopLayer(floating){return topLayerSelectors.some((selector=>{try{return floating.matches(selector)}catch(e){return!1}}))}function getWindowScrollBarX(element){return getBoundingClientRect(getDocumentElement(element)).left+getNodeScroll(element).scrollLeft}function getClientRectFromClippingAncestor(element,clippingAncestor,strategy){let rect;if("viewport"===clippingAncestor)rect=function getViewportRect(element,strategy){const win=getWindow(element),html=getDocumentElement(element),visualViewport=win.visualViewport;let width=html.clientWidth,height=html.clientHeight,x=0,y=0;if(visualViewport){width=visualViewport.width,height=visualViewport.height;const visualViewportBased=isWebKit();(!visualViewportBased||visualViewportBased&&"fixed"===strategy)&&(x=visualViewport.offsetLeft,y=visualViewport.offsetTop)}return{width,height,x,y}}(element,strategy);else if("document"===clippingAncestor)rect=function getDocumentRect(element){const html=getDocumentElement(element),scroll=getNodeScroll(element),body=element.ownerDocument.body,width=floating_ui_utils_max(html.scrollWidth,html.clientWidth,body.scrollWidth,body.clientWidth),height=floating_ui_utils_max(html.scrollHeight,html.clientHeight,body.scrollHeight,body.clientHeight);let x=-scroll.scrollLeft+getWindowScrollBarX(element);const y=-scroll.scrollTop;return"rtl"===floating_ui_utils_dom_getComputedStyle(body).direction&&(x+=floating_ui_utils_max(html.clientWidth,body.clientWidth)-width),{width,height,x,y}}(getDocumentElement(element));else if(isElement(clippingAncestor))rect=function getInnerBoundingClientRect(element,strategy){const clientRect=getBoundingClientRect(element,!0,"fixed"===strategy),top=clientRect.top+element.clientTop,left=clientRect.left+element.clientLeft,scale=isHTMLElement(element)?getScale(element):createCoords(1);return{width:element.clientWidth*scale.x,height:element.clientHeight*scale.y,x:left*scale.x,y:top*scale.y}}(clippingAncestor,strategy);else{const visualOffsets=getVisualOffsets(element);rect={...clippingAncestor,x:clippingAncestor.x-visualOffsets.x,y:clippingAncestor.y-visualOffsets.y}}return floating_ui_utils_rectToClientRect(rect)}function hasFixedPositionAncestor(element,stopNode){const parentNode=getParentNode(element);return!(parentNode===stopNode||!isElement(parentNode)||isLastTraversableNode(parentNode))&&("fixed"===floating_ui_utils_dom_getComputedStyle(parentNode).position||hasFixedPositionAncestor(parentNode,stopNode))}function getRectRelativeToOffsetParent(element,offsetParent,strategy){const isOffsetParentAnElement=isHTMLElement(offsetParent),documentElement=getDocumentElement(offsetParent),isFixed="fixed"===strategy,rect=getBoundingClientRect(element,!0,isFixed,offsetParent);let scroll={scrollLeft:0,scrollTop:0};const offsets=createCoords(0);if(isOffsetParentAnElement||!isOffsetParentAnElement&&!isFixed)if(("body"!==getNodeName(offsetParent)||isOverflowElement(documentElement))&&(scroll=getNodeScroll(offsetParent)),isOffsetParentAnElement){const offsetRect=getBoundingClientRect(offsetParent,!0,isFixed,offsetParent);offsets.x=offsetRect.x+offsetParent.clientLeft,offsets.y=offsetRect.y+offsetParent.clientTop}else documentElement&&(offsets.x=getWindowScrollBarX(documentElement));return{x:rect.left+scroll.scrollLeft-offsets.x,y:rect.top+scroll.scrollTop-offsets.y,width:rect.width,height:rect.height}}function getTrueOffsetParent(element,polyfill){return isHTMLElement(element)&&"fixed"!==floating_ui_utils_dom_getComputedStyle(element).position?polyfill?polyfill(element):element.offsetParent:null}function getOffsetParent(element,polyfill){const window=getWindow(element);if(!isHTMLElement(element)||isTopLayer(element))return window;let offsetParent=getTrueOffsetParent(element,polyfill);for(;offsetParent&&isTableElement(offsetParent)&&"static"===floating_ui_utils_dom_getComputedStyle(offsetParent).position;)offsetParent=getTrueOffsetParent(offsetParent,polyfill);return offsetParent&&("html"===getNodeName(offsetParent)||"body"===getNodeName(offsetParent)&&"static"===floating_ui_utils_dom_getComputedStyle(offsetParent).position&&!isContainingBlock(offsetParent))?window:offsetParent||function getContainingBlock(element){let currentNode=getParentNode(element);for(;isHTMLElement(currentNode)&&!isLastTraversableNode(currentNode);){if(isContainingBlock(currentNode))return currentNode;currentNode=getParentNode(currentNode)}return null}(element)||window}const getElementRects=function(){var _ref2=(0,asyncToGenerator.Z)((function*(data){const getOffsetParentFn=this.getOffsetParent||getOffsetParent,getDimensionsFn=this.getDimensions;return{reference:getRectRelativeToOffsetParent(data.reference,yield getOffsetParentFn(data.floating),data.strategy),floating:{x:0,y:0,...yield getDimensionsFn(data.floating)}}}));return function getElementRects(_x){return _ref2.apply(this,arguments)}}();const platform={convertOffsetParentRelativeRectToViewportRelativeRect:function convertOffsetParentRelativeRectToViewportRelativeRect(_ref){let{elements,rect,offsetParent,strategy}=_ref;const isFixed="fixed"===strategy,documentElement=getDocumentElement(offsetParent),topLayer=!!elements&&isTopLayer(elements.floating);if(offsetParent===documentElement||topLayer&&isFixed)return rect;let scroll={scrollLeft:0,scrollTop:0},scale=createCoords(1);const offsets=createCoords(0),isOffsetParentAnElement=isHTMLElement(offsetParent);if((isOffsetParentAnElement||!isOffsetParentAnElement&&!isFixed)&&(("body"!==getNodeName(offsetParent)||isOverflowElement(documentElement))&&(scroll=getNodeScroll(offsetParent)),isHTMLElement(offsetParent))){const offsetRect=getBoundingClientRect(offsetParent);scale=getScale(offsetParent),offsets.x=offsetRect.x+offsetParent.clientLeft,offsets.y=offsetRect.y+offsetParent.clientTop}return{width:rect.width*scale.x,height:rect.height*scale.y,x:rect.x*scale.x-scroll.scrollLeft*scale.x+offsets.x,y:rect.y*scale.y-scroll.scrollTop*scale.y+offsets.y}},getDocumentElement,getClippingRect:function getClippingRect(_ref){let{element,boundary,rootBoundary,strategy}=_ref;const clippingAncestors=[..."clippingAncestors"===boundary?function getClippingElementAncestors(element,cache){const cachedResult=cache.get(element);if(cachedResult)return cachedResult;let result=getOverflowAncestors(element,[],!1).filter((el=>isElement(el)&&"body"!==getNodeName(el))),currentContainingBlockComputedStyle=null;const elementIsFixed="fixed"===floating_ui_utils_dom_getComputedStyle(element).position;let currentNode=elementIsFixed?getParentNode(element):element;for(;isElement(currentNode)&&!isLastTraversableNode(currentNode);){const computedStyle=floating_ui_utils_dom_getComputedStyle(currentNode),currentNodeIsContaining=isContainingBlock(currentNode);currentNodeIsContaining||"fixed"!==computedStyle.position||(currentContainingBlockComputedStyle=null),(elementIsFixed?!currentNodeIsContaining&&!currentContainingBlockComputedStyle:!currentNodeIsContaining&&"static"===computedStyle.position&&currentContainingBlockComputedStyle&&["absolute","fixed"].includes(currentContainingBlockComputedStyle.position)||isOverflowElement(currentNode)&&!currentNodeIsContaining&&hasFixedPositionAncestor(element,currentNode))?result=result.filter((ancestor=>ancestor!==currentNode)):currentContainingBlockComputedStyle=computedStyle,currentNode=getParentNode(currentNode)}return cache.set(element,result),result}(element,this._c):[].concat(boundary),rootBoundary],firstClippingAncestor=clippingAncestors[0],clippingRect=clippingAncestors.reduce(((accRect,clippingAncestor)=>{const rect=getClientRectFromClippingAncestor(element,clippingAncestor,strategy);return accRect.top=floating_ui_utils_max(rect.top,accRect.top),accRect.right=floating_ui_utils_min(rect.right,accRect.right),accRect.bottom=floating_ui_utils_min(rect.bottom,accRect.bottom),accRect.left=floating_ui_utils_max(rect.left,accRect.left),accRect}),getClientRectFromClippingAncestor(element,firstClippingAncestor,strategy));return{width:clippingRect.right-clippingRect.left,height:clippingRect.bottom-clippingRect.top,x:clippingRect.left,y:clippingRect.top}},getOffsetParent,getElementRects,getClientRects:function getClientRects(element){return Array.from(element.getClientRects())},getDimensions:function getDimensions(element){const{width,height}=getCssDimensions(element);return{width,height}},getScale,isElement,isRTL:function isRTL(element){return"rtl"===floating_ui_utils_dom_getComputedStyle(element).direction}};function autoUpdate(reference,floating,update,options){void 0===options&&(options={});const{ancestorScroll=!0,ancestorResize=!0,elementResize="function"==typeof ResizeObserver,layoutShift="function"==typeof IntersectionObserver,animationFrame=!1}=options,referenceEl=unwrapElement(reference),ancestors=ancestorScroll||ancestorResize?[...referenceEl?getOverflowAncestors(referenceEl):[],...getOverflowAncestors(floating)]:[];ancestors.forEach((ancestor=>{ancestorScroll&&ancestor.addEventListener("scroll",update,{passive:!0}),ancestorResize&&ancestor.addEventListener("resize",update)}));const cleanupIo=referenceEl&&layoutShift?function observeMove(element,onMove){let timeoutId,io=null;const root=getDocumentElement(element);function cleanup(){var _io;clearTimeout(timeoutId),null==(_io=io)||_io.disconnect(),io=null}return function refresh(skip,threshold){void 0===skip&&(skip=!1),void 0===threshold&&(threshold=1),cleanup();const{left,top,width,height}=element.getBoundingClientRect();if(skip||onMove(),!width||!height)return;const options={rootMargin:-floor(top)+"px "+-floor(root.clientWidth-(left+width))+"px "+-floor(root.clientHeight-(top+height))+"px "+-floor(left)+"px",threshold:floating_ui_utils_max(0,floating_ui_utils_min(1,threshold))||1};let isFirstUpdate=!0;function handleObserve(entries){const ratio=entries[0].intersectionRatio;if(ratio!==threshold){if(!isFirstUpdate)return refresh();ratio?refresh(!1,ratio):timeoutId=setTimeout((()=>{refresh(!1,1e-7)}),100)}isFirstUpdate=!1}try{io=new IntersectionObserver(handleObserve,{...options,root:root.ownerDocument})}catch(e){io=new IntersectionObserver(handleObserve,options)}io.observe(element)}(!0),cleanup}(referenceEl,update):null;let frameId,reobserveFrame=-1,resizeObserver=null;elementResize&&(resizeObserver=new ResizeObserver((_ref=>{let[firstEntry]=_ref;firstEntry&&firstEntry.target===referenceEl&&resizeObserver&&(resizeObserver.unobserve(floating),cancelAnimationFrame(reobserveFrame),reobserveFrame=requestAnimationFrame((()=>{var _resizeObserver;null==(_resizeObserver=resizeObserver)||_resizeObserver.observe(floating)}))),update()})),referenceEl&&!animationFrame&&resizeObserver.observe(referenceEl),resizeObserver.observe(floating));let prevRefRect=animationFrame?getBoundingClientRect(reference):null;return animationFrame&&function frameLoop(){const nextRefRect=getBoundingClientRect(reference);!prevRefRect||nextRefRect.x===prevRefRect.x&&nextRefRect.y===prevRefRect.y&&nextRefRect.width===prevRefRect.width&&nextRefRect.height===prevRefRect.height||update();prevRefRect=nextRefRect,frameId=requestAnimationFrame(frameLoop)}(),update(),()=>{var _resizeObserver2;ancestors.forEach((ancestor=>{ancestorScroll&&ancestor.removeEventListener("scroll",update),ancestorResize&&ancestor.removeEventListener("resize",update)})),null==cleanupIo||cleanupIo(),null==(_resizeObserver2=resizeObserver)||_resizeObserver2.disconnect(),resizeObserver=null,animationFrame&&cancelAnimationFrame(frameId)}}const floating_ui_dom_shift=function(options){return void 0===options&&(options={}),{name:"shift",options,fn:state=>(0,asyncToGenerator.Z)((function*(){const{x,y,placement}=state,{mainAxis:checkMainAxis=!0,crossAxis:checkCrossAxis=!1,limiter={fn:_ref=>{let{x,y}=_ref;return{x,y}}},...detectOverflowOptions}=floating_ui_utils_evaluate(options,state),coords={x,y},overflow=yield detectOverflow(state,detectOverflowOptions),crossAxis=floating_ui_utils_getSideAxis(floating_ui_utils_getSide(placement)),mainAxis=floating_ui_utils_getOppositeAxis(crossAxis);let mainAxisCoord=coords[mainAxis],crossAxisCoord=coords[crossAxis];if(checkMainAxis){const maxSide="y"===mainAxis?"bottom":"right";mainAxisCoord=clamp(mainAxisCoord+overflow["y"===mainAxis?"top":"left"],mainAxisCoord,mainAxisCoord-overflow[maxSide])}if(checkCrossAxis){const maxSide="y"===crossAxis?"bottom":"right";crossAxisCoord=clamp(crossAxisCoord+overflow["y"===crossAxis?"top":"left"],crossAxisCoord,crossAxisCoord-overflow[maxSide])}const limitedCoords=limiter.fn({...state,[mainAxis]:mainAxisCoord,[crossAxis]:crossAxisCoord});return{...limitedCoords,data:{x:limitedCoords.x-x,y:limitedCoords.y-y}}}))()}},floating_ui_dom_flip=function(options){return void 0===options&&(options={}),{name:"flip",options,fn:state=>(0,asyncToGenerator.Z)((function*(){var _middlewareData$arrow,_middlewareData$flip;const{placement,middlewareData,rects,initialPlacement,platform,elements}=state,{mainAxis:checkMainAxis=!0,crossAxis:checkCrossAxis=!0,fallbackPlacements:specifiedFallbackPlacements,fallbackStrategy="bestFit",fallbackAxisSideDirection="none",flipAlignment=!0,...detectOverflowOptions}=floating_ui_utils_evaluate(options,state);if(null!=(_middlewareData$arrow=middlewareData.arrow)&&_middlewareData$arrow.alignmentOffset)return{};const side=floating_ui_utils_getSide(placement),isBasePlacement=floating_ui_utils_getSide(initialPlacement)===initialPlacement,rtl=yield null==platform.isRTL?void 0:platform.isRTL(elements.floating),fallbackPlacements=specifiedFallbackPlacements||(isBasePlacement||!flipAlignment?[getOppositePlacement(initialPlacement)]:function getExpandedPlacements(placement){const oppositePlacement=getOppositePlacement(placement);return[floating_ui_utils_getOppositeAlignmentPlacement(placement),oppositePlacement,floating_ui_utils_getOppositeAlignmentPlacement(oppositePlacement)]}(initialPlacement));specifiedFallbackPlacements||"none"===fallbackAxisSideDirection||fallbackPlacements.push(...function getOppositeAxisPlacements(placement,flipAlignment,direction,rtl){const alignment=floating_ui_utils_getAlignment(placement);let list=function getSideList(side,isStart,rtl){const lr=["left","right"],rl=["right","left"],tb=["top","bottom"],bt=["bottom","top"];switch(side){case"top":case"bottom":return rtl?isStart?rl:lr:isStart?lr:rl;case"left":case"right":return isStart?tb:bt;default:return[]}}(floating_ui_utils_getSide(placement),"start"===direction,rtl);return alignment&&(list=list.map((side=>side+"-"+alignment)),flipAlignment&&(list=list.concat(list.map(floating_ui_utils_getOppositeAlignmentPlacement)))),list}(initialPlacement,flipAlignment,fallbackAxisSideDirection,rtl));const placements=[initialPlacement,...fallbackPlacements],overflow=yield detectOverflow(state,detectOverflowOptions),overflows=[];let overflowsData=(null==(_middlewareData$flip=middlewareData.flip)?void 0:_middlewareData$flip.overflows)||[];if(checkMainAxis&&overflows.push(overflow[side]),checkCrossAxis){const sides=function floating_ui_utils_getAlignmentSides(placement,rects,rtl){void 0===rtl&&(rtl=!1);const alignment=floating_ui_utils_getAlignment(placement),alignmentAxis=getAlignmentAxis(placement),length=getAxisLength(alignmentAxis);let mainAlignmentSide="x"===alignmentAxis?alignment===(rtl?"end":"start")?"right":"left":"start"===alignment?"bottom":"top";return rects.reference[length]>rects.floating[length]&&(mainAlignmentSide=getOppositePlacement(mainAlignmentSide)),[mainAlignmentSide,getOppositePlacement(mainAlignmentSide)]}(placement,rects,rtl);overflows.push(overflow[sides[0]],overflow[sides[1]])}if(overflowsData=[...overflowsData,{placement,overflows}],!overflows.every((side=>side<=0))){var _middlewareData$flip2,_overflowsData$filter;const nextIndex=((null==(_middlewareData$flip2=middlewareData.flip)?void 0:_middlewareData$flip2.index)||0)+1,nextPlacement=placements[nextIndex];if(nextPlacement)return{data:{index:nextIndex,overflows:overflowsData},reset:{placement:nextPlacement}};let resetPlacement=null==(_overflowsData$filter=overflowsData.filter((d=>d.overflows[0]<=0)).sort(((a,b)=>a.overflows[1]-b.overflows[1]))[0])?void 0:_overflowsData$filter.placement;if(!resetPlacement)switch(fallbackStrategy){case"bestFit":{var _overflowsData$map$so;const placement=null==(_overflowsData$map$so=overflowsData.map((d=>[d.placement,d.overflows.filter((overflow=>overflow>0)).reduce(((acc,overflow)=>acc+overflow),0)])).sort(((a,b)=>a[1]-b[1]))[0])?void 0:_overflowsData$map$so[0];placement&&(resetPlacement=placement);break}case"initialPlacement":resetPlacement=initialPlacement}if(placement!==resetPlacement)return{reset:{placement:resetPlacement}}}return{}}))()}},floating_ui_dom_size=function(options){return void 0===options&&(options={}),{name:"size",options,fn:state=>(0,asyncToGenerator.Z)((function*(){const{placement,rects,platform,elements}=state,{apply=()=>{},...detectOverflowOptions}=floating_ui_utils_evaluate(options,state),overflow=yield detectOverflow(state,detectOverflowOptions),side=floating_ui_utils_getSide(placement),alignment=floating_ui_utils_getAlignment(placement),isYAxis="y"===floating_ui_utils_getSideAxis(placement),{width,height}=rects.floating;let heightSide,widthSide;"top"===side||"bottom"===side?(heightSide=side,widthSide=alignment===((yield null==platform.isRTL?void 0:platform.isRTL(elements.floating))?"start":"end")?"left":"right"):(widthSide=side,heightSide="end"===alignment?"top":"bottom");const overflowAvailableHeight=height-overflow[heightSide],overflowAvailableWidth=width-overflow[widthSide],noShift=!state.middlewareData.shift;let availableHeight=overflowAvailableHeight,availableWidth=overflowAvailableWidth;if(isYAxis){const maximumClippingWidth=width-overflow.left-overflow.right;availableWidth=alignment||noShift?floating_ui_utils_min(overflowAvailableWidth,maximumClippingWidth):maximumClippingWidth}else{const maximumClippingHeight=height-overflow.top-overflow.bottom;availableHeight=alignment||noShift?floating_ui_utils_min(overflowAvailableHeight,maximumClippingHeight):maximumClippingHeight}if(noShift&&!alignment){const xMin=floating_ui_utils_max(overflow.left,0),xMax=floating_ui_utils_max(overflow.right,0),yMin=floating_ui_utils_max(overflow.top,0),yMax=floating_ui_utils_max(overflow.bottom,0);isYAxis?availableWidth=width-2*(0!==xMin||0!==xMax?xMin+xMax:floating_ui_utils_max(overflow.left,overflow.right)):availableHeight=height-2*(0!==yMin||0!==yMax?yMin+yMax:floating_ui_utils_max(overflow.top,overflow.bottom))}yield apply({...state,availableWidth,availableHeight});const nextDimensions=yield platform.getDimensions(elements.floating);return width!==nextDimensions.width||height!==nextDimensions.height?{reset:{rects:!0}}:{}}))()}},floating_ui_dom_arrow=options=>({name:"arrow",options,fn:state=>(0,asyncToGenerator.Z)((function*(){const{x,y,placement,rects,platform,elements,middlewareData}=state,{element,padding=0}=floating_ui_utils_evaluate(options,state)||{};if(null==element)return{};const paddingObject=floating_ui_utils_getPaddingObject(padding),coords={x,y},axis=getAlignmentAxis(placement),length=getAxisLength(axis),arrowDimensions=yield platform.getDimensions(element),isYAxis="y"===axis,minProp=isYAxis?"top":"left",maxProp=isYAxis?"bottom":"right",clientProp=isYAxis?"clientHeight":"clientWidth",endDiff=rects.reference[length]+rects.reference[axis]-coords[axis]-rects.floating[length],startDiff=coords[axis]-rects.reference[axis],arrowOffsetParent=yield null==platform.getOffsetParent?void 0:platform.getOffsetParent(element);let clientSize=arrowOffsetParent?arrowOffsetParent[clientProp]:0;clientSize&&(yield null==platform.isElement?void 0:platform.isElement(arrowOffsetParent))||(clientSize=elements.floating[clientProp]||rects.floating[length]);const centerToReference=endDiff/2-startDiff/2,largestPossiblePadding=clientSize/2-arrowDimensions[length]/2-1,minPadding=floating_ui_utils_min(paddingObject[minProp],largestPossiblePadding),maxPadding=floating_ui_utils_min(paddingObject[maxProp],largestPossiblePadding),min$1=minPadding,max=clientSize-arrowDimensions[length]-maxPadding,center=clientSize/2-arrowDimensions[length]/2+centerToReference,offset=clamp(min$1,center,max),shouldAddOffset=!middlewareData.arrow&&null!=floating_ui_utils_getAlignment(placement)&&center!==offset&&rects.reference[length]/2-(center<min$1?minPadding:maxPadding)-arrowDimensions[length]/2<0,alignmentOffset=shouldAddOffset?center<min$1?center-min$1:center-max:0;return{[axis]:coords[axis]+alignmentOffset,data:{[axis]:offset,centerOffset:center-offset-alignmentOffset,...shouldAddOffset&&{alignmentOffset}},reset:shouldAddOffset}}))()});class FloatingElementController{constructor(host){this.host=host}autoUpdatePosition(){return this.host.refElement?autoUpdate(this.host.refElement,this.host.floatingElement,this.updatePosition.bind(this)):()=>{}}updatePosition(){var _this=this;return(0,asyncToGenerator.Z)((function*(){if(!_this.host.refElement)return;const host=_this.host;let middlewareConfig=[offset(_this.host.offset),floating_ui_dom_shift({padding:_this.host.floatingElementPadding}),floating_ui_dom_size({apply({availableHeight}){host.floatingElement.style.setProperty("--awf-checklist-max-height",`${Math.max(100,availableHeight-2)}px`)}})];if(["","auto"].includes(_this.host.placement)&&middlewareConfig.push(floating_ui_dom_flip()),_this.host.tipElement&&(middlewareConfig=[...middlewareConfig,floating_ui_dom_arrow({element:_this.host.tipElement,padding:1})]),_this.host.refElement){const{x,y,placement,middlewareData}=yield((reference,floating,options)=>{const cache=new Map,mergedOptions={platform,...options},platformWithCache={...mergedOptions.platform,_c:cache};return computePosition(reference,floating,{...mergedOptions,platform:platformWithCache})})(_this.host.refElement,_this.host.floatingElement,{placement:"auto"!==_this.host.placement?_this.host.placement:_this.host.defaultPlacement,middleware:middlewareConfig});_this.position(_this.host.floatingElement,x,y),_this.host.tipElement&&_this.positionTip(_this.host.tipElement,placement,middlewareData.arrow?.x,middlewareData.arrow?.y)}}))()}position(element,x,y){Object.assign(element.style,{left:`${x}px`,top:`${y}px`})}positionTip(tip,placement,x,y){const arrowPlacementSide={top:"bottom",right:"left",bottom:"top",left:"right"}[placement.split("-")[0]];if(!arrowPlacementSide)return;const arrowOffset=tip.offsetWidth/2*-1;Object.assign(tip.style,{left:null!=x?`${x}px`:"",top:null!=y?`${y}px`:"",right:"",bottom:"",[arrowPlacementSide]:`${arrowOffset}px`}),tip.className=`awf-tip-shadow-${arrowPlacementSide}`}}const TOOLTIP_STYLES=lit.iv`
    
    :host {
        background-color: var(--awf-tooltip-background-color-inner);
        will-change: filter;
        filter: drop-shadow(0 0 1px var(--at-dark-gray));
        color: var(--awf-tooltip-text-color-inner);
        display: block;
        font-size: 12px;
        height: 20px;
        line-height: 20px;
        opacity: 0;
        padding: 0 8px;
        position: absolute;
        text-align: left;
        visibility: hidden;
        width: max-content;
        white-space: nowrap;
        z-index: var(--awf-elevation-z5);

        --awf-tooltip-rotation-inner: 45deg;
    }

    :host([warning]) {
        filter: none;
        --awf-tooltip-background-color-inner: var(--at-yellow);
        --awf-tooltip-border-color-inner: var(--at-yellow);
        --awf-tooltip-text-color-inner: var(--at-dark-navy);
    }

    :host([error]) {
        filter: none;
        --awf-tooltip-background-color-inner: var(--at-red);
        --awf-tooltip-border-color-inner: var(--at-red);
        --awf-tooltip-text-color-inner: var(--at-white);
    }

    :host([open]) {
        opacity: 1;
        transition: opacity 0.5s ease-in-out;
        visibility: visible;
    }

    .awf-tooltip-message {
        margin: 0;
        z-index: 100;
        position: relative;
    }

    .awf-tip-shadow-top {
        --awf-tooltip-rotation-inner: 45deg;
    }

    .awf-tip-shadow-bottom {
        --awf-tooltip-rotation-inner: 225deg;
    }

    .awf-tip-shadow-left {
        --awf-tooltip-rotation-inner: 315deg;
    }

    .awf-tip-shadow-right {
        --awf-tooltip-rotation-inner: 135deg;
    }

    #tip {
        background-color: var(--awf-tooltip-background-color-inner);
        height: 8px;
        position: absolute;
        transform: rotate(var(--awf-tooltip-rotation-inner));
        width: 8px;
        z-index: var(--awf-elevation-z1);
    }
`,TOOLTIP_CSS_VARIABLES=lit.iv`
    :host {
        --awf-tooltip-border-color-inner: var(--awf-tooltip-border-color, var(--at-gray));
        --awf-tooltip-background-color-inner: var(--awf-tooltip-background-color, var(--at-white));
        --awf-tooltip-text-color-inner: var(--awf-tooltip-text-color, var(--at-dark-gray));
    }
`;let AwfTooltip=class AwfTooltip extends lit.oi{constructor(){super(...arguments),this.open=!1,this.tip=!1,this.disabled=!1,this.error=!1,this.warning=!1,this.appendToBody=!1,this.message="",this.offset=8,this.manualToggle=!1,this.defaultPlacement="top",this.floatingElementPadding=5,this.controller=new FloatingElementController(this),this._detectTouch=this.detectedAsTouchDevice.bind(this),this._showTooltip=this.showTooltip.bind(this),this._hideTooltip=this.hideTooltip.bind(this),this.touchDevice=!1}get floatingElement(){return this}connectedCallback(){super.connectedCallback(),this.formerParent||(this.formerParent=this.parentNode)}disconnectedCallback(){super.disconnectedCallback(),this.appendToBody&&this.remove()}detectedAsTouchDevice(){this.touchDevice=!0}showTooltip(){!this.textContent&&!this.message||this.disabled||this.touchDevice||(this.cleanUp=this.controller.autoUpdatePosition(),this.open=!0)}hideTooltip(){this.open=!1,this.cleanUp&&this.cleanUp()}render(){return lit.dy`<p class='awf-tooltip-message'>${this.message}</p><slot></slot>${when_n(this.tip,this.createTip)}`}updated(_changedProperties){var _this=this;return(0,asyncToGenerator.Z)((function*(){_changedProperties.has("trigger")&&_this.triggerUpdated(_changedProperties.get("trigger")),_changedProperties.has("open")&&_this.openUpdated(),_changedProperties.has("appendToBody")&&_this.moveTooltip()}))()}triggerUpdated(oldTrigger){if(this.trigger&&(this.refElement=this.formerParent?.querySelector(`#${this.trigger}`),this.refElement&&!this.manualToggle&&(this.refElement.addEventListener("touchstart",this._detectTouch),this.refElement.addEventListener("mouseenter",this._showTooltip),this.refElement.addEventListener("mouseleave",this._hideTooltip))),oldTrigger){const oldRefElement=this.formerParent?.querySelector(`#${oldTrigger}`);oldRefElement&&(oldRefElement.removeEventListener("touchstart",this._detectTouch),oldRefElement.removeEventListener("mouseenter",this._showTooltip),oldRefElement.removeEventListener("mouseleave",this._hideTooltip))}}openUpdated(){this.open?this.showTooltip():this.hideTooltip()}createTip(){return lit.dy`<div id="tip"></div>`}moveTooltip(){this.remove(),this.appendToBody?document.body.appendChild(this):this.formerParent&&this.formerParent.appendChild(this)}};AwfTooltip.styles=[COMMON_STYLES,TOOLTIP_CSS_VARIABLES,TOOLTIP_STYLES],(0,tslib_es6.gn)([(0,decorators.Cb)({type:Boolean,reflect:!0})],AwfTooltip.prototype,"open",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)({type:Boolean})],AwfTooltip.prototype,"tip",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)({type:Boolean})],AwfTooltip.prototype,"disabled",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)({type:Boolean,reflect:!0})],AwfTooltip.prototype,"error",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)({type:Boolean,reflect:!0})],AwfTooltip.prototype,"warning",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)({type:Boolean})],AwfTooltip.prototype,"appendToBody",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)()],AwfTooltip.prototype,"placement",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)()],AwfTooltip.prototype,"message",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)()],AwfTooltip.prototype,"trigger",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)({type:Number})],AwfTooltip.prototype,"offset",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)({type:Boolean})],AwfTooltip.prototype,"manualToggle",void 0),(0,tslib_es6.gn)([(0,decorators.IO)("#tip")],AwfTooltip.prototype,"tipElement",void 0),AwfTooltip=(0,tslib_es6.gn)([(0,awf_custom_element.M)("awf-tooltip",!0)],AwfTooltip);const INPUT_CSS_VARIABLES=lit.iv`
    :host {
        --awf-input-border-color-inner: var(--awf-input-border-color, var(--awf-input-rest-border-color-inner));
        --awf-input-font-color-inner: var(--awf-input-font-color, var(--awf-input-rest-font-color-inner));
        --awf-input-font-size-inner: var(--awf-input-font-size, 14px);
        --awf-input-height-inner: var(--awf-input-height, 32px);
        --awf-input-icon-size-inner: var(--awf-input-icon-size, 24px);
        --awf-input-padding-inner: var(--awf-input-padding, 6px 8px 8px 8px);
        --awf-input-placeholder-color-inner: var(--awf-input-placeholder-color, var(--awf-input-rest-placeholder-font-color-inner));
        --awf-input-prefix-text-padding-inner: var(--awf-input-prefix-text-padding, 5px 0 6px 4px);
        --awf-input-suffix-text-padding-inner: var(--awf-input-suffix-text-padding, 3px 4px 6px 0);
        --awf-input-vertical-align-inner: var(--awf-input-vertical-align, -4px);
        --awf-input-width-inner: var(--awf-input-width, 120px);

        /* Input Common Colors */
        --awf-input-background-color-inner: var(--awf-input-background-color, var(--awf-state-rest-background));
        /* --awf-input-label-font-color-inner: var(--awf-input-label-font-color, var(--at-dark-navy)); */
        --awf-input-icon-disabled-color-inner: var(--awf-input-icon-disabled-color, var(--at-gray));
        --awf-input-prefix-suffix-text-color-inner: var(--awf-input-prefix-suffix-text-color, var(--at-gray));

        /* State-Related Input Colors */
        --awf-input-disabled-border-color-inner: var(--awf-input-disabled-border-color, var(--at-gray-soft));
        --awf-input-disabled-font-color-inner: var(--awf-input-disabled-font-color, var(--awf-state-disabled-foreground));
        --awf-input-disabled-placeholder-font-color-inner: var(--awf-input-disabled-placeholder-font-color, var(--awf-state-disabled-foreground));

        --awf-input-focus-border-color-inner: var(--awf-input-focus-border-color, var(--awf-state-focused-border));
        --awf-input-focus-font-color-inner: var(--awf-input-focus-font-color, var(--at-dark-navy));
        --awf-input-focus-placeholder-font-color-inner: var(--awf-input-focus-placeholder-font-color, var(--at-gray));

        --awf-input-hover-border-color-inner: var(--awf-input-hover-border-color, var(--at-blue-shade));
        --awf-input-hover-font-color-inner: var(--awf-input-hover-font-color, var(--at-dark-navy));
        --awf-input-hover-placeholder-font-color-inner: var(--awf-input-hover-placeholder-font-color, var(--at-gray));

        --awf-input-rest-border-color-inner: var(--awf-input-rest-border-color, var(--awf-state-rest-border));
        --awf-input-rest-font-color-inner: var(--awf-input-rest-font-color, var(--awf-state-rest-foreground));
        --awf-input-rest-placeholder-font-color-inner: var(--awf-input-rest-placeholder-font-color, var(--at-gray));


        /* Validation */
        --awf-input-error-background-color-inner: var(--awf-input-error-background-color, var(--awf-validation-error-background-color));
        --awf-input-error-focus-background-color-inner: var(--awf-input-error-focus-background-color, var(--awf-validation-error-focus-background-color));
        --awf-input-error-border-color-inner: var(--awf-input-error-border-color, var(--awf-validation-error-border-color));
        --awf-input-error-font-color-inner: var(--awf-input-error-font-color, var(--awf-validation-error-font-color));
        --awf-input-error-message-font-color-inner: var(--awf-input-error-message-font-color, var(--awf-validation-error-message-font-color));
        --awf-input-error-placeholder-font-color-inner: var(--awf-input-error-placeholder-font-color, var(--at-gray-3q-dark));
        --awf-input-errors-height-inner: var(--awf-input-errors-height, 16px);

        --awf-input-warning-background-color-inner: var(--awf-input-warning-background-color, var(--awf-validation-warning-background-color));
        --awf-input-warning-focus-background-color-inner: var(--awf-input-warning-focus-background-color, var(--awf-validation-warning-focus-background-color));
        --awf-input-warning-border-color-inner: var(--awf-input-warning-border-color, var(--awf-validation-warning-border-color));
        --awf-input-warning-font-color-inner: var(--awf-input-warning-font-color, var(--at-dark-navy));
        --awf-input-warning-placeholder-font-color-inner: var(--awf-input-warning-placeholder-font-color, var(--at-gray-3q-dark));
    }
`,INPUT_STYLES=lit.iv`
    :host {
        --awf-icon-size: var(--awf-input-icon-size-inner);

        display: inline-flex;
        min-width: var(--awf-input-width-inner);
        box-sizing: border-box;
        font-size: var(--awf-input-font-size-inner);
    }

    :host(:not([disabled]):not([warning]):not([error]):not([readonly]):hover) {
        --awf-input-border-color-inner: var(--awf-input-hover-border-color-inner);
        --awf-input-font-color-inner: var(--awf-input-hover-font-color-inner);
        --awf-input-placeholder-color-inner: var(--awf-input-hover-placeholder-font-color-inner);
    }

    :host(:not([readonly])[focused]) {
        --awf-input-border-color-inner: var(--awf-input-focus-border-color-inner);
        --awf-input-font-color-inner: var(--awf-input-focus-font-color-inner);
        --awf-input-placeholder-color-inner: var(--awf-input-focus-placeholder-font-color-inner);
    }

    :host(:not([readonly])[error]:focus-within) {
        --awf-input-border-color-inner: var(--awf-input-error-border-color-inner);
        --awf-input-font-color-inner: var(--awf-input-error-font-color-inner);
        --awf-input-background-color: var(--awf-input-error-focus-background-color-inner);
        --awf-input-placeholder-color-inner: var(--awf-input-error-placeholder-font-color-inner);
    }

    :host(:not([readonly])[warning]:focus-within) {
        --awf-input-border-color-inner: var(--awf-input-warning-border-color-inner);
        --awf-input-font-color-inner: var(--awf-input-warning-font-color-inner);
        --awf-input-background-color: var(--awf-input-warning-focus-background-color-inner);
        --awf-input-placeholder-color-inner: var(--awf-input-warning-placeholder-font-color-inner);
    }

    :host([disabled]) {
        --awf-icon-color: var(--awf-input-icon-disabled-color-inner);
        --awf-input-border-color-inner: var(--awf-input-disabled-border-color-inner);
        --awf-input-font-color-inner: var(--awf-input-disabled-font-color-inner);
        --awf-input-placeholder-color-inner: var(--awf-input-disabled-placeholder-font-color-inner);

        cursor: not-allowed;
    }

    :host([warning]) {
        --awf-input-prefix-suffix-text-color: var(--at-dark-navy);
        --awf-input-background-color: var(--awf-input-warning-background-color-inner);
        --awf-input-border-color-inner: var(--awf-input-warning-border-color-inner);
        --awf-input-font-color-inner: var(--awf-input-warning-font-color-inner);
        --awf-input-placeholder-font-color: var(--at-gray-3q-dark);
        --awf-input-placeholder-color-inner: var(--awf-input-warning-placeholder-font-color-inner);
    }

    :host([warning][disabled]) {
        --awf-input-font-color-inner: var(--awf-input-disabled-font-color-inner);
    }

    :host([error]) {
        --awf-input-prefix-suffix-text-color: var(--at-dark-navy);
        --awf-input-background-color: var(--awf-input-error-background-color-inner);
        --awf-input-border-color-inner: var(--awf-input-error-border-color-inner);
        --awf-input-font-color-inner: var(--awf-input-error-font-color-inner);
        --awf-input-placeholder-font-color: var(--at-gray-3q-dark);
        --awf-input-placeholder-color-inner: var(--awf-input-error-placeholder-font-color-inner);
    }

    :host([error][disabled]) {
        --awf-input-font-color-inner: var(--awf-input-disabled-font-color-inner);
    }

    div#tooltipTrigger {
        width:100%;
        display: inline-flex;
    }

    :host(:not([labelPosition=left])) div#tooltipTrigger {
        flex-direction: column;
        display: inline-block;
    }

    :host(:not([labelPosition=left]).has-icon-prefix),
    :host([labelPosition=left]:not(.has-label).has-icon-prefix) {
        vertical-align: var(--awf-input-vertical-align-inner);
    }

    .alignment {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
    }

    .colored-box {
        align-items: flex-start;
        background-color: var(--awf-input-background-color-inner);
        border: 1px solid var(--awf-input-border-color-inner);
        box-sizing: border-box;
        display: grid;
        grid-template-columns: auto 1fr auto;
        grid-template-areas: "prefix input suffix";
        height: var(--awf-input-height-inner);
        position: relative;
    }

    .colored-box ::slotted([slot='prefix']) {
        /* order has to be the first parameter to be taken into account correctly */
        order: 1;
        color: var(--awf-input-prefix-suffix-text-color-inner);
        white-space: nowrap;
        grid-area: prefix;
    }

    .colored-box ::slotted([slot='suffix']) {
        /* order has to be the first parameter to be taken into account correctly */
        order: 3;
        color: var(--awf-input-prefix-suffix-text-color-inner);
        white-space: nowrap;
        grid-area: suffix;
    }

    .colored-box ::slotted(awf-icon[slot='prefix']) {
        padding: 3px 0 3px 4px;
    }

    .colored-box ::slotted(awf-icon[slot='suffix']) {
        padding: 3px 4px 3px 0;
    }

    .colored-box ::slotted(span[slot='suffix']),
    .colored-box ::slotted(div[slot='suffix']) {
        min-height: var(--awf-line-height-inner);
        padding:  var(--awf-input-suffix-text-padding-inner);
    }

    .colored-box ::slotted(span[slot='prefix']),
    .colored-box ::slotted(div[slot='prefix']) {
        min-height: var(--awf-line-height-inner);
        padding:  var(--awf-input-prefix-text-padding-inner);
    }

    /* Actual Input */
    .colored-box ::slotted(input) {
        order: 2; // Requires to be the first parameter to be taken into account correctly
        font-family: inherit; // Required to override User Agent settings
    }

    ::slotted(input) {
        background-color: transparent;
        border: none;
        box-sizing: border-box;
        color: var(--awf-input-font-color-inner);
        font-size: var(--awf-input-font-size-inner);
        height: var(--awf-input-height-inner);
        outline: none;
        padding: var(--awf-input-padding-inner);
        position: relative;
        text-overflow: ellipsis;
        width: var(--awf-input-width-inner);
    }

    ::slotted(input[disabled]) {
        cursor: not-allowed;
    }

    /* Placeholder */
    ::slotted(input)::placeholder {
        color: var(--awf-input-placeholder-color-inner);
        font-size: var(--awf-input-font-size-inner);
        font-style: italic;
        padding-left: 1px;
        text-align: left;
        text-shadow: none;
    }

    :host([labelPosition='top']):not(:focus-within) ::slotted(input)::placeholder {
        visibility: hidden;
    }

    /* Errors Slot */
    .errors {
        height: var(--awf-input-errors-height-inner);
        overflow: hidden;
        padding: 0 5px 0 2px;
    }

    ::slotted([error]) {
        color: var(--awf-input-error-message-font-color-inner);
        display: none;
    }

    ::slotted([slot='error']),
    .internalError {
        color: var(--awf-input-error-message-font-color-inner);
        line-height: 16px;
    }

    /* first-child not working? */
    ::slotted([error]:last-child) {
        display: unset;
    }

    /* Start: Fix for Safari incompatibility on placeholder management. */
    :host > input.slotted-input::placeholder {
        --awf-icon-size: var(--awf-input-icon-size-inner);
        --awf-input-border-color-inner: var(--awf-input-rest-border-color-inner);
        --awf-input-font-color-inner: var(--awf-input-rest-font-color-inner);
        --awf-input-placeholder-color-inner: var(--awf-input-rest-placeholder-font-color-inner);
    }

    :host(:not([disabled]):not([warning]):not([error]):not([readonly]):hover) > input.slotted-input::placeholder {
        --awf-input-border-color-inner: var(--awf-input-hover-border-color-inner);
        --awf-input-font-color-inner: var(--awf-input-hover-font-color-inner);
        --awf-input-placeholder-color-inner: var(--awf-input-hover-placeholder-font-color-inner);
    }

    :host(:not([readonly]):focus-within) > input.slotted-input::placeholder {
        --awf-input-border-color-inner: var(--awf-input-focus-border-color-inner);
        --awf-input-font-color-inner: var(--awf-input-focus-font-color-inner);
        --awf-input-placeholder-color-inner: var(--awf-input-focus-placeholder-font-color-inner);
    }

    :host(:not([readonly])[error]:focus-within) > input.slotted-input::placeholder {
        --awf-input-border-color-inner: var(--awf-input-error-border-color-inner);
        --awf-input-font-color-inner: var(--awf-input-error-font-color-inner);
        --awf-input-background-color: var(--awf-input-error-focus-background-color-inner);
        --awf-input-placeholder-color-inner: var(--awf-input-error-placeholder-font-color-inner);
    }

    :host(:not([readonly])[warning]:focus-within) > input.slotted-input::placeholder {
        --awf-input-border-color-inner: var(--awf-input-warning-border-color-inner);
        --awf-input-font-color-inner: var(--awf-input-warning-font-color-inner);
        --awf-input-background-color: var(--awf-input-warning-focus-background-color-inner);
        --awf-input-placeholder-color-inner: var(--awf-input-warning-placeholder-font-color-inner);
    }

    :host([disabled]) > input.slotted-input::placeholder {
        --awf-input-border-color-inner: var(--awf-input-disabled-border-color-inner);
        --awf-input-font-color-inner: var(--awf-input-disabled-font-color-inner);
        --awf-input-placeholder-color-inner: var(--awf-input-disabled-placeholder-font-color-inner);
    }

    :host([warning]) > input.slotted-input::placeholder {
        --awf-input-background-color: var(--awf-input-warning-background-color-inner);
        --awf-input-border-color-inner: var(--awf-input-warning-border-color-inner);
        --awf-input-font-color-inner: var(--awf-input-warning-font-color-inner);
        --awf-input-placeholder-color-inner: var(--awf-input-warning-placeholder-font-color-inner);
    }

    :host([error]) > input.slotted-input::placeholder {
        --awf-input-background-color: var(--awf-input-error-background-color-inner);
        --awf-input-border-color-inner: var(--awf-input-error-border-color-inner);
        --awf-input-font-color-inner: var(--awf-input-error-font-color-inner);
        --awf-input-placeholder-color-inner: var(--awf-input-error-placeholder-font-color-inner);
    }
    /* End: Fix for Safari incompatibility */
`;var InputType;!function(InputType){InputType.Text="text",InputType.Number="number"}(InputType||(InputType={}));let AwfInput=class AwfInput extends lit.oi{get field(){return this.slottedInput[0]}get value(){return this.field.value}get labelTopWidth(){return this.coloredBoxElement.getBoundingClientRect().width}constructor(){super(),this.labelPosition=LabelPosition.Top,this.messageBelow=!1,this.forceFocus=!1,this.hasForm=!1,this.isFocus=!1,this.slotRefs={error:ref_e(),warning:ref_e()},this.errorMessageMutationObserver=new MutationObserver((()=>this.buildErrorWarningMessage())),this.warningMessageMutationObserver=new MutationObserver((()=>this.buildErrorWarningMessage())),new LabelController(this),this.formValidationController=new FormValidationController(this),new ElementStyleController(this,[PLACEHOLDER_STYLE])}render(){return lit.dy`
            <div id="tooltipTrigger">
                <slot name="label" @slotchange=${this.slotChange}></slot>
                <span class="alignment" trigger>
                    <span class="colored-box">
                        <slot name="prefix" @slotchange=${this.onPrefixSuffixSlotChange}></slot>
                        <slot @slotchange=${this.slotChange}></slot>
                        <slot name="suffix" @slotchange=${this.onPrefixSuffixSlotChange}></slot>
                    </span>
                    ${this.renderErrorSlot()}
                </span>
            </div>
            <awf-tooltip offset="5" placement="bottom" tip trigger="tooltipTrigger" manualToggle></awf-tooltip>
        `}formAssociatedCallback(form){this.formValidationController.formAssociatedCallback(form)}connectedCallback(){super.connectedCallback(),this.subscription=awfTranslateService.onLangChange().subscribe((()=>this.field.dispatchEvent(new FocusEvent("blur"))))}disconnectedCallback(){super.disconnectedCallback(),this.field?.removeEventListener("input",this.onInput),this.subscription?.unsubscribe()}validateValue(){if(this.field){const validationFailed=this.field.validity.valueMissing;return validationFailed&&this.setInternalMessage(MessageLevel.ERROR,msg("This field is required.")),!validationFailed}return!0}clearInternalErrorMessage(){this.internalErrorMessage&&(this.internalErrorMessage.innerText=""),this.tooltip.message&&(this.tooltip.message="",this.tooltip.hideTooltip()),this.buildErrorWarningMessage()}setInternalMessage(level,message){this.setAttribute(level,""),this.tooltip.setAttribute(level,""),this.messageBelow?(this.slotRefs[level].value.style.display="block",this.internalErrorMessage&&(this.internalErrorMessage.innerText=message)):(this.tooltip.disabled=!1,this.tooltip.message=message)}firstUpdated(){const[input]=this.slottedInput;if(!input)throw new Error("Input not found!");input.addEventListener("focusin",(()=>this.setAttribute("focused",""))),input.addEventListener("focusout",(()=>this.removeAttribute("focused"))),listenPropertyChange(this.field),this.manuallyHandleTooltip(input),this.forceFocus&&this.updateComplete.then((()=>this.field.focus()))}updated(_changedProperties){_changedProperties.has("messageBelow")&&(this.tooltip.disabled=this.messageBelow)}renderErrorSlot(){const style=this.messageBelow?void 0:"display: none;",errorSlot=lit.dy`
            <slot
                name="error"
                style=${l(style)}
                @slotchange=${this.onErrorMessageSlotChange}
                ${ref_n(this.slotRefs.error)}>
            </slot>
        `,warningSlot=lit.dy`
            <slot
                name="warning"
                style=${l(style)}
                @slotchange=${this.onWarningMessageSlotChange}
                ${ref_n(this.slotRefs.warning)}>
            </slot>
        `;return this.messageBelow?lit.dy`
                <div class="errors">
                    <div class="internalError"></div>
                    ${errorSlot}${warningSlot}
                </div>
            `:lit.dy`${errorSlot}${warningSlot}`}slotChange(){this.field.title="",this.field.classList.add("slotted-input"),this.slottedLabel.length>0?this.field.classList.add("slotted-label"):this.field.classList.remove("slotted-label"),this.updateMutationObserver(),this.requestUpdate()}getTooltipMessage(errors){return errors.map((e=>e.innerText))[errors.length-1]}onErrorMessageSlotChange(){this.errorMessageMutationObserver.disconnect(),this.observeMessageChanges(this.slottedError,this.errorMessageMutationObserver)}onWarningMessageSlotChange(){this.warningMessageMutationObserver.disconnect(),this.observeMessageChanges(this.slottedWarning,this.warningMessageMutationObserver)}observeMessageChanges(slottedMessages,observer){if(slottedMessages.length>0){const options={characterData:!0,subtree:!0};observer.observe(slottedMessages[slottedMessages.length-1],options)}this.buildErrorWarningMessage()}buildErrorWarningMessage(){if(null===this.tooltip)return;const levels=["error","warning"];levels.forEach((currentLevel=>{this.tooltip.removeAttribute(currentLevel),this.removeAttribute(currentLevel),this.slotRefs[currentLevel].value.style.display="none"}));const messageElements={};messageElements.error=this.slottedError,messageElements.warning=this.slottedWarning,this.tooltip.disabled=!0;const level=levels.find((lvl=>messageElements[lvl]?.length));if(level)if(this.setAttribute(level,""),this.tooltip.setAttribute(level,""),this.messageBelow){this.slotRefs[level].value.style.display="block";const messages=this.slotRefs[level].value.assignedElements({flatten:!0});messages.forEach(((message,index)=>{index<messages.length-1&&(message.style.display="none")}))}else this.tooltip.disabled=!1,this.tooltip.message=this.getTooltipMessage(messageElements[level])}updateMutationObserver(){this.inputMutationObserver?.disconnect(),this.inputMutationObserver=reflectAttributes(this.field,this,["type","disabled","required","readonly"])}onPrefixSuffixSlotChange(){"awf-icon"===this.slottedPrefix[0]?.tagName.toLowerCase()?this.classList.add("has-icon-prefix"):this.classList.remove("has-icon-prefix"),this.requestUpdate()}manuallyHandleTooltip(input){input.addEventListener("input",this.onInput.bind(this)),input.addEventListener("focus",this.onInputFocus.bind(this)),input.addEventListener("blur",this.onInputBlur.bind(this)),input.addEventListener("mouseenter",this.onInputMouseEnter.bind(this)),input.addEventListener("mouseleave",this.onInputMouseLeave.bind(this))}onInput(){this.tooltip.showTooltip()}onInputFocus(){this.isFocus=!0,this.tooltip.showTooltip()}onInputBlur(){this.isFocus=!1,this.tooltip.hideTooltip()}onInputMouseEnter(){this.tooltip.showTooltip()}onInputMouseLeave(){this.isFocus||this.tooltip.hideTooltip()}};var Status;AwfInput.styles=[COMMON_STYLES,INPUT_CSS_VARIABLES,INPUT_STYLES,LABEL_STYLE],AwfInput.formAssociated=!0,(0,tslib_es6.gn)([(0,decorators.Cb)({reflect:!0})],AwfInput.prototype,"labelPosition",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)({type:Boolean})],AwfInput.prototype,"messageBelow",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)({type:Boolean})],AwfInput.prototype,"forceFocus",void 0),(0,tslib_es6.gn)([(0,decorators.NH)({slot:"label",selector:"label",flatten:!0})],AwfInput.prototype,"slottedLabel",void 0),(0,tslib_es6.gn)([(0,decorators.IO)(".colored-box")],AwfInput.prototype,"coloredBoxElement",void 0),(0,tslib_es6.gn)([(0,decorators.IO)("awf-tooltip")],AwfInput.prototype,"tooltip",void 0),(0,tslib_es6.gn)([(0,decorators.NH)({selector:"input",flatten:!0})],AwfInput.prototype,"slottedInput",void 0),(0,tslib_es6.gn)([(0,decorators.NH)({slot:"error",flatten:!0,selector:"div,span"})],AwfInput.prototype,"slottedError",void 0),(0,tslib_es6.gn)([(0,decorators.NH)({slot:"warning",flatten:!0,selector:"div,span"})],AwfInput.prototype,"slottedWarning",void 0),(0,tslib_es6.gn)([(0,decorators.NH)({slot:"prefix",flatten:!0})],AwfInput.prototype,"slottedPrefix",void 0),(0,tslib_es6.gn)([(0,decorators.IO)(".internalError")],AwfInput.prototype,"internalErrorMessage",void 0),AwfInput=(0,tslib_es6.gn)([localized(),(0,awf_custom_element.M)("awf-input",!0)],AwfInput),function(Status){Status.IDLE="Idle",Status.READY="Ready",Status.PRERUN="Prerun",Status.TUNE="Tune",Status.ACQUIRING="Acquiring",Status.RUNNING="Running",Status.INJECTING="Injecting",Status.NOT_READY="Not Ready",Status.WARNING="Warning",Status.ERROR="Error",Status.STANDBY="Standby",Status.OFFLINE="Offline",Status.POST_RUN="Post-Run"}(Status||(Status={}));const STATUS_COLOR_MAPPING=new Map([[Status.IDLE,"var(--at-green)"],[Status.READY,"var(--at-green)"],[Status.PRERUN,"var(--at-cobalt)"],[Status.TUNE,"var(--at-orange)"],[Status.ACQUIRING,"var(--at-periwinkle)"],[Status.RUNNING,"var(--at-periwinkle)"],[Status.INJECTING,"var(--at-purple)"],[Status.NOT_READY,"var(--at-yellow)"],[Status.WARNING,"var(--at-yellow)"],[Status.ERROR,"var(--at-red)"],[Status.STANDBY,"var(--at-teal"],[Status.OFFLINE,"var(--at-gray)"],[Status.POST_RUN,"var(--at-periwinkle)"]]),INSTRUMENT_STATUS_STYLES=lit.iv`

    :host {
        background-color: var(--awf-instrument-status-color);
        position: fixed;
        left: 0;
        top: 0;
        display: flex;
        justify-content: center;
        height: 100%;
        width: 48px;
        z-index: var(--awf-elevation-z4);
    }

    :host([collapsed]) {
        width: 16px;
    }

    :host([collapsed]) span {
        display: none;
    }

    span {
        writing-mode: vertical-lr;
        transform: rotate(180deg);
        font-size: 0.875rem;
        color: var(--awf-instrument-status-label-color);
        font-family: 'Noto Sans Display Semibold', sans-serif;
        cursor: default;
        padding-inline-start: 16px;
    }

    @media only screen and (max-width: 1279.99px) {
        :host {
            width: 100%;
            height: 24px;
            justify-content: flex-start;
            align-items: center;
        }

        span {
            writing-mode: inherit;
            transform: none;
        }

        :host([collapsed]) {
            width: 100%;
        }

        :host([collapsed]) span {
            display: inline;
        }
    }
`;let AwfInstrumentStatus=class AwfInstrumentStatus extends lit.oi{constructor(){super(...arguments),this.status=Status.OFFLINE,this.collapsed=!1}render(){return this.determineColors(),lit.dy`<span>${this.getLocalizedLabel()}</span> `}determineColors(){const statusColor=STATUS_COLOR_MAPPING.get(this.status)??"var(--at-violet)";let labelColor;switch(this.status){case Status.NOT_READY:case Status.WARNING:case Status.OFFLINE:case Status.STANDBY:case Status.READY:case Status.IDLE:labelColor="var(--at-dark-navy)";break;default:labelColor="var(--at-white)"}this.style.setProperty("--awf-instrument-status-color",statusColor),this.style.setProperty("--awf-instrument-status-label-color",labelColor)}getLocalizedLabel(){let label;switch(this.status){case Status.IDLE:label=msg("Idle");break;case Status.READY:label=msg("Ready");break;case Status.PRERUN:label=msg("Pre-Run");break;case Status.TUNE:label=msg("Tune");break;case Status.ACQUIRING:label=msg("Acquiring");break;case Status.RUNNING:label=msg("Running");break;case Status.INJECTING:label=msg("Injecting");break;case Status.NOT_READY:label=msg("Not Ready");break;case Status.WARNING:label=msg("Warning");break;case Status.ERROR:label=msg("Error");break;case Status.STANDBY:label=msg("Standby");break;case Status.OFFLINE:label=msg("Offline");break;case Status.POST_RUN:label=msg("Post-Run");break;default:label=""}return label}};AwfInstrumentStatus.styles=[COMMON_STYLES,INSTRUMENT_STATUS_STYLES],(0,tslib_es6.gn)([(0,decorators.Cb)()],AwfInstrumentStatus.prototype,"status",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)({type:Boolean})],AwfInstrumentStatus.prototype,"collapsed",void 0),AwfInstrumentStatus=(0,tslib_es6.gn)([(0,awf_custom_element.M)("awf-instrument-status",!0)],AwfInstrumentStatus);const LIST_OPTION_STYLES=lit.iv`
    :host {
        align-items: center;
        border-bottom: 1px solid var(--at-gray-soft);
        border-top: 1px solid var(--at-gray-soft);
        display: inline-flex;
        font-size: var(--awf-list-option-font-size-inner);
        height: var(--awf-list-option-height-inner);
        outline: none;
        padding: 0 30px 0 15px;
        position: relative;
        cursor: pointer;
    }

    :host([selected]) {
        background-color: var(--awf-state-selected-background);
    }

    :host([focused]) {
        background-color: var(--awf-state-hover-background);
    }

    :host([hidden]) {
        display: none;
    }

    :host([disabled]) {
        cursor: not-allowed;
        color: var(--awf-label-disabled-font-color-inner);
    }

    ::slotted([suffix]) {
        margin-left: auto;
        position: relative;
    }

    ::slotted([suffix]:first-child):before {
        content: '';
        border-left: 2px solid var(--at-gray-soft);
        width: 2px;
        height: 16px;
        position: absolute;
        right: 115%;
    }

    :host([selected]) ::slotted([suffix]:first-child):before,
    :host(:hover) ::slotted([suffix]:first-child):before,
    :host(:focus) ::slotted([suffix]:first-child):before,
    :host(:focus-within) ::slotted([suffix]:first-child):before {
        border-left-color: var(--at-white);
    }

    :host([noCheckbox]) [type='checkbox'] {
        position: absolute;
    }

    :host([noCheckbox]) [type='checkbox']::after {
        position: absolute;
        visibility: hidden;
        width: 0;
        height: 0;
    }

    [type='checkbox']:checked::after {
        background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='none' stroke='%230085d5' stroke-miterlimit='10' stroke-width='3' d='M2.5 12.5l6 6 13-13' style='stroke: %230085d5;'/%3E%3C/svg%3E%0A");
    }

    awf-checkbox{
        margin-right: 10px;
    }
`,LIST_OPTION_CSS_VARIABLES=lit.iv`
    :host {
        /* List Option Density Related */
        --awf-list-option-font-size-inner: var(--awf-list-option-font-size, 14px);
        --awf-list-option-height-inner: var(--awf-list-option-height, 21px);
    }
`;let AwfListOption=class AwfListOption extends lit.oi{constructor(){super(...arguments),this.selected=!1,this.focused=!1,this.noCheckbox=!1,this.hidden=!1,this.disabled=!1,this._onMouseEnter=()=>this.dispatchEvent(createCustomEvent("listOptionMouseEnter")),this._onClick=event=>{this.disabled?(event.stopPropagation(),event.preventDefault()):this.dispatchEvent(createCustomEvent("listOptionClick"))}}static get styles(){return[COMMON_STYLES,LABEL_CSS_VARIABLES,LIST_OPTION_CSS_VARIABLES,LIST_OPTION_STYLES]}connectedCallback(){super.connectedCallback(),this.disabled?this.tabIndex=-1:this.tabIndex=0,this.addEventListener("mouseenter",this._onMouseEnter),this.addEventListener("click",this._onClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("mouseenter",this._onMouseEnter),this.removeEventListener("click",this._onClick)}render(){const checkbox=lit.dy`<awf-checkbox><input tabindex="-1" type="checkbox" ?checked=${this.selected} /></awf-checkbox>`;return lit.dy`
            ${when_n(!this.noCheckbox,(()=>checkbox))}
            <slot></slot>
            <slot name="suffix"></slot>
        `}};(0,tslib_es6.gn)([(0,decorators.Cb)({type:Boolean,reflect:!0})],AwfListOption.prototype,"selected",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)({type:Boolean,reflect:!0})],AwfListOption.prototype,"focused",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)({type:Boolean,reflect:!0})],AwfListOption.prototype,"noCheckbox",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)({type:Boolean,reflect:!0})],AwfListOption.prototype,"hidden",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)({type:Boolean,reflect:!0})],AwfListOption.prototype,"disabled",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)()],AwfListOption.prototype,"value",void 0),AwfListOption=(0,tslib_es6.gn)([(0,awf_custom_element.M)("awf-list-option",!0)],AwfListOption);const NOTIFICATION_BUBBLES_CSS_VARIABLES=lit.iv`
    :host {
        --awf-notification-bubble-background-color-inner: var(--awf-notification-bubble-background-color, var(--at-red));
        --awf-notification-bubble-stroke-color-inner: var(--awf-notification-bubble-stroke-color, var(--at-white));
    }
`,NOTIFICATION_BUBBLE_STYLES=lit.iv`
    :host {
        position: relative;
        display: inline-block;
        height: 24px;
    }

    .notification-bubble {
        height: 16px;
        width: 16px;
        position: absolute;
        top: 10px;
        left: 12px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background-color: var(--awf-notification-bubble-background-color-inner);
        border: 1px solid var(--awf-notification-bubble-stroke-color-inner);
        border-radius: 16px;
        box-sizing: border-box;
    }

    .notification-bubble.extended {
        width: 24px;
    }

    .value {
        font-size: 10px;
        height: 10px;
        line-height: 10px;
        color: var(--at-white);
    }
`;let AwfNotificationBubble=class AwfNotificationBubble extends lit.oi{render(){const extended=!!this.value&&this.value>9;return lit.dy`
            <slot></slot>
            <div class="notification-bubble ${o({extended})}">
                <span class="value">${this.determineDisplayValue()}</span>
            </div>
        `}firstUpdated(){this.moveIconIntoElement()}determineDisplayValue(){let displayValue="";return void 0!==this.value&&(displayValue=`${this.value}`,this.value>99&&(displayValue="99+")),displayValue}moveIconIntoElement(){if(this.for){const icon=document.querySelector(`#${this.for}`);if(!icon)throw new Error("Icon not found!");this.append(icon)}}};AwfNotificationBubble.styles=[COMMON_STYLES,NOTIFICATION_BUBBLES_CSS_VARIABLES,NOTIFICATION_BUBBLE_STYLES],(0,tslib_es6.gn)([(0,decorators.Cb)({type:Number})],AwfNotificationBubble.prototype,"value",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)()],AwfNotificationBubble.prototype,"for",void 0),AwfNotificationBubble=(0,tslib_es6.gn)([(0,awf_custom_element.M)("awf-notification-bubble",!0)],AwfNotificationBubble);let AwfOverlay=class AwfOverlay extends lit.oi{constructor(){super(...arguments),this.disabled=!1,this.open=!1,this.tip=!1,this.appendToBody=!1,this.offset=16,this.manualToggle=!1,this.floatingElementPadding=0,this.defaultPlacement="bottom",this.controller=new FloatingElementController(this),this.closeOverlay=event=>{this.isInEventPath(event)||this.hide()},this._toggle=this.toggle.bind(this),this.dispatchCustomEvent=dispatchCustomEvent.bind(this)}get floatingElement(){return this}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this.closeOverlay),this.formerParent||(this.formerParent=this.parentNode)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this.closeOverlay),this.appendToBody&&this.remove()}toggle(){this.open?this.hide():this.show()}show(){this.disabled||this.open||(this.cleanUp=this.controller.autoUpdatePosition(),this.open=!0,Array.from(this.children).forEach((child=>child.setAttribute("awf-overlay-open",""))),this.dispatchCustomEvent(AwfEvent.OPEN))}hide(){this.open&&(this.open=!1,Array.from(this.children).forEach((child=>child.removeAttribute("awf-overlay-open"))),this.dispatchCustomEvent(AwfEvent.CLOSE),this.cleanUp&&this.cleanUp())}render(){return lit.dy`<slot></slot>${when_n(this.tip,this.createTip)}`}updated(_changedProperties){if(_changedProperties.has("appendToBody")&&this.moveOverlay(),_changedProperties.has("trigger")&&(this.trigger&&(this.refElement=this.formerParent?.querySelector(`#${this.trigger}`),this.refElement&&!this.manualToggle&&this.refElement.addEventListener("click",this._toggle)),_changedProperties.get("trigger"))){const oldRefElement=this.formerParent?.querySelector(`#${_changedProperties.get("trigger")}`);oldRefElement&&oldRefElement.removeEventListener("click",this._toggle)}}createTip(){return lit.dy`<div id="tip"></div>`}isInEventPath(event){const path=event.composedPath().filter((e=>e instanceof HTMLElement));return!!path.find((e=>e===this||e===this.refElement))}moveOverlay(){this.remove(),this.appendToBody?document.body.appendChild(this):this.formerParent&&this.formerParent.appendChild(this)}};AwfOverlay.styles=[COMMON_STYLES,lit.iv`
            :host {
                background-color: var(--at-white);
                box-shadow: 0 0 4px 0.1px var(--at-gray);
                display: block;
                opacity: 0;
                padding: 10px;
                position: absolute;
                visibility: hidden;
                z-index: var(--awf-elevation-z5);
            }

            :host([open]) {
                opacity: 1;
                transition: opacity 0.1s ease-in-out;
                visibility: visible;
            }

            #tip {
                background-color: var(--at-white);
                height: 16px;
                position: absolute;
                transform: rotate(45deg);
                width: 16px;
                z-index: var( --awf-elevation-z1);
            }
        `],(0,tslib_es6.gn)([(0,decorators.Cb)({type:Boolean})],AwfOverlay.prototype,"disabled",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)({type:Boolean,reflect:!0})],AwfOverlay.prototype,"open",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)({type:Boolean,reflect:!0})],AwfOverlay.prototype,"tip",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)({type:Boolean})],AwfOverlay.prototype,"appendToBody",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)({type:Number})],AwfOverlay.prototype,"offset",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)()],AwfOverlay.prototype,"placement",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)()],AwfOverlay.prototype,"trigger",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)({type:Boolean})],AwfOverlay.prototype,"manualToggle",void 0),(0,tslib_es6.gn)([(0,decorators.IO)("#tip")],AwfOverlay.prototype,"tipElement",void 0),AwfOverlay=(0,tslib_es6.gn)([(0,awf_custom_element.M)("awf-overlay",!0)],AwfOverlay);const PROGRESS_BAR_STYLES=lit.iv`
    :host {
        display: inline-flex;
        height: 16px;
        width: 100%;
        position: relative;
    }

    ::slotted(progress) {
        appearance: none;
        height: 100%;
        width: 100%;
    }

    label {
        position: absolute;
        height: 16px;
        line-height: 16px;
        text-align: center;
        color: var(--at-white);
        transition: left 0.6s ease;
    }
`;let AwfProgressBar=class AwfProgressBar extends lit.oi{constructor(){super(),this.withLabel=!1,new ElementStyleController(this,["\n            progress::-webkit-progress-bar {\n                background-color: var(--at-gray-extra-pale);\n            }\n            progress::-webkit-progress-value {\n                background-color: var(--at-periwinkle);\n                transition: width 0.6s ease;\n            }\n            progress::-moz-progress-bar {\n                background-color: var(--at-periwinkle);\n            }\n        "])}render(){return lit.dy`
            ${this.showLabel()}
            <slot @change="${this.handleLabel}"></slot>
        `}firstUpdated(){const[progress]=this.slottedProgress;this.setProgress(progress),listenPropertyChange(this.progress)}updated(changedProperties){changedProperties.has("withLabel")&&this.handleLabel()}showLabel(){return this.withLabel?lit.dy`<label></label>`:lit.dy``}handleLabel(){if(this.withLabel){const share=this.progress.value/this.progress.max;this.setLabelText(share),this.positionLabel(share)}}setLabelText(share){const label=`${Math.round(100*share)} %`;this.label.innerHTML=label}positionLabel(share){let position=this.progress.offsetWidth*share*.5-this.label.offsetWidth/2,color="var(--at-white)";position<0&&(position=this.progress.offsetWidth/2-this.label.offsetWidth/2,color="var(--at-black)"),this.label.style.left=`${position}px`,this.label.style.color=color}setProgress(progress){if(!progress)throw new Error("Progress not found!");this.progress=progress}};AwfProgressBar.styles=[COMMON_STYLES,PROGRESS_BAR_STYLES],(0,tslib_es6.gn)([(0,decorators.Cb)({type:Boolean})],AwfProgressBar.prototype,"withLabel",void 0),(0,tslib_es6.gn)([(0,decorators.NH)({selector:"progress"})],AwfProgressBar.prototype,"slottedProgress",void 0),(0,tslib_es6.gn)([(0,decorators.IO)("label")],AwfProgressBar.prototype,"label",void 0),AwfProgressBar=(0,tslib_es6.gn)([(0,awf_custom_element.M)("awf-progress-bar",!0)],AwfProgressBar);const SIDEPANEL_CSS_VARIABLES=lit.iv`
    :host {
        /* Sidepanel Measurements */
        --awf-sidepanel-width-inner: var(--awf-sidepanel-width, 25vw);

        /* Sidepanel Colors */
        --awf-sidepanel-font-color-inner: var(--awf-sidepanel-font-color, var(--at-dark-navy));
        --awf-sidepanel-icon-color-inner: var(--awf-sidepanel-icon-color, var(--at-dark-navy));
        --awf-sidepanel-header-border-bottom-color-inner: var(--awf-sidepanel-header-border-bottom-color, var(--at-gray-light));
        --awf-sidepanel-header-background-color-inner: var(--awf-sidepanel-header-background-color, var(--at-white));
        --awf-sidepanel-footer-border-top-color-inner: var(--awf-sidepanel-footer-border-top-color, var(--at-gray-light));
        --awf-sidepanel-footer-background-color-inner: var(--awf-sidepanel-footer-background-color, var(--at-white));
        --awf-sidepanel-button-background-inner: var(--awf-sidepanel-button-background, var(--awf-button-icon-only-background));
        --awf-sidepanel-button-font-color-inner: var(--awf-sidepanel-button-font-color, var(--awf-button-font-color));
        --awf-sidepanel-button-hover-background-inner: var(--awf-sidepanel-button-hover-background, var(--awf-button-icon-only-hover-background));
        --awf-sidepanel-button-hover-font-color-inner: var(--awf-sidepanel-button-hover-font-color, var(--awf-button-hover-font-color));
        --awf-sidepanel-button-active-background-inner: var(--awf-sidepanel-button-active-background, var(--awf-button-icon-only-active-background));
        --awf-sidepanel-button-active-font-color-inner: var(--awf-sidepanel-button-active-font-color, var(--at-dark-navy));
    }
`,SIDEPANEL_STYLES=lit.iv`
    :host {
        --box-shadow-blur-radius: 10px;

        position: fixed;
        top: 0;
        width: var(--awf-sidepanel-width-inner);
        min-width: 18rem;
        height: 100vh;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        overflow: hidden;
        background-color: var(--at-white);
        color: var(--awf-sidepanel-font-color-inner);
        box-shadow: 0 4px var(--box-shadow-blur-radius) #00000040;
        border: 0;
        visibility: hidden;
        transition: transform var(--transition-duration) var(--transition-timing-function);
        z-index: var(--awf-elevation-z3);
    }

    :host([opened]) {
        border: 1px solid var(--at-gray-light);
        visibility: visible;
    }

    :host([opened][alignment='left']) {
        transform: translateX(calc(var(--awf-sidepanel-width-inner) + var(--box-shadow-blur-radius)));
    }

    :host([opened][alignment='right']) {
        transform: translateX(calc(-1 * (var(--awf-sidepanel-width-inner) + var(--box-shadow-blur-radius))));
    }

    :host([alignment='left']) {
        left: calc(-1 * (var(--awf-sidepanel-width-inner) + var(--box-shadow-blur-radius)));
    }

    :host([alignment='right']) {
        right: calc(-1 * (var(--awf-sidepanel-width-inner) + var(--box-shadow-blur-radius)));
    }

    .header {
        flex-grow: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        min-height: 40px;
        box-sizing: border-box;
        white-space: nowrap;
        border-bottom: 1px solid var(--awf-sidepanel-header-border-bottom-color-inner);
        background: var(--awf-sidepanel-header-background-color-inner);
    }

    slot[name='title'] {
        display: flex;
        min-width: 0;
        height: 100%;
        align-items: center;
        justify-content: left;
        flex: 1 1 0%;
    }

    slot[name='title'] > .simple-header {
        padding-left: 16px;
        font-size: 1.375rem;
        font-weight: 400;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        flex: 1;
    }

    .close-button {
        padding: 4px;
    }

    .awf-sidepanel-content {
        width: 100%;
        min-width: inherit;
        box-sizing: border-box;
        overflow: auto;
        flex-grow: 1;
    }

    ::slotted([slot='footer']) {
        border-top: 1px solid var(--awf-sidepanel-footer-border-top-color-inner);
        background: var(--awf-sidepanel-footer-background-color-inner);
        min-height: 40px;
        box-sizing: border-box;
    }

    ::slotted(awf-button) {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 4px;
    }

    ::slotted(awf-button),
    awf-button {
        --awf-button-icon-only-background: var(--awf-sidepanel-button-background-inner);
        --awf-button-icon-only-hover-background: var(--awf-sidepanel-button-hover-background-inner);
        --awf-button-icon-only-active-background: var(--awf-sidepanel-button-active-background-inner);
        --awf-button-icon-only-active-foreground: var(--awf-sidepanel-button-active-font-color-inner);
        --awf-button-background: var(--awf-sidepanel-button-background-inner);
        --awf-button-border: 1px solid var(--awf-sidepanel-button-background-inner);
        --awf-button-font-color: var(--awf-sidepanel-button-font-color-inner);
        --awf-button-hover-background: var(--awf-sidepanel-button-hover-background-inner);
        --awf-button-hover-border: 1px solid var(--awf-sidepanel-button-hover-background-inner);
        --awf-button-hover-font-color: var(--awf-sidepanel-button-hover-font-color-inner);
        --awf-button-active-background: var(--awf-sidepanel-button-active-background-inner);
        --awf-button-active-border: 1px solid var(--awf-sidepanel-button-active-background-inner);
        --awf-button-active-font-color: var(--awf-sidepanel-button-active-font-color-inner);
    }

    /* Scrollbar */
    /* Width */
    ::-webkit-scrollbar {
        background: transparent;
        width: 10px;
        height: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: transparent;
        background-clip: padding-box;
        border: 2px solid transparent;
        border-radius: 19px;
    }

    /* Handle thumb */
    ::-webkit-scrollbar-thumb {
        background: #c1c6c899;
        background-clip: padding-box;
        border: 2px solid transparent;
        border-radius: 19px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #a1a7af99;
        background-clip: padding-box;
        border: 2px solid transparent;
        border-radius: 19px;
    }

    /* Handle on active state */
    ::-webkit-scrollbar-thumb:active {
        background: #848e9999;
        background-clip: padding-box;
        border: 2px solid transparent;
        border-radius: 19px;
    }

    /* Firefox scrollbar */
    * {
        scrollbar-color: #c1c6c899 transparent;
        scrollbar-width: thin;
    }
`;var PanelAlignment;!function(PanelAlignment){PanelAlignment.LEFT="left",PanelAlignment.RIGHT="right"}(PanelAlignment||(PanelAlignment={}));let AwfSidePanel=class AwfSidePanel extends lit.oi{constructor(){super(...arguments),this.opened=!1,this.alignment=PanelAlignment.LEFT,this.header="",this.identifier="side-panel",this.dispatchCustomEvent=dispatchCustomEvent.bind(this),this.handleClick=event=>{isInEventPath(event,this.tagName)||(isInEventPath(event,`[${this.identifier}-trigger]`)?this.open():isInEventPath(event,`[${this.identifier}-toggle]`)?this.toggle():this.close())}}toggle(){this.opened?this.close():this.open()}open(){this.opened=!0}close(){this.opened=!1}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this.handleClick)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this.handleClick)}render(){return lit.dy`
            <div class="header">
                <slot name="title">
                    <div class="simple-header">${this.header}</div>
                </slot>
                <slot name="context"></slot>
                <awf-button aria-label="close" class="close-button" @click=${this.close}>
                    <awf-icon raw=${delete_cross.C} slot="icon"></awf-icon>
                </awf-button>
            </div>
            <div class="awf-sidepanel-content">
                <slot name="content"></slot>
            </div>
            <slot name="footer"></slot>
        `}updated(changes){changes.has("opened")&&(this.opened?(this.disableTrigger(),this.dispatchCustomEvent(AwfEvent.OPEN)):(this.enableTrigger(),this.dispatchCustomEvent(AwfEvent.CLOSE)))}enableTrigger(){const trigger=document.querySelector(`[${this.identifier}-trigger]`);trigger instanceof AwfButton&&(trigger.disabled=!1)}disableTrigger(){const trigger=document.querySelector(`[${this.identifier}-trigger]`);trigger instanceof AwfButton&&(trigger.disabled=!0)}};AwfSidePanel.styles=[COMMON_STYLES,SIDEPANEL_CSS_VARIABLES,SIDEPANEL_STYLES],(0,tslib_es6.gn)([(0,decorators.Cb)({type:Boolean,reflect:!0})],AwfSidePanel.prototype,"opened",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)({reflect:!0})],AwfSidePanel.prototype,"alignment",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)()],AwfSidePanel.prototype,"header",void 0),AwfSidePanel=(0,tslib_es6.gn)([(0,awf_custom_element.M)("awf-sidepanel",!0)],AwfSidePanel);class ColorUtils{static isColorLight(color){let r,g,b,colorArray;if(colorArray=RegExp(ColorUtils.REGEX_RGB).exec(color),colorArray)r=parseInt(colorArray[2]),g=parseInt(colorArray[3]),b=parseInt(colorArray[4]);else if(colorArray=RegExp(ColorUtils.REGEX_HEX).exec(color),colorArray){let hex=color.substring(1);colorArray[1]?(r=parseInt(hex.substring(0,2),16),g=parseInt(hex.substring(2,4),16),b=parseInt(hex.substring(4,6),16)):(hex=hex.replace(/./g,"$&$&"),r=parseInt(hex.substring(0,2),16),g=parseInt(hex.substring(2,4),16),b=parseInt(hex.substring(4,6),16))}else{const rgb=ColorUtils.convertColorToRGB(color);r=rgb[0],g=rgb[1],b=rgb[2]}return.299*r+.587*g+.114*b>127.5}static convertColorToRGB(color){const cvs=document.createElement("canvas");cvs.height=1,cvs.width=1;const ctx=cvs.getContext("2d");ctx.fillStyle=color,ctx?.fillRect(0,0,1,1);const rgb=ctx?.getImageData(0,0,1,1).data,result=[rgb[0],rgb[1],rgb[2]];return cvs.remove(),result}}ColorUtils.WHITE_COLOR="#ffffff",ColorUtils.PALE_PINK_COLOR="#fcecf7",ColorUtils.AGILENT_SPECIAL_BUTTON_COLOR="#e1f2d4",ColorUtils.AGILENT_BLUE_SHADE_COLOR="#037cc2",ColorUtils.AGILENT_BLUE_MEDIUM_COLOR="#99ceee",ColorUtils.AGILENT_BLUE_SOFT_COLOR="#cce7f7",ColorUtils.AGILENT_BLUE_PALE_COLOR="#e5f3fb",ColorUtils.AGILENT_BLUE_LUMINIOUS_COLOR="#e2eef5",ColorUtils.AGILENT_BLUE_FOG_COLOR="#e8eef1",ColorUtils.AGILENT_BLUE_LUMINIOUS_PALE_COLOR="#f1f7fa",ColorUtils.AGILENT_BLUE_DARK_COLOR="#225d85",ColorUtils.AGILENT_BLUE_DARK_TINT_COLOR="#1171ad",ColorUtils.AGILENT_BLUE_COLOR="#0085d5",ColorUtils.AGILENT_BLUE_MIDTONE_COLOR="#88c4e8",ColorUtils.AGILENT_NAVY_DARK_COLOR="#384350",ColorUtils.AGILENT_NAVY_TINT_COLOR="#4c5662",ColorUtils.AGILENT_NAVY_SOFT_COLOR="#c1cad2",ColorUtils.AGILENT_GRAY_MIDNIGHT_COLOR="#252a30",ColorUtils.AGILENT_GRAY_DARK_COLOR="#6c747d",ColorUtils.AGILENT_GRAY_MEDIUM_COLOR="#a1a7af",ColorUtils.AGILENT_GRAY_COLOR="#c1c6c8",ColorUtils.AGILENT_GRAY_SOFT_COLOR="#e1e3e5",ColorUtils.AGILENT_GRAY_PALE_COLOR="#eaebed",ColorUtils.AGILENT_GRAY_EXTRA_PALE_COLOR="#f5f5f5",ColorUtils.AGILENT_NAVY_EXTRA_LIGHT_COLOR="#fafafa",ColorUtils.AGILENT_VIOLET_COLOR="#6d28ad",ColorUtils.AGILENT_PURPLE_COLOR="#925be5",ColorUtils.AGILENT_PURPLE_BRIGHT_COLOR="#aa53f3",ColorUtils.AGILENT_COBALT_COLOR="#5f4ac9",ColorUtils.AGILENT_PERIWINKLE_COLOR="#4780ea",ColorUtils.AGILENT_TEAL_COLOR="#2fbcbe",ColorUtils.AGILENT_TEAL_DARK_COLOR="#148082",ColorUtils.AGILENT_GREEN_COLOR="#75c335",ColorUtils.AGILENT_GREEN_PALE_COLOR="#dff2cf",ColorUtils.AGILENT_GREEN_LIGHT_COLOR="#c8e7ae",ColorUtils.AGILENT_GREEN_DARK_COLOR="#4a8030",ColorUtils.AGILENT_YELLOW_COLOR="#ffba00",ColorUtils.AGILENT_YELLOW_LIGHT_COLOR="#ffe399",ColorUtils.AGILENT_EXTRA_YELLOW_LIGHT_COLOR="#fff0cb",ColorUtils.AGILENT_ORANGE_COLOR="#ff8400",ColorUtils.AGILENT_ORANGE_DARK_COLOR="#a15819",ColorUtils.AGILENT_RED_COLOR="#e72503",ColorUtils.AGILENT_RED_LIGHT_COLOR="#febaaf",ColorUtils.AGILENT_RED_EXTRA_LIGHT_COLOR="#fedcd6",ColorUtils.AGILENT_RED_DARK_COLOR="#9d3521",ColorUtils.AGILENT_MAGENTA_COLOR="#b73585",ColorUtils.AGILENT_BLUE_LIGHT_COLOR="#f2f7fa",ColorUtils.AGILENT_SAMPLE_COLOR="#83C441",ColorUtils.AGILENT_BLANK_COLOR="#CDD3EA",ColorUtils.AGILENT_DOUBLE_BLANK_COLOR="#F57E2B",ColorUtils.AGILENT_CALIBRATION_STANDARD_COLOR="#478ECC",ColorUtils.AGILENT_QC_CHECK_COLOR="#79287D",ColorUtils.AGILENT_SPIKE_COLOR="#B83685",ColorUtils.AGILENT_SYSTEM_SUITABILITY_COLOR="#A57C2C",ColorUtils.REGEX_RGB=/^(rgb\((1?[0-9]?[0-9]?|2[0-4][0-9]|25[0-5]),(1?[0-9]?[0-9]?|2[0-4][0-9]|25[0-5]),(1?[0-9]?[0-9]?|2[0-4][0-9]|25[0-5])\))$/,ColorUtils.REGEX_HEX=/^#?([0-9A-Fa-f]{6})|([0-9A-Fa-f]{3})$/;class StyleItem{constructor(fillColor="#000000",strokeColor="#000000",selectedStrokeColor="#000000",strokeWidth,hoverFillColor="#000000",hoverStrokeColor="#000000"){this.fillColor=fillColor,this.strokeColor=strokeColor,this.selectedStrokeColor=selectedStrokeColor,this.strokeWidth=strokeWidth,this.hoverFillColor=hoverFillColor,this.hoverStrokeColor=hoverStrokeColor}}class ColorPalette{constructor(){this.colorPaletteMap=new Map([[ColorPalette.VIAL_FILL_COLOR,ColorUtils.AGILENT_GRAY_DARK_COLOR],[ColorPalette.VIAL_STROKE_COLOR,ColorUtils.AGILENT_GRAY_SOFT_COLOR],[ColorPalette.DECORATION_FILL_COLOR,ColorUtils.WHITE_COLOR],[ColorPalette.DECORATION_STROKE_COLOR,ColorUtils.AGILENT_GRAY_SOFT_COLOR],[ColorPalette.OUTLINE_FILL_COLOR,ColorUtils.WHITE_COLOR],[ColorPalette.OUTLINE_STROKE_COLOR,ColorUtils.AGILENT_GRAY_SOFT_COLOR],[ColorPalette.LABEL_COLOR,ColorUtils.AGILENT_GRAY_DARK_COLOR],[ColorPalette.SELECTED_VIAL_STROKE_COLOR,ColorUtils.AGILENT_BLUE_COLOR],[ColorPalette.ORDERING_ARROW_COLOR,ColorUtils.AGILENT_BLUE_MEDIUM_COLOR],[ColorPalette.HOVER_VIAL_FILL_COLOR,ColorUtils.AGILENT_BLUE_SOFT_COLOR],[ColorPalette.HOVER_VIAL_STROKE_COLOR,ColorUtils.AGILENT_BLUE_MEDIUM_COLOR]]),this.labelFont="Noto Sans Display"}get defaultVialStyle(){return new StyleItem(this.colorPaletteMap.get(ColorPalette.VIAL_FILL_COLOR),this.colorPaletteMap.get(ColorPalette.VIAL_STROKE_COLOR),this.colorPaletteMap.get(ColorPalette.SELECTED_VIAL_STROKE_COLOR),.2,this.colorPaletteMap.get(ColorPalette.HOVER_VIAL_FILL_COLOR),this.colorPaletteMap.get(ColorPalette.HOVER_VIAL_STROKE_COLOR))}get defaultDecorationStyle(){return new StyleItem(this.colorPaletteMap.get(ColorPalette.DECORATION_FILL_COLOR),this.colorPaletteMap.get(ColorPalette.DECORATION_STROKE_COLOR),this.colorPaletteMap.get(ColorPalette.SELECTED_VIAL_STROKE_COLOR),1)}get defaultOutlineStyle(){return new StyleItem(this.colorPaletteMap.get(ColorPalette.OUTLINE_FILL_COLOR),this.colorPaletteMap.get(ColorPalette.OUTLINE_STROKE_COLOR),this.colorPaletteMap.get(ColorPalette.SELECTED_VIAL_STROKE_COLOR),1)}get defaultOrderingArrowStyle(){return new StyleItem(this.colorPaletteMap.get(ColorPalette.ORDERING_ARROW_COLOR),this.colorPaletteMap.get(ColorPalette.ORDERING_ARROW_COLOR),this.colorPaletteMap.get(ColorPalette.ORDERING_ARROW_COLOR),1)}customVialStyle(fillColor,strokeColor,strokeWidth,hoverVialFillColor,hoverVialStrokeColor){const customStyle=this.defaultVialStyle;return fillColor&&(customStyle.fillColor=fillColor),strokeColor&&(customStyle.strokeColor=strokeColor),strokeWidth&&(customStyle.strokeWidth=strokeWidth),hoverVialFillColor&&(customStyle.hoverFillColor=hoverVialFillColor),hoverVialStrokeColor&&(customStyle.hoverStrokeColor=hoverVialStrokeColor),customStyle}customDecorationStyle(fillColor,strokeColor,strokeWidth){const customStyle=this.defaultDecorationStyle;return fillColor&&(customStyle.fillColor=fillColor),strokeColor&&(customStyle.strokeColor=strokeColor),strokeWidth&&(customStyle.strokeWidth=strokeWidth),customStyle}customOutlineStyle(fillColor,strokeColor,strokeWidth){const customStyle=this.defaultOutlineStyle;return fillColor&&(customStyle.fillColor=fillColor),strokeColor&&(customStyle.strokeColor=strokeColor),strokeWidth&&(customStyle.strokeWidth=strokeWidth),customStyle}}function isColor(color){return ColorUtils.REGEX_HEX.test(color)||ColorUtils.REGEX_RGB.test(color)||(()=>{let temp;try{temp=(new Option).style}catch(error){return!0}return temp.color=color,temp.color===color})()}ColorPalette.VIAL_FILL_COLOR="vialFillColor",ColorPalette.VIAL_STROKE_COLOR="vialStrokeColor",ColorPalette.DECORATION_FILL_COLOR="decorationFillColor",ColorPalette.DECORATION_STROKE_COLOR="decorationStrokeColor",ColorPalette.OUTLINE_FILL_COLOR="outlineFillColor",ColorPalette.OUTLINE_STROKE_COLOR="outlineStrokeColor",ColorPalette.LABEL_COLOR="labelColor",ColorPalette.SELECTED_VIAL_STROKE_COLOR="selectedVialStrokeColor",ColorPalette.ORDERING_ARROW_COLOR="orderingArrowColor",ColorPalette.CONTAINER_NAME_COLOR="containerNameColor",ColorPalette.HOVER_VIAL_FILL_COLOR="hoverVialFillColor",ColorPalette.HOVER_VIAL_STROKE_COLOR="hoverVialStrokeColor";class SampleTypes{constructor(){this._sampleTypes=new Array,this.InitChromatographySampleTypes()}updateSampleTypes(typeName,colorValue){if(isColor(colorValue)){const existingSampleType=this.findSampleType(typeName);existingSampleType?existingSampleType.color=colorValue:this._sampleTypes.push({name:typeName,color:colorValue})}}getSampleTypes(){return this._sampleTypes}findSampleType(name){return this._sampleTypes.find((element=>element.name===name))}InitChromatographySampleTypes(){this._sampleTypes.push({name:"Default",color:null}),this._sampleTypes.push({name:"Sample",color:ColorUtils.AGILENT_SAMPLE_COLOR}),this._sampleTypes.push({name:"Blank",color:ColorUtils.AGILENT_BLANK_COLOR}),this._sampleTypes.push({name:"Double Blank",color:ColorUtils.AGILENT_DOUBLE_BLANK_COLOR}),this._sampleTypes.push({name:"Calibration Standard",color:ColorUtils.AGILENT_CALIBRATION_STANDARD_COLOR}),this._sampleTypes.push({name:"QC Check",color:ColorUtils.AGILENT_QC_CHECK_COLOR}),this._sampleTypes.push({name:"Spike",color:ColorUtils.AGILENT_SPIKE_COLOR}),this._sampleTypes.push({name:"System Suitability",color:ColorUtils.AGILENT_SYSTEM_SUITABILITY_COLOR})}}class Point{constructor(x,y){this.x=x,this.y=y}}class DrawableItem{constructor(style){this.style=style,this.ratio=1}transformContextAndDrawIcon(context,image,iconCoordinates,ratio,iconSize,rotation){context.save(),180===rotation?context.translate(iconCoordinates.x*ratio+iconSize/2,iconCoordinates.y*ratio+iconSize/2):90===rotation?context.translate(iconCoordinates.x*ratio-iconSize/2,iconCoordinates.y*ratio+iconSize/2):270===rotation&&context.translate(iconCoordinates.x*ratio+iconSize/2,iconCoordinates.y*ratio-iconSize/2),context.rotate(-rotation*Math.PI/180),context.drawImage(image,0,0,iconSize,iconSize),context.restore()}}class EllipseItem extends DrawableItem{get cX(){return this._cX}get cY(){return this._cY}get rX(){return this._rX}get rY(){return this._rY}get height(){return 2*this.rY}get width(){return 2*this.rX}constructor(style,cX,cY,rX,rY){if(super(style),null==cX||null==cY||null==rX||null==rY)throw new Error("Ellipse data is missing");this._cX=cX,this._cY=cY,this._rX=rX,this._rY=rY}draw(context,ratio,isWidthRelative=!0,isSelected=!1,isHovered=!1,fillColor){this.ratio=ratio,context.beginPath(),context.fillStyle=fillColor||this.style.fillColor,context.strokeStyle=this.style.strokeColor,this.style.strokeWidth>0&&(context.lineWidth=isWidthRelative?this.style.strokeWidth*this.ratio:this.style.strokeWidth),isWidthRelative?context.ellipse(this.cX*this.ratio,this.cY*this.ratio,(this.rX-this.style.strokeWidth)*this.ratio,(this.rY-this.style.strokeWidth)*this.ratio,0,0,360):context.ellipse(this.cX*this.ratio+context.lineWidth,this.cY*this.ratio+context.lineWidth,this.rX*this.ratio+context.lineWidth,this.rY*this.ratio+context.lineWidth,0,0,360),isSelected&&(context.strokeStyle=this.style.selectedStrokeColor,context.lineWidth+=2),isHovered&&(context.fillStyle=this.style.hoverFillColor,context.strokeStyle=this.style.hoverStrokeColor,context.lineWidth+=2),context.fill(),context.stroke(),context.closePath()}drawIcon(context,ratio,sampleStatus,containerRotation){if(sampleStatus.svg){const size=2*this.rX*ratio/2.5,sizeMin=size>20?size:20,iconAngle=containerRotation?45-containerRotation:45,coordinates=this.coordinatesFromAngle(iconAngle);containerRotation&&0!==containerRotation?this.transformContextAndDrawIcon(context,sampleStatus.svg,coordinates,ratio,sizeMin,containerRotation):context.drawImage(sampleStatus.svg,coordinates.x*ratio-sizeMin/2,coordinates.y*ratio-sizeMin/2,sizeMin,sizeMin)}}canDrawIcon(ratio){const size=2*this.rX*ratio/2.5;return(size>20?size:20)<2*this.rX*ratio}setSize(sampleContainer){sampleContainer.width=2*this.rX+1,sampleContainer.height=2*this.rY+1}contains(x,y,offsetX,offsetY){return Math.sqrt((x-offsetX-this.cX*this.ratio)*(x-offsetX-this.cX*this.ratio)+(y-offsetY-this.cY*this.ratio)*(y-offsetY-this.cY*this.ratio))<this.rX*this.ratio}coordinatesFromAngle(angleDegrees){const angleRadians=angleDegrees*Math.PI/180;return new Point(this._cX+(this._rX-this.style.strokeWidth)*Math.cos(angleRadians),this._cY+(this._rY-this.style.strokeWidth)*Math.sin(angleRadians))}center(){return new Point(this.cX*this.ratio,this.cY*this.ratio)}translate(deltaX,deltaY){const item=new EllipseItem(this.style,this.cX+deltaX,this.cY+deltaY,this.rX,this.rY);return item.ratio=this.ratio,item}}class RectangleItem extends DrawableItem{get initX(){return this._initX}get initY(){return this._initY}get width(){return this._width}get height(){return this._height}constructor(style,initX,initY,width,height){if(super(style),this.maximumRatioIconItem=.6,null==initX||null==initY||null==width||null==height)throw new Error("Rectangle data is missing");this._initX=initX,this._initY=initY,this._width=width,this._height=height}draw(context,ratio,isWidthRelative=!0,isSelected=!1,isHovered=!1,fillColor){if(this.ratio=ratio,context.beginPath(),context.fillStyle=fillColor||this.style.fillColor,context.strokeStyle=this.style.strokeColor||"black",this.style.strokeWidth>0&&(context.lineWidth=isWidthRelative?this.style.strokeWidth*this.ratio:this.style.strokeWidth),isWidthRelative){context.lineWidth=this.style.strokeWidth*this.ratio;const fullStrokeWidth=2*this.style.strokeWidth;context.rect((this.initX+this.style.strokeWidth)*this.ratio,(this.initY+this.style.strokeWidth)*this.ratio,(this.width-fullStrokeWidth)*this.ratio,(this.height-fullStrokeWidth)*this.ratio)}else context.rect(this.initX*this.ratio+context.lineWidth,this.initY*this.ratio+context.lineWidth,this.width*this.ratio-2*context.lineWidth,this.height*this.ratio-2*context.lineWidth);isSelected&&(context.strokeStyle=this.style.selectedStrokeColor,context.lineWidth+=2),isHovered&&(context.fillStyle=this.style.hoverFillColor,context.strokeStyle=this.style.hoverStrokeColor,context.lineWidth+=2),context.closePath(),context.stroke(),context.fill()}drawIcon(context,ratio,sampleStatus,containerRotation){if(sampleStatus.svg){const size=this.width*ratio/2.5,sizeMin=size>20?size:20;let coordinates;containerRotation&&0!==containerRotation?(coordinates=this.calculateIconCoordinates(containerRotation),this.transformContextAndDrawIcon(context,sampleStatus.svg,coordinates,ratio,sizeMin,containerRotation)):(coordinates=new Point(this._initX+this.width-this.style.strokeWidth,this._initY+this.height-this.style.strokeWidth),context.drawImage(sampleStatus.svg,coordinates.x*ratio-sizeMin*this.getSpacing(),coordinates.y*ratio-sizeMin*this.getSpacing(),sizeMin,sizeMin))}}canDrawIcon(ratio){const size=2*this.width*ratio/2.5,sizeMin=size>20?size:20;return Math.PI*sizeMin/2*sizeMin/2/(this.width*ratio*this.height*ratio)<this.maximumRatioIconItem}setSize(sampleContainer){sampleContainer.width=this.width+1,sampleContainer.height=this.height+1,sampleContainer.initX=this.initX,sampleContainer.initY=this.initY}contains(x,y,offsetX,offsetY){return this.initX*this.ratio<=x-offsetX&&x-offsetX<=this.initX*this.ratio+this.width*this.ratio&&this.initY*this.ratio<=y-offsetY&&y-offsetY<=this.initY*this.ratio+this.height*this.ratio}translate(deltaX,deltaY){const item=new RectangleItem(this.style,this.initX+deltaX,this.initY+deltaY,this.width,this.height);return item.ratio=this.ratio,item}center(){return new Point((this.initX+this.width/2)*this.ratio,(this.initY+this.height/2)*this.ratio)}getSpacing(){return this.isIconLargerThanSpacing(this.columnSpacing)||this.isIconLargerThanSpacing(this.rowSpacing)?.7:.5}isIconLargerThanSpacing(spacing){const size=2*this.width/2.5;return spacing&&spacing<=(size>20?size:20)}calculateIconCoordinates(rotation){switch(rotation){case 90:return new Point(this._initX+this.width-this.style.strokeWidth,this._initY);case 180:return new Point(this._initX,this._initY);default:return new Point(this._initX,this._initY+this.height-this.style.strokeWidth)}}}class VialSelector{constructor(startVial,endVial,isSerpentine){this.startVial=startVial,this.endVial=endVial,this.isSerpentine=isSerpentine}}class ColumnVialSelector extends VialSelector{constructor(starVial,endVial,isSerpentine){super(starVial,endVial,isSerpentine)}next(vialsList,selectedVial){let nextVial;const colIterator=this.endVial.containerColPosition-this.startVial.containerColPosition>=0?1:-1,isSerpentineCol=this.isSerpentine&&(selectedVial.containerColPosition-this.startVial.containerColPosition)%2!=0,isNextRowSerpentineCol=this.isSerpentine&&!isSerpentineCol,rowIterator=this.endVial.containerRowPosition-this.startVial.containerRowPosition>=0?1:-1,selectionIterator=this.endVial.containerColPosition-this.startVial.containerColPosition==0?rowIterator:colIterator,iterator=isSerpentineCol?-1*selectionIterator:selectionIterator;return nextVial=vialsList.find((vial=>vial.containerRowPosition===selectedVial.containerRowPosition+1*iterator&&vial.containerColPosition===selectedVial.containerColPosition)),void 0===nextVial&&(nextVial=vialsList.find((vial=>vial.containerColPosition===selectedVial.containerColPosition+1*colIterator&&vial.containerRowPosition===this.getNextColFirstPosition(vialsList,selectedVial,colIterator,isNextRowSerpentineCol)))),nextVial}getNextColFirstPosition(vialsList,selectedVial,colIterator,isNextRowSerpentineCol){const vialList=vialsList.filter((vial=>vial.containerColPosition===selectedVial.containerColPosition+1*colIterator));return colIterator>0?isNextRowSerpentineCol?Math.max(...vialList.map((vial=>vial.containerRowPosition))):Math.min(...vialList.map((vial=>vial.containerRowPosition))):isNextRowSerpentineCol?Math.min(...vialList.map((vial=>vial.containerRowPosition))):Math.max(...vialList.map((vial=>vial.containerRowPosition)))}}class RectangleHorizontalVialSelector extends VialSelector{constructor(starVial,endVial,isSerpentine){super(starVial,endVial,isSerpentine)}next(vialsList,selectedVial){let nextVial;const rowIterator=this.endVial.containerRowPosition-this.startVial.containerRowPosition>0?1:-1,colIterator=this.endVial.containerColPosition-this.startVial.containerColPosition>=0?1:-1,isSerpentineRow=this.isSerpentine&&(selectedVial.containerRowPosition-this.startVial.containerRowPosition)%2!=0,isNextColSerpentineRow=this.isSerpentine&&!isSerpentineRow;if(this.isColNext(selectedVial,colIterator,isSerpentineRow)){const iterator=isSerpentineRow?-1*colIterator:colIterator;nextVial=vialsList.find((vial=>vial.containerColPosition===selectedVial.containerColPosition+1*iterator&&vial.containerRowPosition===selectedVial.containerRowPosition))}return void 0===nextVial&&this.isRowNext(selectedVial,rowIterator)&&(nextVial=vialsList.find((vial=>vial.containerRowPosition===selectedVial.containerRowPosition+1*rowIterator&&vial.containerColPosition===this.getFirstVialPositionFromNextRow(vialsList,selectedVial,colIterator,rowIterator,isNextColSerpentineRow)))),nextVial}isColNext(selectedVial,colIterator,isSerpentineRow){return isSerpentineRow?colIterator>0?selectedVial.containerColPosition>this.startVial.containerColPosition:selectedVial.containerColPosition<this.startVial.containerColPosition:colIterator>0?selectedVial.containerColPosition<this.endVial.containerColPosition:selectedVial.containerColPosition>this.endVial.containerColPosition}isRowNext(selectedVial,rowIterator){return rowIterator>0?selectedVial.containerRowPosition<this.endVial.containerRowPosition:selectedVial.containerRowPosition>this.endVial.containerRowPosition}getFirstVialPositionFromNextRow(vialsList,selectedVial,colIterator,rowIterator,isNextColSerpentineRow){let vialList;return colIterator>0?(vialList=vialsList.filter((vial=>vial.containerRowPosition===selectedVial.containerRowPosition+1*rowIterator&&vial.containerColPosition>=this.startVial.containerColPosition&&vial.containerColPosition<=this.endVial.containerColPosition)),isNextColSerpentineRow?Math.max(...vialList.map((vial=>vial.containerColPosition))):Math.min(...vialList.map((vial=>vial.containerColPosition)))):(vialList=vialsList.filter((vial=>vial.containerRowPosition===selectedVial.containerRowPosition+1*rowIterator&&vial.containerColPosition<=this.startVial.containerColPosition&&vial.containerColPosition>=this.endVial.containerColPosition)),isNextColSerpentineRow?Math.min(...vialList.map((vial=>vial.containerColPosition))):Math.max(...vialList.map((vial=>vial.containerColPosition))))}}class RectangleVerticalVialSelector extends VialSelector{constructor(starVial,endVial,isSerpentine){super(starVial,endVial,isSerpentine)}next(vialsList,selectedVial){let nextVial;const colIterator=this.endVial.containerColPosition-this.startVial.containerColPosition>0?1:-1,rowIterator=this.endVial.containerRowPosition-this.startVial.containerRowPosition>0?1:-1,isSerpentineCol=this.isSerpentine&&(selectedVial.containerColPosition-this.startVial.containerColPosition)%2!=0,isNextRowSerpentineCol=this.isSerpentine&&!isSerpentineCol;if(this.isRowNext(selectedVial,rowIterator,isSerpentineCol)){const iterator=isSerpentineCol?-1*rowIterator:rowIterator;nextVial=vialsList.find((vial=>vial.containerRowPosition===selectedVial.containerRowPosition+1*iterator&&vial.containerColPosition===selectedVial.containerColPosition))}return void 0===nextVial&&this.isColNext(selectedVial,colIterator)&&(nextVial=vialsList.find((vial=>vial.containerColPosition===selectedVial.containerColPosition+1*colIterator&&vial.containerRowPosition===this.getFirstVialPositionFromNextCol(vialsList,selectedVial,colIterator,rowIterator,isNextRowSerpentineCol)))),nextVial}isColNext(selectedVial,colIterator){return colIterator>0?selectedVial.containerColPosition<this.endVial.containerColPosition:selectedVial.containerColPosition>this.endVial.containerColPosition}isRowNext(selectedVial,rowIterator,isSerpentineCol){return isSerpentineCol?rowIterator>0?selectedVial.containerRowPosition>this.startVial.containerRowPosition:selectedVial.containerRowPosition<this.startVial.containerRowPosition:rowIterator>0?selectedVial.containerRowPosition<this.endVial.containerRowPosition:selectedVial.containerRowPosition>this.endVial.containerRowPosition}getFirstVialPositionFromNextCol(vialsList,selectedVial,colIterator,rowIterator,isNextRowSerpentineCol){let vialList;return rowIterator>0?(vialList=vialsList.filter((vial=>vial.containerColPosition===selectedVial.containerColPosition+1*colIterator&&vial.containerRowPosition>=this.startVial.containerRowPosition&&vial.containerRowPosition<=this.endVial.containerRowPosition)),isNextRowSerpentineCol?Math.max(...vialList.map((vial=>vial.containerRowPosition))):Math.min(...vialList.map((vial=>vial.containerRowPosition)))):(vialList=vialsList.filter((vial=>vial.containerColPosition===selectedVial.containerColPosition+1*colIterator&&vial.containerRowPosition<=this.startVial.containerRowPosition&&vial.containerRowPosition>=this.endVial.containerRowPosition)),isNextRowSerpentineCol?Math.min(...vialList.map((vial=>vial.containerRowPosition))):Math.max(...vialList.map((vial=>vial.containerRowPosition))))}}class RowVialSelector extends VialSelector{constructor(starVial,endVial,isSerpentine){super(starVial,endVial,isSerpentine)}next(vialsList,selectedVial){let nextVial;const rowIterator=this.endVial.containerRowPosition-this.startVial.containerRowPosition>0?1:-1,isSerpentineRow=this.isSerpentine&&(selectedVial.containerRowPosition-this.startVial.containerRowPosition)%2!=0,isNextColSerpentineRow=this.isSerpentine&&!isSerpentineRow,colIterator=this.endVial.containerColPosition-this.startVial.containerColPosition>=0?1:-1,selectionIterator=this.endVial.containerRowPosition-this.startVial.containerRowPosition==0?colIterator:rowIterator,iterator=isSerpentineRow?-1*selectionIterator:selectionIterator;return nextVial=vialsList.find((vial=>vial.containerColPosition===selectedVial.containerColPosition+1*iterator&&vial.containerRowPosition===selectedVial.containerRowPosition)),void 0===nextVial&&(nextVial=vialsList.find((vial=>vial.containerRowPosition===selectedVial.containerRowPosition+1*rowIterator&&vial.containerColPosition===this.getNextRowFirstPosition(vialsList,selectedVial,rowIterator,isNextColSerpentineRow)))),nextVial}getNextRowFirstPosition(vialsList,selectedVial,rowIterator,isNextColSerpentineRow){const vialList=vialsList.filter((vial=>vial.containerRowPosition===selectedVial.containerRowPosition+1*rowIterator));return rowIterator>0?isNextColSerpentineRow?Math.max(...vialList.map((vial=>vial.containerColPosition))):Math.min(...vialList.map((vial=>vial.containerColPosition))):isNextColSerpentineRow?Math.min(...vialList.map((vial=>vial.containerColPosition))):Math.max(...vialList.map((vial=>vial.containerColPosition)))}}class SampleInfo{constructor(sampleType="Default",text="",sampleStatus="None",textSize=0){this.sampleType=sampleType,this.text=text,this.sampleStatus=sampleStatus,this.textSize=textSize}isEmpty(){return"Default"===this.sampleType&&""===this.text&&"None"===this.sampleStatus&&0===this.textSize}}var MultipleSelectionType,SelectionMode,SelectionOrder,ArrowPart;!function(MultipleSelectionType){MultipleSelectionType.None="none",MultipleSelectionType.Multiple="multiple",MultipleSelectionType.MultipleContinuous="multipleContinuous"}(MultipleSelectionType||(MultipleSelectionType={}));class SourceDestinationVialMapping{constructor(sourceVialInfo,destinationVial){this.sourceVialInfo=sourceVialInfo,this.destinationVial=destinationVial}}!function(SelectionMode){SelectionMode.Single="Single",SelectionMode.Row="Row",SelectionMode.Column="Column",SelectionMode.RectangleHorizontal="RectangleHorizontal",SelectionMode.RectangleVertical="RectangleVertical"}(SelectionMode||(SelectionMode={})),function(SelectionOrder){SelectionOrder.Linear="Linear",SelectionOrder.Serpentine="Serpentine"}(SelectionOrder||(SelectionOrder={})),function(ArrowPart){ArrowPart.Body="Body",ArrowPart.Head1="Head1",ArrowPart.Head2="Head2"}(ArrowPart||(ArrowPart={}));class SelectionController{constructor(){this.selectionMode=SelectionMode.Row,this.selectionOrder=SelectionOrder.Linear,this.sourceToDestinationVialMap=[],this.lastCanDropValue=!1,this._selectedVials=[],this._sourceVials=[],this.isMovingToSamePosition=!1}get selectedVials(){return this._selectedVials}get destinationVials(){return this.sourceToDestinationVialMap.map((item=>item.destinationVial))}clearSelection(vialsList){this._selectedVials=[],this._topRightSelectedVial=void 0,vialsList.forEach((vial=>{vial.selected=!1}))}selectSingleVial(selectedVial,isManualSelection=!0,selected=!0){selectedVial.selected=isManualSelection?!selectedVial.selected:selected,selectedVial.selected?this._selectedVials.push(selectedVial):this.removeVial(selectedVial),this.lastSelectedVial=selectedVial}selectVialRange(vialsList,selectedVial){const isSerpentine=this.selectionOrder===SelectionOrder.Serpentine;this.lastSelectedVial&&this.getVialsAccordingToSelectionMode(vialsList,this.lastSelectedVial,selectedVial,isSerpentine)}selectAllVials(vialsList){const vialList=this.sortVialsList(vialsList),currentSelectedVial=vialList[vialList.length-1];this.lastSelectedVial=vialList[0],this.getVialsAccordingToSelectionMode(vialsList,this.lastSelectedVial,currentSelectedVial,!1)}removeVial(selectedVial){const index=this._selectedVials.indexOf(selectedVial);index>-1&&this._selectedVials.splice(index,1)}sortVialsList(vialsList){const vialList=[...vialsList];return this.selectionMode===SelectionMode.Row||this.selectionMode===SelectionMode.RectangleHorizontal?vialList.sort(((a,b)=>a.containerRowPosition-b.containerRowPosition||a.containerColPosition-b.containerColPosition)):vialList.sort(((a,b)=>a.containerColPosition-b.containerColPosition||a.containerRowPosition-b.containerRowPosition))}getVialsAccordingToSelectionMode(vialsList,startVial,endVial,isSerpentine){let nextVial=startVial,calculatedEndVial=endVial;if(isSerpentine&&(calculatedEndVial=this.getSerpentineEndVial(vialsList,startVial,endVial)),this.selector=this.getNextSelector(startVial,endVial,isSerpentine),this.selector&&nextVial)for(this._selectedVials.includes(nextVial)||(this._selectedVials.push(startVial),startVial.selected=!0);nextVial&&(nextVial.containerColPosition!==calculatedEndVial.containerColPosition||nextVial.containerRowPosition!==calculatedEndVial.containerRowPosition);)nextVial=this.selector.next(vialsList,nextVial),nextVial&&this.addSelectedVial(nextVial)}addSelectedVial(vial){this._selectedVials.includes(vial)&&this.removeVial(vial),vial.selected=!0,this._selectedVials.push(vial)}getSerpentineEndVial(vialsList,startVial,endVial){let calculatedEndVial;return this.selectionMode===SelectionMode.RectangleHorizontal&&(endVial.containerRowPosition-startVial.containerRowPosition)%2!=0&&(calculatedEndVial=vialsList.find((vial=>vial.containerColPosition===startVial.containerColPosition&&vial.containerRowPosition===endVial.containerRowPosition))),this.selectionMode===SelectionMode.RectangleVertical&&(endVial.containerColPosition-startVial.containerColPosition)%2!=0&&(calculatedEndVial=vialsList.find((vial=>vial.containerRowPosition===startVial.containerRowPosition&&vial.containerColPosition===endVial.containerColPosition))),calculatedEndVial??endVial}getNextSelector(startVial,endVial,isSerpentine){if(this.lastSelectedVial)switch(this.selectionMode){case SelectionMode.Column:return new ColumnVialSelector(startVial,endVial,isSerpentine);case SelectionMode.RectangleHorizontal:return new RectangleHorizontalVialSelector(startVial,endVial,isSerpentine);case SelectionMode.RectangleVertical:return new RectangleVerticalVialSelector(startVial,endVial,isSerpentine);case SelectionMode.Row:default:return new RowVialSelector(startVial,endVial,isSerpentine)}}selectVial(sampleContainer,event,offset,multiSelection,keepPreviousSelection){const selectedVial=this.getVialFromCoordinates(sampleContainer,event,offset);selectedVial&&(multiSelection!==MultipleSelectionType.None&&this.selectionMode!==SelectionMode.Single||this.clearSelection(sampleContainer.vialsList),multiSelection===MultipleSelectionType.MultipleContinuous&&this.selectionMode!==SelectionMode.Single&&this.lastSelectedVial?(keepPreviousSelection?this.updateContinuousSelection():this.clearSelection(sampleContainer.vialsList),this.selectVialRange(sampleContainer.vialsList,selectedVial)):this.selectSingleVial(selectedVial))}updateContinuousSelection(){const lastSelectedIndex=this._selectedVials.indexOf(this.lastSelectedVial);if(-1!==lastSelectedIndex&&lastSelectedIndex!==this._selectedVials.length-1)for(let i=this._selectedVials.length-1;i>=lastSelectedIndex;i--){const vialToRemove=this._selectedVials[i];this.selectSingleVial(vialToRemove,!1,!1)}}getVialFromCoordinates(sampleContainer,event,offset){if(0===sampleContainer.rotation)return sampleContainer.vialsList.find((v=>v.drawableItem?.contains(event.x,event.y,offset.x,offset.y)));const eventPoint=new DOMPoint(event.x,event.y),transformedOffset=new DOMPoint(offset.x,offset.y),transformedPoint=eventPoint.matrixTransform(sampleContainer.transformMatrix.inverse());return 90===sampleContainer.rotation?(transformedOffset.x=offset.y,transformedOffset.y=-offset.x):180===sampleContainer.rotation?(transformedOffset.x=-offset.x,transformedOffset.y=-offset.y):270===sampleContainer.rotation&&(transformedOffset.x=-offset.y,transformedOffset.y=offset.x),sampleContainer.vialsList.find((v=>v.drawableItem?.contains(transformedPoint.x,transformedPoint.y,transformedOffset.x,transformedOffset.y)))}getTopRightSelectedVial(){let topRightVial;return this._selectedVials.forEach((vial=>{(!topRightVial||vial.xCoordinate>topRightVial.xCoordinate||vial.xCoordinate===topRightVial.xCoordinate&&vial.yCoordinate<topRightVial.yCoordinate)&&(topRightVial=vial)})),this._topRightSelectedVial=topRightVial,topRightVial}getVialAtCurrentPositionWhenMoving(sampleContainer,eventPosition,moveStartPosition){let vialAtCurrentPosition,deltaX=0,deltaY=0;return this._topRightSelectedVial&&(this._topRightSelectedVial.drawableItem instanceof EllipseItem?(deltaX=moveStartPosition.x/sampleContainer.globalRatio-this._topRightSelectedVial.xCoordinate,deltaY=this._topRightSelectedVial.yCoordinate-moveStartPosition.y/sampleContainer.globalRatio):this._topRightSelectedVial.drawableItem instanceof RectangleItem&&(deltaX=(moveStartPosition.x-this._topRightSelectedVial.drawableItem.center().x)/sampleContainer.globalRatio,deltaY=(this._topRightSelectedVial.drawableItem.center().y-moveStartPosition.y)/sampleContainer.globalRatio),vialAtCurrentPosition=this.getVialFromCoordinates(sampleContainer,new Point(eventPosition.x-deltaX*sampleContainer.globalRatio,eventPosition.y+deltaY*sampleContainer.globalRatio),new Point(0,0))),vialAtCurrentPosition}buildSourceDestinationVialsMap(destTopRightVial,vialList){if(this.isMovingToSamePosition=!1,this.sourceToDestinationVialMap=[],this._sourceVials=[],this._topRightSelectedVial){const rowDelta=destTopRightVial.containerRowPosition-this._topRightSelectedVial.containerRowPosition,colDelta=destTopRightVial.containerColPosition-this._topRightSelectedVial.containerColPosition;for(const sourceVial of this._selectedVials){const destinationVial=vialList.find((vial=>vial.containerRowPosition===sourceVial.containerRowPosition+rowDelta&&vial.containerColPosition===sourceVial.containerColPosition+colDelta));if(void 0===destinationVial)return this.sourceToDestinationVialMap=[],this._sourceVials=[],this.lastCanDropValue=!1,!1;destinationVial.identifier===sourceVial.identifier&&(this.isMovingToSamePosition=!0),this.sourceToDestinationVialMap.push(new SourceDestinationVialMapping(sourceVial.sampleInfo,destinationVial)),this._sourceVials.push(sourceVial)}}return this.lastCanDropValue=this.sourceToDestinationVialMap.length>0,this.sourceToDestinationVialMap.length>0}selectDestinationVials(){this._selectedVials=[],this._sourceVials.forEach((vial=>{vial.selected=!1,vial.sampleInfo=new SampleInfo})),this.sourceToDestinationVialMap.forEach((pair=>{pair.destinationVial.sampleInfo=pair.sourceVialInfo,pair.destinationVial.selected=!0,this._selectedVials.push(pair.destinationVial)})),this.sourceToDestinationVialMap=[]}checkDestinationVialsAreEmpty(){return this.destinationVials.every((v=>v.sampleInfo.isEmpty()))}clearSelectionIfOutsideVials(sampleContainer,mousePosition,offset){return!this.getVialFromCoordinates(sampleContainer,mousePosition,offset)&&(this.clearSelection(sampleContainer.vialsList),!0)}}let AwfColorSlydini=class AwfColorSlydini extends lit.oi{updated(_changedProperties){(_changedProperties.has("value")||_changedProperties.has("name"))&&this.dispatchEvent(createCustomEvent(AwfEvent.VALUE_CHANGE,{name:this.name,value:this.value}))}render(){return lit.dy``}};(0,tslib_es6.gn)([(0,decorators.Cb)({type:String,reflect:!0})],AwfColorSlydini.prototype,"name",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)({type:String,reflect:!0})],AwfColorSlydini.prototype,"value",void 0),AwfColorSlydini=(0,tslib_es6.gn)([(0,awf_custom_element.M)("awf-color",!0)],AwfColorSlydini);let AwfColorPaletteSlydini=class AwfColorPaletteSlydini extends lit.oi{render(){return lit.dy``}};AwfColorPaletteSlydini=(0,tslib_es6.gn)([(0,awf_custom_element.M)("awf-color-palette",!0)],AwfColorPaletteSlydini);var EmptyError=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/EmptyError.js"),Subscriber=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subscriber.js");const MODAL_DIALOG_CSS_VARIABLES=lit.iv`
    :host {
        /* Modal Dialog Colors */
        --awf-modal-dialog-screen-blurring-color-inner: var(--awf-modal-dialog-screen-blurring-color, rgb(56, 67, 80, 0.6));

        /* Modal Dialog Measurements */
        --awf-modal-dialog-base-padding-inner: var(--awf-modal-dialog-base-padding, 16px);
        --awf-modal-dialog-header-padding-inner: var(--awf-modal-dialog-header-padding, calc(0.5 * var(--awf-modal-dialog-base-padding-inner)) calc(0.25 * var(--awf-modal-dialog-base-padding-inner)) calc(0.5 * var(--awf-modal-dialog-base-padding-inner)) var(--awf-modal-dialog-base-padding-inner));
        --awf-modal-dialog-actions-padding-inner: var(--awf-modal-dialog-actions-padding, calc(0.5 * var(--awf-modal-dialog-base-padding-inner)));
        --awf-modal-dialog-content-padding-inner: var(--awf-modal-dialog-content-padding, calc(0.5 * var(--awf-modal-dialog-base-padding-inner)) var(--awf-modal-dialog-base-padding-inner));
        --awf-modal-dialog-height-inner: var(--awf-modal-dialog-height, auto);
        --awf-modal-dialog-width-inner: var(--awf-modal-dialog-width, auto);
        --awf-modal-dialog-header-gap-inner: var(--awf-modal-dialog-header-gap, 8px);
    }
`;function slotChange(){const target=this.shadowRoot.querySelector("slot:not([name])");target&&moveElementsIntoSlot(target,"[actions]","actions")}function handleActionButtonClick(event){if(event.target instanceof AwfButton){const text=function getButtonText(button){const[textNode]=Array.from(button.childNodes).filter((node=>node.nodeType===Node.TEXT_NODE));return textNode.textContent}(event.target);if(text){const type=function getEventType(text){return text.replace(" ","").toLowerCase()}(text),customEvent=new CustomEvent(type,{bubbles:!0,composed:!0});this.dispatchEvent(customEvent)}}}const MODAL_DIALOG_STYLES=lit.iv`

    :host {
        z-index: var(--awf-elevation-z6);
        display: inherit;
    }

    .dialog {
        position:absolute;
        z-index: var(--awf-elevation-z6);
        background-color: var(--at-white);
        border: 1px solid var(--at-gray-soft);
        box-shadow: 2px 2px 16px 0px rgba(56, 67, 80, 0.32);
        height: var(--awf-modal-dialog-height-inner);
        width: var(--awf-modal-dialog-width-inner);
        box-sizing: border-box;
        max-height: 98%;
        max-width: 98%;
        display: grid;
        grid-template-rows: auto 1fr auto;
        grid-template-areas: 'header' 'content' 'actions';
    }

    .actions {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: var(--awf-modal-dialog-actions-padding-inner);
        border-top: 1px solid var(--at-gray);
        max-height: 50px;
        box-sizing: border-box;
        grid-area: actions;
    }

    .actions ::slotted(awf-button) {
        margin-left: 8px;
    }

    .title {
        flex: 1 1 0;
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .header {
        font-size: 1.375rem;
        padding: var(--awf-modal-dialog-header-padding-inner);
        border-bottom: 1px solid var(--at-gray);
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        height: var(--awf-button-height-inner);
        grid-area: header;
        gap: var(--awf-modal-dialog-header-gap-inner);
        overflow: hidden;
    }

    .header-options {
        display: flex;
        gap: var(--awf-modal-dialog-header-gap-inner);
    }


    .header-options ::slotted([slot="custom-header-options"]) {
        display: flex;
        gap: var(--awf-modal-dialog-header-gap-inner);
    }

    .content {
        padding: var(--awf-modal-dialog-content-padding-inner);
        box-sizing: border-box;
        grid-area: content;
        overflow: auto;
    }

    .close-button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        padding: 0;
        border: none;
        background-color: transparent;
        cursor: pointer;
    }

    .close-button-hidden {
        display: none;
    }
`;let AwfModalDialog=class AwfModalDialog extends lit.oi{constructor(){super(...arguments),this.header="",this.showCloseButton=!1}render(){return lit.dy`
            <div class="dialog">
                <div class="header">
                    <div class="title">${this.header}</div>
                    <div class="header-options">
                        <slot name="custom-header-options"></slot>
                        <awf-button
                            aria-label="close"
                            class="${this.showCloseButton?"close-button":"close-button-hidden"}"
                            @click=${this.handleClose}
                        >
                            <awf-icon raw=${delete_cross.C} slot="icon"></awf-icon>
                        </awf-button>
                    </div>
                </div>
                <div class="content"><slot @slotchange=${this.slotChange}></slot></div>
                <div class="actions"><slot name="actions" @click=${handleActionButtonClick}></slot></div>
            </div>
        `}handleClose(){this.dispatchEvent(new CustomEvent(AwfEvent.CLOSE,{composed:!0,bubbles:!0,cancelable:!0}))}slotChange(){const target=this.shadowRoot.querySelector("slot:not([name])");target&&(this.setActionsSlot(),moveElementsIntoSlot(target,"[actions]","actions"))}setActionsSlot(){const actionsElement=this.shadowRoot.querySelector(".actions"),slottedElements=this.shadowRoot.querySelector("slot[name=actions]")?.assignedNodes(),displayValue=0===slottedElements.length?"none":"flex";actionsElement?.style.setProperty("display",displayValue)}};AwfModalDialog.styles=[COMMON_STYLES,BUTTON_CSS_VARIABLES,MODAL_DIALOG_CSS_VARIABLES,MODAL_DIALOG_STYLES],(0,tslib_es6.gn)([(0,decorators.Cb)()],AwfModalDialog.prototype,"header",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)({type:Boolean,reflect:!0})],AwfModalDialog.prototype,"showCloseButton",void 0),AwfModalDialog=(0,tslib_es6.gn)([(0,awf_custom_element.M)("awf-modal-dialog",!0)],AwfModalDialog);const MODAL_STYLES=lit.iv`

    :host {
        --awf-modal-dialog-height-inner: var(--awf-modal-dialog-height, auto);
        --awf-modal-dialog-width-inner: var(--awf-modal-dialog-width, auto);
    }

    :host {
        position:fixed;
        top:0;
        left:0;
        z-index: var(--awf-elevation-z6);
    }

    .wrapper{
        opacity:0;
        visibility: hidden;
        pointer-events:none;
        transition: opacity var(--transition-duration) var(--transition-timing-function);
        z-index: var(--awf-elevation-z6);
        position: fixed;
        left:0;
        left:0;
        width:100%;
        height:100%;
    }

    :host([open]) .wrapper {
        opacity: 1;
        visibility: visible;
        pointer-events: all;
    }

    .background{
        position:relative;
        display:flex;
        justify-content:center;
        align-items:center;
        width:100%;
        height:100%;
        background-color: var(--awf-modal-dialog-screen-blurring-color-inner);
        z-index: var(--awf-elevation-z5);
    }

    .modal-content{
        position:absolute;
        z-index: var(--awf-elevation-z6);
        background-color: var(--at-white);
        box-shadow: 2px 2px 16px 0px rgba(56, 67, 80, 0.32);
        box-sizing: border-box;
        width: var(--modal-dialog-width);
        height: var(--modal-dialog-height);
        border: 1px solid var(--at-gray-soft);
        max-height: 98%;
        max-width: 98%;
    }

    .actions ::slotted(awf-button) {
        margin-left: 8px;
    }

`,focusableElementsSelector=["a[href]","area[href]","input:not([disabled])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","iframe","object","embed",'*[tabindex]:not([tabindex="-1"])',"*[contenteditable]"].join(",");let AwfModal=class AwfModal extends lit.oi{constructor(){super(...arguments),this.open=!1,this._trapFocusHandler=this.trapFocusHandler.bind(this),this._handleEscape=this.handleEscape.bind(this)}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this._trapFocusHandler),document.addEventListener("keydown",this._handleEscape)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this._trapFocusHandler),document.removeEventListener("keydown",this._handleEscape)}render(){return lit.dy`
            <div class="wrapper">
                <div class="background">
                    <slot name="content"></slot>
                </div>
            </div>
        `}openModal(){return this.open=!0,this.open}closeModal(){return this.open=!1,!this.open}filterAndSortElementArray(elements){const closeButton=document.querySelector("* awf-modal")?.shadowRoot?.querySelector("* awf-modal-dialog")?.shadowRoot?.querySelector("div.header > awf-button.close-button")?.shadowRoot?.querySelector("button"),hiddenCloseButton=document.querySelector("* awf-modal")?.shadowRoot?.querySelector("* awf-modal-dialog")?.shadowRoot?.querySelector("div.header > awf-button.close-button-hidden")?.shadowRoot?.querySelector("button"),filteredElements=elements.filter((e=>e.matches(focusableElementsSelector))),sortedElements=[...filteredElements.filter((ele=>{const style=window.getComputedStyle(ele);return"none"!==style.display&&"hidden"!==style.visibility&&ele!==closeButton}))].sort(((a,b)=>{const tabIndexA=a.getAttribute("tabindex"),sortA=Number.isNaN(tabIndexA)||0===Number(tabIndexA)?Number.MAX_VALUE:Number(tabIndexA),tabIndexB=b.getAttribute("tabindex");return sortA-(Number.isNaN(tabIndexB)||0===Number(tabIndexB)?Number.MAX_VALUE:Number(tabIndexB))}));if(closeButton)return[closeButton,...sortedElements];if(hiddenCloseButton){const index=sortedElements.indexOf(hiddenCloseButton);index>-1&&sortedElements.splice(index,1)}return sortedElements}getChildElements(element){const allElements=Array.from(element.shadowRoot?.children??[]).concat(Array.from(element.children));if(0===allElements.length)return[element];return[element,...allElements.reduce(((prev,curr)=>[...prev,...this.getChildElements(curr)]),[])]}getSortedFocusableElements(container){const containerChildren=this.getChildElements(container);return this.filterAndSortElementArray(containerChildren)}focusFirstElement(){this.getSortedFocusableElements(this)[0]?.focus()}focusLastElement(){this.getSortedFocusableElements(this).slice(-1)[0]?.focus()}trapFocusHandler(event){if("Tab"!==event.key)return;const shift=event.shiftKey;setTimeout((()=>{this.contains(document.activeElement)||(shift?this.focusLastElement():this.focusFirstElement())}),0)}handleEscape(event){"Escape"===event.key&&this.dispatchEvent(new CustomEvent(AwfEvent.CLOSE,{composed:!0,bubbles:!0,cancelable:!0}))}};AwfModal.styles=[COMMON_STYLES,MODAL_STYLES,MODAL_DIALOG_CSS_VARIABLES],(0,tslib_es6.gn)([(0,decorators.Cb)({type:Boolean,reflect:!0})],AwfModal.prototype,"open",void 0),AwfModal=(0,tslib_es6.gn)([(0,awf_custom_element.M)("awf-modal",!0)],AwfModal);class Angle{constructor(startAngle,sweepAngle){this.startAngle=startAngle,this.sweepAngle=sweepAngle}}var zoomMode;!function(zoomMode){zoomMode.MouseWheel="MouseWheel",zoomMode.Keyboard="Keyboard",zoomMode.None="None"}(zoomMode||(zoomMode={}));class ZoomController{constructor(){this.zoomRatio=0,this.zoomSensitivity=50,this.zoomOffset=new Point(0,0),this.origin=new Point(0,0),this.mouseLeave=!0,this.mouseOffset=new Point(0,0),this.startOffset=new Point(0,0),this.zoomMode=zoomMode.None}setMouseOffset(offsetX,offsetY){this.mouseOffset.x=offsetX,this.mouseOffset.y=offsetY}setMouseOffsetFromTouch(eventCache){if(2===eventCache.length){const currentDiffX=Math.abs(eventCache[0].offsetX-eventCache[1].offsetX),currentDiffY=Math.abs(eventCache[0].offsetY-eventCache[1].offsetY);this.setMouseOffset(Math.min(eventCache[0].offsetX,eventCache[1].offsetX)+currentDiffX,Math.min(eventCache[0].offsetY,eventCache[1].offsetY)+currentDiffY),this.mouseLeave=!1}}executeZoom(delta,canvas,ratio){const oldZoom=this.zoomRatio,newZoom=this.zoomRatio+-1*delta/this.zoomSensitivity;this.zoomRatio=newZoom>0?newZoom:0,this.setOffset(canvas,ratio,oldZoom)}setStartOffset(){this.zoomRatio>0&&(this.startOffset.x=this.zoomOffset.x,this.startOffset.y=this.zoomOffset.y)}canScrollInZoom(drag,isInMultiselectTouchMode,eventCache){return drag&&this.zoomRatio>0&&!isInMultiselectTouchMode&&eventCache.length<2}translateBeforeDraw(ctx){ctx.translate(-this.zoomOffset.x,-this.zoomOffset.y)}translateAfterDraw(ctx){ctx.translate(this.zoomOffset.x,this.zoomOffset.y)}setOffset(canvas,containerRatio,oldZoom){if(this.mouseLeave)this.zoomOffset.x=(canvas.width/containerRatio*(containerRatio+this.zoomRatio)-canvas.width)/2,this.zoomOffset.y=(canvas.height/containerRatio*(containerRatio+this.zoomRatio)-canvas.height)/2;else{const leftOffsetX=(this.mouseOffset.x+this.zoomOffset.x)/(containerRatio+oldZoom)*(containerRatio+this.zoomRatio)-this.mouseOffset.x,leftOffsetY=(this.mouseOffset.y+this.zoomOffset.y)/(containerRatio+oldZoom)*(containerRatio+this.zoomRatio)-this.mouseOffset.y,rightOffsetX=canvas.width/containerRatio*(containerRatio+this.zoomRatio)-leftOffsetX-canvas.width,rightOffsetY=canvas.height/containerRatio*(containerRatio+this.zoomRatio)-leftOffsetY-canvas.height;this.zoomOffset.x=leftOffsetX>=0&&rightOffsetX>=0?leftOffsetX:0,this.zoomOffset.y=leftOffsetY>=0&&rightOffsetY>=0?leftOffsetY:0}}}class ArcItem extends EllipseItem{get startAngle(){return this._startAngle}get endAngle(){return this._endAngle}constructor(style,angle,cX,cY,rX,rY){if(super(style,cX,cY,rX,rY),null==angle)throw new Error("Arc data is missing");this._startAngle=Math.PI*angle.startAngle/180,this._endAngle=Math.PI*(angle.sweepAngle+angle.startAngle)/180}draw(context,ratio,isWidthRelative=!0){this.ratio=ratio,context.beginPath(),this.style.strokeWidth>0&&(context.lineWidth=isWidthRelative?this.style.strokeWidth*this.ratio:this.style.strokeWidth),context.arc(this.cX*this.ratio+context.lineWidth,this.cY*this.ratio+context.lineWidth,this.rX*this.ratio-context.lineWidth,this.startAngle,this.endAngle),context.fillStyle=this.style.fillColor,context.strokeStyle=this.style.strokeColor,context.fill(),context.stroke()}drawIcon(context,ratio,sampleStatus){if(sampleStatus.svg){const center=this.center();context.drawImage(sampleStatus.svg,center.x,center.y,16*ratio,16*ratio)}}canDrawIcon(ratio){const size=2*this.rX*ratio/2.5;return(size>20?size:20)<2*this.rX*ratio}setSize(sampleContainer){sampleContainer.width=2*this.rX+1,sampleContainer.height=2*this.rX+1}contains(x,y,offsetX,offsetY){return!1}center(){return new Point(this.cX*this.ratio,this.cY*this.ratio)}}class PolygonItem extends DrawableItem{get pointsList(){return this._pointsList}get height(){return this.maxPolygonSize().y-this.minPolygonSize().y}get width(){return this.maxPolygonSize().x-this.minPolygonSize().x}constructor(style,points){if(super(style),this._pointsList=[],""===points||null==points)throw new Error("Polygon data is missing");this._pointsList=function convertPolygonPoints(pointsRaw){const pointsListConverted=[],pointsRawSplit=pointsRaw.split(" ");if(pointsRawSplit.length<2)return[];for(const point of pointsRawSplit){const pointsListSplitCoordinates=point.split(",");if(pointsListSplitCoordinates.length<2)return[];const pointsCoordinates=new Point(parseFloat(pointsListSplitCoordinates[0]),parseFloat(pointsListSplitCoordinates[1]));pointsListConverted.push(pointsCoordinates)}return pointsListConverted}(points)}draw(context,ratio,isWidthRelative=!0){this.ratio=ratio,context.beginPath(),context.fillStyle=this.style.fillColor,context.strokeStyle=this.style.strokeColor,this.style.strokeWidth>0&&(context.lineWidth=isWidthRelative?this.style.strokeWidth*this.ratio:this.style.strokeWidth),this._pointsList.forEach((point=>{context.lineTo(point.x*this.ratio+context.lineWidth,point.y*this.ratio+context.lineWidth)})),context.closePath(),context.fill(),context.stroke()}drawIcon(context,ratio,sampleStatus){if(sampleStatus.svg){const center=this.center();context.drawImage(sampleStatus.svg,center.x,center.y,16*ratio,16*ratio)}}canDrawIcon(ratio){return!0}setSize(sampleContainer){const maxPoints=this.maxPolygonSize(),minPoints=this.minPolygonSize();sampleContainer.width=maxPoints.x,sampleContainer.height=maxPoints.y,sampleContainer.initX=minPoints.x,sampleContainer.initY=minPoints.y}contains(x,y,offsetX,offsetY){return!1}center(){const minimumPoint=this.minPolygonSize(),maximumPoint=this.maxPolygonSize();return new Point((minimumPoint.x+(maximumPoint.x-minimumPoint.x)/2)*this.ratio,(minimumPoint.y+(maximumPoint.y-minimumPoint.y)/2)*this.ratio)}maxPolygonSize(){return{x:Math.max(...this.pointsList.map((value=>value.x))),y:Math.max(...this.pointsList.map((value=>value.y)))}}minPolygonSize(){return{x:Math.min(...this.pointsList.map((value=>value.x))),y:Math.min(...this.pointsList.map((value=>value.y)))}}}function AsyncFromSyncIterator(s){function AsyncFromSyncIteratorContinuation(r){if(Object(r)!==r)return Promise.reject(new TypeError(r+" is not an object."));var done=r.done;return Promise.resolve(r.value).then((function(value){return{value,done}}))}return AsyncFromSyncIterator=function AsyncFromSyncIterator(s){this.s=s,this.n=s.next},AsyncFromSyncIterator.prototype={s:null,n:null,next:function next(){return AsyncFromSyncIteratorContinuation(this.n.apply(this.s,arguments))},return:function _return(value){var ret=this.s.return;return void 0===ret?Promise.resolve({value,done:!0}):AsyncFromSyncIteratorContinuation(ret.apply(this.s,arguments))},throw:function _throw(value){var thr=this.s.return;return void 0===thr?Promise.reject(value):AsyncFromSyncIteratorContinuation(thr.apply(this.s,arguments))}},new AsyncFromSyncIterator(s)}var FirstVialPosition,VialType,NumberingType,VialDirection,ConsecutiveNumbering,VialGridInterleaveType,VialShape,NumberingDirection,NumberingMode,FirstVialRingPosition,VialRingInterleaveType,agSampleStatusIndicatorErrorFilledRedSolid='<svg version="1.1" id="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 16 16" enable-background="new 0 0 16 16" xml:space="preserve" data-icon-name="sample-status-indicator-error-filled-red-solid">\n<circle fill="#E72503" cx="8" cy="8" r="6.5"></circle>\n<polygon fill="#FFFFFF" points="10.5,4.4 8,6.9 5.6,4.4 4.5,5.5 7,8 4.5,10.4 5.6,11.5 8,9 10.5,11.5 11.6,10.4 9.1,8 11.6,5.5 "></polygon>\n</svg>',agSampleStatusIndicatorWarningFilledYellowSolid='<svg version="1.1" id="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 16 16" enable-background="new 0 0 16 16" xml:space="preserve" data-icon-name="sample-status-indicator-warning-filled-yellow-solid">\n<circle fill="#FFFFFF" cx="8" cy="8" r="7"></circle>\n<path fill="#FFBA00" d="M8,1C4.1,1,1,4.1,1,8s3.1,7,7,7s7-3.1,7-7S11.9,1,8,1z M9,12H7v-2h2V12z M9,9H7V4h2V9z"></path>\n</svg>',agSampleStatusIndicatorSkippedSolid='<svg version="1.1" id="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 16 16" enable-background="new 0 0 16 16" xml:space="preserve" data-icon-name="sample-status-indicator-skipped-solid">\n<circle fill="#FFFFFF" cx="8" cy="8" r="7"></circle>\n<path fill="#A1A7AF" d="M8,1C4.1,1,1,4.1,1,8s3.1,7,7,7s7-3.1,7-7S11.9,1,8,1z M8,2c1.3,0,2.5,0.4,3.5,1.1l-8.4,8.4\n\tC2.4,10.5,2,9.3,2,8C2,4.7,4.7,2,8,2z M8,14c-1.3,0-2.5-0.4-3.5-1.1l8.4-8.4C13.6,5.5,14,6.7,14,8C14,11.3,11.3,14,8,14z"></path>\n</svg>';!function(FirstVialPosition){FirstVialPosition.TopLeft="topLeft",FirstVialPosition.TopRight="topRight",FirstVialPosition.BottomLeft="bottomLeft",FirstVialPosition.BottomRight="bottomRight"}(FirstVialPosition||(FirstVialPosition={})),function(VialType){VialType.VialGrid="vialGrid",VialType.VialRing="vialRing",VialType.Vial="vial"}(VialType||(VialType={})),function(NumberingType){NumberingType.Letters="letters",NumberingType.Numbers="numbers"}(NumberingType||(NumberingType={})),function(VialDirection){VialDirection.Horizontal="horizontal",VialDirection.Vertical="vertical"}(VialDirection||(VialDirection={})),function(ConsecutiveNumbering){ConsecutiveNumbering.Linear="linear",ConsecutiveNumbering.Serpentine="serpentine"}(ConsecutiveNumbering||(ConsecutiveNumbering={})),function(VialGridInterleaveType){VialGridInterleaveType.None="none",VialGridInterleaveType.Up="up",VialGridInterleaveType.Down="down"}(VialGridInterleaveType||(VialGridInterleaveType={})),function(VialShape){VialShape.Ellipse="ellipse",VialShape.Rectangle="rectangle"}(VialShape||(VialShape={})),function(NumberingDirection){NumberingDirection.Clockwise="clockwise",NumberingDirection.CounterClockwise="counterClockwise"}(NumberingDirection||(NumberingDirection={})),function(NumberingMode){NumberingMode.Ring="ring",NumberingMode.Ray="ray"}(NumberingMode||(NumberingMode={})),function(FirstVialRingPosition){FirstVialRingPosition.InnerRing="innerRing",FirstVialRingPosition.OuterRing="outerRing"}(FirstVialRingPosition||(FirstVialRingPosition={})),function(VialRingInterleaveType){VialRingInterleaveType.None="none",VialRingInterleaveType.Clockwise="clockwise",VialRingInterleaveType.CounterClockwise="counterClockwise"}(VialRingInterleaveType||(VialRingInterleaveType={}));const convertTool=new class ConvertTool{constructor(){this.iconSvgDictionary=new Map([["Pending",'<svg version="1.1" id="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 16 16" enable-background="new 0 0 16 16" xml:space="preserve" data-icon-name="sample-status-indicator-pending-solid">\n<circle fill="#FFFFFF" cx="8" cy="8" r="7"></circle>\n<path fill="#384350" d="M8,15c-3.9,0-7-3.1-7-7s3.1-7,7-7s7,3.1,7,7S11.9,15,8,15z M8,2C4.7,2,2,4.7,2,8s2.7,6,6,6s6-2.7,6-6\n\tS11.3,2,8,2z"></path>\n</svg>'],["Submitted",small_namespaceObject.agSampleStatusIndicatorSubmittedSolid],["InProgress",small_namespaceObject.agSampleStatusIndicatorAcquiringInProgressDarknavySolid],["Completed",'<svg version="1.1" id="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 16 16" enable-background="new 0 0 16 16" xml:space="preserve" data-icon-name="sample-status-indicator-success-filled-darknavy-solid">\n<circle fill="#384350" cx="8" cy="8" r="7"></circle>\n<polygon fill="#FFFFFF" points="6.5,9.5 5,8 3.9,9.1 6.5,11.6 12.1,6.1 11,5 "></polygon>\n</svg>'],["Paused",small_namespaceObject.agSampleStatusIndicatorPauseSolid],["Error",agSampleStatusIndicatorErrorFilledRedSolid],["Warning",agSampleStatusIndicatorWarningFilledYellowSolid],["Unknown",'<svg version="1.1" id="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 16 16" enable-background="new 0 0 16 16" xml:space="preserve" data-icon-name="sample-status-indicator-help-solid">\n<circle fill="#FFFFFF" cx="8" cy="8" r="7"></circle>\n<g>\n\t<path fill="#384350" d="M8,3.6c-1.6,0-2.9,1.3-2.9,2.9h1.8l0,0c0-0.6,0.5-1.1,1.1-1.1s1.1,0.5,1.1,1.1c0,0.5-0.3,0.8-0.9,1.2\n\t\ts-1.1,1-1.1,1.8l0,0V10h1.8V9.5C9,9.4,9.2,9.2,9.3,9.1c0.9-0.6,1.5-1.5,1.5-2.6C10.9,4.9,9.6,3.6,8,3.6z M7.1,11h1.7v1.7H7.1V11z"></path>\n\t<path fill="#384350" d="M8,1C4.1,1,1,4.1,1,8s3.1,7,7,7s7-3.1,7-7S11.9,1,8,1z M8,14c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6\n\t\tS11.3,14,8,14z"></path>\n</g>\n</svg>'],["Skipped",agSampleStatusIndicatorSkippedSolid]])}getInterleaveOffset(interleave,rowSpacing){switch(interleave){case VialGridInterleaveType.Down:return rowSpacing/2;case VialGridInterleaveType.Up:return-rowSpacing/2;default:return 0}}getLetterFromIndex(index){let dividend=index+1,name="",modulo=0;for(;dividend>=1;)modulo=(dividend-1)%26,name=String.fromCharCode(65+modulo)+name,dividend=(dividend-modulo)/26;return name}indexToLabel(index,numbering){switch(numbering){case NumberingType.Numbers:return`${index+1}`;case NumberingType.Letters:return this.getLetterFromIndex(index);default:return null}}loadIcons(){var _this=this;return(0,asyncToGenerator.Z)((function*(){const sampleStatusList=[];var _iteratorError,_iteratorAbruptCompletion=!1,_didIteratorError=!1;try{for(var _step,_iterator=function _asyncIterator(iterable){var method,async,sync,retry=2;for("undefined"!=typeof Symbol&&(async=Symbol.asyncIterator,sync=Symbol.iterator);retry--;){if(async&&null!=(method=iterable[async]))return method.call(iterable);if(sync&&null!=(method=iterable[sync]))return new AsyncFromSyncIterator(method.call(iterable));async="@@asyncIterator",sync="@@iterator"}throw new TypeError("Object is not async iterable")}(_this.iconSvgDictionary);_iteratorAbruptCompletion=!(_step=yield _iterator.next()).done;_iteratorAbruptCompletion=!1){const[key,value]=_step.value;{const image=yield _this.statusToSVG(key,value);sampleStatusList.push({name:key,svg:image})}}}catch(err){_didIteratorError=!0,_iteratorError=err}finally{try{_iteratorAbruptCompletion&&null!=_iterator.return&&(yield _iterator.return())}finally{if(_didIteratorError)throw _iteratorError}}return sampleStatusList}))()}statusToSVG(key,value){return(0,asyncToGenerator.Z)((function*(){const document=(new DOMParser).parseFromString(value,"image/svg+xml");"Warning"!==key&&"Error"!==key&&(document.documentElement.style.fill=ColorUtils.AGILENT_NAVY_DARK_COLOR);const svgFormat="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(document.documentElement.outerHTML);return new Promise((resolve=>{const img=new Image;img.onload=()=>resolve(img),img.src=svgFormat}))}))()}};class SampleStatusList{constructor(){this._sampleStatusList=new Array}addSampleStatus(sampleStatus){if(this.findSampleStatus(sampleStatus.name))throw new Error("Sample Status already exists");this._sampleStatusList.push(sampleStatus)}removeSampleStatus(sampleStatus){this._sampleStatusList.splice(this._sampleStatusList.indexOf(sampleStatus),1)}getSampleStatus(){return this._sampleStatusList}findSampleStatus(name){return this._sampleStatusList.find((element=>element.name===name))}addAllSampleStatus(sampleStatusList){this._sampleStatusList=sampleStatusList}updateSampleStatus(name,svg){var _this=this;return(0,asyncToGenerator.Z)((function*(){if(name){const image=yield convertTool.statusToSVG(name,svg),existingSampleStatus=_this.findSampleStatus(name);existingSampleStatus?existingSampleStatus.svg=image:_this.addSampleStatus({name,svg:image})}}))()}}class SampleContainer{constructor(){this.colorPalette=new ColorPalette,this.labelsList=[],this.decorationsList=[],this.outline=[],this.ratioDefault=1,this.initX=0,this.initY=0,this.xmlStyle=!1,this.sampleTypes=new SampleTypes,this.sampleStatusList=new SampleStatusList,this.selectionController=new SelectionController,this.zoomController=new ZoomController,this.vialItems=[],this.startOffset=0,this.defaultSampleTextSize=100,this.rotation=0,this._width=0,this._height=0,this.transformMatrix=new DOMMatrix}get globalRatio(){return this.ratioDefault+this.zoomController.zoomRatio}get vialsList(){const list=[];return this.vialItems.forEach((vialItem=>list.push(...vialItem.vialsList))),list}get width(){return this._width}set width(_width){_width>0&&(this._width=_width)}get height(){return this._height}set height(_height){_height>0&&(this._height=_height)}init(dispatchXML,awfSlydini){this.dispatchXML=dispatchXML,this.xmlStyle=awfSlydini.xmlStyle,this.selectionController.selectionMode=awfSlydini.selectionMode,this.selectionController.selectionOrder=awfSlydini.selectionOrder,this.startOffset=awfSlydini.startOffset??0,this.rotation=awfSlydini.containerRotation??0;const outlineStyle=this.setOutlineStyle(dispatchXML);if(dispatchXML.sampleContainerShape)switch(dispatchXML.sampleContainerShape){case"RECTANGLE":this.outline.push(new RectangleItem(outlineStyle,dispatchXML.sampleContainerInitX,dispatchXML.sampleContainerInitY,dispatchXML.sampleContainerWidth,dispatchXML.sampleContainerHeight));break;case"ARC":null!=dispatchXML.sampleContainerStartAngle&&null!=dispatchXML.sampleContainerSweepAngle&&this.outline.push(new ArcItem(outlineStyle,new Angle(dispatchXML.sampleContainerStartAngle,dispatchXML.sampleContainerSweepAngle),dispatchXML.sampleContainerCX,dispatchXML.sampleContainerCY,dispatchXML.sampleContainerRX,dispatchXML.sampleContainerRY));break;case"POLYGON":this.outline.push(new PolygonItem(outlineStyle,dispatchXML.sampleContainerPoints));break;case"ELLIPSE":this.outline.push(new EllipseItem(outlineStyle,dispatchXML.sampleContainerCX,dispatchXML.sampleContainerCY,dispatchXML.sampleContainerRX,dispatchXML.sampleContainerRY));break;default:throw new Error("Outline form not recognized")}}setOutlineStyle(dispatchXML){let outlineStyle=this.colorPalette.defaultOutlineStyle;return this.xmlStyle&&(outlineStyle=this.colorPalette.customOutlineStyle(dispatchXML.sampleContainerFillColor||this.colorPalette.colorPaletteMap.get(ColorPalette.OUTLINE_FILL_COLOR),dispatchXML.sampleContainerStrokeColor||this.colorPalette.colorPaletteMap.get(ColorPalette.OUTLINE_STROKE_COLOR))),outlineStyle.strokeWidth=dispatchXML.sampleContainerStrokeWidth||this.colorPalette.defaultOutlineStyle.strokeWidth,outlineStyle}}var SlydiniEvent,ZoomAction;!function(SlydiniEvent){SlydiniEvent.STARTDRAGVIALS="slydini:startdragvials",SlydiniEvent.DRAGVIALS="slydini:dragvials",SlydiniEvent.DROPVIALS="slydini:dropvials",SlydiniEvent.RIGHTCLICKVIAL="slydini:rightclickvial",SlydiniEvent.RIGHTCLICKSELECTION="slydini:rightclickselection",SlydiniEvent.RIGHTCLICKCONTAINER="slydini:rightclickcontainer",SlydiniEvent.MOUSEENTERVIAL="slydini:mouseentervial",SlydiniEvent.MOUSELEAVEVIAL="slydini:mouseleavevial",SlydiniEvent.MOUSEOVERVIAL="slydini:mouseovervial",SlydiniEvent.EXTERNALDROPVIALS="slydini:externaldropvials",SlydiniEvent.SAMPLESTATUSVISBILITYCHANGED="slydini:samplestatusvisibilitychanged"}(SlydiniEvent||(SlydiniEvent={})),function(ZoomAction){ZoomAction.ZoomIn="ZoomIn",ZoomAction.ZoomOut="ZoomOut",ZoomAction.None="None"}(ZoomAction||(ZoomAction={}));class SlydiniEventController{constructor(){this.isMacOs=navigator.userAgent.includes("Mac"),this.dataFormat="text/vials",this.zoomAction=ZoomAction.None,this.isCtrlKeyDown=!1,this.isShiftKeyDown=!1,this.eventCache=[]}initEventListener(awfSlydini,canvasTag){awfSlydini.addEventListener("contextmenu",(event=>{event.preventDefault()})),this.initKeyEventListener(awfSlydini),this.initMoveIconEventListener(awfSlydini),this.initExitMultiselectChipEventListener(awfSlydini),this.initZoomEventListener(awfSlydini),this.initCanvasEventListener(awfSlydini,canvasTag)}initZoomEventListener(awfSlydini){awfSlydini.removeEventListener("DOMMouseScroll",awfSlydini.handleScroll),awfSlydini.removeEventListener("mousewheel",awfSlydini.handleScroll),awfSlydini.zoom&&(awfSlydini.addEventListener("DOMMouseScroll",awfSlydini.handleScroll),awfSlydini.addEventListener("mousewheel",awfSlydini.handleScroll))}isUserGrabbingOrMultiSelecting(){return"grabbing"===document.body.style.cursor||this.isCtrlKeyDown||this.isShiftKeyDown}removeEvent(event){const index=this.eventCache.findIndex((cachedEv=>cachedEv.pointerId===event.pointerId));this.eventCache.splice(index,1)}initCanvasEventListener(awfSlydini,canvasTag){canvasTag.addEventListener("dragleave",(event=>{event.dataTransfer?.types.includes(this.dataFormat)&&(awfSlydini.isExternalDrag?(awfSlydini.isExternalDrag=!1,awfSlydini.isDraggingVials=!1):awfSlydini.isDragLeavingCanvas=!0)})),canvasTag.addEventListener("dragenter",(event=>{event.dataTransfer?.types.includes(this.dataFormat)&&(awfSlydini.isDragLeavingCanvas?awfSlydini.isDragLeavingCanvas=!1:awfSlydini.isDraggingVials||(event.dataTransfer.dropEffect="move",awfSlydini.isExternalDrag=!0,awfSlydini.isDraggingVials=!0))})),canvasTag.addEventListener("dragover",(event=>{event.dataTransfer?.types.includes(this.dataFormat)&&(awfSlydini.handleMouseOver(event,!1),event.preventDefault(),event.dataTransfer.dropEffect="move",awfSlydini.isExternalDrag||awfSlydini.handleMoveSelectedVials(event))})),canvasTag.addEventListener("drop",(event=>{event.dataTransfer?.types.includes(this.dataFormat)&&(awfSlydini.removeEventListener("mousemove",awfSlydini.handleMouseMove),awfSlydini.isExternalDrag?(awfSlydini.isExternalDrag=!1,awfSlydini.isDraggingVials=!1,awfSlydini.handleDropExternalVials(event),document.body.style.cursor="default"):awfSlydini.handleDropSelection())})),canvasTag.addEventListener("mousemove",(event=>{awfSlydini.handleMouseOver(event,!0)}))}setZoomAction(event){let zoomAction=ZoomAction.None;return"+"===event.key||"="===event.key||"add"===event.code.toLowerCase()||"equal"===event.code.toLowerCase()?zoomAction=ZoomAction.ZoomIn:"-"!==event.key&&"subtract"!==event.code.toLowerCase()||(zoomAction=ZoomAction.ZoomOut),zoomAction}initExitMultiselectChipEventListener(awfSlydini){awfSlydini.exitMultiselectChip.addEventListener("touchstart",(()=>{awfSlydini.removeEventListener("pointerup",awfSlydini.handleMouseUp)})),awfSlydini.exitMultiselectChip.addEventListener("touchend",awfSlydini.handleExitMultiselect.bind(awfSlydini))}initKeyEventListener(awfSlydini){document.addEventListener("keyup",(event=>{("Control"===event.key||this.isMacOs&&"Meta"===event.key)&&(this.isCtrlKeyDown=!1),"Shift"===event.key&&(this.isShiftKeyDown=!1)})),document.addEventListener("keydown",(event=>{this.ctrlKeyPressed(event),this.selectAll(event,awfSlydini),this.shiftKeyPressed(event),this.zoomAction=this.setZoomAction(event),this.zoomAction!==ZoomAction.None&&this.isCtrlKeyDown&&awfSlydini.zoom&&awfSlydini.handleScroll(event)}))}selectAll(event,awfSlydini){("a"===event.key||"A"===event.key)&&this.isCtrlKeyDown&&awfSlydini.vialSelection&&awfSlydini.handleSelectAllViaControlA()}ctrlKeyPressed(event){("Control"===event.key||this.isMacOs&&event.metaKey)&&(this.isCtrlKeyDown=!0)}shiftKeyPressed(event){"Shift"===event.key&&(this.isShiftKeyDown=!0)}initMoveIconEventListener(awfSlydini){awfSlydini.moveIcon.addEventListener("mouseover",(()=>{document.body.style.cursor="grab"})),awfSlydini.moveIcon.addEventListener("mouseout",(()=>{document.body.style.cursor="default"})),awfSlydini.moveIcon.addEventListener("mousedown",(()=>{document.body.style.cursor="grabbing"})),awfSlydini.moveIcon.addEventListener("mouseup",(()=>{document.body.style.cursor="grab"})),awfSlydini.moveIcon.addEventListener("dragstart",awfSlydini.handleDragStart.bind(awfSlydini)),awfSlydini.moveIcon.addEventListener("dragend",awfSlydini.handleDragEnd.bind(awfSlydini))}}class SpecificXmlValidator{constructor(xmlParsed){this.xmlParsed=xmlParsed}isXmlWithNoRenderingValid(){const areAllBlockDefinedUniquely=this.areAllNodeOfTypeUniquelyDefined("AddressingBlockId",!1),areReferenceDefined=this.areAllReferencedNodeByTagDefined("SampleContainer Addressing Block","Id","AddressingBlockId");return areAllBlockDefinedUniquely&&areReferenceDefined}areAllReferencedNodeByTagDefined(referencingNode,tagName,defNodeTagName){const refNodes=this.selectAllForAllCase(referencingNode),hasUnReferencedElement=Array.from(refNodes).some((x=>!this.isNodeReferenceDefinedInTagContent(this.getElementByTagNameContentForAllCase(x,tagName),defNodeTagName)));return 0===refNodes.length||!hasUnReferencedElement}getElementByTagNameContentForAllCase(e,tagName){return 0!==e.getElementsByTagName(tagName).length?e.getElementsByTagName(tagName)[0].textContent:e.getElementsByTagName(tagName.toLowerCase())[0].textContent}isNodeReferenceDefinedInTagContent(nodeId,definitionTag){const defTagNodes=this.selectAllForAllCase(definitionTag);return Array.from(defTagNodes).some((defTagNode=>defTagNode?.textContent===nodeId||defTagNode?.textContent===nodeId?.toLowerCase()))}areAllReferencedNodeByAttributeDefined(referencingNode,attributeName,definitionNodeTag,attributeNameInDefinitionNode){const refNodes=this.selectAllForAllCase(referencingNode),hasUnReferencedElement=Array.from(refNodes).some((x=>!this.isNodeReferenceDefinedInAttribute(this.getAttributeForAllCase(x,attributeName),definitionNodeTag,attributeNameInDefinitionNode)));return 0===refNodes.length||!hasUnReferencedElement}isNodeReferenceDefinedInAttribute(nodeId,tagName,attributeName){const tagNodes=this.selectAllForAllCase(tagName);return Array.from(tagNodes).some((defTagNode=>this.getAttributeForAllCase(defTagNode,attributeName)===nodeId||this.getAttributeForAllCase(defTagNode,attributeName)===nodeId?.toLowerCase()))}isXmlValidRegardingShapeDefinition(){const areValidVialGrid=this.areAllReferencedNodeByAttributeDefined("Container Vials VialGrid","shape","VialShape","id"),areValidVialRing=this.areAllReferencedNodeByAttributeDefined("Container Vials VialRing","shape","VialShape","id"),areValidVials=this.areAllReferencedNodeByAttributeDefined("Container Vials Vial","shape","VialShape","id");return areValidVialGrid&&areValidVialRing&&areValidVials}isXmlValidRegardingDefinitionUnicity(){const areVialShapeUnique=this.areAllNodeOfTypeUniquelyDefined("Container Vials VialShape"),areVialUnique=this.areAllNodeOfTypeUniquelyDefined("Container Vials Vial"),areLabelUnique=this.areAllNodeOfTypeUniquelyDefined("Container Labels Label"),areDecorationUnique=this.areAllNodeOfTypeUniquelyDefined("Container Decorations Decoration"),areOutlineUnique=this.areAllNodeOfTypeUniquelyDefined("Container Outlines Outline");return areVialShapeUnique&&areVialUnique&&areLabelUnique&&areDecorationUnique&&areOutlineUnique}areAllNodeOfTypeUniquelyDefined(typeOfNode,byIdAttribute=!0){const nodesOfType=this.selectAllForAllCase(typeOfNode),uniqueNodeIds=[];let numberOfDefinedNodeId=0;return nodesOfType.forEach((node=>{const id=byIdAttribute?node.getAttribute("id"):node.textContent;null!==id&&(numberOfDefinedNodeId++,uniqueNodeIds.find((uId=>uId===id))||uniqueNodeIds.push(id))})),uniqueNodeIds.length===numberOfDefinedNodeId}selectAllForAllCase(typeOfNode){return 0!==this.xmlParsed.selectAll(typeOfNode).length?this.xmlParsed.selectAll(typeOfNode):this.xmlParsed.selectAll(typeOfNode.toLowerCase())}isXmlValidRegardingColorDefinition(){const allXmlColors=this.getInterestingAttributes(["Ellipse","Rectangle","Polygon","Label","Decoration"],["fillColor","strokeColor","outsideFillColor"]),hasInvalidColor=allXmlColors.some((x=>!isColor(x)));return 0===allXmlColors.length||!hasInvalidColor}getAttributeForAllCase(node,attributeName){return null!==node.getAttribute(attributeName)?node.getAttribute(attributeName):node.getAttribute(attributeName.toLowerCase())}isXmlValidRegardingGridRingOffsets(){const vialGridNodes=this.xmlParsed.selectAll("Container Vials VialGrid"),vialRingNodes=this.xmlParsed.selectAll("Container Vials VialRing");return Array.from(vialGridNodes).concat(Array.from(vialRingNodes)).filter((vialGridOrRing=>{const rowOffAtt=this.getAttributeForAllCase(vialGridOrRing,"rowOffset"),colOffAtt=this.getAttributeForAllCase(vialGridOrRing,"columnOffset");return!(null!==rowOffAtt&&"0"!==rowOffAtt||null!==colOffAtt&&"0"!==colOffAtt)})).length<=1}isXMLValidRegardingSpecifiedFont(){const allXmlFonts=this.getInterestingAttributes(["Label","Text"],["fontFamily"]),hasInvalidFont=allXmlFonts.some((x=>!this.isFontValid(x)));return 0===allXmlFonts.length||!hasInvalidFont}isFontValid(fontName){try{const temp=(new Option).style;return temp.fontFamily=fontName,temp.fontFamily===fontName}catch(error){return!0}}getInterestingAttributes(nodeOfInterest,attributeNames){let interestingAttributes=[];return nodeOfInterest.map((nodeType=>this.selectAllForAllCase(nodeType))).forEach((nodeList=>nodeList.forEach((node=>{interestingAttributes=interestingAttributes.concat(attributeNames.map((attribute=>this.getAttributeForAllCase(node,attribute))).filter((att=>null!==att)))})))),interestingAttributes}isXmlWithRenderingValid(){const areAllIdentifierUnique=this.isXmlValidRegardingDefinitionUnicity(),vialShapeDefinedValid=this.isXmlValidRegardingShapeDefinition(),vialGridOffsetsAreValid=this.isXmlValidRegardingGridRingOffsets(),areFontValid=this.isXMLValidRegardingSpecifiedFont();return this.isXmlValidRegardingColorDefinition()&&vialShapeDefinedValid&&areAllIdentifierUnique&&vialGridOffsetsAreValid&&areFontValid}}class DispatchXML{constructor(xmlParsed){this.displayName=xmlParsed?.displayName||null,this.identifier=xmlParsed?.identifier||null,this.sampleContainerInitX=xmlParsed.readNumberAttribut("Outlines Rectangle","x",0),this.sampleContainerInitY=xmlParsed.readNumberAttribut("Outlines Rectangle","y",0),this.sampleContainerWidth=xmlParsed.readNumberAttribut("Container Outlines Outline Rectangle","width",1),this.sampleContainerHeight=xmlParsed.readNumberAttribut("Container Outlines Outline Rectangle","height",1),this.sampleContainerCX=xmlParsed.readNumberAttribut("Outlines Arc","cx",xmlParsed.readNumberAttribut("Outlines ELLIPSE","cx")),this.sampleContainerCY=xmlParsed.readNumberAttribut("Outlines Arc","cy",xmlParsed.readNumberAttribut("Outlines ELLIPSE","cy")),this.sampleContainerRX=xmlParsed.readNumberAttribut("Outlines Arc","rx",xmlParsed.readNumberAttribut("Outlines ELLIPSE","rx")),this.sampleContainerRY=xmlParsed.readNumberAttribut("Outlines Arc","ry",xmlParsed.readNumberAttribut("Outlines ELLIPSE","ry")),this.sampleContainerStartAngle=xmlParsed.readNumberAttribut("Outlines Arc","startAngle",0),this.sampleContainerSweepAngle=xmlParsed.readNumberAttribut("Outlines Arc","sweepAngle",0),this.sampleContainerShape=xmlParsed.readTagName("Container Outlines Outline Rectangle",xmlParsed.readTagName("Container Outlines Outline Polygon",xmlParsed.readTagName("Container Outlines Outline Arc",xmlParsed.readTagName("Container Outlines Outline Ellipse",xmlParsed.readTagName("Container Outlines Outline Line"))))),this.sampleContainerFillColor=xmlParsed.readTextAttribut("Container Outlines Outline","fillColor"),this.sampleContainerStrokeColor=xmlParsed.readTextAttribut("Container Outlines Outline","strokeColor"),this.sampleContainerStrokeWidth=xmlParsed.readNumberAttribut("Container Outlines Outline","strokeWidth"),this.sampleContainerPoints=xmlParsed.readTextAttribut("Container Outlines Outline Polygon","points",""),this.sampleContainerDecorationsNode=xmlParsed.readNodeChildren("Decorations","Decoration"),this.vialShapeNodes=xmlParsed.selectAll("Container Vials VialShape"),this.freeVialNodes=xmlParsed.selectAll("Container Vials Vial"),this.vialGridNodes=xmlParsed.selectAll("Container Vials VialGrid"),this.vialRingNodes=xmlParsed.selectAll("Container Vials VialRings"),this.labelNodes=xmlParsed.selectAll("Container Labels Label")}}class XMLParsed{constructor(nodeXML){this.nodeXML=nodeXML,this.readNumberAttribut=(nodePath,attribut,fallBack)=>{const numberAttribut=Number(this.select(nodePath)?.getAttribute(attribut));return numberAttribut||fallBack},this.readTextAttribut=(nodePath,attribut,fallBack)=>{const textAttribut=this.select(nodePath)?.getAttribute(attribut);return textAttribut||fallBack},this.readTextContent=(nodePath,fallBack)=>{const textContent=this.select(nodePath)?.textContent;return textContent||fallBack},this.readTagName=(nodePath,fallBack)=>{const tagName=this.select(nodePath)?.tagName;return tagName||fallBack},this.readNodeChildren=(nodePath,childNode,fallBack)=>{const nodeChildren=this.select(nodePath)?.querySelectorAll(childNode);return nodeChildren||fallBack}}get displayName(){return this.nodeXML.querySelector("Common DisplayName")?.textContent}get identifier(){return this.nodeXML.querySelector("Common Identifier")?.textContent}selectAll(nodeName){return this.nodeXML.querySelectorAll(nodeName)}select(nodeName){return this.nodeXML.querySelector(nodeName)}isCurrentFileWithoutRendering(){return this.select("Geometry")&&(!this.select("Rendering")||void 0===this.select("Rendering")?.childNodes||0===this.select("Rendering")?.childElementCount)}}function parseXML(nodeXML){return new XMLParsed(nodeXML)}class XMLConverter{constructor(xmlParsed){this.xmlParsed=xmlParsed,this._fontSizeDefault=4,this._labelHorizontalAlignment="center",this._xSize=parseFloat(this.xmlParsed.readTextContent("Geometry XSize")),this._ySize=parseFloat(this.xmlParsed.readTextContent("Geometry YSize")),this._addressingBlocks=[],this._units=[];this.xmlParsed.selectAll("SampleContainer Addressing Block").forEach((element=>this.initAddressingBlock(element)));this.xmlParsed.selectAll("SampleContainer Geometry CartesianContainer Units").forEach((element=>this.initUnit(element)))}initAddressingBlock(element){const addressingBlock={identifier:element.getElementsByTagName("Id")[0].textContent,numLocations:parseInt(element.getElementsByTagName("NumLocations")[0].textContent),isLinear:element.getElementsByTagName("Linear").length>0,origin:element.getElementsByTagName("Origin11")[0].textContent};addressingBlock.isLinear?(addressingBlock.start=parseInt(element.getElementsByTagName("Start")[0].textContent),addressingBlock.distributionPattern=element.getElementsByTagName("DistributionPattern")[0].textContent):(addressingBlock.columnStart=parseInt(element.getElementsByTagName("ColumnStart")[0].textContent),addressingBlock.rowStart=parseInt(element.getElementsByTagName("RowStart")[0].textContent)),this._addressingBlocks.push(addressingBlock)}initUnit(element){const unit={identifier:element.getElementsByTagName("Identifier")[0].textContent,rowOffset:parseFloat(element.getElementsByTagName("RowOffset")[0].textContent),colOffset:parseFloat(element.getElementsByTagName("ColumnOffset")[0].textContent),rowDistance:parseFloat(element.getElementsByTagName("RowDistance")[0].textContent),colDistance:parseFloat(element.getElementsByTagName("ColumnDistance")[0].textContent),colShift:parseFloat(element.getElementsByTagName("ColumnShift")[0].textContent),numRows:parseInt(element.getElementsByTagName("NumRows")[0].textContent),numCols:parseInt(element.getElementsByTagName("NumCols")[0].textContent),xWellDiameter:parseFloat(element.getElementsByTagName("XWellDiameter")[0].textContent),yWellDiameter:parseFloat(element.getElementsByTagName("YWellDiameter")[0].textContent),wellBottomSizeFactor:parseFloat(element.getElementsByTagName("WellBottomSizeFactor")[0].textContent),wellIsSquare:"true"===element.getElementsByTagName("WellIsSquare")[0].textContent.toLowerCase(),wellHeight:parseFloat(element.getElementsByTagName("WellHeight")[0].textContent),wellDepth:parseFloat(element.getElementsByTagName("WellDepth")[0].textContent),wellVolume:parseFloat(element.getElementsByTagName("WellVolume")[0].textContent),isSealed:"true"===element.getElementsByTagName("IsSealed")[0].textContent.toLowerCase(),addressingBlockId:element.getElementsByTagName("AddressingBlockId")[0].textContent,addressingBlock:{identifier:"",numLocations:0,isLinear:!1,origin:""},firstVialCoordinates:{x:0,y:0,xIncrementation:0,yIncrementation:0,firstVialPosition:""}};unit.addressingBlock=this._addressingBlocks.find((a=>a.identifier===unit.identifier)),this.getFirstVialPosition(unit),this._units.push(unit)}getXMLWithRendering(){const vialsNode=this.xmlVialsBuilder(),outlineNode=this.xmlOutlinesBuilder(),labelsNode=this.xmlLabelsBuilder();return this.xmlFullBuilder(vialsNode,outlineNode,labelsNode)}xmlLabelsBuilder(){const labelsNode=document.createElement("labels");for(let i=0;i<this._units.length;i++)this._units[i].addressingBlock.isLinear?this.xmlLinearLabelsBuilder(labelsNode,this._units[i],i):this.xmlGridLabelsBuilder(labelsNode,this._units[i],i);return labelsNode}intToChar(int){const code="A".charCodeAt(0);return String.fromCharCode(code+int)}xmlVialsBuilder(){const vialsNode=document.createElement("vials");for(let i=0;i<this._units.length;i++){const unit=this._units[i],vialShapeNode=document.createElement("vialShape"),vialGridNode=document.createElement("vialGrid"),drawingNode=document.createElement("drawing");vialGridNode.setAttribute("firstVialPosition",unit.firstVialCoordinates.firstVialPosition),vialGridNode.setAttribute("rows",unit.numRows.toString()),vialGridNode.setAttribute("columns",unit.numCols.toString()),vialGridNode.setAttribute("rowSpacing",unit.rowDistance.toString()),vialGridNode.setAttribute("columnSpacing",unit.colDistance.toString()),vialGridNode.setAttribute("interleave",this.getInterleaveType(unit.colShift).toString()),this.vialGridNodeBuilder(vialGridNode,unit,i);const vialShapeNodeId=`VialShape${i}`;if(vialShapeNode.setAttribute("id",vialShapeNodeId),vialGridNode.setAttribute("shape",vialShapeNodeId),unit.wellIsSquare){const rectangleNode=document.createElement("rectangle"),x=-unit.xWellDiameter/2,y=-unit.yWellDiameter/2;rectangleNode.setAttribute("strokeColor","rgb(125,130,151)"),rectangleNode.setAttribute("fillColor","rgb(41,51,71)"),rectangleNode.setAttribute("x",x.toString()),rectangleNode.setAttribute("y",y.toString()),rectangleNode.setAttribute("width",unit.xWellDiameter.toString()),rectangleNode.setAttribute("height",unit.yWellDiameter.toString()),drawingNode.appendChild(rectangleNode)}else{const ellipseNode=document.createElement("ellipse");ellipseNode.setAttribute("strokeColor","rgb(125,130,151)"),ellipseNode.setAttribute("fillColor","rgb(41,51,71)"),ellipseNode.setAttribute("cx","0"),ellipseNode.setAttribute("cy","0"),ellipseNode.setAttribute("rx",(unit.xWellDiameter/2).toString()),ellipseNode.setAttribute("ry",(unit.yWellDiameter/2).toString()),drawingNode.appendChild(ellipseNode)}vialShapeNode.appendChild(drawingNode),vialsNode.appendChild(vialShapeNode),vialsNode.appendChild(vialGridNode)}return vialsNode}getInterleaveType(colShift){return colShift>0?VialGridInterleaveType.Down:colShift<0?VialGridInterleaveType.Up:VialGridInterleaveType.None}vialGridNodeBuilder(vialGridNode,unit,index){const topLeftVialCoordinateNode=document.createElement("topLeftVialCoordinate");if(topLeftVialCoordinateNode.setAttribute("x",unit.colOffset.toString()),topLeftVialCoordinateNode.setAttribute("y",unit.rowOffset.toString()),vialGridNode.appendChild(topLeftVialCoordinateNode),unit.addressingBlock.isLinear){const consecutiveNumbering=document.createElement("consecutiveNumbering");this.setNumberingAndDirection(vialGridNode,consecutiveNumbering,unit.addressingBlock.distributionPattern??"row_linear",index),void 0!==unit.addressingBlock.start&&unit.addressingBlock.start>1&&consecutiveNumbering.setAttribute("firstVialNumber",unit.addressingBlock.start.toString()),vialGridNode.appendChild(consecutiveNumbering)}else{const firstColumnIndex=unit.addressingBlock.columnStart?(unit.addressingBlock.columnStart-1).toString():"0",firstRowIndex=unit.addressingBlock.rowStart?(unit.addressingBlock.rowStart-1).toString():"0",gridNumberingNode=document.createElement("gridNumbering");gridNumberingNode.setAttribute("rowNumbering","letters"),gridNumberingNode.setAttribute("columnNumbering","numbers"),gridNumberingNode.setAttribute("firstColumnIndex",firstColumnIndex),gridNumberingNode.setAttribute("firstRowIndex",firstRowIndex),vialGridNode.setAttribute("direction","horizontal"),vialGridNode.setAttribute("columnOffset",firstColumnIndex),vialGridNode.setAttribute("rowOffset",firstRowIndex),vialGridNode.appendChild(gridNumberingNode)}}setNumberingAndDirection(vialGridNode,consecutiveNumbering,distributionPattern,index){switch(distributionPattern){case"col_linear":consecutiveNumbering.setAttribute("numbering","linear"),vialGridNode.setAttribute("direction","vertical"),vialGridNode.setAttribute("columnOffset",this.getColumnOffset(index).toString());break;case"col_serpentine":consecutiveNumbering.setAttribute("numbering","serpentine"),vialGridNode.setAttribute("direction","vertical"),vialGridNode.setAttribute("columnOffset",this.getColumnOffset(index).toString());break;case"row_linear":consecutiveNumbering.setAttribute("numbering","linear"),vialGridNode.setAttribute("direction","horizontal"),vialGridNode.setAttribute("rowOffset",this.getRowOffset(index).toString());break;default:consecutiveNumbering.setAttribute("numbering","serpentine"),vialGridNode.setAttribute("direction","horizontal"),vialGridNode.setAttribute("rowOffset",this.getRowOffset(index).toString())}}getColumnOffset(gridIndex){let offset=0;for(let i=0;i<gridIndex;i++)offset+=this._units[i].numCols;return offset}getRowOffset(gridIndex){let offset=0;for(let i=0;i<gridIndex;i++)offset+=this._units[i].numRows;return offset}xmlOutlinesBuilder(){const outlinesNode=document.createElement("outlines"),outlineNode=document.createElement("outline");outlineNode.setAttribute("strokeColor","black"),outlineNode.setAttribute("fillColor","rgb(73,82,104)");const rectangleNode=document.createElement("rectangle");return rectangleNode.setAttribute("x","0"),rectangleNode.setAttribute("y","0"),rectangleNode.setAttribute("width",this._xSize.toString()),rectangleNode.setAttribute("height",this._ySize.toString()),outlineNode.appendChild(rectangleNode),outlinesNode.appendChild(outlineNode),outlinesNode}getMinsize(shapeHalfWidth,shapeHalfHeight,isSquare){let minSize;return minSize=isSquare?Math.min(4,Math.min(shapeHalfHeight,shapeHalfWidth)):Math.min(4,Math.min(2*shapeHalfHeight/3,2*shapeHalfWidth/3)),this._fontSizeDefault=minSize,minSize}getFirstVialPosition(unit){switch(unit.addressingBlock.origin.toLowerCase()){case"leftupperedge":unit.firstVialCoordinates.x=unit.colOffset,unit.firstVialCoordinates.y=unit.rowOffset,unit.firstVialCoordinates.xIncrementation=unit.colDistance,unit.firstVialCoordinates.yIncrementation=unit.rowDistance,unit.firstVialCoordinates.firstVialPosition="topLeft";break;case"rightupperedge":unit.firstVialCoordinates.x=unit.colOffset+(unit.numCols-1)*unit.colDistance,unit.firstVialCoordinates.y=unit.rowOffset,unit.firstVialCoordinates.xIncrementation=-unit.colDistance,unit.firstVialCoordinates.yIncrementation=unit.rowDistance,unit.firstVialCoordinates.firstVialPosition="topRight";break;case"leftloweredge":unit.firstVialCoordinates.x=unit.colOffset,unit.firstVialCoordinates.y=unit.rowOffset+(unit.numRows-1)*unit.rowDistance,unit.firstVialCoordinates.xIncrementation=unit.colDistance,unit.firstVialCoordinates.yIncrementation=-unit.rowDistance,unit.firstVialCoordinates.firstVialPosition="bottomLeft";break;case"rightloweredge":unit.firstVialCoordinates.x=unit.colOffset+(unit.numCols-1)*unit.colDistance,unit.firstVialCoordinates.y=unit.rowOffset+(unit.numRows-1)*unit.rowDistance,unit.firstVialCoordinates.xIncrementation=-unit.colDistance,unit.firstVialCoordinates.yIncrementation=-unit.rowDistance,unit.firstVialCoordinates.firstVialPosition="bottomRight"}}setDefaultLabelNode(labelNode,fontHeight){labelNode.setAttribute("fontFamily","arial"),labelNode.setAttribute("fontHeight",fontHeight),labelNode.setAttribute("hAlignment",this._labelHorizontalAlignment),labelNode.setAttribute("vAlignment","center"),labelNode.setAttribute("fillColor","rgb(171,177,195)")}labelBuilder(id,enumerator,linearType,unit){const label=document.createElement("Text"),shapeHalfWidth=unit.xWellDiameter/2,shapeHalfHeight=unit.yWellDiameter/2,minSize=this.getMinsize(shapeHalfWidth,shapeHalfHeight,unit.wellIsSquare),xIncrementationSign=Math.sign(unit.firstVialCoordinates.xIncrementation),yIncrementationSign=Math.sign(unit.firstVialCoordinates.yIncrementation),position={x:0,y:0},columnStart=unit.addressingBlock.columnStart??1,start=unit.addressingBlock.start??1;if("horizontallabels"===id){this._labelHorizontalAlignment="center";const interleaveOffset=convertTool.getInterleaveOffset(this.getInterleaveType(unit.colShift),unit.rowDistance),yOffset=enumerator%2==1?interleaveOffset:0;position.x=this.calculateHorizontalLabelXPosition(unit,minSize,shapeHalfWidth,unit.firstVialCoordinates.xIncrementation,enumerator,yOffset),position.y=this.calculateHorizontalLabelYPosition(unit,minSize,shapeHalfHeight,yIncrementationSign,yOffset),label.innerText=this.getLabelText(enumerator,linearType,unit.numRows,columnStart,start)}else position.x=this.calculateVerticalLabelXPosition(unit,minSize,shapeHalfWidth,xIncrementationSign),position.y=this.calculateVerticalLabelYPosition(unit,minSize,shapeHalfHeight,unit.firstVialCoordinates.yIncrementation,enumerator),label.innerText="grid"===linearType?this.intToChar(enumerator):this.getLabelText(enumerator,linearType,unit.numCols,columnStart,start);return label.setAttribute("x",position.x.toString()),label.setAttribute("y",position.y.toString()),label}calculateHorizontalLabelYPosition(unit,minSize,shapeHalfHeight,incrementationSign,yOffset){const isLabelOnTop="topLeft"===unit.firstVialCoordinates.firstVialPosition||"topRight"===unit.firstVialCoordinates.firstVialPosition;return this.hasSpaceToDisplayHorizontalLabel(unit.firstVialCoordinates.y,minSize,shapeHalfHeight,isLabelOnTop,yOffset)?unit.firstVialCoordinates.y-(shapeHalfHeight+minSize)*incrementationSign+yOffset:unit.wellIsSquare?this.calculateYPositionForSquareWells(unit.firstVialCoordinates.y,shapeHalfHeight,incrementationSign,yOffset,isLabelOnTop):(this._fontSizeDefault=3,unit.firstVialCoordinates.y-.92*shapeHalfHeight*incrementationSign+yOffset)}calculateYPositionForSquareWells(firstVialYPosition,shapeHalfHeight,incrementationSign,yOffset,isLabelOnTop){return this._fontSizeDefault=isLabelOnTop?yOffset<0?firstVialYPosition+yOffset-shapeHalfHeight-1.5:firstVialYPosition-shapeHalfHeight-1.5:yOffset>0?this._ySize-firstVialYPosition-yOffset-shapeHalfHeight-1.5:this._ySize-firstVialYPosition-shapeHalfHeight-1.5,firstVialYPosition-(shapeHalfHeight+1.5)*incrementationSign+yOffset}calculateHorizontalLabelXPosition(unit,minSize,shapeHalfWidth,incrementation,enumerator,yOffset){const isLabelOnTop="topLeft"===unit.firstVialCoordinates.firstVialPosition||"topRight"===unit.firstVialCoordinates.firstVialPosition;return this.hasSpaceToDisplayHorizontalLabel(unit.firstVialCoordinates.y,minSize,shapeHalfWidth,isLabelOnTop,yOffset)||unit.wellIsSquare?(this._labelHorizontalAlignment="center",unit.firstVialCoordinates.x+incrementation*enumerator):(this._labelHorizontalAlignment="right",unit.firstVialCoordinates.x-.92*shapeHalfWidth+incrementation*enumerator)}calculateVerticalLabelXPosition(unit,minSize,shapeHalfWidth,incrementationSign){const isLabelOnLeftSide=this.isNumberingStartingLeft(unit.firstVialCoordinates.firstVialPosition);return this.hasSpaceToDisplayVerticalLabel(unit.firstVialCoordinates.x,minSize,shapeHalfWidth,isLabelOnLeftSide)?(this._labelHorizontalAlignment="center",unit.firstVialCoordinates.x-(shapeHalfWidth+minSize)*incrementationSign):(this._labelHorizontalAlignment=isLabelOnLeftSide?"right":"left",unit.wellIsSquare?(this._fontSizeDefault=isLabelOnLeftSide?unit.firstVialCoordinates.x-shapeHalfWidth-1.5:this._xSize-unit.firstVialCoordinates.x-shapeHalfWidth-1.5,unit.firstVialCoordinates.x-(shapeHalfWidth+.5)*incrementationSign):(this._fontSizeDefault=3,unit.firstVialCoordinates.x-.92*shapeHalfWidth*incrementationSign))}calculateVerticalLabelYPosition(unit,minSize,shapeHalfHeight,incrementation,enumerator){const isLabelOnLeftSide=this.isNumberingStartingLeft(unit.firstVialCoordinates.firstVialPosition);return this.hasSpaceToDisplayVerticalLabel(unit.firstVialCoordinates.x,minSize,shapeHalfHeight,isLabelOnLeftSide)||unit.wellIsSquare?unit.firstVialCoordinates.y+incrementation*enumerator:unit.firstVialCoordinates.y-.92*shapeHalfHeight+incrementation*enumerator}hasSpaceToDisplayVerticalLabel(firstVialXCoordinate,minSize,shapeHalfSize,isLabelOnLeft){return isLabelOnLeft?firstVialXCoordinate-shapeHalfSize>minSize+2:this._xSize-firstVialXCoordinate-shapeHalfSize>minSize+2}hasSpaceToDisplayHorizontalLabel(firstVialYCoordinate,minSize,shapeHalfSize,isLabelOnTop,yOffset){return isLabelOnTop?yOffset<0?firstVialYCoordinate-shapeHalfSize+yOffset>minSize+2:firstVialYCoordinate-shapeHalfSize>minSize+2:yOffset<0?this._ySize-firstVialYCoordinate-shapeHalfSize>minSize+2:this._ySize-firstVialYCoordinate-yOffset-shapeHalfSize>minSize+2}getLabelText(enumerator,linearType,vialCount,columnStart,start){return"grid"===linearType?(enumerator+columnStart).toString():"serpentine"===linearType&&enumerator%2==1?(vialCount*(enumerator+1)+start-1).toString():(enumerator*vialCount+start).toString()}xmlGridLabelsBuilder(labelsNode,unit,index){if(unit.numCols){const horizontalLabelsNode=document.createElement("label");horizontalLabelsNode.setAttribute("id",`HorizontalLabels${index}`),this.setDefaultLabelNode(horizontalLabelsNode,this._fontSizeDefault.toString());for(let i=0;i<unit.numCols;i++){const label=this.labelBuilder("horizontallabels",i,"grid",unit);horizontalLabelsNode.appendChild(label)}horizontalLabelsNode.setAttribute("fontHeight",this._fontSizeDefault.toString()),labelsNode.appendChild(horizontalLabelsNode)}if(unit.numRows){const verticalLabelsNode=document.createElement("label");verticalLabelsNode.setAttribute("id",`VerticalLabels${index}`),this.setDefaultLabelNode(verticalLabelsNode,this._fontSizeDefault.toString());for(let i=0;i<unit.numRows;i++){const label=this.labelBuilder("verticallabels",i,"grid",unit);verticalLabelsNode.appendChild(label)}verticalLabelsNode.setAttribute("fontHeight",this._fontSizeDefault.toString()),labelsNode.appendChild(verticalLabelsNode)}}xmlLinearLabelsBuilder(labelsNode,unit,index){const linearProperty=unit.addressingBlock.distributionPattern;let linearType=[];null!=linearProperty&&void 0!==linearProperty&&(linearType=linearProperty.split("_")),"col"===linearType[0]?this.buildHorizontalLinearLabelsNode(unit,linearType[1],labelsNode):this.buildVerticalLinearLabelsNode(unit,linearType[1],labelsNode)}buildHorizontalLinearLabelsNode(unit,linearType,labelsNode){const horizontalLabelsNode=document.createElement("label");this.setDefaultLabelNode(horizontalLabelsNode,this._fontSizeDefault.toString()),horizontalLabelsNode.setAttribute("id","HorizontalLabels");for(let i=0;i<unit.numCols;i++)horizontalLabelsNode.appendChild(this.labelBuilder("horizontallabels",i,linearType,unit));horizontalLabelsNode.setAttribute("fontHeight",this._fontSizeDefault.toString()),labelsNode.appendChild(horizontalLabelsNode)}buildVerticalLinearLabelsNode(unit,linearType,labelsNode){let isThreeDigitNumber=!1;const verticalLabelsNode=document.createElement("label");this.setDefaultLabelNode(verticalLabelsNode,this._fontSizeDefault.toString()),verticalLabelsNode.setAttribute("id","VerticalLabels");for(let i=0;i<unit.numRows;i++){const label=this.labelBuilder("verticallabels",i,linearType,unit);verticalLabelsNode.appendChild(label),label.innerText.length>=3&&!isThreeDigitNumber&&(isThreeDigitNumber=!0)}isThreeDigitNumber&&(this.isNumberingStartingLeft(unit.firstVialCoordinates.firstVialPosition)?this._labelHorizontalAlignment="end":this._labelHorizontalAlignment="start"),verticalLabelsNode.setAttribute("hAlignment",this._labelHorizontalAlignment),verticalLabelsNode.setAttribute("fontHeight",this._fontSizeDefault.toString()),labelsNode.appendChild(verticalLabelsNode)}isNumberingStartingLeft(firstVialPosition){return"topLeft"===firstVialPosition||"bottomLeft"===firstVialPosition}xmlFullBuilder(vialsNode,outlinesNode,labelsNode){const globalXML=document.createElement("xml"),sampleContainerNode=document.createElement("samplecontainer"),renderingNode=document.createElement("rendering"),xmlNode=document.createElement("xml"),containerNode=document.createElement("container"),commonNode=this.xmlParsed.select("common"),geometryNode=this.xmlParsed.select("geometry"),addressingNode=this.xmlParsed.select("addressing");return null!=commonNode&&sampleContainerNode.appendChild(commonNode),containerNode.appendChild(vialsNode),containerNode.appendChild(outlinesNode),containerNode.appendChild(labelsNode),xmlNode.appendChild(containerNode),renderingNode.appendChild(xmlNode),sampleContainerNode.appendChild(renderingNode),null!=geometryNode&&sampleContainerNode.appendChild(geometryNode),null!=addressingNode&&sampleContainerNode.appendChild(addressingNode),globalXML.appendChild(sampleContainerNode),globalXML}}const slydiniHelper=new class SlydiniHelper{isDragAndSelectVials(vialSelection,drag,isDraggingVials){return vialSelection&&drag&&isDraggingVials}calculateIconPosition(topRightVial){const iconPosition=new Point(0,0);if(topRightVial?.drawableItem){const ratio=topRightVial.drawableItem.ratio;topRightVial.drawableItem instanceof EllipseItem?(iconPosition.x=(topRightVial.xCoordinate+1.05*topRightVial.drawableItem.rX)*ratio,iconPosition.y=(topRightVial.yCoordinate-1.05*topRightVial.drawableItem.rY)*ratio):topRightVial.drawableItem instanceof RectangleItem&&(iconPosition.x=(topRightVial.xCoordinate+1.1*topRightVial.drawableItem.width)*ratio,iconPosition.y=(topRightVial.yCoordinate-.1*topRightVial.drawableItem.height)*ratio)}return iconPosition}getSelectionType(event,isMacOs){return event.ctrlKey||isMacOs&&event.metaKey?MultipleSelectionType.Multiple:event.shiftKey?MultipleSelectionType.MultipleContinuous:MultipleSelectionType.None}isDragging(event,mouseDownEvent,isTouch=!1){const diffX=Math.abs(event.clientX-mouseDownEvent.clientX),diffY=Math.abs(event.clientY-mouseDownEvent.clientY);return isTouch?!(diffX<15&&diffY<15):!(diffX<5&&diffY<5)}calculateContainerOffset(canvas,zoomOffset){return new Point(canvas.getBoundingClientRect().x-zoomOffset.x,canvas.getBoundingClientRect().y-zoomOffset.y)}createTransparentDragImage(canvas){canvas.width=1,canvas.height=1;const ctx=canvas.getContext("2d");ctx.fillStyle="rgba(0, 0, 0, 0)",ctx.fillRect(0,0,1,1);const dragImage=new Image(1,1);return dragImage.src=canvas.toDataURL(),dragImage}parseXmlCode(xmlParsed,modal,modalDialog){let fileCheckOK=!1;const xmlValidator=new SpecificXmlValidator(xmlParsed);if(xmlParsed.isCurrentFileWithoutRendering()){if(fileCheckOK=this.validFileCheck(xmlValidator.isXmlWithNoRenderingValid(),"Invalid no rendering xml file",modal,modalDialog),fileCheckOK){xmlParsed=parseXML(new XMLConverter(xmlParsed).getXMLWithRendering())}}else fileCheckOK=this.validFileCheck(xmlValidator.isXmlWithRenderingValid(),"Invalid xml file with rendering",modal,modalDialog);return fileCheckOK?new DispatchXML(xmlParsed):null}validFileCheck(isValidFile,invalidDialogHeader,modal,modalDialog){return isValidFile?(modal?.open&&modal.closeModal(),!0):(modalDialog.header=invalidDialogHeader,modal.openModal(),!1)}},SLYDINI_STYLES=lit.iv`
    body {
        touch-action: none;
    }

    #sample-container {
        position: relative;
        overflow: hidden;
    }

    canvas {
        width: 100%;
        touch-action: none;
        -webkit-user-select: none;
        position: static;
    }

    awf-icon.moveIcon {
        position: absolute;
    }

    h3.container-name {
        display: none;
        text-align: left;
        margin-block-start: 0;
        margin-block-end: 0;
        position: static;
    }

    h3 {
        font-size: 18px;
        font-weight: normal;
        color: var(--at-dark-navy);
    }

    awf-chip.exit-multiselect {
        position: absolute;
        visibility: hidden;
        --awf-chip-rest-background: white;
        top: 4px;
        left: 4px;
    }
`;class LineItem extends DrawableItem{get x1(){return this._x1}get y1(){return this._y1}get x2(){return this._x2}get y2(){return this._y2}get height(){return this._y2-this._y1}get width(){return this._x2-this._x1}constructor(style,x1,y1,x2,y2){super(style),this._x1=x1,this._y1=y1,this._x2=x2,this._y2=y2}draw(context,ratio,isWidthRelative=!0){this.ratio=ratio,context.beginPath(),null!=this.style.strokeColor&&void 0!==this.style.strokeColor&&(context.strokeStyle=this.style.strokeColor),null!=this.style.strokeWidth&&void 0!==this.style.strokeWidth&&(context.lineWidth=isWidthRelative?this.style.strokeWidth*this.ratio:this.style.strokeWidth),context.lineTo(this.x1*this.ratio,this.y1*this.ratio),context.lineTo(this.x2*this.ratio,this.y2*this.ratio),context.stroke(),context.closePath()}drawIcon(context,ratio,sampleStatus){if(sampleStatus.svg){const center=this.center();context.drawImage(sampleStatus.svg,center.x,center.y,16*ratio,16*ratio)}}canDrawIcon(ratio){return!0}setSize(sampleContainer){const minX=this.x1>this.x2?this.x2:this.x1,minY=this.y1>this.y2?this.y2:this.y1,maxX=this.x1>this.x2?this.x1:this.x2,maxY=this.y1>this.y2?this.y1:this.y2;sampleContainer.width=maxX+2,sampleContainer.height=maxY+2,sampleContainer.initX=minX+1*this.ratio,sampleContainer.initY=minY+1*this.ratio}contains(x,y,offsetX,offsetY){return!1}center(){return new Point((this.x1+this.x2)/2*this.ratio,(this.y1+this.y2)/2*this.ratio)}}class OrderingArrowItem{constructor(style,selectedVials){this._style=style;const beforeLastCenter=selectedVials[selectedVials.length-2].drawableItem.center(),lastCenter=selectedVials[selectedVials.length-1].drawableItem.center();this._x1=beforeLastCenter.x,this._y1=beforeLastCenter.y,this._x2=lastCenter.x,this._y2=lastCenter.y,this._arrowLines=this.getArrowLines(selectedVials)}draw(context){this._arrowLines.forEach((line=>{line.draw(context,1,!1)}));const angle=Math.atan2(this._y2-this._y1,this._x2-this._x1);context.beginPath(),context.strokeStyle=this._style.strokeColor,context.lineWidth=this._style.strokeWidth,context.lineTo(this._x2-10*Math.cos(angle+Math.PI/7),this._y2-10*Math.sin(angle+Math.PI/7)),context.lineTo(this._x2,this._y2),context.lineTo(this._x2-10*Math.cos(angle-Math.PI/7),this._y2-10*Math.sin(angle-Math.PI/7)),context.stroke(),context.closePath()}getArrowLines(selectedVials){const orderingArrowLines=[];for(let index=0;index<selectedVials.length;index++)if(index!==selectedVials.length-1){const centerVial1=selectedVials[index].drawableItem.center(),centerVial2=selectedVials[index+1].drawableItem.center();orderingArrowLines.push(new LineItem(this._style,centerVial1.x,centerVial1.y,centerVial2.x,centerVial2.y))}return orderingArrowLines}}class Label{get x(){return this._x}set x(x){x>=0&&(this._x=x)}get y(){return this._y}set y(y){y>=0&&(this._y=y)}constructor(text,_x,_y,style,labelHorizontalAlign,labelVerticalAlign,rotation){this.text=text,this._x=_x,this._y=_y,this.style=style,this.labelHorizontalAlign=labelHorizontalAlign,this.labelVerticalAlign=labelVerticalAlign,this.rotation=rotation,this.text=text,this.labelHorizontalAlign=labelHorizontalAlign,this.labelVerticalAlign=labelVerticalAlign,this.rotation=rotation,this.ratio=1}drawLabel(context,ratio,containerRotation=0,isSampleText=!1,maxWidth){let textRotation=this.rotation??0;this.ratio=ratio,context.save(),context.beginPath(),this.labelHorizontalAlign&&(context.textAlign=this.labelHorizontalAlign),this.labelVerticalAlign&&(context.textBaseline=this.labelVerticalAlign),0!==containerRotation&&(this.transformForRotation(context,containerRotation),textRotation-=containerRotation),context.fillStyle=this.style.color,context.font=`${(this.style.size+.5)*this.ratio}px "${this.style.font}"`,0!==textRotation?(context.translate(this.x*this.ratio,this.y*this.ratio),context.rotate(textRotation*Math.PI/180),context.fillText(this.text,0,0)):(isSampleText&&maxWidth&&this.fitTextToVial(context,maxWidth),context.fillText(this.text,this.x*this.ratio,this.y*this.ratio)),context.fill(),context.closePath(),context.restore()}transformForRotation(context,containerRotation){90===containerRotation?this.convertAlignmentFor90DegreesRotation(context):180===containerRotation?this.convertAlignmentFor180DegreesRotation(context):270===containerRotation&&this.convertAlignmentFor270DegreesRotation(context)}convertAlignmentFor90DegreesRotation(context){"left"===this.labelHorizontalAlign?context.textBaseline="top":"right"===this.labelHorizontalAlign?context.textBaseline="bottom":context.textBaseline="middle","top"===this.labelVerticalAlign?context.textAlign="right":"bottom"===this.labelVerticalAlign?context.textAlign="left":context.textAlign="center"}convertAlignmentFor180DegreesRotation(context){"left"===this.labelHorizontalAlign?context.textAlign="right":"right"===this.labelHorizontalAlign?context.textAlign="left":context.textAlign="center","top"===this.labelVerticalAlign?context.textBaseline="bottom":"bottom"===this.labelVerticalAlign?context.textBaseline="top":context.textBaseline="middle"}convertAlignmentFor270DegreesRotation(context){"left"===this.labelHorizontalAlign?context.textBaseline="bottom":"right"===this.labelHorizontalAlign?context.textBaseline="top":context.textBaseline="middle","top"===this.labelVerticalAlign?context.textAlign="left":"bottom"===this.labelVerticalAlign?context.textAlign="right":context.textAlign="center"}fitTextToVial(context,maxWidth){let textWidth=context.measureText(this.text).width;if(textWidth>maxWidth){const ellipsisWidth=context.measureText("...").width;for(;textWidth+ellipsisWidth>maxWidth&&this.text.length>1;)this.text=this.text.substring(0,this.text.length-1),textWidth=context.measureText(this.text).width;this.text+="..."}}}class StyleLabel{constructor(font,color=ColorUtils.AGILENT_GRAY_DARK_COLOR,size){this.font=font,this.color=color,this.size=size}}class VialShapeDescription{constructor(){this.id="",this.shape=VialShape.Ellipse,this.width=0,this.height=0,this.initX=0,this.initY=0,this.strokeWidth=0,this.fillColor=void 0,this.strokeColor=void 0}}class VialGroupBaseItem{constructor(vialShapeId){this.vialShapeId=vialShapeId,this.vialShapeDescription=new VialShapeDescription,this.vialsList=[]}}class FreeVial extends VialGroupBaseItem{constructor(id,x,y,vialShapeId,rotation,row,column){super(vialShapeId),this.id=id,this.x=x,this.y=y,this.vialShapeId=vialShapeId,this.rotation=rotation,this.row=row,this.column=column}}class VialGrid extends VialGroupBaseItem{constructor(rowsCount,columnsCount,rowSpacing,columnSpacing,firstVialPosition,direction,vialShapeId){super(vialShapeId),this.rowsCount=rowsCount,this.columnsCount=columnsCount,this.rowSpacing=rowSpacing,this.columnSpacing=columnSpacing,this.firstVialPosition=firstVialPosition,this.direction=direction,this.vialShapeId=vialShapeId,this.topLeftVialCoordinateX=0,this.topLeftVialCoordinateY=0,this.rowOffset=0,this.colOffset=0}}class VialRings extends VialGroupBaseItem{constructor(numberOfRings,vialsPerRing,distanceBetweenRings,cX,cY,innerRingRadius,vialShapeId){super(vialShapeId),this.numberOfRings=numberOfRings,this.vialsPerRing=vialsPerRing,this.distanceBetweenRings=distanceBetweenRings,this.cX=cX,this.cY=cY,this.innerRingRadius=innerRingRadius,this.vialShapeId=vialShapeId,this.numberingDirection=NumberingDirection.Clockwise,this.numberingMode=NumberingMode.Ring,this.firstVialRing=FirstVialRingPosition.InnerRing,this.firstVialAngle=0,this.rowOffset=0,this.colOffset=0,this.firstVialNumber=1}}class Vial{get containerRowPosition(){return this.rowPosition?this.rowPosition+this.rowOffset:0}get containerColPosition(){return this.colPosition?this.colPosition+this.colOffset:0}get details(){return{identifier:this.identifier,rowNumber:this.containerRowPosition,columnNumber:this.containerColPosition,sampleType:this.sampleInfo.sampleType,text:this.sampleInfo.text,selected:this.selected,sampleStatus:this.sampleInfo.sampleStatus,textSize:this.sampleInfo.textSize,hovered:this.hovered}}constructor(shape){this.shape=shape,this.identifier="",this.selected=!1,this.xCoordinate=0,this.yCoordinate=0,this.rowOffset=0,this.colOffset=0,this.coordinates="",this.sampleInfo=new SampleInfo,this.hovered=!1}setInfo(vialInfo,awfSlydini,sampleTypes,selectionController){void 0!==vialInfo.sampleType&&this.setSampleType(vialInfo.sampleType,awfSlydini,sampleTypes),void 0!==vialInfo.text&&this.setSampleText(vialInfo.text,awfSlydini),void 0!==vialInfo.selected&&this.setSelection(vialInfo.selected,awfSlydini,selectionController),void 0!==vialInfo.sampleStatus&&this.setSampleStatus(vialInfo.sampleStatus,awfSlydini),void 0!==vialInfo.textSize&&this.setSampleTextSize(vialInfo.textSize,awfSlydini)}setSampleType(sampleType,awfSlydini,sampleTypes){if(sampleTypes.findSampleType(sampleType)&&this.sampleInfo.sampleType!==sampleType){const oldValue=this.sampleInfo.sampleType;this.sampleInfo.sampleType=sampleType,awfSlydini.dispatchEvent(createCustomEvent(AwfEvent.VALUE_CHANGE,{vial:this.identifier,propertyName:"sampleType",previousValue:oldValue,newValue:sampleType}))}}setSampleText(text,awfSlydini){if(this.sampleInfo.text!==text){const oldValue=this.sampleInfo.text;this.sampleInfo.text=text,awfSlydini.dispatchEvent(createCustomEvent(AwfEvent.VALUE_CHANGE,{vial:this.identifier,propertyName:"text",previousValue:oldValue,newValue:text}))}}setSelection(selected,awfSlydini,selectionController){if(this.selected!==selected){const oldValue=this.selected;selectionController.selectSingleVial(this,!1,selected),awfSlydini.dispatchEvent(createCustomEvent(AwfEvent.VALUE_CHANGE,{vial:this.identifier,propertyName:"selected",previousValue:oldValue,newValue:selected}))}}setSampleTextSize(textSize,awfSlydini){if(this.sampleInfo.textSize!==textSize){const oldValue=this.sampleInfo.textSize;this.sampleInfo.textSize=textSize,awfSlydini.dispatchEvent(createCustomEvent(AwfEvent.VALUE_CHANGE,{vial:this.identifier,propertyName:"textSize",previousValue:oldValue,newValue:textSize}))}}setSampleStatus(sampleStatus,awfSlydini){if(this.sampleInfo.sampleStatus!==sampleStatus){const oldValue=this.sampleInfo.sampleStatus;this.sampleInfo.sampleStatus=sampleStatus,awfSlydini.dispatchEvent(createCustomEvent(AwfEvent.VALUE_CHANGE,{vial:this.identifier,propertyName:"sampleStatus",previousValue:oldValue,newValue:sampleStatus}))}}}const vialsFactory=new class VialsFactory{initVials(sampleContainer){sampleContainer.vialItems.forEach((vialItem=>{vialItem instanceof FreeVial?this.initFreeVials(vialItem,sampleContainer):vialItem instanceof VialGrid?this.initVialGrid(vialItem,sampleContainer):vialItem instanceof VialRings&&this.initVialRings(vialItem,sampleContainer)}))}initFreeVials(freeVial,sampleContainer){freeVial.vialsList=[];const vial=new Vial(freeVial.vialShapeDescription.shape);vial.identifier=freeVial.id,vial.rowPosition=freeVial.row,vial.colPosition=freeVial.column,vial.xCoordinate=freeVial.x,vial.yCoordinate=freeVial.y,vial.coordinates=vial.rowPosition&&vial.colPosition?`${vial.containerRowPosition}-${vial.containerColPosition}`:vial.identifier,this.assignVialShapes(sampleContainer,vial,freeVial.vialShapeDescription,vial.xCoordinate,vial.yCoordinate),freeVial.vialsList.push(vial)}initVialGrid(vialGrid,sampleContainer){vialGrid.vialsList=[];const rowCount=vialGrid.rowsCount,colCount=vialGrid.columnsCount;for(let iRow=1;iRow<=rowCount;iRow++)for(let iCol=1;iCol<=colCount;iCol++){const vial=new Vial(vialGrid.vialShapeDescription.shape);vial.rowOffset=vialGrid.rowOffset,vial.colOffset=vialGrid.colOffset;const{colPosition,rowPosition}=this.setCoordinateFromFirstVialPosition(vialGrid.rowsCount,vialGrid.columnsCount,iRow,iCol,vialGrid);vial.rowPosition=rowPosition,vial.colPosition=colPosition,vial.coordinates=`${vial.containerRowPosition}-${vial.containerColPosition}`,this.calculateVialCoordinateForGrid(vial,vialGrid,sampleContainer,iRow,iCol),vial.identifier=this.setIdentifierFromFirstVialPosition(vialGrid.rowsCount,vialGrid.columnsCount,vial.rowPosition,vial.colPosition,vialGrid,sampleContainer.startOffset),this.assignVialShapes(sampleContainer,vial,vialGrid.vialShapeDescription,vial.xCoordinate,vial.yCoordinate),vial.drawableItem instanceof RectangleItem&&(vial.drawableItem.rowSpacing=vialGrid.rowSpacing,vial.drawableItem.columnSpacing=vialGrid.columnSpacing),vialGrid.vialsList.push(vial)}}initVialRings(vialRings,sampleContainer){vialRings.vialsList=[];for(let i=1;i<=vialRings.numberOfRings;i++)for(let j=1;j<=vialRings.vialsPerRing;j++){const vial=new Vial(vialRings.vialShapeDescription.shape);vial.rowPosition=i,vial.colPosition=j,vial.rowOffset=vialRings.rowOffset,vial.colOffset=vialRings.colOffset,vial.coordinates=`${vial.containerRowPosition}-${vial.containerColPosition}`,this.calculateVialCoordinateForRing(i-1,j-1,vial,vialRings),this.assignVialShapes(sampleContainer,vial,vialRings.vialShapeDescription,vial.xCoordinate,vial.yCoordinate),vialRings.vialsList.push(vial)}}calculateVialCoordinateForGrid(vial,grid,sampleContainer,iRow,iCol){let yOffset=0;const rowSpacePosition=iRow-1,colSpacePosition=iCol-1;if(grid.interleave){const interleaveOffset=convertTool.getInterleaveOffset(grid.interleave,grid.rowSpacing);yOffset=colSpacePosition%2==1?interleaveOffset:0}let x=sampleContainer.initX+grid.topLeftVialCoordinateX+grid.columnSpacing*colSpacePosition,y=sampleContainer.initY+grid.topLeftVialCoordinateY+grid.rowSpacing*rowSpacePosition+yOffset;vial.shape===VialShape.Rectangle&&(x+=grid.vialShapeDescription.initX,y+=grid.vialShapeDescription.initY),vial.xCoordinate=x,vial.yCoordinate=y}calculateVialCoordinateForRing(ringIndex,vialIndex,vial,rings){let ringRadius,interVialAngle=rings.lastVialAngle?(rings.lastVialAngle-rings.firstVialAngle)/(rings.vialsPerRing-1):360/rings.vialsPerRing;rings.numberingDirection===NumberingDirection.CounterClockwise&&(interVialAngle=-interVialAngle),ringRadius=rings.firstVialRing===FirstVialRingPosition.InnerRing?ringIndex*rings.distanceBetweenRings+rings.innerRingRadius:(rings.numberOfRings-1-ringIndex)*rings.distanceBetweenRings+rings.innerRingRadius;let ringStartAngle=rings.firstVialAngle;if(rings.interleave&&ringIndex%2!=0){const offset=Math.abs(.5*interVialAngle);rings.interleave===VialRingInterleaveType.Clockwise?ringStartAngle+=offset:rings.interleave===VialRingInterleaveType.CounterClockwise&&(ringStartAngle-=offset)}const vialAngle=ringStartAngle+vialIndex*interVialAngle,vialAngleInRadians=Math.PI*vialAngle/180;vial.xCoordinate=rings.cX+ringRadius*Math.cos(vialAngleInRadians),vial.yCoordinate=rings.cY+ringRadius*Math.sin(vialAngleInRadians),vial.identifier=this.setIdentifierForRing(rings.firstVialNumber,ringIndex,vialIndex,rings)}setIdentifierForRing(firstVialNumber,ringIndex,vialIndex,rings){return rings.numberingMode===NumberingMode.Ring?`${firstVialNumber+vialIndex+ringIndex*rings.vialsPerRing}`:`${firstVialNumber+ringIndex+vialIndex*rings.numberOfRings}`}assignVialShapes(sampleContainer,vial,vialShapeDescription,x,y){let vialStyle=sampleContainer.colorPalette.defaultVialStyle;sampleContainer.xmlStyle&&(vialStyle=sampleContainer.colorPalette.customVialStyle(vialShapeDescription.fillColor,vialShapeDescription.strokeColor)),vialStyle.strokeWidth=vialShapeDescription.strokeWidth||sampleContainer.colorPalette.defaultVialStyle.strokeWidth,vial.shape===VialShape.Rectangle?vial.drawableItem=new RectangleItem(vialStyle,x,y,vialShapeDescription.width,vialShapeDescription.height):vial.shape===VialShape.Ellipse&&(vial.drawableItem=new EllipseItem(vialStyle,x,y,vialShapeDescription.height,vialShapeDescription.width))}setVialIdentifier(row,column,vialGrid){let identifier="";if(null!=vialGrid.rowNumbering&&null!=vialGrid.columnNumbering){const separator=vialGrid.separator??"";let part1,part2;vialGrid.direction===VialDirection.Horizontal?(part1=convertTool.indexToLabel(row,vialGrid.rowNumbering)??"",part2=convertTool.indexToLabel(column,vialGrid.columnNumbering)??""):(part1=convertTool.indexToLabel(row,vialGrid.columnNumbering)??"",part2=convertTool.indexToLabel(column,vialGrid.rowNumbering)??""),identifier=`${part1}${separator}${part2}`}else identifier=`${row}`;return identifier}setIdentifierFromFirstVialPosition(rowCount,columnCount,rowPosition,colPosition,vialGrid,containerStartOffset){if(null!=vialGrid.consecutiveNumbering){const isSerpentine=vialGrid.consecutiveNumbering===ConsecutiveNumbering.Serpentine;let vialOffset=vialGrid.firstVialNumber>=0?vialGrid.firstVialNumber:1;return vialOffset+=containerStartOffset,this.setIdentifierFromFirstVialDirection(vialGrid,rowCount,columnCount,rowPosition-1,colPosition-1,vialOffset,isSerpentine)}const rowIdentifier=rowPosition-1+(vialGrid.firstRowIndex||0),colIdentifier=colPosition-1+(vialGrid.firstColumnIndex||0);return vialGrid.direction===VialDirection.Horizontal?this.setVialIdentifier(rowIdentifier,colIdentifier,vialGrid):this.setVialIdentifier(colIdentifier,rowIdentifier,vialGrid)}setCoordinateFromFirstVialPosition(rowCount,columnCount,rowPosition,colPosition,vialGrid){let iRow=0,iCol=0;switch(vialGrid.firstVialPosition){case FirstVialPosition.TopLeft:iRow=rowPosition,iCol=colPosition;break;case FirstVialPosition.BottomLeft:iRow=rowCount-(rowPosition-1),iCol=colPosition;break;case FirstVialPosition.TopRight:iRow=rowPosition,iCol=columnCount-(colPosition-1);break;case FirstVialPosition.BottomRight:iRow=rowCount-(rowPosition-1),iCol=columnCount-(colPosition-1)}return{colPosition:iCol,rowPosition:iRow}}setIdentifierFromFirstVialDirection(vialGrid,rowCount,columnCount,iRow,iCol,vialOffset,isSerpentine){let identifier;if(vialGrid.direction===VialDirection.Horizontal){iRow=iRow*columnCount+(isSerpentine&&iRow%2==1?columnCount-iCol-1:iCol),identifier=this.setVialIdentifier(iRow+vialOffset,iCol,vialGrid)}else{iCol=iCol*rowCount+(isSerpentine&&iCol%2==1?rowCount-iRow-1:iRow),identifier=this.setVialIdentifier(iCol+vialOffset,iRow,vialGrid)}return identifier}};const sampleContainerFactory=new class SampleContainerFactory{constructor(){this.vialShapes=[]}fillSampleContainer(sampleContainer){sampleContainer.dispatchXML?.vialShapeNodes&&(this.vialShapes=this.getVialShapes(sampleContainer.dispatchXML.vialShapeNodes)),sampleContainer.labelsList=this.getLabels(sampleContainer),sampleContainer.dispatchXML?.vialGridNodes&&sampleContainer.vialItems.push(...this.getVialGrids(sampleContainer.dispatchXML.vialGridNodes)),sampleContainer.dispatchXML?.freeVialNodes&&sampleContainer.vialItems.push(...this.getFreeVials(sampleContainer.dispatchXML.freeVialNodes)),sampleContainer.dispatchXML?.vialRingNodes&&sampleContainer.vialItems.push(...this.getVialRings(sampleContainer.dispatchXML.vialRingNodes)),this.getDecorations(sampleContainer),vialsFactory.initVials(sampleContainer)}ratioCalculate(sampleContainer,containerWidth,containerHeight){return 90===sampleContainer.rotation||270===sampleContainer.rotation?containerWidth/sampleContainer.height:containerWidth/sampleContainer.width}getLabels(sampleContainer){const labels=new Array;return sampleContainer.dispatchXML?.labelNodes&&sampleContainer.dispatchXML.labelNodes.forEach((node=>labels.push(...this.fillLabels(sampleContainer,node)))),labels}fillLabels(sampleContainer,labelNode){const labelFont=sampleContainer.xmlStyle&&null!=labelNode.getAttribute("fontFamily")?labelNode.getAttribute("fontFamily"):sampleContainer.colorPalette.labelFont,labelColor=sampleContainer.xmlStyle&&null!=labelNode.getAttribute("fillColor")?labelNode.getAttribute("fillColor"):sampleContainer.colorPalette.colorPaletteMap.get(ColorPalette.LABEL_COLOR),labels=new Array,textNodes=Array.from(labelNode.getElementsByTagName("Text"));if(textNodes)for(const element of textNodes)labels.push(new Label(element.textContent||"",Number(element.getAttribute("x")),Number(element.getAttribute("y")),new StyleLabel(labelFont,labelColor,Number(labelNode.getAttribute("fontHeight"))),this.getHorizontalAlignment(labelNode.getAttribute("hAlignment")),this.getVerticalAlignment(labelNode.getAttribute("vAlignment")),Number(element.getAttribute("rotation"))));return labels}getHorizontalAlignment(hAlignment){return hAlignment&&null!=hAlignment&&""!==hAlignment?hAlignment:"left"}getVerticalAlignment(vAlignment){return vAlignment&&null!=vAlignment&&""!==vAlignment?"center"===vAlignment?"middle":vAlignment:"top"}getVialGrids(vialGridNodes){const vialGrids=new Array;return vialGridNodes.forEach((node=>vialGrids.push(this.buildVialGrid(node)))),vialGrids}buildVialGrid(node){const vialGrid=new VialGrid(parseInt(node.getAttribute("rows")),parseInt(node.getAttribute("columns")),parseFloat(node.getAttribute("rowSpacing")),parseFloat(node.getAttribute("columnSpacing")),node.getAttribute("firstVialPosition"),node.getAttribute("direction"),node.getAttribute("shape"));return vialGrid.topLeftVialCoordinateX=parseFloat(node.getElementsByTagName("TopLeftVialCoordinate")[0].getAttribute("x")),vialGrid.topLeftVialCoordinateY=parseFloat(node.getElementsByTagName("TopLeftVialCoordinate")[0].getAttribute("y")),vialGrid.rowOffset=parseInt(node.getAttribute("rowOffset")??"0"),vialGrid.colOffset=parseInt(node.getAttribute("columnOffset")??"0"),vialGrid.interleave=node.getAttribute("interleave")??void 0,vialGrid.rowNumbering=node.getElementsByTagName("GridNumbering")[0]?.getAttribute("rowNumbering")??void 0,vialGrid.columnNumbering=node.getElementsByTagName("GridNumbering")[0]?.getAttribute("columnNumbering")??void 0,vialGrid.separator=node.getElementsByTagName("GridNumbering")[0]?.getAttribute("separator")??"",vialGrid.firstRowIndex=parseInt(node.getElementsByTagName("GridNumbering")[0]?.getAttribute("firstRowIndex")??"0"),vialGrid.firstColumnIndex=parseInt(node.getElementsByTagName("GridNumbering")[0]?.getAttribute("firstColumnIndex")??"0"),vialGrid.consecutiveNumbering=node.getElementsByTagName("ConsecutiveNumbering")[0]?.getAttribute("numbering")??void 0,vialGrid.firstVialNumber=parseInt(node.getElementsByTagName("ConsecutiveNumbering")[0]?.getAttribute("firstVialNumber")??"1"),vialGrid.vialShapeDescription=this.getVialShapeDescription(vialGrid.vialShapeId),vialGrid}getFreeVials(freeVialsNodes){const freeVials=new Array;return freeVialsNodes.forEach((node=>freeVials.push(this.buildFreeVial(node)))),freeVials}buildFreeVial(node){const freeVial=new FreeVial(node.getAttribute("id"),parseFloat(node.getAttribute("x")),parseFloat(node.getAttribute("y")),node.getAttribute("shape"),node.getAttribute("rotation")?parseFloat(node.getAttribute("rotation")):void 0,node.getAttribute("row")?parseInt(node.getAttribute("row")):void 0,node.getAttribute("column")?parseInt(node.getAttribute("column")):void 0);return freeVial.vialShapeDescription=this.getVialShapeDescription(freeVial.vialShapeId),freeVial}getVialRings(vialRingNodes){const vialRings=new Array;return vialRingNodes.forEach((node=>vialRings.push(this.buildVialRing(node)))),vialRings}buildVialRing(node){const vialRings=new VialRings(parseInt(node.getAttribute("numberOfRings")),parseInt(node.getAttribute("vialsPerRing")),parseFloat(node.getAttribute("distanceBetweenRings")),parseFloat(node.getAttribute("cx")),parseFloat(node.getAttribute("cy")),parseFloat(node.getAttribute("innerRingRadius")),node.getAttribute("shape"));return vialRings.numberingDirection=node.getAttribute("numberingDirection"),vialRings.numberingMode=node.getAttribute("numberingMode"),vialRings.firstVialRing=node.getAttribute("firstVialRing"),vialRings.firstVialAngle=parseFloat(node.getAttribute("firstVialAngle")??"0"),vialRings.lastVialAngle=node.getAttribute("lastVialAngle")?parseFloat(node.getAttribute("lastVialAngle")):void 0,vialRings.rowOffset=parseInt(node.getAttribute("rowOffset")??"0"),vialRings.colOffset=parseInt(node.getAttribute("columnOffset")??"0"),vialRings.interleave=node.getAttribute("interleave")??void 0,vialRings.firstVialNumber=parseInt(node.getAttribute("firstVialNumber")??"1"),vialRings.vialShapeDescription=this.getVialShapeDescription(vialRings.vialShapeId),vialRings}getVialShapes(vialShapeNodes){const vialShapes=new Array;return vialShapeNodes.forEach((node=>vialShapes.push(this.buildVialShape(node)))),vialShapes}buildVialShape(node){const vialShapeDescription=new VialShapeDescription;let childElement;return vialShapeDescription.id=node.getAttribute("id"),node.getElementsByTagName("ellipse").length>0?(childElement=node.getElementsByTagName("ellipse")[0],vialShapeDescription.shape=VialShape.Ellipse,vialShapeDescription.initX=parseFloat(childElement.getAttribute("cx")),vialShapeDescription.initY=parseFloat(childElement.getAttribute("cy")),vialShapeDescription.width=parseFloat(childElement.getAttribute("rx")),vialShapeDescription.height=parseFloat(childElement.getAttribute("ry"))):(childElement=node.getElementsByTagName("rectangle")[0],vialShapeDescription.shape=VialShape.Rectangle,vialShapeDescription.initX=parseFloat(childElement.getAttribute("x")),vialShapeDescription.initY=parseFloat(childElement.getAttribute("y")),vialShapeDescription.width=parseFloat(childElement.getAttribute("width")),vialShapeDescription.height=parseFloat(childElement.getAttribute("height"))),vialShapeDescription.fillColor=childElement.getAttribute("fillcolor")??void 0,vialShapeDescription.strokeColor=childElement.getAttribute("strokecolor")??void 0,vialShapeDescription.strokeWidth=parseFloat(childElement.getAttribute("strokewidth")??"0"),vialShapeDescription}getVialShapeDescription(vialShapeId){return this.vialShapes.find((x=>x.id===vialShapeId))}getDecorations(sampleContainer){sampleContainer.dispatchXML?.sampleContainerDecorationsNode&&sampleContainer.dispatchXML?.sampleContainerDecorationsNode.forEach((decoration=>{this.getDecoration(decoration,sampleContainer)}))}getDecoration(decorationElement,sampleContainer){const decoration=decorationElement.children;sampleContainer.decorationsList.push(this.createDecorationItem(decoration,sampleContainer)),void 0!==decoration.item(0)?.children.item(0)&&null!=decoration.item(0)?.children.item(0)&&this.getDecoration(decoration.item(0),sampleContainer)}createDecorationItem(decoration,sampleContainer){let decorationStyle=sampleContainer.colorPalette.defaultDecorationStyle;switch(sampleContainer.xmlStyle&&(decorationStyle=sampleContainer.colorPalette.customDecorationStyle(decoration.item(0)?.parentElement?.getAttribute("fillColor")||sampleContainer.colorPalette.colorPaletteMap.get(ColorPalette.DECORATION_FILL_COLOR),decoration.item(0)?.parentElement?.getAttribute("strokeColor")||sampleContainer.colorPalette.colorPaletteMap.get(ColorPalette.DECORATION_STROKE_COLOR))),decorationStyle.strokeWidth=Number(decoration.item(0)?.parentElement?.getAttribute("StrokeWidth"))||sampleContainer.colorPalette.defaultDecorationStyle.strokeWidth,decoration.item(0)?.tagName){case"RECTANGLE":return new RectangleItem(decorationStyle,Number(decoration.item(0)?.getAttribute("x")),Number(decoration.item(0)?.getAttribute("y")),Number(decoration.item(0)?.getAttribute("width")),Number(decoration.item(0)?.getAttribute("height")));case"ARC":return new ArcItem(decorationStyle,new Angle(Number(decoration.item(0)?.getAttribute("startAngle")),Number(decoration.item(0)?.getAttribute("sweepAngle"))),Number(decoration.item(0)?.getAttribute("cx")),Number(decoration.item(0)?.getAttribute("cy")),Number(decoration.item(0)?.getAttribute("rx")),Number(decoration.item(0)?.getAttribute("ry")));case"POLYGON":return new PolygonItem(decorationStyle,decoration.item(0)?.getAttribute("points"));case"ELLIPSE":return new EllipseItem(decorationStyle,Number(decoration.item(0)?.getAttribute("cx")),Number(decoration.item(0)?.getAttribute("cy")),Number(decoration.item(0)?.getAttribute("rx")),Number(decoration.item(0)?.getAttribute("ry")));case"LINE":return new LineItem(decorationStyle,Number(decoration.item(0)?.getAttribute("x1")),Number(decoration.item(0)?.getAttribute("y1")),Number(decoration.item(0)?.getAttribute("x2")),Number(decoration.item(0)?.getAttribute("y2")));default:throw new Error("Decoration form not recognized")}}};class DrawFactory{constructor(){this.displayOutline=!0,this.displayDecoration=!0,this.displayLabel=!0,this.orderingArrow=!1,this.displayStatusIcon=!0}drawShapes(awfSlydini,sampleContainer,canvas){this.initCanvas(sampleContainer,canvas),this.draw(awfSlydini,sampleContainer)}updateOptions(awfSlydini){this.displayOutline=awfSlydini.displayOutline,this.displayDecoration=awfSlydini.displayDecoration,this.displayLabel=awfSlydini.displayLabel,this.orderingArrow=awfSlydini.orderingArrow,this.displayStatusIcon=awfSlydini.displayStatusIcon}draw(awfSydini,sampleContainer,isMoving=!1,deltaX=0,deltaY=0,destVial){if(null!=sampleContainer.ctx){sampleContainer.ctx.clearRect(0,0,sampleContainer.ctx.canvas.width,sampleContainer.ctx.canvas.height),sampleContainer.transformMatrix=new DOMMatrix;const translation={x:0,y:0};90===sampleContainer.rotation?translation.x=sampleContainer.height:180===sampleContainer.rotation?(translation.x=sampleContainer.width,translation.y=sampleContainer.height):270===sampleContainer.rotation&&(translation.y=sampleContainer.width),sampleContainer.transformMatrix.translateSelf(translation.x,translation.y),sampleContainer.transformMatrix.rotateSelf(sampleContainer.rotation),sampleContainer.ctx.setTransform(sampleContainer.transformMatrix),sampleContainer.zoomController.translateBeforeDraw(sampleContainer.ctx),this.displayOutline&&this.drawSampleContainer(sampleContainer),this.displayDecoration&&this.drawDecoration(sampleContainer),this.displayLabel&&this.drawLabels(sampleContainer),this.drawVials(awfSydini,sampleContainer,isMoving),this.orderingArrow&&this.drawOrderingArrow(sampleContainer),isMoving&&this.drawMoveItems(awfSydini,sampleContainer,deltaX,deltaY,destVial),sampleContainer.zoomController.translateAfterDraw(sampleContainer.ctx),sampleContainer.ctx.resetTransform()}}drawMoveItems(awfSydini,sampleContainer,deltaX,deltaY,destVial){if(destVial&&sampleContainer.selectionController.buildSourceDestinationVialsMap(destVial,sampleContainer.vialsList)){const destVials=sampleContainer.selectionController.destinationVials;this.drawDestinationVial(awfSydini,sampleContainer,destVials)}this.drawMovingVials(awfSydini,sampleContainer,deltaX,deltaY)}initCanvas(sampleContainer,canvas){if(this.setSampleContainerSize(sampleContainer),this.factory(sampleContainer,canvas.clientWidth,canvas.clientHeight),sampleContainer.rotation%180==0?(canvas.setAttribute("width",(sampleContainer.width+2).toString()),canvas.setAttribute("height",(sampleContainer.height+2).toString())):(canvas.setAttribute("height",(sampleContainer.width+2).toString()),canvas.setAttribute("width",(sampleContainer.height+2).toString())),!canvas.getContext("2d"))throw Error("getContext doesn't exist, your browser might not be supported");sampleContainer.ctx=canvas.getContext("2d")}drawLabels(sampleContainer){sampleContainer.labelsList.forEach((label=>{label.drawLabel(sampleContainer.ctx,sampleContainer.globalRatio,sampleContainer.rotation)}))}drawSampleContainer(sampleContainer){sampleContainer.outline.forEach((outline=>{null!=sampleContainer.ctx&&outline.draw(sampleContainer.ctx,sampleContainer.globalRatio,!1)}))}drawVials(awfSlydini,sampleContainer,isMoving){sampleContainer.vialsList.forEach((vial=>{vial.drawableItem&&this.drawIndividualVial(sampleContainer,vial,!1,isMoving)})),sampleContainer.ctx&&this.drawStatusIcons(awfSlydini,sampleContainer,sampleContainer.vialsList,sampleContainer.globalRatio,sampleContainer.sampleStatusList,sampleContainer.rotation)}drawMovingVials(awfSlydini,sampleContainer,deltaX,deltaY){const movingVials=sampleContainer.selectionController.selectedVials;movingVials.forEach((vial=>{if(vial.drawableItem){const temp=vial.drawableItem;(vial.drawableItem instanceof EllipseItem||vial.drawableItem instanceof RectangleItem)&&(vial.drawableItem=vial.drawableItem.translate(deltaX,deltaY)),this.drawIndividualVial(sampleContainer,vial,!0,!0),vial.drawableItem=temp}})),sampleContainer.ctx&&this.drawStatusIcons(awfSlydini,sampleContainer,movingVials,sampleContainer.globalRatio,sampleContainer.sampleStatusList,sampleContainer.rotation,new Point(deltaX,deltaY))}drawDestinationVial(awfSlydini,sampleContainer,destVials){destVials.forEach((vial=>{vial.drawableItem&&(vial.hovered=!0,this.drawIndividualVial(sampleContainer,vial),vial.hovered=!1)})),this.drawStatusIcons(awfSlydini,sampleContainer,destVials,sampleContainer.globalRatio,sampleContainer.sampleStatusList,sampleContainer.rotation)}drawIndividualVial(sampleContainer,vial,isTransparent=!1,isMoving=!1){if(sampleContainer.ctx&&vial.drawableItem){isTransparent&&(sampleContainer.ctx.globalAlpha=.5);let vialFillColor=vial.hovered?vial.drawableItem.style.hoverFillColor:vial.drawableItem.style.fillColor;if(vial.hovered&&!isMoving)vial.drawableItem.draw(sampleContainer.ctx,sampleContainer.globalRatio,!0,!1,!0);else if("Default"!==vial.sampleInfo.sampleType){const sampleTypeColor=sampleContainer.sampleTypes.getSampleTypes().filter((x=>x.name===vial.sampleInfo.sampleType))[0]?.color;sampleTypeColor&&(vial.drawableItem.draw(sampleContainer.ctx,sampleContainer.globalRatio,!0,vial.selected,!1,sampleTypeColor),vialFillColor=sampleTypeColor)}else vial.drawableItem.draw(sampleContainer.ctx,sampleContainer.globalRatio,!0,vial.selected);this.drawSampleText(sampleContainer,vial.drawableItem,sampleContainer.globalRatio,vial.sampleInfo,sampleContainer.colorPalette.labelFont,vialFillColor),sampleContainer.ctx.globalAlpha=1}}drawSampleText(sampleContainer,drawableItem,ratio,sampleInfo,font,vialColor){if(sampleInfo.text&&sampleContainer.ctx){const textColor=ColorUtils.isColorLight(vialColor)?ColorUtils.AGILENT_NAVY_DARK_COLOR:ColorUtils.WHITE_COLOR,maxWidth=(drawableItem.width-drawableItem.style.strokeWidth)*ratio;let textSizePercentage=sampleContainer.defaultSampleTextSize/100;sampleInfo.textSize&&0!==sampleInfo.textSize&&(textSizePercentage=sampleInfo.textSize/100);const label=new Label(sampleInfo.text,drawableItem.center().x/ratio,drawableItem.center().y/ratio,new StyleLabel(font,textColor,.45*drawableItem.height*textSizePercentage),"center","middle");label.ratio=ratio,label.drawLabel(sampleContainer.ctx,ratio,sampleContainer.rotation,!0,maxWidth)}}drawStatusIcons(awfSlydini,sampleContainer,vials,ratio,sampleStatusList,containerRotation,delta){this.displayStatusIcon&&(vials.length>0&&vials[0].drawableItem?.canDrawIcon(sampleContainer.globalRatio)?vials.forEach((vial=>{const temp=vial.drawableItem;(vial.drawableItem instanceof EllipseItem||vial.drawableItem instanceof RectangleItem)&&delta&&(vial.drawableItem=vial.drawableItem.translate(delta.x,delta.y));const sampleStatus=sampleStatusList.findSampleStatus(vial.sampleInfo.sampleStatus);this.drawStatusIcon(sampleContainer,vial,ratio,sampleStatus,containerRotation),vial.drawableItem=temp})):awfSlydini.dispatchEvent(createCustomEvent(SlydiniEvent.SAMPLESTATUSVISBILITYCHANGED,{message:"Sample status cannot be displayed."})))}drawStatusIcon(sampleContainer,vial,ratio,sampleStatus,containerRotation){"None"!==vial.sampleInfo.sampleStatus&&sampleStatus&&vial.drawableItem&&sampleContainer.ctx&&vial.drawableItem.drawIcon(sampleContainer.ctx,ratio,sampleStatus,containerRotation)}drawDecoration(sampleContainer){sampleContainer.decorationsList.forEach((decoration=>{null!=sampleContainer.ctx&&decoration.draw(sampleContainer.ctx,sampleContainer.globalRatio,!1)}))}drawOrderingArrow(sampleContainer){if(sampleContainer.selectionController.selectedVials.length>1&&sampleContainer.ctx){new OrderingArrowItem(sampleContainer.colorPalette.defaultOrderingArrowStyle,sampleContainer.selectionController.selectedVials).draw(sampleContainer.ctx)}}setSampleContainerSize(sampleContainer){sampleContainer.outline.forEach((outline=>{outline.setSize(sampleContainer)}))}factory(sampleContainer,containerWidth,containerHeight){const resultRatio=sampleContainerFactory.ratioCalculate(sampleContainer,containerWidth,containerHeight);sampleContainer.width=sampleContainer.width*resultRatio,sampleContainer.height=sampleContainer.height*resultRatio,sampleContainer.initX=sampleContainer.initX*resultRatio,sampleContainer.initY=sampleContainer.initY*resultRatio,sampleContainer.outline.forEach((outline=>{outline.ratio=resultRatio})),sampleContainer.decorationsList.forEach((decoration=>{decoration.ratio=resultRatio})),sampleContainer.labelsList.forEach((label=>{label.ratio=resultRatio})),sampleContainer.vialsList.forEach((vial=>{vial.drawableItem&&(vial.drawableItem.ratio=resultRatio)})),sampleContainer.ratioDefault=resultRatio}}let AwfSlydini=class AwfSlydini extends lit.oi{constructor(){super(...arguments),this.onColorValueChanged=this.handleColorValueChanged.bind(this),this.onSampleTypeValueChanged=this.handleSampleTypeValueChanged.bind(this),this.sampleTypes=new SampleTypes,this.eventController=new SlydiniEventController,this.sampleStatusList=new SampleStatusList,this.colorPalette=new ColorPalette,this.drag=!1,this.colorPaletteTag=null,this.sampleTypesTag=null,this.sampleStatusTag=null,this.moveStartPosition=new Point(0,0),this.lastCanDropValue=!1,this.isInMultiselectTouchMode=!1,this.previousDiff=-1,this.isZooming=!1,this.isTouch=!1,this.isExternalDrag=!1,this.isDraggingVials=!1,this.isDragLeavingCanvas=!1,this.drawingProperties=["displayOutline","displayDecoration","displayLabel","orderingArrow","displayStatusIcon"],this.containerProperties=["xmlCode","xmlStyle","startOffset","containerRotation"],this.selectionProperties=["selectionMode","selectionOrder"],this.sampleContainer=new SampleContainer,this.componentReady=new Subject.x,this.componentReady$=this.componentReady.asObservable(),this.drawFactory=new DrawFactory,this.displayOutline=!0,this.displayDecoration=!0,this.displayLabel=!0,this.vialSelection=!0,this.clearSelectionClickingOutside=!0,this.selectionMode=SelectionMode.Row,this.selectionOrder=SelectionOrder.Linear,this.orderingArrow=!1,this.xmlStyle=!1,this.allowMoveSelection=!1,this.displayContainerName=!1,this.displayStatusIcon=!0,this.zoom=!0,this.defaultSampleTextSize=100,this.displayConfirmationDialog=!0}static get styles(){return[COMMON_STYLES,SLYDINI_STYLES]}get selectedVials(){return this.sampleContainer.selectionController.selectedVials.map((v=>v.details))}get vials(){const list=[];return this.sampleContainer.vialsList.forEach((vial=>list.push(vial.details))),list.sort(((a,b)=>a.identifier.localeCompare(b.identifier,"en",{numeric:!0}))),list}firstUpdated(){var _this=this;return(0,asyncToGenerator.Z)((function*(){yield document.fonts.ready,_this.sampleStatusList.addAllSampleStatus(yield convertTool.loadIcons()),_this.handleVialSelectionChange(),_this.handleCustomColorPalette(),_this.handleCustomSampleTypes(),_this.handleCustomSampleStatus(),_this.drawSampleContainer(),_this.handleDisplayContainerName(),_this.initCanvasZoomEventListener(),_this.eventController.initEventListener(_this,_this.canvasTag),_this.resizeObserver=new ResizeObserver(_this.resizeContainer.bind(_this)),_this.resizeObserver.observe(_this.canvasTag),_this.componentReady.closed||(_this.componentReady.next(),_this.componentReady.unsubscribe())}))()}initCanvasZoomEventListener(){this.canvasTag.addEventListener("pointerleave",(event=>{"mouse"===event.pointerType&&(this.removeEventListener("pointerup",this.handleMouseUp),this.lastHoveredVial&&(this.lastHoveredVial.hovered=!1,this.dispatchEvent(createCustomEvent(SlydiniEvent.MOUSELEAVEVIAL,{mouseEvent:event,vial:this.lastHoveredVial.details})),this.refreshContainer(),this.lastHoveredVial=void 0),document.addEventListener("mouseup",this.handleMouseUpWhenMouseLeave.bind(this)),this.zoom&&(this.sampleContainer.zoomController.mouseLeave=!0,this.removeEventListener("mousemove",this.handleZoomMouseMove)))})),this.canvasTag.addEventListener("pointerenter",(event=>{"mouse"===event.pointerType&&(this.addEventListener("pointerup",this.handleMouseUp),document.removeEventListener("mouseup",this.handleMouseUpWhenMouseLeave.bind(this)),this.zoom&&(this.sampleContainer.zoomController.mouseLeave=!1,this.addEventListener("mousemove",this.handleZoomMouseMove)))}))}resizeContainer(){clearTimeout(this.resizeTimer),this.resizeTimer=setTimeout((()=>{this.drawFactory.drawShapes(this,this.sampleContainer,this.canvasTag),this.displayMoveIcon()}),100)}handleDropExternalVials(event){const currentVial=this.retrieveVialFromPointerPosition(event);this.dispatchEvent(createCustomEvent(SlydiniEvent.EXTERNALDROPVIALS,{vial:currentVial?.details,dragEvent:event}))}handleDragStart(event){const customEvent=new CustomEvent(SlydiniEvent.STARTDRAGVIALS,{composed:!0,bubbles:!0,cancelable:!0,detail:{vials:this.selectedVials}});if(this.removeEventListener("mousemove",this.handleMouseMove),!this.dispatchEvent(customEvent))return void event.preventDefault();const canvas=document.createElement("canvas"),dragImage=slydiniHelper.createTransparentDragImage(canvas);this.isDraggingVials=!0,this.isDragLeavingCanvas=!1,this.moveStartPosition=new Point(event.x,event.y),event.dataTransfer?.setData("text/vials",JSON.stringify(this.selectedVials)),event.dataTransfer?.setDragImage(dragImage,0,0),canvas.remove()}handleDragEnd(){this.isDraggingVials=!1,this.isDragLeavingCanvas&&(this.isDragLeavingCanvas=!1,this.removeEventListener("mousemove",this.handleMouseMove),this.refreshContainer())}handleMouseUpWhenMouseLeave(){this.removeEventListener("mousemove",this.handleMouseMove),this.drag=!1,this.refreshContainer()}handleCustomColorPalette(){this.colorPaletteTag=this.querySelector("awf-color-palette"),this.colorPaletteTag&&(this.colorPaletteTag.addEventListener(AwfEvent.VALUE_CHANGE,this.onColorValueChanged),this.colorPaletteTag.querySelectorAll("awf-color").forEach((color=>this.updateColorPalette(color.name,color.value))))}handleCustomSampleTypes(){this.sampleTypesTag=this.querySelector("awf-sample-types"),this.sampleTypesTag&&(this.sampleTypesTag.addEventListener(AwfEvent.VALUE_CHANGE,this.onSampleTypeValueChanged),this.sampleTypesTag.querySelectorAll("awf-color").forEach((color=>this.sampleTypes.updateSampleTypes(color.name,color.value))))}handleCustomSampleStatus(){this.sampleStatusTag=this.querySelector("awf-sample-status-list"),this.sampleStatusTag&&this.sampleStatusTag.querySelectorAll("awf-sample-status").forEach((sampleStatus=>{const svg=sampleStatus.querySelector("svg"),name=sampleStatus.getAttribute("name");svg&&this.sampleStatusList.updateSampleStatus(name,svg.outerHTML)}))}handleColorValueChanged(event){const customEvent=event;this.updateColorPalette(customEvent.detail.name,customEvent.detail.value),this.drawSampleContainer()}handleSelectAllViaControlA(){this.sampleContainer.selectionController.selectAllVials(this.sampleContainer.vialsList),this.refreshContainer()}handleSampleTypeValueChanged(event){const customEvent=event;this.sampleTypes.updateSampleTypes(customEvent.detail.name,customEvent.detail.value),this.drawSampleContainer()}handleMouseOver(event,dispatchEvents){if(!this.isTouch){const pointerEvent=event,currentVial=this.retrieveVialFromPointerPosition(pointerEvent);currentVial!==this.lastHoveredVial?this.handleHoverStateChanged(pointerEvent,dispatchEvents,currentVial):this.lastHoveredVial&&dispatchEvents&&this.dispatchEvent(createCustomEvent(SlydiniEvent.MOUSEOVERVIAL,{mouseEvent:event,vial:this.lastHoveredVial.details}))}}handleHoverStateChanged(event,dispatchEvents,currentVial){this.lastHoveredVial&&(this.lastHoveredVial.hovered=!1,dispatchEvents&&this.dispatchEvent(createCustomEvent(SlydiniEvent.MOUSELEAVEVIAL,{mouseEvent:event,vial:this.lastHoveredVial.details}))),currentVial&&(currentVial.hovered=!0,dispatchEvents&&this.dispatchEvent(createCustomEvent(SlydiniEvent.MOUSEENTERVIAL,{mouseEvent:event,vial:currentVial.details}))),this.refreshContainer(),this.lastHoveredVial=currentVial}updated(_changedProperties){this.updateDrawingProperties(_changedProperties),this.updateSelectionProperties(_changedProperties),this.updateContainerProperties(_changedProperties),this.updateContainerNameProperties(_changedProperties)}updateDrawingProperties(changedProperties){Array.from(changedProperties.keys()).some((e=>this.drawingProperties.includes(e.toString())))&&(this.drawFactory.updateOptions(this),this.drawFactory.draw(this,this.sampleContainer)),changedProperties.has("zoom")&&this.eventController.initZoomEventListener(this),changedProperties.has("defaultSampleTextSize")&&(this.sampleContainer.defaultSampleTextSize=this.defaultSampleTextSize,this.refreshContainer())}updateSelectionProperties(changedProperties){changedProperties.has("vialSelection")&&this.handleVialSelectionChange(),changedProperties.has("allowMoveSelection")&&this.displayMoveIcon()}updateContainerProperties(changedProperties){Array.from(changedProperties.keys()).some((e=>this.containerProperties.includes(e.toString())))&&this.drawSampleContainer(),Array.from(changedProperties.keys()).some((e=>this.selectionProperties.includes(e.toString())))&&(this.sampleContainer.selectionController.clearSelection(this.sampleContainer.vialsList),this.sampleContainer.selectionController.selectionMode=this.selectionMode,this.sampleContainer.selectionController.selectionOrder=this.selectionOrder,this.refreshContainer())}updateContainerNameProperties(changedProperties){(changedProperties.has("displayContainerName")||changedProperties.has("containerName")||changedProperties.has("containerNameVerticalPosition")||changedProperties.has("containerNameHorizontalPosition"))&&this.drawSampleContainer()}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this.colorPaletteTag&&this.colorPaletteTag.removeEventListener(AwfEvent.VALUE_CHANGE,this.onColorValueChanged),this.sampleTypesTag&&this.sampleTypesTag.removeEventListener(AwfEvent.VALUE_CHANGE,this.onSampleTypeValueChanged),this.resizeObserver?.disconnect()}setVialInfo(vialInfo){var _this2=this;return(0,asyncToGenerator.Z)((function*(){_this2.componentReady.closed||(yield function firstValueFrom(source,config){var hasConfig="object"==typeof config;return new Promise((function(resolve,reject){var subscriber=new Subscriber.Hp({next:function(value){resolve(value),subscriber.unsubscribe()},error:reject,complete:function(){hasConfig?resolve(config.defaultValue):reject(new EmptyError.K)}});source.subscribe(subscriber)}))}(_this2.componentReady$));const vial=_this2.sampleContainer.vialsList.find((v=>v.identifier===vialInfo.identifier));return!!vial&&(vial.setInfo(vialInfo,_this2,_this2.sampleTypes,_this2.sampleContainer.selectionController),_this2.refreshContainer(),!0)}))()}getVialInfo(identifier){return this.sampleContainer.vialsList.find((v=>v.identifier===identifier))?.details}handleDisplayContainerName(){this.containerNameHeader.innerText="",this.containerName&&""!==this.containerName?this.containerNameHeader.innerText=this.containerName:this.sampleContainer.dispatchXML?.displayName&&(this.containerNameHeader.innerText=this.sampleContainer.dispatchXML.displayName),this.displayContainerName?(this.containerNameHeader.style.display="block",this.containerNameHeader.style.textAlign=this.containerNameHorizontalPosition??"left"):this.containerNameHeader.style.display="none"}displayMoveIcon(){if(this.vialSelection&&this.allowMoveSelection&&this.selectedVials.length>0&&!this.isTouch){const topRightVial=this.sampleContainer.selectionController.getTopRightSelectedVial(),iconPosition=slydiniHelper.calculateIconPosition(topRightVial),backgroundColor=this.xmlStyle&&this.sampleContainer.dispatchXML?this.sampleContainer.dispatchXML.sampleContainerFillColor:this.colorPalette.defaultOutlineStyle.fillColor;this.moveIcon.style.stroke=ColorUtils.isColorLight(backgroundColor)?"":ColorUtils.AGILENT_GRAY_PALE_COLOR;const iconHeight=parseInt(getComputedStyle(this.moveIcon).getPropertyValue("height"),10),iconWidth=parseInt(getComputedStyle(this.moveIcon).getPropertyValue("width"),10);this.moveIcon.style.top=iconPosition.y-this.sampleContainer.zoomController.zoomOffset.y-iconHeight/2+"px",this.moveIcon.style.left=iconPosition.x-this.sampleContainer.zoomController.zoomOffset.x-iconWidth/2+"px",this.moveIcon.style.display="",this.moveIcon.style.visibility="visible"}else this.moveIcon.style.display="none",this.moveIcon.style.visibility="hidden"}handleVialSelectionChange(){this.removeEventListener("pointerdown",this.handleMouseDown),this.removeEventListener("pointerup",this.handleMouseUp),this.vialSelection?(this.addEventListener("pointerdown",this.handleMouseDown),this.addEventListener("pointerup",this.handleMouseUp)):this.clearSelectedVials()}handleMouseDown(event){this.mouseDownEvent=event,this.drag=!1,"mouse"!==this.mouseDownEvent.pointerType?(this.isTouch=!0,this.handleTouchPointerDown(event)):(this.isTouch=!1,0===this.mouseDownEvent.button?this.addEventListener("mousemove",this.handleMouseMove):2===this.mouseDownEvent.button&&(this.addEventListener("mousemove",this.handleRightClickMouseMove),this.sampleContainer.zoomController.startOffset.x=this.sampleContainer.zoomController.zoomOffset.x,this.sampleContainer.zoomController.startOffset.y=this.sampleContainer.zoomController.zoomOffset.y))}handleTouchPointerDown(event){this.eventController.eventCache.push(this.mouseDownEvent),this.sampleContainer.zoomController.setMouseOffsetFromTouch(this.eventController.eventCache),this.sampleContainer.zoomController.setStartOffset(),this.addEventListener("pointermove",this.handlePointerMove),!this.isInMultiselectTouchMode&&this.vialSelection&&this.eventController.eventCache.length<2&&(this.longPressTimer=setTimeout((()=>this.onLongPress()),1500))}handlePointerMove(event){this.drag||(this.drag=slydiniHelper.isDragging(event,this.mouseDownEvent,!0));const index=this.eventController.eventCache.findIndex((cachedEv=>cachedEv.pointerId===event.pointerId));this.eventController.eventCache[index]=event,2===this.eventController.eventCache.length&&(this.isZooming=!0,this.handlePinchedZoom()),this.drag&&(this.longPressTimer&&clearTimeout(this.longPressTimer),this.isInMultiselectTouchMode&&this.eventController.eventCache.length<2&&(event.preventDefault(),this.handleSelection(event,MultipleSelectionType.MultipleContinuous,!0)),this.sampleContainer.zoomController.canScrollInZoom(this.drag,this.isInMultiselectTouchMode,this.eventController.eventCache)&&(this.sampleContainer.zoomController.zoomOffset.x=this.sampleContainer.zoomController.startOffset.x+(this.mouseDownEvent.offsetX-event.offsetX),this.sampleContainer.zoomController.zoomOffset.y=this.sampleContainer.zoomController.startOffset.y+(this.mouseDownEvent.offsetY-event.offsetY),this.refreshContainer()))}onLongPress(){this.longPressedVial=this.retrieveVialFromPointerPosition(this.mouseDownEvent),this.longPressedVial&&(this.clearSelectedVials(),this.isInMultiselectTouchMode=!0,this.exitMultiselectChip.style.visibility="visible",this.sampleContainer.selectionController.selectSingleVial(this.longPressedVial,!1,!0),this.refreshContainer())}handleClearSelectionClickingOutside(){if(this.clearSelectionClickingOutside&&!this.eventController.isUserGrabbingOrMultiSelecting()){const offset=slydiniHelper.calculateContainerOffset(this.canvasTag,this.sampleContainer.zoomController.zoomOffset);this.sampleContainer.selectionController.clearSelectionIfOutsideVials(this.sampleContainer,new Point(this.mouseDownEvent.x,this.mouseDownEvent.y),offset)&&this.refreshContainer()}}clearSelectedVials(){this.sampleContainer.selectionController.clearSelection(this.sampleContainer.vialsList),this.refreshContainer()}handleMouseUp(event){this.removeEventListener("mousemove",this.handleMouseMove),this.removeEventListener("mousemove",this.handleRightClickMouseMove),this.removeEventListener("pointermove",this.handlePointerMove);const pointer=event;"mouse"!==this.mouseDownEvent.pointerType?this.handlePointerUp(pointer):slydiniHelper.isDragAndSelectVials(this.vialSelection,!this.drag,!this.isDraggingVials)&&0===pointer.button&&this.eventController.eventCache.length<2?(this.handleClearSelectionClickingOutside(),this.handleSelection(pointer,slydiniHelper.getSelectionType(pointer,this.eventController.isMacOs),!1)):2===pointer.button&&(document.body.style.cursor="default",this.drag||this.dispatchRightClickEvent(pointer))}handlePointerUpForPinch(){this.eventController.eventCache.length<2&&(this.previousDiff=-1),this.isZooming&&this.eventController.eventCache.length<1&&(this.isZooming=!1)}handlePointerUp(event){if(this.eventController.removeEvent(event),this.longPressTimer&&clearTimeout(this.longPressTimer),this.longPressedVial)this.longPressedVial=void 0;else{if(this.vialSelection&&!this.drag&&!this.isZooming)if(this.handleClearSelectionClickingOutside(),this.isInMultiselectTouchMode){const currentVial=this.retrieveVialFromPointerPosition(event);currentVial&&(this.sampleContainer.selectionController.selectSingleVial(currentVial),this.refreshContainer())}else this.handleSelection(event,slydiniHelper.getSelectionType(event,this.eventController.isMacOs),!1);this.drag=!1,this.handlePointerUpForPinch()}}handleMouseMove(event){const pointer=event;this.drag=slydiniHelper.isDragging(pointer,this.mouseDownEvent),slydiniHelper.isDragAndSelectVials(this.vialSelection,this.drag,!this.isDraggingVials)&&this.handleSelection(pointer,MultipleSelectionType.MultipleContinuous,this.eventController.isCtrlKeyDown)}handleRightClickMouseMove(event){const pointer=event;this.drag=slydiniHelper.isDragging(pointer,this.mouseDownEvent),this.drag&&this.sampleContainer.zoomController.zoomRatio>0&&(document.body.style.cursor="grabbing",this.sampleContainer.zoomController.zoomOffset.x=this.sampleContainer.zoomController.startOffset.x+(this.mouseDownEvent.x-pointer.x),this.sampleContainer.zoomController.zoomOffset.y=this.sampleContainer.zoomController.startOffset.y+(this.mouseDownEvent.y-pointer.y),this.refreshContainer())}handleSelection(event,selectionType,keepPreviousSelection){const offset=slydiniHelper.calculateContainerOffset(this.canvasTag,this.sampleContainer.zoomController.zoomOffset),eventPoint=new Point(event.x,event.y);if(this.drag){const mouseDownVial=this.retrieveVialFromPointerPosition(this.mouseDownEvent);mouseDownVial&&this.sampleContainer.selectionController.lastSelectedVial!==mouseDownVial&&(this.sampleContainer.selectionController.lastSelectedVial=mouseDownVial)}this.retrieveVialFromPointerPosition(event)&&(this.sampleContainer.selectionController.selectVial(this.sampleContainer,eventPoint,offset,selectionType,keepPreviousSelection),this.drawFactory.draw(this,this.sampleContainer)),this.exitMultiselectChip.label=this.selectedVials.length.toString(),this.displayMoveIcon()}handleMoveSelectedVials(event){this.moveIcon.style.display="none",this.moveIcon.style.visibility="hidden";const vialAtCurrentPosition=this.sampleContainer.selectionController.getVialAtCurrentPositionWhenMoving(this.sampleContainer,new Point(event.x,event.y),this.moveStartPosition),deltaX=(event.x-this.moveStartPosition.x)/this.sampleContainer.globalRatio,deltaY=(event.y-this.moveStartPosition.y)/this.sampleContainer.globalRatio;this.drawFactory.draw(this,this.sampleContainer,!0,deltaX,deltaY,vialAtCurrentPosition),vialAtCurrentPosition!==this.lastMovePosition&&(this.lastMovePosition=vialAtCurrentPosition,this.lastCanDropValue=this.sampleContainer.selectionController.lastCanDropValue&&void 0!==vialAtCurrentPosition,this.dispatchDragEvent(vialAtCurrentPosition,this.sampleContainer.selectionController.destinationVials)),event.dataTransfer?.types.includes("text/vials")&&(event.dataTransfer.dropEffect=this.lastCanDropValue?"move":"none")}dispatchDragEvent(currentPosition,destinationVials){if(currentPosition){const customEvent=new CustomEvent(SlydiniEvent.DRAGVIALS,{composed:!0,bubbles:!0,cancelable:!0,detail:{sourceVials:this.selectedVials,destinationVials:destinationVials.map((v=>v.details))}});this.dispatchEvent(customEvent)||(this.lastCanDropValue=!1)}}dispatchDropEvent(){this.dispatchEvent(createCustomEvent(SlydiniEvent.DROPVIALS,{sourceVials:this.selectedVials,destinationVials:this.sampleContainer.selectionController.destinationVials.map((v=>v.details))}))}dispatchRightClickEvent(event){const currentVial=this.retrieveVialFromPointerPosition(event);currentVial?currentVial.selected?this.dispatchEvent(createCustomEvent(SlydiniEvent.RIGHTCLICKSELECTION,{vial:currentVial.details,selection:this.selectedVials,mouseEvent:event})):this.dispatchEvent(createCustomEvent(SlydiniEvent.RIGHTCLICKVIAL,{vial:currentVial.details,mouseEvent:event})):this.dispatchEvent(createCustomEvent(SlydiniEvent.RIGHTCLICKCONTAINER,{mouseEvent:event}))}handleDropSelection(){this.lastCanDropValue?this.displayConfirmationDialog?this.sampleContainer.selectionController.checkDestinationVialsAreEmpty()||this.sampleContainer.selectionController.isMovingToSamePosition?this.selectVialsAfterMoving():(this.removeEventListener("pointerdown",this.handleMouseDown),this.moveSelectionDialogContainer.openModal()):(this.dispatchDropEvent(),this.refreshContainer()):this.refreshContainer()}handleScroll(event){let delta=0;if(this.sampleContainer.ctx){if("keydown"===event.type&&(this.eventController.zoomAction===ZoomAction.ZoomIn?delta=-120:this.eventController.zoomAction===ZoomAction.ZoomOut&&(delta=120)),"DOMMouseScroll"===event.type||"mousewheel"===event.type){const wheelEvent=event;delta=wheelEvent.deltaY,this.sampleContainer.zoomController.setMouseOffset(wheelEvent.offsetX,wheelEvent.offsetY)}this.sampleContainer.zoomController.executeZoom(delta,this.canvasTag,this.sampleContainer.ratioDefault),this.refreshContainer(),event.preventDefault()}}handlePinchedZoom(){const currentDiff=Math.abs(this.eventController.eventCache[0].offsetX-this.eventController.eventCache[1].offsetX);if(this.previousDiff>0){let delta=10;currentDiff>this.previousDiff&&(delta=-delta),this.sampleContainer.zoomController.executeZoom(delta,this.canvasTag,this.sampleContainer.ratioDefault),this.refreshContainer()}this.previousDiff=currentDiff}handleZoomMouseMove(event){const pointer=event;this.sampleContainer.zoomController.setMouseOffset(pointer.offsetX,pointer.offsetY)}selectVialsAfterMoving(){this.dispatchDropEvent(),this.sampleContainer.selectionController.selectDestinationVials(),this.refreshContainer()}render(){const moveSelectionModalElement=lit.dy`<awf-modal class="moveSelectionDialogContainer"><awf-modal-dialog header="Confirmation" class="moveSelectionDialog" slot="content">
                ${" Samples are already defined in this location. Do you want to continue and replace them?"}
                <awf-button class="cancel-button" actions @click=${this.onCancelMoveSelectionDialog} type=${ButtonType.Secondary}
                    >Cancel</awf-button
                >
                <awf-button class="confirm-button" actions @click=${this.onConfirmMoveSelectionDialog} type=${ButtonType.Primary}
                    >Confirm</awf-button
                >
            </awf-modal-dialog></awf-modal>`,xmlValidationModalElement=lit.dy`<awf-modal class="xmlValidationDialogContainer">
                <awf-modal-dialog class="xmlValidationDialog" showclosebutton @close=${this.onCloseModalDialog}  slot="content"
            >${"File cannot be loaded"}</awf-modal-dialog></awf-modal>`,moveIconElement=lit.dy`<awf-icon draggable="true" class="moveIcon" raw=${'<svg version="1.1" id="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve" data-icon-name="grabber">\n<g>\n\t<circle cx="10" cy="6" r="1"></circle>\n\t<circle cx="14" cy="6" r="1"></circle>\n\t<circle cx="10" cy="10" r="1"></circle>\n\t<circle cx="14" cy="10" r="1"></circle>\n\t<circle cx="10" cy="14" r="1"></circle>\n\t<circle cx="14" cy="14" r="1"></circle>\n\t<circle cx="10" cy="18" r="1"></circle>\n\t<circle cx="14" cy="18" r="1"></circle>\n</g>\n</svg>'}></awf-icon>`,exitMultiselectChip=lit.dy`<awf-chip class="exit-multiselect" label=${this.selectedVials.length} removeable> </awf-chip>`;return"top"===this.containerNameVerticalPosition?lit.dy`
                <h3 class="container-name"></h3>
                <div id="sample-container">
                    <canvas></canvas>${moveIconElement}${exitMultiselectChip}
                </div>
                ${xmlValidationModalElement} ${moveSelectionModalElement}`:lit.dy`
                <div id="sample-container">
                    <canvas></canvas>${moveIconElement}${exitMultiselectChip}
                </div>
                <h3 class="container-name"></h3>
                ${xmlValidationModalElement} ${moveSelectionModalElement}`}handleExitMultiselect(){this.isInMultiselectTouchMode=!1,this.exitMultiselectChip.style.visibility="hidden",1===this.eventController.eventCache.length&&this.eventController.removeEvent(this.eventController.eventCache[0]),this.addEventListener("pointerup",this.handleMouseUp)}onCloseModalDialog(){this.modal.closeModal()}onCancelMoveSelectionDialog(){this.moveSelectionDialogContainer.closeModal(),this.addEventListener("pointerdown",this.handleMouseDown),this.refreshContainer()}onConfirmMoveSelectionDialog(){this.moveSelectionDialogContainer.closeModal(),this.addEventListener("pointerdown",this.handleMouseDown),this.selectVialsAfterMoving()}updateColorPalette(name,value){isColor(value)&&(name===ColorPalette.CONTAINER_NAME_COLOR?this.containerNameHeader.style.color=value:this.colorPalette.colorPaletteMap.has(name)&&this.colorPalette.colorPaletteMap.set(name,value))}refreshContainer(){this.drawFactory.draw(this,this.sampleContainer),this.displayMoveIcon(),this.exitMultiselectChip.label=this.selectedVials.length.toString()}retrieveVialFromPointerPosition(event){const offset=slydiniHelper.calculateContainerOffset(this.canvasTag,this.sampleContainer.zoomController.zoomOffset);return this.sampleContainer.selectionController.getVialFromCoordinates(this.sampleContainer,new Point(event.x,event.y),offset)}drawSampleContainer(){this.sampleContainer.ctx?.clearRect(0,0,this.sampleContainer.ctx.canvas.width,this.sampleContainer.ctx.canvas.height),this.sampleContainer=new SampleContainer;const{xmlParsed,xmlNode}=function getxmlParsedXmlNode(codeXml,anyDocument){const node=anyDocument.createElement("xml");null!=codeXml&&(node.innerHTML=codeXml);const xmlNode=function formatXML(nodeXML){if(!nodeXML)return null;if(nodeXML.innerHTML){const newNodeXML=nodeXML.cloneNode();return newNodeXML.innerHTML=nodeXML.innerHTML.trim().replace(/&lt;/g,"<").replace(/&amp;lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;gt;/g,">").replace(/&quot;/g,'"'),newNodeXML}return nodeXML}(node);return{xmlParsed:parseXML(xmlNode),xmlNode}}(this.xmlCode,document);this.nodeXML=xmlNode??this.nodeXML;const parseResult=slydiniHelper.parseXmlCode(xmlParsed,this.modal,this.modalDialog);null!==parseResult&&(this.sampleContainer.colorPalette=this.colorPalette,this.sampleContainer.sampleTypes=this.sampleTypes,this.sampleContainer.sampleStatusList=this.sampleStatusList,this.sampleContainer.init(parseResult,this),sampleContainerFactory.fillSampleContainer(this.sampleContainer),this.drawFactory.updateOptions(this),this.drawFactory.drawShapes(this,this.sampleContainer,this.canvasTag)),this.displayMoveIcon(),this.handleDisplayContainerName()}};(0,tslib_es6.gn)([(0,decorators.SB)()],AwfSlydini.prototype,"onColorValueChanged",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)({type:Boolean,reflect:!0})],AwfSlydini.prototype,"displayOutline",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)({type:Boolean,reflect:!0})],AwfSlydini.prototype,"displayDecoration",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)({type:Boolean,reflect:!0})],AwfSlydini.prototype,"displayLabel",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)({type:Boolean,reflect:!0})],AwfSlydini.prototype,"vialSelection",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)({type:Boolean,reflect:!0})],AwfSlydini.prototype,"clearSelectionClickingOutside",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)({type:SelectionMode,reflect:!0})],AwfSlydini.prototype,"selectionMode",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)({type:SelectionOrder,reflect:!0})],AwfSlydini.prototype,"selectionOrder",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)({type:Boolean,reflect:!0})],AwfSlydini.prototype,"orderingArrow",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)({type:String,reflect:!0})],AwfSlydini.prototype,"xmlCode",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)({type:Boolean,reflect:!0})],AwfSlydini.prototype,"xmlStyle",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)({type:Number,reflect:!0})],AwfSlydini.prototype,"startOffset",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)({type:Boolean,reflect:!0})],AwfSlydini.prototype,"allowMoveSelection",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)({type:Boolean,reflect:!0})],AwfSlydini.prototype,"displayContainerName",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)({type:String,reflect:!0})],AwfSlydini.prototype,"containerName",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)({type:String,reflect:!0})],AwfSlydini.prototype,"containerNameVerticalPosition",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)({type:String,reflect:!0})],AwfSlydini.prototype,"containerNameHorizontalPosition",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)({type:Boolean,reflect:!0})],AwfSlydini.prototype,"displayStatusIcon",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)({type:Boolean,reflect:!0})],AwfSlydini.prototype,"zoom",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)({type:Number,reflect:!0})],AwfSlydini.prototype,"defaultSampleTextSize",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)({type:Number,reflect:!0})],AwfSlydini.prototype,"containerRotation",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)({type:Boolean,reflect:!0})],AwfSlydini.prototype,"displayConfirmationDialog",void 0),(0,tslib_es6.gn)([(0,decorators.IO)("awf-modal.xmlValidationDialogContainer")],AwfSlydini.prototype,"modal",void 0),(0,tslib_es6.gn)([(0,decorators.IO)("awf-modal-dialog.xmlValidationDialog")],AwfSlydini.prototype,"modalDialog",void 0),(0,tslib_es6.gn)([(0,decorators.IO)("awf-modal.moveSelectionDialogContainer")],AwfSlydini.prototype,"moveSelectionDialogContainer",void 0),(0,tslib_es6.gn)([(0,decorators.IO)("awf-modal-dialog.moveSelectionDialog")],AwfSlydini.prototype,"moveSelectionDialog",void 0),(0,tslib_es6.gn)([(0,decorators.IO)("h3.container-name")],AwfSlydini.prototype,"containerNameHeader",void 0),(0,tslib_es6.gn)([(0,decorators.IO)("canvas")],AwfSlydini.prototype,"canvasTag",void 0),(0,tslib_es6.gn)([(0,decorators.IO)("awf-chip.exit-multiselect")],AwfSlydini.prototype,"exitMultiselectChip",void 0),(0,tslib_es6.gn)([(0,decorators.IO)("awf-icon.moveIcon")],AwfSlydini.prototype,"moveIcon",void 0),AwfSlydini=(0,tslib_es6.gn)([(0,awf_custom_element.M)("awf-slydini",!0)],AwfSlydini);let AwfSampleTypesSlydini=class AwfSampleTypesSlydini extends lit.oi{render(){return lit.dy``}};AwfSampleTypesSlydini=(0,tslib_es6.gn)([(0,awf_custom_element.M)("awf-sample-types",!0)],AwfSampleTypesSlydini);let AwfSampleStatusSlydini=class AwfSampleStatusSlydini extends lit.oi{render(){return lit.dy``}};(0,tslib_es6.gn)([(0,decorators.Cb)({type:String,reflect:!0})],AwfSampleStatusSlydini.prototype,"name",void 0),AwfSampleStatusSlydini=(0,tslib_es6.gn)([(0,awf_custom_element.M)("awf-sample-status",!0)],AwfSampleStatusSlydini);let AwfSampleStatusSlydiniList=class AwfSampleStatusSlydiniList extends lit.oi{render(){return lit.dy``}};AwfSampleStatusSlydiniList=(0,tslib_es6.gn)([(0,awf_custom_element.M)("awf-sample-status-list",!0)],AwfSampleStatusSlydiniList);const SPINNER_CSS_VARIABLES=lit.iv`
    :host {
        /* Spinner Measurements */
        --awf-spinner-size-inner: var(--awf-spinner-size, 80px);
        --awf-spinner-border-width-inner: var(--awf-spinner-border-width, 4px);
        --awf-spinner-small-size-inner: var(--awf-spinner-small-size, 40px);
        --awf-spinner-small-border-width-inner: var(--awf-spinner-small-border-width, 3px);

        /* Spinner Colors */
        --awf-spinner-border-background-color-inner: var(--awf-spinner-border-background-color, var(--at-gray-extra-pale));
        --awf-spinner-border-color-inner: var(--awf-spinner-border-color, var(--at-dark-navy));
    }
`,SPINNER_STYLES=lit.iv`
    :host {
        display: inline-block;
        width: var(--awf-spinner-size-inner);
        height: var(--awf-spinner-size-inner);
    }

    :host([onBackground='white'][navy]) {
        --awf-spinner-border-background-color-inner: var(--at-gray-extra-pale);
    }

    :host([onBackground='periwinkle'][navy]) {
        --awf-spinner-border-background-color-inner: var(--at-periwinkle-light);
    }

    :host([onBackground='blue-luminous'][navy]) {
        --awf-spinner-border-background-color-inner: var(--at-white);
    }

    div {
        width: var(--awf-spinner-size-inner);
        height: var(--awf-spinner-size-inner);
        border: var(--awf-spinner-border-width-inner) solid var(--awf-spinner-border-background-color-inner);
        box-sizing: border-box;
        border-top: var(--awf-spinner-border-width-inner) solid var(--awf-spinner-border-color-inner);
        border-radius: 50%;
        animation: spin 1.1s linear infinite, color-change 3.3s linear infinite;
    }

    :host([small]) div {
        width: var(--awf-spinner-small-size-inner);
        height: var(--awf-spinner-small-size-inner);
        border: var(--awf-spinner-small-border-width-inner) solid var(--awf-spinner-border-background-color-inner);
        border-top: var(--awf-spinner-small-border-width-inner) solid var(--awf-spinner-border-color-inner);
    }

    :host([navy]) div {
        animation: spin 1.1s linear infinite;
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    @keyframes color-change {
        100%,
        0%,
        28% {
            border-top-color: var(--at-blue);
        }
        33%,
        62% {
            border-top-color: var(--at-blue-midtone);
        }
        67%,
        95% {
            border-top-color: var(--at-blue-dark);
        }
    }
`;var AwfSpinnerBackground;!function(AwfSpinnerBackground){AwfSpinnerBackground.WHITE="white",AwfSpinnerBackground.PERIWINKLE="periwinkle",AwfSpinnerBackground.BLUELUMINOUS="blue-luminous"}(AwfSpinnerBackground||(AwfSpinnerBackground={}));let AwfSpinner=class AwfSpinner extends lit.oi{constructor(){super(...arguments),this.navy=!1,this.small=!1,this.onBackground=AwfSpinnerBackground.WHITE}render(){return lit.dy`<div></div>`}};AwfSpinner.styles=[COMMON_STYLES,SPINNER_CSS_VARIABLES,SPINNER_STYLES],(0,tslib_es6.gn)([(0,decorators.Cb)({type:Boolean,reflect:!0})],AwfSpinner.prototype,"navy",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)({type:Boolean})],AwfSpinner.prototype,"small",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)({reflect:!0})],AwfSpinner.prototype,"onBackground",void 0),AwfSpinner=(0,tslib_es6.gn)([(0,awf_custom_element.M)("awf-spinner",!0)],AwfSpinner);const STEPPER_CSS_VARIABLES=lit.iv`
    :host {
        --awf-stepper-height-inner: var(--awf-stepper-height, 32px);
    }
`,STEP_CSS_VARIABLES=lit.iv`
    :host {
        --awf-step-background-color-inner: var(--awf-step-background-color, var(--at-white));
        --awf-step-border-color-inner: var(--awf-step-border-color, var(--at-gray));
        --awf-step-font-size-inner: var(--awf-step-font-size, 0.875rem);
        --awf-step-icon-size-inner: var(--awf-step-icon-size, 24px);
        --awf-step-text-color-inner: var(--awf-step-text-color, var(--at-dark-navy));
    }
`,STEP_STYLES=lit.iv`
    :host {
        --awf-icon-color: var(--at-dark-navy);
        --awf-step-border-width-inner: calc(1.5 * var(--awf-stepper-height-inner, 32px) / 32);

        display: flex;
        align-items: center;
        flex: 1 1 0px;
        height: 100%;
        width: 100%;
        max-width: 100%;
        min-width: 0;
        margin: 0 calc(-6 * var(--awf-stepper-height-inner, 32px) / 32);
        color: var(--awf-step-text-color-inner);
    }

    :host(:first-of-type) {
        margin-left: 0;
        border-left: var(--awf-step-border-width-inner, 1.5px) solid var(--awf-step-border-color-inner);
    }

    :host(:first-of-type) .prefix {
        display: none;
    }

    :host(:last-of-type) {
        margin-right: 0;
        border-right: var(--awf-step-border-width-inner, 1.5px) solid var(--awf-step-border-color-inner);
    }

    :host(:last-of-type) .postfix {
        display: none;
    }

    .stretch-area {
        position: relative;
        display: flex;
        flex-grow: 1;
        height: 100%;
        background: var(--awf-step-background-color-inner);
    }

    .content {
        position: absolute;
        display: flex;
        flex-grow: 1;
        height: 100%;
        width: 100%;
        line-height: 20px;
        align-items: center;
        gap: 8px;
        box-sizing: border-box;
        padding: 0 8px;
    }

    .background {
        position: absolute;
        display: flex;
        flex: 1 1 0px;
        height: 100%;
        width: 100%;
        max-width: 100%;
        min-width: 0;
        left: 0;
        align-items: center;
    }

    .prefix {
        display: flex;
        flex: 0 0 auto;
        height: 100%;
        margin-right: -1px;
    }

    .postfix {
        display: flex;
        flex: 0 0 auto;
        height: 100%;
        margin-left: -1px;
    }

    svg {
        width: 100%;
        height: 100%;
    }

    awf-icon {
        min-width: 16px;
        max-width: 16px;
        --awf-icon-size: 16px;
    }

    .text {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: var(--awf-step-font-size-inner);
    }

    ::slotted([slot='icon']) {
        max-height: 100%;
        max-width: var(--awf-step-icon-size-inner);
        --awf-spinner-size: 16px;
        --awf-spinner-border-width: 2px;
        --awf-icon-size: var(--awf-step-icon-size-inner);
        --awf-icon-color: var(--at-dark-navy);
    }

    :host([selected]) {
        --awf-step-background-color: var(--at-blue-medium);
        --awf-step-border-color: var(--at-blue-shade);
        --awf-step-text-color: var(--at-dark-navy);
    }

    :host([previewed]:not([selected]):not(:hover)) {
        --awf-step-background-color: var(--at-blue-soft);
        --awf-step-border-color: var(--at-gray);
        --awf-step-text-color: var(--at-dark-navy);
    }
    :host(:hover) {
        --awf-step-background-color: var(--at-blue-soft);
        --awf-step-border-color: var(--at-blue-shade);
        --awf-step-text-color: var(--at-dark-navy);
    }

    :host([disabled]) {
        --awf-step-background-color: var(--at-white);
        --awf-step-border-color: var(--at-gray);
        --awf-step-text-color: var(--at-gray);

        pointer-events: none;
    }

    :host([disabled]) ::slotted([slot='icon']) {
        --awf-icon-color: var(--at-gray);
    }
`;var StepStatus;!function(StepStatus){StepStatus.COMPLETED="completed",StepStatus.PROGRESSING="progressing",StepStatus.WARNING="warning",StepStatus.ERROR="error",StepStatus.SKIPPED="skipped"}(StepStatus||(StepStatus={}));const STEP_STATUS_ICON_MAPPING=new Map([[StepStatus.COMPLETED,'<svg version="1.1" id="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 16 16" enable-background="new 0 0 16 16" xml:space="preserve" data-icon-name="sample-status-indicator-success-filled-green-solid">\n<circle fill="#75C335" cx="8" cy="8" r="7"></circle>\n<polygon fill="#FFFFFF" points="6.5,9.5 5,8 3.9,9.1 6.5,11.6 12.1,6.1 11,5 "></polygon>\n</svg>'],[StepStatus.PROGRESSING,'<svg version="1.1" id="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 16 16" enable-background="new 0 0 16 16" xml:space="preserve" data-icon-name="sample-status-indicator-acquiring-in-progress-solid">\n<circle fill="#FFFFFF" cx="8" cy="8" r="7"></circle>\n<path fill="#4780EA" d="M8,1C4.1,1,1,4.1,1,8s3.1,7,7,7s7-3.1,7-7S11.9,1,8,1z M8,2c3.3,0,6,2.7,6,6H2C2,4.7,4.7,2,8,2z"></path>\n</svg>'],[StepStatus.WARNING,agSampleStatusIndicatorWarningFilledYellowSolid],[StepStatus.ERROR,agSampleStatusIndicatorErrorFilledRedSolid],[StepStatus.SKIPPED,agSampleStatusIndicatorSkippedSolid]]);let AwfStep=class AwfStep extends lit.oi{constructor(){super(...arguments),this.selected=!1,this.previewed=!1,this.disabled=!1}static get styles(){return[COMMON_STYLES,STEPPER_CSS_VARIABLES,STEP_CSS_VARIABLES,STEP_STYLES]}render(){return lit.dy` <div class="prefix">
                <svg viewBox="0 0 11 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 24 H11 V0 H0 L9 12 L0 24 Z" fill="var(--awf-step-background-color-inner)" />
                    <path d="M11 0.5 H1 L9.4 12 L1 23.5 H11" stroke="var(--awf-step-border-color-inner)" />
                </svg>
            </div>
            <div class="stretch-area">
                <div class="content">
                    <slot name="icon">${this.renderIcon()}</slot>
                    <div class="text">
                        <slot @slotchange=${this.handleSlotChange}></slot>
                    </div>
                </div>
                <div class="background">
                    <svg viewBox="0 0 16 24" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0 H16 M 0 24 H16 Z" stroke="var(--awf-step-border-color-inner)" stroke-width="2" />
                    </svg>
                </div>
            </div>
            <div class="postfix">
                <svg viewBox="0 0 11 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 0 L10 12 L1 24 H0 V0 H1 Z" fill="var(--awf-step-background-color-inner)" />
                    <path d="M0 23.5 H1 L9.4 12 L1 0.5 L0 0.5" stroke="var(--awf-step-border-color-inner)" />
                </svg>
            </div>`}updated(changes){changes.has("disabled")&&(this.disabled?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled"))}renderIcon(){if(!this.status)return lit.dy``;const iconName=STEP_STATUS_ICON_MAPPING.get(this.status)??"";return lit.dy`<awf-icon raw=${iconName}></awf-icon>`}handleSlotChange(){const target=this.shadowRoot.querySelector("slot:not([name])");target&&moveElementsIntoSlot(target,"awf-icon","icon")}};(0,tslib_es6.gn)([(0,decorators.Cb)({reflect:!0})],AwfStep.prototype,"status",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)({type:Boolean,reflect:!0})],AwfStep.prototype,"selected",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)({type:Boolean,reflect:!0})],AwfStep.prototype,"previewed",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)({type:Boolean,reflect:!0})],AwfStep.prototype,"disabled",void 0),AwfStep=(0,tslib_es6.gn)([(0,awf_custom_element.M)("awf-step",!0)],AwfStep);let AwfTabPanel=class AwfTabPanel extends lit.oi{constructor(){super(...arguments),this.selected=!1,this.value="",this.defaultPanel=!1}render(){return lit.dy` <slot></slot> `}firstUpdated(){this.tabIndex=0,this.setAttribute("role","tab")}updated(changes){super.updated(changes),changes.has("selected")&&(this.selected?(this.removeAttribute("aria-hidden"),this.tabIndex=0):(this.setAttribute("aria-hidden","true"),this.tabIndex=-1))}};AwfTabPanel.styles=[COMMON_STYLES,lit.iv`
            :host {
                display: flex;
                padding: 10px;
            }

            :host(:not([selected])) {
                display: none;
            }
        `],(0,tslib_es6.gn)([(0,decorators.Cb)({type:Boolean,reflect:!0})],AwfTabPanel.prototype,"selected",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)()],AwfTabPanel.prototype,"value",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)({type:Boolean,reflect:!0})],AwfTabPanel.prototype,"defaultPanel",void 0),AwfTabPanel=(0,tslib_es6.gn)([(0,awf_custom_element.M)("awf-tab-panel",!0)],AwfTabPanel);const TAB_CSS_VARIABLES=lit.iv`
    :host {
        --awf-tab-height-inner: var(--awf-tab-height, 32px);
        --awf-tab-font-size-inner: var(--awf-tab-font-size, 14px);
        --awf-tab-padding-inner: var(--awf-tab-padding, 0 8px);
        --awf-tab-width-inner: var(--awf-tab-width, auto);
    }
`,TAB__STYLES=lit.iv`
    :host {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        user-select: none;
        box-sizing: border-box;
        height: var(--awf-tab-height-inner);
        max-width: 250px;

        transition-property: background-color;
        transition: var(--transition-duration) var(--transition-timing-function);
    }

    .content {
        align-items: center;
        box-sizing: border-box;
        display: grid;
        font-size: var(--awf-tab-font-size-inner);
        grid-template-columns: auto 1fr auto;
        height: 100%;
        padding: var(--awf-tab-padding-inner);
        width: 100%;
    }

    :host(:not([disabled])) .content {
        cursor: pointer;
    }

    :host([disabled]) {
        --awf-icon-color: var(--at-gray);
        cursor: not-allowed;
    }

    :host([disabled]) ::slotted(:not([slot])) {
        color: var(--at-gray);
    }

    ::slotted(:not([slot])) {
        color: var(--at-dark-navy);
        cursor: inherit;
        grid-column: 2;
        line-height: 24px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    :host([label]) ::slotted([slot=prefix]) {
        padding: 0 8px 0 0;
    }

    :host([selected]:not([disabled])) {
        background-color: var(--at-blue-medium);
    }

    ::slotted([slot=prefix]) {
        grid-column: 1;
    }

    ::slotted([slot=suffix]) {
        padding-left: 8px;
        grid-column: 3;
    }

    ::slotted([slot=prefix][showOnHover]),
    ::slotted([slot=suffix][showOnHover]) {
        visibility: hidden;
    }

    :host(:hover) ::slotted([slot=prefix][showOnHover]),
    :host(:hover) ::slotted([slot=suffix][showOnHover]) {
        visibility: visible;
    }

`;let AwfTab=class AwfTab extends lit.oi{constructor(){super(...arguments),this.selected=!1,this.value="",this.disabled=!1}static get styles(){return[COMMON_STYLES,TAB_CSS_VARIABLES,TAB__STYLES]}render(){return lit.dy` <div class="content">
            <slot name="prefix"></slot>
            <slot></slot>
            <slot name="suffix"></slot>
        </div>`}firstUpdated(){this.setAttribute("role","tab")}updated(changes){changes.has("selected")&&(this.setAttribute("aria-selected",`${this.selected}`),this.tabIndex=this.selected?0:-1),changes.has("disabled")&&(this.disabled?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled"))}};(0,tslib_es6.gn)([(0,decorators.Cb)({type:Boolean,reflect:!0})],AwfTab.prototype,"selected",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)()],AwfTab.prototype,"value",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)({type:Boolean,reflect:!0})],AwfTab.prototype,"disabled",void 0),AwfTab=(0,tslib_es6.gn)([(0,awf_custom_element.M)("awf-tab",!0)],AwfTab);const TOGGLE_STYLES=lit.iv`
    :host {
        --awf-toggle-button-background-inner: var(--at-gray-medium);
        --awf-toggle-button-border-color-inner: var(--at-dark-navy);
        --awf-toggle-slider-background-inner: var(--at-gray-soft);
        --awf-toggle-slider-border-color-inner: transparent;

        display: inline-flex;
        align-items: center;
    }

    :host([dark]) {
        --awf-toggle-slider-background-inner: var(--at-navy-soft);
        --awf-toggle-button-background-inner: var(--at-gray-medium);
        --awf-toggle-button-border-color-inner: var(--at-dark-navy);
    }

    ::slotted(input[type='checkbox']) {
        width: 0;
    }

    ::slotted(label) {
        position: relative;
        cursor: var(--awf-toggle-cursor-inner, pointer);
        font-size: 14px;
        color: var(--at-dark-navy);
        height: 20px;
        display: inline-flex;
        align-items: center;
        padding-right: 36px;
    }

    ::slotted(label:not(:empty)) {
        padding-right: 50px;
    }

    :host([labelPosition=right]) ::slotted(label:not(:empty)) {
        padding-left: 50px;
    }

    ::slotted(label):before {
        position: absolute;
        background-color: var(--awf-toggle-slider-background-inner);
        border:1px solid var(--awf-toggle-slider-border-color-inner);
        box-sizing: border-box;
        border-radius: 19px;
        content: '';
        width: 36px;
        height: 20px;
        right: 0px;
    }

    ::slotted(label):after {
        position: absolute;
        content: '';
        height: 18px;
        width: 18px;
        background-color: var(--awf-toggle-button-background-inner);
        border: 1px solid var(--awf-toggle-button-border-color-inner);
        border-radius: 50%;

        transition: transform var(--transition-duration) var(--transition-timing-function);
        right: 16px;
    }
    :host([checked]) ::slotted(label):after {
        transform: translateX(16px);
        transition: transform var(--transition-duration) var(--transition-timing-function);
    } 

    :host([labelPosition=right]) ::slotted(label):before,
    :host([labelPosition=right]) ::slotted(label):after {
        left: 0;
    }

    :host([checked]) ::slotted(label) {
        --awf-toggle-button-background-inner: var(--at-blue-shade);
        --togle-button-border-color: var(--at-dark-navy);
    }

    :host([disabled]) ::slotted(label) {
        --awf-toggle-slider-background-inner: var(--at-gray-pale);
        --awf-toggle-button-background-inner: var(--at-gray-soft);
        --awf-toggle-button-border-color-inner: var(--at-gray);
        --awf-toggle-cursor-inner: not-allowed;
        color: var(--at-gray);
    }

    :host([disabled][checked]) ::slotted(label) {
        --awf-toggle-button-background-inner: var(--at-blue-luminous);
        --awf-toggle-button-border-color-inner: var(--at-gray); 
        --awf-toggle-slider-background-inner: var(--at-gray-pale);
        color: var(--at-gray);
    } 

    :host([dark][checked]) ::slotted(label) {
        --awf-toggle-button-background-inner: var(--at-blue-shade);
        --awf-toggle-button-border-color-inner: var(--at-dark-navy);
        --awf-toggle-slider-background-inner: var(--at-navy-soft);
        color: var(--at-dark-navy);
    } 

    :host([dark][disabled]) ::slotted(label) {
        --awf-toggle-slider-background-inner: var(--at-blue-pale-luminous);
        --awf-toggle-button-background-inner: var(--at-gray-soft);
        --awf-toggle-button-border-color-inner: var(--at-gray);
    }

    :host([dark][disabled][checked]) ::slotted(label) {
        --awf-toggle-button-background-inner: var(--at-blue-soft);
        --awf-toggle-button-border-color-inner: var(--at-gray); 
        --awf-toggle-slider-background-inner: var(--at-blue-pale-luminous);
        color: var(--at-gray);
    }

    :host(.focused) ::slotted(label),
    :host([dark].focused) ::slotted(label) {
        --awf-toggle-slider-border-color-inner: var(--at-blue-shade);
        color: var(--at-blue-shade);
    }

    :host(:hover:not([disabled])) ::slotted(label) {
        --awf-toggle-slider-background-inner: var(--at-blue-soft);
    }
`;let AwfToggle=class AwfToggle extends lit.oi{constructor(){super(...arguments),this.dark=!1,this.labelPosition="left",this.checked=!1,this.disabled=!1}render(){return lit.dy`<slot @slotchange=${this.slotChange}></slot>`}slotChange(){const[input]=this.inputNodes,[label]=this.labelNodes;input&&(input!==this.input&&(this.input=input,input.type="checkbox",input.id||(input.id="checkbox"),this.reflectAttributes(input)),this.moveLabelIfNeeded(input,label))}moveLabelIfNeeded(input,label){label||(label=document.createElement("label")).setAttribute("for",input?.id),input.nextElementSibling!==label&&input.after(label)}reflectAttributes(input){this.mutationObserver?.disconnect(),this.mutationObserver=reflectAttributes(input,this,["checked","disabled"]);const reflectCheckedAttribute=()=>{input.checked?this.setAttribute("checked",""):this.removeAttribute("checked")};listenPropertyChangeWithCallback(input,reflectCheckedAttribute,"checked"),input.addEventListener("change",reflectCheckedAttribute),input.addEventListener("focus",(()=>this.classList.add("focused"))),input.addEventListener("blur",(()=>this.classList.remove("focused")))}};AwfToggle.styles=[COMMON_STYLES,TOGGLE_STYLES],(0,tslib_es6.gn)([(0,decorators.Cb)({type:Boolean,reflect:!0})],AwfToggle.prototype,"dark",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)({reflect:!0})],AwfToggle.prototype,"labelPosition",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)({reflect:!0})],AwfToggle.prototype,"checked",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)({reflect:!0})],AwfToggle.prototype,"disabled",void 0),(0,tslib_es6.gn)([(0,decorators.NH)({selector:"label"})],AwfToggle.prototype,"labelNodes",void 0),(0,tslib_es6.gn)([(0,decorators.NH)({selector:"input"})],AwfToggle.prototype,"inputNodes",void 0),AwfToggle=(0,tslib_es6.gn)([(0,awf_custom_element.M)("awf-toggle",!0)],AwfToggle);const WIDGET_CONTAINER_CSS_VARIABLES=lit.iv`
    :host {
        /* Widget Container Measurements */
        --awf-widget-container-content-padding-inner: var(--awf-widget-container-content-padding, 8px);
        --awf-widget-container-header-padding-inner: var(--awf-widget-container-header-padding, 8px);
        --awf-widget-container-height-inner: var(--awf-widget-container-height, 100%);
        --awf-widget-container-border-color-inner: var(--awf-widget-container-border-color, var(--at-gray-soft));
    }
`,WIDGET_CONTAINER_STYLES=lit.iv`
    :host {
        background-color: var(--at-white);
        width: 100%;
        height: var(--awf-widget-container-height-inner);
        box-sizing: border-box;
        border: 1px solid var(--at-gray-soft);
    }

    .header {
        height: 40px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-sizing: border-box;
        border-bottom: 4px solid var(--module-status-color, transparent);
        font-size: 16px;
        padding: var(--awf-widget-container-header-padding-inner);
    }

    :host(:not([status])) .header {
        border-bottom: 1px solid var(--awf-widget-container-border-color-inner);
    }

    slot[name='context'] {
        font-size: 14px;
    }

    .body {
        width: 100%;
        height: calc(var(--awf-widget-container-height-inner) - 40px);
        padding: var(--awf-widget-container-content-padding-inner);
        box-sizing: border-box;
    }
`;let AwfWidgetContainer=class AwfWidgetContainer extends lit.oi{constructor(){super(...arguments),this.noHeader=!1}render(){return this.determineStatusColor(),lit.dy`${this.getHeader()}
            <div class="body"><slot></slot></div>`}updated(){this.determineGridArea()}determineStatusColor(){if(this.status){const color=STATUS_COLOR_MAPPING.get(this.status)??"var(--at-violet)";this.style.setProperty("--module-status-color",color)}}getHeader(){if(this.noHeader)return lit.dy``;let headerContent=lit.dy`<slot name="header"></slot>`;return this.header&&(headerContent=lit.dy`${this.header}`),lit.dy`<div class="header">
            ${headerContent}
            <slot name="context"></slot>
        </div>`}determineGridArea(){const columnStart=this.getStart("column"),columnEnd=this.getEnd("columnSpan"),rowStart=this.getStart("row"),rowEnd=this.getEnd("rowSpan");this.style.gridRowStart=rowStart,this.style.gridRowEnd=rowEnd,this.style.gridColumnStart=columnStart,this.style.gridColumnEnd=columnEnd}getStart(prop){return this[prop]?`${this[prop]}`:"auto"}getEnd(prop){return this[prop]?`span ${this[prop]}`:"auto"}};AwfWidgetContainer.styles=[COMMON_STYLES,WIDGET_CONTAINER_CSS_VARIABLES,WIDGET_CONTAINER_STYLES],(0,tslib_es6.gn)([(0,decorators.Cb)({type:Number})],AwfWidgetContainer.prototype,"row",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)({type:Number})],AwfWidgetContainer.prototype,"column",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)({type:Number})],AwfWidgetContainer.prototype,"rowSpan",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)({type:Number})],AwfWidgetContainer.prototype,"columnSpan",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)()],AwfWidgetContainer.prototype,"header",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)({type:Boolean})],AwfWidgetContainer.prototype,"noHeader",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)({reflect:!0})],AwfWidgetContainer.prototype,"status",void 0),AwfWidgetContainer=(0,tslib_es6.gn)([(0,awf_custom_element.M)("awf-widget-container",!0)],AwfWidgetContainer);let AwfAccordion=class AwfAccordion extends lit.oi{constructor(){super(...arguments),this.single=!1,this.dispatchCustomEvent=dispatchCustomEvent.bind(this)}isExpanded(index){const child=this.panels[index];return null!=child&&child.expanded}toggle(index){const child=this.panels[index];null!=child&&child.toggle()}expand(index){const child=this.panels[index];null!=child&&child.expand()}expandAll(){this.single?this.expand(0):this.panels.forEach((child=>child.expand()))}collapse(index){const child=this.panels[index];null!=child&&child.collapse()}collapseAll(){this.panels.forEach((child=>child.collapse()))}render(){return lit.dy` <slot @open=${this.handleOpenEvent} @close=${this.panelChanged}></slot> `}handleOpenEvent({target}){this.single&&target instanceof AwfAccordionPanel&&this.panels.forEach((panel=>panel.expanded=panel===target)),this.panelChanged()}panelChanged(){this.dispatchCustomEvent("panelChanged")}};AwfAccordion.styles=[COMMON_STYLES,ACCORDION_PANEL_CSS_VARIABLES,lit.iv`
        :host {
            display: block;
            border-bottom: var(--awf-accordion-panel-item-separator-border-inner);
        }
    `],(0,tslib_es6.gn)([(0,decorators.Cb)({type:Boolean,reflect:!0})],AwfAccordion.prototype,"single",void 0),(0,tslib_es6.gn)([(0,decorators.NH)({selector:"awf-accordion-panel",flatten:!0})],AwfAccordion.prototype,"panels",void 0),AwfAccordion=(0,tslib_es6.gn)([(0,awf_custom_element.M)("awf-accordion",!0)],AwfAccordion);let AwfButtonGroup=class AwfButtonGroup extends lit.oi{static get styles(){return[COMMON_STYLES,lit.iv`
            :host {
                display: grid;
                grid-auto-columns: max-content;
                grid-auto-flow: column;
                grid-gap: 16px;
            }
        `]}render(){return lit.dy`<slot></slot>`}};AwfButtonGroup=(0,tslib_es6.gn)([(0,awf_custom_element.M)("awf-button-group",!0)],AwfButtonGroup);var keen_slider_es_n=function(){return keen_slider_es_n=Object.assign||function(n){for(var t,i=1,e=arguments.length;i<e;i++)for(var r in t=arguments[i])Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},keen_slider_es_n.apply(this,arguments)};function keen_slider_es_t(n,t,i){if(i||2===arguments.length)for(var e,r=0,a=t.length;r<a;r++)!e&&r in t||(e||(e=Array.prototype.slice.call(t,0,r)),e[r]=t[r]);return n.concat(e||Array.prototype.slice.call(t))}function keen_slider_es_i(n){return Array.prototype.slice.call(n)}function keen_slider_es_e(n,t){var i=Math.floor(n);return i===t||i+1===t?n:t}function keen_slider_es_r(){return Date.now()}function a(n,t,i){if(t="data-keen-slider-"+t,null===i)return n.removeAttribute(t);n.setAttribute(t,i||"")}function keen_slider_es_o(n,t){return t=t||document,"function"==typeof n&&(n=n(t)),Array.isArray(n)?n:"string"==typeof n?keen_slider_es_i(t.querySelectorAll(n)):n instanceof HTMLElement?[n]:n instanceof NodeList?keen_slider_es_i(n):[]}function keen_slider_es_u(n){n.raw&&(n=n.raw),n.cancelable&&!n.defaultPrevented&&n.preventDefault()}function keen_slider_es_s(n){n.raw&&(n=n.raw),n.stopPropagation&&n.stopPropagation()}function keen_slider_es_c(){var n=[];return{add:function(t,i,e,r){t.addListener?t.addListener(e):t.addEventListener(i,e,r),n.push([t,i,e,r])},input:function(n,t,i,e){this.add(n,t,function(n){return function(t){t.nativeEvent&&(t=t.nativeEvent);var i=t.changedTouches||[],e=t.targetTouches||[],r=t.detail&&t.detail.x?t.detail:null;return n({id:r?r.identifier?r.identifier:"i":e[0]?e[0]?e[0].identifier:"e":"d",idChanged:r?r.identifier?r.identifier:"i":i[0]?i[0]?i[0].identifier:"e":"d",raw:t,x:r&&r.x?r.x:e[0]?e[0].screenX:r?r.x:t.pageX,y:r&&r.y?r.y:e[0]?e[0].screenY:r?r.y:t.pageY})}}(i),e)},purge:function(){n.forEach((function(n){n[0].removeListener?n[0].removeListener(n[2]):n[0].removeEventListener(n[1],n[2],n[3])})),n=[]}}}function keen_slider_es_d(n,t,i){return Math.min(Math.max(n,t),i)}function keen_slider_es_l(n){return(n>0?1:0)-(n<0?1:0)||+n}function keen_slider_es_f(n){var t=n.getBoundingClientRect();return{height:keen_slider_es_e(t.height,n.offsetHeight),width:keen_slider_es_e(t.width,n.offsetWidth)}}function p(n,t,i,e){var r=n&&n[t];return null==r?i:e&&"function"==typeof r?r():r}function keen_slider_es_v(n){return Math.round(1e6*n)/1e6}function g(n){var t,i,e,r,a,o,u,s;function c(n){return 2*n}function f(n){return keen_slider_es_d(n,u,s)}function p(n){return 1-Math.pow(1-n,3)}function v(){return e?n.track.velocity():0}function m(n,t){void 0===t&&(t=1e3);var i=147e-9+(n=Math.abs(n))/t;return{dist:Math.pow(n,2)/i,dur:n/i}}function g(){var t=n.track.details;t&&(a=t.min,o=t.max,u=t.minIdx,s=t.maxIdx)}function b(){n.animator.stop()}n.on("updated",g),n.on("optionsChanged",g),n.on("created",g),n.on("dragStarted",(function(){e=!1,b(),t=i=n.track.details.abs})),n.on("dragChecked",(function(){e=!0})),n.on("dragEnded",(function(){var e=n.options.mode;"snap"===e&&function(){var e=n.track,r=n.track.details,u=r.position,s=keen_slider_es_l(v());(u>o||u<a)&&(s=0);var c=t+s;0===r.slides[e.absToRel(c)].portion&&(c-=s),t!==i&&(c=i),keen_slider_es_l(e.idxToDist(c,!0))!==s&&(c+=s),c=f(c);var d=e.idxToDist(c,!0);n.animator.start([{distance:d,duration:500,easing:function(n){return 1+--n*n*n*n*n}}])}(),"free"!==e&&"free-snap"!==e||function h(){b();var t="free-snap"===n.options.mode,i=n.track,e=v();r=keen_slider_es_l(e);var u=n.track.details,s=[];if(e||!t){var d=m(e),h=d.dist,g=d.dur;if(g=c(g),h*=r,t){var x=i.idxToDist(i.distToIdx(h),!0);x&&(h=x)}s.push({distance:h,duration:g,easing:p});var k=u.position,y=k+h;if(y<a||y>o){var w=y<a?a-k:o-k,M=0,T=e;if(keen_slider_es_l(w)===r){var C=Math.min(Math.abs(w)/Math.abs(h),1),E=function(n){return 1-Math.pow(1-n,1/3)}(C)*g;s[0].earlyExit=E,T=e*(1-C)}else s[0].earlyExit=0,M+=w;var z=m(T,100),I=z.dist*r;n.options.rubberband&&(s.push({distance:I,duration:c(z.dur),easing:p}),s.push({distance:-I+M,duration:500,easing:p}))}n.animator.start(s)}else n.moveToIdx(f(u.abs),!0,{duration:500,easing:function(n){return 1+--n*n*n*n*n}})}()})),n.on("dragged",(function(){i=n.track.details.abs}))}function b(n){var t,i,e,r,a,f,p,v,h,m,g,b,x,k,y,w,M,T,C=keen_slider_es_c();function E(t){if(f&&v===t.id){var o=D(t);if(h){if(!A(t))return I(t);m=o,h=!1,n.emit("dragChecked")}if(w)return m=o;keen_slider_es_u(t);var c=function(t){if(M===-1/0&&T===1/0)return t;var e=n.track.details,o=e.length,u=e.position,s=keen_slider_es_d(t,M-u,T-u);if(0===o)return 0;if(!n.options.rubberband)return s;if(u<=T&&u>=M)return t;if(u<M&&i>0||u>T&&i<0)return t;var c=(u<M?u-M:u-T)/o,l=r*o,f=Math.abs(c*l),p=Math.max(0,1-f/a*2);return p*p*t}(p(m-o)/r*e);i=keen_slider_es_l(c);var x=n.track.details.position;(x>M&&x<T||x===M&&i>0||x===T&&i<0)&&keen_slider_es_s(t),g+=c,!b&&Math.abs(g*r)>5&&(b=!0),n.track.add(c),m=o,n.emit("dragged")}}function z(t){!f&&n.track.details&&n.track.details.length&&(g=0,f=!0,b=!1,h=!0,v=t.id,A(t),m=D(t),n.emit("dragStarted"))}function I(t){f&&v===t.idChanged&&(f=!1,n.emit("dragEnded"))}function A(n){var t=L(),i=t?n.y:n.x,e=t?n.x:n.y,r=void 0!==x&&void 0!==k&&Math.abs(k-e)<=Math.abs(x-i);return x=i,k=e,r}function D(n){return L()?n.y:n.x}function L(){return n.options.vertical}function S(){r=n.size,a=L()?window.innerHeight:window.innerWidth;var t=n.track.details;t&&(M=t.min,T=t.max)}function O(n){b&&(keen_slider_es_s(n),keen_slider_es_u(n))}function _(){if(C.purge(),n.options.drag&&!n.options.disabled){var i;i=n.options.dragSpeed||1,p="function"==typeof i?i:function(n){return n*i},e=n.options.rtl?-1:1,S(),t=n.container,function(){var n="data-keen-slider-clickable";keen_slider_es_o("[".concat(n,"]:not([").concat(n,"=false])"),t).map((function(n){C.add(n,"dragstart",keen_slider_es_s),C.add(n,"mousedown",keen_slider_es_s),C.add(n,"touchstart",keen_slider_es_s)}))}(),C.add(t,"dragstart",(function(n){keen_slider_es_u(n)})),C.add(t,"click",O,{capture:!0}),C.input(t,"ksDragStart",z),C.input(t,"ksDrag",E),C.input(t,"ksDragEnd",I),C.input(t,"mousedown",z),C.input(t,"mousemove",E),C.input(t,"mouseleave",I),C.input(t,"mouseup",I),C.input(t,"touchstart",z,{passive:!0}),C.input(t,"touchmove",E,{passive:!1}),C.input(t,"touchend",I),C.input(t,"touchcancel",I),C.add(window,"wheel",(function(n){f&&keen_slider_es_u(n)}));var r="data-keen-slider-scrollable";keen_slider_es_o("[".concat(r,"]:not([").concat(r,"=false])"),n.container).map((function(n){return function(n){var t;C.input(n,"touchstart",(function(n){t=D(n),w=!0,y=!0}),{passive:!0}),C.input(n,"touchmove",(function(i){var e=L(),r=e?n.scrollHeight-n.clientHeight:n.scrollWidth-n.clientWidth,a=t-D(i),o=e?n.scrollTop:n.scrollLeft,s=e&&"scroll"===n.style.overflowY||!e&&"scroll"===n.style.overflowX;if(t=D(i),(a<0&&o>0||a>0&&o<r)&&y&&s)return w=!0;y=!1,keen_slider_es_u(i),w=!1})),C.input(n,"touchend",(function(){w=!1}))}(n)}))}}n.on("updated",S),n.on("optionsChanged",_),n.on("created",_),n.on("destroyed",C.purge)}function x(n){var t,i,e=null;function r(t,i,e){n.animator.active?o(t,i,e):requestAnimationFrame((function(){return o(t,i,e)}))}function a(){r(!1,!1,i)}function o(i,r,a){var o=0,u=n.size,d=n.track.details;if(d&&t){var l=d.slides;t.forEach((function(n,t){if(i)!e&&r&&s(n,null,a),c(n,null,a);else{if(!l[t])return;var d=l[t].size*u;!e&&r&&s(n,d,a),c(n,l[t].distance*u-o,a),o+=d}}))}}function u(t){return"performance"===n.options.renderMode?Math.round(t):t}function s(n,t,i){var e=i?"height":"width";null!==t&&(t=u(t)+"px"),n.style["min-"+e]=t,n.style["max-"+e]=t}function c(n,t,i){if(null!==t){t=u(t);var e=i?t:0;t="translate3d(".concat(i?0:t,"px, ").concat(e,"px, 0)")}n.style.transform=t,n.style["-webkit-transform"]=t}function d(){t&&(o(!0,!0,i),t=null),n.on("detailsChanged",a,!0)}function l(){r(!1,!0,i)}function f(){d(),i=n.options.vertical,n.options.disabled||"custom"===n.options.renderMode||(e="auto"===p(n.options.slides,"perView",null),n.on("detailsChanged",a),(t=n.slides).length&&l())}n.on("created",f),n.on("optionsChanged",f),n.on("beforeOptionsChanged",(function(){d()})),n.on("updated",l),n.on("destroyed",d)}function k(t,i){return function(e){var r,u,s,d,v,h=keen_slider_es_c();function m(n){var t;a(e.container,"reverse","rtl"!==(t=e.container,window.getComputedStyle(t,null).getPropertyValue("direction"))||n?null:""),a(e.container,"v",e.options.vertical&&!n?"":null),a(e.container,"disabled",e.options.disabled&&!n?"":null)}function g(){b()&&M()}function b(){var t=null;if(d.forEach((function(n){n.matches&&(t=n.__media)})),t===r)return!1;r||e.emit("beforeOptionsChanged"),r=t;var i=t?s.breakpoints[t]:s;return e.options=keen_slider_es_n(keen_slider_es_n({},s),i),m(),I(),A(),C(),!0}function x(n){var t=keen_slider_es_f(n);return(e.options.vertical?t.height:t.width)/e.size||1}function k(){return e.options.trackConfig.length}function y(t){for(var a in r=!1,s=keen_slider_es_n(keen_slider_es_n({},i),t),h.purge(),u=e.size,d=[],s.breakpoints||[]){var o=window.matchMedia(a);o.__media=a,d.push(o),h.add(o,"change",g)}h.add(window,"orientationchange",z),h.add(window,"resize",E),b()}function w(n){e.animator.stop();var t=e.track.details;e.track.init(null!=n?n:t?t.abs:0)}function M(n){w(n),e.emit("optionsChanged")}function T(n,t){if(n)return y(n),void M(t);I(),A();var i=k();C(),k()!==i?M(t):w(t),e.emit("updated")}function C(){var n=e.options.slides;if("function"==typeof n)return e.options.trackConfig=n(e.size,e.slides);for(var t=e.slides,i=t.length,r="number"==typeof n?n:p(n,"number",i,!0),a=[],o=p(n,"perView",1,!0),u=p(n,"spacing",0,!0)/e.size||0,s="auto"===o?u:u/o,c=p(n,"origin","auto"),d=0,l=0;l<r;l++){var f="auto"===o?x(t[l]):1/o-u+s,v="center"===c?.5-f/2:"auto"===c?0:c;a.push({origin:v,size:f,spacing:u}),d+=f}if(d+=u*(r-1),"auto"===c&&!e.options.loop&&1!==o){var h=0;a.map((function(n){var t=d-h;return h+=n.size+u,t>=1||(n.origin=1-t-(d>1?0:1-d)),n}))}e.options.trackConfig=a}function E(){I();var n=e.size;e.options.disabled||n===u||(u=n,T())}function z(){E(),setTimeout(E,500),setTimeout(E,2e3)}function I(){var n=keen_slider_es_f(e.container);e.size=(e.options.vertical?n.height:n.width)||1}function A(){e.slides=keen_slider_es_o(e.options.selector,e.container)}e.container=(v=keen_slider_es_o(t,document)).length?v[0]:null,e.destroy=function(){h.purge(),e.emit("destroyed"),m(!0)},e.prev=function(){e.moveToIdx(e.track.details.abs-1,!0)},e.next=function(){e.moveToIdx(e.track.details.abs+1,!0)},e.update=T,y(e.options)}}var y=function(n,i,e){try{return function(n,t){var i,e={};return i={emit:function(n){e[n]&&e[n].forEach((function(n){n(i)}));var t=i.options&&i.options[n];t&&t(i)},moveToIdx:function(n,t,e){var r=i.track.idxToDist(n,t);if(r){var a=i.options.defaultAnimation;i.animator.start([{distance:r,duration:p(e||a,"duration",500),easing:p(e||a,"easing",(function(n){return 1+--n*n*n*n*n}))}])}},on:function(n,t,i){void 0===i&&(i=!1),e[n]||(e[n]=[]);var r=e[n].indexOf(t);r>-1?i&&delete e[n][r]:i||e[n].push(t)},options:n},function(){if(i.track=function m(n){var i,e,a,o,u,s,c,f,h,m,g,b,x,k,y=1/0,w=[],M=null,T=0;function C(n){_(T+n)}function E(n){var t=z(T+n).abs;return D(t)?t:null}function z(n){var i=Math.floor(Math.abs(keen_slider_es_v(n/e))),r=keen_slider_es_v((n%e+e)%e);r===e&&(r=0);var a=keen_slider_es_l(n),o=c.indexOf(keen_slider_es_t([],c,!0).reduce((function(n,t){return Math.abs(t-r)<Math.abs(n-r)?t:n}))),u=o;return a<0&&i++,o===s&&(u=0,i+=a>0?1:-1),{abs:u+i*s*a,origin:o,rel:u}}function I(n,t,i){var e;if(t||!S())return A(n,i);if(!D(n))return null;var r=z(null!=i?i:T),a=r.abs,o=n-r.rel,u=a+o;e=A(u);var c=A(u-s*keen_slider_es_l(o));return(null!==c&&Math.abs(c)<Math.abs(e)||null===e)&&(e=c),keen_slider_es_v(e)}function A(n,t){if(null==t&&(t=keen_slider_es_v(T)),!D(n)||null===n)return null;n=Math.round(n);var i=z(t),r=i.abs,a=i.rel,o=i.origin,u=O(n),d=(t%e+e)%e,l=c[o],f=Math.floor((n-(r-a))/s)*e;return keen_slider_es_v(l-d-l+c[u]+f+(o===s?e:0))}function D(n){return L(n)===n}function L(n){return keen_slider_es_d(n,h,m)}function S(){return o.loop}function O(n){return(n%s+s)%s}function _(t){var i;i=t-T,w.push({distance:i,timestamp:keen_slider_es_r()}),w.length>6&&(w=w.slice(-6)),T=keen_slider_es_v(t);var e=H().abs;if(e!==M){var a=null!==M;M=e,a&&n.emit("slideChanged")}}function H(t){var r=t?null:function(){if(s){var n=S(),t=n?(T%e+e)%e:T,i=(n?T%e:T)-u[0][2],r=0-(i<0&&n?e-Math.abs(i):i),c=0,d=z(T),f=d.abs,p=d.rel,v=u[p][2],y=u.map((function(t,i){var a=r+c;(a<0-t[0]||a>1)&&(a+=(Math.abs(a)>e-1&&n?e:0)*keen_slider_es_l(-a));var u=i-p,d=keen_slider_es_l(u),h=u+f;n&&(-1===d&&a>v&&(h+=s),1===d&&a<v&&(h-=s),null!==g&&h<g&&(a+=e),null!==b&&h>b&&(a-=e));var m=a+t[0]+t[1],x=Math.max(a>=0&&m<=1?1:m<0||a>1?0:a<0?Math.min(1,(t[0]+a)/t[0]):(1-a)/t[0],0);return c+=t[0]+t[1],{abs:h,distance:o.rtl?-1*a+1-t[0]:a,portion:x,size:t[0]}}));return f=L(f),p=O(f),{abs:L(f),length:a,max:k,maxIdx:m,min:x,minIdx:h,position:T,progress:n?t/e:T/a,rel:p,slides:y,slidesLength:e}}}();return i.details=r,n.emit("detailsChanged"),r}return i={absToRel:O,add:C,details:null,distToIdx:E,idxToDist:I,init:function(t){if(function(){if(o=n.options,u=(o.trackConfig||[]).map((function(n){return[p(n,"size",1),p(n,"spacing",0),p(n,"origin",0)]})),s=u.length){e=keen_slider_es_v(u.reduce((function(n,t){return n+t[0]+t[1]}),0));var t,i=s-1;a=keen_slider_es_v(e+u[0][2]-u[i][0]-u[i][2]-u[i][1]),c=u.reduce((function(n,i){if(!n)return[0];var e=u[n.length-1],r=n[n.length-1]+(e[0]+e[2])+e[1];return r-=i[2],n[n.length-1]>r&&(r=n[n.length-1]),r=keen_slider_es_v(r),n.push(r),(!t||t<r)&&(f=n.length-1),t=r,n}),null),0===a&&(f=0),c.push(keen_slider_es_v(e))}}(),!s)return H(!0);var i;!function(){var t=n.options.range,i=n.options.loop;g=h=i?p(i,"min",-1/0):0,b=m=i?p(i,"max",y):f;var e=p(t,"min",null),r=p(t,"max",null);null!==e&&(h=e),null!==r&&(m=r),x=h===-1/0?h:n.track.idxToDist(h||0,!0,0),k=m===y?m:I(m,!0,0),null===r&&(b=m),p(t,"align",!1)&&m!==y&&0===u[O(m)][2]&&(k-=1-u[O(m)][0],m=E(k-T)),x=keen_slider_es_v(x),k=keen_slider_es_v(k)}(),i=t,Number(i)===i?C(A(L(t))):H()},to:_,velocity:function(){var n=keen_slider_es_r(),t=w.reduce((function(t,i){var e=i.distance,r=i.timestamp;return n-r>200||(keen_slider_es_l(e)!==keen_slider_es_l(t.distance)&&t.distance&&(t={distance:0,lastTimestamp:0,time:0}),t.time&&(t.distance+=e),t.lastTimestamp&&(t.time+=r-t.lastTimestamp),t.lastTimestamp=r),t}),{distance:0,lastTimestamp:0,time:0});return t.distance/t.time||0}}}(i),i.animator=function keen_slider_es_h(n){var t,i,e,r,a,o;function u(t){o||(o=t),s(!0);var a=t-o;a>e&&(a=e);var l=r[i];if(l[3]<a)return i++,u(t);var f=l[2],p=l[4],v=l[0],h=l[1]*(0,l[5])(0===p?1:(a-f)/p);if(h&&n.track.to(v+h),a<e)return d();o=null,s(!1),c(null),n.emit("animationEnded")}function s(n){t.active=n}function c(n){t.targetIdx=n}function d(){var n;n=u,a=window.requestAnimationFrame(n)}function l(){var t;t=a,window.cancelAnimationFrame(t),s(!1),c(null),o&&n.emit("animationStopped"),o=null}return t={active:!1,start:function(t){if(l(),n.track.details){var a=0,o=n.track.details.position;i=0,e=0,r=t.map((function(n){var t,i=Number(o),r=null!==(t=n.earlyExit)&&void 0!==t?t:n.duration,u=n.easing,s=n.distance*u(r/n.duration)||0;o+=s;var c=e;return e+=r,a+=s,[i,n.distance,c,e,n.duration,u]})),c(n.track.distToIdx(a)),d(),n.emit("animationStarted")}},stop:l,targetIdx:null}}(i),t)for(var n=0,e=t;n<e.length;n++)(0,e[n])(i);i.track.init(i.options.initial||0),i.emit("created")}(),i}(i,keen_slider_es_t([k(n,{drag:!0,mode:"snap",renderMode:"precision",rubberband:!0,selector:".keen-slider__slide"}),x,b,g],e||[],!0))}catch(n){console.error(n)}};const CAROUSEL_CSS_VARIABLES=lit.iv`
    :host {
        /* Carousel Colors */
        --awf-carousel-background-color-inner: var(--awf-carousel-background-color, var(--at-white));

        /* Carousel Measurements */
        --awf-carousel-padding-inner: var(--awf-carousel-padding, 0);
        --awf-carousel-width-inner: var(--awf-carousel-width, auto);
        --awf-carousel-page-height-inner: var(--awf-carousel-page-height, 100px);
    }
`,CAROUSEL_STYLES=lit.iv`
    :host {
        display: block;
        width: var(--awf-carousel-width-inner);
        padding: 0 35px;
        position: relative;
        box-sizing: border-box;
    }

    .slider {
        align-items: stretch;
        display: flex;
        width: auto;
        box-sizing: border-box;
        overflow: hidden;
        user-select: none;
        touch-action: pan-y;
        height: var(--awf-carousel-page-height-inner, 100%);
    }

    .slides {
        display: flex;
        background-color: var(--awf-carousel-background-color-inner);
    }

    .button-next,
    .button-prev {
        border-radius: 50%;
        cursor: pointer;
        height: 32px;
        position: absolute;
        top: calc(var(--awf-carousel-page-height-inner) / 2 - 16px);
        width: 32px;
        z-index: var(--awf-elevation-z2);
    }

    .button-prev {
        left: 0;
    }

    .button-next {
        right: 0;
    }

    .button-prev:hover,
    .button-next:hover {
        background-color: var(--at-blue-soft);
    }

    :host([hideArrows]) .button-prev,
    :host([hideArrows]) .button-next {
        display: none;
    }

    .button-prev.disabled,
    .button-next.disabled {
        cursor: default;
        pointer-events: none;
    }

    .button-prev.disabled awf-icon,
    .button-next.disabled awf-icon {
        --awf-icon-color: var(--at-gray);
    }

    awf-icon {
        --awf-icon-color: var(--at-blue);
        width: 32px;
        height: 32px;
    }

    .bullet-container {
        width: auto;
        margin-top: 8px;
        display: flex;
        justify-content: center;
    }

    :host([hideBullets]) .bullet-container {
        display: none;
    }

    .bullet {
        border: none;
        width: 8px;
        height: 8px;
        background: var(--at-gray-soft);
        border-radius: 50%;
        cursor: pointer;
    }

    .bullet:not(:first-of-type) {
        margin-left: 4px;
    }

    .bullet.active {
        background: var(--at-gray-dark);
    }
`;let AwfCarousel=class AwfCarousel extends lit.oi{constructor(){super(...arguments),this.itemsPerSlide=1,this.spacing=1,this.loop=!1,this.hideArrows=!1,this.hideBullets=!1,this.bulletPerPage=!1,this.moveBy=1,this.startIndex=0}get actualItemsPerSlide(){return Math.min(this.itemsPerSlide,this.slides.length)}render(){return lit.dy`
            <div class="slider">
                <slot class="slides" @slotchange=${this.slotchange}></slot>
                <awf-button class="button-prev" @click=${this.previous} aria-label="previous">
                    <awf-icon slot="icon" raw=${page_previous.g}></awf-icon>
                </awf-button>
                <awf-button class="button-next" @click=${this.next} aria-label="next">
                    <awf-icon slot="icon" raw=${page_next._}></awf-icon>
                </awf-button>
            </div>
            ${this.renderBullets()}
        `}firstUpdated(){this.instantiateSwiper()}updated(changes){this.swiper&&((changes.has("loop")||changes.has("itemsPerSlide")||changes.has("spacing"))&&(this.swiper.update(this.getSliderOptions()),this.updateBulletsVisibility(),this.updateArrowsVisibility()),this.updateArrowDisabledState(),this.updateBulletActiveState())}renderBullets(){return lit.dy`<div class="bullet-container">
            ${c(this.getSlideIndices(),this.renderBullet.bind(this))}
        </div>`}renderBullet(index){return lit.dy`<div class="bullet" value=${index} @click=${()=>this.swiper?.moveToIdx(index)}></div>`}slotchange(){this.swiper?.update(),this.requestUpdate(),this.updateBulletsVisibility(),this.updateArrowsVisibility()}previous(){if(!this.swiper)return;const slideIndex=this.swiper.track.details.rel;let goto=null;if(!this.loop&&!this.bulletPerPage&&this.actualItemsPerSlide>1){const slideIndices=this.getSlideIndices();slideIndices[slideIndices.length-1]===slideIndex&&(goto=slideIndices[Math.max(slideIndices.length-2,0)])}null===goto&&(goto=slideIndex-this.moveBy,this.loop?goto=this.swiper.track.absToRel(goto):goto<0&&(goto=0)),this.swiper.moveToIdx(goto)}next(){if(!this.swiper)return;let goto=this.swiper.track.details.rel+this.moveBy;this.loop?goto=this.swiper.track.absToRel(goto):goto>this.slides.length-this.actualItemsPerSlide&&(goto=this.slides.length-this.actualItemsPerSlide),this.swiper.moveToIdx(goto)}getSliderOptions(){return{selector:()=>this.slides,loop:this.loop,slides:{perView:this.actualItemsPerSlide,spacing:this.spacing},slideChanged:()=>{this.updateArrowDisabledState(),this.updateBulletActiveState(),this.dispatchActiveSlideChange()},initial:this.startIndex}}instantiateSwiper(){this.swiper=new y(this.wrapper,this.getSliderOptions())}updateBulletsVisibility(){const isVisible=this.slides.length>1&&this.slides.length>this.actualItemsPerSlide;this.bulletContainer.style.visibility=isVisible?"visible":"hidden"}updateArrowsVisibility(){this.slides.length>1&&this.slides.length>this.actualItemsPerSlide?(this.prevButton.style.visibility="visible",this.nextButton.style.visibility="visible"):(this.prevButton.style.visibility="hidden",this.nextButton.style.visibility="hidden")}getSlideIndices(){let slideIndices=this.slides.map(((_,index)=>index));if(!this.bulletPerPage&&this.isMultipleItemsPerSideWithoutLoop()){slideIndices=[];for(let i=0;i<this.slides.length;i+=this.moveBy)i+this.actualItemsPerSlide<=this.slides.length?slideIndices.push(i):-1===slideIndices.indexOf(this.slides.length-this.actualItemsPerSlide)&&slideIndices.push(this.slides.length-this.actualItemsPerSlide)}return slideIndices}isMultipleItemsPerSideWithoutLoop(){return this.actualItemsPerSlide>1&&!this.loop}updateArrowDisabledState(){if(!this.swiper||!this.swiper.track.details)return;const slideIndex=this.swiper.track.details.rel;this.prevButton.classList.remove("disabled"),this.nextButton.classList.remove("disabled"),this.loop||(0===slideIndex&&this.prevButton.classList.add("disabled"),slideIndex>=this.slides.length-this.actualItemsPerSlide&&this.nextButton.classList.add("disabled"))}updateBulletActiveState(){if(!this.swiper||!this.swiper.track.details)return;let indices;indices=this.bulletPerPage||this.loop?this.getActiveSlidesIndex(this.swiper):[this.swiper.track.details.rel],this.bullets.forEach((bullet=>{bullet.classList.remove("active");const bulletValue=bullet.getAttribute("value");bulletValue&&indices.indexOf(Number.parseInt(bulletValue))>-1&&bullet.classList.add("active")}))}getActiveSlidesIndex(swiper){const indices=[],start=swiper.track.details.rel;for(let i=start;i<start+this.actualItemsPerSlide;i++)indices.push(swiper.track.absToRel(i));return indices}dispatchActiveSlideChange(){if(!this.swiper||!this.swiper.track.details)return;const displayedSlideIndices=[],start=this.swiper.track.details.rel;for(let i=0;i<this.actualItemsPerSlide;i++)displayedSlideIndices.push(this.swiper.track.absToRel(start+i));this.dispatchEvent(createCustomEvent(AwfEvent.SLIDE_ACTIVE_CHANGE,displayedSlideIndices))}};AwfCarousel.styles=[COMMON_STYLES,CAROUSEL_CSS_VARIABLES,CAROUSEL_STYLES],(0,tslib_es6.gn)([(0,decorators.Cb)({type:Number})],AwfCarousel.prototype,"itemsPerSlide",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)({type:Number})],AwfCarousel.prototype,"spacing",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)({type:Boolean})],AwfCarousel.prototype,"loop",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)({type:Boolean,reflect:!0})],AwfCarousel.prototype,"hideArrows",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)({type:Boolean,reflect:!0})],AwfCarousel.prototype,"hideBullets",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)({type:Boolean})],AwfCarousel.prototype,"bulletPerPage",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)({type:Number})],AwfCarousel.prototype,"moveBy",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)({type:Number})],AwfCarousel.prototype,"startIndex",void 0),(0,tslib_es6.gn)([(0,decorators.NH)({selector:"awf-carousel-page"})],AwfCarousel.prototype,"slides",void 0),(0,tslib_es6.gn)([(0,decorators.IO)(".slider")],AwfCarousel.prototype,"wrapper",void 0),(0,tslib_es6.gn)([(0,decorators.IO)(".button-prev")],AwfCarousel.prototype,"prevButton",void 0),(0,tslib_es6.gn)([(0,decorators.IO)(".button-next")],AwfCarousel.prototype,"nextButton",void 0),(0,tslib_es6.gn)([(0,decorators.IO)(".bullet-container")],AwfCarousel.prototype,"bulletContainer",void 0),(0,tslib_es6.gn)([(0,decorators.Kt)(".bullet")],AwfCarousel.prototype,"bullets",void 0),AwfCarousel=(0,tslib_es6.gn)([(0,awf_custom_element.M)("awf-carousel",!0)],AwfCarousel);var unsafe_html=__webpack_require__("./node_modules/lit-html/directives/unsafe-html.js");const CHECKBOX_CSS_VARIABLES=lit.iv`
    :host {        
        --awf-checkbox-icon-background-color-inner: var(--awf-checkbox-icon-background-color, var(--at-white));
        --awf-checkbox-icon-border-color-inner: var(--awf-checkbox-icon-border-color, var(--at-dark-navy));
        --awf-checkbox-icon-padding-inner: var(--awf-checkbox-icon-padding, 1.5px);
        --awf-checkbox-icon-color-inner: var(--awf-checkbox-icon-color, var(--at-blue));
        --awf-checkbox-icon-size-inner: var(--awf-checkbox-icon-size, 13px);

        --awf-checkbox-label-font-color-inner: var(--awf-checkbox-label-font-color, var(--awf-label-left-position-font-color-inner));
        --awf-checkbox-label-font-size-inner: var(--awf-checkbox-label-font-size, var(--awf-label-left-position-font-size-inner));
        --awf-checkbox-label-font-style-inner: var(--awf-checkbox-label-font-style, var(--awf-label-left-position-font-style-inner));
    }
`,CHECKBOX_STYLES=lit.iv`
    :host {
        --awf-icon-color: var(--awf-checkbox-icon-color-inner);
        --awf-icon-size: var(--awf-checkbox-icon-size-inner);

        display: inline-flex;
    }

    :host(:focus-visible) {
        outline: none;
    }

    :host(:not([disabled]):not([error]):focus-visible) {
        --awf-checkbox-icon-border-color: var(--at-blue-shade);
        --awf-checkbox-label-font-color-inner: var(--awf-label-hover-font-color-inner);
    }

    :host([disabled]) {
        --awf-checkbox-icon-background-color: var(--at-gray-soft);
        --awf-checkbox-icon-border-color: var(--awf-state-disabled-border);
        --awf-checkbox-icon-color-inner: var(--awf-state-disabled-foreground);
        --awf-checkbox-label-font-color-inner: var(--awf-state-disabled-foreground);
    }

    :host([error]) {
        --awf-checkbox-icon-background-color: var(--at-red-extra-light);
        --awf-checkbox-icon-border-color: var(--awf-validation-error-message-font-color);
        --awf-checkbox-icon-color-inner: var(--awf-validation-error-message-font-color);
        --awf-checkbox-label-font-color-inner: var(--awf-validation-error-message-font-color);
    }

    :host([error]:hover),
    :host([error]:focus-visible) {
        --awf-checkbox-icon-background-color: var(--awf-validation-error-focus-background-color);
    }

    :host #tooltipTrigger {
        display: flex;
        flex-direction: column;
    }

    :host .checkbox {
        align-items: center;
        cursor: pointer;
        display: flex;
        flex-direction: row;
    }

    :host([labelPosition='left']) .checkbox {
        flex-direction: row-reverse;
        justify-content: flex-end;
    }

    awf-icon {
        background-color: var(--awf-checkbox-icon-background-color-inner);
        border: 1px solid var(--awf-checkbox-icon-border-color-inner);
        color: var(--awf-icon-color);
        min-height: var(--awf-checkbox-icon-size-density-high, 9px);
        min-width: var(--awf-checkbox-icon-size-density-high, 9px);
        padding: var(--awf-checkbox-icon-padding-inner);
    }

    awf-icon:not([alone]) {
        margin-bottom: .5rem;
        margin-right: .5rem;
        margin-top: .5rem;
    }

    :host([labelPosition='left']) awf-icon:not([alone]) {
        margin-left: .5rem;
        margin-right: 0;
    }

    :host(:not([disabled]):not([error]):hover) awf-icon {
        --awf-checkbox-icon-background-color-inner: var(--at-blue-soft);
    }

    ::slotted(label) {
        color: var(--awf-checkbox-label-font-color-inner);
        cursor: pointer;
        font-size: var(--awf-checkbox-label-font-size-inner);
        font-style: var(--awf-checkbox-label-font-style-inner);
        width: var(--awf-label-width);
    }

    :host([required]) ::slotted(label)::after {
        content: ' *';
        color: var(--awf-checkbox-label-font-color-inner);
    }

    ::slotted(input) {
        display: none;
    }

    ::slotted([slot='error']),
    .internalError {
        color: var(--awf-validation-error-message-font-color);
        line-height: 16px;
    }

    :host(:not([messageBelow])) ::slotted([slot='error']) {
        display: none;
    }

    :host([disabled]) .checkbox,
    :host([disabled]) ::slotted(label) {
        cursor: not-allowed;
    }
`,ICON_SVG=[lit.dy`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12"></svg>`,lit.dy`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12">
            <path d="M2 6h8" fill="none" stroke="currentColor" stroke-miterlimit="10"></path>
        </svg>
    `,lit.dy`${(0,unsafe_html.A)('<svg version="1.1" id="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 16 16" style="enable-background:new 0 0 16 16;" xml:space="preserve" data-icon-name="checkmark">\n<polygon points="12.7,3 5.7,10.2 3.3,7.8 2,9.1 5.7,13 14,4.4 "></polygon>\n</svg>')}`];let AwfCheckbox=class AwfCheckbox extends lit.oi{constructor(){super(...arguments),this.labelPosition=LabelPosition.Right,this.messageBelow=!1,this.iconSVG=0,this.checkboxOnly=!0,this._onKeyDown=this.onKeyDown.bind(this),this._onInputChange=this.onInputChange.bind(this),this.mutationObserver=new MutationObserver((()=>this.mutationCallback()))}get field(){const[input]=this.htmlInputElements;return input||console.warn("Input not found!"),input}disconnectCallback(){this.removeEventListener("keydown",this._onKeyDown),this.field&&this.field.removeEventListener("change",this._onInputChange)}render(){return lit.dy`
            <slot @slotchange=${this.onSlotChange}></slot>
            <div id="tooltipTrigger">
                <div class="checkbox">
                    <awf-icon @click=${this.onIconClicked} ?alone=${this.checkboxOnly}> ${ICON_SVG[this.iconSVG]} </awf-icon>
                    <slot name="label" @click=${this.onSlotLabelClicked} @slotchange=${this.onSlotLabelChange}></slot>
                </div>
                ${this.renderErrorSlot()}
            </div>
            <awf-tooltip offset="5" placement="bottom" tip trigger="tooltipTrigger"></awf-tooltip>
        `}onSlotChange(){0!==this.htmlInputElements.length&&(this.field.type="checkbox",this.addEventListener("keydown",this._onKeyDown),this.field.addEventListener("change",this._onInputChange),listenPropertyChangeWithCallback(this.field,this._onInputChange,"checked"),listenPropertyChangeWithCallback(this.field,this._onInputChange,"indeterminate"),this.mutationObserver.disconnect(),this.mutationObserver.observe(this.field,{attributeFilter:["checked","disabled","indeterminate","required"]}),this.mutationCallback())}onKeyDown(event){"Space"===event.code&&(this.onIconClicked(event),event.preventDefault())}onInputChange(){this.defineCheckmarkIcon()}mutationCallback(){this.field.disabled?(this.setAttribute("disabled",""),this.tabIndex=-1):(this.removeAttribute("disabled"),this.tabIndex=0),this.field.required?this.setAttribute("required",""):(this.removeAttribute("required"),this.manageSlottedErrorMessage()),this.defineCheckmarkIcon()}onIconClicked(event){this.field.disabled?event.preventDefault():(this.field.indeterminate||this.field.hasAttribute("indeterminate")?(this.field.checked=!0,this.field.indeterminate=!1,this.field.removeAttribute("indeterminate")):this.field.checked=!this.field.checked,this.defineCheckmarkIcon(),this.manageError(),this.field.dispatchEvent(new Event("change",{bubbles:!0})))}onSlotLabelClicked(event){this.onIconClicked(event),event.preventDefault()}onSlotLabelChange(){this.checkboxOnly=0===this.slottedLabels.length}defineCheckmarkIcon(){this.field.indeterminate||this.field.hasAttribute("indeterminate")?this.iconSVG=1:this.field.checked?this.iconSVG=2:this.iconSVG=0}renderErrorSlot(){const errorSlot=lit.dy` <slot name="error" @slotchange=${this.manageSlottedErrorMessage}> </slot> `;return this.messageBelow?lit.dy`
                <div class="errors">
                    <div class="internalError"></div>
                    ${errorSlot}
                </div>
            `:lit.dy`${errorSlot}`}manageSlottedErrorMessage(){this.removeAttribute(MessageLevel.ERROR),this.tooltip.removeAttribute(MessageLevel.ERROR),this.tooltip.disabled=!0,this.tooltip.message="",this.slottedErrors.length&&(this.setAttribute(MessageLevel.ERROR,""),this.tooltip.setAttribute(MessageLevel.ERROR,""),this.messageBelow?this.slottedErrors.forEach(((message,index)=>{index<this.slottedErrors.length-1&&(message.style.display="none")})):(this.tooltip.disabled=!1,this.tooltip.message=this.slottedErrors.map((error=>error.innerText))[this.slottedErrors.length-1]))}manageError(){this.manageRequiredError()||(this.messageBelow&&(this.internalErrorMessage.innerText=""),this.manageSlottedErrorMessage()),this.tooltip.open=!!this.tooltip.message}manageRequiredError(){const managed=this.field.required&&0===this.iconSVG;return managed&&(this.setAttribute(MessageLevel.ERROR,""),this.tooltip.setAttribute(MessageLevel.ERROR,""),this.messageBelow?this.internalErrorMessage.innerText=msg("This field is required."):(this.tooltip.disabled=!1,this.tooltip.message=msg("This field is required."))),managed}};AwfCheckbox.styles=[COMMON_STYLES,LABEL_CSS_VARIABLES,CHECKBOX_CSS_VARIABLES,CHECKBOX_STYLES],(0,tslib_es6.gn)([(0,decorators.Cb)({reflect:!0})],AwfCheckbox.prototype,"labelPosition",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)({type:Boolean})],AwfCheckbox.prototype,"messageBelow",void 0),(0,tslib_es6.gn)([(0,decorators.NH)({slot:"",selector:"input",flatten:!0})],AwfCheckbox.prototype,"htmlInputElements",void 0),(0,tslib_es6.gn)([(0,decorators.NH)({slot:"label"})],AwfCheckbox.prototype,"slottedLabels",void 0),(0,tslib_es6.gn)([(0,decorators.NH)({slot:"error",selector:"div, span",flatten:!0})],AwfCheckbox.prototype,"slottedErrors",void 0),(0,tslib_es6.gn)([(0,decorators.IO)(".internalError")],AwfCheckbox.prototype,"internalErrorMessage",void 0),(0,tslib_es6.gn)([(0,decorators.IO)("awf-tooltip")],AwfCheckbox.prototype,"tooltip",void 0),(0,tslib_es6.gn)([(0,decorators.SB)()],AwfCheckbox.prototype,"iconSVG",void 0),(0,tslib_es6.gn)([(0,decorators.SB)()],AwfCheckbox.prototype,"checkboxOnly",void 0),AwfCheckbox=(0,tslib_es6.gn)([localized(),(0,awf_custom_element.M)("awf-checkbox",!0)],AwfCheckbox);let AwfChecklist=class AwfChecklist extends lit.oi{constructor(){super(...arguments),this.multi=!1,this.noDeselect=!1,this.dispatchCustomEvent=dispatchCustomEvent.bind(this)}deselectAll(){this.options.forEach((option=>option.selected=!1))}selectAll(){this.options.forEach((option=>option.selected=!0))}render(){return lit.dy`<slot @listOptionClick=${this.handleOptionClick}
                          @keyup=${this.handleKeyUp}
                          @listOptionMouseEnter=${this.handleMouseEnter}></slot> `}update(changedProperties){super.update(changedProperties),changedProperties.has("multi")&&!this.multi&&this.options.length>0&&this.reduceToFirstSelection()}handleOptionClick(event){event.target instanceof AwfListOption&&this.changeSelection(event.target)}handleKeyUp(event){const option=this.searchForOptionInEventPath(event)||this.options.find((opt=>opt.hasAttribute("focused")));"ArrowDown"===event.key&&this.focusNextOption(option),"ArrowUp"===event.key&&this.focusPreviousOption(option),!option||" "!==event.key&&"Enter"!==event.key||this.changeSelection(option)}handleMouseEnter(event){event.target instanceof AwfListOption&&this.highlightOption(event.target)}searchForOptionInEventPath(event){return event.composedPath().map((target=>target)).find((e=>e instanceof AwfListOption))}focusNextOption(option){const index=this.visibleOptions.indexOf(option);let nextOption;nextOption=index<this.visibleOptions.length-1?this.visibleOptions[index+1]:this.visibleOptions[0],this.highlightOption(nextOption),nextOption.focus()}focusPreviousOption(option){const index=this.visibleOptions.indexOf(option);let previousOption;previousOption=index>0?this.visibleOptions[index-1]:this.visibleOptions[this.options.length-1],this.highlightOption(previousOption),previousOption.focus()}highlightOption(option){this.visibleOptions.forEach((opt=>opt.focused=opt===option))}deselectAllOptions(){this.selectedOptions.forEach((option=>{option.selected=!1}))}reduceToFirstSelection(){if(this.selectedOptions.length>0){const selectedOption=this.selectedOptions[0];this.selectedOptions.slice(1).forEach((option=>option.selected=!1)),this.emitValue(selectedOption.value)}}changeSelection(option){if(this.noDeselect&&option.selected)return;this.multi||option.selected||this.deselectAllOptions(),option.selected=!option.selected;const value=this.getSelectedValues(option);this.emitValue(value)}getSelectedOptions(){const slot=this.shadowRoot?.querySelector("slot:not([name])");return(slot?.assignedElements()).filter((({selected})=>selected))}getSelectedValues(option){let value=option.selected?option.value:void 0;const selectedOptions=this.getSelectedOptions();return this.multi&&(value=selectedOptions.map((opt=>opt.value))),value}emitValue(value){this.dispatchCustomEvent(AwfEvent.VALUE_CHANGE,value)}};AwfChecklist.styles=[COMMON_STYLES,lit.iv`
            :host {
                display: flex;
                flex-direction: column;
            }

            ::slotted(awf-list-option) {
                border-top: 1px solid var(--at-gray-soft);
            }

            ::slotted(awf-list-option:last-child) {
                border-bottom: 1px solid var(--at-gray-soft);
            }
        `],(0,tslib_es6.gn)([(0,decorators.Cb)({type:Boolean})],AwfChecklist.prototype,"multi",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)({type:Boolean})],AwfChecklist.prototype,"noDeselect",void 0),(0,tslib_es6.gn)([(0,decorators.NH)({selector:"awf-list-option"})],AwfChecklist.prototype,"options",void 0),(0,tslib_es6.gn)([(0,decorators.NH)({selector:"awf-list-option[selected]"})],AwfChecklist.prototype,"selectedOptions",void 0),(0,tslib_es6.gn)([(0,decorators.NH)({selector:"awf-list-option:not([hidden])"})],AwfChecklist.prototype,"visibleOptions",void 0),AwfChecklist=(0,tslib_es6.gn)([(0,awf_custom_element.M)("awf-checklist",!0)],AwfChecklist);let AwfChoiceChips=class AwfChoiceChips extends lit.oi{constructor(){super(...arguments),this.disabled=!1,this.value=[],this.dispatchCustomEvent=dispatchCustomEvent.bind(this)}render(){return lit.dy` <slot @click=${this.handleChipClick} @delete=${this.handleDeleteEvent}></slot> `}updated(changes){super.updated(changes),changes.has("disabled")&&(this.setChipsDisabledState(),this.disabled?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled")),changes.has("value")&&this.setChipsActiveState()}handleChipClick(event){event.stopPropagation();const{target}=event;target instanceof AwfChip&&!target.disabled&&(target.active=!target.active,this.emitValue())}handleDeleteEvent(event){event.stopPropagation();const{target}=event;if(target instanceof AwfChip&&this.dispatchCustomEvent(AwfEvent.DELETE,target.value),target instanceof AwfChip&&this.chips.includes(target)){target.remove()}}setChipsDisabledState(){this.chips.forEach((chip=>{chip.disabled=this.disabled}))}setChipsActiveState(){this.chips.forEach((chip=>{chip.active=!!this.value.find((value=>value===chip.value))}))}emitValue(){const values=this.chips.filter((({active,disabled})=>active&&!disabled)).map((({value})=>value));this.dispatchCustomEvent(AwfEvent.VALUE_CHANGE,values)}};AwfChoiceChips.styles=[COMMON_STYLES,lit.iv`
            :host {
                display: flex;
                flex-wrap: wrap;
                gap: 4px 4px;
            }
        `],(0,tslib_es6.gn)([(0,decorators.Cb)({type:Boolean,reflect:!0})],AwfChoiceChips.prototype,"disabled",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)()],AwfChoiceChips.prototype,"value",void 0),(0,tslib_es6.gn)([(0,decorators.NH)({selector:"awf-chip"})],AwfChoiceChips.prototype,"chips",void 0),AwfChoiceChips=(0,tslib_es6.gn)([(0,awf_custom_element.M)("awf-choice-chips",!0)],AwfChoiceChips);var core_reset=__webpack_require__("./node_modules/@agilent/web-icons/core/reset.js"),checkmark=__webpack_require__("./node_modules/@agilent/web-icons/core/checkmark.js");const DATE_RANGE_PICKER_CSS_VARIABLES=lit.iv`
    :host {
        --awf-drp-date-label-color-inner: var(--awf-drp-date-label-color, var(--at-blue-shade));

        /* Date range picker configuration */ 
        --awf-drp-tab-width-inner: var(--awf-drp-tab-width, 100px);
        --awf-drp-button-width-inner: var(--awf-drp-button-width, 40px);

        /* Date time range picker configuration */
        --awf-drp-time-tab-width-inner: var(--awf-drp-time-tab-width, 150px);
        --awf-drp-time-button-width-inner: var(--awf-drp-time-button-width, 60px);
    }
`,DATE_RANGE_PICKER_STYLE=lit.iv`
    .awf-date-range-picker {
        border: solid 1px var(--awf-state-rest-border);
        display: grid;
        grid-template-rows: auto auto;
        width: var(--awf-drp-width, fit-content);
    }

    .awf-header {
        display: flex;
    }

    .awf-tab {
        border-right: solid 1px var(--awf-state-rest-border);
        cursor: default;
        padding: 12px;
        width: var(--awf-drp-tab-width-inner);
        flex-grow: 1;
    }

    :host([datetime]) .awf-tab {
        width: var(--awf-drp-time-tab-width-inner);
    }

    .awf-tab[disabled] {
        color: var(--awf-state-disabled-foreground);
        cursor: not-allowed;
    }

    .awf-tab:not([selected]) {
        border-bottom: solid 1px var(--awf-state-rest-border);
    }

    .awf-tab:not([selected]):not([disabled]) {
        cursor: pointer;
    }

    .awf-tab:not([selected]):not([disabled]):hover {
        background-color: var(--awf-state-hover-background);
    }

    .awf-tab-title {
        font-weight: bold;
    }

    .awf-buttons {
        border-bottom: solid 1px var(--awf-state-rest-border);
        display: grid;
        grid-template-columns: repeat(2, var(--awf-drp-button-width-inner));
    }

    :host([datetime]) .awf-buttons {
        grid-template-columns: repeat(2, var(--awf-drp-time-button-width-inner));
    }

    awf-button {
        margin: auto;
    }

    .awf-gray-text {
        color: var(--awf-state-disabled-foreground);
    }

    .awf-start-date,
    .awf-end-date {
        color: var(--awf-drp-date-label-color-inner);
    }

    awf-datepicker {
        margin: 12px auto;
        width: fit-content;
    }

    :host([datetime]) awf-datepicker {
        margin: 12px;
    }
`;let AwfDateRangePicker=class AwfDateRangePicker extends lit.oi{constructor(){super(...arguments),this.fromTabSelected=!0}requestFocus(){this.datepicker.requestFocus()}render(){return lit.dy`
            <div class="awf-date-range-picker">
                <div class="awf-header">
                    <div class="awf-tab" @click=${this.goToStartDate} ?selected=${this.fromTabSelected}>
                        <div class="awf-tab-title">${msg("From")}</div>
                        <div class="awf-gray-text" ?hidden=${!!this.startDate}>${msg("Please Select")}</div>
                        <div class="awf-start-date" ?hidden=${!this.startDate}>${this.formatDate(this.startDate)}</div>
                    </div>
                    <div class="awf-tab" @click=${this.goToEndDate} ?selected=${!this.fromTabSelected} ?disabled=${!this.startDate}>
                        <div class="awf-tab-title">${msg("To")}</div>
                        <div class="awf-gray-text" ?hidden=${!!this.endDate}>${msg("Please Select")}</div>
                        <div class="awf-end-date" ?hidden=${!this.endDate}>${this.formatDate(this.endDate)}</div>
                    </div>
                    <div class="awf-buttons">
                        <awf-button id="resetBtn" @click=${this.reset}>
                            <awf-icon raw=${core_reset.u}></awf-icon>
                        </awf-button>
                        <awf-button id="validateBtn" @click=${this.validateRange} ?disabled=${this.validateButtonDisabled()}>
                            <awf-icon raw=${checkmark.l}></awf-icon>
                        </awf-button>
                    </div>
                </div>
                <awf-datepicker
                    class="awf-datepicker"
                    .value=${this.startDate}
                    .endValue=${this.endDate}
                    .min=${this.fromTabSelected?void 0:this.startDate}
                    ?dateRange=${!this.fromTabSelected}
                    @valuechange=${this.onDateSelected}
                ></awf-datepicker>
            </div>
        `}goToStartDate(){this.fromTabSelected=!0,this.endDate=void 0}goToEndDate(){this.fromTabSelected=!this.startDate}formatDate(date){if(!date)return"";return new Intl.DateTimeFormat(translate_service_awfTranslateService.getLocale().replace("_","-"),{year:"numeric",month:"short",day:"2-digit"}).format(date)}validateRange(){this.dispatchEvent(createCustomEvent(AwfEvent.VALUE_CHANGE,{startDate:this.startDate,endDate:this.endDate}))}validateButtonDisabled(){return!this.startDate||!this.endDate}reset(){this.startDate=void 0,this.endDate=void 0,this.fromTabSelected=!0,this.dispatchEvent(createCustomEvent(AwfEvent.VALUE_CHANGE,{startDate:this.startDate,endDate:this.endDate}))}onDateSelected(event){event.detail instanceof Date?this.startDate=event.detail:(this.startDate=event.detail.startDate,this.endDate=event.detail.endDate),event.stopPropagation()}};function*map_o(o,f){if(void 0!==o){let i=0;for(const t of o)yield f(t,i++)}}function*range_o(o,l,n=1){const t=void 0===l?0:o;null!=l||(l=o);for(let o=t;n>0?o<l:l<o;o+=n)yield o}AwfDateRangePicker.styles=[COMMON_STYLES,DATE_RANGE_PICKER_CSS_VARIABLES,DATE_RANGE_PICKER_STYLE],(0,tslib_es6.gn)([(0,decorators.SB)()],AwfDateRangePicker.prototype,"startDate",void 0),(0,tslib_es6.gn)([(0,decorators.SB)()],AwfDateRangePicker.prototype,"endDate",void 0),(0,tslib_es6.gn)([(0,decorators.SB)()],AwfDateRangePicker.prototype,"fromTabSelected",void 0),(0,tslib_es6.gn)([(0,decorators.IO)("awf-datepicker")],AwfDateRangePicker.prototype,"datepicker",void 0),AwfDateRangePicker=(0,tslib_es6.gn)([localized(),(0,awf_custom_element.M)("awf-date-range-picker",!0)],AwfDateRangePicker);const style_map_o=(0,directive.XM)(class extends directive.Xe{constructor(t){var e;if(super(t),t.type!==directive.pX.ATTRIBUTE||"style"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,r)=>{const s=t[r];return null==s?e:e+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`}),"")}update(e,[r]){const{style:s}=e.element;if(void 0===this.ht){this.ht=new Set;for(const t in r)this.ht.add(t);return this.render(r)}this.ht.forEach((t=>{null==r[t]&&(this.ht.delete(t),t.includes("-")?s.removeProperty(t):s[t]="")}));for(const t in r){const e=r[t];if(null!=e){this.ht.add(t);const r="string"==typeof e&&e.endsWith(" !important");t.includes("-")||r?s.setProperty(t,r?e.slice(0,-11):e,r?"important":""):s[t]=e}}return lit_html.Jb}});class ClickControls{constructor(slider){this.slider=slider,this.slider.on("created",(()=>this.registerClickHandlers())),this.slider.on("optionsChanged",(()=>this.registerClickHandlers()))}registerClickHandlers(){this.slider.slides.forEach(((item,key)=>{item.addEventListener("click",(()=>this.handleClick(key)))}))}handleClick(key){this.slider.moveToIdx(key)}}const ClickControlsPlugin=function(slider){return new ClickControls(slider)},DATE_TIME_PICKER_CSS_VARIABLES=lit.iv`
    :host {
        --awf-date-time-picker-width-inner: var(--awf-date-time-picker-width, 370px);
    }
`,DATE_TIME_PICKER_STYLES=lit.iv`
    :host {
        display: block;
        width: var(--awf-date-time-picker-width-inner);
    }

    .awf-date-time-picker {
        display: grid;
        grid-template-rows: auto auto;
        grid-template-columns: auto auto;
        grid-template-areas: "controls controls" "datepicker timepicker";
    }

    .awf-datepicker {
        grid-area: datepicker;
    }

    .time-selection {
        display: flex;
        flex-direction: column;
        align-items: center;
        grid-area: timepicker;
    }

    .time-picker {
        display: flex;
        align-items: center;
        position: relative;
    }
    .time-picker::after {
        content: '';
        border: 1px solid var(--at-blue-shade);
        background-color: var(--at-blue-medium);
        height: var(--awf-datepicker-day-height-inner);
        width:100%;
        position: absolute;
        z-index: 9;
        top: calc(50% - (var(--awf-datepicker-day-height-inner) / 2 ) - 1px);
    }

    .time-picker ul {
        height: calc(var(--awf-datepicker-day-height-inner) * 7);
        list-style: none;
        padding: 0;
        margin: 0;
        overflow: hidden;
        position: relative;
        z-index: 10;
    }
    
    .time-picker ul.am-pm-picker {
        height: calc(var(--awf-datepicker-day-height-inner) * 2);
        overflow: inherit;
    }

    .time-picker ul.am-pm-picker::before, .time-picker ul.am-pm-picker::after {
        display: none;
    }

    .time-picker ul::before {
        content: "";
        width: 100%;
        height: calc(50% - (var(--awf-datepicker-day-height-inner) / 2 ) - 1px);
        position: absolute;
        left: 0px;
        top: 0px;
        background: linear-gradient(white, transparent);
        z-index: 1;
        pointer-events: none;
    }

    .time-picker ul::after {
        content: "";
        width: 100%;
        height: calc(50% - (var(--awf-datepicker-day-height-inner) / 2 ) - 1px);
        position: absolute;
        left: 0px;
        bottom: 0px;
        background: linear-gradient(transparent, white);
        z-index: 1;
        pointer-events: none;
    }

    .time-picker ul li { 
        list-style: none;
        height: var(--awf-datepicker-day-height-inner);
        width: var(--awf-datepicker-day-height-inner);
        line-height: var(--awf-datepicker-day-height-inner);
        text-align: center;
        user-select: none;
    }

    li.selected {
        color: var(--at-dark-navy);
    }

    li.disabled { 
        color: var(--at-gray);
    }

    .time-format-toggle {
        height: 31px;
    }

    .controls {
        grid-area: controls;
        margin-left: auto;
        margin-bottom: 8px;
        display: flex;
        column-gap: 8px;
    }
`;class ToggleControls{constructor(slider){this.slider=slider,this.slider.on("created",(()=>{slider.container.addEventListener("click",this.eventClick.bind(this))}))}eventClick(e){e.preventDefault();0===this.slider.track.details.rel?this.slider.next():this.slider.prev()}}const ToggleControlsPlugin=function(slider){return new ToggleControls(slider)};class WheelControls{constructor(slider){this.slider=slider,this.position={x:0,y:0},this.wheelActive=!1,this.slider.on("created",(()=>{slider.container.addEventListener("wheel",this.eventWheel.bind(this),{passive:!1})}))}dispatch(e,name){this.position.x-=e.deltaX,this.position.y-=e.deltaY,this.slider.options.loop||(this.position.y<-this.slider.size/2?this.position.y=-this.slider.size/2:this.position.y>this.slider.size/2&&(this.position.y=this.slider.size/2)),this.slider.container.dispatchEvent(new CustomEvent(name,{detail:{x:this.position.x,y:this.position.y}}))}wheelStart(e){this.position={x:e.pageX,y:e.pageY},this.dispatch(e,"ksDragStart")}wheel(e){this.dispatch(e,"ksDrag")}wheelEnd(e){this.dispatch(e,"ksDragEnd"),Math.abs(e.deltaY)<500&&(e.deltaY<0?this.slider.prev():e.deltaY>0&&this.slider.next())}eventWheel(e){e.preventDefault(),this.wheelActive||(this.wheelStart(e),this.wheelActive=!0),this.wheel(e),clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout((()=>{this.wheelActive=!1,this.wheelEnd(e)}),100)}}const WheelControlsPlugin=function(slider){return new WheelControls(slider)};let AwfDateTimePicker=class AwfDateTimePicker extends lit.oi{set value(val){this._value=val?new Date(val):new Date,this.requestUpdate("value")}get value(){return this._value}constructor(){super(),this._value=new Date,this.is12HoursFormat=!0,this.inputRef=ref_e(),this.isPm=!1,this.subscriptions=new Subscription.w0,this.mutationObserver=new MutationObserver((()=>this.onOverlayOpen())),this.id||(this.id=`awf-date-time-picker-${(new Date).getTime()}`)}requestFocus(){this.datePicker.requestFocus()}connectedCallback(){super.connectedCallback(),this.mutationObserver.observe(this,{attributeFilter:["awf-overlay-open"]})}disconnectedCallback(){this.subscriptions.unsubscribe(),this.mutationObserver.disconnect(),super.disconnectedCallback()}firstUpdated(){this.initialValue=this.value,this.value||(this.value=new Date),this.instantiateSwipers(),this.subscriptions.add(awfTranslateService.onLangChange().subscribe((()=>this.setTimeformatDefault(!0)))),this.setTimeformatDefault(!1),this.updateSwippers()}updated(_changedProperties){_changedProperties.has("value")&&(this.setHours(this.value?.getHours()),this.setMinutes(this.value?.getMinutes())),(_changedProperties.has("min")||_changedProperties.has("max"))&&this.updateSwippers(),super.updated(_changedProperties)}setTimeformatDefault(update){const is12HoursTimeFormat=msg("is12hoursTimeFormat");this.is12HoursFormat="false"!==is12HoursTimeFormat,this.is12HoursFormat?this.inputRef.value.setAttribute("checked",""):this.inputRef.value.removeAttribute("checked"),update&&this.updateSwippers()}render(){return lit.dy`
            <div class="awf-date-time-picker">
                <awf-datepicker
                    class="awf-datepicker"
                    .value=${this.value}
                    .min=${this.min}
                    .max=${this.max}
                    @valuechange=${this.selectDate}
                ></awf-datepicker>
                <div class="time-selection">
                    <awf-toggle class="time-format-toggle">
                        <label for="${this.id}-checkbox">${when_n(this.is12HoursFormat,(()=>msg("12 hours")),(()=>msg("24 hours")))}</label>
                        <input id="${this.id}-checkbox" type="checkbox" ${ref_n(this.inputRef)} @change=${this.changeTimeFormat}>
                    </awf-toggle>
                    ${this.renderTimePicker()}
                </div>
                <div class="controls">
                    <awf-button @click=${this.reset}  aria-label="reset">
                        <awf-icon name="reset-24px"></awf-icon>
                    </awf-button>
                    <awf-button @click=${this.validate} aria-label="validate">
                        <awf-icon name="checkmark-24px"></awf-icon>
                    </awf-button>
                </div>
            </div>
        `}renderTimePicker(){const amPmStyles={display:this.is12HoursFormat?"block":"none"};return lit.dy`
        <div class="time-picker">
            <ul class="hours-picker">
                ${this.renderHours()}
            </ul>

            <ul class="minutes-picker">
                ${this.renderMinutes()}
            </ul>
            <ul class="am-pm-picker" style=${style_map_o(amPmStyles)}>
                <li class="item-am ${this.isPm?"":"selected"}">AM</li>
                <li class="item-pm ${this.isPm?"selected":""}">PM</li>
            </ul>
        </div>
        `}renderHours(){let hours=[];return hours=this.is12HoursFormat?range_o(1,13):range_o(24),lit.dy`${map_o(hours,(hour=>this.toListItem(toLeadingZeros(hour))))}`}renderMinutes(){return lit.dy`${map_o(range_o(60),(minute=>this.toListItem(toLeadingZeros(minute))))}`}toListItem(value){return lit.dy`<li class="item-${value}">${value}</li>`}changeTimeFormat(){this.is12HoursFormat=this.inputRef.value.checked;const currentValue=new Date(this.value);setTimeout((()=>{this.setHours(currentValue.getHours()),this.setMinutes(currentValue.getMinutes())}),5)}instantiateSwipers(){this.hoursSwipper=this.createKeenSlider(this.hoursWrapper,{callback:this.onHoursChange.bind(this)}),this.minutesSwipper=this.createKeenSlider(this.minutesWrapper,{callback:this.onMinutesChange.bind(this)}),this.amPmSwipper=this.createKeenSlider(this.amPmWrapper,{callback:this.onAmPmChange.bind(this),perView:2,loop:!1,origin:0,plugins:[ToggleControlsPlugin]}),this.setHours(this.value?.getHours()),this.setMinutes(this.value?.getMinutes())}createKeenSlider(container,options){const plugins=[WheelControlsPlugin,ClickControlsPlugin];return options.plugins&&plugins.push(...options.plugins),new y(container,{selector:"li",loop:void 0===options.loop||options.loop,renderMode:"performance",slides:{origin:options.origin||"center",perView:options.perView||7,spacing:0},vertical:!0,slideChanged:slider=>this.onSlideChanged(slider,options.callback)},plugins)}onSlideChanged(slider,callback){const selectedElmts=slider.container.getElementsByClassName("selected");Array.from(selectedElmts).forEach((item=>item.classList.remove("selected"))),slider.update();slider.slides[slider.track.details.rel].classList.add("selected"),callback(slider.track.details.rel)}selectDate(event){const date=event.detail;this.value.setDate(date.getDate()),this.value.setMonth(date.getMonth()),this.value.setFullYear(date.getFullYear()),this.value.setSeconds(0),event.stopPropagation()}onHoursChange(idx){let hours=idx;this.is12HoursFormat&&(hours+=1,this.isPm&&hours<12?hours+=12:this.isPm||12!==hours||(hours=0)),this.value.setHours(hours),this.updateSwippers()}setHours(hours){let idx=hours;this.is12HoursFormat&&(this.isPm=hours>=12,hours>=12?this.amPmSwipper?.moveToIdx(1,!0,{duration:0}):this.amPmSwipper?.moveToIdx(0,!0,{duration:0}),idx=(hours%12||12)-1),this.hoursSwipper?.moveToIdx(idx,!0,{duration:0})}setMinutes(minutes){this.minutesSwipper?.moveToIdx(minutes,!0,{duration:0})}onMinutesChange(minutes){this.value.setMinutes(minutes),this.updateSwippers()}onAmPmChange(index){this.isPm=index>0,this.onHoursChange(this.hoursSwipper.track.details.rel),this.updateSwippers()}reset(){this.value=this.initialValue??new Date}validate(){this.dispatchEvent(createCustomEvent("valuechange",this.value))}onOverlayOpen(){this.hasAttribute("awf-overlay-open")&&this.updateSwippers()}updateSwippers(){setTimeout((()=>{this.hoursSwipper?.update(),this.minutesSwipper?.update(),this.amPmSwipper?.update()}),0)}};AwfDateTimePicker.styles=[COMMON_STYLES,DATE_PICKER_CSS_VARIABLES,DATE_TIME_PICKER_CSS_VARIABLES,DATE_TIME_PICKER_STYLES],(0,tslib_es6.gn)([(0,decorators.Cb)()],AwfDateTimePicker.prototype,"value",null),(0,tslib_es6.gn)([(0,decorators.Cb)()],AwfDateTimePicker.prototype,"min",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)()],AwfDateTimePicker.prototype,"max",void 0),(0,tslib_es6.gn)([(0,decorators.SB)()],AwfDateTimePicker.prototype,"is12HoursFormat",void 0),(0,tslib_es6.gn)([(0,decorators.IO)("awf-datepicker")],AwfDateTimePicker.prototype,"datePicker",void 0),(0,tslib_es6.gn)([(0,decorators.IO)(".hours-picker")],AwfDateTimePicker.prototype,"hoursWrapper",void 0),(0,tslib_es6.gn)([(0,decorators.IO)(".minutes-picker")],AwfDateTimePicker.prototype,"minutesWrapper",void 0),(0,tslib_es6.gn)([(0,decorators.IO)(".am-pm-picker")],AwfDateTimePicker.prototype,"amPmWrapper",void 0),AwfDateTimePicker=(0,tslib_es6.gn)([localized(),(0,awf_custom_element.M)("awf-date-time-picker",!0)],AwfDateTimePicker);var calendar=__webpack_require__("./node_modules/@agilent/web-icons/core/calendar.js");const CLEAR_BUTTON_CSS_VARIABLES=lit.iv`
    :host {
        --awf-clear-button-size-inner: var(--awf-clear-button-size, 12px);
        --awf-clear-button-hover-bg-color-inner: var(--awf-clear-button-hover-bg-color, var(--awf-state-hover-background));
        --awf-clear-button-active-bg-color-inner: var(--awf-clear-button-active-bg-color, var(--awf-state-selected-background));
    }
`,CLEAR_BUTTON_STYLE=lit.iv`
    :host {
        --awf-icon-size: var(--awf-clear-button-size-inner);
        --awf-icon-color: var(--at-dark-navy);

        visibility: hidden;
    }

    :host([visible]) {
        visibility: visible;
    }

    .clear-button {
        align-items: center;
        background-color: transparent;
        border: solid 1px transparent;
        border-radius: 50%;
        display: flex;
        padding: 2px;
    }

    .clear-button:hover {
        background-color: var(--awf-clear-button-hover-bg-color-inner);
        fill: white;
        cursor: pointer;
    }

    .clear-button:active {
        background-color: var(--awf-clear-button-active-bg-color-inner);
    }

    .clear-button:focus {
        border: solid 1px var(--awf-state-focused-border);
    }

    .clear-button:focus-visible {
        outline: none;
    }

    awf-icon {
        min-height: var(--awf-clear-button-size-inner);
        min-width: var(--awf-clear-button-size-inner);
    }

    svg {
        background-color: transparent;
        fill: currentcolor;
        height: var(--awf-clear-button-size-inner);
        width: var(--awf-clear-button-size-inner);
    }
`;let AwfClearButton=class AwfClearButton extends lit.oi{constructor(){super(...arguments),this.tooltipRef=ref_e()}disconnectedCallback(){this.tooltipRef.value?.hideTooltip(),this.tooltipRef.value?.remove(),super.disconnectedCallback()}render(){return lit.dy`
            <button id="clearButton" class="clear-button" aria-label=${this.tooltipText?this.tooltipText:msg("Clear")}>
                <awf-icon raw=${delete_cross.C}></awf-icon>
            </button>
            <awf-tooltip
                ${ref_n(this.tooltipRef)}
                tip
                trigger="clearButton"
                message=${this.tooltipText?this.tooltipText:msg("Clear")}
                appendToBody
            ></awf-tooltip>
        `}};AwfClearButton.styles=[CLEAR_BUTTON_CSS_VARIABLES,CLEAR_BUTTON_STYLE],(0,tslib_es6.gn)([(0,decorators.Cb)()],AwfClearButton.prototype,"tooltipText",void 0),AwfClearButton=(0,tslib_es6.gn)([localized(),(0,awf_custom_element.M)("awf-clear-button",!0)],AwfClearButton);const INPUT_DATE_CSS_VARIABLES=lit.iv`
    :host {
        --awf-input-date-calendar-display-inner: var(--awf-input-date-calendar-display, inline-block);
    }
`,INPUT_DATE_STYLE=lit.iv`

    ::slotted(input) {
        grid-area: input;
        width: var(--awf-input-width, 126px);
    }

    span {
        align-items: center;
        display: flex;
        padding: 0;
    }

    .calendar-button {
        display: var(--awf-input-date-calendar-display-inner);
        --awf-button-height: calc(var(--awf-input-height-inner) - 2px);
        --awf-icon-color: var(--at-dark-navy);
    }

    awf-clear-button {
        display: inline-flex;
        margin-right: 8px;
    }

    awf-input {
        width: auto;
    }

    awf-clear-button[required] {
        display: none;
    }
`;let AwfInputDate=class AwfInputDate extends lit.oi{get field(){return this.slottedInputs[0]}get value(){return dateUtil.parseDate(this.field?.value)||void 0}set value(value){this.field&&(this.field.value=dateUtil.formatDate(value))}constructor(){super(),this.labelPosition=LabelPosition.Top,this.messageBelow=!1,this.appendToBody=!1,this.hasForm=!1,this.clearButtonVisible=!1,this.disabled=!1,this.required=!1,this._onInputChange=this.onInputChange.bind(this),this._onInputFocus=this.onInputFocus.bind(this),this._onInputKeydown=this.onInputKeydown.bind(this),this._onInputTyped=this.onInputTyped.bind(this),this._onDateSelected=this.onDateSelected.bind(this),this.mutationObserver=new MutationObserver(this.onInputAttributeChange.bind(this)),this.formValidationController=new FormValidationController(this),this.datepickerRef=ref_e(),this.overlayRef=ref_e(),this.showDateFormat=!1,this.eventDispatched=!1,new ElementStyleController(this,[PLACEHOLDER_STYLE])}formAssociatedCallback(form){this.formValidationController.formAssociatedCallback(form)}connectedCallback(){super.connectedCallback(),this.subscription=awfTranslateService.onLangChange().subscribe((()=>{this.showDateFormat&&(this.field.placeholder=msg("yyyy-mm-dd"))}))}disconnectedCallback(){super.disconnectedCallback(),this.field?.removeEventListener("change",this._onInputChange),this.field?.removeEventListener("focus",this._onInputFocus),this.field?.removeEventListener("keydown",this._onInputKeydown),this.field?.removeEventListener("input",this._onInputTyped),this.subscription?.unsubscribe()}validateValue(){let pass=this.awfInput.validateValue();pass&&this.field.value&&!dateUtil.validateDateFormat(this.field.value)&&(this.setInternalMessage(MessageLevel.ERROR,msg("Invalid date format (yyyy-mm-dd)")),pass=!1);const date=dateUtil.parseDate(this.field.value);return pass&&date&&!this.checkMinDate(date)&&(this.setInternalMessage(MessageLevel.ERROR,msg(str`The value must be higher than or equal to ${dateUtil.formatDate(this.min)}`)),pass=!1),pass&&date&&!this.checkMaxDate(date)&&(this.setInternalMessage(MessageLevel.ERROR,msg(str`The value must be less than or equal to ${dateUtil.formatDate(this.max)}`)),pass=!1),pass}setInternalMessage(level,message){this.awfInput.setInternalMessage(level,message)}clearInternalErrorMessage(){this.awfInput.clearInternalErrorMessage()}render(){return lit.dy`
            <awf-input
                labelPosition=${this.labelPosition||LabelPosition.Top}
                novalidate
                @mouseenter=${this.onMouseEnter}
                @mouseleave=${this.onMouseLeave}
                ?messageBelow=${this.messageBelow}
            >
                <slot name="label" slot="label"></slot>
                <slot></slot>
                <slot name="error" slot="error"></slot>
                <slot name="warning" slot="warning"></slot>
                <span slot="suffix">
                    <awf-clear-button
                        ?visible=${this.clearButtonVisible&&!this.required&&!this.disabled}
                        ?required=${this.required}
                        @click=${this.clear}
                        @keydown=${this.onClearButtonKeydown}
                    ></awf-clear-button>
                    <awf-button
                        class="calendar-button"
                        ?disabled=${this.disabled}
                        @click=${this.toggleDatepicker}
                        @keydown=${this.onCalendarIconKeydown}
                        aria-label="calendar"
                    >
                        <awf-icon raw=${calendar.Y}></awf-icon>
                    </awf-button>
                </span>
            </awf-input>
            <awf-overlay
                manualToggle
                offset="1"
                placement="bottom-start"
                ?appendToBody=${this.appendToBody}
                @open=${this.onOpen}
                @close=${this.onClose}
                ${ref_n(this.overlayRef)}
            >
                <awf-datepicker
                    .value=${this.value||new Date}
                    .min=${this.min}
                    .max=${this.max}
                    ${ref_n(this.datepickerRef)}
                ></awf-datepicker>
            </awf-overlay>
        `}firstUpdated(_changedProperties){const[input]=this.slottedInputs;if(!input)throw new Error("Input not found!");input.type="text",input.placeholder||(input.placeholder=msg("yyyy-mm-dd"),this.showDateFormat=!0),input.addEventListener("change",this._onInputChange),input.addEventListener("focus",this._onInputFocus),input.addEventListener("keydown",this._onInputKeydown),input.addEventListener("input",this._onInputTyped),this.onInputAttributeChange(),this.mutationObserver.disconnect(),this.mutationObserver.observe(this.field,{attributeFilter:["disabled","required"]}),this.datepickerRef.value?.addEventListener(AwfEvent.VALUE_CHANGE,this._onDateSelected)}updated(_changedProperties){(_changedProperties.has("min")||_changedProperties.has("max"))&&this.validateValue()&&this.clearInternalErrorMessage()}onInputChange(){this.eventDispatched||this.dispatchEvent(createCustomEvent(AwfEvent.VALUE_CHANGE,this.value))}onInputTyped(){this.eventDispatched=!1;const date=this.value;!date&&this.field.value||(this.dispatchEvent(createCustomEvent(AwfEvent.VALUE_CHANGE,date)),this.eventDispatched=!0)}clear(){this.eventDispatched=!1,this.field.value="",this.clearButtonVisible=!1,this.field.focus(),this.validateValue()&&this.clearInternalErrorMessage()}onInputAttributeChange(){this.disabled=this.field.disabled,this.required=this.field.required}onDateSelected(event){this.eventDispatched=!this.appendToBody,this.value=event.detail,this.overlayRef.value?.hide()}toggleDatepicker(event){!this.disabled&&this.overlayRef.value&&(this.overlayRef.value.refElement=this.field,this.overlayRef.value.toggle()),event.stopImmediatePropagation()}onInputFocus(){this.overlayRef.value?.hide()}checkMaxDate(date){return!this.max||dateUtil.compareDates(date,this.max)<=0}checkMinDate(date){return!this.min||dateUtil.compareDates(date,this.min)>=0}onMouseEnter(){this.field.required||this.field.disabled||!this.field.value||(this.clearButtonVisible=!0)}onMouseLeave(){this.clearButtonVisible=!1}onInputKeydown(event){"Tab"===event.code&&this.field.value&&(this.clearButtonVisible=!0)}onClearButtonKeydown(event){"Tab"===event.code&&(this.clearButtonVisible=!1)}onCalendarIconKeydown(event){"ArrowDown"===event.code?this.overlayRef.value?.toggle():"Tab"===event.code&&event.shiftKey&&this.field.value&&(this.clearButtonVisible=!0)}onOpen(){this.calendarIcon.classList.add("activated"),setTimeout((()=>{this.datepickerRef.value?.requestFocus(),this.field.classList.add("slotted-input-hidden")}),100)}onClose(){this.calendarIcon.classList.remove("activated"),setTimeout((()=>{this.field.classList.remove("slotted-input-hidden"),this.calendarIcon.requestFocus()}),100)}};AwfInputDate.styles=[COMMON_STYLES,INPUT_CSS_VARIABLES,INPUT_DATE_CSS_VARIABLES,INPUT_DATE_STYLE],AwfInputDate.formAssociated=!0,(0,tslib_es6.gn)([(0,decorators.Cb)()],AwfInputDate.prototype,"labelPosition",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)()],AwfInputDate.prototype,"min",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)()],AwfInputDate.prototype,"max",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)({type:Boolean})],AwfInputDate.prototype,"messageBelow",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)({type:Boolean})],AwfInputDate.prototype,"appendToBody",void 0),(0,tslib_es6.gn)([(0,decorators.IO)("awf-input")],AwfInputDate.prototype,"awfInput",void 0),(0,tslib_es6.gn)([(0,decorators.IO)("awf-button.calendar-button")],AwfInputDate.prototype,"calendarIcon",void 0),(0,tslib_es6.gn)([(0,decorators.NH)({selector:"input",flatten:!0})],AwfInputDate.prototype,"slottedInputs",void 0),(0,tslib_es6.gn)([(0,decorators.SB)()],AwfInputDate.prototype,"clearButtonVisible",void 0),(0,tslib_es6.gn)([(0,decorators.SB)()],AwfInputDate.prototype,"disabled",void 0),(0,tslib_es6.gn)([(0,decorators.SB)()],AwfInputDate.prototype,"required",void 0),AwfInputDate=(0,tslib_es6.gn)([localized(),(0,awf_custom_element.M)("awf-input-date",!0)],AwfInputDate);const INPUT_DATE_RANGE_STYLES=lit.iv`
    :host {
        --awf-input-date-calendar-display: none;
    }

    .awf-layout {
        width: fit-content;
        align-items: end;
        height: fit-content;
        display: grid;
        grid-auto-flow: column;
        column-gap: 5px;
    }

    awf-overlay {
        padding: 0px;
    }
`;let AwfInputDateRange=class AwfInputDateRange extends lit.oi{constructor(){super(),this.labelPosition=LabelPosition.Top,this.appendToBody=!1,this.awfDateRangePickerRef=ref_e();new ElementStyleController(this,[PLACEHOLDER_STYLE,"\n            :not([labelPosition='left']) > input.slotted-input:not(:focus-within)::placeholder {\n                visibility: hidden;\n            }\n        "])}connectedCallback(){super.connectedCallback(),this.subscription=awfTranslateService.onLangChange().subscribe((()=>{this.shadowRoot.querySelector("label[for=input-from]").innerHTML=msg("From"),this.shadowRoot.querySelector("label[for=input-to]").innerHTML=msg("To")}))}disconnectedCallback(){super.disconnectedCallback(),this.subscription.unsubscribe()}render(){return lit.dy`
            <div class="awf-layout" id="overlayAnchor">
                <awf-input-date
                    class="awf-from-input"
                    labelPosition=${this.labelPosition}
                    @valuechange=${this.onStartDateChange}
                    .max=${this.endDate}
                >
                    <slot name="from"></slot>
                    <label slot="label" for="input-from"></label>
                </awf-input-date>
                <awf-input-date
                    class="awf-to-input"
                    labelPosition=${this.labelPosition}
                    @valuechange=${this.onEndDateChange}
                    .min=${this.startDate}
                >
                    <slot name="to"></slot>
                    <label slot="label" for="input-to"></label>
                </awf-input-date>
                <awf-button
                    class="awf-calendar-button"
                    @click=${this.toggleDateRangePicker}
                    @keydown=${this.onIconKeydown}
                    aria-label="open calendar"
                >
                    <awf-icon raw=${calendar.Y}></awf-icon>
                </awf-button>
            </div>
            <awf-overlay
                ?appendToBody=${this.appendToBody}
                manualToggle
                offset="-51"
                placement="bottom-start"
                style="padding: 0"
                trigger="overlayAnchor"
                @open=${this.onDateRangePickerOpen}
            >
                <awf-date-range-picker @valuechange=${this.onDatesSelected} ${ref_n(this.awfDateRangePickerRef)}></awf-date-range-picker>
            </awf-overlay>
        `}firstUpdated(_changedProperties){var _this=this;return(0,asyncToGenerator.Z)((function*(){const[fromInput]=_this.fromInput,[toInput]=_this.toInput;if(!fromInput||!toInput)throw new Error("Input not found!");fromInput.id="input-from",fromInput.ariaLabel="input from",toInput.id="input-to",toInput.ariaLabel="input to",_this.shadowRoot.querySelector("label[for=input-from]").innerHTML=msg("From"),_this.shadowRoot.querySelector("label[for=input-to]").innerHTML=msg("To"),yield _this.updateComplete,fromInput.value&&(_this.startDate=dateUtil.parseDate(fromInput.value)),toInput.value&&(_this.endDate=dateUtil.parseDate(toInput.value))}))()}updated(_changedProperties){(_changedProperties.has("startDate")||_changedProperties.has("endDate"))&&(this.toAwfInput.validateValue()&&this.toAwfInput.clearInternalErrorMessage(),this.fromAwfInput.validateValue()&&this.fromAwfInput.clearInternalErrorMessage())}toggleDateRangePicker(){this.awfOverlay.toggle()}onDatesSelected(event){this.awfOverlay.hide(),this.startDate=event.detail.startDate,this.endDate=event.detail.endDate,this.fromAwfInput.value=this.startDate,this.toAwfInput.value=this.endDate,event.stopPropagation(),this.dispatchValuechange()}onStartDateChange(event){this.startDate=event.detail,event.stopPropagation(),this.dispatchValuechange()}onEndDateChange(event){this.endDate=event.detail,event.stopPropagation(),this.dispatchValuechange()}dispatchValuechange(){this.dispatchEvent(createCustomEvent(AwfEvent.VALUE_CHANGE,{startDate:this.startDate,endDate:this.endDate}))}onDateRangePickerOpen(){if(this.awfDateRangePickerRef.value){const today=new Date;this.awfDateRangePickerRef.value.startDate=this.startDate||new Date(today.getFullYear(),today.getMonth(),today.getDate()),this.startDate&&this.endDate&&this.startDate.getTime()<this.endDate.getTime()?this.awfDateRangePickerRef.value.endDate=this.endDate:this.awfDateRangePickerRef.value.endDate=void 0,this.awfDateRangePickerRef.value.fromTabSelected=!this.startDate,this.awfDateRangePickerRef.value.style.setProperty("--awf-drp-width",this.awfLayout.getBoundingClientRect().width+"px"),this.awfDateRangePickerRef.value.requestFocus(),setTimeout((()=>this.calendarIcon.classList.remove("activated")),100)}}onIconKeydown(event){var _this2=this;return(0,asyncToGenerator.Z)((function*(){"ArrowDown"===event.code&&_this2.awfOverlay.show()}))()}};AwfInputDateRange.styles=[COMMON_STYLES,INPUT_CSS_VARIABLES,INPUT_DATE_RANGE_STYLES],(0,tslib_es6.gn)([(0,decorators.Cb)()],AwfInputDateRange.prototype,"labelPosition",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)({type:Boolean})],AwfInputDateRange.prototype,"appendToBody",void 0),(0,tslib_es6.gn)([(0,decorators.SB)()],AwfInputDateRange.prototype,"startDate",void 0),(0,tslib_es6.gn)([(0,decorators.SB)()],AwfInputDateRange.prototype,"endDate",void 0),(0,tslib_es6.gn)([(0,decorators.IO)("awf-overlay")],AwfInputDateRange.prototype,"awfOverlay",void 0),(0,tslib_es6.gn)([(0,decorators.IO)("awf-input-date.awf-from-input")],AwfInputDateRange.prototype,"fromAwfInput",void 0),(0,tslib_es6.gn)([(0,decorators.IO)("awf-input-date.awf-to-input")],AwfInputDateRange.prototype,"toAwfInput",void 0),(0,tslib_es6.gn)([(0,decorators.IO)(".awf-layout")],AwfInputDateRange.prototype,"awfLayout",void 0),(0,tslib_es6.gn)([(0,decorators.IO)("awf-button.awf-calendar-button")],AwfInputDateRange.prototype,"calendarIcon",void 0),(0,tslib_es6.gn)([(0,decorators.NH)({slot:"from",selector:"input",flatten:!0})],AwfInputDateRange.prototype,"fromInput",void 0),(0,tslib_es6.gn)([(0,decorators.NH)({slot:"to",selector:"input",flatten:!0})],AwfInputDateRange.prototype,"toInput",void 0),AwfInputDateRange=(0,tslib_es6.gn)([localized(),(0,awf_custom_element.M)("awf-input-date-range",!0)],AwfInputDateRange);const SELECT_DROPDOWN_CSS_VARIABLES=lit.iv`
    :host {
        --awf-dropdown-padding-ud-inner: var(--awf-dropdown-padding-ud, 5px);
        --awf-dropdown-padding-lr-inner: var(--awf-dropdown-padding-lr, 12px);
    }
`,SELECT_DROPDOWN_STYLES=lit.iv`
    awf-overlay {
        border: 1px solid var(--at-gray);
        box-sizing: border-box;
        filter: unset;
        padding: 0;
        margin-left:-1px;
        --awf-checklist-max-height: 0;
    }

    awf-list-option {
        border: 1px solid transparent;
        cursor: pointer;
        padding: var(--awf-dropdown-padding-ud-inner) var(--awf-dropdown-padding-lr-inner);
        user-select: none;
    }

    awf-list-option[disabled] {
        cursor: not-allowed;
    }

    awf-list-option[focused] {
        background-color: var(--awf-state-hover-background);
    }

    awf-overlay[keyboard-navigation] awf-list-option[focused] {
        border-color: var(--at-blue-shade);
    }

    awf-overlay[keyboard-navigation] awf-list-option[focused]:not([selected]) {
        background-color: transparent;
    }

    awf-checklist {
        max-height: var(--awf-checklist-max-height);
        overflow-y: auto;
    }
`;let AwfSelectDropdown=class AwfSelectDropdown extends lit.oi{constructor(){super(...arguments),this.appendToBody=!1,this.placement="auto",this.overlayRef=ref_e(),this.checklistRef=ref_e()}moveListOptions(){this.querySelectorAll("awf-list-option").forEach((element=>this.checklist?.appendChild(element)))}render(){return lit.dy`
            <awf-overlay manualToggle offset="-1" placement=${this.placement} ${ref_n(this.overlayRef)}>
                <awf-checklist noDeselect ${ref_n(this.checklistRef)} class="no-separation-border"> </awf-checklist>
            </awf-overlay>
        `}firstUpdated(_changedProperties){this.moveListOptions()}};var SelectMode;AwfSelectDropdown.styles=[COMMON_STYLES,SELECT_DROPDOWN_CSS_VARIABLES,SELECT_DROPDOWN_STYLES],(0,tslib_es6.gn)([(0,decorators.Cb)({type:Boolean,reflect:!0})],AwfSelectDropdown.prototype,"appendToBody",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)({type:String,reflect:!0})],AwfSelectDropdown.prototype,"placement",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)()],AwfSelectDropdown.prototype,"focusedOption",void 0),(0,tslib_es6.gn)([(0,decorators.IO)("awf-overlay")],AwfSelectDropdown.prototype,"overlay",void 0),(0,tslib_es6.gn)([(0,decorators.IO)("awf-checklist")],AwfSelectDropdown.prototype,"checklist",void 0),(0,tslib_es6.gn)([(0,decorators.Kt)("awf-list-option")],AwfSelectDropdown.prototype,"options",void 0),AwfSelectDropdown=(0,tslib_es6.gn)([(0,awf_custom_element.M)("awf-select-dropdown",!0)],AwfSelectDropdown),function(SelectMode){SelectMode.DEFAULT="default",SelectMode.SEARCH="search",SelectMode.FREE_TEXT="freetext"}(SelectMode||(SelectMode={}));const SELECT_STYLES=lit.iv`
    :host {
        --awf-select-input-cursor: default;
    }

    :host([mode=freetext]) {
        --awf-select-input-cursor: text;
    }

    :host([mode=search]) {
        --awf-select-input-cursor: text;
    }

    :host([readonly]),
    :host([readonly][mode]),
    :host([disabled]),
    :host([disabled][mode]) {
        --awf-select-input-cursor: not-allowed;
    }

    :host input {
        cursor: var(--awf-select-input-cursor);
    }

    awf-input:not([disabled]):not([readonly]):not([warning]):not([error]):hover {
        --awf-input-background-color: var(--awf-state-hover-background);
    }

    :host(:not([mode=freetext]):not([mode=search])) input {
        color: transparent;
        text-shadow: 0 0 0 var(--awf-input-font-color-inner);
    }

    :host(:not([mode=freetext])) awf-input[stateDropdownOpened] input {
        text-shadow: 0 0 0 var(--awf-input-disabled-font-color-inner);
    }

    span[slot='suffix'] {
        align-items: center;
        display: flex;
    }
    :host([readonly]) span[slot='suffix'] {
        visibility: hidden;
    }

    ::slotted([slot='error']),
    ::slotted([slot='warning']) {
        display: block;
        line-height: 0.875rem;
    }

    awf-icon {
        --awf-icon-color: var(--awf-input-font-color-inner);
    }

    :host(:not([disabled]):not([readonly])) awf-icon {
        cursor: pointer;
    }

    awf-input[error] awf-icon {
        --awf-icon-color: var(--awf-input-rest-font-color-inner);
    }

    awf-icon[hidden] {
        display: none;
    }
`;let AwfSelect=class AwfSelect extends lit.oi{get field(){return this.htmlInputElement}get label(){if(this.awfInput)return this.awfInput.slottedLabel[0]}get actualAwfListOptions(){return Array.from(this.dropdown?.options||[])}get selectedAwfListOption(){return this.actualAwfListOptions.find((option=>option.selected))}get dropdown(){return this.dropdownRef.value}constructor(){super(),this.appendToBody=!1,this.mode=SelectMode.DEFAULT,this.labelPosition=LabelPosition.Top,this.placement="auto",this.messageBelow=!1,this.disabled=!1,this.readonly=!1,this.required=!1,this.placeholder="",this.hasForm=!1,this.addItem=new AwfListOption,this.noItemFound=new AwfListOption,this.formValidationController=new FormValidationController(this),this.dropdownRef=ref_e(),this.stateDropdownOpened=!1,this.clearButtonVisible=!1,this.mutationObserver=new MutationObserver(this.onChildListChanged.bind(this)),this.addItem.value="#@AddItem@#",this.addItem.noCheckbox=!0,this.addItem.id="addItemOption",this.noItemFound.value="#@NoItemFound@#",this.noItemFound.noCheckbox=!0,this.noItemFound.id="noItemFound",this.noItemFound.disabled=!0}connectedCallback(){super.connectedCallback(),this.addEventListener("focusin",this.onFocusIn),this.addEventListener("focusout",this.onFocusOut),this.addEventListener("mouseenter",this.onMouseEnter),this.addEventListener("mouseleave",this.onMouseLeave),this.mutationObserver.observe(this,{childList:!0})}disconnectCallback(){super.disconnectedCallback(),this.removeEventListener("focusin",this.onFocusIn),this.removeEventListener("focusout",this.onFocusOut),this.removeEventListener("mouseenter",this.onMouseEnter),this.removeEventListener("mouseleave",this.onMouseLeave),this.mutationObserver.disconnect()}render(){return lit.dy`
            <awf-input
                @click=${this.toggleOverlay}
                labelPosition=${this.labelPosition}
                ?messageBelow=${this.messageBelow}
                ?stateDropdownOpened=${this.stateDropdownOpened}
            >
                <slot name="label" slot="label"></slot>
                <input
                    type="text"
                    placeholder=${this.placeholder}
                    ?disabled=${this.disabled}
                    ?readonly=${this.readonly}
                    ?required=${this.required}
                    @keydown=${this.onKeyDown}
                    @keyup=${this.onKeyUp}
                    aria-label=${this.label?.textContent||"Select input"}
                />
                <span slot="suffix">
                    <awf-clear-button
                        ?visible=${this.clearButtonVisible&&!this.required&&!this.disabled&&!this.readonly}
                        @click=${this.clearValue}
                    >
                    </awf-clear-button>
                    <awf-icon id="expandIcon" raw=${drop_down_more_details_column_descending.$} ?hidden=${this.stateDropdownOpened}></awf-icon>
                    <awf-icon id="collapseIcon" raw=${less_details_column_ascending.e} ?hidden=${!this.stateDropdownOpened}></awf-icon>
                </span>
                <slot name="error" slot="error"></slot>
                <slot name="warning" slot="warning"></slot>
            </awf-input>
            <awf-select-dropdown
                placement=${this.placement}
                ?appendToBody=${this.appendToBody}
                .focusedOption=${this.focusedOption}
                @close=${this.onOverlayClose}
                @open=${this.onOverlayOpen}
                @valuechange=${this.onValueChange}
                @click=${this.onChecklistClick}
                @keyup=${()=>this.dropdown?.overlay.setAttribute("keyboard-navigation","")}
                ${ref_n(this.dropdownRef)}>
                ${c(Array.from(this.querySelectorAll("option")),(option=>option.value),this.renderOption.bind(this))}
            </awf-select-dropdown>
        `}firstUpdated(_changedProperties){this.dropdown&&this.appendToBody&&document.body.appendChild(this.dropdown)}updated(_changedProperties){if(this.dropdown?.moveListOptions(),_changedProperties.has("value")){const selectedOption=this.actualAwfListOptions.map((option=>(option.selected=option.value===this.value,option))).find((option=>option.selected));this.field.value=selectedOption?.textContent||""}_changedProperties.has("appendToBody")&&this.dropdown&&(this.appendToBody?document.body.appendChild(this.dropdown):this.shadowRoot?.appendChild(this.dropdown)),this.dropdown?.overlay&&(_changedProperties.has("disabled")||_changedProperties.has("readonly"))&&(this.dropdown.overlay.disabled=this.field.disabled||this.field.readOnly)}validateValue(){return this.awfInput.validateValue()}setInternalMessage(level,message){this.awfInput.setInternalMessage(level,message)}clearInternalErrorMessage(){this.awfInput.clearInternalErrorMessage()}formAssociatedCallback(form){this.formValidationController.formAssociatedCallback(form)}toggleOverlay(event){!this.disabled&&this.dropdown?.overlay&&(this.dropdown.overlay.refElement=this.field,this.dropdown.overlay.toggle()),event.stopImmediatePropagation()}showOverlay(){this.dropdown?.overlay&&(this.dropdown.overlay.refElement=this.field,this.dropdown.overlay.show())}clearValue(event){this.value=null,this.field.value="",this.clearButtonVisible=!1,this.dispatchEvent(new CustomEvent(AwfEvent.VALUE_CHANGE,{bubbles:!0,detail:this.value})),event.stopImmediatePropagation()}onChecklistClick(){this.dropdown?.overlay.open||this.field.focus()}onOverlayClose(){if(this.stateDropdownOpened=!1,this.field.value||this.actualAwfListOptions.forEach((option=>option.selected=!1)),this.value){const selectedOption=Array.from(this.querySelectorAll("option")).find((option=>option.value===this.value));this.field.value=selectedOption?.textContent||"",selectedOption&&(selectedOption.selected=!0)}else this.field.value="";this.addItem.remove(),this.addItem.removeAttribute("focused"),this.noItemFound.remove(),this.dropdown?.overlay.removeAttribute("keyboard-navigation"),this.clearFilter(),this.dropdown?.overlay.style.setProperty("--awf-checklist-max-height","0")}onOverlayOpen(){this.setPlacement(),this.forceLabelPositionComputing(),this.stateDropdownOpened=!0,this.clearInternalErrorMessage(),this.resizeOverlay(),setTimeout((()=>this.chooseFocusedElement().focus()))}setPlacement(){switch(this.placement){case"top":case"top-start":this.placement="top-start";break;case"bottom":case"bottom-start":this.placement="bottom-start";break;default:this.placement="auto",this.dropdown?.overlay&&(this.dropdown.overlay.defaultPlacement="bottom-start")}}forceLabelPositionComputing(){this.awfInput.dispatchEvent(new Event("focusin",{bubbles:!0}))}resizeOverlay(){let width=this.awfInput.getBoundingClientRect().width;this.labelPosition===LabelPosition.Left&&(width-=this.label?.getBoundingClientRect().width||0),this.dropdown?.overlay&&(this.dropdown.overlay.style.width=`${width}px`)}chooseFocusedElement(){this.focusedOption=this.selectedAwfListOption||this.actualAwfListOptions[0];let el=null;return this.mode===SelectMode.DEFAULT&&(el=this.focusedOption),el||(el=this.field),el}onMouseEnter(){this.clearButtonVisible=!!this.value}onMouseLeave(){this.clearButtonVisible=!1}onFocusIn(){this.label?.setAttribute(`${FLOATING_FORCED_ATTR}`,""),this.clearButtonVisible=!!this.value}onFocusOut(){this.label?.removeAttribute(`${FLOATING_FORCED_ATTR}`),this.clearButtonVisible=!1}onKeyDown(event){"Tab"!==event.key&&(event.stopPropagation(),this.mode===SelectMode.DEFAULT&&event.preventDefault())}onKeyUp(event){"Tab"!==event.key&&(event.stopPropagation(),this.mode===SelectMode.DEFAULT&&event.preventDefault()),["Enter"].includes(event.key)?this.dropdown?.overlay.open?(this.dropdown.checklist?.handleKeyUp(event),this.dropdown.overlay.hide()):this.showOverlay():["ArrowDown","ArrowUp"].includes(event.key)?this.dropdown?.overlay.open&&this.mode!==SelectMode.DEFAULT?(this.dropdown.overlay?.setAttribute("keyboard-navigation",""),this.dropdown.checklist?.handleKeyUp(event),this.field.focus()):this.showOverlay():1!==event.key.length&&"Backspace"!==event.key||this.onCharacterTyped()}onCharacterTyped(){this.mode===SelectMode.SEARCH?this.handleSearchMode():this.mode===SelectMode.FREE_TEXT&&this.handleFreeText()}handleFreeText(){this.showOverlay();const existingOption=this.actualAwfListOptions.find((option=>option.textContent===this.field.value));existingOption?(this.filterOptions(),this.focusedOption=existingOption,this.addItem.removeAttribute("focused"),this.addItem.remove()):this.field.value?(this.filterOptions(),this.shadowRoot?.querySelectorAll("awf-list-option").forEach((option=>{option.focused=!1})),this.dropdown?.overlay.removeAttribute("keyboard-navigation"),this.addItem.innerText=msg(str`Add item "${this.field.value}"`),this.addItem.setAttribute("focused",""),this.dropdown?.checklist.appendChild(this.addItem),this.focusedOption=this.addItem):(this.clearFilter(),this.addItem.removeAttribute("focused"),this.addItem.remove(),this.focusedOption=void 0,this.value=void 0)}handleSearchMode(){this.showOverlay(),this.filterOptions();const firstMatch=this.actualAwfListOptions.find((option=>option!==this.noItemFound&&!option.hidden));firstMatch?(this.noItemFound.remove(),this.actualAwfListOptions.forEach((option=>option.focused=!1)),firstMatch.focused=!0,this.focusedOption=firstMatch):(this.noItemFound.innerText=msg("No item found"),this.dropdown?.checklist.appendChild(this.noItemFound))}filterOptions(){this.dropdown?.checklist?.querySelectorAll("awf-list-option:not(#addItemOption):not(#noItemFound)").forEach((option=>{option.hidden=!option.textContent?.includes(this.field.value)}))}clearFilter(){this.dropdown?.checklist.querySelectorAll("awf-list-option[hidden]").forEach((option=>option.hidden=!1))}onValueChange(event){event.stopPropagation(),this.valueSelected(event.detail),this.dropdown?.overlay.hide()}valueSelected(value){this.value=value,this.mode===SelectMode.FREE_TEXT&&this.addItem.value===value&&(this.value=this.addNewOption().value,this.addItem.selected=!1,this.addItem.remove());const selected=Array.from(this.querySelectorAll("option")).find((option=>option.value===this.value));selected?this.field.value=selected.text:(this.field.value="",this.value=null),this.validateValue(),this.dispatchEvent(new CustomEvent(AwfEvent.VALUE_CHANGE,{detail:this.value})),this.dispatchEvent(new Event("change"))}addNewOption(){const option=document.createElement("option");return option.value=this.field.value,option.text=this.field.value,this.appendChild(option),this.dispatchEvent(new CustomEvent(AwfEvent.ADD_VALUE,{detail:this.field.value})),option}isFocused(optionValue){return this.focusedOption?.value===optionValue}renderOption(option){return lit.dy`<awf-list-option
                        noCheckbox
                        ?selected=${option.selected}
                        ?focused=${this.isFocused(option.value)}
                        ?disabled=${option.disabled}
                        .value=${option.value}
                        @keyup=${e=>this.onOptionKeyUp(e,option)}
                        @mouseenter=${this.onOptionMouseEnter}>${option.text}</awf-list-option>`}onOptionKeyUp(event,option){["Enter"," "].includes(event.key)&&option.disabled&&(event.preventDefault(),event.stopPropagation())}onOptionMouseEnter(){this.dropdown?.overlay.removeAttribute("keyboard-navigation")}onChildListChanged(){const options=this.querySelectorAll("option");if(0===options.length&&(this.dropdown?.checklist?.querySelectorAll("awf-list-option").forEach((opt=>opt.remove())),this.field.value=""),this.value&&!this.field.value){const option=this.querySelector(`option[value=${this.value}]`);option&&(options.forEach((opt=>opt.selected=!1)),option.selected=!0,this.field.value=option.textContent||"")}}};AwfSelect.styles=[COMMON_STYLES,INPUT_CSS_VARIABLES,SELECT_STYLES],AwfSelect.formAssociated=!0,(0,tslib_es6.gn)([(0,decorators.Cb)({type:Boolean,reflect:!0})],AwfSelect.prototype,"appendToBody",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)()],AwfSelect.prototype,"mode",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)()],AwfSelect.prototype,"labelPosition",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)({type:String,reflect:!0})],AwfSelect.prototype,"placement",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)({type:Boolean})],AwfSelect.prototype,"messageBelow",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)({type:Boolean,reflect:!0})],AwfSelect.prototype,"disabled",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)({type:Boolean,reflect:!0})],AwfSelect.prototype,"readonly",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)({type:Boolean,reflect:!0})],AwfSelect.prototype,"required",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)({type:String,reflect:!0})],AwfSelect.prototype,"placeholder",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)({type:Object})],AwfSelect.prototype,"value",void 0),(0,tslib_es6.gn)([(0,decorators.IO)("input")],AwfSelect.prototype,"htmlInputElement",void 0),(0,tslib_es6.gn)([(0,decorators.IO)("awf-input")],AwfSelect.prototype,"awfInput",void 0),(0,tslib_es6.gn)([(0,decorators.SB)()],AwfSelect.prototype,"stateDropdownOpened",void 0),(0,tslib_es6.gn)([(0,decorators.SB)()],AwfSelect.prototype,"focusedOption",void 0),(0,tslib_es6.gn)([(0,decorators.SB)()],AwfSelect.prototype,"clearButtonVisible",void 0),AwfSelect=(0,tslib_es6.gn)([localized(),(0,awf_custom_element.M)("awf-select",!0)],AwfSelect);const INPUT_DATE_TIME_STYLE=lit.iv`
    :host {
        display: inline-flex;
    }

    .calendar-button {
        cursor: pointer;
        --awf-button-height: calc(var(--awf-input-height-inner) - 2px);
    }

    span[slot=suffix] {
        display: flex;
        padding: 0;
    }

    awf-clear-button {
        margin-top: auto;
        margin-bottom: auto;
        visibility: hidden;
    }

    awf-clear-button[visible] {
        visibility: visible;
    }

    awf-input {
        width: auto;
    }

    ::slotted(input) {
        grid-area: input;
        min-width: 190px;
    }
`;let AwfInputDateTime=class AwfInputDateTime extends lit.oi{get value(){return this.field?dateUtil.parseDateTime(this.field.value):null}set value(value){this.field&&(this.field.value=dateUtil.formatDate(value,!0))}get field(){return this.slottedInputs[0]}get _clearButtonVisible(){let visible=!this.required;return visible&&(visible=!this.disabled),visible&&(visible=!!this.field?.value),visible&&(visible=this.hovered||this.focused),visible}get valueAsDate(){return this.field?dateUtil.parseDateTime(this.field.value):null}constructor(){super(),this.appendToBody=!1,this.labelPosition=LabelPosition.Top,this.hasForm=!1,this.hovered=!1,this.focused=!1,this.disabled=!1,this.required=!1,this.dateTimePickerRef=ref_e(),this.overlayRef=ref_e(),this.formValidationController=new FormValidationController(this),this.mutationObserver=new MutationObserver(this.onInputAttributeChange.bind(this)),this._onFocus=()=>this.focused=!0,this._onBlur=()=>this.focused=!1,this._onChange=this.onChange.bind(this),new ElementStyleController(this,[PLACEHOLDER_STYLE])}formAssociatedCallback(form){this.formValidationController.formAssociatedCallback(form)}validateValue(){let pass=this.awfInput.validateValue();return pass&&this.field.value&&!dateUtil.validateDateTimeFormat(this.field.value)&&(this.setInternalMessage(MessageLevel.ERROR,msg("Invalid date time format (yyyy-mm-dd hh:mm AM|PM)")),pass=!1),pass&&!this.checkMinDate()&&(this.setInternalMessage(MessageLevel.ERROR,msg(str`The value must be higher than or equal to ${dateUtil.formatDate(this.min,!0)}`)),pass=!1),pass&&!this.checkMaxDate()&&(this.setInternalMessage(MessageLevel.ERROR,msg(str`The value must be less than or equal to ${dateUtil.formatDate(this.max,!0)}`)),pass=!1),pass}setInternalMessage(level,message){this.awfInput.setInternalMessage(level,message)}clearInternalErrorMessage(){this.awfInput.clearInternalErrorMessage()}render(){return lit.dy`
            <awf-input
                labelPosition=${this.labelPosition||LabelPosition.Top}
                @mouseenter=${this.onInputMouseEnter}
                @mouseleave=${this.onInputMouseLeave}
                @focus=${this._onFocus}
                @blur=${this._onBlur}
                novalidate
            >
                <slot slot="label" name="label"></slot>
                <slot></slot>
                <span slot="suffix">
                    <awf-clear-button
                        ?hidden=${this.required||this.disabled}
                        ?visible=${this._clearButtonVisible}
                        @click=${this.clearDate}>
                    </awf-clear-button>
                    <awf-button
                        class="calendar-button"
                        ?disabled=${this.disabled}
                        @click=${this.toggleDateTimepicker}
                        @keydown=${this.onCalendarIconKeydown}
                        @focus=${this._onFocus}
                        @blur=${this._onBlur}
                        aria-label="calendar"
                    >
                        <awf-icon raw=${calendar.Y}></awf-icon>
                    </awf-button>
                </span>
                <slot name="error" slot="error"></slot>
                <slot name="warning" slot="warning"></slot>
            </awf-input>
            <awf-overlay
                manualToggle
                offset="1"
                placement="bottom-start"
                ?appendToBody=${this.appendToBody}
                @open=${this.onOpen}
                @close=${this.onClose}
                ${ref_n(this.overlayRef)}
            >
                <awf-date-time-picker
                    .value=${this.value||new Date}
                    .min=${this.min}
                    .max=${this.max}
                    ${ref_n(this.dateTimePickerRef)}
                    @valuechange=${this.onDateSelected}>
                </awf-date-time-picker>
            </awf-overlay>
            `}firstUpdated(_changedProperties){const[input]=this.slottedInputs;if(!input)throw new Error("Input not found!");input.type="text",input.addEventListener("change",this._onChange),input.addEventListener("focus",this._onFocus),input.addEventListener("blur",this._onBlur),this.onInputAttributeChange(),this.mutationObserver.disconnect(),this.mutationObserver.observe(this.field,{attributeFilter:["disabled","placeholder","required"]})}updated(_changedProperties){_changedProperties.has("value")&&(this.value?(this.field.value=dateUtil.formatDate(this.value,!0),this.field.dispatchEvent(new Event("focusin",{bubbles:!0}))):this.field.value="")}clearDate(){this.field.value="",this.field.focus()}onInputMouseEnter(){this.hovered=!0}onInputMouseLeave(){this.hovered=!1}onCalendarIconKeydown(event){event.preventDefault(),event.stopImmediatePropagation(),"ArrowDown"===event.code&&event.target.click()}toggleDateTimepicker(event){!this.disabled&&this.overlayRef.value&&(this.overlayRef.value.refElement=this.field,this.overlayRef.value.toggle()),event.stopImmediatePropagation()}onOpen(){setTimeout((()=>{this.dateTimePickerRef.value?.requestFocus(),this.calendarIcon.classList.remove("activated"),this.field.classList.add("slotted-input-hidden")}),100)}onClose(){setTimeout((()=>{this.field.classList.remove("slotted-input-hidden"),this.calendarIcon.requestFocus()}),100)}onDateSelected(event){event.stopPropagation(),this.overlayRef.value?.hide(),this.formValidationController.markAsDirty(),this.field.value=dateUtil.formatDate(event.detail,!0),setTimeout((()=>this.field.dispatchEvent(new Event("focusin",{bubbles:!0}))))}onChange(event){event.stopPropagation(),this.field.dispatchEvent(createCustomEvent(AwfEvent.VALUE_CHANGE,this.valueAsDate))}checkMaxDate(){const date=this.valueAsDate;return!this.max||!date||dateUtil.compareDates(date,this.max,!0)<=0}checkMinDate(){const date=this.valueAsDate;return!this.min||!date||dateUtil.compareDates(date,this.min,!0)>=0}onInputAttributeChange(){this.disabled=this.field.disabled,this.required=this.field.required,this.field.placeholder||(this.field.placeholder=msg("yyyy-mm-dd hh:mm AM|PM"))}};AwfInputDateTime.styles=[COMMON_STYLES,INPUT_CSS_VARIABLES,INPUT_DATE_TIME_STYLE],AwfInputDateTime.formAssociated=!0,(0,tslib_es6.gn)([(0,decorators.Cb)({type:Boolean})],AwfInputDateTime.prototype,"appendToBody",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)()],AwfInputDateTime.prototype,"labelPosition",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)()],AwfInputDateTime.prototype,"max",void 0),(0,tslib_es6.gn)([(0,decorators.Cb)()],AwfInputDateTime.prototype,"min",void 0),(0,tslib_es6.gn)([(0,decorators.NH)({selector:"input",flatten:!0})],AwfInputDateTime.prototype,"slottedInputs",void 0),(0,tslib_es6.gn)([(0,decorators.IO)("awf-input")],AwfInputDateTime.prototype,"awfInput",void 0),(0,tslib_es6.gn)([(0,decorators.IO)("awf-button")],AwfInputDateTime.prototype,"calendarIcon",void 0),(0,tslib_es6.gn)([(0,decorators.SB)()],AwfInputDateTime.prototype,"hovered",void 0),(0,tslib_es6.gn)([(0,decorators.SB)()],AwfInputDateTime.prototype,"focused",void 0),(0,tslib_es6.gn)([(0,decorators.SB)()],AwfInputDateTime.prototype,"disabled",void 0),(0,tslib_es6.gn)([(0,decorators.SB)()],AwfInputDateTime.prototype,"required",void 0),AwfInputDateTime=(0,tslib_es6.gn)([localized(),(0,awf_custom_element.M)("awf-input-date-time",!0)],AwfInputDateTime);var remove_subtract_minus=__webpack_require__("./node_modules/@agilent/web-icons/core/remove-subtract-minus.js"),add_plus=__webpack_require__("./node_modules/@agilent/web-icons/core/add-plus.js");class InputNumberService{computeIntegerPartLength(value){return Number.isNaN(value)?0:this.computeIntegerPart(value).toString().length}computeFractionalPartLength(value){if(Number.isNaN(value))return 0;const integerPart=this.computeIntegerPart(value);if(value%integerPart==0)return 0;return Math.abs(value).toString().replace(integerPart.toString(),"").toString().length-1}computeIntegerPart(value){return Math.floor(Math.abs(value))}}const INPUT_NUMBER_STYLES=lit.iv`
    :host {
        display: flex;
    }

    ::slotted(input) {
        text-align: right;
        grid-area: input;
    }

    :host([textAlign='left']) ::slotted(input) {
        text-align: left;
    }

    ::slotted([slot='error']),
    ::slotted([slot='warning']) {
        display: block;
        line-height: 1rem;
    }

    ::slotted([slot='error']) {
        color: var(--awf-input-error-font-color-inner);
    }

    ::slotted([slot='warning']) {
        color: var(--awf-input-warning-font-color-inner);
    }
`;let AwfInputNumber=class AwfInputNumber extends lit.oi{get field(){const[input]=this.slottedInputs;return input||console.warn("Input not found!"),input}constructor(){super(),this.labelPosition=LabelPosition.Top,this.messageBelow=!1,this.textAlign="right",this.forceFocus=!1,this.scientificNotation=!1,this.precision=-1,this.wholeNumber=!1,this.maxIntegerDigitCount=0,this.maxFractionalDigitCount=0,this.hasForm=!1,this._onInput=this.onInput.bind(this),this._onKeydown=this.onKeydown.bind(this),this._onFocus=this.onFocus.bind(this),this._onBlur=this.onBlur.bind(this),this._onChange=this.onChange.bind(this),this.actualValue={current:"",last:""},this.manuallyEntered=!1,this.inputNumberService=new InputNumberService,this.lastInputValue="",this.formValidationController=new FormValidationController(this),new ElementStyleController(this,[PLACEHOLDER_STYLE,NUMBER_SPINNER_STYLE])}disconnectedCallback(){super.disconnectedCallback(),this.field&&(this.field.removeEventListener("focus",this._onFocus),this.field.removeEventListener("blur",this._onBlur),this.field.removeEventListener("input",this._onInput),this.field.removeEventListener("keydown",this._onKeydown))}render(){return lit.dy`
            <awf-input labelPosition=${this.labelPosition} ?forceFocus=${this.forceFocus} ?messageBelow=${this.messageBelow} novalidate>
                <slot name="prefix" slot="prefix"></slot>
                <slot name="label" slot="label"></slot>
                <slot @slotchange=${this.onSlotChange}></slot>
                <slot name="suffix" slot="suffix"></slot>
                <slot name="error" slot="error"></slot>
                <slot name="warning" slot="warning"></slot>
            </awf-input>
    :host([disabled]) {
        cursor: not-allowed;
    }

    .increment-button,
    .decrement-button {
        padding: 0;
        --awf-button-height: calc(var(--awf-input-height-inner) - 2px);
        --awf-icon-color: var(--at-dark-navy);
    }

    ::slotted(input) {
        grid-area: input;
    }
            <awf-input-number
                ?forceFocus=${this.forceFocus}
                novalidate