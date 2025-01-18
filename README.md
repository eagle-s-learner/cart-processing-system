
# Cart Processing System

Add items to cart, if your logged In. Register new User



## Backend

- Developed using **Node.js v22+** with the **Express framework** .
- Implements **RESTful APIs** with asynchronous operations for efficient data handling.
- Utilizes a **PostgreSQL database** (or preferred DB) for structured data storage.
- Follows best practices in API development, including proper error handling and optimized database queries.



## Frontend
- Built with **React v18+**  for a modern and maintainable UI.

## Project Setup

Open your system terminal

```bash
  git clone https://github.com/eagle-s-learner/cart-processing-system.git
```
Press **Enter**
```bash
  cd cart-processing-system
```
Press **Enter**
```bash
  cd client
  npm install
```
Press **Enter**
```bash
  cd server
  npm install
```
Press **Enter**

## Setup Environment Variables

To run this project, you will need to add the following environment variables to your .env file in the server's root director

`PORT`

`DATABASE_USER`

`DATABASE_HOST`=localhost

`DATABASE_NAME`

`DATABASE_PASSWORD`

`DATABASE_PORT`=5432

`JWT_SECRET`=

Add the following details in your .env file.

- Create database into your postgres database.

```bash
create table users (
	id serial primary key,
	name varchar(255) not null,
	email varchar(255) unique not null,
	password text not null
);

create table items (
	id integer primary key,
	item_name varchar(255),
	description text,
	image text,
	price integer
);

create table cartitems (
	user_id integer REFERENCES users(id) ON DELETE CASCADE,
	item_id integer REFERENCES items(id) ON DELETE CASCADE,
	quantity integer
);
```

- Insert data into items table here image column contain the url of image.


## To Run the Project Locally

- Open the termial in client and server folder respictively.
- For client 
```bash
npm run dev
```

- For server
```bash
npm run dev
```

## API Reference

#### Get all items for landing page

```http
  GET /api/items/
```

#### To create new user

```http
  POST /api/signup
```

#### To login

```http
  POST /api/login/`
```

#### To delete item from cart

```http
  DELETE /api/cart/:`${itemId}`
```

#### To update quantity of items in users cart

```http
  PUT /api/cart/:`${itemId}`
```

 -Explore the project for more details
