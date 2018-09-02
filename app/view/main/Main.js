Ext.define('PfPay.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    viewModel: 'main',
    controller: 'main',
    tabBarHeaderPosition: 1,
    header: {
        title: {
            bind: '{organizationName}',
            padding: '0 30 0 0',
            flex: 0
        }
    },
    tabBar: {
        flex: 1
    },
    items: [
        {title: 'Контракты', xtype: 'contractlist'},
        {title: 'Личные дела', xtype: 'personlist'},
        {title: 'Организации', xtype: 'organizationlist'},
        {title: 'Запросы', xtype: 'requestlist'}
    ],
    tools: [{
        type: 'close',
        tooltip: 'Выйти из приложения',
        handler: 'onLogout'
    }]
});
