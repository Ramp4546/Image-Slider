let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let slide = document.querySelector('.slide');
let thumbnails = document.querySelectorAll('.thumb');
let seeMoreBtn = document.getElementById('seeMoreBtn');
let moreContent = document.getElementById('moreContent');

// Function to move to the next slide
next.addEventListener('click', function () {
    let items = document.querySelectorAll('.item');
    slide.appendChild(items[0]); // Move the first item to the end
});

// Function to move to the previous slide
prev.addEventListener('click', function () {
    let items = document.querySelectorAll('.item');
    slide.prepend(items[items.length - 1]); // Move the last item to the front
});

// Function to handle thumbnail click
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', function () {
        let items = document.querySelectorAll('.item');
        let currentIndex = Array.from(items).indexOf(slide.firstElementChild);

        // Calculate how far the clicked thumbnail is from the current slide
        let offset = index - currentIndex;

        // Reorder slides to bring the clicked image to the forefront
        if (offset > 0) {
            for (let i = 0; i < offset; i++) {
                slide.appendChild(slide.firstElementChild);
            }
        } else if (offset < 0) {
            for (let i = 0; i < Math.abs(offset); i++) {
                slide.prepend(slide.lastElementChild);
            }
        }
    });
});
