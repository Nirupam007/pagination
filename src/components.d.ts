/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface HContent {
    }
    interface HPagination {
        "backwardText": string;
        "currentItem": (currentItem: any) => Promise<void>;
        "currentPage": number;
        "disabled": boolean;
        "firstPage": () => Promise<void>;
        "forwardText": string;
        "lastPage": () => Promise<void>;
        "next": () => Promise<void>;
        "nextPage": () => Promise<void>;
        "nextSet": () => Promise<void>;
        "pageSize": number;
        "pageSizes": Number[] | string;
        "previous": () => Promise<void>;
        "previousPage": () => Promise<void>;
        "previousSet": () => Promise<void>;
        "totalItems": number;
        "type": string;
    }
    interface PlrsCardComponent {
        "objectAttribute": string;
    }
    interface PlrsSideDrawer {
        "dradertitle": string;
        "opened": boolean;
    }
    interface PlrsToggleInput {
        "cols": number;
        "disabled": boolean;
        "element": string;
        "labeltext": string;
        "max": number;
        "min": number;
        "name": string;
        "placeholder": string;
        "rows": number;
        "step": number;
        "type": string;
        "value": any;
    }
    interface PlrsTooltip {
        "text": string;
    }
    interface RadioCheckboxToggle {
        /**
          * @prop check status is mutable
          * @desc checked or not
         */
        "checked": boolean;
        /**
          * @prop name
          * @desc prop to take in name
         */
        "disabled": boolean;
        /**
          * @prop name is mutable
          * @desc prop to take in name
         */
        "name": string;
        "status": "default" | "error" | "";
        /**
          * @prop type
          * @desc Defines What type of component?
          * @default checkbox
          * @author Nirupam Barman
         */
        "type": string;
        /**
          * @prop value
          * @desc prop to take in value
         */
        "value": string;
    }
    interface TabContent {
    }
    interface TabH {
        "disabled": boolean;
        "selected": boolean;
        "type": string;
    }
    interface TabbingUi {
        "isSelected": boolean;
        "tabClicked": (e: any) => Promise<void>;
        "type": string;
    }
    interface ToggleSwitch {
        "checked": boolean;
        "name": string;
        "size": string;
        "text": string;
        "turnOff": () => Promise<void>;
        "turnOn": () => Promise<void>;
        "value": any;
    }
}
declare global {
    interface HTMLHContentElement extends Components.HContent, HTMLStencilElement {
    }
    var HTMLHContentElement: {
        prototype: HTMLHContentElement;
        new (): HTMLHContentElement;
    };
    interface HTMLHPaginationElement extends Components.HPagination, HTMLStencilElement {
    }
    var HTMLHPaginationElement: {
        prototype: HTMLHPaginationElement;
        new (): HTMLHPaginationElement;
    };
    interface HTMLPlrsCardComponentElement extends Components.PlrsCardComponent, HTMLStencilElement {
    }
    var HTMLPlrsCardComponentElement: {
        prototype: HTMLPlrsCardComponentElement;
        new (): HTMLPlrsCardComponentElement;
    };
    interface HTMLPlrsSideDrawerElement extends Components.PlrsSideDrawer, HTMLStencilElement {
    }
    var HTMLPlrsSideDrawerElement: {
        prototype: HTMLPlrsSideDrawerElement;
        new (): HTMLPlrsSideDrawerElement;
    };
    interface HTMLPlrsToggleInputElement extends Components.PlrsToggleInput, HTMLStencilElement {
    }
    var HTMLPlrsToggleInputElement: {
        prototype: HTMLPlrsToggleInputElement;
        new (): HTMLPlrsToggleInputElement;
    };
    interface HTMLPlrsTooltipElement extends Components.PlrsTooltip, HTMLStencilElement {
    }
    var HTMLPlrsTooltipElement: {
        prototype: HTMLPlrsTooltipElement;
        new (): HTMLPlrsTooltipElement;
    };
    interface HTMLRadioCheckboxToggleElement extends Components.RadioCheckboxToggle, HTMLStencilElement {
    }
    var HTMLRadioCheckboxToggleElement: {
        prototype: HTMLRadioCheckboxToggleElement;
        new (): HTMLRadioCheckboxToggleElement;
    };
    interface HTMLTabContentElement extends Components.TabContent, HTMLStencilElement {
    }
    var HTMLTabContentElement: {
        prototype: HTMLTabContentElement;
        new (): HTMLTabContentElement;
    };
    interface HTMLTabHElement extends Components.TabH, HTMLStencilElement {
    }
    var HTMLTabHElement: {
        prototype: HTMLTabHElement;
        new (): HTMLTabHElement;
    };
    interface HTMLTabbingUiElement extends Components.TabbingUi, HTMLStencilElement {
    }
    var HTMLTabbingUiElement: {
        prototype: HTMLTabbingUiElement;
        new (): HTMLTabbingUiElement;
    };
    interface HTMLToggleSwitchElement extends Components.ToggleSwitch, HTMLStencilElement {
    }
    var HTMLToggleSwitchElement: {
        prototype: HTMLToggleSwitchElement;
        new (): HTMLToggleSwitchElement;
    };
    interface HTMLElementTagNameMap {
        "h-content": HTMLHContentElement;
        "h-pagination": HTMLHPaginationElement;
        "plrs-card-component": HTMLPlrsCardComponentElement;
        "plrs-side-drawer": HTMLPlrsSideDrawerElement;
        "plrs-toggle-input": HTMLPlrsToggleInputElement;
        "plrs-tooltip": HTMLPlrsTooltipElement;
        "radio-checkbox-toggle": HTMLRadioCheckboxToggleElement;
        "tab-content": HTMLTabContentElement;
        "tab-h": HTMLTabHElement;
        "tabbing-ui": HTMLTabbingUiElement;
        "toggle-switch": HTMLToggleSwitchElement;
    }
}
declare namespace LocalJSX {
    interface HContent {
    }
    interface HPagination {
        "backwardText"?: string;
        "currentPage"?: number;
        "disabled"?: boolean;
        "forwardText"?: string;
        "onCurrentClicked"?: (event: CustomEvent<any>) => void;
        "onNextClicked"?: (event: CustomEvent<any>) => void;
        "onNextSetClicked"?: (event: CustomEvent<any>) => void;
        "onPreviousClicked"?: (event: CustomEvent<any>) => void;
        "onPreviousSetClicked"?: (event: CustomEvent<any>) => void;
        "pageSize"?: number;
        "pageSizes"?: Number[] | string;
        "totalItems"?: number;
        "type"?: string;
    }
    interface PlrsCardComponent {
        "objectAttribute"?: string;
    }
    interface PlrsSideDrawer {
        "dradertitle"?: string;
        "opened"?: boolean;
    }
    interface PlrsToggleInput {
        "cols"?: number;
        "disabled"?: boolean;
        "element"?: string;
        "labeltext"?: string;
        "max"?: number;
        "min"?: number;
        "name"?: string;
        "placeholder"?: string;
        "rows"?: number;
        "step"?: number;
        "type"?: string;
        "value"?: any;
    }
    interface PlrsTooltip {
        "text"?: string;
    }
    interface RadioCheckboxToggle {
        /**
          * @prop check status is mutable
          * @desc checked or not
         */
        "checked"?: boolean;
        /**
          * @prop name
          * @desc prop to take in name
         */
        "disabled"?: boolean;
        /**
          * @prop name is mutable
          * @desc prop to take in name
         */
        "name"?: string;
        "status"?: "default" | "error" | "";
        /**
          * @prop type
          * @desc Defines What type of component?
          * @default checkbox
          * @author Nirupam Barman
         */
        "type"?: string;
        /**
          * @prop value
          * @desc prop to take in value
         */
        "value"?: string;
    }
    interface TabContent {
    }
    interface TabH {
        "disabled"?: boolean;
        "onLeftKeyPressed"?: (event: CustomEvent<any>) => void;
        "onRightKeyPressed"?: (event: CustomEvent<any>) => void;
        "onSelectBtn"?: (event: CustomEvent<any>) => void;
        "selected"?: boolean;
        "type"?: string;
    }
    interface TabbingUi {
        "isSelected"?: boolean;
        "onTabSelect"?: (event: CustomEvent<any>) => void;
        "type"?: string;
    }
    interface ToggleSwitch {
        "checked"?: boolean;
        "name"?: string;
        "onToggle"?: (event: CustomEvent<any>) => void;
        "size"?: string;
        "text"?: string;
        "value"?: any;
    }
    interface IntrinsicElements {
        "h-content": HContent;
        "h-pagination": HPagination;
        "plrs-card-component": PlrsCardComponent;
        "plrs-side-drawer": PlrsSideDrawer;
        "plrs-toggle-input": PlrsToggleInput;
        "plrs-tooltip": PlrsTooltip;
        "radio-checkbox-toggle": RadioCheckboxToggle;
        "tab-content": TabContent;
        "tab-h": TabH;
        "tabbing-ui": TabbingUi;
        "toggle-switch": ToggleSwitch;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "h-content": LocalJSX.HContent & JSXBase.HTMLAttributes<HTMLHContentElement>;
            "h-pagination": LocalJSX.HPagination & JSXBase.HTMLAttributes<HTMLHPaginationElement>;
            "plrs-card-component": LocalJSX.PlrsCardComponent & JSXBase.HTMLAttributes<HTMLPlrsCardComponentElement>;
            "plrs-side-drawer": LocalJSX.PlrsSideDrawer & JSXBase.HTMLAttributes<HTMLPlrsSideDrawerElement>;
            "plrs-toggle-input": LocalJSX.PlrsToggleInput & JSXBase.HTMLAttributes<HTMLPlrsToggleInputElement>;
            "plrs-tooltip": LocalJSX.PlrsTooltip & JSXBase.HTMLAttributes<HTMLPlrsTooltipElement>;
            "radio-checkbox-toggle": LocalJSX.RadioCheckboxToggle & JSXBase.HTMLAttributes<HTMLRadioCheckboxToggleElement>;
            "tab-content": LocalJSX.TabContent & JSXBase.HTMLAttributes<HTMLTabContentElement>;
            "tab-h": LocalJSX.TabH & JSXBase.HTMLAttributes<HTMLTabHElement>;
            "tabbing-ui": LocalJSX.TabbingUi & JSXBase.HTMLAttributes<HTMLTabbingUiElement>;
            "toggle-switch": LocalJSX.ToggleSwitch & JSXBase.HTMLAttributes<HTMLToggleSwitchElement>;
        }
    }
}
