

    function fill_form(){  
    //get imput from user 

    document.getElementById("submit").value; 
    var date=document.getElementById("date_input"); 
    var todo=document.getElementById("todo_input"); 
    var important=document.getElementById("important_input"); 
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
    var importanttxtNode=document.createTextNode(important.value); 
    checkboxNode.appendChild(checkboxText);
	dateNode.appendChild(datetxtNode); 
    todoNode.appendChild(todotxtNode); 
    improtantNode.appendChild(importanttxtNode); 
    }  
//Code modified from : https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_node_clonenode2
    function clone_table(){

    var elmnt = document.getElementsByTagName("TABLE")[0];
    var cln = elmnt.cloneNode(true);
    document.body.appendChild(cln);


    }
