# Cafe_FullStackWebsite

**Overview**

A cafe website with public facing UI and admin-only UI for updating and editing menus and menu items (with unique indexing, item name, description and category), as well as images of the cafe and locals (including residents pooches). Two bespoke APIs ('menu', and 'dogs') create and access data in MongoDB Compass for this purpose through CRUD functionality.




![Screen Shot 2021-03-09 at 8 33 22 pm](https://user-images.githubusercontent.com/65477570/110449887-c2a83800-8116-11eb-8846-5405b3e60353.png)

![Screen Shot 2021-03-09 at 8 44 02 pm](https://user-images.githubusercontent.com/65477570/110451334-34cd4c80-8118-11eb-8230-ccf400d9774f.png)

___________________________________________________________________________________________________________________________________________________________

The website is fully responsive, with layouts for all screen sizes including tablets and smart-phones:

(1) Tablet example -

![Screen Shot 2021-03-09 at 8 49 05 pm](https://user-images.githubusercontent.com/65477570/110452065-ecfaf500-8118-11eb-9c17-ee5442471f6c.png)

(2) Smart phone example -

![Screen Shot 2021-03-09 at 9 30 59 pm](https://user-images.githubusercontent.com/65477570/110457475-c8a21700-811e-11eb-946a-6ce72e6b9ea2.png)



___________________________________________________________________________________________________________________________________________________________


**Current app issues**

The login functionality is currently being integrated.

**Future plans**

I plan to add scheduling functionality for the menu item update - so, for example, the admin can add items one day but schedule them to appear at midnight on Sunday night, or add a 'special' that appears only on a particular day of the week.

An 'order online' function will be added and integrated with full stack functionality, so that customers can both order coffee and food ahead of time (or the cafe's preferred app for this integrated), and also order and pay for groceries from the cafe's newly established in-house corner-store.

The contact form that is currently in the website footer will also be given back-end functionality using CRUD and API with a database, so that the admin can respond to queries and keep track of customer names and email addresses. 

**Install instructions**

Once cloned, start a terminal for both the client and server folders and run the "npm install" command in both to ensure you have the necessary dependencies. Then run the "npm start" command in both to open the app at http://localhost:3000

Built using MERN stack.
___________________________________________________________________________________________________________________________________________________________


