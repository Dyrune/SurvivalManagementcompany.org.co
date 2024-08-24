
document.addEventListener('DOMContentLoaded', () => {
    const dropdownButton = document.getElementById('dropdown-button');
    const dropdownContent = document.getElementById('dropdown-content');
    const cancelButton = document.getElementById('cancle-button');

    // Show dropdown content when dropdown button is clicked
    dropdownButton.addEventListener('click', () => {
        dropdownContent.style.display = 'flex';
        dropdownButton.style.display = 'none';
    });

    // Hide dropdown content when cancel button is clicked
    cancelButton.addEventListener('click', () => {
        dropdownContent.style.display = 'none';
        dropdownButton.style.display = 'block';
    });

    // Optional: Close dropdown if clicking outside of it
    document.addEventListener('click', (event) => {
        if (!dropdownContent.contains(event.target) && !dropdownButton.contains(event.target)) {
            dropdownContent.style.display = 'none';
            dropdownButton.style.display = 'block';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
const slides = document.querySelector('.slides');
const slideElements = document.querySelectorAll('.slide');
const totalSlides = slideElements.length;
let currentIndex = 0;

function showSlide(index) {
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

document.querySelector('.next').addEventListener('click', () => {
    showSlide(currentIndex + 1);
});

document.querySelector('.prev').addEventListener('click', () => {
    showSlide(currentIndex - 1);
});

// Optionally, auto-slide every 3 seconds
setInterval(() => {
    showSlide(currentIndex + 1);
}, 3000);


})


document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.sliddes');
    const slideElements = document.querySelectorAll('.slidde');
    const totalSlides = slideElements.length;
    let currentIndex = 0;
    
    function showSlide(index) {
        if (index >= totalSlides) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = totalSlides - 1;
        } else {
            currentIndex = index;
        }
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
    
    document.querySelector('.nect').addEventListener('click', () => {
        showSlide(currentIndex + 1);
    });
    
    document.querySelector('.priv').addEventListener('click', () => {
        showSlide(currentIndex - 1);
    });
    
    // Optionally, auto-slide every 3 seconds
    setInterval(() => {
        showSlide(currentIndex + 1);
    }, 10000);
    
    
    })
    document.addEventListener('DOMContentLoaded', () => {
        let index = 0;
        const videos = document.querySelector('.videos');
        const videoElements = Array.from(videos.children);
        const videoCount = videoElements.length;
    
        const updateCarousel = () => {
            const offset = -index * 100;
            videos.style.transform = `translateX(${offset}%)`;
            playCurrentVideo();
        };
    
        const playCurrentVideo = () => {
            videoElements.forEach((video, idx) => {
                if (idx === index) {
                    video.play();
                } else {
                    video.pause();
                }
            });
        };
    
        const nextVideo = () => {
            index = (index + 1) % videoCount;
            updateCarousel();
        };
    
        const prevVideo = () => {
            index = (index - 1 + videoCount) % videoCount;
            updateCarousel();
        };
    
        const handleScroll = () => {
            const currentVideo = videoElements[index];
            const rect = currentVideo.getBoundingClientRect();
            const inViewport = rect.left < window.innerWidth && rect.right > 0;
            if (inViewport) {
                currentVideo.play();
            } else {
                currentVideo.pause();
            }
        };
    
        const handleVideoEnd = () => {
            nextVideo();
        };
    
        videoElements.forEach(video => {
            video.addEventListener('ended', handleVideoEnd);
        });
    
        window.addEventListener('resize', handleScroll);
        window.addEventListener('scroll', handleScroll);
    
        // Initial call to handle video visibility
        handleScroll();
    });
    