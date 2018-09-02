Ext.define('PfPay.view.person.PersonListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.personlist',
    onPersonListRefresh: function (source) {
        this.getView().getStore('requestList').load();
    }
});