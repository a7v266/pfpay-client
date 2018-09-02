Ext.define('PfPay.view.login.LoginController', {

    extend: 'Ext.app.ViewController',

    alias: 'controller.login',

    onSpecialKey: function (field, event) {
        if (event.getKey() === event.ENTER) {
            this.doLogin();
        }
    },

    onLoginClick: function () {
        this.doLogin();
    },

    doLogin: function () {
        var form = this.lookup('form');
        if (form.isValid()) {
            var values = form.getValues();
            PfPay.service.LoginManager.login(values.username, values.password)
                .then(() => {
                    this.fireViewEvent('login', this.getView());
                });
        }
    }
});