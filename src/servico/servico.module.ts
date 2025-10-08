import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Servico } from './entities/servico.entity';
import { ServicoService } from './services/servico.service';
import { ServicoController } from './controllers/servico.controller';
import { CategoriaModule } from '../categoria/categoria.module';

@Module({
  imports: [TypeOrmModule.forFeature([Servico]), CategoriaModule],
  providers: [ServicoService],
  controllers: [ServicoController],
  exports: [],
})
export class ServicoModule {}
