// contact form

const form = document.querySelector(".contact-form");


if(form){

form.addEventListener("submit", function(e){

    e.preventDefault();


    alert("message sent successfully!");


    form.reset();

});

}





// smooth navigation

const links = document.querySelectorAll(".nav-links a");


links.forEach(link => {

    link.addEventListener("click", function(e){

        const section = document.querySelector(
            this.getAttribute("href")
        );


        if(section){

            e.preventDefault();

            section.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});





// automatic year

const footer = document.querySelector("footer p");


if(footer){

footer.innerHTML =
`© ${new Date().getFullYear()} Aaron.dev | Frontend Developer`;

}