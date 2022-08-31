import { Injectable } from '@nestjs/common';
import { CreateReporteDto } from './dto/create-reporte.dto';
import { UpdateReporteDto } from './dto/update-reporte.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Reporte} from "./entities/reporte.entity";
import {UsuariosService} from "../usuarios/usuarios.service";
import {Usuarios} from "../usuarios/entities/usuario.entity";
import {UpdateUsuarioDto} from "../usuarios/dto/update-usuario.dto";

@Injectable()
export class ReportesService {

  constructor(
      @InjectRepository(Reporte)
      private readonly reporteRepository: Repository<Reporte>
  ) {}

  async create(createReporteDto: CreateReporteDto) {

    createReporteDto.fecha=new Date()

     const usuario= new Usuarios()
    usuario.idUsuario=createReporteDto.idUsuario


    const reporte = new Reporte()
    reporte.usuario=usuario
    reporte.fecha=createReporteDto.fecha
    reporte.categorias=createReporteDto.categorias
    reporte.fotografia=createReporteDto.fotografia
    reporte.descripcion=createReporteDto.descripcion

    return await this.reporteRepository.insert(reporte);
  }


  async findAll() {

    return await this.reporteRepository.find({
      order: {
        fecha: "DESC",
      },
    });
  }

  async findOne(id: number) {

    return await this.reporteRepository.findOneBy({idReporte: id});

  }

  async update(id: number, updateRepoteDto: UpdateReporteDto) {
    return await this.reporteRepository.update({idReporte: id},updateRepoteDto);
  }

  async remove(id: number) {
    return await  this.reporteRepository.delete({idReporte: id});
  }
}
