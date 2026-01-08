<<<<<<< HEAD
import { ApiPropertyOptional } from '@nestjs/swagger';
=======
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
>>>>>>> origin/staging
import {
  Transfer,
  TransferType,
} from '@/routes/transactions/entities/transfers/transfer.entity';

export class NativeCoinTransfer extends Transfer {
<<<<<<< HEAD
=======
  @ApiProperty({ enum: [TransferType.NativeCoin] })
  override type = TransferType.NativeCoin;
>>>>>>> origin/staging
  @ApiPropertyOptional({ type: String, nullable: true })
  value: string | null;

  constructor(value: string | null) {
    super(TransferType.NativeCoin);
    this.value = value;
  }
}
