import { JwtStrategy } from './strategy/jwt.strategy';

import { UsersModule } from './../users/users.module';
import { Users } from 'src/entity/user.entity';
import { PassportModule } from '@nestjs/passport';
import { Module, forwardRef } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    PassportModule, UsersModule,
    JwtModule.register({
      secret: "reset",
    }),
  ],
  providers: [AuthService, AuthResolver, JwtStrategy]
})
export class AuthModule {}
