// //Variables
// // const homeBtn = document.getElementById("home");
// // const aboutBtn = document.getElementById("about");
// // const catalogBtn = document.getElementById("catalog");
// // const referencesBtn = document.getElementById("references");
// // const technologyBtn = document.getElementById("technology");
// // const sportsBtn = document.getElementById("sports");
// // const financeBtn = document.getElementById("finance");
window.addEventListener('load', function () {

  // Search button
  const searchBtn = document.getElementById('searchBtn');
  searchBtn.addEventListener('click', function () {
    let searchtxt = document.getElementById('searchText').value;
    newsquery =
      `https://newsapi.org/v2/everything?q=${searchtxt}&apiKey=19fd2331c7c643c7b91600722cbd75a2`;
    console.log(newsquery);

    
  });


  // Theme change
  let changetheme = () => {
    // try {
    //   theme_ = localStorage.getItem("theme")
    // }
    // catch {

    let themeLabel = this.document.getElementById('themeLabel');
    if (document.getElementById('flexSwitchCheckChecked').checked) {
      this.localStorage.setItem('theme', 'dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      themeLabel.innerHTML = 'Light Mode';
      topNav = document.getElementById('top-nav');

      // Navbar
      topNav.classList.remove('navbar', 'bg-body-tertiary');
      topNav.classList.add('navbar', 'bg-dark', 'navbar-dark');
    } else {
      this.localStorage.setItem('theme', 'light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      themeLabel.innerHTML = 'Dark Mode';

      // Navbar
      topNav.classList.remove('navbar', 'bg-dark', 'navbar-dark');
      topNav.classList.add('navbar', 'navbar-expand-lg', 'bg-body-tertiary');
    }
    // }
  };

  document
    .getElementById('flexSwitchCheckChecked')
    .addEventListener('change', changetheme);
});

// // const newsQuery = document.getElementById('newsQuery');
// //need to add stuff here (min 17)

// //APIs
// homeBtn.addEventListener("click", function () {

// });

// aboutBtn.addEventListener('click', function () {

// });

// catalogBtn.addEventListener('click', function () {

// });

// referencesBtn.addEventListener('click', function () {

// });

// technologyBtn.addEventListener('click', function () {

// });

// sportsBtn.addEventListener('click', function () {

// });

// financeBtn.addEventListener('click', function () {

// });
