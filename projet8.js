const form = document.getElementById("form")
const main = document.getElementById("main")
const thanks = document.getElementById("thanks")
const btn = document.getElementById("btn")
const btn1 = document.getElementById("btn1")
const email = document.getElementById("email")
const error = document.getElementById("error")

form.addEventListener("submit",(e) => {
    e.preventDefault()
    if (!isEmail(email.value.trim())) {
        error.classList.remove("hidden")
        email.style = "background-color:hsla(4, 100%, 67%, 0.462);color:hsl(4, 100%, 67%);"
    }
    else{
        
       error.classList.add("hidden")
       email.style = " "
        main.classList.add("hidden")
        thanks.classList.remove("hidden")
        
    }
})
function isEmail(email){
    return /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(email)
}


btn1.addEventListener("click",() => {
    main.classList.remove("hidden")
    thanks.classList.add("hidden")
    email.value = " "
    email.focus()
})
