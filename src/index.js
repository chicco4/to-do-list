import "./styles/global.css";
import { format } from "date-fns";
import Storage from "./modules/Storage.js";
import Project from "./modules/Project.js";
import Task from "./modules/Task.js";

import diamondIMP from "./assets/diamond_FILL0_wght400_GRAD0_opsz48.svg";
import inboxIMP from "./assets/inbox_FILL0_wght400_GRAD0_opsz48.svg";
import todayIMP from "./assets/today_FILL0_wght400_GRAD0_opsz48.svg";
import thisWeekIMP from "./assets/date_range_FILL0_wght400_GRAD0_opsz48.svg";
import addIMP from "./assets/add_FILL0_wght400_GRAD0_opsz48.svg";
import circleIMP from "./assets/radio_button_unchecked_FILL0_wght400_GRAD0_opsz48.svg";
import cirleCheckIMP from "./assets/check_circle_FILL0_wght400_GRAD0_opsz48.svg";
import closeIMP from "./assets/close_FILL0_wght400_GRAD0_opsz48.svg";
import projIMP from "./assets/checklist_FILL0_wght400_GRAD0_opsz48.svg";

/* HEADER */

function createHeader() {
  const header = document.createElement("header");

  const diamondImg = document.createElement("img");
  diamondImg.src = diamondIMP;

  const pageTitle = document.createElement("h1");
  pageTitle.textContent = "To Do List";

  header.appendChild(diamondImg);
  header.appendChild(pageTitle);

  return header;
}

/* MAIN */

function createMain() {
  /* nav */

  const main = document.createElement("main");

  const nav = document.createElement("nav");

  nav.appendChild(createButton("Inbox"));
  nav.appendChild(createButton("Today"));
  nav.appendChild(createButton("This week"));

  const title = document.createElement("h1");
  title.textContent = "Projects";

  const addProjectButton = document.createElement("buttons");
  addProjectButton.textContent = "Projects";

  nav.appendChild(title);
  nav.appendChild(getProjectsList());
  nav.appendChild(createButton("Add Project"));

  /* article */

  const article = document.createElement("article");
  article.textContent = "article";

  main.appendChild(nav);
  main.appendChild(article);

  return main;
}

function getProjectsList() {
  const projList = document.createElement("div");
  projList.classList.add("projects-list");

  return projList;
}

function createButton(string) {
  const button = document.createElement("button");
  const inboxImg = document.createElement("img");

  let imp;
  switch (string) {
    case "Inbox":
      imp = inboxIMP;
      break;
    case "Today":
      imp = todayIMP;
      break;
    case "This week":
      imp = thisWeekIMP;
      break;
    case "Add Project":
      imp = addIMP;
      break;
  }

  inboxImg.src = imp;
  const buttonTitle = document.createElement("p");
  buttonTitle.textContent = string;

  button.appendChild(inboxImg);
  button.appendChild(buttonTitle);

  button.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;

    console.log(string);
  });

  return button;
}

/* FOOTER */

function createFooter() {
  const footer = document.createElement("footer");
  footer.classList.add("footer");

  const copyright = document.createElement("p");
  copyright.textContent = `Copyright © ${new Date().getFullYear()}`;

  const githubLink = document.createElement("a");
  githubLink.href = "https://github.com/chicco4";
  githubLink.textContent = "chicco4";

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
