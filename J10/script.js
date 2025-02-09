let items = [];

const itemsDiv = document.getElementById("items");
const itemInput = document.getElementById("iteminput");
const storageKey = "items";

function renderItems() {
    itemsDiv.innerHTML = null;

    for (const [indexid, item] of Object.entries(items)) {
        const container = document.createElement("div");
        container.className="item_container";

        const text = document.createElement("p");
        text.textContent = item;

        const button = document.createElement("button");
        button.textContent = "Remove";
        button.onclick = () => removeItems(indexid);

        container.appendChild(text);
        container.appendChild(button);

        itemsDiv.appendChild(container);
    }
}


function loadItems() {
    const storedItems = localStorage.getItem(storageKey);
    if (storedItems) {
        items = JSON.parse(storedItems);
    }
    renderItems();
}


function saveItems() {
    const stringItems = JSON.stringify(items);
    localStorage.setItem(storageKey, stringItems);
}

function addItems() {
    const value=itemInput.value;
    if(!value){
        alert("Please enter a value");
        return;
    }
    items.push(value);
    renderItems();
    itemInput.value = "";
    saveItems();
}

function removeItems(indexid) {
    items.splice(indexid, 1);
    renderItems();
    saveItems();
}

document.addEventListener("DOMContentLoaded",loadItems);