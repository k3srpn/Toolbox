import {
  GetObjectCommand,
  GetObjectCommandInput,
  S3Client,
} from '@aws-sdk/client-s3';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class S3Service extends S3Client {
  constructor(private readonly configService: ConfigService) {
    super({
      region: configService.get('aws.s3.region'),
    });
  }

  async getObject(input: GetObjectCommandInput) {
    const command = new GetObjectCommand(input);
    return await this.send(command);
  }
}
