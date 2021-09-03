import { Module } from '@nestjs/common';
import { PostcodesController } from './postcodes.controller';

@Module({
  controllers: [PostcodesController],
})
export class PostcodesModule {}
