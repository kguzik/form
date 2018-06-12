function checkAgreements () {
    let allCheckbox = document.querySelectorAll('[type="checkbox"]');
    for(let i = 0; i < allCheckbox.length - 1; i++){
        allCheckbox[i].checked = this.checked;
        allCheckbox[i].disabled = this.checked;
    }
}

let allAgreementsCheckbox = document.getElementById('wszystkie-zgody');

allAgreementsCheckbox.addEventListener('change', checkAgreements);

checkAgreements();

//funkcaj odpowiadajaca za walidacje formularza 

//e - pseudoparametr

function validationForm(e){
    let nameInput = document.getElementById('name');
    let emailInput = document.getElementById('email');
    
    document.getElementById('message').innerHTML = '<ul id="message-list"></ul>'
    
    if(nameInput.value === ''){
        e.preventDefault();
//        zeby formularz sie nie wysylal dopoki warunki nie beda spelione
        let msgName = document.createElement('li');
        msgName.innerHTML = 'Wpisz imię!';
        document.getElementById('message-list').appendChild(msgName);
    }
    
    if(emailInput.value === ''){
        e.preventDefault();
        let msgName = document.createElement('li');
        msgName.innerHTML = 'Wpisz nazwisko!';
        document.getElementById('message-list').appendChild(msgName);
    }
    
    let allCheckboxes = document.querySelectorAll('[type="checkbox"]');
    for(let i = 0; i < allCheckboxes.length; i++){
        if(!allCheckboxes[i].checked){
            e.preventDefault();
            let msgName = document.createElement('li');
            msgName.innerHTML = 'Zaznacz zgodę ' + (i+1);
            document.getElementById('message-list').appendChild(msgName);
        }
    }
    
}

document.getElementById('mailing-form').addEventListener('submit', validationForm)
