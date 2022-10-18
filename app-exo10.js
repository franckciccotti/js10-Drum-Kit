// click
const btns = document.querySelectorAll('.drum');
console.log(btns);

for (let inc = 0; inc < btns.length; inc++) {
    console.log(inc);
    btns[inc].addEventListener('click', function () {
        // variable qui va contenir le nom de la classe de l'élément sur lequel la boucle for est actuellement positionnée
        let btnName = this.innerText;
        console.log('btnName = ' + btnName);
        let mp3 = `sounds/${btnName}.mp3`;
        let son = new Audio(mp3);
        son.play();
        buttonAnimation(btnName);
    });
};

document.addEventListener("keypress", function (e) {
    let keyPressed = e.key;
    let mp3 = `sounds/${keyPressed}.mp3`;
    let son = new Audio(mp3);
    son.play();
    buttonAnimation(keyPressed);
});


// PROPOSITION FACULTATIF SUR LE CLIC remplacant this et passant par target
// for (let inc = 0; inc < btns.length; inc++) {
//     console.log(inc);
//     btns[inc].addEventListener('click', function (e) {
//         console.log(e.target.innerText);
//         let keyPressed = e.target.innerText;
//         let mp3 = `sounds/${keyPressed}.mp3`;
//         let son = new Audio(mp3);
//         son.play(200);
//     });
// };

function buttonAnimation(letterClickedOrPressed) {
    let button = document.getElementsByClassName(letterClickedOrPressed)[0];
    button.classList.add("pressed");
    setTimeout(function () {
        button.classList.remove("pressed");
    }, 200);
}