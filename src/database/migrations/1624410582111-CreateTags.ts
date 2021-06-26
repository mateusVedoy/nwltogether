import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTags1624410582111 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(
            new Table({
                name: "tags",
                columns: [
                    {
                        name: "tag_id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "tag_name",
                        type: "varchar"
                    },
                    {
                        name: "tag_created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "tag_updated_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        queryRunner.dropTable("tags");
    }

}
