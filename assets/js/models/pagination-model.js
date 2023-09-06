class PaginationModel {
    constructor(offset = 0, limit = 10, maxRecords = 151) {
        this.offset = offset;
        this._limit = limit;
        this.maxRecords = maxRecords;
        this.remainingRecords = maxRecords - limit < 0 ? 0 : maxRecords - limit;
    }

    next() {
        if (this.remainingRecords < this._limit) {
            this.offset += this._limit
            this._limit = this.remainingRecords;
            this.remainingRecords = 0;
        } else {
            this.remainingRecords -= this._limit;
            this.offset += this._limit;
        }
    }

    previous() {
        if (this.offset >= this._limit) {
            this.offset -= this._limit;
        }
    }

    hasMore() {
        if (this.remainingRecords == 0) {
            return false;
        } else {
            return true;
        } 
    }

    get limit() {
        return this._limit;
    }

    set limit(value) {
        if (value > 0 && value <= this.remainingRecords) {
            this._limit = value;
        }
    }
}