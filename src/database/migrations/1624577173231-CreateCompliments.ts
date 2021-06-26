import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCompliments1624497290214 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(
            new Table({
                name: "compliments",
                columns: [
                    {
                        name: "com_id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "com_user_sender",
                        type: "uuid",                    
                    },
                    {
                        name: "com_user_receiver",
                        type: "uuid",    
                    },
                    {
                        name: "tag_id",
                        type: "uuid"
                    },
                    {
                        name: "com_message",
                        type: "varchar"
                    },
                    {
                        name: "com_created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKUserSenderCompliments",
                        referencedTableName: "users",
                        referencedColumnNames: ["usr_id"],
                        columnNames: ["com_user_sender"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    },
                    {
                        name: "FKUserReceiverCompliments",
                        referencedTableName: "users",
                        referencedColumnNames: ["usr_id"],
                        columnNames: ["com_user_receiver"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    },
                    {
                        name: "FKTagCompliments",
                        referencedTableName: "tags",
                        referencedColumnNames: ["tag_id"],
                        columnNames: ["tag_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropTable("compliments");
    }

}
