class SmartCalculator {
    constructor(initialValue) {
        this.values = [initialValue];
        return this;
    }

    add(number) {
        this.values.push('+', number);
        return this;
    }
  
    subtract(number) {
        this.values.push('-', number);
        return this;
    }

    multiply(number) {
        this.values.push('*', number);
        return this;
    }

    devide(number) {
        this.values.push('/', number);
        return this;
    }

    pow(number) {
        if(number == 1) {
            this.values.push("*", 1);
        } else {
            this.values.push(Math.pow(this.values.pop(), number));
        }
        
        return this;
    }
    
    valueOf() {
        return eval(this.values.join(''));
    }
}

module.exports = SmartCalculator;
