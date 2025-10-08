import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Servico } from '../entities/servico.entity';
import { DeleteResult, ILike, Repository } from 'typeorm';
import { Categoria } from '../../categoria/entities/categoria.entity';

@Injectable()
export class ServicoService {
  constructor(
    @InjectRepository(Servico)
    private servicoRepository: Repository<Servico>,
    private categoriaRepository: Repository<Categoria>,
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

  // async mensalidadePorCategoria(id: number): Promise<number> {
  //   const CategoriaId = await this.categoriaRepository.findOne({
  //     where: {
  //       id,
  //     },
  //   });

  //   if (!CategoriaId)
  //     throw new HttpException('Serviço não encontrado!', HttpStatus.NOT_FOUND);

  // primeiro serviço, verificar se você tem categoriaID == monstro ou frango, se for monstro, valor_mensalidade === 120 : valor_menslaidade === 100
  // QUando eu fizer a lógica, que o valor_mensalidade será preenchido.

  //   CategoriaId === 1 ? mensalidade =

  // }

  // async descontoMensalidadePorFrequencia(id: number): Promise<number> {
  //   const servico = await this.servicoRepository.findOne({
  //     where: {
  //       id,
  //     },
  //     relations: {
  //       usuario: true,
  //       categoria: true,
  //     },
  //   });

  //   if (!servico)
  //     throw new HttpException('Serviço não encontrado!', HttpStatus.NOT_FOUND);

  // Checar o valor_mensalidade = 2% * {8%}(7 - frequencia) [Se a frequencia for 3, então eu tenho 4 dias de desconto]
  // Se ele for monstro, mensalidade fixa é de 120. Porém agora ele tem 8% de desconto pelos dias de NÃO FREQUENCIA.
  // mensalidade_final = 120 - 8% = 110,40

  //   // return mensalidade_final;
  // }
}
