const posts = [];
function savePost(){
    const tittle = document.getElementById("tittle").value;
    const category= document.getElementById("category").value;
    const resume = document.getElementById("resume").value;
    const author = document.getElementById("author").value;
    const date = document.getElementById("date").value;
    if(tittle && category && resume && author && date){
    storePost(tittle, category, resume, author, date)
    cleanFields()
}else{
    alert("Preencha todos os campos!");
}
}
function cleanFields(){
    document.getElementById("tittle").value = " ";
    document.getElementById("category").value = " ";
    document.getElementById("resume").value = " ";
    document.getElementById("author").value = " ";
    document.getElementById("date").value = " ";
}
function storePost(tittle, category, resume, author, date){
    const post = {
        tittle , 
        category,
        resume,
        author,
        date,
    };
    posts.push(post);
    console.log(posts)
}