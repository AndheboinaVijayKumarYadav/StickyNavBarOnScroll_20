// variables
const links = document.querySelectorAll('.nav-list li a');

/* console.log(links); */

for(let link of links){

  /*   console.log(link.getAttribute("href")) */
    link.addEventListener('click',smoothScroll);
}

function smoothScroll(e){
    e.preventDefault();

    const href = this.getAttribute('href');

    // used scrollIntoView Web API
    document.querySelector(href).scrollIntoView({
        behavior: 'smooth',
    });

}


window.addEventListener('scroll', () => {
    const header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 0);
})