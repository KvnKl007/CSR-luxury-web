window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    var scrollPosition = window.scrollY;
  
    if (scrollPosition > 0) {
      header.classList.add("fixed", "backshadow");
    } else {
      header.classList.remove("fixed", "backshadow");
    }
  });

  const mainMenu = document.querySelector('.navbar', '.links', '.close');
  const closeMenu = document.querySelector('.close');
  const openMenu = document.querySelector('.hamburger');
  const menu_items = document.querySelectorAll('.navbar li a');
  
  
  
  
  openMenu.addEventListener('click',show);
  closeMenu.addEventListener('click',close);
  
  
  function show(){
      mainMenu.style.display = 'block';
      closeMenu.style.display = 'block';
      openMenu.style.display = 'none';
  }
  function close(){
      mainMenu.style.display = 'none';
      openMenu.style.display = 'block';
      closeMenu.style.display = 'none';
    }