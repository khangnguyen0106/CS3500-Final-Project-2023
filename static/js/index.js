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
    console.log('search!!!');
  });

  // Theme change
  let changetheme = () => {
    if (document.getElementById('flexSwitchCheckChecked').checked) {
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
    } else {
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
    let themeLabel = this.document.getElementById('themeLabel');
    if (themeLabel.innerHTML === 'Dark') {
      themeLabel.innerHTML = 'Light';
    } else {
      themeLabel.innerHTML = 'Dark';
    }
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
