contract;

abi ContractB {
    fn method();
}

abi ContractA {
    fn method(contract_b_id: ContractId);
}

impl ContractA for Contract {
    fn method(contract_b_id: ContractId) {
       let contract_b = abi(ContractB, contract_b_id.into());
       contract_b.method();
    }
}
