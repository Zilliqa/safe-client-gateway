import { Backbone as DomainBackbone } from '@/domain/backbone/entities/backbone.entity';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class Backbone implements DomainBackbone {
  @ApiProperty()
  api_version!: string;
  @ApiPropertyOptional({ type: String, nullable: true })
<<<<<<< HEAD
  headers!: string[] | null;
=======
  headers!: Array<string> | null;
>>>>>>> origin/staging
  @ApiProperty()
  host!: string;
  @ApiProperty()
  name!: string;
  @ApiProperty()
  secure!: boolean;
  @ApiProperty({ type: Object, nullable: true })
  settings!: Record<string, unknown> | null;
  @ApiProperty()
  version!: string;
}
