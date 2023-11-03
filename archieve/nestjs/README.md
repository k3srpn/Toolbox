# Nest.js Archive

## 개요

이 프로젝트는 Serverless 기반의 환경에서 Nest.js 프로젝트를 구축하는 가정하에 설정된 프로젝트입니다.

## 주의사항

- nest-cli.json의 Entry File은 main.ts가 아니며 빌드 후 생성되는 webpack output 파일 중 하나여야 합니다. (bootstrap 시키는 핸들러가 있다면 우선적으로 선언)

## Base Setting

- HMR (Hot Module Replacement)
- Webpack Build
- Transfile to ES2021 (Nest.js v10.x or Higher)

## handlers

- AWS Lambda 기반의 이벤트 핸들러를 모아놓았습니다.
- 자세한 내용은 handlers 디렉토리 밑의 ReadMe를 참고하세요.

## providers

- 3rd Party 기능들을 모아놓았습니다.
- 자세한 내용은 providers 디렉토리 밑의 ReadMe를 참고하세요.
