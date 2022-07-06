import './styles/global.css'

console.log("test")

/* HEADER */

function createHeader() {
    const header = document.createElement("header");

    const diamondImg = document.createElement("img");
    diamondImg.src = "./assets/diamond_FILL0_wght400_GRAD0_opsz48.svg"

    const pageTitle = document.createElement("h1");
    pageTitle.textContent = "To Do List";

    header.appendChild(diamondImg);
    header.appendChild(pageTitle);

    return header;
}

/* MAIN */

function createMain() {
    const main = document.createElement("main")

    const nav = document.createElement("nav")

    const inboxBtn = document.createElement("button")
    inboxBtn.classList.add("inbox")

    const inboxImg = document.createElement("img")
    //inboxImg.src = "./assets/inbox_FILL0_wght400_GRAD0_opsz48.svg"

    inboxBtn.textContent = "Inbox"

    nav.appendChild(inboxBtn)
    main.appendChild(nav)


    return (main);
}

/* FOOTER */

function createFooter() {
    const footer = document.createElement("footer");
    footer.classList.add("footer");

    const copyright = document.createElement("p");
    copyright.textContent = `Copyright © ${new Date().getFullYear()}`;

    const githubLink = document.createElement("a");
    githubLink.href = "https://github.com/chicco4";
    githubLink.textContent = "chicco4"

    footer.appendChild(copyright);
    footer.appendChild(githubLink);

    return footer;
}

/* START */

function initializeContent() {

    document.body.appendChild(createHeader());
    document.body.appendChild(createMain());
    document.body.appendChild(createFooter());

}

initializeContent();