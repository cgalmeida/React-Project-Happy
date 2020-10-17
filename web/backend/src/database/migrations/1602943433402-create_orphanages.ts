import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createOrphanages1602943433402 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'orphanages',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'name',
                    type: 'varchar',
                },
                {
                    name: 'latitude',
                    type: 'decimalr',
                    precision: 10,
                    scale: 2,
                },
                {
                    name: 'longitude',
                    type: 'decimalr',
                    precision: 10,
                    scale: 2,
                },
                {
                    name: 'about',
                    type: 'varchar',
                },
                {
                    name: 'instructions',
                    type: 'text',
                },
                {
                    name: 'open_on_weekends',
                    type: 'boolean',
                    default: false,
                },
                {
                    name: 'opening_hours',
                    type: 'text',
                },
            ],

        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('orphanages');
    }

}
