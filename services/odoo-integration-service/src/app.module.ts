import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ContactsModule } from './modules/contacts/contacts.module.js';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ContactsModule,
  ],
})
export class AppModule {}
