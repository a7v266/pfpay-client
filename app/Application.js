Ext.define('PfPay.Application', {
    extend: 'Ext.app.Application',
    name: 'PfPay',
    requires: [
        'Ext.window.Toast'
    ],

    launch: function () {
        Ext.Ajax.on('beforerequest', function (connection, options) {
            let profile = PfPay.service.LoginManager.getProfile();
            if (profile) {
                options.headers = options.headers || {};
                options.headers['X-Auth-Token'] = profile.token;
            }
        });

        Ext.Ajax.on('requestcomplete', function (connection, response, options) {
            if (Ext.isObject(options)) {
                if (options.method === 'POST') {
                    Ext.toast({
                        title: 'Успех',
                        html: 'Запрос успешно выполнен',
                        align: 'br',
                        bodyPadding: 10
                    });
                }
            }
        });

        Ext.Ajax.on('requestexception', function (connection, response, options) {
            let title = 'Ошибка';
            let html = 'Возникла какая-то ошибка';
            if (Ext.isObject(response)) {
                switch (response.status) {
                    case 0:
                        html = 'Отсутствует соединение с сервером';
                        break;
                    default:
                        var errorCollector = Ext.decode(response.responseText);
                        if (Ext.isObject(errorCollector)) {
                            if (Ext.isString(errorCollector.title)) {
                                title = errorCollector.title;
                            }
                            if (Ext.isArray(errorCollector.errors)) {
                                html = errorCollector.errors.join('<br>')
                            }
                        }
                }
            }
            Ext.toast({
                title: title,
                html: html,
                align: 'br',
                bodyPadding: 10,
                width: 300
            });
        });

        // TODO Разобраться с сессиями
        /*
        this.session = new Ext.data.Session({
            autoDestroy: false
        });
        */

        if(Ext.fly('initialLoader')){
            Ext.fly('initialLoader').destroy();
        }

        this.viewLogin();
    },

    onLogin: function (view) {
        view.destroy();
        this.viewApplication();
    },

    onLogout: function (view) {
        view.destroy();
        this.viewLogin();
    },

    viewLogin: function () {
        Ext.create({
            xtype: 'login',
            autoShow: true,
            listeners: {
                scope: this,
                login: 'onLogin'
            }
        });
    },

    viewApplication: function () {
        this.setMainView({
            xtype: 'main',
            listeners: {
                scope: this,
                logout: 'onLogout'
            }
        });
    }
});
