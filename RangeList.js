class RangeList {
    constructor() {
        this.ranges = [];
    }

    add(range) {
        let [start, end] = range;
        if (start >= end) return;

        let index = 0;
        while (index < this.ranges.length && this.ranges[index][1] < start) {
            index++;
        }

        while (index < this.ranges.length && this.ranges[index][0] <= end) {
            start = Math.min(start, this.ranges[index][0]);
            end = Math.max(end, this.ranges[index][1]);
            this.ranges.splice(index, 1);
        }

        this.ranges.splice(index, 0, [start, end]);
    }

    remove(range) {
        let [removeStart, removeEnd] = range;
        if (removeStart >= removeEnd) return;
    
        this.ranges = this.ranges.reduce((newRanges, [start, end]) => {
            if (end <= removeStart || start >= removeEnd) {
                // Current range is completely outside the range to be removed
                newRanges.push([start, end]);
            } else {
                // Current range overlaps with the range to be removed
                if (start < removeStart) {
                    newRanges.push([start, removeStart]);
                }
                if (end > removeEnd) {
                    newRanges.push([removeEnd, end]);
                }
            }
            return newRanges;
        }, []);
    }    

    toString() {
        return this.ranges.map(range => `[${range[0]}, ${range[1]})`).join(' ');
    }
}

module.exports = RangeList;
