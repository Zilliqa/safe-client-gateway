import { Module } from '@nestjs/common';
import { AuthGuard } from '@/routes/auth/guards/auth.guard';
import { AuthRepositoryModule } from '@/domain/auth/auth.repository.interface';
import { NotificationsServiceV2 } from '@/routes/notifications/v2/notifications.service';
import { NotificationsControllerV2 } from '@/routes/notifications/v2/notifications.controller';
<<<<<<< HEAD
import { NotificationsRepositoryV2Module } from '@/domain/notifications/v2/notifications.repository.interface';
=======
import { NotificationsRepositoryV2Module } from '@/domain/notifications/v2/notifications.repository.module';
>>>>>>> origin/staging

@Module({
  imports: [NotificationsRepositoryV2Module, AuthRepositoryModule],
  controllers: [NotificationsControllerV2],
  providers: [NotificationsServiceV2, AuthGuard],
<<<<<<< HEAD
=======
  // Export the controller to enable compatibility with V1.
  exports: [NotificationsServiceV2],
>>>>>>> origin/staging
})
export class NotificationsModuleV2 {}
