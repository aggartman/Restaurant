function setContact() {
    const contactContain = document.createElement('div');
    contactContain.id = 'contactContain';

    const contactTitle = document.createElement('h1');
    contactTitle.id = 'contactTitle';
    contactTitle.innerText = 'Contact';
    contactContain.appendChild(contactTitle);

    const address = document.createElement('p');
    address.id = 'address';
    address.innerText = '33 Union St #22, Boston, MA 02108';
    contactContain.appendChild(address);

    const phoneNumber = document.createElement('p');
    phoneNumber.innerText = '(617) 555-554';
    contactContain.appendChild(phoneNumber);

    const contact1 = createContact('Mickey IV', 'Owner', '(617) 555-5555', 'mickey@mickeyspub.com');
    contact1.id = 'contact1';
    contactContain.appendChild(contact1);

    const spacer = document.createElement('div');
    spacer.classList.add('spacer')
    contactContain.appendChild(spacer)

    const contact2 = createContact('Molly', 'Bartender', '(617) 555-5556', 'molly@mickeyspub.com');
    contact2.id = 'contact2';
    contactContain.appendChild(contact2);

    const warn = document.createElement('h4');
    warn.classList.add('warning');
    warn.innerText = 'I don\'t take to no complaining.\n If you\'ve got something to say, say it to me face!';
    contactContain.appendChild(warn);

    return contactContain
}
function createContact(name, title, phone, email) {
    const contactCard = document.createElement('div');
    contactCard.classList.add('contactCard')

    const contactName = document.createElement('h2');
    contactName.innerText = name;
    contactCard.appendChild(contactName);

    const contactTitle = document.createElement('h3');
    contactTitle.innerText = title;
    contactCard.appendChild(contactTitle);

    const contactPhone = document.createElement('p');
    contactPhone.innerText = phone;
    contactCard.appendChild(contactPhone);

    const contactEmail = document.createElement('p');
    contactEmail.innerText = email;
    contactCard.appendChild(contactEmail);

    return contactCard;
}

function loadContact() {
    const container = document.getElementById('contentContain');
    container.innerText = '';
    container.appendChild(setContact());
}

export default loadContact;