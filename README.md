# myProject
 my project for Le Mac Urbain
 
I chose this project because it well demonstrates my acquired knowledge in object-oriented programming. 
This project helped me to understand many details and to progress in JS.
Also, this work contains database queries (AJAX queries).

Project description

This is a site for a small tableware store.
The following functionalities have been implemented:
1. Display of 12 products on the first page
2. The ability to display more products at the click of a button
3. Sort products alphabetically or by price
4. Adding a product to the cart
5. Displaying the contents of the cart in the form of a table
6. Increasing and decreasing the number of products in the cart
7. Order form
8. Checking the form fields for correctness
9. Sending information to the database (Add user if it doesn't exist, Add order, Subtract the number of ordered items from the database table)
10. Automatic transition to the first page

Installation instructions

1. Create a database using file boutique.sql
2. Сonnect the database to the project in a file TemplateDAO.php
   $this->connexion = new PDO("mysql:host=localhost;dbname=boutique", "root", "root"); // for MacOS
			$this->connexion = new PDO("mysql:host=localhost;dbname=boutique", "root", "");     // for Windows
3. if necessary - connect the project to the web server in a file index.php
   define("RACINE", "");
   define("RACINEWEB", "http://" . $_SERVER["SERVER_NAME"] . ":" . $_SERVER["SERVER_PORT"] . "");
