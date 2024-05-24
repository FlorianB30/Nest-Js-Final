import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Task')
export class Task {
    @PrimaryGeneratedColumn()
    userId: string;

    @Column()
    name: string;

    @Column()
    priority: number;
}
