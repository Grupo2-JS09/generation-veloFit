import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { CategoriaModule } from './categoria/categoria.module';
import { Categoria } from './categoria/entities/categoria.entity';
import { Servico } from './servico/entities/servico.entity';
import { ServicoModule } from './servico/servico.module';
import { Usuario } from './usuario/entities/usuario.entity';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_veloFit',
      entities: [Usuario, Servico, Categoria],
      synchronize: true,
      logging: true,
    }),
    UsuarioModule,
    ServicoModule,
    CategoriaModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
