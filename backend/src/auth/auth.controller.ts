import { Body, Controller, Post,Get ,Request, UseGuards } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/dto/user.dto';
import { UserService } from 'src/user/UserService';
import { LoginDto } from './dto/auth.dto';
import { AuthService } from './auth.service';
import { RefreshJwtGuard } from './guards/refresh.guard';
import { FortyTwoIntranetStrategy } from './42-intranet.strategy';

@Controller('auth')
export class AuthController {
  constructor(
    private userService: UserService,
    private authService: AuthService,
  ) {}

  @Post('register')
  async registerUser(@Body() dto: CreateUserDto) {
    return await this.userService.create(dto);
  }

  @Post('login')
  async login(@Body() dto: LoginDto) {
    return await this.authService.login(dto);
  }

  @UseGuards(RefreshJwtGuard)
  @Post('refresh')
  async refreshToken(@Request() req) {
    console.log('refreshed');

    return await this.authService.refreshToken(req.user);
  }

  @Get('42-intranet')
  @UseGuards(FortyTwoIntranetStrategy)
  fortyTwoIntranetLogin() {
    // The 42 Intranet strategy will handle the redirection to the 42 Intranet for OAuth authentication.
  }
  @Get('42-intranet/callback')
  @UseGuards(FortyTwoIntranetStrategy)
  fortyTwoIntranetLoginCallback(@Req() req) {
    // This route will be used as the callback URL by the 42 Intranet after authentication.
    // Handle the callback, create or find the user, and issue a JWT.
    return this.fortyTwoIntranetStrategy.authenticate()(req);
  }
}



//prisma
//dto
// jwt
// guardes
// pipes