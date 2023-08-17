class CamaraSecreta{
    constructor(name,pwd){
        this.name = name;
        let _pwd = pwd; //Atributo privado.
        //Metodo privado
        this.verifyPwd = (pwdInput) =>{
            return pwdInput == _pwd; //True or False
        };
        this.accessChamber = () => {
            let pwdInput = prompt("Digite a senha");
            if(this.verifyPwd(pwdInput)){
                console.log(`Bem vindo a Camara Secreta ${this.name}`)
            }else{
                console.log("Acesso negado trouxa!")
            }
        }
    };
    //Metodos pubicos
    showName(){
        console.log(`Nome do Bruxo: ${this.name}`)
    }
    
}
const myAccess1 = new CamaraSecreta('Harry Potter', 'senha123')

//Metodo publico
myAccess1.showName();//top
myAccess1.name = 'HP';
myAccess1.pwd = '123';
myAccess1.accessChamber();