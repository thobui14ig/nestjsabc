import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class CreateInputUser{


    @Field()
    name: string;
    @Field()
    email: string;

    @Field()
    password: string
}