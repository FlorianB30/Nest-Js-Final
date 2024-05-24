import { ConflictException, Injectable } from '@nestjs/common';
import { User } from './user.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    successResponse: any;
    constructor(
        @InjectRepository(User)
        private userModel: Repository<User>,
    ) {}

    async addUser(email: string): Promise<void> {
        const user = new User();
        user.email = email;
        
        await this.userModel.save(user);
    }

    async getUser(email: string): Promise<User> {
        return this.userModel.findOne({
            where: {
                email,
            },
        });
    }

    async resetData(): Promise<void> {
        await this.userModel.clear();
    }
}
