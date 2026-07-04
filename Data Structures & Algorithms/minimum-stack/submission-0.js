class MinStack {
   constructor() {
        this.stack = [];
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);

        // Push to minStack if it's empty OR val is the new minimum
        // Use <= to handle duplicate minimum values
        if (this.minStack.length === 0 || val <= this.getMin()) {
            this.minStack.push(val);
        }
    }

    /**
     * @return {void}
     */
    pop() {
        const removedElement = this.stack.pop();

        // If the element we removed is the current minimum, pop it from minStack too
        if (removedElement === this.getMin()) {
            this.minStack.pop();
        }
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}
