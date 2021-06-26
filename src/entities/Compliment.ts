import { Entity, PrimaryColumn, Column, CreateDateColumn, JoinColumn, ManyToOne } from "typeorm";
import { v4 as uuid } from "uuid";
import { Tag } from "./Tag";
import { User } from "./User";

@Entity("compliments")
class Compliment {

    @PrimaryColumn({ name: "com_id" })
    readonly id: string;

    @Column({ name: "com_user_sender" })
    user_sender: string;

    @JoinColumn({ name: "com_user_sender" })
    @ManyToOne(() => User)
    userSender: User;

    @Column({ name: "com_user_receiver" })
    user_receiver: string;

    @JoinColumn({ name: "com_user_receiver" })
    @ManyToOne(() => User)
    userReceiver: User;

    @Column({ name: "tag_id" })
    tag_id: string;

    @JoinColumn({ name: "tag_id" })
    @ManyToOne(() => Tag)               //indica que cada Tag pode ter diversos Compliment
    tag: Tag;

    @Column({ name: "com_message" })
    message: string;

    @CreateDateColumn({ name: "com_created_at" })
    created_at: Date;

    constructor() {

        if (!this.id)
            this.id = uuid();
    };
};

export { Compliment };