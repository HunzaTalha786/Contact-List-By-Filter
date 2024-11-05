// Name by Filter
const contacts = [
  {
    id: 1,
    name: "Hunza",
    proffession: "Doctor",
  },
  {
    id: 2,
    name: "Nisha",
    proffession: "Teacher",
  },
  {
    id: 3,
    name: "Tehreem",
    proffession: "Nurse",
  },
  {
    id: 3,
    name: "Talha",
    proffession: "Manager",
  },
  {
    id: 3,
    name: "Tehreem",
    proffession: "Model",
  },
];

function renderContacts(contacts) {
  const contactList = document.getElementById("contact-List");
  contactList.innerHTML = "";
  for (const contact of contacts) {
    const contactDiv = document.createElement("div");
    contactDiv.className = "contact";
    contactDiv.innerHTML = `
    <b>${contact.name}</b>
    <p>${contact.proffession}</p>
    `;
    contactList.appendChild(contactDiv);
  }
}
function filterContacts() {
  const filterInput = document
    .getElementById("filter-input")
    .value.toLowerCase();
  const filterContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterInput)
  );
  renderContacts(filterContacts);
}
renderContacts(contacts);
document.getElementById('filter-button').addEventListener('click', filterContacts);

