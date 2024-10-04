<p align="center">
    <h1 align="center">E-COMMERSE-API-FULL-BACKEND</h1>
</p>

 ##  Introduction
<p>Welcome to our E-commerce platform, a comprehensive online shopping solution designed to provide a seamless experience for buyers and sellers alike</p>

## Skill
-Node.js<br>
-express.js<br>
-Mongoose





##  Features
-User(Login,SignUp)<br>
-Products(Add Product,Get Product,Filter Product,Delete Product)<br>
-Cart(Add,get,Delete) <br>
-Order(Place Order,MongoDB Database transaction Implemented)<br>
-JWT Authentication<br>
-Rating and comment the product<br>
-Database<br>


## Description 

-User signUp by the help of this input<br>
    1.firstname<br>
    2.lastname<br>
    3.email (validate email)<br>
    4.mobile<br>
    5.password (when the password is save in the database it convert into hashcode)<br>
    6.role (defult "user")
    7.address (optional)<br>

-After the user signUp it can  Login  when user login by the help of email/mobile and password it's generate token and save it in cookie.<br>

-if user is admin then this user can add your won product for selling it can also delete the product and update the product.<br>

































---
##  File Structure

```sh
└── E-Commerse-API-Full-Backend
    ├── server.js
    ├── .env
    ├── package-lock.json
    ├── package.json
    ├── config
    │   └── dbconnect.js
    ├── controllers
    │   ├── authController.js
    │   ├── userController.js
    │   ├── productController.js
    │   ├── cartController.js
    │   ├── ratingAndCommentController.js
    │   └── orderController.js
    ├── models
    │   ├── userModel.js
    │   ├── productModel.js
    │   ├── cartModel.js
    │   ├── ratingAndCommentModel.js
    │   └── orderModel.js
    ├── routers
    │   ├── authRouter.js
    │   ├── userRouter.js
    │   ├── productRouter.js
    │   ├── cartRouter.js
    │   ├── ratingAndCommentRouter.js
    │   └── orderRouter.js
    ├── utils
    │   ├── APiError.js
    │   └── asynchHandler.js
    ├──middlewares
    │       ├── adminMiddleware.js
    │       ├── auth.js
    │       └── multerMiddleware.js
    └── images
```
---

git clone-https://github.com/Laxmikantadas123/E-commers-Platfrom <br>
Email-daslaxmikanta219@gmail.com