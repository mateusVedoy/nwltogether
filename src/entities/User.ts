import { Entity, PrimaryColumn, CreateDateColumn, UpdateDateColumn, Column } from "typeorm";
import { v4 as uuid } from "uuid";
import { Exclude } from "class-transformer";

@Entity("users")
class User {

    @PrimaryColumn()
    readonly usr_id: string;

    @Column()
    usr_name: string;

    @Column()
    usr_email: string;

    @Exclude()                  //permitira n retornar a senha qnd combinado com classToPlain
    @Column()
    usr_password: string;

    @Column()
    usr_admin: boolean;

    @CreateDateColumn()
    usr_created_at: Date;

    @UpdateDateColumn()
    usr_updated_at: Date;

    constructor(){

        if(!this.usr_id)
            this.usr_id = uuid();
    }
};

export { User };
