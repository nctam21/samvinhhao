import { Controller } from '@nestjs/common';
import { AboutService } from './about.service';
import { About } from './schema/about.schema';
import { Get, Post, Patch, Delete, Param, Body } from '@nestjs/common'; 

@Controller('about')
export class AboutController {
    constructor(private readonly aboutService : AboutService ) {}
    @Get()
    findAll() {
        return this.aboutService.findAll();
    }
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.aboutService.findOne(id);
    }
    @Post()
    create(@Body() about: About) {
        return this.aboutService.create(about);
    }
    @Patch(':id')
    update(@Param('id') id: string, @Body() about: About) {
        return this.aboutService.update(id, about);
    }
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.aboutService.remove(id);
    }
}
