import { BadRequestException, Body, Controller, Get, NotImplementedException, Param, Post } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './task.model';

@Controller()
export class TaskController {
    constructor(private readonly taskService: TaskService) {}
        
    @Post()
    async addTask(@Body('name') name: string, @Body('userId') userId: string, @Body('priority') priority: string) {
        if(userId == '' || name == '' || priority == '') throw new BadRequestException('All fields must be completed')

        let priority_number = parseInt(priority)
        if(isNaN(priority_number)) throw new BadRequestException('Priority is invalid')

        if(priority_number <= 0) throw new BadRequestException('Priority is invalid')

        return await this.taskService.addTask(name, userId, priority_number)
    }

    @Get()
    async getTaskByName(name: string): Promise<Task> {
        return await this.taskService.getTaskByName(name)
    }

    @Get('/user/:userId')
    async getUserTasks(@Param('userId') userId: string): Promise<Task[]> {        
        let userId_number = parseInt(userId)
        if(isNaN(userId_number)) throw new BadRequestException('UserId is invalid')
            
        if(userId_number <= 0) throw new BadRequestException('UserId is invalid')
    
        return await this.taskService.getUserTasks(userId)
    }

    // @Get
    // async resetData(): Promise<void> {
    //     throw new NotImplementedException();
    // }
}
