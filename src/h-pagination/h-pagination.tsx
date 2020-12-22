import { Component, h, State, Prop, Watch, Element } from "@stencil/core";


@Component({
    tag: 'h-pagination',
    styleUrl: 'h-pagination.scss',
    shadow: true
})
export class HabitatPagination {

    @Prop() type: string;
    @Prop({ reflect: true }) pageSizes: Number[] | string;
    private _pageSizes: Number[];
    @Prop() totalItems: number;
    @Prop() backwardText: string = "Previous";
    @Prop() forwardText: string = "Next";
    private rowsPerPageText: string = "Rows per page";

    @Element() li: HTMLLIElement;
    _pages: any[] = [];
    @State() _currentPage = 1;
    how_many: number;
    @State() rows: number;
    @State() noOfbuttons: number;
    @State() Isdisabled: boolean;
    private selectEle: HTMLSelectElement;
    private firstOption: any;


    @Watch('pageSizes')
    fetchPageSizeOptions(newValue: Number[] | string) {
        const _blank = typeof newValue !== 'string' || newValue === '';
        if (_blank) { throw new Error('pageSizes: required') };
        if (typeof newValue === 'string') {
            this._pageSizes = JSON.parse(newValue);
        } else {
            this._pageSizes = newValue;
        }
    }



    componentDidLoad() {
        if (this.selectEle && this.selectEle.length !== 0) {
            for (let i = 0; i <= this.selectEle.length || 0; i++) {
                this.firstOption = this.selectEle.options[0].value;
            }
            this.rows = this.firstOption;
            console.log("This is this rows val ===> ", this.rows);
            this.generateList(this.rows);
        }
    }

    next() {
        if (this._currentPage !== this._pages.length - 1) {
            this._currentPage += 1;
        }
        console.log(" Next Current ===> ", this._currentPage + " Total Page ===> ", this._pages.length - 2);
        { this.Isdisabled ? "On" : "Off" }
    }

    previous() {
        if (this._currentPage >= 1) {
            this._currentPage -= 1;
        }
        console.log(" Previous Current ===> ", this._currentPage + " Total Page ===> ", this._pages.length - 2);
    }



    generateList(how_many = 10) {

        if (how_many && how_many > 0) {
            this._pages.push(<a onClick={() => this.previous()}>{this.backwardText}</a>);
            for (let i = 1; i <= how_many; i++) {
                if (i === this._currentPage) {
                    this._pages.push(<a class="active">{i}</a>);
                }
                else {
                    this._pages.push(<a>{i}</a>);
                }

            };
            this._pages.push(<a onClick={() => this.next()} class={this._pages.length === this._currentPage ? 'isDisabled' : ''}>{this.forwardText}</a>);
            // class={`${((this._currentPage === this._pages.length - 2) ? 'disableClick' : '')}`}
        }
    }

    // componentDidUpdate() {
    //     this.next();
    // }

    componentWillLoad() {
        this.fetchPageSizeOptions(this.pageSizes);
        this.generateList(this.rows);
    }


    calculateRows(event) {
        this.rows = event.target.value;
        this.noOfbuttons = Math.round(this.totalItems / +this.rows);
        console.log("Rows ==> ", this.rows);
    }


    private PaginationContainer = null;

    render() {

        switch (this.type && this.type.toLowerCase().trim()) {
            case 'default-text':
                this.PaginationContainer = (<div class="normal">
                    <ul class="pagination">{this._pages.map(item =>
                        <li>{item}</li>
                    )}</ul>
                </div>)
                break;
            case 'default-arrow':
                this.PaginationContainer = (<div class="normal">
                    <ul class="pagination">{this._pages.map(item =>
                        <li>{item}</li>
                    )}</ul>
                </div>)
                break;
            case 'table':
                this.PaginationContainer = (<div class="table-compact">
                    <div class="select-area">
                        <div><span class="info-gap">{this.rowsPerPageText} :</span>
                        </div>
                        <select onChange={(e) => this.calculateRows(e)} ref={el => this.selectEle = el as HTMLSelectElement}>
                            {this._pageSizes.map(_option =>
                                <option value={JSON.stringify(_option)}>{_option}</option>
                            )}
                        </select>
                    </div>
                    <div class="results-area">
                        <div class="info-gap">Results: 1 - {this.rows} of {this.totalItems} items</div>
                        <div class="icon-placeholder">
                            <span>B</span>
                            <span>F</span>
                        </div>
                    </div>
                </div>)
                break;
            case 'default-compact':
                this.PaginationContainer = (<div class="table-compact">
                    <div class="select-area">
                        <div class="info-gap"><span>{this.rowsPerPageText} :</span>
                        </div>
                        <select onChange={(e) => this.calculateRows(e)} ref={el => this.selectEle = el as HTMLSelectElement}>
                            {this._pageSizes.map(_option =>
                                <option value={JSON.stringify(_option)}>{_option}</option>
                            )}
                        </select>
                    </div>
                    <div class="results-area">
                        <div class="icon-placeholder">
                            <span>BB</span>
                            <span>B</span>
                            <span class="count">1/100</span>
                            <span>FF</span>
                            <span>F</span>
                        </div>
                    </div>
                </div>)
                break;
            case 'compact':
                this.PaginationContainer = (<div class="table-compact">
                    <div class="results-area">
                        <div class="icon-placeholder">
                            <span>BB</span>
                            <span>B</span>
                            <span class="count">1/100</span>
                            <span>FF</span>
                            <span>F</span>
                        </div>
                    </div>
                </div>)
                break;
            default:
                this.PaginationContainer = (<div class="normal">
                    <ul class="pagination">
                        <li><a class="" href="#">{this.backwardText}</a></li>
                        <li><a href="#">1</a></li>
                        <li><a href="#" class="active">2</a></li>
                        <li><a href="#">3</a></li>
                        <li><a href="#">4</a></li>
                        <li><a href="#">5</a></li>
                        <li><a href="#">6</a></li>
                        <li><a href="#">7</a></li>
                        <li><a href="#">{this.forwardText}</a></li>
                        {/* <span onClick={this.pagination}>Click</span> */}
                    </ul>
                </div>)
        }

        return (
            <div> {this.PaginationContainer}</div>
        )

        // Icon <h-icon class="size-lg" icon="chevron-right-solid" size="lg"></h-icon>

    }
}