export class Pagination {
    private _data: Array<any>;
    private _count: number;
    private _page: number;
    public constructor(data: Array<any>, count: number, page: number) {
        this._count = count;
        this._data = data;
        this._page = page;
    }

    get total(): number {
        return Math.ceil(this._data.length / this._count);
    }

    get show(): any {
        return this._data.slice((this._page - 1) * this._count, this._page * this._count);
    }

    get count() {
        return this._count;
    }

    get page() {
        return this._page;
    }

    setCount(count: number) {
        this._count = count;
    }

    setPage(page: number) {
        this._page = page;
    }

    setData(data: Array<any>) {
        this._data = data;
    }
}
