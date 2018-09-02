Ext.define('PfPay.view.organization.OrganizationListModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.organizationlist',
    stores: {
        organizationList: {
            model: 'PfPay.model.Organization',
            autoLoad: true,
        }
    }
});