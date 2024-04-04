import { Logger, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { applicationConfig } from './core/config/app.config';
import { MongooseModule } from '@nestjs/mongoose';
import { SomeResourceModule } from './some-resource/some-resource.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    cache: true,
    load: [applicationConfig],
  }),
  MongooseModule.forRootAsync({
    imports: [ConfigModule],
    useFactory: async (configService: ConfigService) => {
      const { mongodb } = configService.get('application');
      return mongodb;
    },
    inject: [ConfigService],
  }),
  SomeResourceModule
  ],
  providers: [Logger],
})
export class AppModule { }
