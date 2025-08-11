// Scenario
// We will use the functions to add one more item of functionality.
// Arrays have a sort method that allows us to sort their elements. To this method, we pass a function
// which should compare two elements of the array and decide which one is smaller and which one is bigger.
// If the first element is smaller, the function returns a value less than zero, if they are equal it
// returns zero, and if the first is larger, it returns a value greater than zero. For example, the array:
// can be sorted in ascending order with a call:
// Give the user the option to select a sort action from the list. When this option is selected, the user should be able to specify whether they want to sort the contacts by name, phone, or email.

let contacts = [
  {
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk",
  },
  {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com",
  },
  {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu",
  },
];

let showContact = function (contacts, i) {
  if (contacts instanceof Array && contacts[i]) {
    console.log(
      `${contacts[i].name} / ${contacts[i].phone} / ${contacts[i].email}`
    );
  }
};

let showAllContacts = function (contacts) {
  if (contacts instanceof Array) {
    for (contact of contacts) {
      console.log(`${contact.name} / ${contact.phone} / ${contact.email}`);
    }
  }
};

let addNewContact = function (contacts, name, phone, email) {
  if (contacts instanceof Array && name && phone && email) {
    contacts.push({
      name: name,
      phone: phone,
      email: email,
    });
  }
};

// Now log the updated list
showAllContacts(contacts);
addNewContact(contacts, "Charlie", "789", "charlie@example.com");
showAllContacts(contacts);
showContact(contacts, 1);
