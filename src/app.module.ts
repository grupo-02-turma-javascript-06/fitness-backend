import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaModule } from './categoria/categoria.module';
import { Categoria } from './categoria/entities/categoria.entity';
import { Usuario } from './usuarios/entities/usuario.entity';
import { UsuarioModule } from './usuarios/usuarios.module';
import { Exercicio } from './exercicio/entities/exercicio.entity';
import { ExercicioModule } from './exercicio/exercicio.module';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { ProdService } from './data/services/prod.service';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useClass: ProdService,
      imports: [ConfigModule],
    }),
    CategoriaModule,
    UsuarioModule,
    ExercicioModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
