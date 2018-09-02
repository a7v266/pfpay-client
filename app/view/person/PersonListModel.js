Ext.define('PfPay.view.person.PersonListModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.personlist',
    stores: {
        personList: {
            model: 'PfPay.model.Person',
            autoLoad: true,
        }
    }
});