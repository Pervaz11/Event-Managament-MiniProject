import { defineConfig } from "vite";
 export default defineConfig({
    plugins: [tailwindcss()],
    build: {
        rollupOptions: {
            input: {
                main: "index.html",
                login: "login.html",
                register: "register.html",
                events: "events.html",
            },
        },
    },
});