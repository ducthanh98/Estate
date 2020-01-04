import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SharedModule } from './shared/shared.module';
import { ModulesModule } from './modules/modules.module';
import { MulterModule } from '@nestjs/platform-express';
import { AdminModule } from './modules/admin/admin.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    SharedModule,
    ModulesModule,
    AdminModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
