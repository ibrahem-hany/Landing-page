// Stored sections
const storedSections = [{
    id: "section4",
    dataNav: "Section 4",
    text: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.", "Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non."]
}];


// Referencing the main element
const main = document.querySelector(".main");

// Add the stored sections dynamically
storedSections.forEach(sectionContent => {

    // Create an element for each section
    const sectionElement = `
        <section class="section" id="${sectionContent.id}" data-nav="${sectionContent.dataNav}">
            <h2 class="section__heading">${sectionContent.dataNav}</h2>
            ${sectionContent.text.map(text => `<p class="section__text">${text}</p>`).join("")}
        </section>
    `

    // Add the section to the main element
    main.innerHTML += sectionElement;
});









// Create the navigation links dynamically
const sectionElements = document.querySelectorAll(".section");
const navbarList = document.querySelector(".navbar__list");

Array.from(sectionElements).forEach(sectionElement => {

    // Create a navigation list item for each section
    const navbarListItem = document.createElement("li");
    navbarListItem.className = "navbar__list-item";

    // Create a navigation link for each section
    const navbarLink = document.createElement("a");
    navbarLink.className = "navbar__link";
    navbarLink.setAttribute("href", "#");
    navbarLink.textContent = sectionElement.dataset.nav;

    // Add the data attribute to reference the element for the intersection observer
    navbarLink.dataset.nav = sectionElement.dataset.nav;


    // Append the navigation link to the navigation list item
    navbarListItem.appendChild(navbarLink);

    // Append the navigation list item to the navigation list
    navbarList.appendChild(navbarListItem);

});






// Add the scrollspy functionality

// Create an intersection observer instance
const observer = new IntersectionObserver(function(entries) {
    // Loop over the sections
    entries.forEach(entry => {

        
        // - Reference the navigation link based on the section data attribute
        const navigationLink = document.querySelector(`.navbar__link[data-nav="${entry.target.dataset.nav}"]`);

        if (entry.isIntersecting) {
            // Add the active class to the navigation link
            navigationLink.classList.add("navbar__link--active");

            // Add the active class to the section
            entry.target.classList.add("section--active");
        } else {

            // Remove the active class from the navigation link
            navigationLink.classList.remove("navbar__link--active");

            // Remove the active class from the section
            entry.target.classList.remove("section--active");
        }
    })
}, {
    rootMargin: "-40%"
});


// Observe each section
Array.from(sectionElements).forEach(sectionElement => {
    observer.observe(sectionElement);
});









// Add the scroll to top button functionality
const scrollToTop = document.querySelector(".scroll-to-top");

scrollToTop.addEventListener("click", e => {
    window.scrollTo({
        behavior: "smooth",
        top: 0,
        left: 0
    })
})