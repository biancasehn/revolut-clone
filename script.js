const locationContainer = document.querySelector(".container-location-header")
const hideLocationContainer = document.querySelector(".close-container-location-header")

const countrySelector = document.querySelector(".dropdown-item-initial")
const dropdown = document.querySelector(".dropdown")

const heroCta = document.querySelector("#hero-cta")
const heroCtaSticky = document.querySelector(".sticky-cta")
const lastMainSection = document.querySelector("#last-section")

hideLocationContainer.addEventListener("click", () => 
    locationContainer.style.display = "none")

countrySelector.addEventListener("click", () =>
    dropdown.classList.toggle("dropdown-displayed"))

window.onscroll = () => {
    (heroCta.getBoundingClientRect().y < 0) && 
    (lastMainSection.getBoundingClientRect().y - window.innerHeight > 0) ? 
        heroCtaSticky.classList.add("sticky-cta-active")
        : heroCtaSticky.classList.remove("sticky-cta-active")
}
