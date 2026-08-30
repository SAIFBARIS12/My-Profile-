============================================================
        ADVANCED PERSONAL PORTFOLIO WEBSITE
============================================================

Version: 1.0
Type: Responsive Personal Portfolio
Technology: HTML5 + CSS3 + JavaScript
Responsive: Desktop + Laptop + Tablet + Mobile
============================================================


1. PROJECT INTRODUCTION
============================================================

This is an advanced responsive personal portfolio website.

The website includes:

- Modern dark UI
- Responsive navigation
- Mobile hamburger menu
- Hero section
- About section
- Skills section
- Technology section
- Projects section
- Experience timeline
- Education section
- Services section
- Contact section
- Contact form validation
- Animated counters
- Animated skill bars
- Scroll reveal animations
- Smooth scrolling
- Active navigation
- Custom cursor
- Project hover effects
- Page loading animation
- Responsive design


============================================================
2. PROJECT FOLDER STRUCTURE
============================================================

Create the following folder structure:

advanced-personal-portfolio/
│
├── index.html
├── style.css
├── script.js
├── README.txt
│
└── assets/
    │
    ├── images/
    │   ├── profile.jpg
    │   ├── project-1.jpg
    │   ├── project-2.jpg
    │   └── project-3.jpg
    │
    └── icons/
        └── favicon.png


============================================================
3. REQUIRED FILES
============================================================

The main files are:

index.html
    Main website structure.

style.css
    Complete website styling and responsive design.

script.js
    Website animations, mobile menu, counters,
    scroll effects and form validation.

README.txt
    Project setup and usage instructions.


============================================================
4. SOFTWARE REQUIRED
============================================================

You can use any modern code editor.

Recommended:

Visual Studio Code

Browser:

Google Chrome
Microsoft Edge
Mozilla Firefox


============================================================
5. CREATE PROJECT FOLDER
============================================================

Create a folder named:

advanced-personal-portfolio

Open this folder in Visual Studio Code.


============================================================
6. CREATE HTML FILE
============================================================

Inside the project folder create:

index.html

Paste the complete HTML website code into this file.


============================================================
7. CREATE CSS FILE
============================================================

Inside the project folder create:

style.css

Paste the complete responsive CSS code into this file.


============================================================
8. CREATE JAVASCRIPT FILE
============================================================

Inside the project folder create:

script.js

Paste the complete JavaScript code into this file.


============================================================
9. CONNECT CSS WITH HTML
============================================================

Inside index.html <head>, make sure this line exists:

<link rel="stylesheet" href="style.css">


============================================================
10. CONNECT JAVASCRIPT WITH HTML
============================================================

Before the closing </body> tag add:

<script src="script.js"></script>


============================================================
11. ADD GOOGLE FONTS
============================================================

For the best visual result, add these fonts inside
the <head> section of index.html:

<link rel="preconnect" href="https://fonts.googleapis.com">

<link rel="preconnect"
      href="https://fonts.gstatic.com"
      crossorigin>

<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap"
      rel="stylesheet">


============================================================
12. ADD IMAGES
============================================================

Create:

assets/images/

Put your images inside this folder.

Example:

assets/images/profile.jpg

assets/images/project-1.jpg

assets/images/project-2.jpg

assets/images/project-3.jpg


============================================================
13. IMAGE PATH
============================================================

Use the following format in HTML:

<img src="assets/images/profile.jpg"
     alt="Profile Image">


For project image:

<img src="assets/images/project-1.jpg"
     alt="Project Image">


============================================================
14. RUN THE WEBSITE
============================================================

There are two easy ways to run the website.


METHOD 1 — DIRECT BROWSER
------------------------------------------------------------

Open the project folder.

Double-click:

index.html

The website will open in your browser.


METHOD 2 — VS CODE LIVE SERVER
------------------------------------------------------------

Recommended method.

Step 1:

Open Visual Studio Code.

Step 2:

Open the project folder.

Step 3:

Install the extension:

Live Server

Step 4:

Right-click:

index.html

Step 5:

Select:

Open with Live Server

The website will automatically open in your browser.


============================================================
15. MOBILE RESPONSIVE TEST
============================================================

Open the website in Google Chrome.

Press:

F12

Then press:

Ctrl + Shift + M

This opens the responsive device preview.

Test these screen sizes:

320px
375px
390px
414px
768px
1024px
1280px
1440px


============================================================
16. MOBILE MENU
============================================================

The mobile hamburger menu is controlled by:

script.js

HTML:

<button class="hamburger">
    <span></span>
    <span></span>
    <span></span>
</button>


Navigation:

<nav class="nav">
    ...
</nav>


The JavaScript automatically opens and closes
the navigation menu on mobile devices.


============================================================
17. COUNTER ANIMATION
============================================================

For animated numbers use:

<strong data-counter="25">0</strong>

Example:

<strong data-counter="25">0</strong>

The number will animate from:

0

to:

25


============================================================
18. SKILL BAR ANIMATION
============================================================

Use:

<div class="skill">

    <div>
        <span>HTML / CSS</span>
        <b>95%</b>
    </div>

    <i>
        <em style="--w:95%"></em>
    </i>

</div>


Change:

--w:95%

to any required percentage.

Example:

--w:80%

--w:90%

--w:100%


============================================================
19. SCROLL ANIMATION
============================================================

To enable scroll reveal animation add:

class="reveal"

Example:

<div class="reveal">

    Your Content

</div>


The JavaScript automatically detects the element
when it enters the screen.


============================================================
20. CONTACT FORM
============================================================

