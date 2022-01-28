
import { ApiProperty } from "@nestjs/swagger";




export class UserDto{
    @ApiProperty({type: String, description: "email"})
    email: string;

    @ApiProperty({type: String, description: "password",default:""})
    password: string


}
