README

This website was created as part of a group project for IST 256: Full Stack Web Development under the instruction of Professor Bob Bartell. For this assignment, each team was tasked with designing and building a fully custom e-commerce website from scratch. After forming our group, we decided to build a retro video game store, themed around classic gaming systems, accessories, and collectibles.

The site includes multiple interconnected pages that demonstrate both front-end design and foundational back-end logic:

    A home page (index.html) that introduces the site and our team

    A product's page with category filters and a search bar

    A product management page that allows basic create, update, and delete operations on products

    A shopper account management page to input and update user data

    A create account page for new shoppers

    A login page

    A shopping cart page (currently non-functional)

We worked together to structure the HTML, CSS, and JavaScript while using Bootstrap 4.4.1 for layout and styling enhancements. Each part of the site reflects contributions from team members across design, logic, and user experience.

Unfortunately, due to the time constraints of the semester and the scope of the course, we were not able to implement a working database. As a result, user account creation, login functionality, product storage, and shopping cart features are not backed by a persistent backend. Instead, we handled temporary data using JavaScript and a locally managed JSON object. This allowed us to simulate form validation, dynamic product filtering, and UI updates, though all data resets when the browser session ends.

The shopping cart page is non-functional because there is no session or storage to track user selections. Similarly, while the shopper management page can take inputs, it does not permanently store them. The product management page allows users to simulate creating, updating, or deleting products from the local array, which is reflected dynamically in the front-end.

Overall, this project taught us how to plan, design, and build a cohesive website as a team using foundational front-end technologies and how to simulate dynamic web behavior without a server. If given more time, we would have implemented a full backend using technologies like Node.js, Express, and MongoDB or Firebase to persist product data, manage sessions, and secure user accounts.

We hope you enjoy exploring our work!
