import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Usuarios} from "../../usuarios/entities/usuario.entity";

@Entity("reporte")
export class Reporte {
    @PrimaryGeneratedColumn()
    idReporte: number;

    @Column()
    fecha: Date;

    @Column()
    descripcion: string;

    @Column()
    fotografia: string;

    @Column("simple-array")
    categorias: string[]

    @ManyToOne(() => Usuarios, (user) => user.idUsuario)
    usuario: Usuarios

}
