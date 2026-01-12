import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { z } from 'zod';
import { HexSchema } from '@/validation/entities/schemas/hex.schema';
import { AddressSchema } from '@/validation/entities/schemas/address.schema';
import { NumericStringSchema } from '@/validation/entities/schemas/numeric-string.schema';

export const TransactionDataDtoSchema = z.object({
  data: HexSchema,
  to: AddressSchema,
});

export class TransactionDataDto
  implements z.infer<typeof TransactionDataDtoSchema>
{
  @ApiProperty({ description: 'Hexadecimal value' })
  data: `0x${string}`;
  @ApiProperty({ description: 'The target Ethereum address' })
  to: `0x${string}`;

  constructor(data: `0x${string}`, to: `0x${string}`) {
    this.data = data;
    this.to = to;
  }
}
