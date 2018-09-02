Ext.define('PfPay.service.LoginManager', {
    singleton: true,

    isLoggedIn: function () {
        return Ext.isObject(this.profile);
    },

    getOrganizationName: function () {
        var profile = this.getProfile();
        if (profile) {
            return profile['organizationName'];
        }
    },

    getProfile: function () {
        return Ext.decode(localStorage.getItem('profile'));
    },

    saveProfile: function (profile) {
        localStorage.setItem('profile', profile);
    },

    removeProfile: function () {
        localStorage.removeItem('profile');
    },

    login: function (username, password) {
        var deferred = new Ext.Deferred();
        Ext.Ajax.request({
            url: '/api/login',
            method: 'POST',
            jsonData: {
                'username': username,
                'password': password
            },
            success: function (response) {
                PfPay.service.LoginManager.saveProfile(response.responseText);
                deferred.resolve(response, response);
            },
            failure: function (response) {
                PfPay.service.LoginManager.removeProfile();
                deferred.reject(response, response);
            }
        });
        return deferred.promise;
    },

    logout: function () {
        var deferred = new Ext.Deferred();
        Ext.Ajax.request({
            url: '/api/logout',
            method: 'POST',
            success: function (response) {
                PfPay.service.LoginManager.removeProfile();
                deferred.resolve(response, response);
            },
            failure: function (response) {
                deferred.reject(response, response);
            }
        });
        return deferred.promise;
    }
});