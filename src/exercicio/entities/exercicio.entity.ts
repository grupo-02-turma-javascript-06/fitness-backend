import { IsNotEmpty, IsPositive, Length } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: "tb_exercicio"})
export class Exercicio {
    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @Column({ length: 100, nullable: false })
    nome: string;

    @IsNotEmpty()
    @Length(5, 255) // Valida se o tamanho da string é entre 5 e 255
    @Column({ length: 255, nullable: false }) // Descrição detalhada
    descricao: string;

    @IsPositive() // Valida se o valor é maior que 0
    @IsNotEmpty()
    @Column({ type: "decimal", precision: 6, scale: 2, nullable: false }) // Preço do produto
    carga: number;

    @Column({type: 'int', default: 0})
    repeticao: number;

    @Column({ length: 10})
    tempo: string;
}