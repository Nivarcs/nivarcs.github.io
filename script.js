// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get all service cards
    const serviceCards = document.querySelectorAll('.service-card');
    
    // Add click event to each card
    serviceCards.forEach(card => {
        const cardInner = card.querySelector('.service-card-inner');
        const learnMore = card.querySelector('.service-link');
        const goBack = card.querySelector('.back-link');
        
        // Flip card when "Learn More" is clicked
        learnMore.addEventListener('click', function(e) {
            e.stopPropagation();
            cardInner.style.transform = 'rotateY(180deg)';
            
            // Adjust height to accommodate content
            const backHeight = card.querySelector('.service-card-back').scrollHeight;
            card.style.height = backHeight + 'px';
        });
        
        // Flip card back when "Go Back" is clicked
        goBack.addEventListener('click', function(e) {
            e.stopPropagation();
            cardInner.style.transform = 'rotateY(0deg)';
            card.style.height = '300px'; // Reset to original height
        });
    });
});
// Blog data representing real-world articles
const blogArticles = [
    {
        id: 1,
        category: "ai-trends",
        categoryDisplay: "AI Trends",
        image: "/api/placeholder/600/400",
        date: "April 2, 2025",
        title: "The Evolution of Generative AI in Enterprise Applications",
        excerpt: "Discover how generative AI is transforming enterprise operations and creating new possibilities for business innovation across sectors.",
        author: {
            name: "Dr. Elena Rodriguez",
            image: "/api/placeholder/35/35"
        },
        status: "new",
        link: "#",
        timestamp: 1712113200000
    },
    {
        id: 2,
        category: "business-strategy",
        categoryDisplay: "Business Strategy",
        image: "/api/placeholder/600/400",
        date: "March 28, 2025",
        title: "Strategic Implementation of AI for Business Growth",
        excerpt: "Learn how leading companies are strategically implementing AI to drive sustainable business growth and maintain competitive advantage.",
        author: {
            name: "Michael Chen",
            image: "/api/placeholder/35/35"
        },
        status: "trending",
        link: "#",
        timestamp: 1711631400000
    },
    {
        id: 3,
        category: "technical-insights",
        categoryDisplay: "Technical Insights",
        image: "/api/placeholder/600/400",
        date: "March 25, 2025",
        title: "Advanced MLOps Practices for Enterprise AI",
        excerpt: "Explore the latest MLOps practices that are helping enterprises scale their AI initiatives effectively and maintain model performance.",
        author: {
            name: "Dr. James Wilson",
            image: "/api/placeholder/35/35"
        },
        link: "#",
        timestamp: 1711372200000
    },
    {
        id: 4,
        category: "digital-transformation",
        categoryDisplay: "Digital Transformation",
        image: "/api/placeholder/600/400",
        date: "March 22, 2025",
        title: "Digital Transformation in Healthcare: AI-Driven Diagnostics",
        excerpt: "How healthcare providers are leveraging AI for improved diagnostics, personalized treatment plans, and enhanced patient outcomes.",
        author: {
            name: "Dr. Sarah Johnson",
            image: "/api/placeholder/35/35"
        },
        status: "updated",
        link: "#",
        timestamp: 1711113000000
    },
    {
        id: 5,
        category: "ai-trends",
        categoryDisplay: "AI Trends",
        image: "/api/placeholder/600/400",
        date: "March 18, 2025",
        title: "The Future of Work: AI Collaboration and Human Potential",
        excerpt: "How AI is reshaping the workplace and creating new opportunities for human-machine collaboration that amplifies human potential.",
        author: {
            name: "Alexandra Peters",
            image: "/api/placeholder/35/35"
        },
        link: "#",
        timestamp: 1710767400000
    },
    {
        id: 6,
        category: "business-strategy",
        categoryDisplay: "Business Strategy",
        image: "/api/placeholder/600/400",
        date: "March 15, 2025",
        title: "ROI Metrics for Enterprise AI: Measuring Success",
        excerpt: "A comprehensive framework for measuring the return on investment for enterprise AI initiatives across different business functions.",
        author: {
            name: "Jonathan Bradley",
            image: "/api/placeholder/35/35"
        },
        link: "#",
        timestamp: 1710508200000
    },
    {
        id: 7,
        category: "technical-insights",
        categoryDisplay: "Technical Insights",
        image: "/api/placeholder/600/400",
        date: "March 12, 2025",
        title: "Building Responsible AI Systems: Ethics and Governance",
        excerpt: "Best practices for implementing ethical AI frameworks and governance structures to ensure responsible AI development and deployment.",
        author: {
            name: "Dr. Olivia Martinez",
            image: "/api/placeholder/35/35"
        },
        status: "trending",
        link: "#",
        timestamp: 1710249000000
    },
    {
        id: 8,
        category: "digital-transformation",
        categoryDisplay: "Digital Transformation",
        image: "/api/placeholder/600/400",
        date: "March 8, 2025",
        title: "Smart Cities and AI: Creating Sustainable Urban Environments",
        excerpt: "How AI is helping cities around the world become smarter, more efficient, and more sustainable for future generations.",
        author: {
            name: "Thomas Wright",
            image: "/api/placeholder/35/35"
        },
        link: "#",
        timestamp: 1709903400000
    }
];

