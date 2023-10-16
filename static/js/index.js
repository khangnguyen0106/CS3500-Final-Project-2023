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
  // Setup redirection
  let path = window.location.pathname;
  // API data setup
  const pgSize = '8';
  const pg = '1';
  let searchBool = false;
  let searchquery = '';

  switch (
    true // switching on 'true' to allow each case to evaluate a condition
  ) {
    case path.includes('technology'):
      getData('technology');
      break;
    case path.includes('sports'):
      getData('sports');
      break;
    case path.includes('finance'):
      getData('business');
      break;

    default:
      getData('general');
      break;
  }

  // Navbar
  let nav = document.getElementById(`navBarJS`);
  let nvbar = `<nav class="navbar navbar-expand-lg bg-body-tertiary" id="top-nav">
        <div class="container-fluid">
          <a class="navbar-brand" href="./index.html">World News</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a
                  class="nav-link"
                  aria-current="page"
                  href="./index.html"
                  id="home"
                  >Home</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./about.html" id="about">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./Catalog.html" id="catalog"
                  >Catalog</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./references.html" id="references"
                  >References</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./technology.html" id="technology">Technology</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./sports.html" id="sports">Sports</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./finance.html" id="finance">Finance</a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="text"
                placeholder="Search"
                id="searchText"
              />
              <button
                class="btn btn-outline-warning"
                type="button"
                id="searchBtn"
                style="margin-right: 20px"
              >
                Search
              </button>

              <div class="form-check form-switch" style="align-items: right">
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckChecked"
                />

                <label
                  class="form-check-label"
                  for="flexSwitchCheckChecked"
                  onclick="changetheme()"
                  id="themeLabel"
                  >Dark Mode</label
                >
              </div>
            </form>
          </div>
        </div>
      </nav>`;
  nav.innerHTML = nvbar;
  setThemeFromLocalStorage();

  // Variables
  const technologyBtn = document.getElementById('technology');
  const sportsBtn = document.getElementById('sports');
  const financeBtn = document.getElementById('finance');

  // Search button
  const searchBtn = document.getElementById('searchBtn');
  searchBtn.addEventListener('click', function () {
    searchBool = true;
    const searchtxt = document.getElementById('searchText').value;
    searchquery = `https://newsapi.org/v2/top-headlines?q=${searchtxt}&apiKey=19fd2331c7c643c7b91600722cbd75a2`;
    getData('general');
  });

  // Get API data
  async function getData(cat) {
    try {
      let categoryAPI = `https://newsapi.org/v2/top-headlines?country=us&category=${cat}&pageSize=${pgSize}&page=${pg}&apiKey=19fd2331c7c643c7b91600722cbd75a2`;
      if (searchBool == true) {
        categoryAPI = searchquery;
      }
      const dataAPI = await fetch(categoryAPI);
      const jsonData = await dataAPI.json();

      // Output data
      let template = ` <div class="row">`;
      jsonData.articles.map((d) => {
        if (d.urlToImage !== null) {
          template += `<div class='col-md-4'>
          <div class="card" style="width: 90% ;margin: 2px 0 2px 0;" }}>      
        <img src=${d.urlToImage} class="card-img-top"  />
        <div class="card-body">
          <h5 class="card-title">${d.title ? d.title.slice(0, 45) : ''}...</h5>
          <p class="card-text">
             ${d.description ? d.description.slice(0, 88) : ''}..
          </p>
          <a href=${d.url} target="#" class="btn btn-primary">See Page</a>
        </div>
      </div>
      </div>`;
        }
      });
      template += `</div>`;
      try {
        document.getElementById('newsID').innerHTML = template;
      } catch (warning) {}
    } catch (error) {
      window.warning('Error fetching the news data:', error);
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
});
