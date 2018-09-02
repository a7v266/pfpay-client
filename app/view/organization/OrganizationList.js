Ext.define('PfPay.view.organization.OrganizationList', {
    extend: 'Ext.grid.Panel',
    xtype: 'organizationlist',
    viewModel: 'organizationlist',
    controller: 'organizationlist',
    title: 'Организации',
    tbar: [
        '->',
        {text: 'Обновить', iconCls: 'pictos pictos-refresh', handler: 'onOrganizationListRefresh'}
    ],
    bind: '{organizationList}',
    viewConfig: {
        emptyText: 'Ни одной организации не найдено'
    },
    columns: [
        {
            text: 'Наименование',
            dataIndex: 'organizationName',
            align: 'left',
            flex: 1
        },
        {
            text: 'ОГРН',
            dataIndex: 'ogrn',
            align: 'left',
            flex: 1
        },
        {
            text: 'Хост',
            dataIndex: 'host',
            align: 'left',
            flex: 1

        },
        {
            text: 'Порт',
            dataIndex: 'port',
            align: 'left',
            flex: 1
        }]
});