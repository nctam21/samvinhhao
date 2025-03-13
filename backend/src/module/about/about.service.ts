import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { About } from './schema/about.schema';

@Injectable()
export class AboutService {
    constructor(@InjectModel(About.name) private readonly aboutModel: Model<About>) {}
    
    async findAll(): Promise<About[]> {
            return this.aboutModel.find().exec();
        }

    async findOne(id: string): Promise<About> {
            const about = await this.aboutModel.findById(id).exec();
            if (!about) {
                throw new NotFoundException(`About #${id} not found`);
            }
            return about;
        }   

    async create(about: About): Promise<About> {
            const createdAbout = new this.aboutModel(about);
            return createdAbout.save();
        }

    async update(id: string, about: About): Promise<About> {
            const existingAbout = await this.aboutModel.findByIdAndUpdate(id, about).exec();
            if (!existingAbout) {
                throw new NotFoundException(`About #${id} not found`);
            }
            return existingAbout;
    }

    async remove(id: string): Promise<About> {
        const deletedAbout = await this.aboutModel.findByIdAndDelete(id).exec();
        if (!deletedAbout) {
            throw new NotFoundException(`About #${id} not found`);
        }
        return deletedAbout;
    }
}

