console.log("Hello!");

const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");

    // Bring in Nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
            // Fade in Links
        navLinks.forEach((link, index)=>{
            if (link.style.animation) {
            link.style.animation = ''
            } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`
            }
        });

    // Burger create X
        burger.classList.toggle(`toggle`)
    });
}

navSlide();

    const sections = document.querySelectorAll("section")
    const navLi = document.querySelectorAll(".nav-links li");

    window.addEventListener('scroll', ()=> {
        let current = '';
        sections.forEach( section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if(pageYOffset >= (sectionTop - sectionHeight / 3)){
                current = section.getAttribute('id')
            }
        })

        navLi.forEach(li=> {
            li.classList.remove('active'); 
            if(li.classList.contains(current)){
                li.classList.add("active")
            } 
        })
    });
