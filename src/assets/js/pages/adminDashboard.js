import controller from "../services/reguest.js";
import { endpoints } from "../services/api.js";

let list = document.querySelectorAll(".navigation li");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};

const tbody = document.querySelector(".recentOrders table tbody");

async function getAll() {
  try {
    const res = await fetch(endpoints.events);
    const events = await res.json();

    tbody.innerHTML = ""; 

    events.forEach((event) => {
      tbody.innerHTML += `
        <tr>
            <td>${vproduct.id}</td>
            <td>${event.name}</td>
            <td>${new Date(event.date).toLocaleString()}</td> <!-- Format date properly -->
            <td>${event.organizer || 'N/A'}</td> <!-- Handle missing organizer -->
            <td>${event.description || 'No description available'}</td> <!-- Handle missing description -->
            <td>${event.ticketsAvailable}</td>
            <td>${event.category}</td>
            <td>$${event.price.toFixed(2)}</td> <!-- Format price -->
            <td>${event.ageRestriction}</td>
            <td>${event.duration}</td>
            <td>${event.soldTickets}</td>
            <td>
                <button class="btn btn-outline btn-warning edit" data-id="${event.id}">Edit</button>
                <button class="btn btn-outline btn-danger delete" data-id="${event.id}">Delete</button>
            </td>
        </tr>
      `;
    });
  } catch (error) {
    console.error("Error fetching events:", error);
  }
}

getAll();
