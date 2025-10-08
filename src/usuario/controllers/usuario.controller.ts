import { Controller, Get, HttpCode , Post, Body, Put} from '@nestjs/common';
import { UsuarioService } from '../services/usuario.service'; 
import { Usuario } from '../entities/usuario.entity';
import { HttpException, HttpStatus, Param, ParseIntPipe
 } from '@nestjs/common';

@Controller('usuarios')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Get()
  async findAll(): Promise<Usuario[]> {
    return await this.usuarioService.findAll();
  }
  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Usuario> {

    return this.usuarioService.findById(id);
  }
  @Post()
@HttpCode(HttpStatus.CREATED) 
create(@Body() usuario: Usuario): Promise<Usuario> {

  return this.usuarioService.create(usuario);
}
@Put()
@HttpCode(HttpStatus.OK) 
update(@Body() usuario: Usuario): Promise<Usuario> {

  return this.usuarioService.update(usuario);
}
@Get('/nome/:nome') 
@HttpCode(HttpStatus.OK)
findAllByNome(@Param('nome') nome: string): Promise<Usuario[]> {

  return this.usuarioService.findAllByNome(nome);
}

}
