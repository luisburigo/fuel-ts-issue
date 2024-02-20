contract;

enum ContractBError {
    AlreadyInitialized: (),
}

abi ContractB {
    #[storage(read)]
    fn method();
}

storage {
    initialized: bool = true,
}

impl ContractB for Contract {
    #[storage(read)]
    fn method() {
       let initalized = storage.initialized.try_read().unwrap_or(false);
       require(!initalized, ContractBError::AlreadyInitialized);
    }
}
