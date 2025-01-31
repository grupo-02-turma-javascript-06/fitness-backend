import { Transform, TransformFnParams } from 'class-transformer';
import { IsNotEmpty, IsPositive, Length } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Categoria } from '../../categoria/entities/categoria.entity';

@Entity({ name: 'tb_exercicio' })
export class Exercicio {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Transform(({ value }: TransformFnParams) => {
    if (typeof value === 'string') {
      return value.trim();
    }
    return '';
  })
  @Column({ length: 100, nullable: false })
  nome: string;

  @IsNotEmpty()
  @Length(5, 255)
  @Transform(({ value }: TransformFnParams) => {
    if (typeof value === 'string') {
      return value.trim();
    }
    return '';
  })
  @Column({ length: 255, nullable: false })
  descricao: string;


  @IsNotEmpty()
  @Transform(({ value }: TransformFnParams) => {
    if (typeof value === 'number') {
      return value;
    }
    return 0;
  })
  @Column({ type: 'decimal', precision: 6, scale: 2, nullable: true })
  carga: number;

  @Column({ type: 'int', default: 0 })
  repeticao: number;

  @Column({ length: 10 })
  tempo: string;

  @ManyToOne(() => Categoria, (categoria) => categoria.exercicio, {
    onDelete: 'CASCADE',
  })
  categoria: Categoria;
}
