const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

const descEl = document.getElementById("desc");

function addTask(event) {
    let p = document.createElement('p');
    if (inputBox.value.trim() === '') {
        p.style.color = "red";
        p.innerHTML = "\u26A0 Please enter task.";
        descEl.appendChild(p);
        setInterval(() => {
            p.innerHTML = "";
            p.remove();
        }, 1000);

    } else {

        p.innerHTML = " New task added.";
        p.style.color = "green";
        descEl.appendChild(p);

        setInterval(() => {
            p.innerHTML = "";
            p.remove();
        }, 1000);

        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        span.setAttribute('title', 'Delete');
        li.appendChild(span);
    }
    inputBox.value = '';
    saveTask();
    event.preventDefault();
}

listContainer.addEventListener('dblclick', function (event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle('dblClick');
    }
});

listContainer.addEventListener('click', function (event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle('checked');
    } else if (event.target.tagName === "SPAN") {
        event.target.parentElement.remove();
    }
    saveTask();
}, false);


function saveTask() {
    localStorage.setItem("tasks-data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("tasks-data");
}
showTask();