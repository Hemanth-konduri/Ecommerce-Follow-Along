# Ecommerce-Follow-Along

## E-Commerce Website - Project Overview
 
 Your e-commerce website will serve as an online platform where users can browse products, add them to their cart, make purchases, and track their orders. It will include features for both customers and admins to manage products, orders, and user accounts efficiently.

## Project Features
1. **User Features**
- User Authentication – Sign up, login, logout (JWT-based authentication)
- Profile Management – Edit profile, change password, manage addresses
- Product Browsing – View products, categories, and search/filter options
- Cart & Wishlist – Add/remove products from the cart or wishlist
- Checkout & Payments – Secure payment integration (Stripe, Razorpay, etc.)
- Order Tracking – View order status, estimated delivery time
- Product Reviews & Ratings – Users can rate and review products

2. **Admin Features**
- Admin Dashboard – Manage users, products, and orders
- Product Management – Add, update, delete products and categories
- Order Management – View, update order status (pending, shipped, delivered)
- User Management – View and manage user accounts
- Reports & Analytics – Track sales, revenue, and best-selling products

3. **Additional Features**
- Search & Filters – Implement search functionality with category and price filters
- Email Notifications – Order confirmation, shipping updates via email
- Security Measures – Secure authentication, data encryption, API rate limiting
- Responsive Design – Mobile-friendly and optimized UI

## Tech Stack
1. **Backend**
- Language: JavaScript (Node.js) / Python (Django)
- Framework: Express.js (for Node.js) / Django REST Framework (for Python)
- Database: MongoDB (NoSQL) / PostgreSQL or MySQL (SQL-based)
- Authentication: JWT (JSON Web Tokens) for user authentication
- Payment Gateway: Stripe / Razorpay for secure transactions
- Cloud Storage: Cloudinary / AWS S3 for storing product images
2. **Frontend**
- Framework: React.js with Redux / Next.js
- Styling: Tailwind CSS / Material-UI
- State Management: Redux Toolkit / Context API
3. **DevOps & Deployment**
- Hosting: Vercel / Netlify for frontend, Render / AWS / DigitalOcean for backend
- Database Hosting: MongoDB Atlas (for MongoDB) / AWS RDS (for SQL-based)
- CI/CD: GitHub Actions for automated deployment

# Milestone 1

  Completed foundation for my E-commerce Application.

  # Milestone 2

  - Seperate folders for frontend and backend.
  - A functional Login page in the frontend.
  - Completed setting for tailwind-css.

 # Milestone 3

* Organized the *backend folder structure* for scalability.
* Connected the *server to MongoDB* using Mongoose.
* Implemented *error-handling middleware* for API stability.

  # Milestone 4
  
  - created the **user model** in mongoose to define user data structure.
  - Developed the **User controller** to manage user authentication(signup, login).
  - Implemented **Multer for filr handling**, allowing user profile and product image.

  # Milestone 5

  - created the **signup page** in react and added code for signup backend also.
  - Added the **signup page** validation in (signup, login). 


  # Milestone 6

  - added the  **password encryption** in the backend signup page.
  - Added comparison for checking password is correct or not in login backend. 

  # Milestone 7

  - created all the requirements **login authentication** in the backend file.
  - Here we are first getting the hashed password from db searched by email and then comparing the input body password with hashed password by compare method in bcrypts.

  # Milestone 8
  
   - added the **product page** in the frotend as a home page.
   - and added the designs for products page and home page with css for both.


   # Milestone 9

   - created the **AddProducts** page in frontend.
   - added form validation in AddProducts page.


   # Milestone 10

   - Created the **productRouter** page  in backend.
   - created the **productModel** in backend.
   - handled file uploads by multer inside middleware multer.

   # Milestone 11

   - created **Home page** for dynamic products presenatation.
   - added the **backend** part for handeling products(created endpoint to get products).
   - handeled file uploads by multer inside middleware multer

   # Milestone 12
   
   - Created **product page** for dynamic products presentation according to user mail.
   - Created backend form specific user products.

   # Milestone 13

   - created **product update endpoint** for updating products.
   - created from for updating data in frontend and created autofill function.

    # Milestone 14: Created Product Delete**

   - created*product delete Endpoint* for Updating products.
   - created from for Deleting product in frontend.

   # Milestone 15

   - Created **Navigation bar** for navigating between pages.


   # Milestone 16  Created product Details page

   - created **Product Details** for showing full product details in details page.
   - Added add-to-cart button with quantity selection.


   # Milestone 17 CRUD for cart

   - created endpoints in backend **CRUD** for handling cart.
   - Handled quantity for product in cart.

   # Milestone 18 Frontend cart page

   - created cart page in frontend.
   - Handled cart operations from frontend.

   # Milestone 19 Backend endpoint for cart item quantity

   - created put request for updating quantity for cart item.

   # Milestone 20 Backend endpoint for userDetails

   - Created endpoint for userDetails in backend.
   - Created User.jsx for userDetails in frontend.


   # Milestone 21 Created frontend for Address

   - Created route for Add address page in frontend.
   - Create form for adding address.
   - Started address using useState Hook.

   # Milestone 22 Created backend for address and attached with frontend

   - Created backend endpoint for handling address.
   - Added backend endpoint with frontend.

   # Milestone 23 worked on address on frontend and backend

   - Created place order button in cart page and added navigation to select address.
   - Created select address page and provided option to select one address.
   - Created backend end point to send all address to user.

   # Milestone 24 Worked on address in frontend and backend

   - Displayed all of products in cart.
   - Displayed all address in address selection page.
   - Displayed total price in the cart.
   - Added place order button at the bottom.


   # Milestone 25 Worked on order backend and email service

   - Created endpoint for order.
   - Implemented mail service from nodemailer.
   - Handled address for the delivery.
