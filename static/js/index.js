// Constants for theme
const DARK_THEME = {
  background: 'black',
  color: 'white',
  navbar: ['navbar', 'bg-dark', 'navbar-dark'],
  navbarRemove: ['navbar', 'bg-body-tertiary'],
  label: 'Light Mode',
};

const LIGHT_THEME = {
  background: 'white',
  color: 'black',
  navbar: ['navbar', 'navbar-expand-lg', 'bg-body-tertiary'],
  navbarRemove: ['navbar', 'bg-dark', 'navbar-dark'],
  label: 'Dark Mode',
};

function setTheme(theme) {
  const topNav = document.getElementById('top-nav');
  const themeLabel = document.getElementById('themeLabel');

  document.body.style.backgroundColor = theme.background;
  document.body.style.color = theme.color;
  themeLabel.innerHTML = theme.label;

  topNav.classList.remove(...theme.navbarRemove);
  topNav.classList.add(...theme.navbar);
}

function setThemeFromLocalStorage() {
  const theme = localStorage.getItem('theme');
  if (theme === 'dark') {
    setTheme(DARK_THEME);
    document.getElementById('flexSwitchCheckChecked').checked = true;
  } else {
    setTheme(LIGHT_THEME);
    document.getElementById('flexSwitchCheckChecked').checked = false;
  }
}

window.addEventListener('load', function () {
  setThemeFromLocalStorage();

  // Variables
  const technologyBtn = document.getElementById('technology');
  const sportsBtn = document.getElementById('sports');
  const financeBtn = document.getElementById('finance');

  // Search button
  const searchBtn = document.getElementById('searchBtn');
  searchBtn.addEventListener('click', function () {
    const searchtxt = document.getElementById('searchText').value;
    const newsquery = `https://newsapi.org/v2/everything?q=${searchtxt}&apiKey=19fd2331c7c643c7b91600722cbd75a2`;
    console.log(newsquery);
  });

  // Get data
  const pgSize = '8';
  const pg = '1';
  let cate = '';

  async function getData() {
    try {
      const categoryAPI = `https://newsapi.org/v2/top-headlines?category=${cate}&pageSize=${pgSize}&page=${pg}&apiKey=19fd2331c7c643c7b91600722cbd75a2`;
      const dataAPI = await fetch(categoryAPI);
      const jsonData = await dataAPI.json();
      console.log(jsonData);
    } catch (error) {
      console.error('Error fetching the news data:', error);
    }
  }

  // Theme change
  document
    .getElementById('flexSwitchCheckChecked')
    .addEventListener('change', function () {
      if (this.checked) {
        localStorage.setItem('theme', 'dark');
        setTheme(DARK_THEME);
      } else {
        localStorage.setItem('theme', 'light');
        setTheme(LIGHT_THEME);
      }
    });

  // Fetching data
  technologyBtn.addEventListener('click', function () {
    cate = 'technology';
    getData();
  });

  sportsBtn.addEventListener('click', function () {
    cate = 'sports';
    getData();
  });

  financeBtn.addEventListener('click', function () {
    cate = 'business';
    getData();
  });
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