// Function to render blog articles
function renderBlogArticles(articles) {
    const blogGrid = document.getElementById('blogGrid');
    blogGrid.innerHTML = '';
    
    articles.forEach(article => {
        // Create status indicator HTML if status exists
        let statusHTML = '';
        if (article.status) {
            statusHTML = `
                <div class="blog-card-status ${article.status}">
                    <div class="blog-card-status-pulse"></div>
                    <span>${article.status.charAt(0).toUpperCase() + article.status.slice(1)}</span>
                </div>
            `;
        }
        
        // Create blog card HTML
        const blogCardHTML = `
            <div class="blog-card" data-category="${article.category}">
                <div class="blog-card-image">
                    <img src="${article.image}" alt="${article.title}">
                    <div class="blog-card-category">${article.categoryDisplay}</div>
                    ${statusHTML}
                </div>
                <div class="blog-card-content">
                    <div class="blog-card-date">
                        <i class="far fa-calendar-alt"></i>
                        ${article.date}
                    </div>
                    <h3 class="blog-card-title">${article.title}</h3>
                    <p class="blog-card-excerpt">${article.excerpt}</p>
                    <div class="blog-card-footer">
                        <div class="blog-card-author">
                            <div class="blog-card-author-image">
                                <img src="${article.author.image}" alt="${article.author.name}">
                            </div>
                            <div class="blog-card-author-name">${article.author.name}</div>
                        </div>
                        <a href="${article.link}" class="blog-card-readmore">
                            Read More <i class="fas fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        `;
        
        blogGrid.innerHTML += blogCardHTML;
    });
    
    // Add animation to the rendered blogs
    animateBlogCards();
}

// Function to animate blog cards when they come into view
function animateBlogCards() {
    const blogCards = document.querySelectorAll('.blog-card');
    
    blogCards.forEach((card, index) => {
        // Add a delay based on the index for a cascade effect
        setTimeout(() => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            
            // Use requestAnimationFrame for animation
            requestAnimationFrame(() => {
                card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            });
        }, index * 100);
    });
}

// Function to filter blog articles by category
function filterBlogArticles(category) {
    const filteredArticles = category === 'all' 
        ? blogArticles 
        : blogArticles.filter(article => article.category === category);
    
    renderBlogArticles(filteredArticles);
}

