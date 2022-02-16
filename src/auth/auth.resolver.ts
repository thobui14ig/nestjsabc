
import { LoginUserInput } from './dto/login-user-input';
import { LoginResponse } from './dto/login-response';
import { AuthService } from './auth.service';
import { Mutation, Resolver, Args } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport'

@Resolver()
export class AuthResolver {
    constructor(private authService: AuthService){
        
    }

    @Mutation(() => LoginResponse)
    async login(@Args('loginUserInput') loginUserInput: LoginUserInput){
        console.log(await this.authService.login(loginUserInput))
        return this.authService.login(loginUserInput);
    }

}
