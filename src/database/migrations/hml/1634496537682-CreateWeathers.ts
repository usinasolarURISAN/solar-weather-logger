import { MigrationInterface, QueryRunner, Table } from 'typeorm';

const currentEnv = process.env.NODE_ENV || 'hml';
const weatherTableName = `${currentEnv}-weather`;

export class CreateWeathers1634496537682 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: weatherTableName,
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'weather_id',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'weather_main',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'weather_description',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'weather_icon',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'main_temp',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'main_tempMin',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'main_tempMax',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'main_pressure',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'main_humidity',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'visibility',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'wind_speed',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'wind_deg',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'clouds_all',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'api_code',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'api_message',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'timestamp',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'timestamp_minute',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'timestamp_hour',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'timestamp_date',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'timestamp_month',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'timestamp_year',
            type: 'numeric',
            isNullable: true,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(weatherTableName);
  }
}
