// inicia o calendário

let date = new Date()
let dayNumber = document.querySelector('.dayNow')
dayNumber.textContent = date.getDate()

let datePickerButton = document.querySelector('.date-picker-button')
let datePicker = document.querySelector('.date-picker')

datePickerButton.addEventListener('click', function() {
    datePicker.classList.toggle('show')
})