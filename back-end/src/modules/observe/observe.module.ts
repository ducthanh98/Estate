import { Module } from '@nestjs/common';
import { ObserveController } from './observe.controller';
import { ObserveService } from './observe.service';

@Module({
  controllers: [ObserveController],
  providers: [ObserveService],
})
export class ObserveModule {}
