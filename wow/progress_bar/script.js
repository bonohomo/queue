window.addEventListener('scroll', myFunction);

function myFunction(){
    let winScroll = document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    let scrolled = winScroll / height * 100;
    
    document.querySelector('#myBar').style.width = scrolled + '%';

    document.querySelector('img').style.transform = 'translate(' + (document.documentElement.clientWidth - 94) * scrolled / 100 + 'px, 0px)';
}