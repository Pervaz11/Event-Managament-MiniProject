import { endpoints } from "../services/api.js";
import controller from "../services/reguest.js";
import User from "../classes/user.js";
 const registerForm = document.querySelector(".form");

const registerInputs = {
    fullName: document.querySelector("#fullName"),
    username: document.querySelector("#username"),
    email: document.querySelector("#email"),
    password: document.querySelector("#password"),
    confirmPasswor: document.querySelector("#confirmPassword"),
};

const registBtn = document.querySelector("#signUp-btn");
registerForm.addEventListener("submit", async function (e) {
    e.preventDefault();
    const apiReponse = await controller.getAll(endpoints.users);
    const copyDublicatUser = apiReponse.data.find(
        (i) =>
            i.username == registerInputs.username.value ||
            i.email == registerInputs.email.value
    );

    if (copyDublicatUser) {
        window.alert("email or username is already in use");
    } else {
        const newUser = new User(
            registerInputs.fullName.value.trim(),
            registerInputs.username.value.trim(),
            registerInputs.email.value.trim(),
            registerInputs.password.value.trim(),
            registerInputs.confirmPasswor.value.trim()
        );

        const postReponse = await controller.post(endpoints.users, newUser);

        if (postReponse.data) {
            window.location.href = "./login.html";
        }
    }
});