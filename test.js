window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 5) {
      navbar.classList.add('fixed-nav');
    } else {
      navbar.classList.remove('fixed-nav');
    }
  });

  function openSideMenu(){
    document.getElementById('sideMenu').style.left = '0';
  }

  function closeSideMenu(){
    document.getElementById('sideMenu').style.left = '-100%';
  }
