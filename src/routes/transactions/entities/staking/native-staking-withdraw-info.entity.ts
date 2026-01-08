import { TokenInfo } from '@/routes/transactions/entities/swaps/token-info.entity';
import {
  TransactionInfo,
  TransactionInfoType,
} from '@/routes/transactions/entities/transaction-info.entity';
import { ApiProperty } from '@nestjs/swagger';

export class NativeStakingWithdrawTransactionInfo extends TransactionInfo {
  @ApiProperty({ enum: [TransactionInfoType.NativeStakingWithdraw] })
  override type = TransactionInfoType.NativeStakingWithdraw;

  @ApiProperty()
  value: string;

  @ApiProperty()
  tokenInfo: TokenInfo;

  @ApiProperty()
  validators: Array<`0x${string}`>;

  constructor(args: {
    value: string;
    tokenInfo: TokenInfo;
    validators: Array<`0x${string}`>;
  }) {
<<<<<<< HEAD
    super(TransactionInfoType.NativeStakingWithdraw, null, null);
=======
    super(TransactionInfoType.NativeStakingWithdraw, null);
>>>>>>> origin/staging
    this.value = args.value;
    this.tokenInfo = args.tokenInfo;
    this.validators = args.validators;
  }
}
