import controller from "../services/reguest.js";
import { endpoints } from "../services/api.js";
import User from "../classes/user.js";
import Swal from "sweetalert2";

document.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.querySelector(".form");

    const registerInputs = {
        fullName: document.querySelector("#fullName"),
        lastName: document.querySelector("#lastName"),
        email: document.querySelector("#email"),
        password: document.querySelector("#password"),
        confirmPassword: document.querySelector("#confirmPassword"),
    };

    registerForm.addEventListener("submit", async function (e) {
        e.preventDefault();

        for (let key in registerInputs) {
            if (!registerInputs[key].value.trim()) {
                Swal.fire({
                    title: "Error",
                    text: "All fields are required!",
                    icon: "error"
                });
                return; 
            }
        }

        if (registerInputs.password.value !== registerInputs.confirmPassword.value) {
        }

        const allUsersResult = await controller.getAll(endpoints.users);
        const allUsers = allUsersResult.data;

        const duplicateUser = allUsers.find(
            (x) =>
                x.username === registerInputs.fullName.value.trim() ||
                x.email === registerInputs.email.value.trim()
        );

        if (duplicateUser) {
            Swal.fire({
                title: "Error",
                text: "Username or email is already in use!",
                icon: "error"
            });
            return;
        }

        const newUser = new User(
            registerInputs.fullName.value.trim(),
            registerInputs.lastName.value.trim(),
            registerInputs.email.value.trim(),
            registerInputs.password.value.trim()
        );

        const postResponse = await controller.post(endpoints.users, newUser);
        if (postResponse.data) {
            Swal.fire({
                title: "Success",
                text: "Registration successful!",
                icon: "success"
            }).then(() => {
                window.location.replace("http://localhost:5173/login.html");
            });
        }
    });
});
