import {
  SQSClient,
  SendMessageCommand,
  SendMessageCommandInput,
} from '@aws-sdk/client-sqs';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SqsService extends SQSClient {
  constructor(private configService: ConfigService) {
    super({ region: configService.get<string>('aws.sqs.region') });
  }

  public async enqueue(input: SendMessageCommandInput) {
    const command = new SendMessageCommand(input);
    await this.send(command);
    return;
  }
}
