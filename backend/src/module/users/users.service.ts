import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schema/user.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private readonly userModel: Model<User>) {}
    private saltRounds = 10;

    async hashPassword(password: string): Promise<string> {
        return await bcrypt.hash(password, this.saltRounds);
      }
    
      async comparePassword(password: string, hash: string): Promise<boolean> {
        return await bcrypt.compare(password, hash);
      }

    async findAll(): Promise<User[]> {
        return this.userModel.find().exec();
    }

    async findOne(id: string): Promise<User> {
        const user = await this.userModel.findById(id).exec();
        if (!user) {
            throw new NotFoundException(`User #${id} not found`);
        }
        return user;
    }

    async create(user: User): Promise<User> {
user.password = await this.hashPassword(user.password);
        const createdUser = new this.userModel(user);
        return createdUser.save();
    }

    async update(id: string, user: User): Promise<User> {
if (user.password) {
            user.password = await this.hashPassword(user.password);
        }
        const existingUser = await this.userModel.findByIdAndUpdate(id, user, { new: true }).exec();
        if (!existingUser) {
            throw new NotFoundException(`User #${id} not found`);
        } 
        return existingUser;
    }

    async remove(id: string): Promise<User> {
        const deletedUser = await this.userModel.findByIdAndDelete(id).exec();   
        if (!deletedUser) {
            throw new NotFoundException(`User #${id} not found`);
        }
        return deletedUser;
    }
}
