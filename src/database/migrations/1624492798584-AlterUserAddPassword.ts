import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AlterUserAddPassword1624492798584 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.addColumn(
            "users",
            new TableColumn({
                name: "usr_password",
                type: "varchar",
                default: "123456"
            })
        )
    };

    public async down(queryRunner: QueryRunner): Promise<void> {

        //dropColumn("tabela", "novaColuna")
        await queryRunner.dropColumn("users", "password");
    }

}

/*
 * É precido passar um default pois ao add uma coluna nova, é preciso atualizar os registros existentes com algum valor ou então permitir que o campo seja nulo 
 */
