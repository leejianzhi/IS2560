function select_date(){

       document.getElementById("submit").onclick=function(){  
    //get imput from user 
    var name=document.getElementById("date_input"); 
    var email=document.getElementById("todo_input"); 
    var addresss=document.getElementById("important_input"); 
    //insert table nodes
    var trNode=document.createElement("tr"); 
    var checkboxNode=document.createElement("td");
    var dateNode=document.createElement("td"); 
    var todoNode=document.createElement("td"); 
    var improtantNode=document.createElement("td"); 
    //insert table nodes and text nodes to the table 
    var border=document.getElementById("border"); 
    border.appendChild(trNode); 
    trNode.appendChild(checkboxNode);
    trNode.appendChild(dateNode); 
    trNode.appendChild(todoNode); 
    trNode.appendChild(improtantNode); 
    var checkboxText=document.createElement("input");
    checkboxText.setAttribute("type","checkbox");
    var datetxtNode=document.createTextNode(date.value); 
    var todotxtNode=document.createTextNode(todo.value); 
    var improtanttxtNode=document.createTextNode(important.value); 
    checkboxNode.appendChild(checkboxText);
	dateNode.appendChild(datetxtNode); 
    todoNode.appendChild(todotxtNode); 
    improtantNode.appendChild(importanttxtNode); 
    }  

}