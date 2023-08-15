
//Scroll Glass//
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry) 
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.Hidden') 
hiddenElements.forEach((el) => observer.observe(el));

//Nav//
function navbarMedia() {
    const x = document.getElementById("navBar");
    if (x.className === "navBar") {
        x.className += "responsive";
    } else {
        x.className = "navBar";
    }
}

function name(params) {
    
}