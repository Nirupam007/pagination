import { Component, h, Method, Prop, State, Event, EventEmitter, Listen, Element } from '@stencil/core';

@Component({
    tag: 'toggle-switch',
    styleUrl: 'toggle-switch.scss',
    shadow: true
})
export class ToggleSwitch {
    //  @prop type
    //  @desc Defines What type of component?
    //  @default toggle-switch
    //  @author Nirupam Barman
    // private checkboxEle?: HTMLInputElement;
    @Prop({ reflect: true, mutable: true }) checked: boolean;
    @State() on: boolean = true;
    @Prop({ reflect: true }) text: string = '';
    @Prop() value: any;
    @Prop() name: string;
    @Prop({ reflect: true, mutable: true }) size: string; // only mini as an alternative size 

    @Event() toggle: EventEmitter;

    @Element() li: HTMLLIElement;
    _pages: any[] = [];
    how_many: number = 5;


    private _dispatchAction() {
        this.on = !this.on;
        this.toggle.emit({ "switchStatus": this.on });
    }

    // Adding Accessability for Keypress (Down arrow) to on/off switch 
    @Listen('keydown')
    handleKeyDown(ev: KeyboardEvent) {
        if (ev.key === 'ArrowDown') {
            this._toggleOnOff();
        }
    }

    private _toggleOnOff() {
        this.checked = !this.checked;
    }

    @Method()
    async turnOn() {
        this.checked = true;
        console.log('Exposed Method turnOn() returns ==>' + this.checked);
    }

    @Method()
    async turnOff() {
        this.checked = false;
        console.log('Exposed Method turnOff() returns ==>' + this.checked);
    }



    render() {
        const _size = (this.size && this.size.toLowerCase().trim() === 'mini') ? 'mini' : '';
        return (
            <div>
                <label>
                    <div class="switchContainer">
                        <div>
                            <div class={`switch ${_size}`} tabindex="0">
                                <input type="checkbox" onChange={this._dispatchAction.bind(this)} checked={this.checked} value={this.value} name={this.name} />
                                <div class={`slider round ${_size}`}></div>
                            </div>
                        </div>
                        <div class="toggleText">{this.text}</div>
                        <div><slot /></div>
                    </div>
                </label>



            </div>

        )
    }
}

// ref={el => this.checkboxEle = el as HTMLInputElement}