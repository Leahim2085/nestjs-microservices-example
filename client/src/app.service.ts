import { ClientProxy } from '@nestjs/microservices';
import { Inject, Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(@Inject('GREETER_SERVICE') private readonly client: ClientProxy) {}
  async onApplicationBootstrap() {
    await this.client.connect();
    Logger.log('Connected to a microservice');
  }

  async sendMessage(name: string) {
    return this.client.send('greeting', name);
  }
}
