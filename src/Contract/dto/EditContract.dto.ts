import { ApiProperty } from "@nestjs/swagger";
import { Length, Max, MaxLength, Min, MinLength } from "class-validator";


export class EditContractDto{


    @ApiProperty({type: String})
    readonly content_contract: string;

}