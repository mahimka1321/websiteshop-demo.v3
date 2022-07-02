let display = document.getElementById("display");
let back = document.getElementById("back");
let next = document.getElementById("next");

let imgOne = document.getElementById("imgOne");
let imgTwo = document.getElementById("imgTwo");
let imgThree = document.getElementById("imgThree");
let imgFour = document.getElementById("imgFour");
let imgFive = document.getElementById("imgFive");
let imgSix = document.getElementById("imgSix");
let imgSeven = document.getElementById("imgSeven");
let imgEight = document.getElementById("imgEight");
let imgNine = document.getElementById("imgNine");
let imgTen = document.getElementById("imgTen");

let line = document.getElementById("line");

let i = 1
//добавление картинок при нажатию на стрелочку вперед, увеличение линии слайдера
next.addEventListener('click', function() {
if (i>=0, i<=9) {
    i++
    display.textContent = i;

    if (i >= 2){line.style.width = '47px' 
    imgOne.classList.add("img_none")
    imgTwo.classList.remove("img_none")
}
    if (i >= 3){line.style.width = '70.5px'
    imgTwo.classList.add("img_none")
    imgThree.classList.remove("img_none")
}
    if (i >= 4){line.style.width = '94px'
    imgThree.classList.add("img_none")
    imgFour.classList.remove("img_none")
}
    if (i >= 5){line.style.width = '117.5px'
    imgFour.classList.add("img_none")
    imgFive.classList.remove("img_none")
}
    if (i >= 6){line.style.width = '141px'
    imgFive.classList.add("img_none")
    imgSix.classList.remove("img_none")
}
    if (i >= 7){line.style.width = '164.5px'
    imgSix.classList.add("img_none")
    imgSeven.classList.remove("img_none")
}
    if (i >= 8){line.style.width = '188px'
    imgSeven.classList.add("img_none")
    imgEight.classList.remove("img_none")
}
    if (i >= 9){line.style.width = '211.5px'
    imgEight.classList.add("img_none")
    imgNine.classList.remove("img_none")
}
    if (i >= 10){line.style.width = '235px'
    imgNine.classList.add("img_none")
    imgTen.classList.remove("img_none")
}}})
//добавление картинок в обратную сторну при нажатию на стрелочку назад, уменьшение линии слайдера
back.addEventListener('click', function() {
    if (i<=10, i>=2) {
    i--
    display.textContent = i;

    if (i >= 1){line.style.width = '23.5px'
    imgOne.classList.remove("img_none")
    imgTwo.classList.add("img_none")
}
    if (i >= 2){line.style.width = '47px'
    imgTwo.classList.remove("img_none")
    imgThree.classList.add("img_none")
    imgOne.classList.add("img_none")
}
    if (i >= 3){line.style.width = '70.5px'
    imgThree.classList.remove("img_none")
    imgFour.classList.add("img_none")
    imgTwo.classList.add("img_none")
}
    if (i >= 4){line.style.width = '94px'
    imgFour.classList.remove("img_none")
    imgFive.classList.add("img_none")
    imgThree.classList.add("img_none")
}
    if (i >= 5){line.style.width = '117.5px'
    imgFive.classList.remove("img_none")
    imgSix.classList.add("img_none")
    imgFour.classList.add("img_none")
}
    if (i >= 6){line.style.width = '141px'
    imgSix.classList.remove("img_none")
    imgSeven.classList.add("img_none")
    imgFive.classList.add("img_none")
}
    if (i >= 7){line.style.width = '164.5px'
    imgSeven.classList.remove("img_none")
    imgEight.classList.add("img_none")
    imgSix.classList.add("img_none")
}
    if (i >= 8){line.style.width = '188px'
    imgEight.classList.remove("img_none")
    imgNine.classList.add("img_none")
    imgSeven.classList.add("img_none")
}
    if (i >= 9){line.style.width = '211.5px'
    imgNine.classList.remove("img_none")
    imgTen.classList.add("img_none")
    imgEight.classList.add("img_none")
}
if (i >= 10){line.style.width = '235px'}}})




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




