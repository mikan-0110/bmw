{
    const mainNavigation = document.querySelector('.mainNavigation');
    const menuButton = document.querySelector('.menuButton');
    const buttonClose = document.querySelector('.buttonClose');
    
    menuButton.addEventListener('click', function(){
        menuButton.classList.toggle('active');
        mainNavigation.classList.toggle('open');
    });

    buttonClose.addEventListener('click', function(){
        menuButton.classList.toggle('active');
        mainNavigation.classList.toggle('open');
    });
    
    }

