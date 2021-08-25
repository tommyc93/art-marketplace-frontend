# [Art Marketplace](https://art-marketplace.herokuapp.com/)

## Authors
- Tommy Chung |[LinkedIn](https://www.linkedin.com/in/tommy-chung93)|  |[GitHub](https://github.com/tommyc93)|
- Danish |[LinkedIn](https://www.linkedin.com/in/danishvirani/)| |[GitHub](https://github.com/danishvirani)|
- Dwayne |[LinkedIn](https://www.linkedin.com/in/miller-0)| |[GitHub](https://github.com/Dwayne92)|

### Approach
#### Picking a Project Idea
We discussed a few different ideas ranging from e-commerce app to digital art display.  We settled on combining both ideas to develop an app where Users/Artists can sell and buy their art pieces.

#### Splitting the work
We were able to decide how we would delegate the tasks for our projects.  I would work on setting up the Front End and work on components for the Front End.  Danish would work on the Back End.  Dwayne would add and adjust our format using CSS/CSS frameworks.  After that we would peer program together on parts we may need assistance on.  We cloned our repos and created separate branches for both us to work on independently so we wouldn't have merge conflicts with one another.

#### Data Structure
- Created the Back End and Front End in a separate repos.
- Created the Back End using PostgreSQL, Django, Python.
- Created the Front End using React & Javascript.
- Linked the Back End with the Front End using Heroku links.

## User Stories
#### Core
- User should be able to add Art Pieces / Artists
- Edit Art Pieces / Artists
- Delete Art Pieces
- Filter through the Artwork using filter by Artists
- Users should be able to adjust Art ratings
- Users should be able to sign-up and login
- Users can add Artwork to their shopping cart and it would display the total.
- Artwork can be removed from cart or bought, then removed from database.
- User should be able to navigate through the app using navigational tabs at the Navbar

#### Stretch
- Image Carousel for Artwork
- Filtering option
- Add ratings
- Using bootstrap
- Add sign-up/sign-in
- Authentication with Bcrypt

## Technologies/Languages Used
#### MERN Stack
- Django
- SQL
- React
- Bootstrap
- Python
- JavaScript

#### Project Management, hosting, and deployed
- GitHub
- Heroku
- Trello/Agile board

#### Unsolved Problems
- Was not able to fully create a transaction page utilizing payment methods.
- Dynamically see change in price total in cart as User removes Artwork from cart.
- Exploring advanced 3d shape & text building in CSS

#### Solved Problems
- Was able to get filter functionality working
- Was able to get Shopping Cart to work manipulating through the Front-End
- Was able to get the page to re-render for the Shopping Cart by adding a dummy hook into the Remove from Cart function.
- Settled on neutral tone background that compliments pieces & got carousel functionality
- Was able to get sign-up/login functionality using Python by adding password hashes into the setting and using jsonRequest in our API views.

#### Reflection Section
- If we had more time I would have liked to get a transaction page working
- Would like to try incorporating and using ManyToMany relations in the Back-End
