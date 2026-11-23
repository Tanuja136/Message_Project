const apiUrl = "http://localhost:3000/api/messages";

// Select HTML elements
const nameInput = document.getElementById("name");
const saveButton = document.getElementById("save-button");
const result = document.getElementById("result");
const messageList = document.getElementById("message-list");

// 1. ADD NAME - POST
async function addMessage() {

    const name = nameInput.value.trim();

    if (!name) {
        result.textContent = "Please enter your name";
        return;
    }

    try {

        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name
            })
        });


        
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message);
        }

        result.textContent = data.message;

        nameInput.value = "";

        getMessages();

    } catch (error) {

        result.textContent = error.message;

    }

}


// 2. GET ALL NAMES - GET
async function getMessages() {

    try {

        const response = await fetch(apiUrl);

        const messages = await response.json();

        if (!response.ok) {
            throw new Error("Unable to get messages");
        }

        messageList.innerHTML = "";

        messages.forEach(function(message) {

            const li = document.createElement("li");

            li.textContent = message.name;

            messageList.appendChild(li);

        });

    } catch (error) {

        result.textContent = error.message;

    }

}


// Button click event
saveButton.addEventListener("click", addMessage);


// Load saved names when page opens
getMessages();