// Function to sort blog articles
function sortBlogArticles(method) {
    let sortedArticles = [...blogArticles];
    
    switch(method) {
        case 'recent':
            sortedArticles.sort((a, b) => b.timestamp - a.timestamp);
            break;
        case 'trending':
            // First show trending, then others sorted by recency
            sortedArticles.sort((a, b) => {
                if (a.status === 'trending' && b.status !== 'trending') return -1;
                if (a.status !== 'trending' && b.status === 'trending') return 1;
                return b.timestamp - a.timestamp;
            });
            break;
        case 'title':
            sortedArticles.sort((a, b) => a.title.localeCompare(b.title));
            break;
    }
    
    renderBlogArticles(sortedArticles);
}

// Function to initialize the blog section
function initBlog() {
    // Initial render of blog articles sorted by recency
    sortBlogArticles('recent');
    
    // Set up filter functionality
    const filterItems = document.querySelectorAll('.blog-filter-item');
    filterItems.forEach(item => {
        item.addEventListener('click', () => {
            // Update active state
            filterItems.forEach(fi => fi.classList.remove('active'));
            item.classList.add('active');
            
            // Filter articles
            filterBlogArticles(item.getAttribute('data-filter'));
        });
    });
    
    // Set up sort button functionality
    const sortButton = document.querySelector('.blog-sort-button');
    let currentSort = 'recent';
    
    sortButton.addEventListener('click', () => {
        // Cycle through sort methods
        if (currentSort === 'recent') {
            currentSort = 'trending';
            sortButton.querySelector('span').textContent = 'Sort by: Trending';
        } else if (currentSort === 'trending') {
            currentSort = 'title';
            sortButton.querySelector('span').textContent = 'Sort by: Title';
        } else {
            currentSort = 'recent';
            sortButton.querySelector('span').textContent = 'Sort by: Recent';
        }
        
        sortBlogArticles(currentSort);
    });
    
    // Set up newsletter subscription
    const newsletterForm = document.querySelector('.blog-newsletter-form');
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = newsletterForm.querySelector('.blog-newsletter-input');
        
        if (emailInput.value) {
            // In a real implementation, this would send the email to a server
            alert(`Thank you for subscribing with: ${emailInput.value}`);
            emailInput.value = '';
        }
    });
    
    // Set up pagination
    const paginationItems = document.querySelectorAll('.blog-pagination-item');
    paginationItems.forEach(item => {
        item.addEventListener('click', () => {
            if (item.getAttribute('data-page') === 'prev' || item.getAttribute('data-page') === 'next') {
                // In a real implementation, this would load previous or next page
                alert(`In a real implementation, this would navigate to ${item.getAttribute('data-page')} page`);
            } else {
                // Update active state
                paginationItems.forEach(pi => pi.classList.remove('active'));
                item.classList.add('active');
                
                // In a real implementation, this would load the selected page
                // For demo, we'll just show a message
                alert(`Page ${item.textContent} clicked. In a full implementation, this would load page ${item.textContent}`);
            }
        });
    });
}

// Add FontAwesome for icons
const fontAwesome = document.createElement('link');
fontAwesome.rel = 'stylesheet';
fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css';
document.head.appendChild(fontAwesome);

// Initialize when DOM is fully loaded
document.addEventListener('DOMContentLoaded', initBlog);

// Call init function immediately if document is already loaded
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setTimeout(initBlog, 1);
}
    // Mobile menu toggle
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');

    menuToggle.addEventListener('click', function () {
        mobileMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    const mobileLinks = document.querySelectorAll('.mobile-menu a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function () {
            mobileMenu.classList.remove('active');
        });
    });

    // Dark mode toggle
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    const body = document.body;

    darkModeToggle.addEventListener('click', function () {
        body.classList.toggle('light-mode');
        const icon = darkModeToggle.querySelector('i');
        if (body.classList.contains('light-mode')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    });

    // Initialize GSAP animations
    gsap.registerPlugin(ScrollTrigger);

    // Fade-in animations
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
        gsap.from(element, {
            opacity: 0,
            y: 30,
            duration: 0.8,
            scrollTrigger: {
                trigger: element,
                start: "top 80%",
                toggleActions: "play none none none"
            }
        });
    });
});