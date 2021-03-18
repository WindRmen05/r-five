const x = document.querySelectorAll('#moreBtn')

x.forEach((el) => {
    el.addEventListener('click',(e) => {
        console.log('clicked')
        console.log(e.target.parentElement.children[2].classList.toggle('more'));
        if(e.target.textContent == 'more') {
            e.target.textContent = 'less';
            // console.log(e.target)
        } else {
            e.target.textContent = 'more';
        }
    })
});