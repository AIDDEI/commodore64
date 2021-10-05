/*Sticky Navbar*/
const navButtons = document.querySelectorAll("nav>div")
const navbar = document.querySelector("nav")
const sectionTitles = document.querySelectorAll("section.title")
const sectionsArray = Array.from(sectionTitles)
const header = document.querySelector("header")
const startPosition = navbar.offsetTop
const observer = new IntersectionObserver(entries => adjustVisibility(entries))

function init() {
    observer.observe(header)
  
    for (let title of sectionTitles) {
        observer.observe(title)
    }
}

function adjustVisibility(entries) {
    const mobileview = window.matchMedia("(max-width: 550px)")
    
    for(let entry of entries){
        if (!mobileview.matches) {
            if (entry.target.nodeName === "HEADER") {
                if (entry.intersectionRatio > 0) {
                    removeSelected()
                    navbar.classList.remove("sticky")
                } else {
                    navbar.classList.add("sticky")
                }
            }
            if (entry.target.nodeName === "SECTION") {
                let i = sectionsArray.indexOf(entry.target)
                if (entry.intersectionRatio > 0) {
                    removeSelected()
                    navButtons[i].classList.add("selected")
                }
            }
        }
    }
}

function removeSelected() {
    for (let btn of navButtons) {
        btn.classList.remove("selected")
    }
}

init()
