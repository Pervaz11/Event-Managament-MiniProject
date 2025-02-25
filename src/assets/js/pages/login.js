const loginForm = document.querySelector("#login-form");
const loginInputs = {
    fullName: document.querySelector("#fullName"),
    email: document.querySelector("#email"),
    password: document.querySelector("#password")
}
import controller from "../services/reguest.js";
import {endpoints} from "../services/api.js";

loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const apiResponse = await controller.getAll(endpoints.users);
    const checkValidUser = apiResponse.data.find((x) =>{
        return(
            x.email == loginInputs.email.value &&
            x.password == loginInputs.password.value
        );
    });

    if (checkValidUser) {
        Swal.fire({
            title: `Welcome ${checkValidUser.fullName}!`,
            text: "You have successfully logged in.",
            icon: "success",
            confirmButtonText: "OK"
        }).then(() => {
            localStorage.setItem("userID", user.id);
            window.location.href = "http://localhost:5173/user.html";
        });    
    } else {
        Swal.fire({
            title: "Error",
            text: "Username or password is incorrect!",
            icon: "error",
            confirmButtonText: "OK"
        });        
    }
});
