Secunda Mighty Stars FC Website
Sandile manana st10534324
Live website: https://secundamstars.netlify.app

WEBSITE OVERVIEW
This website is developed for a local club called Secunda Mighty Stars. The purpose of the website is to grow community engagement and to engage with fans from outside the community about the latest news, fixtures, league standings, the team profile and the club history.

WEBSITE OBJECTIVES
- To provide information about the club
- To allow visitors to engage with the club
- To introduce the squad and coaches to the fans
- To provide details about games to fans
- To provide the latest league form and standings
- To provide contacts, an enquiry form and a contact form

WEBSITE PAGES
1. Home page (home.html)
- The main entry of the website. It gives an overview without visiting each page.
- It contains: club logo, navigation, hero section, meet the squad button, latest news, upcoming fixture, league standings, club statistics, sponsor information, contact information and social media links.

2. About us page (about-us.html)
Information about how the club has developed and its core principles:
- Club history and history timeline
- Mission statement and club values
- Stadium information and community information
- Frequently asked questions (accordion)
- Interactive map of the stadium

3. Fixtures and results (fixtures.html)
- Upcoming fixtures, recent results and form, and the league standings, shown in tabs
- Matchday information, dates, times and the game venue

4. News page (news.html)
- News stories and headlines
- Search, category filter and sort

5. Team profile (squad.html)
- Goalkeepers, defenders, midfielders, forwards and coaching staff
- Player cards with the number, name and position. Click a card for more details.
- Search, position filter and sort

6. Gallery (gallery.html)
- Photo grid with category filters and a lightbox to view photos in a larger size

7. Enquiry (enquiry.html)
- For enquiring about membership, sponsorship or volunteering
- Once the input is validated, the page answers with the cost and availability

8. Contact (contact.html)
- For a general message to the club
- Once the input is validated, the message is compiled into an email that the visitor sends from their own email app

PROJECT STRUCTURE
index.html          opens home.html
home.html  about-us.html  fixtures.html  news.html  squad.html
gallery.html  enquiry.html  contact.html
robots.txt  sitemap.xml
css/    base.css  home.css  aboutus.css  fixtures.css  news.css  teamProfile.css  part3.css
js/     main.js  data.js  site.js  forms.js
images/
Proposal/wede.docx

RESOURCES USED
- HTML for the structure and content of the website
- CSS for colours, fonts, spacing, buttons, header, cards, league table, page banners, responsive layout and the footer
- JavaScript for the interactive features and form validation
- Google Fonts: Oswald and Inter
- Leaflet 1.9.4 (map library) with OpenStreetMap map tiles
- Formspree (free form service) for the enquiry form
- Netlify to host the live website
- Images for club branding, players, news, supporters, sponsors, merchandise and the hero section

CSS STRUCTURE
base.css, home.css, aboutus.css, fixtures.css, news.css, teamProfile.css, part3.css
- base.css contains the common styles used on every page to keep the design consistent.
- Each page has its own CSS file, which makes the website easy to maintain.
- part3.css contains the styles for the Part 3 features (tabs, accordion, modal, gallery, forms, map and animations).

NAVIGATION
The navigation links all the pages together so that visitors can move between them. The current page is highlighted.

RESPONSIVE DESIGN
The website works on different screen sizes using CSS grid, flexible layouts, media queries and responsive card layouts. On phones the navigation becomes a menu button.

JAVASCRIPT FILES
- js/data.js: all content (news, fixtures, standings, squad, enquiry prices). The pages are built from this one file.
- js/site.js: accordion, tabs, modal, lightbox, map, animations, dynamic content, search, filter and sort.
- js/forms.js: form validation, error messages, AJAX submission and the email builder.
- js/main.js: the navigation menu button and the "you are here" link.

PART 3: FEATURES
Interactive elements
- Accordion (FAQ on the About us page), tabs (Fixtures and results page), modal pop-ups (news and player cards), lightbox gallery, interactive Leaflet map, animations and transitions, and DOM manipulation (elements are created with JavaScript).
Dynamic content
- News, fixtures, standings and the squad are loaded from js/data.js, with search, filter and sort on the News and Team profile pages.
Forms
- Both forms use HTML5 validation attributes and JavaScript validation (phone number format, date range, name characters, email format and message length), show error messages next to each field, and submit with AJAX.
- Enquiry form: membership, sponsorship or volunteering. The answer shows the cost and availability.
- Contact form: the message is compiled into an email addressed to the club.

PART 3: SEO
Target keywords: Secunda football club, Secunda Mighty Stars, eMbalenhle football, Mpumalanga amateur football, Hollywoodbets league, Nedbank Cup, fixtures and results.
On-page
- Unique title and meta description on every page, one h1 per page with h2 and h3 below it, descriptive image file names and alt text, clean lowercase addresses, internal links and a mobile friendly layout.
Off page plan
- Backlinks: ask local schools, sponsors and the Secunda community to link to the website.
- Social media: share news stories and match reports on the club's social media.
- Local SEO: list the club on Google Business Profile and in local directories. The home page includes structured data for the club in Secunda, Mpumalanga.
Technical
- robots.txt, sitemap.xml, canonical links and structured data.
- Page speed: scripts use defer, fonts use display=swap, images are lazy loaded and the largest unused photo was compressed.
- Security: external links use rel="noopener noreferrer", form input is inserted as text and never as HTML, a hidden field catches spam bots, and HTTPS is provided by the host.

FORM SETUP AND SAMPLE DATA
[EDIT: choose one and delete the other]
- The forms are connected to Formspree and send enquiries to the club.


PHOTO CREDITS
-  Match photographs: Tycoon Snap (2026).
- Map: (c) OpenStreetMap contributors. Fonts: Google Fonts.

HOW THE PROJECT WORKS
- Download the folder and open index.html (it opens home.html), or open home.html directly.
- Use the navigation menu to reach the other pages.
- The map and fonts need an internet connection.

AUTHOR
sandile , Secunda Mighty Stars FC POE