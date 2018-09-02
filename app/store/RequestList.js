Ext.define('PfPay.store.RequestList', {
    extend: 'Ext.data.Store',
    model: 'PfPay.model.Request',
    alias: 'store.requestlist',
    pageSize: 20,
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: '/api/request',
        startParam: 'offset',
        limitParam: 'limit',
        reader: {
            rootProperty: 'items',
            totalProperty: 'totalCount'
        }
    }
});