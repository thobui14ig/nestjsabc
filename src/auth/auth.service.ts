import { LoginUserInput } from './dto/login-user-input';
import { UsersService } from './../users/users.service';
import { Injectable } from '@nestjs/common';
import { resourceLimits } from 'worker_threads';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private userService: UsersService, private jwtService: JwtService){

    }




    async login(dto: LoginUserInput){
        const user = await this.userService.findOne(dto.email,dto.password );
        if(user){
            return {
                access_token: await this.SinUser(user.id, user.email, 'user')
            }
        } 
        else return false;
    }




    //TẠO TOKEN
    SinUser(userId: number, email: string, type: string){
        return this.jwtService.sign({
            sub: userId, 
            email, 
            type: type
        })
    }

}
