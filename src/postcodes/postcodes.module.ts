import { Module } from '@nestjs/common';
import { PostcodesController } from './postcodes.controller';
import { PostcodesService } from './postcodes.service';

@Module({
  controllers: [PostcodesController],
  providers: [PostcodesService],
})
export class PostcodesModule {}
