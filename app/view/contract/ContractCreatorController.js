Ext.define('PfPay.view.contract.ContractCreatorController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.contractcreator',

    onCreateContract: function (event) {
        console.debug('on create contract click');
        var form = this.lookupReference('form');
        if (form.isValid()) {
            var contractCreator = this.getViewModel().get('contractCreator');
            contractCreator.save({
                scope: this,
                failure: function (record, operation) {
                },
                success: function (record, operation) {
                    this.fireViewEvent('createContract');
                },
                callback: function (record, operation, success) {
                }
            })
        }
    },

    onClose: function (event) {
        this.getView().destroy();
    }
});