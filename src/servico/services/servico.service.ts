import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Servico } from '../entities/servico.entity';
import { DeleteResult, ILike, Repository } from 'typeorm';

@Injectable()
export class ServicoService {
  constructor(
    @InjectRepository(Servico)
    private servicoRepository: Repository<Servico>,
  ) {}

  async findAll(): Promise<Servico[]> {
    return await this.servicoRepository.find({
      relations: {
        usuario: true,
        categoria: true,
      },
    });
  }

  async findById(id: number): Promise<Servico> {
    const servico = await this.servicoRepository.findOne({
      where: {
        id,
      },

      relations: {
        usuario: true,
        categoria: true,
      },
    });

    if (!servico)
      throw new HttpException('serviço não encontrado', HttpStatus.NOT_FOUND);

    return servico;
  }

  async findAllByModalidade(modalidade: string): Promise<Servico[]> {
    return await this.servicoRepository.find({
      where: {
        modalidade: ILike(`%${modalidade}`),
      },
      relations: {
        usuario: true,
        categoria: true,
      },
    });
  }

  async create(servico: Servico): Promise<Servico> {
    const categoria = servico.categoria.id;

    if (categoria === 1) {
      servico.valor_mensalidade = 100;
    } else {
      servico.valor_mensalidade = 120;
    }

    return await this.servicoRepository.save(servico);
  }

  async update(servico: Servico): Promise<Servico> {
    await this.findById(servico.id);
    return await this.servicoRepository.save(servico);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findById(id);
    return await this.servicoRepository.delete(id);
  }

  async descontoMensalidadePorFrequencia(id: number): Promise<number> {
    const servico = await this.findById(id);
    const diasDesconto = 7 - servico.frequencia;

    const taxaDesconto =
      servico.valor_mensalidade -
      servico.valor_mensalidade * (diasDesconto * 0.02);

    return taxaDesconto;
  }
}
