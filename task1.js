document.addEventListener('DOMContentLoaded', () => {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const currentImage = document.getElementById('current-image');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            // Remove active class from all thumbnails
            thumbnails.forEach(th => th.classList.remove('active'));
            // Add active class to the clicked thumbnail
            this.classList.add('active');
            // Change the current image to the clicked thumbnail's image
            currentImage.src = this.src;
        });
    });
});