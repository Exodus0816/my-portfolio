// Portfolio popup functionality
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    // Filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get filter value
            const filterValue = this.getAttribute('data-filter');
            
            // Filter portfolio items
            portfolioItems.forEach((item, index) => {
                const category = item.getAttribute('data-category');
                
                if (filterValue === 'all' || category === filterValue) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Popup functionality for portfolio items
    portfolioItems.forEach(item => {
        item.addEventListener('click', function() {
            const projectName = this.querySelector('h3').textContent;
            const projectImages = getProjectImages(projectName);
            if (projectImages.length > 0) {
                openProjectPopup(projectName, projectImages);
            }
        });
    });

    // Animate stats on scroll
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumber = entry.target.querySelector('.stat-number');
                const finalNumber = parseInt(statNumber.textContent.replace(/[^0-9]/g, ''));
                const suffix = statNumber.textContent.replace(/[0-9]/g, '');
                
                animateNumber(statNumber, 0, finalNumber, suffix, 2000);
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.stat-item').forEach(item => {
        statsObserver.observe(item);
    });
});

// Project image mapping
function getProjectImages(projectName) {
    const projectImageMap = {
        // Architectural Design Projects
        'A2 Apartment': [
            'assets/images/works/Projects/Architectural Designs/A2 Apartment/Scene 23.png',
            'assets/images/works/Projects/Architectural Designs/A2 Apartment/Scene 28.png',
            'assets/images/works/Projects/Architectural Designs/A2 Apartment/Scene 29.png',
            'assets/images/works/Projects/Architectural Designs/A2 Apartment/Scene 30.png'
        ],
        'Mohammed Building': [
            'assets/images/works/Projects/Architectural Designs/Mohammed Building/Scene 1.png',
            'assets/images/works/Projects/Architectural Designs/Mohammed Building/1.png',
            'assets/images/works/Projects/Architectural Designs/Mohammed Building/Image_1.png',
            'assets/images/works/Projects/Architectural Designs/Mohammed Building/Scene 5.png'
        ],
        'Mustafa Mixed Building': [
            'assets/images/works/Projects/Architectural Designs/Mustafa Mixed Building/Scene 16_3.png',
            'assets/images/works/Projects/Architectural Designs/Mustafa Mixed Building/1.png',
            'assets/images/works/Projects/Architectural Designs/Mustafa Mixed Building/Image_23.png',
            'assets/images/works/Projects/Architectural Designs/Mustafa Mixed Building/Scene 18_1.png'
        ],
        'Top Five Apartment': [
            'assets/images/works/Projects/Architectural Designs/Top Five Apartment/Scene 10.png',
            'assets/images/works/Projects/Architectural Designs/Top Five Apartment/2.png',
            'assets/images/works/Projects/Architectural Designs/Top Five Apartment/Scene 4_1.png',
            'assets/images/works/Projects/Architectural Designs/Top Five Apartment/Scene 7_1.png'
        ],
        
        // Interior Design Projects
        'Ahnek Rwanda': [
            'assets/images/works/Projects/Interior Designs/Ahnek Rwanda/Aug 08 2.png',
            'assets/images/works/Projects/Interior Designs/Ahnek Rwanda/Aug 08 3.png',
            'assets/images/works/Projects/Interior Designs/Ahnek Rwanda/Bedroom 1.png',
            'assets/images/works/Projects/Interior Designs/Ahnek Rwanda/interior 2.png',
            'assets/images/works/Projects/Interior Designs/Ahnek Rwanda/interior 3.png',
            'assets/images/works/Projects/Interior Designs/Ahnek Rwanda/interior 4.png',
            'assets/images/works/Projects/Interior Designs/Ahnek Rwanda/Living and Dining 1.png',
            'assets/images/works/Projects/Interior Designs/Ahnek Rwanda/lobby.png'
        ],
        'Ato Solomon Apartment': [
            'assets/images/works/Projects/Interior Designs/Ato Solomon Apartment/1 feb 5.png',
            'assets/images/works/Projects/Interior Designs/Ato Solomon Apartment/1 feb 9.png',
            'assets/images/works/Projects/Interior Designs/Ato Solomon Apartment/front web.jpg'
        ],
        'Dagmawi Apartment': [
            'assets/images/works/Projects/Interior Designs/Dagmawi Apartment/Scene 3.png',
            'assets/images/works/Projects/Interior Designs/Dagmawi Apartment/1.png',
            'assets/images/works/Projects/Interior Designs/Dagmawi Apartment/2.png',
            'assets/images/works/Projects/Interior Designs/Dagmawi Apartment/3.png',
            'assets/images/works/Projects/Interior Designs/Dagmawi Apartment/Image_12.png',
            'assets/images/works/Projects/Interior Designs/Dagmawi Apartment/Image_13.png',
            'assets/images/works/Projects/Interior Designs/Dagmawi Apartment/Image_15.png',
            'assets/images/works/Projects/Interior Designs/Dagmawi Apartment/Image_16.png',
            'assets/images/works/Projects/Interior Designs/Dagmawi Apartment/Scene 19.png'
        ],
        'Dina Penthouse': [
            'assets/images/works/Projects/Interior Designs/Dina Penthouse/1 july 15.png',
            'assets/images/works/Projects/Interior Designs/Dina Penthouse/1.png'
        ],
        'Negus Commercial Building Interior': [
            'assets/images/works/Projects/Interior Designs/Negus Commercial Building Interior/1 june 27.png',
            'assets/images/works/Projects/Interior Designs/Negus Commercial Building Interior/2 june 27.png',
            'assets/images/works/Projects/Interior Designs/Negus Commercial Building Interior/2 june 28.png',
            'assets/images/works/Projects/Interior Designs/Negus Commercial Building Interior/3 june 27.png'
        ],
        
        // Architectural Visualization Projects
        'Ahnek Rwanda Mixed Use': [
            'assets/images/works/Projects/Architectural Vizualization/Ahnek Rwanda MIxed Use Apartment/Exterior11.png',
            'assets/images/works/Projects/Architectural Vizualization/Ahnek Rwanda MIxed Use Apartment/Exterior6.png',
            'assets/images/works/Projects/Architectural Vizualization/Ahnek Rwanda MIxed Use Apartment/Exterior7.png',
            'assets/images/works/Projects/Architectural Vizualization/Ahnek Rwanda MIxed Use Apartment/Exterior9.png'
        ],
        'Arada Commercial Building': [
            'assets/images/works/Projects/Architectural Vizualization/Arada Commercial Building/44 jan 13.png',
            'assets/images/works/Projects/Architectural Vizualization/Arada Commercial Building/55 JAN 13.png',
            'assets/images/works/Projects/Architectural Vizualization/Arada Commercial Building/66 JAN 13.png',
            'assets/images/works/Projects/Architectural Vizualization/Arada Commercial Building/77 JAN 13.png',
            'assets/images/works/Projects/Architectural Vizualization/Arada Commercial Building/99 JAN 13.png'
        ],
        'Ayat Abo Church': [
            'assets/images/works/Projects/Architectural Vizualization/Ayat Abo Church/11 jan 4.png'
        ],
        'Bisrat Residence': [
            'assets/images/works/Projects/Architectural Vizualization/Bisrat Residence/1 NOV 24.png',
            'assets/images/works/Projects/Architectural Vizualization/Bisrat Residence/1 NOV 26.png',
            'assets/images/works/Projects/Architectural Vizualization/Bisrat Residence/1 NOV 29.png',
            'assets/images/works/Projects/Architectural Vizualization/Bisrat Residence/Scene 10.png',
            'assets/images/works/Projects/Architectural Vizualization/Bisrat Residence/Scene 11.png'
        ],
        'BluNile Mixed Use': [
            'assets/images/works/Projects/Architectural Vizualization/BluNile Mxed Use Apartment/sept 16 1.png',
            'assets/images/works/Projects/Architectural Vizualization/BluNile Mxed Use Apartment/sept 16 2.png',
            'assets/images/works/Projects/Architectural Vizualization/BluNile Mxed Use Apartment/sept 16.png',
            'assets/images/works/Projects/Architectural Vizualization/BluNile Mxed Use Apartment/sept 17 1.png',
            'assets/images/works/Projects/Architectural Vizualization/BluNile Mxed Use Apartment/sept 17 2.png',
            'assets/images/works/Projects/Architectural Vizualization/BluNile Mxed Use Apartment/sept 17.png'
        ],
        'CCRA Meeting Hall': [
            'assets/images/works/Projects/Architectural Vizualization/CCRA Meeting Hall/16.png',
            'assets/images/works/Projects/Architectural Vizualization/CCRA Meeting Hall/18.png',
            'assets/images/works/Projects/Architectural Vizualization/CCRA Meeting Hall/Image_4.png',
            'assets/images/works/Projects/Architectural Vizualization/CCRA Meeting Hall/Image_6.png'
        ],
        'Deriba Residence': [
            'assets/images/works/Projects/Architectural Vizualization/Deriba Residence/1 JUNE 23.png',
            'assets/images/works/Projects/Architectural Vizualization/Deriba Residence/2JUNE 23.png',
            'assets/images/works/Projects/Architectural Vizualization/Deriba Residence/3 JUNE 23.png',
            'assets/images/works/Projects/Architectural Vizualization/Deriba Residence/4 JUNE 23.png'
        ],
        'Eternal Media': [
            'assets/images/works/Projects/Architectural Vizualization/Eternal Media Mixed Use Apartment/Scene 15.png',
            'assets/images/works/Projects/Architectural Vizualization/Eternal Media Mixed Use Apartment/Sept 4.png'
        ],
        'Ethiopia Residence': [
            'assets/images/works/Projects/Architectural Vizualization/Ethiopia Residence/1 nov 26.png',
            'assets/images/works/Projects/Architectural Vizualization/Ethiopia Residence/1.png',
            'assets/images/works/Projects/Architectural Vizualization/Ethiopia Residence/2.png',
            'assets/images/works/Projects/Architectural Vizualization/Ethiopia Residence/3.png',
            'assets/images/works/Projects/Architectural Vizualization/Ethiopia Residence/4 nov 24.png',
            'assets/images/works/Projects/Architectural Vizualization/Ethiopia Residence/4.png',
            'assets/images/works/Projects/Architectural Vizualization/Ethiopia Residence/5 nov 24.png',
            'assets/images/works/Projects/Architectural Vizualization/Ethiopia Residence/6.png'
        ],
        'Maxis Apartment': [
            'assets/images/works/Projects/Architectural Vizualization/Maxis Apartment/Bedroom 1.jpg',
            'assets/images/works/Projects/Architectural Vizualization/Maxis Apartment/Bedroom 2.jpg',
            'assets/images/works/Projects/Architectural Vizualization/Maxis Apartment/front web.jpg',
            'assets/images/works/Projects/Architectural Vizualization/Maxis Apartment/kitchen.jpg',
            'assets/images/works/Projects/Architectural Vizualization/Maxis Apartment/Living Room.jpg',
            'assets/images/works/Projects/Architectural Vizualization/Maxis Apartment/Master Bedroom.jpg',
            'assets/images/works/Projects/Architectural Vizualization/Maxis Apartment/Shelf.jpg'
        ],
        'Mollalign Apartment': [
            'assets/images/works/Projects/Architectural Vizualization/Mollalign Apartment/Aug 29 1.png',
            'assets/images/works/Projects/Architectural Vizualization/Mollalign Apartment/Scene 17.png',
            'assets/images/works/Projects/Architectural Vizualization/Mollalign Apartment/Scene 18.png',
            'assets/images/works/Projects/Architectural Vizualization/Mollalign Apartment/Scene 19.png'
        ],
        'Negus Commercial Building': [
            'assets/images/works/Projects/Architectural Vizualization/Negus Commercial Building/1 jun 28.png',
            'assets/images/works/Projects/Architectural Vizualization/Negus Commercial Building/2 jun 28.png',
            'assets/images/works/Projects/Architectural Vizualization/Negus Commercial Building/3 jun 28.png',
            'assets/images/works/Projects/Architectural Vizualization/Negus Commercial Building/4 jun 28.png'
        ],
        'Rossetta Diredawa': [
            'assets/images/works/Projects/Architectural Vizualization/Rossetta Diredawa Apartment/1 nov 10.jpg',
            'assets/images/works/Projects/Architectural Vizualization/Rossetta Diredawa Apartment/1 NOV 12_upscale01.png',
            'assets/images/works/Projects/Architectural Vizualization/Rossetta Diredawa Apartment/2.jpg'
        ],
        'Sarbrina Apartment': [
            'assets/images/works/Projects/Architectural Vizualization/Sarbrina Apartment/Aug 6 1.png',
            'assets/images/works/Projects/Architectural Vizualization/Sarbrina Apartment/Aug1 2.png',
            'assets/images/works/Projects/Architectural Vizualization/Sarbrina Apartment/Aug1 3.png',
            'assets/images/works/Projects/Architectural Vizualization/Sarbrina Apartment/Aug1 4.png'
        ],
        'Summit Saint Giorgis Church': [
            'assets/images/works/Projects/Architectural Vizualization/Summit Saint Giorgis Church/Scene 16.png',
            'assets/images/works/Projects/Architectural Vizualization/Summit Saint Giorgis Church/Scene 17.png',
            'assets/images/works/Projects/Architectural Vizualization/Summit Saint Giorgis Church/Scene 18.png',
            'assets/images/works/Projects/Architectural Vizualization/Summit Saint Giorgis Church/Scene 20.png',
            'assets/images/works/Projects/Architectural Vizualization/Summit Saint Giorgis Church/Scene 21.png',
            'assets/images/works/Projects/Architectural Vizualization/Summit Saint Giorgis Church/Scene 25.png',
            'assets/images/works/Projects/Architectural Vizualization/Summit Saint Giorgis Church/Scene 26.png',
            'assets/images/works/Projects/Architectural Vizualization/Summit Saint Giorgis Church/Scene 27.png',
            'assets/images/works/Projects/Architectural Vizualization/Summit Saint Giorgis Church/Scene 30.png'
        ],
        'Tinbite Residence': [
            'assets/images/works/Projects/Architectural Vizualization/Tinbite Residence/1 dec 3.png',
            'assets/images/works/Projects/Architectural Vizualization/Tinbite Residence/2 dec 3.png'
        ],
        'Toni Diredawa Mass Housing': [
            'assets/images/works/Projects/Architectural Vizualization/Toni Diredawa Mass Housing/1 dec 15.png',
            'assets/images/works/Projects/Architectural Vizualization/Toni Diredawa Mass Housing/11 dec 17.png',
            'assets/images/works/Projects/Architectural Vizualization/Toni Diredawa Mass Housing/22 dec 17.png',
            'assets/images/works/Projects/Architectural Vizualization/Toni Diredawa Mass Housing/55 dec 17.png',
            'assets/images/works/Projects/Architectural Vizualization/Toni Diredawa Mass Housing/77 dec 17.png'
        ],
        'Tsige Residence': [
            'assets/images/works/Projects/Architectural Vizualization/Tsige Residence/1.png',
            'assets/images/works/Projects/Architectural Vizualization/Tsige Residence/12.png',
            'assets/images/works/Projects/Architectural Vizualization/Tsige Residence/2.png',
            'assets/images/works/Projects/Architectural Vizualization/Tsige Residence/3.png',
            'assets/images/works/Projects/Architectural Vizualization/Tsige Residence/KITCHEN.png',
            'assets/images/works/Projects/Architectural Vizualization/Tsige Residence/LIVING ROOM.png'
        ],
        'UNOPS Office Kazanchis': [
            'assets/images/works/Projects/Architectural Vizualization/UNOPS office Kazanchis/Scene 1_2.png',
            'assets/images/works/Projects/Architectural Vizualization/UNOPS office Kazanchis/Scene 22_1.png',
            'assets/images/works/Projects/Architectural Vizualization/UNOPS office Kazanchis/Scene 3_1.png',
            'assets/images/works/Projects/Architectural Vizualization/UNOPS office Kazanchis/Scene 30.png',
            'assets/images/works/Projects/Architectural Vizualization/UNOPS office Kazanchis/Scene 31.png',
            'assets/images/works/Projects/Architectural Vizualization/UNOPS office Kazanchis/Scene 33.png',
            'assets/images/works/Projects/Architectural Vizualization/UNOPS office Kazanchis/Scene 34.png',
            'assets/images/works/Projects/Architectural Vizualization/UNOPS office Kazanchis/Scene 8_1.png'
        ]
    };
    
    return projectImageMap[projectName] || [];
}

