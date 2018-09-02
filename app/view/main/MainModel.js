Ext.define('PfPay.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.main',
    formulas: {
        organizationName: function (get) {
            return PfPay.service.LoginManager.getOrganizationName();
        }
    }
});