import { faker } from '@faker-js/faker';
import { DeviceType } from '@/domain/notifications/v1/entities/device.entity';
import type { IBuilder } from '@/__tests__/builder';
import { Builder } from '@/__tests__/builder';
import type { RegisterDeviceDto } from '@/routes/notifications/v1/entities/register-device.dto.entity';
import { safeRegistrationBuilder } from '@/routes/notifications/v1/entities/__tests__/safe-registration.builder';
<<<<<<< HEAD

export function registerDeviceDtoBuilder(): IBuilder<RegisterDeviceDto> {
  return new Builder<RegisterDeviceDto>()
    .with('uuid', faker.string.uuid())
    .with('cloudMessagingToken', faker.string.uuid())
=======
import type { UUID } from 'crypto';

export async function registerDeviceDtoBuilder(args: {
  uuid: UUID;
  cloudMessagingToken: UUID;
  timestamp: number;
}): Promise<IBuilder<RegisterDeviceDto>> {
  const signaturePrefix = 'gnosis-safe';
  const safeRegistrations = await safeRegistrationBuilder({
    signaturePrefix,
    ...args,
  });

  return new Builder<RegisterDeviceDto>()
    .with('uuid', args.uuid)
    .with('cloudMessagingToken', args.cloudMessagingToken)
>>>>>>> origin/staging
    .with('buildNumber', faker.string.numeric())
    .with('bundle', faker.internet.domainName())
    .with('deviceType', faker.helpers.objectValue(DeviceType))
    .with('version', faker.system.semver())
<<<<<<< HEAD
    .with('timestamp', faker.date.recent().getTime().toString())
    .with(
      'safeRegistrations',
      faker.helpers.multiple(() => safeRegistrationBuilder().build(), {
=======
    .with('timestamp', args.timestamp.toString())
    .with(
      'safeRegistrations',
      faker.helpers.multiple(() => safeRegistrations.build(), {
>>>>>>> origin/staging
        count: { min: 0, max: 10 },
      }),
    );
}
