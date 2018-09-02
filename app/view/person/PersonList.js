Ext.define('PfPay.view.person.PersonList', {
    extend: 'Ext.grid.Panel',
    xtype: 'personlist',
    viewModel: 'personlist',
    controller: 'personlist',
    title: 'Личные дела',
    tbar: [
        '->',
        {text: 'Обновить', iconCls: 'pictos pictos-refresh', handler: 'onPersonListRefresh'}
    ],
    bind: '{personList}',
    viewConfig: {
        emptyText: 'Ни одного личного дела не найдено'
    },
    columns: [{
        text: 'СНИЛС',
        dataIndex: 'snils',
        align: 'left',
        flex: 1
    }, {
        text: 'Фамилия',
        dataIndex: 'lastName',
        align: 'left',
        flex: 1
    }, {
        text: 'Имя',
        dataIndex: 'firstName',
        align: 'left',
        flex: 1
    }, {
        text: 'Отчество',
        dataIndex: 'secondName',
        align: 'left',
        flex: 1
    }]
});