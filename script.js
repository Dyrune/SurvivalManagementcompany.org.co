document.addEventListener('DOMContentLoaded', () => {
    // Dropdown logic
    const dropdownButton = document.getElementById('dropdown-button');
    const dropdownContent = document.getElementById('dropdown-content');
    const cancelButton = document.getElementById('cancel-button');

    dropdownButton.addEventListener('click', () => {
        dropdownContent.classList.remove('hidden');
        dropdownContent.classList.add('visible');
        dropdownButton.style.display = 'none';
    });

    cancelButton.addEventListener('click', () => {
        dropdownContent.classList.remove('visible');
        dropdownContent.classList.add('hidden');
        dropdownButton.style.display = 'block';
    });

    document.addEventListener('click', (event) => {
        if (!dropdownContent.contains(event.target) && !dropdownButton.contains(event.target)) {
            dropdownContent.classList.remove('visible');
            dropdownContent.classList.add('hidden');
            dropdownButton.style.display = 'block';
        }
    });

    // Slider logic
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

    setInterval(() => {
        showSlide(currentIndex + 1);
    }, 3000);

    // Testimonies slider logic
    const testimoniesSlides = document.querySelector('.sliddes');
    const testimoniesSlideElements = document.querySelectorAll('.slidde');
    const totalTestimoniesSlides = testimoniesSlideElements.length;
    let testimoniesIndex = 0;

    function showTestimoniesSlide(index) {
        if (index >= totalTestimoniesSlides) {
            testimoniesIndex = 0;
        } else if (index < 0) {
            testimoniesIndex = totalTestimoniesSlides - 1;
        } else {
            testimoniesIndex = index;
        }
        testimoniesSlides.style.transform = `translateX(-${testimoniesIndex * 100}%)`;
    }

    document.querySelector('.nect').addEventListener('click', () => {
        showTestimoniesSlide(testimoniesIndex + 1);
    });

    document.querySelector('.priv').addEventListener('click', () => {
        showTestimoniesSlide(testimoniesIndex - 1);
    });

    setInterval(() => {
        showTestimoniesSlide(testimoniesIndex + 1);
    }, 10000);

    // Video carousel logic
    let videoIndex = 0;
    const videos = document.querySelector('.videos');
    const videoElements = Array.from(videos.children);
    const videoCount = videoElements.length;

    function updateCarousel() {
        const offset = -videoIndex * 100;
        videos.style.transform = `translateX(${offset}%)`;
        playCurrentVideo();
    }

    function playCurrentVideo() {
        videoElements.forEach((video, idx) => {
            if (idx === videoIndex) {
                video.play();
            } else {
                video.pause();
            }
        });
    }

    function nextVideo() {
        videoIndex = (videoIndex + 1) % videoCount;
        updateCarousel();
    }

    function prevVideo() {
        videoIndex = (videoIndex - 1 + videoCount) % videoCount;
        updateCarousel();
    }

    document.querySelector('.controls button:nth-of-type(1)').addEventListener('click', prevVideo);
    document.querySelector('.controls button:nth-of-type(2)').addEventListener('click', nextVideo);

    function handleScroll() {
        const currentVideo = videoElements[videoIndex];
        const rect = currentVideo.getBoundingClientRect();
        const inViewport = rect.left < window.innerWidth && rect.right > 0;
        if (inViewport) {
            currentVideo.play();
        } else {
            currentVideo.pause();
        }
    }

    window.addEventListener('resize', handleScroll);
    window.addEventListener('scroll', handleScroll);

    // Initial call to handle video visibility
    handleScroll();

    // Smooth scrolling and active link logic
    const contentLinks = document.querySelectorAll('.contenttt a');
    
    contentLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const targetId = link.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
            setActiveLink(targetId);
        });
    });

    function setActiveLink(targetId) {
        contentLinks.forEach(link => link.classList.remove('active'));
        const activeLink = document.querySelector(`.contenttt a[href='${targetId}']`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }

    const sections = document.querySelectorAll('section');
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.6 };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.getAttribute('id');
                setActiveLink(`#${sectionId}`);
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
});
