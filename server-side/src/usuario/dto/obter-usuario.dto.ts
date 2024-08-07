import { IsInt, IsOptional} from 'class-validator';
import {CustomApiProperty, Generate} from "@decorators-custom";
import faker from "@faker-custom";

export class ObterUsuarioDTO {

    @CustomApiProperty({
        description: 'ID do usuário',
        required: false,
    })
    @Generate(() => faker.number.int({min: 1, max: 100}))
    @IsOptional()
    @IsInt()
    usuario_id : number;''

}