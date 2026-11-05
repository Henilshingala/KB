const chatForm = document.getElementById("chat-form");
const messageInput = document.getElementById("message-input");
const chatMessages = document.getElementById("chat-messages");
const clearButton = document.getElementById("clear-chat");

function addMessage(sender, message) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", sender);

    const senderElement = document.createElement("strong");
    senderElement.textContent =
        sender === "user" ? "You" : "Krishi Mitra AI";

    const textElement = document.createElement("p");
    textElement.textContent = message;

    messageElement.append(senderElement, textElement);
    chatMessages.appendChild(messageElement);

    chatMessages.scrollTop = chatMessages.scrollHeight;
}

chatForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const message = messageInput.value.trim();

    if (!message) return;

    addMessage("user", message);
    messageInput.value = "";

    addMessage(
        "assistant",
        "This is a development preview. AI functionality will be connected in a later step."
    );

    messageInput.focus();
});

clearButton.addEventListener("click", () => {
    chatMessages.replaceChildren();

    addMessage(
        "assistant",
        "Chat cleared. How can I help you today?"
    );
});
