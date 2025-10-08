import { IsEmail, isEmail, IsNotEmpty, Length } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
//import { Servico } from "src/services/entities/servico.entity";


@Entity({ name: "tb_usuarios" })
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 245, nullable: false })
  nome: string;

  @Column({ length: 4000, nullable: true })
  foto: string;

  @IsNotEmpty()
  @IsEmail()
  @Column({ length: 245, nullable: false, unique: true })
  usuario: string;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  senha: string;

 // @OneToMany(() => Servico, (servico) => servico.usuario)
 // servicos: Servico[];
}
