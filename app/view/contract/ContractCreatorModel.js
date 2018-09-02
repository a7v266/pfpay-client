Ext.define('PfPay.view.contract.ContractCreatorModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.contractcreator',
    stores: {
        contractCreator: {
            model: 'PfPay.model.ContractCreator'
        }
    }
});