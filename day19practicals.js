// Objectives
// Familiarize the student with:
// Function basics (what are functions, declaring functions, calling functions, local variables, the return statement, function parameters, shadowing);
// Functions as first-class members (function expressions, passing a function as a parameter, callbacks);
// Arrow functions (declaring and calling);
// Recursion (basic idea).

// Scenario
// Our program has grown quite a bit, making it a little hard to read. It is especially visible in the switch instruction, where most of the logic is enclosed.
// Try to organize your program code by using functions. Define and call three functions in the appropriate places:

// showContact: the function should take two arguments; the first is the list of contacts, and the second is the index number of the contact to display; inside the function,
// check if the correct arguments are passed, that is, if the contacts are an array (use the instanceofArray construction for this);
// showAllContacts: the function should take one argument, the list of contacts; inside the function, check if the given argument is an array;
// addNewContact: the function should take four arguments, a contact list and the data of the new contact, that is: name, phone, and number;
// before adding a new contact, check if the passed argument is an array and if the new contact data have any value.

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

// function showContact(contacts, i) {
//   if (contacts instanceof Array && i >= 0 && i < contacts.length) {
//     let contact = contacts[i];
//     console.log(`Name: ${contact.name}`);
//     console.log(`Phone: ${contact.phone}`);
//     console.log(`Email: ${contact.email}`);
//   } else {
//     console.log("Invalid contact list or index");
//   }
// }

// showContact(contacts, 1);

let showContact = function (contacts, i) {
  if (contacts instanceof Array && contacts[i]) {
    console.log(
      `${contacts[i].name} / ${contacts[i].phone} / ${contacts[i].email}`
    );
  }
};

// function showAllContacts(contacts) {
//   if (contacts instanceof Array) {
//     contacts.forEach((contact) => {
//       console.log(`Name: ${contact.name}`);
//       console.log(`Phone: ${contact.phone}`);
//       console.log(`Email: ${contact.email}`);
//     });
//   } else {
//     console.log("Invalid Contact");
//   }
// }

// showAllContacts(contacts);

let showAllContacts = function (contacts) {
  if (contacts instanceof Array) {
    for (contact of contacts) {
      console.log(`${contact.name} / ${contact.phone} / ${contact.email}`);
    }
  }
};

// function addNewContact(contacts, name, phone, email) {
//   if (contacts instanceof Array) {
//     if (name !== "" && phone !== "" && email !== "") {
//       contacts.push({ name, phone, email });
//     }
//   } else {
//     console.log("Invalid Contact");
//   }
// }

// // Call the function
// addNewContact(contacts, "Urt", "0949000011", "urt@gmail.com");

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
