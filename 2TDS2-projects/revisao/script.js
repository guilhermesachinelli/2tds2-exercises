/*let personSimple = "John Doe";
const personObject = new Object();
personObject.firstName = "John";
personObject.lastName = "Doe";
personObject.age = 50;
personObject.eyecolor = "blue";
console.log(personSimple);
console.log(personObject);*/
/*let personSimple = "John Doe";
const personObject ={
    firstName: "John",
    lastName: "Doe",
    age:50,
    eyecolor:"blue"
};
personObject.age = 10;
console.log(personSimple);
console.log(personObject);*/
/*class User{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    introduce(){
        console.log(`Olá, meu nome é ${this.name} e tenho ${this.age} anos.`)
    }
}
const user1 = new User('João', 30);
user1.introduce(); //saida: Olá, meu nome é João e tenho 30 anos.*/
class Pizza{
    constructor(base, sauce, toppings, cheese){
        this.base = base;
        this.sauce = sauce;
        this.toppings = toppings;
        this.cheese = cheese;
    }
    getDescription(){
        return`A delicious pizza with ${this.base} base, ${this.sauce} sauce, ${this.toppings}
        toppings, and lots of cheese`;
    }
    getTimerBase(){
        if(this.base == 'traditional'){
            return 10;
        }else if(this.base == 'integral'){
            return 15;
        }else{
            return 'This base does not exist';
        }
    }
    getTimerTomato(){
        if(this.sauce == 'tomato'){
            return 10;
        }else if(this.sauce == 'with Sauce'){
            return 15;
        }else{
            return 'This sauce does not exist'
        }
    }
    getTimerToppings(){
        if(this.toppings == 'pepperoni'){
            return 10;
        }else if(this.toppings == 'calabresa'){
            return 15;
        }else{
            return 'This toppings does not exist'
        }
    }
    getTimerCheese(){
        if(this.cheese == 'mozzarela'){
            return 10;
        }else if(this.cheese == 'cheddar'){
            return 15;
        }else{
            return 'This cheese does not exist'
        }
    }
}
const myPizza = new Pizza('integral', 'tomato', 'pepperoni', 'mozzarela');
console.log(myPizza.getDescription());
let timePizza = myPizza.getTimerBase() + myPizza.getTimerTomato() + myPizza.getTimerToppings() + myPizza.getTimerCheese();
console.log('Tempo de assar a pizza é de' +" "+ timePizza + " " + 'minutos')