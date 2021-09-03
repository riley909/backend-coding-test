import { Controller } from '@nestjs/common';
import { PostcodesService } from './postcodes.service';

@Controller('postcodes')
export class PostcodesController {
  constructor(private postcodesService: PostcodesService) {}
}
