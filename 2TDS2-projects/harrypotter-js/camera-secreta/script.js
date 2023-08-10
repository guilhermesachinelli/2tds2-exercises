class CamaraSecreta{
    constructor(name,pwd){
        this.name = name;
        let _pwd = pwd; //Atributo privado.
        //Metodo privado
        this.verifyPwd = (pwdInput) =>{
            return pwdInput == _pwd; //True or False
        };
        this.accessToChamber = () => {
            let pwdInput = prompt("Digite a senha");
            if(this.verifyPwd(pwdInput)){
                console.log(`Bem vindo a Camara Secreta ${this.name}`)
            }else{
                console.log("Acesso negado trouxa!")
            }
        }
    }
}