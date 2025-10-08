import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Bcrypt } from '../bcrypt/bcrypt';
import { UsuarioLogin } from '../entities/usuariologin.entity';
import { UsuarioService } from '../../usuario/services/usuario.service';

@Injectable()
export class AuthService {
  constructor(
    private usuarioService: UsuarioService,
    private bcrypt: Bcrypt,
    private jwtService: JwtService,
  ) {}

  async validateUser(usuario: string, senha: string): Promise<any> {
    const buscaUsuario = await this.usuarioService.findByUsuario(usuario);

    if (!buscaUsuario)
      throw new HttpException('Usuário não encontrado!', HttpStatus.NOT_FOUND);

    const validaSenha = await this.bcrypt.compararSenhas(
      senha,
      buscaUsuario.senha,
    );

    if (buscaUsuario && validaSenha) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { senha, ...resposta } = buscaUsuario;
      return resposta;
    }

    return null;
  }

  async login(usuarioLogin: UsuarioLogin) {
    const payload = { sub: usuarioLogin.usuario };
    const buscaUsuario = await this.usuarioService.findByUsuario(
      usuarioLogin.usuario,
    );

    if (!buscaUsuario)
      throw new HttpException('Usuário não encontrado!', HttpStatus.NOT_FOUND);

    return {
      id: buscaUsuario.id,
      nome: buscaUsuario.nome,
      usuario: buscaUsuario.usuario,
      senha: '',
      foto: buscaUsuario.foto,
      token: `Bearer ${this.jwtService.sign(payload)}`,
    };
  }
}
