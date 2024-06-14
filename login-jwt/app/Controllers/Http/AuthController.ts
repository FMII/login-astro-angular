// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { HttpContext } from "@adonisjs/core/build/standalone"
import User from "App/Models/User";
//import LoginUserValidator from "App/Validators/LoginUserValidator";
import RegisterUserValidator from "App/Validators/RegisterUserValidator";

    export default class AuthController {

    public async register({request, response}: HttpContext) {
        let data = request.only(['name','lastname', 'email','password'])
        await request.validate(RegisterUserValidator)

        await User.create(data);
        return response.status(201).json({message: "User created successfully!"})
    }

    public async login({auth, response}) {
        const user = await User.find(1);
        const jwt = await auth.use("jwt").login(user);
        return response.ok(jwt);

    }
}
