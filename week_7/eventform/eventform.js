const form = document.querySelector("#event-ticket")
const ticketType = document.querySelector("#ticketType")
const idContainer = document.querySelector("#idContainer")
const studentID = document.querySelector("#studentID")
const output = document.querySelector("#output")
const codeContainer = document.querySelector("#codeContainer")
const accessCode = document.querySelector("#accessCode")

function updateTicketField() {
  const value = ticketType.value;
  if (value === "Student"){
    idContainer.hidden = false;
    codeContainer.hidden = true;
  }else if (value === "Guest"){
    idContainer.hidden = true;
    codeContainer.hidden = false;
  }else{
    idContainer.hidden = true;
    codeContainer.hidden = true;
  }
}



ticketType.addEventListener("change", updateTicketField);
updateTicketField();

function isPastDate(value) {
  const today = new Date();
  const chosen = new Date(value);
  return chosen < today;
}

form.addEventListener("submit", function (event) {
    event.preventDefault();
    output.textContent = "";

    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const type = form.ticketType.value;
    const availableDate = form.eventDate.value;
    const ID = form.studentID.value;
    const accessCode = form.accessCode.value;
    
    if(ticketType.value === "Student") {
        if (ID === "") {
        output.textContent = "Please enter your Student ID";
        return;
        }else if(ID.length !== 9){
            output.textContent = "Student I# must be 9 digits";
            return;
        }
    }

    if(ticketType.value === "Guest") {
        if (accessCode === "") {
            output.textContent = "Please enter an access code";
            return;
        }else if(accessCode !== "EVENT131"){
            output.textContent = "Invalid access code";
            return;
        }
    }
    
    if (isPastDate(availableDate)) {
        output.textContent = "Please choose a later date.";
        return;
    }
    
    output.innerHTML = `
    <h2>Ticket Created</h2>
    <p>${firstName} ${lastName}</p>
    <p>${type}</p>
    <p>${availableDate}</p>
    `;
    form.reset();
});