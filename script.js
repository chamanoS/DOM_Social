// Get all social-item elements
const socialItems = document.querySelectorAll('.social-item');

// Add click event listener to each social-item
socialItems.forEach(item => {
    item.addEventListener('click', function() {
        const clickedImg = this.querySelector('img').src;
        const clickedText = this.querySelector('p').innerText;

        const sideBar = document.querySelector('.side-bar');
        const sideBarImg = sideBar.querySelector('img');
        const sideBarText = sideBar.querySelector('p');

        sideBarImg.src = clickedImg;
        sideBarText.innerText = clickedText;
    });
});