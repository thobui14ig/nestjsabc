import { Pet } from 'src/entity/pet.entity';
import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class CreatePetInput extends Pet{

    @Field()
    name: string;

    @Field({nullable: true})
    type?: string

    @Field(type => Int)
    ownerId: number
}