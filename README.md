# ORM-eCommerce

## Description

![badgeImg](https://shields.io/badge/license-MIT-green)

This application sets up, populates, and enables the management of, a database of goods available to purchase on a potential e-commerce website. After following the installation steps, a user will be able to create, view, delete, and update all available products in the database as well as categories and tags that offer extra descrition of various goods. All of this can be done in app like insomnia, as there is no html to go along with the back-end code.

For me, the trickiest aspect of this project was dealing with product tags. I realize they're required in order to use sequelize's manytoMany allocation but the role they serve is still very fuzzy. They don't provide any new info and it feels like their content is already applied to each product. Other than that, the models and routes were mostly straightforward, especially since the product-routes was handled for us.


## Table of Contents 

[Installation](#Installation)
    
[Usage](#Usage)
    
[License](#License)
    
[Constributing](#Constributing)
    
[Tests](#Tests)
    
[Questions](#Questions)
    
    
## Installation
    
1. Clone repo from github
2. Open repo in code editor
3. Open index.js in integrated terminal
4. Run "npm i" to install dependencies
5. Run "mysql -uroot -p" and enter your sql password to login to MYSQL
6. Run "source db/schema.sql to initialize the database
7. Exit mysql by typing "quit;" and pressing enter
8. Run "npm run seed" to seed database
9. Run "npm start" to start up the server
    
    
## Usage
    
After installation, open insomnia and you're ready to go! Walkthrough below.
![Walkthrough](Assets/ORM_1.gif)
![Walkthrough](Assets/ORM_Products.gif)
![Walkthrough](Assets/ORM_Tags.gif)
![Walkthrough](Assets/ORM_Categories.gif)
    
    
## License 
    
GitHub
    
    
## Contribution 
    
To contribute, contact me!
    
    
## Tests
    
No testing required
    
    
## Questions
    
For questions, email me at: henryweigand10@gmail.com
    
Or, checkout my [github!](github.com/hcweigand10)