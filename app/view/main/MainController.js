Ext.define('PfPay.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',
    onLogout: function () {
        PfPay.service.LoginManager.logout().then(() => {
            this.fireViewEvent('logout', this.getView());
        });
    }
});
