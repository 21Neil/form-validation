const app = () => {
  let submitted = false
  const form = document.querySelector('.sign-up-form')
  const email = document.querySelector('#email')
  const emailInvalid = document.querySelector('.email-invalid')
  const country = document.querySelector('#country')
  const countryInvalid = document.querySelector('.country-invalid')
  const zipCode = document.querySelector('#zip-code')
  const zipCodeInvalid = document.querySelector('.zip-code-invalid')
  const password = document.querySelector('#password')
  const passwordInvalid = document.querySelector('.password-invalid')
  const passwordConfirm = document.querySelector('#password-confirm')
  const passwordConfirmInvalid = document.querySelector('.password-confirm-invalid')

  form.addEventListener('submit', e => {
    if (!submitted) submitted = true
    if (email.validity.valueMissing) {
      email.setCustomValidity('Email is required')
      emailInvalid.textContent = email.validationMessage
      email.classList.add('input-bd')
    }
    if (country.validity.valueMissing) {
      country.setCustomValidity('Country is required')
      countryInvalid.textContent = country.validationMessage
      country.classList.add('input-bd')
    }
    if (zipCode.validity.valueMissing) {
      zipCode.setCustomValidity('Zip code is required')
      zipCodeInvalid.textContent = zipCode.validationMessage
      zipCode.classList.add('input-bd')
    }
    if (password.validity.valueMissing) {
      password.setCustomValidity('Password is required')
      passwordInvalid.textContent = password.validationMessage
      passwordInvalid.classList.add('input-bd')
    }
    if (passwordConfirm.validity.valueMissing) {
      passwordConfirm.setCustomValidity('Password confirm is required')
      passwordConfirmInvalid.textContent = passwordConfirm.validationMessage
      passwordConfirm.classList.add('input-bd')
    }
    if (passwordConfirm.value !== password.value) {
      passwordConfirm.setCustomValidity('Two password is not same')
      passwordConfirmInvalid.textContent = passwordConfirm.validationMessage
      passwordConfirm.classList.add('input-bd')
    }
    if (form.checkValidity() === false) {
      e.preventDefault()
    }
    if (form.checkValidity()) {
      e.preventDefault()
      const highFive = document.querySelector('.success')
      highFive.classList.remove('hidden')
    }
  })

  email.addEventListener('focusout', () => {
    if (email.validity.typeMismatch) {
      email.setCustomValidity('Please enter right email format')
      emailInvalid.textContent = 'Please enter right email format'
      email.classList.add('input-bd')
      return
    }
    if (submitted && email.validity.valueMissing) {
      email.setCustomValidity('Email is required')
      emailInvalid.textContent = email.validationMessage
      email.classList.add('input-bd')
      return
    }
    if (!email.validity.valueMissing) {
      email.setCustomValidity('')
      emailInvalid.textContent = email.validationMessage
      email.classList.remove('input-bd')
      return
    }
  })

  country.addEventListener('focusout', () => {
    if (submitted && country.validity.valueMissing) {
      country.setCustomValidity('Country is required')
      countryInvalid.textContent = country.validationMessage
      country.classList.add('input-bd')
      return
    }
    if (!country.validity.valueMissing) {
      country.setCustomValidity('')
      countryInvalid.textContent = country.validationMessage
      country.classList.remove('input-bd')
      return
    }
  })

  zipCode.addEventListener('focusout', () => {
    if (zipCode.validity.patternMismatch) {
      zipCode.setCustomValidity('Please enter right zipCode format, ex. 55555 or 55555-4444')
      zipCodeInvalid.textContent = 'Please enter right zipCode format, ex. 55555 or 55555-4444'
      zipCode.classList.add('input-bd')
      return
    }
    if (submitted && zipCode.validity.valueMissing) {
      zipCode.setCustomValidity('Zip code is required')
      zipCodeInvalid.textContent = zipCode.validationMessage
      zipCode.classList.add('input-bd')
      return
    }
    if (!zipCode.validity.valueMissing) {
      zipCode.setCustomValidity('')
      zipCodeInvalid.textContent = zipCode.validationMessage
      zipCode.classList.remove('input-bd')
      return
    }

  })

  password.addEventListener('focusout', () => {
    if (password.validity.tooShort) {
      password.setCustomValidity('Password is too short')
      passwordInvalid.textContent = password.validationMessage
      password.classList.add('input-bd')
      return
    }
    if (password.validity.patternMismatch) {
      password.setCustomValidity('Password need last one number, one lower letter, one upper letter')
      passwordInvalid.textContent = password.validationMessage
      password.classList.add('input-bd')
      return
    }
    if (submitted && password.validity.valueMissing) {
      password.setCustomValidity('Password is required')
      passwordInvalid.textContent = password.validationMessage
      password.classList.add('input-bd')
      return
    }
    if (!password.validity.valueMissing) {
      password.setCustomValidity('')
      passwordInvalid.textContent = password.validationMessage
      password.classList.remove('input-bd')
      return
    }
  })

  passwordConfirm.addEventListener('focusout', () => {
    if (submitted && passwordConfirm.validity.valueMissing) {
      passwordConfirm.setCustomValidity('Password confirm is required')
      passwordConfirmInvalid.textContent = passwordConfirm.validationMessage
      passwordConfirm.classList.add('input-bd')
      return
    }
    if (!passwordConfirm.validity.valueMissing) {
      passwordConfirm.setCustomValidity('')
      passwordConfirmInvalid.textContent = passwordConfirm.validationMessage
      passwordConfirm.classList.remove('input-bd')
      return
    }
  })

}

export default app