import { Module } from '@nestjs/common';
import { QuaggaModule } from './providers/quagga/quagga.module';
import { S3Module } from './providers/s3/s3.module';
import { SqsModule } from './providers/sqs/sqs.module';

@Module({
  imports: [QuaggaModule, S3Module, SqsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
