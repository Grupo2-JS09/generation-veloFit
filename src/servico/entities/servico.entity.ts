import { IsNotEmpty } from 'class-validator';
import { Categoria } from '../../categoria/entities/categoria.entity';
import { Usuario } from '../../usuario/entities/usuario.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tb_servicos' })
export class Servico {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  valor_mensalidade: number;

  @Column({ nullable: false })
  @IsNotEmpty()
  frequencia: number;

  @Column()
  @IsNotEmpty()
  dt_matricula: Date;

  @Column({ length: 250 })
  modalidade: string;

  @ManyToOne(() => Usuario, (usuario) => usuario.servicos, {
    onDelete: 'CASCADE',
  })
  usuario: Usuario;

  @ManyToOne(() => Categoria, (categoria) => categoria.servico, {
    onDelete: 'CASCADE',
  })
  categoria: Categoria;
}
