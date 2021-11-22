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
    const sectionElement = `
        <section class="section" id="${sectionContent.id}" data-nav="${sectionContent.dataNav}">
            <h2 class="section__heading">${sectionContent.dataNav}</h2>
            ${sectionContent.text.map(text => `<p class="section__text">${text}</p>`).join("")}
        </section>
    `

    main.innerHTML += sectionElement;
});