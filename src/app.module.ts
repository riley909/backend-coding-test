import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostcodesModule } from './postcodes/postcodes.module';

@Module({
  imports: [PostcodesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
