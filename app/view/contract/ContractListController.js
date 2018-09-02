Ext.define('PfPay.view.contract.ContractListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.contractlist',
    onShowContractCreator: function (source) {
        var window = Ext.create({
            xtype: 'contractcreator',
            viewModel: {
                data: {
                    contractCreator: Ext.create('PfPay.model.ContractCreator')
                }
            },
            listeners: {
                scope: this,
                createContract: 'onCreateContract'
            }
        });
        window.show();
    },

    onRefreshContractList: function (source) {
        this.getViewModel().getStore('contractList').load();
    },

    onCreateContract: function (source) {
        source.destroy();
        this.getViewModel().getStore('contractList').load();
    }
});