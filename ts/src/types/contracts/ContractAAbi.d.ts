/* Autogenerated file. Do not edit manually. */

/* tslint:disable */
/* eslint-disable */

/*
  Fuels version: 0.74.0
  Forc version: 0.50.0
  Fuel-Core version: 0.22.1
*/

import type {
  BytesLike,
  Contract,
  DecodedValue,
  FunctionFragment,
  Interface,
  InvokeFunction,
} from 'fuels';

export type ContractIdInput = { value: string };
export type ContractIdOutput = ContractIdInput;

interface ContractAAbiInterface extends Interface {
  functions: {
    method: FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'method', values: [ContractIdInput]): Uint8Array;

  decodeFunctionData(functionFragment: 'method', data: BytesLike): DecodedValue;
}

export class ContractAAbi extends Contract {
  interface: ContractAAbiInterface;
  functions: {
    method: InvokeFunction<[contract_b_id: ContractIdInput], void>;
  };
}