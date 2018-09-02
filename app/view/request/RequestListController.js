Ext.define('PfPay.view.request.RequestListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.requestlist',
    onRequestListRefresh: function(source) {
        this.getView().getStore('requestList').load();
    },
    onToggleExpanded: function(source) {
    }
});