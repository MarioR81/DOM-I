const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Nav Items

let navItems = document.querySelectorAll("a");
navItems[0].textContent = siteContent["nav"]["nav-item-1"];
navItems[1].textContent = siteContent["nav"]["nav-item-2"];
navItems[2].textContent = siteContent["nav"]["nav-item-3"];
navItems[3].textContent = siteContent["nav"]["nav-item-4"];
navItems[4].textContent = siteContent["nav"]["nav-item-5"];
navItems[5].textContent = siteContent["nav"]["nav-item-6"];

// Dom Title

let domTitle = document.querySelector('h1');
domTitle.textContent = siteContent['cta']['h1'];

let buttonTxt = document.querySelector('button');
buttonTxt.textContent = siteContent['cta']['button'];

let domImg = document.getElementById('cta-img');
domImg.setAttribute('src', siteContent['cta']['img-src']);

// Main Content
let mainHead = document.querySelectorAll('.main-content h4');
mainHead[0].textContent = siteContent['main-content']['features-h4'];
mainHead[1].textContent = siteContent['main-content']['about-h4'];
mainHead[2].textContent = siteContent['main-content']['services-h4'];
mainHead[3].textContent = siteContent['main-content']['product-h4'];
mainHead[4].textContent = siteContent['main-content']['vision-h4'];

let mainCont = document.querySelectorAll('.main-content p');
mainCont[0].textContent = siteContent['main-content']['features-content'];
mainCont[1].textContent = siteContent['main-content']['about-content'];
mainCont[2].textContent = siteContent['main-content']['services-content'];
mainCont[3].textContent = siteContent['main-content']['product-content'];
mainCont[4].textContent = siteContent['main-content']['vision-content'];

let midImg = document.getElementById('middle-img');
midImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

// Contact
let contactHead = document.querySelector('.contact h4');
contactHead.textContent = siteContent['contact']['contact-h4'];

let contactAddy = document.querySelectorAll('.contact p');
contactAddy[0].textContent = siteContent['contact']['address'];
contactAddy[1].textContent = siteContent['contact']['phone'];
contactAddy[2].textContent = siteContent['contact']['email'];

// Copyright
let copyright = document.querySelector('footer');
copyright.textContent = siteContent['footer']['copyright'];