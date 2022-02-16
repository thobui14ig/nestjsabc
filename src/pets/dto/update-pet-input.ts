import { Field, InputType } from "@nestjs/graphql";
import { Int } from "type-graphql";

@InputType()
export class UpdatePetInput{

    @Field()
    name: string;

    @Field({nullable: true})
    type?: string
    
    @Field(type => Int)
    ownerId: number
}