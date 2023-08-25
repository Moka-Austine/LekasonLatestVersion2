const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("nav-bar");

if (bar) {
     bar.addEventListener("click", () => {
         nav.classList.add("Active");
    })
}
if (close) {
     close.addEventListener("click", () => {
         nav.classList.remove("Active");
    })
}

function singleProducts() {
    const bigImage = document.getElementById("mainImg");
    const smallImage = document.getElementsByClassName("small-img");

    smallImage[0].onclick = function() {
        bigImage.src = smallImage[0].src;
    };
    smallImage[1].onclick = function() {
        bigImage.src = smallImage[1].src;
    };
    smallImage[2].onclick = function() {
        bigImage.src = smallImage[2].src;
    };
    smallImage[3].onclick = function() {
        bigImage.src = smallImage[3].src;
    };
}; 

function PasswordVisibility() {
    const option = document.getElementById("option");

    if (option.type === "password") {
        option.type = "text";
    } else {
        option.type = "password";
    };
};

