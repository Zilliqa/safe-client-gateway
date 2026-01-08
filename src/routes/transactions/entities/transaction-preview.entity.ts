import { ApiProperty } from '@nestjs/swagger';
import { BaseTransaction } from '@/routes/transactions/entities/base-transaction.entity';
import { TransactionData } from '@/routes/transactions/entities/transaction-data.entity';
import { TransactionInfo } from '@/routes/transactions/entities/transaction-info.entity';
<<<<<<< HEAD
import { TransferTransactionInfo } from '@/routes/transactions/entities/transfer-transaction-info.entity';
import { SwapOrderTransactionInfo } from '@/routes/transactions/entities/swaps/swap-order-info.entity';
import { TwapOrderTransactionInfo } from '@/routes/transactions/entities/swaps/twap-order-info.entity';
import { NativeStakingDepositTransactionInfo } from '@/routes/transactions/entities/staking/native-staking-deposit-info.entity';
import { NativeStakingWithdrawTransactionInfo } from '@/routes/transactions/entities/staking/native-staking-withdraw-info.entity';
import { NativeStakingValidatorsExitTransactionInfo } from '@/routes/transactions/entities/staking/native-staking-validators-exit-info.entity';

@ApiExtraModels(
  CreationTransactionInfo,
  CustomTransactionInfo,
  SettingsChangeTransaction,
  TransferTransactionInfo,
  SwapOrderTransactionInfo,
  TwapOrderTransactionInfo,
  NativeStakingDepositTransactionInfo,
  NativeStakingValidatorsExitTransactionInfo,
  NativeStakingWithdrawTransactionInfo,
)
export class TransactionPreview {
  @ApiProperty({
    oneOf: [
      { $ref: getSchemaPath(CreationTransactionInfo) },
      { $ref: getSchemaPath(CustomTransactionInfo) },
      { $ref: getSchemaPath(SettingsChangeTransaction) },
      { $ref: getSchemaPath(TransferTransactionInfo) },
      { $ref: getSchemaPath(SwapOrderTransactionInfo) },
      { $ref: getSchemaPath(TwapOrderTransactionInfo) },
      { $ref: getSchemaPath(NativeStakingDepositTransactionInfo) },
      { $ref: getSchemaPath(NativeStakingValidatorsExitTransactionInfo) },
      { $ref: getSchemaPath(NativeStakingWithdrawTransactionInfo) },
    ],
  })
  txInfo: TransactionInfo;
=======

export class TransactionPreview extends BaseTransaction {
>>>>>>> origin/staging
  @ApiProperty()
  txData: TransactionData;

  constructor(txInfo: TransactionInfo, txData: TransactionData) {
    super(txInfo);
    this.txData = txData;
  }
}
