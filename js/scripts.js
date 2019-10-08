let todolist=[];

function addtolist() {
    const item = document.getElementById("todo").Value
    todolist.push(item);
    rendertodos(todolist);
}

function rendertodos(arr){
    const html= arr.map(item =>{
        return `<li>${item} <a href="#">x</a></li>`
    });
    console.log("value", html);

    document.getElementById("result").innerHTML=html;
}

function remove(index) {
    todolist.splice(index,1);
    rendertodos(todolist);
}

 




