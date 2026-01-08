import type { INestApplication } from '@nestjs/common';
<<<<<<< HEAD
import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import { AppModule } from '@/app.module';
import configuration from '@/config/entities/__tests__/configuration';
=======
>>>>>>> origin/staging
import { TestAppProvider } from '@/__tests__/test-app.provider';
import request from 'supertest';
<<<<<<< HEAD
import { TestQueuesApiModule } from '@/datasources/queues/__tests__/test.queues-api.module';
import { QueuesApiModule } from '@/datasources/queues/queues-api.module';
import type { Server } from 'net';
=======
import type { Server } from 'net';
import { createTestModule } from '@/__tests__/testing-module';
>>>>>>> origin/staging

describe('Root Controller tests', () => {
  let app: INestApplication<Server>;

  beforeEach(async () => {
    const moduleFixture = await createTestModule();

    app = await new TestAppProvider().provide(moduleFixture);
    await app.init();
  });

  it('should redirect / to /api', async () => {
    await request(app.getHttpServer())
      .get(`/`)
      .expect(302)
      .expect((res) => {
        expect(res.get('location')).toBe('/api');
      });
  });
});
