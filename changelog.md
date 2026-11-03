Secunda mighty stars fc
1. Home Page
changes made to yhe website :
-removed all internal css in the home page and converted it to separate stylesheet home.css linked by (link rel ="stylesheet")
-fixed structural errors in  home.html corrected the spellings typos,corrected the spellings of Mighthy to mighty 
-fixed the footer of the home page by removing the inline backround color style and fixed the <ul> that was sitting inside the <p>.
-added the initial colors of the club of which is red,white,black,blue and the font (Oswald for headings,Inter for body text) loaded via google fonts
-increased the hero sectionfrom small  image to full bleed image using 70vh to ensure it fills viewport height on any screen. i also changed the hero section pictures and changed the meet the squad button into styled button using btn-primary
-i slightly changed the layout of the home page by merging the next match widget and league standings into a single fixture,results and standings section with one call to action button instead of two disconnectted pieces as i did in part 1
-developed the hero section  by changing the pictures and added a appropriate picture and changed 
-changes the message in the hero to embalenhle to the world.
-expanded the news grid to contain match report,squadnews ,club news
-improved the club statistics section and gave it a structure
2.Aboutus page
-i completelty rebuild this page to make it more organized that it was
-i added a proper page title,google fonts and the base.css that uses the same header for the rest of the website and the about us css structure 
-i also added a new page banner section of which provides a new clear heading
-i expanded the club history by adding the promotion and nedbank appearce
-improved the structure with each value explained 
- i added the home ground location as google maps iframe
-i added a enquiry form that allows visitor to input name,email,reason for enquiry as a dropdown and text box

3.Fixtures& results page
-added the external css structuress of which is the base and fixture.css 
-added a page banner which describes whats happening in the page.
-i added a form section which presents the last three game results that shows the results and opponent
-designed the upcoming fixtures into a fixture-list that included 3 upcoming match days that provided the match details and ticket information
-i also added the league standings to be part of fixtures and results instead of the user having to refer back to the home page to check next opponent performance on the table 

4.News
-improved the news page by adding its css structure and the base css to match the rest of the pages and allowing the page to have its own style as well
-added the fans image in the banner to engage the fans making it about them
-also added the latest news section in this page of which uses structered news grid presenting new stories as individual cards containing  information about that story
-changed the news stories and alligned it to the current news of secunda stars

5.Teamprofile or squad
-in this page i also added the base structure and teamprofile.css to give the page its own styling 
-added a page banner to introduce the team profile
-organized players by positon to make it easier for visitor the know which is which
-changed the basic images to player cards with each card containg the player picture ,number,name and position.
-i used one default image in the player cards because of lack of indiviual pictures

6. introduction of the css structure
the css folder contains base.Css,home.css,fixtures.css,news.css,teamprofile.css
.the base.css
-provides styles that are shared in every page of the website
-contains styling for page reset,body typography,headings,links,header,buttons,footer and the general layout to make it easy for myself by not repeating styles on every page.
-i created variables club-red,club-red-dark,club-blue,bg,white,grey-text,border,max-width to make easier to change values in one place
-i also made my website responsive
-used reusable structures for news,players and coaches
-used btn and btn-primary to create usable button styling which is used in all buttons

7.images
-i added more images to improve the visual represantation

## 12. References

The following online resources were used as learning references while developing and improving the Secunda Mighty Stars FC website. The videos were used to understand web development concepts and were not copied directly into the project.

### YouTube References

1. Traversy Media. (2020). *Build a Responsive Website | HTML, CSS Grid, Flexbox & More*. YouTube.
   Available at: https://www.youtube.com/watch?v=p0bGHP-PXD4
   Accessed: 18 September 2026.

   Used for: Understanding website structure, navigation bars, CSS Grid, Flexbox, cards, forms, footers and responsive design. The tutorial covers these areas as part of building a responsive website.

2. Learn Web. (2023). CSS Flexbox Responsive Cards – Frontend Simplified. YouTube.
   Available at: https://www.youtube.com/watch?v=0m5e1V7g8kM
   Accessed: 18 September 2026.

   Used for: Understanding how to create responsive cards using HTML and CSS. This was relevant to the news cards, player cards and other content sections used on the website.

3. Coder Coder. Responsive 4-Column Layout with CSS Grid – Build a Responsive Website from Scratch. YouTube.
   Used for: Understanding CSS Grid, responsive layouts, card spacing, images, border-radius and hover effects.

4. EGATOR. How to Create a Responsive Website Using HTML and CSS – Complete Tutorial for Beginners. YouTube.
   Used for: Understanding multi-page website structure, navigation menus, Google Fonts, CSS variables, media queries and responsive layouts.

5. Brian Design. HTML, CSS, and JavaScript Website Design Tutorial – Beginner Project Fully Responsive. YouTube.
   Used for: Understanding how to organise a multi-page website, create navigation, hero sections, footers, use Google Fonts and link different HTML pages together.

How the References Were Used

