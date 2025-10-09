import { IsNotEmpty } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
<<<<<<< HEAD
import { Servico } from '../../servico/entities/servico.entity';
=======
import { ApiProperty } from '@nestjs/swagger';
>>>>>>> 6259bf3e2cd205245b8a5f198b4fdcb76fe270a4

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
