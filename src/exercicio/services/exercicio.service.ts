import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ILike, Repository } from "typeorm";
import { Exercicio } from "../entities/exercicio.entity";


@Injectable()
export class ExercicioService {
  constructor(
    @InjectRepository(Exercicio)
    private exercicioRepository: Repository<Exercicio>,
  ) {}

  async findAll(): Promise<Exercicio[]> {
    return await this.exercicioRepository.find({
    });
  }

  async findById(id: number): Promise<Exercicio> {
    let exercicio = await this.exercicioRepository.findOne({
      where: { id },
    });

    if (!exercicio) {
      throw new HttpException('Exercicio não encontrado', HttpStatus.NOT_FOUND);
    }

    return exercicio;
  }

  async findByNome(nome: string): Promise<Exercicio[]> {
    return await this.exercicioRepository.find({
      where: {
        nome: ILike(`%${nome}%`),
      },
    });
  }

  async create(exercicio: Exercicio): Promise<Exercicio> {
    return await this.exercicioRepository.save(exercicio);
  }

  async update(exercio: Exercicio): Promise<Exercicio> {

    let exercicioExistente = await this.findById(exercio.id);

    if (!exercicioExistente) {
      throw new HttpException('Exercicio não encontrado', HttpStatus.NOT_FOUND);
    }

    return await this.exercicioRepository.save(exercio);
  }

  async delete(id: number): Promise<void> {
    let exercicioExistente = await this.findById(id);

    if (!exercicioExistente) {
      throw new HttpException('Exercicio não encontrado', HttpStatus.NOT_FOUND);
    }

    await this.exercicioRepository.delete(id);
  }
}