The references were mainly used to improve my understanding of HTML and CSS while developing Part 2 of the project. I used them as learning material to understand concepts such as responsive layouts, navigation, cards, forms, CSS Grid, Flexbox and page structure.

The final Secunda Mighty Stars FC website was developed and adapted for the requirements of my own project. The content, football club information, page structure and design decisions were adjusted for the specific website rather than simply copying a tutorial project.



# PART 3 CHANGES (final submission)

## 8. JavaScript enhancements (Functionality 2.1)
- Created js/site.js (all page behaviour), js/data.js (all content as data) and js/forms.js (form validation). js/main.js is the original navigation script.
- Accordion: a "Frequently Asked Questions" accordion on the About us page (one answer open at a time, keyboard accessible, animated).
- Tabs: the Fixtures & Results page now has Upcoming / Results / Standings tabs. Arrow keys work and links such as fixtures.html#standings open the right tab.
- Modal: clicking a player card on the Team Profile page, or "Read more" on a news card, opens a modal pop-up (Esc closes it and keyboard focus is kept inside).
- Interactive map: replaced the Google Maps iframe on the About us page with a Leaflet + OpenStreetMap map with a Secunda Stadium marker and popup.
- Animations and transitions: cards fade up as they scroll into view, the numbers in the club stats count up, cards lift on hover, the accordion slides open, and there is a back-to-top button. All of it switches off for visitors who have "reduce motion" turned on.
- Advanced DOM manipulation: elements are created with document.createElement through a helper, one click listener handles every gallery photo (event delegation), IntersectionObserver drives the scroll effects, and the modal and lightbox are built on demand.
- Gallery with lightbox: new gallery.html with category filter buttons and a lightbox (next, previous, Esc and arrow keys).

## 9. Dynamic content (Functionality 2.2)
- News, fixtures, results, standings and the squad are stored once in js/data.js and built into the pages by JavaScript. The standings table used to be copied into two pages.
- Search, filter and sort: the News page (search text, category, newest or oldest) and the Team Profile page (search name or number, position, sort by number or name).
- The W / D / L form badges are now worked out from the score, so a badge can never disagree with the result.

## 10. Forms and validation (Section 4)
- New enquiry.html (membership, sponsorship or volunteering). A second dropdown is built from the first, and after a valid submit the page answers with the cost and availability.
- New contact.html (general message). After validation the message is compiled into an email (To, Subject and Body) and the visitor presses a button to send it from their own email app.
- HTML5 validation attributes (required, minlength, maxlength, type, pattern) plus JavaScript validation: South African phone numbers, name characters, email format, date range (today to 12 months ahead) and message length with a live counter.
- Error handling: a message appears next to each invalid field, the first invalid field is focused, and screen readers are told through aria-invalid.
- AJAX submission with fetch() to the form's action address (Formspree).
- The old enquiry form was removed from the About us page and replaced with links to the two new pages.

## 11. SEO
- Every page has a unique title, meta description, canonical link and Open Graph tags.
- Headings: every page now has exactly one h1 (home and team profile were missing one).
- Image optimisation: descriptive file names (table below), descriptive alt text, and lazy loading for images below the fold. An unused 745 KB photo was compressed.
- URL structure: lowercase, hyphenated page names (about-us.html, squad.html) and lowercase folders (css, js, images).
- Internal linking: footers and pages link to each other, with calls to action to the enquiry and contact pages.
- Local SEO: schema.org SportsTeam structured data (JSON-LD) on the home page, with Secunda, Mpumalanga.
- robots.txt and sitemap.xml were created.
- Page speed: scripts use defer, fonts use display=swap with preconnect, and images are lazy loaded.
- Security: external links use rel="noopener noreferrer", form input is only ever inserted into the page as text (never as HTML), a hidden honeypot field catches spam bots, and line breaks are stripped from email subjects so extra email headers cannot be injected.


### Image renames
| Old name | New name |
|---|---|
| a.png | club-logo.png |
| download.jpg | sponsor-maleleza-lifestyle-hub.jpg |
| o.jpg | player-placeholder.jpg |
| WhatsApp Image 2026-09-17 at 00.25.35.jpeg | players-in-new-kit.jpeg |
| vk.jpeg | match-action-closing-down-opponent.jpeg |
| volks.jpeg | match-action-shielding-the-ball.jpeg |
| volkss.jpeg | match-action-bicycle-kick.jpeg |
| volk.jpeg | player-walking-off-pitch.jpeg |
| debut.jpeg | player-number-24-portrait.jpeg |
| merchandise.jpeg | supporters-kit-shirts.jpeg |
| v.jpg | training-session-cones.jpg |
| NEDBANK7_56703.jpg | fans-cheering-in-stands.jpg |
| l.jpg | squad-team-photo.jpg |
| s.jpg | secunda-stadium-view.jpg |
| kick.JPG | free-kick-defensive-wall.jpg |
| m.jpg | team-photo-purple-kit.jpg |
| qw.jpg | match-action-orange-kit-opponent.jpg |
| b.jpg | match-action-orange-kit-opponent-small.jpg |
| new kit.jpeg |  |

