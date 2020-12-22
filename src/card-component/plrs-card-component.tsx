import { Component, h, Prop, Watch } from '@stencil/core';

@Component({
    tag: 'plrs-card-component',
    styleUrl: 'plrs-card-component.css',
    shadow: true
})
export class CardComponent {

    @Prop({ reflect: true, mutable: true }) objectAttribute: string;


    private _objattr: any;
    private _oldValue: string;

    @Watch('objectAttribute')
    watchAttrChange(newValue: string, oldValue: string) {
        if (newValue !== oldValue) {
            this._objattr = newValue;
        }
    }

    // watchAttrChange(newValue: string, oldValue: string) {
    //     if (newValue !== oldValue) {
    //         this._objattr = newValue;
    //     }
    // }

    componentWillLoad() {
        this.watchAttrChange(this.objectAttribute, this._oldValue);
    }

    render() {
        this._objattr = JSON.parse(this.objectAttribute);
        return (<div>
            <span >Name: {this._objattr.name}</span><br />
            <span >Age: {this._objattr.age}</span>
        </div>)
    }
}