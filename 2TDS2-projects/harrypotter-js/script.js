class Witch{
    constructor(name, patron, house, colorEyes){
        this.name = name;
        this.patron = patron;
        this.house = house;
        this.colorEyes = colorEyes;
    }
    getName(){
        return `O nome do bruxo(a) é: ${this.name}`;
    }
    getHouse(){
        return `Ele(a) está na casa ${this.house}`;
    }
    getColorEyes(){
        return `A cor dos olhos são : ${this.colorEyes}`;
    }
    getPatron(){
        return `Seu patrono é ${this.patron}`
    }
}
const witch1 = new Witch('Harry Potter', 'Deer', 'Grynffindor', 'green');
console.log(witch1.getName());
class TypeWitch extends Witch{
    constructor(name, patron, house, colorEyes, typeWitch){
        super(name, patron, house, colorEyes);
        this.typeWitch = typeWitch;
    }
    getTypeWitch(){
        if(this.typeWitch == 'p'){
            return "Este bruxo é sangue puro";
        }else if(this.typeWitch == 'M'){
            return "Esse bruxo é Mestiço"
        }else{
            return "Este é um trouxa"
        }
    }
}
const harry = new TypeWitch('Harry Potter', 'Cervo', 'Grynffindor', 'Verde/Azul', 'M');
console.log(harry.getTypeWitch())