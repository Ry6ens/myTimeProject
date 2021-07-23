// DOM Element
const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    fullName = document.getElementById('name')

// Create function showTime
function showTime () {
    let today = new Date ()
        hour = today.getHours()
        min = today.getMinutes()
        sec = today.getSeconds()

    // 24hr format
    hour = hour % 24 || 24

    // Output time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`

    setTimeout(showTime, 1000)
}

// Add Zero
function addZero(number) {
    return (number < 10 ? '0' : '') + number
}

// Set Background and Greeting
function setBackgroundGreeting() {
    let today = new Date ()
        hour = today.getHours()
    if (hour < 12) {
        document.body.style.backgroundImage = "url('../img/morning.jpg')"
        document.body.style.backgroundSize = 'cover'
        greeting.textContent = 'Good Morning'
    } else if (hour < 18) {
        document.body.style.backgroundImage = "url('../img/afternoon.jpg')"
        document.body.style.backgroundSize = 'cover'
        greeting.textContent = 'Good Afternoon'
        document.body.style.color = 'white'
    } else {
        document.body.style.backgroundImage = "url('../img/evening.jpg')"
        document.body.style.backgroundSize = 'cover'
        greeting.textContent = 'Good Evening'
        document.body.style.color = 'white'
    }
}

// Get Name
function getName() {
    if (localStorage.getItem('name') === null) {
        fullName.textContent = '[Enter Name]'
    } else {
        fullName.textContent = localStorage.getItem('name')
    }
}

// Set Name
function setName (e) {
    if (e.type === 'keypress') {
        // Make sure Enter is pressed
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText)
            fullName.blur()
        }
    } else {
        localStorage.setItem('name', e.target.innerText)
    }
}

fullName.addEventListener('keypress', setName)
fullName.addEventListener('blur', setName)

// Run
showTime()
setBackgroundGreeting()
getName()