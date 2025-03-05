document.addEventListener('DOMContentLoaded', function(){
    const addTaskButoon= document.getElementById('add-task');
    const taskinput= document.getElementById('task');
    const timeinput= document.getElementById('time');
    const tasklist= document.getElementById('tasks');

 //function to create a new task list item
 function createtaskitem(task, time){
     const li= document.createElement('li');
     li.textcontent='${time} - ${task}';
     tasklist.appendchild(li);
 }
 //ADD task to the list
 addTaskButoon.addEventListener('click', function(){
     const taskValue=taskinput.Value.trim();
     const timeValue=timeinput.Value;
     
     if (taskValue=== ''|| timeValue===''){
         alert('please enter both a time and a task.');
         return;
     } 
     //Add task item to the list 
     createtaskitem(taskValue, timeValue);

     // clear input fields
     taskinput.Value='';
     timeinput.value='';
 })
 // optional: Handle pressing enter to add a task
 taskinput.addEventListener('keypress', function(event){
     if(event.key==='enter'){
         addTaskButoon.click();
     }
 });
});