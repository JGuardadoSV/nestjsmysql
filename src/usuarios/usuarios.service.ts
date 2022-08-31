import {Injectable} from '@nestjs/common';
import {CreateUsuarioDto} from './dto/create-usuario.dto';
import {UpdateUsuarioDto} from './dto/update-usuario.dto';
import {Usuarios} from "./entities/usuario.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";

@Injectable()
export class UsuariosService {

  constructor(
      @InjectRepository(Usuarios)
      private readonly usuarioRepository: Repository<Usuarios>,
  ) {}


  async create(createUsuarioDto: CreateUsuarioDto) {
    return await this.usuarioRepository.insert(createUsuarioDto);
  }

  async findAll() {

    return await this.usuarioRepository.find();
  }

  async findOne(id: number) {

    return await this.usuarioRepository.findOneBy({idUsuario: id});

  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return await this.usuarioRepository.update({idUsuario: id},updateUsuarioDto);
  }

  async remove(id: number) {
    return await  this.usuarioRepository.delete({idUsuario: id});
  }
}
