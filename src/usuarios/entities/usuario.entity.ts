import { IsEmail, IsNotEmpty, MinLength } from "class-validator"
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({name: "tb_usuarios"})
export class Usuario {

    @PrimaryGeneratedColumn() 
    id: number

    @IsNotEmpty()
    @Column({length: 255, nullable: false}) 
    nome: string

    @IsEmail()
    @IsNotEmpty()
    @Column({ length: 255, nullable: false })
    usuario: string

    @MinLength(8)
    @IsNotEmpty()
    @Column({ length: 255, nullable: false }) 
    senha: string

    @Column({ length: 5000 }) 
    foto: string

    @Column('decimal', { precision: 10, scale: 2, nullable: false })
    peso: number;

    @Column('decimal', { precision: 10, scale: 2, nullable: false })
    altura: number

    @Column('decimal', { precision: 10, scale: 2, nullable: false })
    imc: number
    
    @Column({ length: 255 })
    classificacao: string
}