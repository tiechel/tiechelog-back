import { Controller, Get, HttpException, Post, UsePipes } from '@nestjs/common';
import { LoginUserRequest } from './request/loginUser.request';
import { UserRO, UserData } from './user.interface';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('user')
  async find(email: string): Promise<UserRO> {
    return this.userService.findByEmail(email);
  }

  @Post('users/login')
  async login(loginUserRequest: LoginUserRequest): Promise<UserRO> {
    const foundUser = await this.userService.findOne(loginUserRequest);

    const errors = { User: ' not found' };
    if (!foundUser) throw new HttpException({ errors }, 401);

    return this.userService.buildUserRO(foundUser);
  }
}
