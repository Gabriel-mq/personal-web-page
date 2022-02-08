const d = document

export default function formSend(contactForm) {
  const $contactForm = d.getElementById(contactForm),
    $fullName = d.getElementById('fullname'),
    $email = d.getElementById('email'),
    $comments = d.getElementById('comments'),
    $fullNameP = d.querySelector('.formSend__info-fullname'),
    $emailP = d.querySelector('.formSend__info-email'),
    $formSend = d.querySelector('.formSend')

  $contactForm.addEventListener('submit', (e) => {
    e.preventDefault()

    let formData = {
      fullname: $fullName.value,
      email: $email.value,
      comments: $comments.value,
    }

    let xhr = new XMLHttpRequest()
    xhr.open('POST', '/')
    xhr.setRequestHeader('content-type', 'application/json')

    $formSend.style.display = 'flex'
    $fullNameP.innerHTML = `
    <span style="color:#dbdbdb">Nombre: </span>${$fullName.value}
    `
    $emailP.innerHTML = `
    <span style="color:#dbdbdb">Email: </span>${$email.value}
    `

    $fullName.value = ''
    $email.value = ''
    $comments.value = ''

    return xhr.send(JSON.stringify(formData))
  })
}
