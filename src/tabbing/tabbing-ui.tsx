
import { Component, h, Prop, State, Element, Host, Listen, Method, Event, EventEmitter } from "@stencil/core";

@Component({
    tag: 'tabbing-ui',
    styleUrl: 'tabbing-ui.scss',
    shadow: true
})

export class TabbingUI {
    @Prop({ reflect: true }) type: string;
    @Element() host: HTMLElement;
    @State() children: Array<any> = [];
    @Prop({ reflect: true }) isSelected: boolean = false;

    _tabs: any[];
    _masterEvent: Object[] = [];

    @Event() tabSelect: EventEmitter;


    componentDidlLoad() {
        // let slotted = this.host.shadowRoot.querySelector('slot') as HTMLSlotElement;
        this.children = Array.from(this.host.children);
        this.host.innerHTML = '';
        console.log(this.children);
    }



    @Listen('selectBtn')
    @Method({ bubbles: false })
    async tabClicked(e) {
        this.tabSelect.emit(e.detail);
    }



    private TabContainer = null;
    render() {
        if (this.type && this.type.toLowerCase().trim() == 'default') {
            this.TabContainer = (<div class="tab-default">
                <ul>
                    <li><slot name="tab" /></li>
                </ul>
            </div >)
        } else {
            this.TabContainer = (<div class="tab-container">
                <ul>
                    <li><slot name="tab" /></li>
                </ul>
            </div>);
        }

        return (
            <Host>
                { this.TabContainer}
            </Host>
        )
    }
}
