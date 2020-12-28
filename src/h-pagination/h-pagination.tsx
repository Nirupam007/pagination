import { Component, h, Prop, Watch, Element, Event, EventEmitter, Method } from "@stencil/core";


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
    @Prop({ reflect: true, mutable: true }) currentPage: number;
    how_many: number;
    @Prop({ reflect: true }) pageSize: number;
    private noOfbuttons: number;
    //private selectEle: HTMLSelectElement;
    // private firstOption: any;
    private _actualArrOnlyNumber: Number[] = [];
    results = null;
    @Event({
        eventName: 'nextClicked',
        composed: true,
        cancelable: true,
        bubbles: true,
    }) nextClicked: EventEmitter;

    @Event({
        eventName: 'previousClicked',
        composed: true,
        cancelable: true,
        bubbles: true,
    }) previousClicked: EventEmitter;


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

        this.nextSet(this.pageSize);
        console.log("ComponentDidLoad gives ====>", this.pageSize);
    }


    @Method()
    async next() {
        if (this.currentPage !== this._pages.length - 2) {
            this.currentPage += 1;
        }

        // console.log(" Next Current ===> ", this.currentPage + " Total Page ===> ", this._pages.length - 2);
        const nextRemaining = (this.totalItems / this.pageSize) - this.currentPage;
        const listEnd = this._pages.length - 2;
        this.nextClicked.emit({
            currentItem: this.currentPage,
            nextRemaining,
            listEnd,
            pageSize: this.pageSize,
            pageSizes: this.pageSizes,
            totalItems: this.totalItems

        })
    }

    @Method()
    async previous() {
        if (this.currentPage >= 1) {
            this.currentPage -= 1;
        }
        // console.log(" Previous Current ===> ", this.currentPage + " Total Page ===> ", this._pages.length - 2);
        const previousRemaining = this.currentPage - 1;
        const listStart = 1;
        this.previousClicked.emit({
            currentItem: this.currentPage,
            previousRemaining,
            listStart,
            pageSize: this.pageSize,
            pageSizes: this.pageSizes,
            totalItems: this.totalItems

        })
    }

    // Table Pagination logic 
    nextSet(_itemsPerPage) {
        _itemsPerPage = this.pageSize;
        console.log("_itemsPerPage ", _itemsPerPage);
        console.log("this.pageSize ", this.pageSize);
        for (let page = 1; page < _itemsPerPage; page++) {
            this._actualArrOnlyNumber.push(page);
        }

        let _begin = _itemsPerPage * (this.currentPage - 1);
        let _end = _itemsPerPage * this.currentPage;
        let _slicedRows = [];
        _slicedRows = this._actualArrOnlyNumber.slice(_begin, _end);
        this.currentPage++;
        console.log("Actual Arrays ", this._actualArrOnlyNumber);
        console.log("Sliced Arrays ", _slicedRows);
        console.log("Begin  ", _begin + 1, "End ", _end);
        this.results = (`Results : ${_begin + 1}  -  ${_end}  of  ${this.totalItems}`);


    }

    previousSet() {

    }
    generateList(how_many) {

        if (how_many && how_many > 0) {
            this._pages.push(<a onClick={() => this.previous()} class={this.currentPage === 1 ? 'isDisabled' : ''}>{this.backwardText}</a>);
            for (let i = 1; i <= how_many; i++) {
                if (i === this.currentPage) {
                    this._pages.push(<a class={(i === this.currentPage) ? 'active' : ''}>{i}</a>);
                }
                else {
                    this._pages.push(<a>{i}</a>);
                }
            };
            // console.log(this._pages.length - 1, " = ", this.currentPage);
            this._pages.push(<a onClick={() => this.next()} class={this._pages.length - 1 === this.currentPage ? 'isDisabled' : ''}>{this.forwardText}</a>);

        }
    }

    componentWillLoad(): void {
        this.noOfbuttons = Math.ceil(this.totalItems / +this.pageSize);
        this.fetchPageSizeOptions(this.pageSizes);
        this.generateList(this.noOfbuttons);
    }


    calculateRows(event) {
        this.pageSize = event.target.value;
        this.nextSet(this.pageSize);
        console.log(" This is from select ==>", this.pageSize);
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
                        <select onChange={(e) => this.calculateRows(e)}>
                            {this._pageSizes.map(_option =>
                                <option value={JSON.stringify(_option)}>{_option}</option>
                            )}
                        </select>
                    </div>
                    <div class="results-area">
                        <div class="info-gap">{this.results}</div>
                        <div class="icon-placeholder">
                            <span onClick={this.previousSet.bind(this)}>B</span>
                            <span onClick={this.nextSet.bind(this)}>F</span>
                        </div>
                    </div>
                </div>)
                break;
            case 'default-compact':
                this.PaginationContainer = (<div class="table-compact">
                    <div class="select-area">
                        <div class="info-gap"><span>{this.rowsPerPageText} :</span>
                        </div>
                        <select onChange={(e) => this.calculateRows(e)}>
                            {this._pageSizes.map(_option =>
                                <option value={JSON.stringify(_option)}>{_option}</option>
                            )}
                        </select>
                    </div>
                    <div class="results-area">
                        <div class="icon-placeholder">
                            <span>BB</span>
                            <span>B</span>
                            <span class="count">{this.currentPage / this.totalItems}</span>
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