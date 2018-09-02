Ext.define('PfPay.view.contract.ContractListModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.contractlist',
    stores: {
        contractList: {
            model: 'PfPay.model.Contract',
            autoLoad: true,
        }
    }
});