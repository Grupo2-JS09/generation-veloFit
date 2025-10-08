import { ServicoService } from './../services/servico.service';
import { Servico } from '../entities/servico.entity';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/guard/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('/servicos')
export class ServicoController {
  constructor(private readonly servicoService: ServicoService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Servico[]> {
    return this.servicoService.findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Servico> {
    return this.servicoService.findById(id);
  }

  @Get('/modalidade/:modalidade')
  @HttpCode(HttpStatus.OK)
  findAllByModalidade(
    @Param('modalidade') modalidade: string,
  ): Promise<Servico[]> {
    return this.servicoService.findAllByModalidade(modalidade);
  }

  @Get('/calculo_mensalidade/:id')
  @HttpCode(HttpStatus.OK)
  CalcularMensalidade(@Param('id', ParseIntPipe) id: number): Promise<number> {
    return this.servicoService.descontoMensalidadePorFrequencia(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() servico: Servico): Promise<Servico> {
    return this.servicoService.create(servico);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() servico: Servico): Promise<Servico> {
    return this.servicoService.update(servico);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.servicoService.delete(id);
  }
}
