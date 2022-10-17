// Full page navigation menu
const menuBtn = document.querySelector('.hamburger-menu');
const mobileNav = document.querySelector('.nav-bar');

menuBtn.addEventListener('click', () => {
  mobileNav.classList.toggle('active');
  document.body.classList.toggle('overflow-disabled');
});

const navlinks = document.getElementsByClassName('link');

for (let i = 0; i < navlinks.length; i += 1) {
  navlinks[i].addEventListener('click', () => {
    mobileNav.classList.toggle('active');
    document.body.classList.toggle('overflow-disabled');
  });
}
// Full page navigation menu

// Dynamic works section

// objects
const worksArray = [
  {
    portfolio_image: 'assets/moneye.png',
    portfolio_title: 'Moneye',
    portfolio_description:
      'A mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what.',
    tech_tag1: 'Ruby on Rails',
    tech_tag2: 'Ruby',
    tech_tag3: 'PostgreSQL',
    tech_tag4: 'CSS',
    button_text: 'See Project',
    // modal data
    live_link: 'https://moneye-app.herokuapp.com/',
    github_source: 'https://github.com/huseyinbiyik/moneye',
  },
  {
    portfolio_image: 'assets/holidays-worldwide.png',
    portfolio_title: 'Holidays Worldwide',
    portfolio_description:
      'It is a Single Page Application which you can view holidays in 110 countries. You can use the search bar to find the country you would like to list its holidays.',
    tech_tag1: 'React',
    tech_tag2: 'Redux',
    tech_tag3: 'Redux-Thunk',
    tech_tag4: 'CSS',
    button_text: 'See Project',
    // modal data
    live_link: 'https://huseyinbiyik.github.io/holidays-worldwide/',
    github_source: 'https://github.com/huseyinbiyik/holidays-worldwide',
  },
  {
    portfolio_image: 'assets/to-do-list.png',
    portfolio_title: 'Minimalist',
    portfolio_description:
      'A minimalistic to do list app. You can add, delete and edit your tasks. Built with plain JavaScript.',
    tech_tag1: 'HTML',
    tech_tag2: 'CSS',
    tech_tag3: 'JavaScript',
    tech_tag4: 'Webpack',
    button_text: 'See Project',
    // modal data
    live_link: 'https://huseyinbiyik.github.io/minimalist/',
    github_source: 'https://github.com/huseyinbiyik/to-do-list',
  },
  {
    portfolio_image: 'assets/awesome-books.png',
    portfolio_title: 'awesome-books',
    portfolio_description:
      'A web application which you can save and list your favourite books. Built with JavaScript',
    tech_tag1: 'HTML',
    tech_tag2: 'CSS',
    tech_tag3: 'JavaScript',
    tech_tag4: 'ES6',
    button_text: 'See Project',
    // modal data
    live_link: 'https://huseyinbiyik.github.io/awesome-books',
    github_source: 'https://github.com/huseyinbiyik/awesome-books',
  },
  {
    portfolio_image: 'assets/bomberman-leaderboard.png',
    portfolio_title: 'bomberman-leaderboard',
    portfolio_description:
      ' bomberman leaderboard is an web app which you can add your best score on classic Bomberman Atari game. You can check all the other scores from the players all around the world!',
    tech_tag1: 'HTML',
    tech_tag2: 'CSS',
    tech_tag3: 'JavaScript',
    tech_tag4: 'Webpack',
    button_text: 'See Project',
    // modal data
    live_link: 'https://huseyinbiyik.github.io/bomberman-leaderboard',
    github_source: 'https://github.com/huseyinbiyik/bomberman-leaderboard',
  },
];

