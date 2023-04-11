const form = document.querySelector('#form');
const response = document.querySelector('#response');
const submitButton = document.querySelector('#submit-button');

console.log('No error here :>')


form.addEventListener('submit', submit);

async function submit(e) {
    e.preventDefault();

    disableButton()

    response.innerText = ''
    response.innerText = 'Submitting Form..'

    // some submission logic
    await sleep(2);

    response.innerText = 'Form Submitted Succesfully.'
    response.classList.add('success')
}

function disableButton() {
    submitButton.setAttribute('disabled', 'disabled')
    submitButton.classList.add('disabled')
}

function sleep(n) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, n * 1000)
    })
}