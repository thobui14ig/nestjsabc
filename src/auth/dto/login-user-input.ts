import { Users } from 'src/entity/user.entity';
import { Field, InputType } from '@nestjs/graphql';
@InputType()

export class LoginUserInput{
    @Field()
    email: string

    @Field()
    password: string
}