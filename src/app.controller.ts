import { Controller, Request,Response,Get, Post, UseGuards, HttpCode } from '@nestjs/common';
import { AppService } from './app.service';

// import { AuthService } from './auth/auth.service';
// import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Controller()
export class AppController {
  // @AutoWired
  constructor(
    private readonly appService: AppService, 
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  
  // @UseGuards(JwtAuthGuard)
  // @Get('profile')
  // getProfile(@Request() req) {
  //   return req.user;
  // }

}
