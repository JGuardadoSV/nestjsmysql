import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Reporte} from "../../reportes/entities/reporte.entity";

@Entity("usuarios")
export class Usuarios {
    @PrimaryGeneratedColumn()
    idUsuario: number;

    @Column()
    email: string;

    @Column()
    clave: string;

    @Column()
    nombre: string;



}
