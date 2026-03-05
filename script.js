let testimonials = document.querySelectorAll(".testimonial");

let index = 0;

function showTestimonials(){

testimonials.forEach(t => t.classList.remove("active"));

index++;

if(index > testimonials.length){
index = 1;
}

testimonials[index-1].classList.add("active");

}

setInterval(showTestimonials,4000);
