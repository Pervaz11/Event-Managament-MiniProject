export default class User {
    constructor(fullName, lastName, email, password) {
        this.fullName = fullName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.role = "client"
    }
}