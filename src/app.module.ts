import { Module } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { UserModule } from './user/user.module';
import { UserEntity } from './user/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'app.db.sqlite3',
      synchronize: true,
      logging: true,
      // entities: ['dist/**/*.entity.js'],
      entities: [UserEntity],
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {
  // constructor(private readonly dataSource: DataSource) {}
  constructor() {}
}
