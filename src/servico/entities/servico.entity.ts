import { IsNotEmpty } from 'class-validator';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tb_servicos' })
export class Servico {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  @IsNotEmpty()
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
}
