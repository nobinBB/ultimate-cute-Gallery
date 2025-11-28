
// Sample gallery data
const galleryData = [
{
        image: './assets/img/anikawa/1.png',
        category: 'anikawa'
    },
    {
        image: './assets/img/hadrian/1.png',
        category: 'hadrian'
    },
    {
        image: './assets/img/HS/1.png',
        category: 'HS'
    },
    {
        image: './assets/img/WAI/1.png',
        category: 'WAI'
    },
    {
        image: './assets/img/anikawa/2.png',
        category: 'anikawa'
    },
    {
        image: './assets/img/hadrian/2.png',
        category: 'hadrian'
    },
    {
        image: './assets/img/HS/2.png',
        category: 'HS'
    },
    {
        image: './assets/img/WAI/2.png',
        category: 'WAI'
    },
    {
        image: './assets/img/anikawa/3.png',
        category: 'anikawa'
    },
    {
        image: './assets/img/hadrian/3.png',
        category: 'hadrian'
    },
    {
        image: './assets/img/HS/3.png',
        category: 'HS'
    },
    {
        image: './assets/img/WAI/3.png',
        category: 'WAI'
    },
    {
        image: './assets/img/anikawa/4.png',
        category: 'anikawa'
    },
    {
        image: './assets/img/hadrian/4.png',
        category: 'hadrian'
    },
    {
        image: './assets/img/HS/4.png',
        category: 'HS'
    },
    {
        image: './assets/img/WAI/4.png',
        category: 'WAI'
    },
    {
        image: './assets/img/anikawa/5.png',
        category: 'anikawa'
    },
    {
        image: './assets/img/hadrian/5.png',
        category: 'hadrian'
    },
    {
        image: './assets/img/HS/5.png',
        category: 'HS'
    },
    {
        image: './assets/img/WAI/5.png',
        category: 'WAI'
    },
    {
        image: './assets/img/anikawa/6.png',
        category: 'anikawa'
    },
    {
        image: './assets/img/hadrian/6.png',
        category: 'hadrian'
    },
    {
        image: './assets/img/HS/6.png',
        category: 'HS'
    },
    {
        image: './assets/img/WAI/6.png',
        category: 'WAI'
    },
    {
        image: './assets/img/anikawa/7.png',
        category: 'anikawa'
    },
    {
        image: './assets/img/hadrian/7.png',
        category: 'hadrian'
    },
    {
        image: './assets/img/HS/7.png',
        category: 'HS'
    },
    {
        image: './assets/img/WAI/7.png',
        category: 'WAI'
    },
    {
        image: './assets/img/anikawa/8.png',
        category: 'anikawa'
    },
    {
        image: './assets/img/hadrian/8.png',
        category: 'hadrian'
    },
    {
        image: './assets/img/HS/8.png',
        category: 'HS'
    },
    {
        image: './assets/img/WAI/8.png',
        category: 'WAI'
    },
    {
        image: './assets/img/anikawa/9.png',
        category: 'anikawa'
    },
    {
        image: './assets/img/hadrian/9.png',
        category: 'hadrian'
    },
    {
        image: './assets/img/HS/9.png',
        category: 'HS'
    },
    {
        image: './assets/img/WAI/9.png',
        category: 'WAI'
    },
    {
        image: './assets/img/anikawa/10.png',
        category: 'anikawa'
    },
    {
        image: './assets/img/hadrian/10.png',
        category: 'hadrian'
    },

    {
        image: './assets/img/WAI/10.png',
        category: 'WAI'
    },
    {
        image: './assets/img/anikawa/11.png',
        category: 'anikawa'
    },
    {
        image: './assets/img/hadrian/11.png',
        category: 'hadrian'
    },

    {
        image: './assets/img/WAI/11.png',
        category: 'WAI'
    },
    {
        image: './assets/img/anikawa/12.png',
        category: 'anikawa'
    },
    {
        image: './assets/img/hadrian/12.png',
        category: 'hadrian'
    },

    {
        image: './assets/img/WAI/12.png',
        category: 'WAI'
    },
];

// State
let currentLightboxIndex = 0;
let currentFilter = 'all';
let filteredData = [];

// DOM Elements
const gallery = document.getElementById('gallery');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');
const navButtons = document.querySelectorAll('.nav-btn');

// Initialize gallery
function initGallery() {
    filteredData = galleryData;
    renderGallery(galleryData);
}

// Render gallery items
function renderGallery(data) {
    gallery.innerHTML = '';
    
    data.forEach((item, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.style.animationDelay = `${index * 0.05}s`;
        
        galleryItem.innerHTML = `
            <div class="gallery-image-wrapper">
                <img src="${item.image}" alt="Gallery image ${item.id}" class="gallery-image">

            </div>
        `;
        
        galleryItem.addEventListener('click', () => {
            openLightbox(item, index);
        });
        
        gallery.appendChild(galleryItem);
    });
}

// Filter gallery
function filterGallery(category) {
    currentFilter = category;
    
    if (category === 'all') {
        filteredData = galleryData;
    } else {
        filteredData = galleryData.filter(item => item.category === category);
    }
    
    renderGallery(filteredData);
}

// Lightbox functions
function openLightbox(item, index) {
    currentLightboxIndex = index;
    updateLightbox();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

function updateLightbox() {
    const item = filteredData[currentLightboxIndex];
    lightboxImage.src = item.image;
    lightboxImage.alt = `Gallery image ${item.id}`;
}

function nextImage() {
    currentLightboxIndex = (currentLightboxIndex + 1) % filteredData.length;
    updateLightbox();
}

function prevImage() {
    currentLightboxIndex = (currentLightboxIndex - 1 + filteredData.length) % filteredData.length;
    updateLightbox();
}

// Event listeners
navButtons.forEach(button => {
    button.addEventListener('click', () => {
        navButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        filterGallery(button.dataset.filter);
    });
});

lightboxClose.addEventListener('click', closeLightbox);
lightboxPrev.addEventListener('click', prevImage);
lightboxNext.addEventListener('click', nextImage);

// Close lightbox on background click
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    
    switch(e.key) {
        case 'Escape':
            closeLightbox();
            break;
        case 'ArrowLeft':
            prevImage();
            break;
        case 'ArrowRight':
            nextImage();
            break;
    }
});

// Initialize
initGallery();