The contact form uses frontend validation.

Required fields:

Name
Email
Message

Example:

<form id="contactForm">

    <input
        type="text"
        name="name"
        placeholder="Your Name"
    >

    <input
        type="email"
        name="email"
        placeholder="Your Email"
    >

    <textarea
        name="message"
        placeholder="Your Message"
    ></textarea>

    <button type="submit">
        Send Message
    </button>

    <div class="form-status"></div>

</form>


============================================================
21. CONTACT FORM IMPORTANT NOTE
============================================================

The current contact form performs frontend validation only.

It does NOT automatically send emails.

For real email functionality, connect the form to:

- Your own backend
- Formspree
- EmailJS
- PHP mail system
- Node.js backend
- Firebase
- Another email API


============================================================
22. CHANGE WEBSITE COLORS
============================================================

Open:

style.css

At the top you will find:

:root {

    --accent: #4e8cff;

    --purple: #9c5cff;

    --green: #54e28b;

}


Change these values to customize
the website colors.


Example:

--accent: #00d4ff;


============================================================
23. CHANGE WEBSITE BACKGROUND
============================================================

Inside style.css:

--bg: #05080e;

You can change this color.

Example:

--bg: #000000;


============================================================
24. CHANGE WEBSITE WIDTH
============================================================

Inside style.css:

--max-width: 1240px;


Example:

--max-width: 1320px;


============================================================
25. CHANGE HERO TITLE
============================================================

Open:

index.html

Find the hero heading.

Example:

<h1>
    Creative
    <span>Developer</span>
</h1>


Replace it with your own title.


============================================================
26. CHANGE ABOUT CONTENT
============================================================

Find the About section in:

index.html

Replace the existing paragraph with
your personal information.


============================================================
27. ADD NEW PROJECT
============================================================

Copy an existing project card.

Example:

<div class="project-card">

    <div class="project-thumb">
        <span>APP</span>
    </div>

    <div>

        <p>WEB APPLICATION</p>

        <h3>
            My New Project
        </h3>

        <a href="#">
            View Project →
        </a>

    </div>

</div>


Change:

Project title

Project category

Project link

Project image/design


============================================================
28. ADD SOCIAL MEDIA LINKS
============================================================

Inside the footer you can add:

<a href="#">IN</a>

<a href="#">GH</a>

<a href="#">X</a>

<a href="#">IG</a>


Replace # with your actual social media links.


============================================================
29. CHANGE COPYRIGHT
============================================================

Find the footer copyright text.

Example:

© 2026 Your Name.
All rights reserved.


Replace:

Your Name

with your actual name or company name.


============================================================
30. BROWSER CACHE ISSUE
============================================================

If CSS or JavaScript changes do not appear:

Press:

Ctrl + F5

This forces the browser to reload
the latest CSS and JavaScript files.


============================================================
31. IF CSS IS NOT WORKING
============================================================

Check these things:

1. Make sure style.css is in the same folder
   as index.html.

2. Make sure this exists:

<link rel="stylesheet" href="style.css">

3. Check the browser console.

4. Press:

Ctrl + F5

5. Make sure the filename is exactly:

style.css

NOT:

styles.css

NOT:

style.CSS


============================================================
32. IF JAVASCRIPT IS NOT WORKING
============================================================

Check:

<script src="script.js"></script>

Make sure:

script.js

is in the same folder as:

index.html


Then press:

Ctrl + F5


============================================================
33. RECOMMENDED VS CODE EXTENSIONS
============================================================

Recommended extensions:

1. Live Server

2. Prettier - Code formatter

3. Auto Rename Tag

4. HTML CSS Support

5. JavaScript (ES6) code snippets


============================================================
34. PERFORMANCE
============================================================

For better performance:

- Compress large images.
- Use WebP images when possible.
- Avoid very large background images.
- Keep JavaScript files optimized.
- Remove unused CSS.
- Use lazy loading for large images.


Example:

<img
    src="assets/images/project-1.jpg"
    loading="lazy"
    alt="Project"
>


============================================================
35. SEO
============================================================

Add a proper title:

<title>
    Your Name | Full Stack Developer
</title>


Add description:

<meta
    name="description"
    content="Professional portfolio of a creative developer."
>


Add responsive viewport:

<meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
>


============================================================
36. FINAL PROJECT STRUCTURE
============================================================

advanced-personal-portfolio/
│
├── index.html
│
├── style.css
│
├── script.js
│
├── README.txt
│
└── assets/
    │
    ├── images/
    │   ├── profile.jpg
    │   ├── project-1.jpg
    │   ├── project-2.jpg
    │   └── project-3.jpg
    │
    └── icons/
        └── favicon.png


============================================================
37. FINAL CHECKLIST
============================================================

Before publishing the website, check:

[✓] index.html working

[✓] style.css connected

[✓] script.js connected

[✓] Desktop responsive

[✓] Tablet responsive

[✓] Mobile responsive

[✓] Hamburger menu working

[✓] Smooth scrolling working

[✓] Counter animation working

[✓] Skill bars working

[✓] Scroll animations working

[✓] Contact validation working

[✓] Images loading

[✓] Navigation links working

[✓] Social links updated

[✓] SEO title added

[✓] Meta description added

[✓] Copyright updated


============================================================
38. PROJECT COMPLETE
============================================================

Your advanced responsive portfolio website is now ready.

Main technologies:

HTML5
CSS3
JavaScript ES6

No framework is required.

The website can be opened directly using:

index.html

or run using:

VS Code + Live Server.


============================================================
END OF README
============================================================