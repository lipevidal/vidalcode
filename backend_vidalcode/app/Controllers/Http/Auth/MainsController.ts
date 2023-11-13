import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { EntrarValidator } from 'App/Validators/Auth'

export default class MainsController {
  public async store({ request, auth }: HttpContextContract) {
    const { email, password } = await request.validate(EntrarValidator)

    const token = await auth.attempt(email, password, {
      expiresIn: '30 days'
    })

    return token
  }

  public async destroy({ auth }: HttpContextContract) {
    await auth.logout()
  }
}
