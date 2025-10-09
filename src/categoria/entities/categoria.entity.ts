import { IsNotEmpty } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Servico } from '../../servico/entities/servico.entity';

@Entity({ name: 'tb_categorias' })
export class Categoria {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @IsNotEmpty()
  @Column({ length: 45, nullable: false })
  @ApiProperty()
  nome_categoria: string;

  @ApiProperty()
  @OneToMany(() => Servico, (servico) => servico.categoria)
  servico: Servico[];
}
