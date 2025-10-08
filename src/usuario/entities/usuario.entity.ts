import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { Servico } from './../../servico/entities/servico.entity';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'tb_usuarios' })
export class Usuario {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @IsNotEmpty()
  @Column({ length: 245, nullable: false })
  @ApiProperty()
  nome: string;

  @Column({ length: 4000, nullable: true })
  @ApiProperty()
  foto: string;

  @IsNotEmpty()
  @IsEmail()
  @Column({ length: 245, nullable: false, unique: true })
  @ApiProperty({ example: 'email@email.com.br' })
  usuario: string;

  @MinLength(8)
  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  @ApiProperty()
  senha: string;

  @ApiProperty()
  @OneToMany(() => Servico, (servico) => servico.usuario)
  servicos: Servico[];
}
