let tasks = []; 
 
function addTask() { 
  const taskText = document.getElementById("taskInput").value; 
  const priority = document.getElementById("prioritySelect").value; 
  const time = document.getElementById("timeInput").value; 
 
  if (taskText === "" || time === "") return alert("Please enter task and time."); 
 
  const task = { text: taskText, priority: priority, time: time }; 
  tasks.push(task); 
  renderTasks(); 
} 
 
function renderTasks() { 
  const taskList = document.getElementById("taskList"); 
  taskList.innerHTML = ""; 
  tasks.forEach((task, index) => { 
    const li = document.createElement("li"); 
    li.className = task.priority; 
    li.textContent = `${task.text} - ${task.time}`; 
    taskList.appendChild(li); 
  }); 
} 
 
function checkReminders() { 
  const now = new Date(); 
  const currentTime = now.toTimeString().slice(0, 5); 
  tasks.forEach(task => { 
    if (task.time === currentTime) { 
      speak(`Reminder: ${task.text}`); 
    } 
  }); 
} 
 
function speak(message) { 
  const speech = new SpeechSynthesisUtterance(message); 
  window.speechSynthesis.speak(speech); 
} 
 
setInterval(checkReminders, 60000); // check every minute 
 
 