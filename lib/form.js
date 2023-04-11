const form = document.querySelector('#form');
const response = document.querySelector('#response');
const submitButton = document.querySelector('#submit-button');


form.addEventListener('submit', submit);

async function submit(e) {
    response.innerText = ''
    e.preventDefault();
    response.innerText = 'Submitting Form..'
    // some submission logic
    await sleep(2);
    response.innerText = 'Form Submitted Succesfully.'
    response.classList.add('success')
    submitButton.setAttribute('disabled', 'disabled')
    submitButton.classList.add('disabled')

}

function sleep(n) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, n * 1000)
    })
}