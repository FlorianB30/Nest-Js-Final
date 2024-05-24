import { BadRequestException, Injectable, NotImplementedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.model';
import { Repository } from 'typeorm';

@Injectable()
export class TaskService {
    constructor(
        @InjectRepository(Task)
        private taskModel: Repository<Task>,
    ) {}

    async addTask(name: string, userId: string, priority: number): Promise<void> {
        const task = new Task();
        task.name = name
        task.userId = userId
        task.priority = priority
        
        await this.taskModel.save(task)
    }

    async getTaskByName(name: string): Promise<Task> {
        return this.taskModel.findOne({
            where: {
                name,
            },
        });
    }

    async getUserTasks(userId: string): Promise<Task[]> {
        return this.taskModel.find({
            where: {
                userId,
            },
        });
    }

    async resetData(): Promise<void> {
        await this.taskModel.clear();
    }
}
