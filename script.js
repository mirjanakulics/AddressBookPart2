"use strict";

class Contact {
  constructor(name, email, phone, relation) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.relation = relation;
  }

class AddressBook {
  this.contacts = [];
}
add(info) {
  this.contacts.push(info);
  this.contacts = [...this.contacts, {...info}];
}
deleteAt(index) {
  this.contacts = [this.contacts.slice(0, index), ...this.contacts.slice(index+1)];
}

display() {
  document.querySelector("contact_list").innerHTML = "";
  let count = 0;
  for(let contact of this.contacts) {
    const newEntry = document.createElement("div");
    newEntry.setAttribute("index", count);
    newEntry.classList.add("contact_box");
    newEntry.innerHTML = '
    <p>Name: ${inputElements[0].value}</p>
    <p>Email: ${inputElements[1].value} </p>
    <p>Phone: ${inputElements[2].value}</p>
    <p>Relation: ${inputElements[3].value}</p>
    <img class="delete__card" src="https://cdn3.iconfinder.com/data/icons/tools-solid-icons-vol-2/72/59-512.png"></img>
    `;
    document.querySelector(".contact_list").append(newEntry);
  }
}
