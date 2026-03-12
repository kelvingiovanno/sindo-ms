import {
    Body,
    Controller,
    HttpCode,
    HttpStatus,
    Post,
    Req,
    Res,
    UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import type { Request, Response } from 'express';
import { User } from 'generated/prisma/client';
import type { AuthRequest } from 'src/common/types';
import { LocalGuard, JwtGuard } from 'src/common/guards';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @UseGuards(JwtGuard)
    @Post('me')
    @HttpCode(HttpStatus.OK)
    async me(@Req() req: AuthRequest) {
        const payload = req.user;

        const newAccessToken = await this.authService.me(payload);

        return {
            accessToken: newAccessToken,
        };
    }

    @UseGuards(LocalGuard)
    @Post('signin')
    @HttpCode(HttpStatus.OK)
    async signin(
        @Req() req: Request,
        @Res({ passthrough: true }) res: Response,
    ) {
        const user = req.user;
        const action = await this.authService.login(user as User);

        res.cookie('refreshToken', action.refreshToken, {
            httpOnly: true,
            sameSite: 'lax',
            secure: true,
        });

        return {
            accessToken: action.accessToken,
            refreshToken: action.refreshToken,
            stores: action.stores,
        };
    }

    @UseGuards(JwtGuard)
    @Post('signout')
    @HttpCode(HttpStatus.OK)
    async signout(
        @Req() req: Request,
        @Res({ passthrough: true }) res: Response,
        @Body('refresh_token') refreshToken: string,
    ) {
        const cookies = req.cookies;

        for (const cookie in cookies) {
            res.clearCookie(cookie);
        }

        await this.authService.logout(refreshToken);
    }

    @Post('refresh')
    @HttpCode(HttpStatus.OK)
    async refresh(@Req() req: Request) {
        const refreshToken = req.cookies.refreshToken as string;

        console.log('refresh token', refreshToken);

        const accessToken = await this.authService.refresh(refreshToken);
        return {
            accessToken: accessToken,
        };
    }
}
