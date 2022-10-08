import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { UserDTO } from './dtos/user.dt';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {}

    async create({ email, name, password }: UserDTO) {
        try {
            const book = await this.prisma.user.create({
                data: {
                    email,
                    name,
                    password,
                },
            });
            return { status: 'create', has_error: false };
        } catch (error) {
            return { status: error, has_error: true };
        }
    }

    async findAll() {
        return this.prisma.user.findMany();
    }
}
