function addTask(){
    let input = document.getElementById("taskInput");
    let taskTest = input.value.trim();

    if(taskTest === "")  return;

    let li = document.createElement("li");

    li.innerHTML = `
    <span onclick="this.classList.toggle('done')">${taskTest}</span>
    <button onclick="this.parentElement.remove()">Remove</button>
    `;
    document.getElementById("taskList").appendChild(li);
    input.value = "";

} 