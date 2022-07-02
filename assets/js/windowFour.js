let rere = document.getElementById("rere");
let roro = document.getElementById("roro");
let popup = document.getElementById("popup");

let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");


rere.addEventListener('click', function() {
    popup.classList.add("active_popup")
    rere.classList.add("none")
    roro.classList.remove("none")


    one.classList.add("txt_active")
    two.classList.add("txt_active")
    three.classList.add("txt_active")
    four.classList.add("txt_active")
    five.classList.add("txt_active")
})

roro.addEventListener('click', function() {
    popup.classList.remove("active_popup")
    rere.classList.remove("none")
    roro.classList.add("none")

    one.classList.remove("txt_active")
    two.classList.remove("txt_active")
    three.classList.remove("txt_active")
    four.classList.remove("txt_active")
    five.classList.remove("txt_active")
})