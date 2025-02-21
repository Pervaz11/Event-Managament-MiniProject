document.addEventListener("DOMContentLoaded", function () {
    const subInput = document.querySelector(".email");
    const subButton = document.querySelector("#subBtn");
    const message = document.querySelector(".subscribe-txt");

    subButton.addEventListener("click", function () {
        const email = subInput.value.trim();
        const gmailRegex = /^[a-zA-Z0-9._%+-]+@\.com$/;

        if (!email) {
            message.textContent = "Please write, you remail adress";
            message.style.color = "red";
        } else if (!gmailRegex.test(email)) {
            message.textContent = "Please write the correct email adress!";
            message.style.color = "red";
        } else {
            message.textContent = "Thanks for subscribing, " + email + "!";
            message.style.color = "green";
            subInput.value = "";
        }
    });
});
