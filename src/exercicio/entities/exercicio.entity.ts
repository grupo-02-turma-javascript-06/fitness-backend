import { Transform, TransformFnParams } from 'class-transformer';
import { IsNotEmpty, IsPositive, Length } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Categoria } from '../../categoria/entities/categoria.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'tb_exercicio' })
export class Exercicio {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @IsNotEmpty()
  @Transform(({ value }: TransformFnParams) => {
    if (typeof value === 'string') {
      return value.trim();
    }
    return '';
  })
  @Column({ length: 100, nullable: false })
  @ApiProperty()
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
  @ApiProperty()
  descricao: string;

  @IsNotEmpty()
  @Transform(({ value }: TransformFnParams) => {
    if (typeof value === 'number') {
      return value;
    }
    return 0;
  })
  @Column({ type: 'decimal', precision: 6, scale: 2, nullable: true })
  @ApiProperty()
  carga: number;

  @Column({ type: 'int', default: 0 })
  @ApiProperty()
  repeticao: number;

  @Column({ length: 10 })
  @ApiProperty()
  tempo: string;

  @ApiProperty({ type: () => Categoria })
  @ManyToOne(() => Categoria, (categoria) => categoria.exercicio, {
    onDelete: 'CASCADE',
  })
  categoria: Categoria;
}
