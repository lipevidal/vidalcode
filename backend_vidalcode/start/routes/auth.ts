import Route from '@ioc:Adonis/Core/Route'

Route.post('/auth', 'Auth/MainsController.store')
Route.delete('/auth', 'Auth/MainsController.destroy')
