# Ft_transcendance

## Project Overview:

<p>This is a website where you can play pong with other players. There are accounts, chat rooms, spectating mode, and a match-making system.</p>

## Technical details:

This project is fully coded in Typescript and could be deployed with docker-compose.

- For the front framework, we choose ReactJS.
- For the back framework, NestJS was imposed.
- As a database, Postgres was imposed too.

If you are more curious, you could find our Notion documentation below.

## User Account :

### Authentication:

Authentication is a crucial part of almost every web application. There are many ways to approach it. In our case, The user must log in using the OAuth system of 42 Intranet. We aim to restrict the application to only authenticated users, a simple way to do so is to use JSON Web Tokens.

# 1. API with NestJS #1. Controllers, routing and the module structure:

NestJS is a framework for building Node.js applications. It is somewhat opinionated and forces us to follow its vision of how an application should look like to some extent. That might be viewed as a good thing that helps us to keep consistency across our application and forces us to follow good practices.

NestJS uses Express.js under the hood by default. If you’re familiar with my [![TypeScript Expres series](https://wanago.io/2018/12/03/typescript-express-tutorial-routing-controllers-middleware/)](https://wanago.io/2018/12/03/typescript-express-tutorial-routing-controllers-middleware/) and you’ve enjoyed it, there is a great chance you will like NestJS too. Also, knowledge of the Express framework will come in handy.

An important note is that the [![documentation of NestJS](https://docs.nestjs.com)](https://docs.nestjs.com) is comprehensive, and you would benefit from looking it up. Here, we attempt to put the knowledge in order, but we also sometimes link to the official docs. We also refer to the Express framework to highlight the advantages of using NestJS. To benefit from this article more, some experience with Express might be useful, but not necessary.

> If you want to look into the core of Node.js, I recommend checking out the Node.
> js TypeScript series. It covers topics such as streams, event loop, multiple >
> processes and multithreading with worker threads. Also, knowing how to create an 
> API without any frameworks such as Express and NestJS makes us apprieciate them 
> even more.

## Getting started with NestJS

The most straightforward way of getting started is to clone the official TypeScript starter repository. Nest is built with TypeScript and fully supports it. You could use JavaScript instead, but here we focus on TypeScript.

```sh
git clone git@github.com:nestjs/typescript-starter.git
```

A thing worth looking into in the above repository is the  ```sh tsconfig.jso ``` file. I highly recommend adding the  alwaysStrict and  noImplicitAny options

The above repository contains the most basic packages. We also get the fundamental types of files to get us started, so let’s review them.

> All of the code from this series can be found in [this repository](https://github.com/. 
> mwanago/nestjs-typescript). Hopefully, it can later serve as a NestJS boilerplate with some
> built-in features.It is a fork of an official [typescript-starter](https://github.com/ 
> nestjs/typescript-starter). Feel free to give both of them a star.

# Controllers

Controllers handle incoming requests and return responses to the client. The  ```sh typescript-starter ``` repository contains our first controller. Let’s create a more robust one:

```sh

import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {

    @Post('signup')
    signup(@Req() req:Request) {
        console.log(req);
        return this.authService.signup();
    }

    @Post('signin')
    signin() {
        return this.authService.signin();
    }
}

```

The first thing that we can notice is that NestJS uses decorators a lot. To mark a class to be a controller, we use the  @Controller() decorator. We pass an optional argument to it. It acts as a path prefix to all of the routes within the controller.

# Routing

The next set of decorators connected to routing in the above controller are  @Get(),  @Post(),  Delete(),  and  @Put(). They tell Nest to create a handler for a specific endpoint for HTTP requests. The above controller creates a following set of endpoints:

```sh 
GET /posts 
```
> Returns all posts

```sh 
GET /posts/{id}
```

```sh
POST /posts
```


<p>Building an authentication project with NestJS, Prisma, PostgreSQL, JWT, and cookies involves several steps. I'll outline the high-level steps to create such a project, but please note that it might require more detailed work depending on your specific requirements.</p>

1. Set up your Environment:

Install Node.js if you haven't already.
Create a new NestJS project using the Nest CLI.
Set up Prisma and PostgreSQL as your database. Ensure you have a PostgreSQL server running.
Install necessary dependencies like @nestjs/passport, @nestjs/jwt, and cookie-parser.

2. User Model with Prisma:

Define a User model using Prisma. This model should include fields for user authentication, such as username, email, and password. Make sure to create migrations and apply them to your database.

3. Authentication Service:

Create a service in NestJS for authentication. This service will handle user registration, login, and other authentication-related functions. You'll use Prisma to interact with your PostgreSQL database to perform these operations.

4. JWT Configuration:

Configure JWT (JSON Web Tokens) for user authentication. You can use the @nestjs/jwt package to generate tokens. Create an authentication strategy that validates JWT tokens in incoming requests.

5. Cookie Setup:

For storing JWT tokens in cookies, you can use the cookie-parser middleware to handle cookies in your NestJS application. Configure your application to set and read cookies.

6. User Registration:

Create an API endpoint that allows users to register by providing their details. Hash and salt the password before storing it in the database.

7. User Login:

Implement an API endpoint for user login. When a user logs in successfully, generate a JWT and store it in a cookie to maintain the user's session.

8. Protecting Routes:

Use guards in NestJS to protect certain routes and endpoints. Only users with a valid JWT should be able to access protected routes.

9. Logout:

Create an endpoint to allow users to log out. This should clear the JWT from the cookie, effectively ending their session.

10. Middleware:

Set up middleware to handle cookie parsing, JWT validation, and any other necessary middleware for your authentication flow.

11. Error Handling:

Implement error handling to provide meaningful responses when authentication or authorization fails.

12. Testing:

Write tests for your authentication endpoints to ensure that everything works as expected.

13. Additional Features:

Depending on your project's requirements, you can implement features like password reset, email confirmation, or user role management.

14. Frontend Integration:

Create a frontend (e.g., using Angular, React, or Vue) to interact with your authentication API. The frontend should handle user registration, login, and logout, as well as securely storing and sending cookies.

15. Security Considerations:

Be mindful of security considerations, such as securing your JWTs, using HTTPS, and protecting against common web vulnerabilities like Cross-Site Scripting (XSS) and Cross-Site Request Forgery (CSRF).

16. Deployment:

Deploy your NestJS application to a production server, considering security best practices and scalability.

<p>This is a high-level overview of how to build an authentication project with NestJS, Prisma, PostgreSQL, JWT, and cookies. The specific implementation details and code will depend on your project's requirements and your familiarity with these technologies.</p>

## Project Overview:

<p>This is a website where you can play pong with other players. There are accounts, chat rooms, spectating mode, and a match-making system.</p>

## Technical details:

This project is fully coded in Typescript and could be deployed with docker-compose.

- For the front framework, we choose ReactJS.
- For the back framework, NestJS was imposed.
- As a database, Postgres was imposed too.

If you are more curious, you could find our Notion documentation below.

## User Account :

### Authentication:

Authentication is a crucial part of almost every web application. There are many ways to approach it. In our case, The user must log in using the OAuth system of 42 Intranet. We aim to restrict the application to only authenticated users, a simple way to do so is to use JSON Web Tokens.

# 1. API with NestJS #1. Controllers, routing and the module structure:

NestJS is a framework for building Node.js applications. It is somewhat opinionated and forces us to follow its vision of how an application should look like to some extent. That might be viewed as a good thing that helps us to keep consistency across our application and forces us to follow good practices.

NestJS uses Express.js under the hood by default. If you’re familiar with my [![TypeScript Expres series](https://wanago.io/2018/12/03/typescript-express-tutorial-routing-controllers-middleware/)](https://wanago.io/2018/12/03/typescript-express-tutorial-routing-controllers-middleware/) and you’ve enjoyed it, there is a great chance you will like NestJS too. Also, knowledge of the Express framework will come in handy.

An important note is that the [![documentation of NestJS](https://docs.nestjs.com)](https://docs.nestjs.com) is comprehensive, and you would benefit from looking it up. Here, we attempt to put the knowledge in order, but we also sometimes link to the official docs. We also refer to the Express framework to highlight the advantages of using NestJS. To benefit from this article more, some experience with Express might be useful, but not necessary.

> If you want to look into the core of Node.js, I recommend checking out the Node.
> js TypeScript series. It covers topics such as streams, event loop, multiple >
> processes and multithreading with worker threads. Also, knowing how to create an 
> API without any frameworks such as Express and NestJS makes us apprieciate them 
> even more.

## Getting started with NestJS

The most straightforward way of getting started is to clone the official TypeScript starter repository. Nest is built with TypeScript and fully supports it. You could use JavaScript instead, but here we focus on TypeScript.

```sh
git clone git@github.com:nestjs/typescript-starter.git
```

A thing worth looking into in the above repository is the  ```sh tsconfig.jso ``` file. I highly recommend adding the  alwaysStrict and  noImplicitAny options

The above repository contains the most basic packages. We also get the fundamental types of files to get us started, so let’s review them.

> All of the code from this series can be found in [this repository](https://github.com/. 
> mwanago/nestjs-typescript). Hopefully, it can later serve as a NestJS boilerplate with some
> built-in features.It is a fork of an official [typescript-starter](https://github.com/ 
> nestjs/typescript-starter). Feel free to give both of them a star.

# Controllers

Controllers handle incoming requests and return responses to the client. The  ```sh typescript-starter ``` repository contains our first controller. Let’s create a more robust one:

```sh

import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {

    @Post('signup')
    signup(@Req() req:Request) {
        console.log(req);
        return this.authService.signup();
    }

    @Post('signin')
    signin() {
        return this.authService.signin();
    }
}

```

The first thing that we can notice is that NestJS uses decorators a lot. To mark a class to be a controller, we use the  @Controller() decorator. We pass an optional argument to it. It acts as a path prefix to all of the routes within the controller.

# Routing

The next set of decorators connected to routing in the above controller are  @Get(),  @Post(),  Delete(),  and  @Put(). They tell Nest to create a handler for a specific endpoint for HTTP requests. The above controller creates a following set of endpoints:

```sh 
GET /posts 
```
> Returns all posts

```sh 
GET /posts/{id}
```

```sh
POST /posts
```


<p>Building an authentication project with NestJS, Prisma, PostgreSQL, JWT, and cookies involves several steps. I'll outline the high-level steps to create such a project, but please note that it might require more detailed work depending on your specific requirements.</p>

1. Set up your Environment:

Install Node.js if you haven't already.
Create a new NestJS project using the Nest CLI.
Set up Prisma and PostgreSQL as your database. Ensure you have a PostgreSQL server running.
Install necessary dependencies like @nestjs/passport, @nestjs/jwt, and cookie-parser.

2. User Model with Prisma:

Define a User model using Prisma. This model should include fields for user authentication, such as username, email, and password. Make sure to create migrations and apply them to your database.

3. Authentication Service:

Create a service in NestJS for authentication. This service will handle user registration, login, and other authentication-related functions. You'll use Prisma to interact with your PostgreSQL database to perform these operations.

4. JWT Configuration:

Configure JWT (JSON Web Tokens) for user authentication. You can use the @nestjs/jwt package to generate tokens. Create an authentication strategy that validates JWT tokens in incoming requests.

5. Cookie Setup:

For storing JWT tokens in cookies, you can use the cookie-parser middleware to handle cookies in your NestJS application. Configure your application to set and read cookies.

6. User Registration:

Create an API endpoint that allows users to register by providing their details. Hash and salt the password before storing it in the database.

7. User Login:

Implement an API endpoint for user login. When a user logs in successfully, generate a JWT and store it in a cookie to maintain the user's session.

8. Protecting Routes:

Use guards in NestJS to protect certain routes and endpoints. Only users with a valid JWT should be able to access protected routes.

9. Logout:

Create an endpoint to allow users to log out. This should clear the JWT from the cookie, effectively ending their session.

10. Middleware:

Set up middleware to handle cookie parsing, JWT validation, and any other necessary middleware for your authentication flow.

11. Error Handling:

Implement error handling to provide meaningful responses when authentication or authorization fails.

12. Testing:

Write tests for your authentication endpoints to ensure that everything works as expected.

13. Additional Features:

Depending on your project's requirements, you can implement features like password reset, email confirmation, or user role management.

14. Frontend Integration:

Create a frontend (e.g., using Angular, React, or Vue) to interact with your authentication API. The frontend should handle user registration, login, and logout, as well as securely storing and sending cookies.

15. Security Considerations:

Be mindful of security considerations, such as securing your JWTs, using HTTPS, and protecting against common web vulnerabilities like Cross-Site Scripting (XSS) and Cross-Site Request Forgery (CSRF).

16. Deployment:

Deploy your NestJS application to a production server, considering security best practices and scalability.

<p>This is a high-level overview of how to build an authentication project with NestJS, Prisma, PostgreSQL, JWT, and cookies. The specific implementation details and code will depend on your project's requirements and your familiarity with these technologies.</p>


# Two factor authentication
## Here's the login flow for 2fa authentication:

1. The user logs in with his email and password
2. If the 2fa is not enabled, he can enable it using the turn-on route. This will generate a QrCode that the user will scan with the google authenticator app.
3. The use then uses the random code the app has generated to authenticate


# Creating the 2fa system
First we have to create a unique secret for every user that turns on 2fa, but we'll also need a special otp authentication url that we'll be using later to create a QrCode. The otplib package is a good match, so let's install it.



# FT_transcendence:

Final project of the 42 School.

![Welcome](https://github.com/ahammamlho/ft_transcendence/blob/main/screen-shot/Welcome-page.png?raw=true)

A Single Page App where authenticated users engage in real-time 'Pong' competitions, with the added capabilities of chatting with friends, joining channels, monitoring game statistics, and much more.

## Contributors:

- _<a href="https://github.com/ahammamlho" target="_blank">AHAMMAM LHOUSSAINE</a><br>_
- _<a href="https://github.com/hixcoder" target="_blank">BOUMAHDI HAMZA</a><br>_
- _<a href="https://github.com/salihalammari" target="_blank">LAMMARI SALIHA</a><br>_
- _<a href="https://github.com/alouzizi" target="_blank">LOUZIZI ALI</a><br>_
- _<a href="https://github.com/younesjarhbou" target="_blank">JARHBOU YOUNESS</a><br>_

![Developers](https://github.com/ahammamlho/ft_transcendence/blob/main/screen-shot/developers.png?raw=true)

## Features:

- User authentication using 42 intranet OAuth system or google.
- Two-Factor Authentication with Google Authenticator.
- User account management with unique username and avatar upload.
- Add friends and see current status (Online, Offline or In A Game).
- Real-time chat system with public and private channels.
- Pong game with matchmaking, invite and customization options.
- Track your performance and compete with others to reach the top of the leaderboard.

## Technologies:

- **Backend:** [NestJs](https://nestjs.com/), [PassportJS](https://www.passportjs.org/packages/), [JWT](https://jwt.io/)
- **Frontend:** [NextJs](https://nextjs.org/), [TypeScript](https://www.typescriptlang.org/), [Tailwind CSS](https://tailwindcss.com/)
- **Database:** [PostgreSQL](https://www.postgresql.org/), [Prisma](https://www.prisma.io/)
- **Web Sockets:** [Socket.IO](https://socket.io/)

## Installation

- Set values `CLIENT_ID_42`, `CLIENT_SECRET_42` and `CALLBACK_URL_42` in ./.env
- open Docker
- run commend line `docker-compse up --build`

## Screenshot

- Welcome Page
  ![Welcome](https://github.com/ahammamlho/ft_transcendence/blob/main/screen-shot/Welcome-page.png?raw=true)

- Settings Page
  ![settings](https://github.com/ahammamlho/ft_transcendence/blob/main/screen-shot/settings.png?raw=true)

- Verify 2fa Page
  ![2fa](https://github.com/ahammamlho/ft_transcendence/blob/main/screen-shot/2fa.png?raw=true)

- Dashboard Page
  ![dashboard](https://github.com/ahammamlho/ft_transcendence/blob/main/screen-shot/dashboard-page.png?raw=true)

- Friendship Page
  ![Friendship](https://github.com/ahammamlho/ft_transcendence/blob/main/screen-shot/friends-page.png?raw=true)

- Startgame Page
  ![startgame](https://github.com/ahammamlho/ft_transcendence/blob/main/screen-shot/start-game.png?raw=true)

- Option game Page
  ![game-2](https://github.com/ahammamlho/ft_transcendence/blob/main/screen-shot/game-2.png?raw=true)

- Game Page
  ![game](https://github.com/ahammamlho/ft_transcendence/blob/main/screen-shot/game-3.png?raw=true)

- Chat Page
  ![chat](https://github.com/ahammamlho/ft_transcendence/blob/main/screen-shot/chat-direct-msg.png?raw=true)

- Create Channel Alert
  ![channel](https://github.com/ahammamlho/ft_transcendence/blob/main/screen-shot/create-channel.png?raw=true)

- Channel Settings
  ![Channel](https://github.com/ahammamlho/ft_transcendence/blob/main/screen-shot/Channel-Settings.png?raw=true)


