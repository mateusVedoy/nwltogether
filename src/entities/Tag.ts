import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("tags")
class Tag {

    @PrimaryColumn({ name: "tag_id" })
    readonly id: string;

    @Column({ name: "tag_name" })
    name: string;

    @CreateDateColumn({ name: "tag_created_at" })
    created_at: Date;

    @UpdateDateColumn({ name: "tag_updated_at" })
    updated_at: Date;

    constructor(){
        if(!this.id)
            this.id = uuid();
    }
};

export { Tag };
