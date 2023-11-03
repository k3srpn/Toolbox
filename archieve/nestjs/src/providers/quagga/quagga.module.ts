import { Module } from '@nestjs/common';
import { QuaggaService } from './quagga.service';

@Module({
  providers: [QuaggaService],
  exports: [QuaggaService],
})
export class QuaggaModule {}
