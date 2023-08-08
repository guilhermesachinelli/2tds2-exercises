function savePost(){
    const tittle = document.getElementById("tittle").value;
    const category= document.getElementById("category").value;
    const resume = document.getElementById("resume").value;
    const author = document.getElementById("author").value;
    const date = document.getElementById("date").value;
    cleanFields()
}
function cleanFields(){
    document.getElementById("tittle").value = " ";
    document.getElementById("category").value = " ";
    document.getElementById("resume").value = " ";
    document.getElementById("author").value = " ";
    document.getElementById("date").value = " ";
}