// dynamic content function
const portfolioContainer = document.getElementById('portfolio-works');
for (let i = 0; i < worksArray.length; i += 1) {
  portfolioContainer.innerHTML += ` <article class="portfolio-post work1">
 <div class="portfolio-image-container">    <img class="portfolio-work-image portfolio-img" src="${
  worksArray[i].portfolio_image
}" alt="work section project image" />
 </div>
 <div class="portfolio-description-section">
    <div class="portfolio-header">
      <h3 class="portfolio-title">${worksArray[i].portfolio_title}</h3>
   </div>
    <p class="descriptive-text">${worksArray[i].portfolio_description}</p>
    <div class="portfolio-tags">
      <ul>
       <li>
       <p class="tech-tag1">${worksArray[i].tech_tag1}</p>
        </li>
        <li>
         <p class="tech-tag2">${worksArray[i].tech_tag2}</p>
       </li>
       <li>
        <p class="tech-tag3">${worksArray[i].tech_tag3}</p>
        </li>
      <li>
        <p class="tech-tag4">${worksArray[i].tech_tag4}</p>
      </li>     </ul>
    </div>
    <button type="button" id="${[i]}"class="see-project-btn btn-1">
      ${worksArray[i].button_text}
    </button>
  </div>
</article>`;
}

// creating dynamic modal
const projectBtns = document.querySelectorAll('.see-project-btn');
projectBtns.forEach((element) => {
  element.addEventListener('click', () => {
    const dialogBox = document.createElement('dialog');
    dialogBox.classList.add('modal');
    dialogBox.innerHTML = `
   <article class="portfolio-post modal1">
     <h3 class="modal-header">
${worksArray[element.id].portfolio_title}
     </h3>
     <img src="assets/cancelicon.svg" class="modal-close">

     <img class="modal-image" src="${
  worksArray[element.id].portfolio_image
}" alt="" />

     <p class="modal-text">
     ${worksArray[element.id].portfolio_description}
     </p>
     <ul class="modal-tags">
       <li>
         <p class="modal-tech-tag-1 modal-long-desc">
         ${worksArray[element.id].tech_tag1}
         </p>
       </li>
       <li>
         <p class="modal-tech-tag-2 modal-long-desc">
         ${worksArray[element.id].tech_tag2}
         </p>
       </li>
       <li>
         <p class="modal-tech-tag-3 modal-long-desc">
         ${worksArray[element.id].tech_tag3}
         </p>
       </li>
       <li>
         <p class="modal-tech-tag-3 modal-long-desc">
         ${worksArray[element.id].tech_tag4}
         </p>
       </li>
     </ul>
     <div class="modal-button-container">
       <a href="${worksArray[element.id].live_link}">
         See Live
         <img src="assets/outerlink.svg" alt="" />
       </a> <a href="${worksArray[element.id].github_source}">
         See Source
         <img src="assets/githubicon.svg" alt="" />
       </a> </div>
   </article>
   `;

    document.body.appendChild(dialogBox);
    dialogBox.showModal();
    // modal close
    const modalCloseBtns = document.querySelectorAll('.modal-close');
    modalCloseBtns.forEach((el) => {
      el.addEventListener('click', () => {
        dialogBox.close();
      });
    });
  });
});

// form validation
const form = document.getElementById('contact-form');
const email = document.getElementById('email');
const warningMessage = document.getElementById('warning-message');
const reg = /^[a-z0-9_-]+@[a-z0-9]+\.[a-z]+\.?[a-z]+/g;

form.addEventListener('submit', (event) => {
  if (!reg.test(email.value)) {
    event.preventDefault();
    warningMessage.style.visibility = 'visible';
    warningMessage.innerHTML = 'Email must include only small letter';
    warningMessage.style.color = 'tomato';
    setTimeout(() => {
      warningMessage.style.visibility = 'hidden';
    }, 5000);
  } else {
    warningMessage.style.visibility = 'hidden';
  }
});

// Local storage
const usName = document.getElementById('name');
const usEmail = document.getElementById('email');
const usMessage = document.getElementById('msg');

function populateStorage() {
  // create visitor object
  const visitor = {
    userName: usName.value,
    userEmail: usEmail.value,
    userMessage: usMessage.value,
  };
  localStorage.setItem('visitor', JSON.stringify(visitor));
}

// Trigger for populating local storage
usName.addEventListener('focusout', populateStorage);
usEmail.addEventListener('focusout', populateStorage);
usMessage.addEventListener('focusout', populateStorage);
// Parse data from local storage
const userDataObject = JSON.parse(localStorage.getItem('visitor'));

// Refilling form inputs
if (userDataObject) {
  usName.value = userDataObject.userName;
  usEmail.value = userDataObject.userEmail;
  usMessage.value = userDataObject.userMessage;
}
