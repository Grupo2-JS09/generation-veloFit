import { IsNotEmpty } from 'class-validator';
import { Servico } from './../../servico/entities/servico.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tb_categorias' })
export class Categoria {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 45, nullable: false })
  nome_categoria: string;

  @OneToMany(() => Servico, (servico) => servico.categoria)
  servico: Servico[];
}
