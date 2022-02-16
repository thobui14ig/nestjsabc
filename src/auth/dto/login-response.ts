import { Users } from 'src/entity/user.entity';
import { Field, ObjectType } from '@nestjs/graphql';
@ObjectType()

export class LoginResponse{
    @Field()
    access_token: string


}