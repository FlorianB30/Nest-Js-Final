import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../user/user.model';
import { UserModule } from '../../user/user.module';
import { TaskModule } from '../../task/task.module';
import { Task } from '../../task/task.model';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: process.env.DATABASE_HOST,
            port: parseInt(process.env.DATABASE_PORT),
            username: process.env.DATABASE_USER,
            password: process.env.DATABASE_PASSWORD,
            database: process.env.DATABASE_NAME,
            entities: [User, Task],
            synchronize: true,
        }),
        UserModule,
        TaskModule
    ]
})
export class DatabaseModule { }
