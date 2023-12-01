// menu-burger
function navToggle() {
	document.getElementById("headerUl").classList.toggle("_active");
	document.getElementById("html").classList.toggle("_overflow");
}

// date copyright
document.getElementById("copyright").textContent = new Date().getFullYear();

// dark mode
function themeToggle() {
	document.getElementById("html").classList.toggle("_theme");
	const isDarkMode = localStorage.getItem("darkMode") === "enabled";
	if (isDarkMode) {
		localStorage.setItem("darkMode", null);
	} else {
		localStorage.setItem("darkMode", 'enabled');
	}
}

// динамический расчет и установка отступа (padding-top) (чтобы фикс.хедер не перекрывал след.секцию)
document.addEventListener('DOMContentLoaded', function() {
    
    const headerHeight = document.querySelector('.header').offsetHeight;
  
    document.querySelector('.carousel').style.paddingTop = headerHeight + 'px';
  
    window.addEventListener('resize', function() {
      
      const updatedHeaderHeight = document.querySelector('.header').offsetHeight;
  
      document.querySelector('.carousel').style.paddingTop = updatedHeaderHeight + 'px';
    });
  });



  // когда активен search убрать иконку search__icon
  document.getElementById('searchContainer').addEventListener('click', function() {
    this.classList.add('active');
  });
  
  document.addEventListener('mouseup', function(e) {
    const searchContainer = document.getElementById('searchContainer');
    if (!searchContainer.contains(e.target)) {
      searchContainer.classList.remove('active');
    }
  });



// document.addEventListener("DOMContentLoaded", function () {
//     function navToggle() {
//         var headerNav = document.getElementById('headerNav');
//         headerNav.classList.toggle('is-active');
//     }

//     function closeMenu() {
//         var headerNav = document.getElementById('headerNav');
//         headerNav.classList.remove('is-active');
//     }

//     var menuLinks = document.querySelectorAll('.header__a');

//     menuLinks.forEach(function (link) {
//         link.addEventListener('click', function () {
//             closeMenu();
//         });
//     });
// });