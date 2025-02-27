export default class User {
    constructor(fullName, username, email, password) {
        this.fullName = fullName,
            this.username = username,
            this.email = email,
            this.password = password,
            this.role = "client",
            this.profileImage = "https://avatar.iran.liara.run/public/41",
            this.createdAt = new Date();
        this.lastLogin = new Date();
        this.bio = "";
    }
}