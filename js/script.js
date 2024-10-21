// JavaScript to control the modal
function openModal(id) {
    document.getElementById(id).style.display = "flex";
}

function closeModal(id) {
    document.getElementById(id).style.display = "none";
}

// Close the modal if the user clicks outside of it
window.onclick = function (event) {
    const contactModal = document.getElementById("myModal");
    if (event.target === contactModal) {
        contactModal.style.display = "none";
    }

    const thumbnailsModal = document.getElementById("thumbnails");
    if (event.target === thumbnailsModal) {
        thumbnailsModal.style.display = "none";
    }
};

window.onload = function () {
    const imgs = [
        document.getElementById('profile-photo'),
        document.getElementById('gojo-clan-symbol'),
        document.getElementById('ecole-exorcisme-tokyo'),
        document.getElementById('gojo-vs-bayer-1'),
        document.getElementById('gojo-vs-bayer-2'),
        document.getElementById('hanami'),
        document.getElementById('gojo-vs-hanami'),
        document.getElementById('toji'),
        document.getElementById('gojo-vs-toji'),
    ]
    const main = document.getElementById("visible-image-in-thumbnail")

    for(let i=0;i<imgs.length;i++){
        let img=imgs[i]

        img.addEventListener("click",function(){
            main.src=this.src
            openModal('thumbnails')
        })

    }

    const scrollLinks = document.querySelectorAll('.scroll-link');

    // Add click event listeners to each scroll link
    scrollLinks.forEach(function (scrollLink) {
        scrollLink.addEventListener('click', function (event) {
            event.preventDefault();

            // Get the target element's ID from the href attribute
            const targetId = scrollLink.getAttribute('href');

            // Use the scrollIntoView method to smoothly scroll to the target element
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}


