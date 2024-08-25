document.addEventListener('DOMContentLoaded', () => {
    const dropdownButton = document.getElementById('dropdown-button');
    const dropdownContent = document.getElementById('dropdown-content');
    const cancelButton = document.getElementById('cancel-button');

    // Show dropdown content when dropdown button is clicked
    dropdownButton.addEventListener('click', () => {
        dropdownContent.classList.remove('hidden');
        dropdownContent.classList.add('visible');
        dropdownButton.style.display = 'none';
    });

    // Hide dropdown content when cancel button is clicked
    cancelButton.addEventListener('click', () => {
        dropdownContent.classList.remove('visible');
        dropdownContent.classList.add('hidden');
        dropdownButton.style.display = 'block';
    });

    // Optional: Close dropdown if clicking outside of it
    document.addEventListener('click', (event) => {
        if (!dropdownContent.contains(event.target) && !dropdownButton.contains(event.target)) {
            dropdownContent.classList.remove('visible');
            dropdownContent.classList.add('hidden');
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
        // Ensure index is within bounds
        if (index >= totalSlides) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = totalSlides - 1;
        } else {
            currentIndex = index;
        }
        
        // Move slides
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
    
    document.querySelector('.nect').addEventListener('click', () => {
        showSlide(currentIndex + 1);
    });
    
    document.querySelector('.priv').addEventListener('click', () => {
        showSlide(currentIndex - 1);
    });
    
    // Auto-slide every 3 seconds
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
    

    document.addEventListener("DOMContentLoaded", function () {
      // Get all anchor links inside the 'contenttt' class
      const contentLinks = document.querySelectorAll(".contenttt a");
  
      // Add click event listener to each link
      contentLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
          // Prevent the default click action
          event.preventDefault();
  
          // Get the href attribute of the clicked link (this is the target ID)
          const targetId = this.getAttribute("href");
  
          // Scroll to the target element smoothly
          document.querySelector(targetId).scrollIntoView({
            behavior: "smooth"
          });
  
          // Update active class on click
          setActiveLink(targetId);
        });
      });
  
      // Function to set the active link
      function setActiveLink(targetId) {
        contentLinks.forEach(function (link) {
          link.classList.remove("active");
        });
        const activeLink = document.querySelector(`.contenttt a[href='${targetId}']`);
        if (activeLink) {
          activeLink.classList.add("active");
        }
      }
  
      // Intersection Observer to update the active link on scroll
      const sections = document.querySelectorAll("section");
      const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.6 // 60% of the section should be visible for it to be considered active
      };
  
      const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute("id");
            setActiveLink(`#${sectionId}`);
          }
        });
      }, observerOptions);
  
      sections.forEach(function (section) {
        observer.observe(section);
      });
    });
  