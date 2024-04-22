var todobox = document.getElementById("todoinput");
 function o(event) {
    if(event.keyCode === 13)
    {   
        let todo = todobox.value;
        let newli = document.createElement("li");
        let txt = document.createTextNode(todo);
        newli.appendChild(txt);
        let newul = document.querySelector(".todos");
        newul.appendChild(newli);
        document.getElementById("todoinput").value="";  
    }
    }
    // HIDE AND SHOW THE TODO SEARCH
    document.querySelector(".search").addEventListener("click",hide);
    function hide(event) {
      todobox.classList.toggle("show");
    }
      // Above code for the strike  
    document.querySelector(".todos").addEventListener("click",strike);
    function strike(event){
      event.target.classList.toggle("completed");
    }