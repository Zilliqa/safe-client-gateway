import { DataDecodedParameter } from '@/routes/data-decode/entities/data-decoded.entity';

export enum DecodedType {
  CowSwapOrder = 'COW_SWAP_ORDER',
  CowSwapTwapOrder = 'COW_SWAP_TWAP_ORDER',
  KilnNativeStakingDeposit = 'KILN_NATIVE_STAKING_DEPOSIT',
  KilnNativeStakingValidatorsExit = 'KILN_NATIVE_STAKING_VALIDATORS_EXIT',
  KilnNativeStakingWithdraw = 'KILN_NATIVE_STAKING_WITHDRAW',
}

export interface Baseline {
  method: string;
  parameters: DataDecodedParameter[] | null;
}

