import { Controller, Request,Response,Get, Post, UseGuards, HttpCode } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { LocalAuthGuard } from './local-auth.guard';

@Controller()
export class AuthController {
    constructor(private authService: AuthService) {}

    @UseGuards(LocalAuthGuard)
    @Post('/auth/login')
    @HttpCode(200)
    async login(@Request() req) {
      return this.authService.login(req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Get('/profile')
    getProfile(@Request() req) {
      return req.user;
    }

}
