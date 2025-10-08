import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Categoria } from 'src/categoria/entities/categoria.entity';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tb_servicos' })
export class Servico {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  @IsNotEmpty()
  @ApiProperty()
  valor_mensalidade: number;

  @Column({ nullable: false })
  @IsNotEmpty()
  @ApiProperty()
  frequencia: number;

  @Column()
  @IsNotEmpty()
  @ApiProperty()
  dt_matricula: Date;

  @Column({ length: 250 })
  @ApiProperty()
  modalidade: string;

  @ApiProperty({ type: () => Usuario })
  @ManyToOne(() => Usuario, (usuario) => usuario.servicos, {
    onDelete: 'CASCADE',
  })
  usuario: Usuario;

  @ApiProperty({ type: () => Categoria })
  @ManyToOne(() => Categoria, (categoria) => categoria.servico, {
    onDelete: 'CASCADE',
  })
  categoria: Categoria;
}
