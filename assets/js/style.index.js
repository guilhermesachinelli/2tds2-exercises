/*let personSimple = "John Doe";
const personObject = {
    firstName:"John",
    lastName:"Doe",
    age:50,
    eyeColor:"blue"
};
console.log(`Olá ${personObject.firstName} ${personObject.lastName} sua idade é ${personObject.age} e a cor dos seus olhos são ${personObject.eyeColor}`)

Validação com objetos

function personaUsu(){
    let firstNameInpt = document.getElementById("firstName").value;
    let lastNameInpt = document.getElementById("lastName").value;
    let yearInpt = document.getElementById("year").value;
    let eyeColorInpt = document.getElementById("eyeColor").value;
    let limit = Number(yearInpt)
    limit = Math.min(100, Math.max(0, limit))
    const personObject = {
        firstName: firstNameInpt, 
        lastName: lastNameInpt,
        year: yearInpt,
        eyeColor: eyeColorInpt
    };
    if(yearInpt != limit){
        alert("Valor inválido")
        return;
    }
    if(!isNaN(NaN)(firstNameInpt , lastNameInpt , eyeColor)){
        document.getElementById("firstNameInpt").value="";
        document.getElementById("lastNameInpt").value="";
        document.getElementById("eyeColorInpt").value="";
                    return  alert("Não digite numeros");
    }
    document.getElementById("persona").innerHTML = `seu nome é ${personObject.firstName} ${personObject.lastName} sua idade é ${personObject.year}
    a cor do seus olhos são ${personObject.eyeColor}`
}
*/
