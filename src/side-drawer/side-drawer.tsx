import { Component, h, Prop, State } from '@stencil/core';

@Component({
    tag: 'plrs-side-drawer',
    styleUrl: 'side-drawer.css',
    shadow: true
})
export class SideDrawer {
    @Prop() dradertitle: string;
    @Prop({ reflect: true }) opened: boolean;
    @State() showContact = false;

    close() {
        this.opened = false;
    }
    _handleTabClick(content: string) {
        this.showContact = content === 'contact';
    }
    render() {
        let mainContent = <slot />;
        if (this.showContact) {
            mainContent = (
                <div class="contact">
                    <h2>Contact</h2>
                    <p>Address: Shubham Greens Flat 506, 5th floor ,Alkapoor Township, Puppalaguda</p>
                    <p>Phone: +91 9160197794</p>
                    <p>Email: <a href="mailto:'nirupam0007@gmail.com'">nirupam0007@gmail.com</a></p>
                </div>
            );
        }

        return [
            <div id="backdrop" onClick={this.close.bind(this)}></div>,
            <aside>
                <h1>{this.dradertitle} <button onClick={this.close.bind(this)}>X</button></h1>
                <section>
                    <div class="tabs">
                        <button onClick={this._handleTabClick.bind(this, 'nav')}>Navigation</button>
                        <button onClick={this._handleTabClick.bind(this, 'contact')}>Contact</button>
                    </div>
                </section>
                <div>
                    {mainContent}
                </div>
            </aside>
        ];
    }
}