// Popup functionality
function openProjectPopup(projectName, images) {
    // Create popup overlay
    const popupOverlay = document.createElement('div');
    popupOverlay.className = 'project-popup-overlay';
    popupOverlay.innerHTML = `
        <div class="project-popup">
            <div class="popup-header">
                <h2>${projectName}</h2>
                <button class="popup-close">&times;</button>
            </div>
            <div class="popup-content">
                <div class="image-gallery">
                    ${images.map(img => `<img src="${img}" alt="${projectName}" class="gallery-image">`).join('')}
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(popupOverlay);
    document.body.style.overflow = 'hidden';
    
    // Close popup functionality
    const closeBtn = popupOverlay.querySelector('.popup-close');
    closeBtn.addEventListener('click', closePopup);
    
    popupOverlay.addEventListener('click', function(e) {
        if (e.target === popupOverlay) {
            closePopup();
        }
    });
    
    function closePopup() {
        document.body.removeChild(popupOverlay);
        document.body.style.overflow = 'auto';
    }
    
    // Keyboard support
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closePopup();
        }
    });
}

// Animate numbers
function animateNumber(element, start, end, suffix, duration) {
    const startTime = performance.now();
    
    function updateNumber(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(start + (end - start) * easeOutQuart);
        
        element.textContent = current + suffix;
        
        if (progress < 1) {
            requestAnimationFrame(updateNumber);
        }
    }
    
    requestAnimationFrame(updateNumber);
}

// Portfolio item hover effects
document.addEventListener('DOMContentLoaded', function() {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    portfolioItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
            this.style.boxShadow = '0 12px 40px rgba(44, 62, 80, 0.15)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
});

// Lazy loading for portfolio images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.portfolio-image img');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.opacity = '0';
                img.style.transition = 'opacity 0.5s ease';
                
                img.onload = function() {
                    img.style.opacity = '1';
                };
                
                imageObserver.unobserve(img);
            }
        });
    }, { threshold: 0.1 });
    
    images.forEach(img => {
        imageObserver.observe(img);
    });
});

/* Smooth scrolling for view project links
document.addEventListener('DOMContentLoaded', function() {
    const viewProjectLinks = document.querySelectorAll('.view-project');
    
    viewProjectLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Create a modal or redirect to project detail page
            // For now, we'll show an alert
            const projectTitle = this.closest('.portfolio-overlay').querySelector('h3').textContent;
            alert(`Viewing project: ${projectTitle}\n\nThis would typically open a detailed project page or modal.`);
        });
    });
});*/
