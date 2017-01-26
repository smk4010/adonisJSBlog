'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

// Routes for NAV pages
Route.get('/', 'PostsController.index')

Route.get('/login', 'AuthController.index')
Route.post('/login', 'AuthController.login')

Route.get('/register', 'RegisterController.index')
Route.post('/register', 'RegisterController.doRegister')

Route.get('posts/create', 'PostsController.create')
Route.post('posts', 'PostsController.store')
Route.get('posts/:id', 'PostsController.show')
Route.get('/delete/:id', 'PostsController.delete');
Route.get('/edit/:id', 'PostsController.edit');
Route.post('/update', 'PostsController.update');

Route.on('about').render('about')
Route.on('contact').render('contact')
