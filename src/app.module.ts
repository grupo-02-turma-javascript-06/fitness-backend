import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './usuarios/entities/usuario.entity';
import { UsuarioModule } from './usuarios/usuarios.module';
import { Exercicio } from './exercicio/entities/exercicio.entity';
import { ExercicioModule } from './exercicio/exercicio.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 3306,
      username: process.env.DB_USERNAME || 'root',
      password: process.env.DB_PASSWORD || 'root',
      database: process.env.DB_NAME || 'db_fitness',
      entities: [Usuario, Exercicio],
      synchronize: true,
    }),
    UsuarioModule, ExercicioModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
