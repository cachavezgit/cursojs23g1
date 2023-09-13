class Matematico {
    /*constructor(num1=0, num2=0) { 
        this.num1 = num1;
        this.num2 = num2;
    }*/
}

Matematico.prototype.num1 = 0;
Matematico.prototype.num2 = 0;

Matematico.prototype.suma = function() { 
    return this.num1 + this.num2;
};

Matematico.prototype.resta = function() { 
    return this.num1 - this.num2;
};

Matematico.prototype.num3 = 10;

Matematico.prototype.mayordelos3 = function() { 
    return Math.max(this.num1, this.num2, this.num3);
};

m1 = new Matematico();
m1.num1 = 10;
m1.num2 = 20;
console.log(m1.suma());
console.log(m1.resta());
console.log(m1.mayordelos3());


