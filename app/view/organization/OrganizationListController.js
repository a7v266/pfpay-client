Ext.define('PfPay.view.organization.OrganizationListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.organizationlist',
    onOrganizationListRefresh: function (source) {
        this.getView().getStore('organizationList').load();
    }

});