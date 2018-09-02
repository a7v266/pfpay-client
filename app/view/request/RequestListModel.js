Ext.define('PfPay.view.request.RequestListModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.requestlist',
    stores: {
        requestList: {
            type: 'requestlist',
            autoLoad: true
        }
    }
});