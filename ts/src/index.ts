import {Provider, Wallet} from "fuels";
import {ContractAAbi__factory} from './types';
import {contractA, contractB} from './types/contract-ids.json';

const config = {
    PROVIDER: '',
    PRIVATE_KEY: ''
}

const main = async () => {
    const provider = await Provider.create(config.PROVIDER);
    const wallet = Wallet.fromPrivateKey(config.PRIVATE_KEY, provider);

    const contractAAbi = ContractAAbi__factory.connect(contractA, wallet);
    const result = await contractAAbi.functions.method({
        value: contractB
    }).txParams({
        gasPrice: 1,
        gasLimit: 1_000_000,
    }).call();


    console.log({ result });
}

main();
