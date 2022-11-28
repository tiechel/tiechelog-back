import { Repository } from 'typeorm';
import * as argon2 from 'argon2';
import * as jwt from 'jsonwebtoken';
import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SECRET } from '../config';
import { UserEntity } from './user.entity';
import { UserRO } from './user.interface';
import { LoginUserRequest } from './request/loginUser.request';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  private generateJWT(user: UserEntity): string {
    const today = new Date();
    const expire = new Date(today);
    expire.setDate(today.getDate() + 60);

    return jwt.sign(
      {
        id: user.id,
        username: user.username,
        email: user.email,
        exp: expire.getTime() / 1000,
      },
      SECRET,
    );
  }

  buildUserRO(user: UserEntity): UserRO {
    const userRO = {
      id: user.id,
      username: user.username,
      email: user.email,
      bio: user.bio,
      token: this.generateJWT(user),
      image: user.image,
    };
    return { user: userRO };
  }

  async findAll(): Promise<UserEntity[]> {
    return await this.userRepository.find();
  }

  async findOne({ email, password }: LoginUserRequest): Promise<UserEntity> {
    const user = await this.userRepository.findOne({ where: { email } });
    if (!user) {
      return null;
    }
    if (await argon2.verify(user.password, password)) {
      return user;
    }
    return null;
  }

  async create() {}

  async update() {}

  async delete() {}

  async findById(id: number): Promise<UserRO> {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      const errors = { User: ' not found' };
      throw new HttpException({ errors }, 401);
    }

    return this.buildUserRO(user);
  }

  async findByEmail(email: string): Promise<UserRO> {
    const user = await this.userRepository.findOne({ where: { email } });
    if (!user) {
      const errors = { User: ' not found' };
      throw new HttpException({ errors }, 401);
    }
    return this.buildUserRO(user);
  }
}
