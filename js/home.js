    {
        const contentClassObject = document.querySelector('#mainvisual');
    
        window.addEventListener('scroll', function(){
            const scrollValue = document.documentElement.scrollTop;
            const position = 'center ' + - (scrollValue / 50) + 'px';
            contentClassObject.style.backgroundPosition = position;
        });
    
        $(function(){
            $(window).fadeThis({
                speed:1000
            });
        })
    }
    
    {
        function ScrollWindow(elem){
            var element = document.getElementById(elem);
            var rect = element.getBoundingClientRect();
            var elemtop = rect.top + window.pageYOffset;
            document.documentElement.scrollTop = elemtop;
        }
    }