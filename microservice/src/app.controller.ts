import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  @MessagePattern('greeting')
  handleHelloMesage(name: string) {
    return `Hello, ${name}`;
  }
}
