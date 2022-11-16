
function addListItem() {
    const todo = document.querySelector(".todo");
    const completed = document.querySelector(".com");
    var input=document.getElementById("heading").value;
    var newli = document.createElement("li");
    var he = document.createElement("h2");
    const checkBtn = document.createElement("button");
    var des = document.getElementById("Description").value;
    checkBtn.innerHTML = 'completed';
    he.innerHTML = input;
    newli.textContent = des;
    
    todo.appendChild(newli);
    newli.appendChild(checkBtn);
    newli.appendChild(he);
    document.getElementById("heading").value="";
    document.getElementById("Description").value="";
    checkBtn.addEventListener('click',function() {
        const parent = this.parentNode;
        parent.remove();
        completed.appendChild(parent);
        checkBtn.style.display = 'none';
       
    });

}
