import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { Categoria } from '../../categoria/entities/categoria.entity';
import { Exercicio } from '../../exercicio/entities/exercicio.entity';
import { Usuario } from '../../usuarios/entities/usuario.entity';
import { Aluno } from '../../aluno/entities/aluno.entity';

@Injectable()
export class DevService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: process.env.MYSQL_PORT_INTERNAL
        ? parseInt(process.env.MYSQL_PORT_INTERNAL)
        : 3306,
      username: process.env.DB_USERNAME || 'root',
      password: process.env.DB_PASSWORD || 'root',
      database: process.env.DB_NAME || 'db_fitness',
      entities: [Categoria, Usuario, Exercicio, Aluno],
      synchronize: true,
    };
  }
}
