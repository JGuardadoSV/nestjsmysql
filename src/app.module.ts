import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ReportesModule } from './reportes/reportes.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Usuarios } from "./usuarios/entities/usuario.entity";
import {Reporte} from "./reportes/entities/reporte.entity";

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'AdminHost$16',
    database: 'syso',
    entities: [Usuarios,Reporte],
    autoLoadEntities:true,
    synchronize: true,
  }),UsuariosModule, ReportesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
