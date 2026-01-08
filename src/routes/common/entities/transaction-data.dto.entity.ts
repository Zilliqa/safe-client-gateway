import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { z } from 'zod';
import { HexSchema } from '@/validation/entities/schemas/hex.schema';
import { AddressSchema } from '@/validation/entities/schemas/address.schema';
import { NumericStringSchema } from '@/validation/entities/schemas/numeric-string.schema';

export const TransactionDataDtoSchema = z.object({
  data: HexSchema,
<<<<<<< HEAD
  to: AddressSchema.optional(),
  value: NumericStringSchema.optional(),
=======
  to: AddressSchema,
>>>>>>> origin/staging
});

export class TransactionDataDto
  implements z.infer<typeof TransactionDataDtoSchema>
{
  @ApiProperty({ description: 'Hexadecimal value' })
  data: `0x${string}`;
  @ApiPropertyOptional({ description: 'The target Ethereum address' })
<<<<<<< HEAD
  to?: `0x${string}`;
  @ApiPropertyOptional({
    description: 'The wei amount being sent to a payable function',
  })
  value?: string;
=======
  to: `0x${string}`;
>>>>>>> origin/staging

  constructor(data: `0x${string}`, to?: `0x${string}`, value?: string) {
    this.data = data;
    this.to = to;
    this.value = value;
  }
}
