const inputBox=document.getElementById("input-text");
const listContainer=document.getElementById("list-container");
const add=document.getElementById("add");
add.addEventListener('click',() =>{
	if(inputBox.value==='')
		alert("You need to write something");
	else{
	const li=document.createElement("li");
	li.innerHTML=inputBox.value;
	listContainer.appendChild(li);
	let span=document.createElement("span");
	span.innerHTML="\u00d7";
	li.appendChild(span);
	}
	inputBox.value="";
	savedata();
});

listContainer.addEventListener('click',(e) =>{
	if(e.target.tagName=="LI"){
		e.target.classList.toggle("checked");
		savedata();
	}
	else if(e.target.tagName=="SPAN"){
		e.target.parentElement.remove();
		savedata();
	}
	
},false);

function savedata(){
	localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
	listContainer.innerHTML=localStorage.getItem("data");
}
showTask();