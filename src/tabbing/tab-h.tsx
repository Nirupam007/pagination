import { Component, Element, Event, EventEmitter, h, Prop } from '@stencil/core';


@Component({
    tag: 'tab-h',
    styleUrl: 'tab.scss',
    shadow: true
})
export class Tab {


    @Prop({ reflect: true }) type: string;
    @Prop() selected: boolean = false;

    @Element() el: HTMLButtonElement;

    //@Element() host: HTMLElement;

    @Prop({ reflect: true }) disabled: boolean;

    _tabs: any[];
    @Event() selectBtn: EventEmitter;


    _handleClick(e) {
        e.stopImmediatePropagation();
        if (e.currentTarget) {
            this.selectBtn.emit({ isSelected: this.selected, TabElement: e.currentTarget });
        }
    }

    render() {

        return (
            <button class={`${this.type === 'default' ? 'default' : 'container'} ${this.selected == true ? 'selected-default' : ''}`} disabled={this.disabled} onClick={(e) => this._handleClick(e)}>
                <div class="button_ele">
                    <div><slot name="icon" ></slot></div>
                    <div>
                        <div> <slot name="name"></slot></div>
                        <div> <slot name="helper"></slot></div>
                    </div>

                </div>
            </button>
        );
    }
}

//${this.selected == true ? 'selected-default' : ''}