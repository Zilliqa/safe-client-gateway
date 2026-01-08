import { Module } from '@nestjs/common';
import { NotificationsController } from '@/routes/notifications/v1/notifications.controller';
<<<<<<< HEAD
import { NotificationsService } from '@/routes/notifications/v1/notifications.service';
import { NotificationsRepositoryModule } from '@/domain/notifications/v1/notifications.repository.interface';

@Module({
  imports: [NotificationsRepositoryModule],
  controllers: [NotificationsController],
  providers: [NotificationsService],
=======
import { NotificationsModuleV2 } from '@/routes/notifications/v2/notifications.module';

@Module({
  imports: [NotificationsModuleV2],
  controllers: [NotificationsController],
>>>>>>> origin/staging
})
export class NotificationsModule {}
