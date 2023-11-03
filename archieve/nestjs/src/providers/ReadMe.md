# Providers

## 개요

> 외부 라이브러리 및 API들을 모아놓은 디렉토리입니다.

## 모듈

### Quagga

> 바코드 스캔을 위한 모듈입니다.

- _public_ decode (buffer: Buffer)
  - Image Buffer를 파라미터로 받아 바코드 스캔 결과를 반환합니다. 스캔 결과가 없을시 `null`을 반환합니다.
  - CODE_128 형식의 바코드만 스캔이 가능합니다.
- _private_ getMimeType (signature: string)
  - 파일 시그니처를 인자로 받아 mime type을 반환합니다. 없을 시 `null`을 반환합니다.
  - 현재 png와 jpeg만 호환됩니다.

### S3

> AWS S3와 연동을 위한 모듈입니다.

- _public_ getObject(input: GetObjectCommandInput)
  - 버킷명과 파일 이름을 기준으로 S3안의 객체를 가져옵니다.

### SQS

> AWS Simple Queue Service와 연동을 위한 모듈입니다.

- _public_ enqueue(input: SendMessageCommandInput)
  - QueueUrl과 Body 값을 받아 큐에 적재합니다.
