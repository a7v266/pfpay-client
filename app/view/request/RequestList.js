Ext.define('PfPay.view.request.RequestList', {
    extend: 'Ext.grid.Panel',
    xtype: 'requestlist',
    viewModel: 'requestlist',
    controller: 'requestlist',
    store: {
        type: 'requestlist'
    },
    viewConfig: {
        emptyText: 'Ни одного запроса не найдено',
        trackOver: false
    },
    loadMask: 'Загрузка',
    tbar: [
        '->',
        {text: 'Обновить', iconCls: 'pictos pictos-refresh', handler: 'onRequestListRefresh'}
    ],
    columns: [{
        text: 'Идентификатор',
        dataIndex: 'id',
        align: 'left',
        flex: 1
    }, {
        text: 'Направление',
        dataIndex: 'requestDirection',
        align: 'left',
        flex: 1
    }, {
        text: 'Тип запроса',
        dataIndex: 'requestType',
        align: 'left',
        flex: 1
    }, {
        text: 'Статус запроса',
        dataIndex: 'requestStatus',
        align: 'left',
        flex: 1
    }, {
        text: 'Время блокировки',
        dataIndex: 'lockTime',
        align: 'left',
        flex: 1
    }, {
        text: 'Начало выполнения',
        dataIndex: 'executionTime',
        align: 'left',
        flex: 1
    }, {
        text: 'Длительность выполнения',
        dataIndex: 'requestDuration',
        align: 'left',
        flex: 1
    }, {
        text: 'Код ошибки',
        dataIndex: 'errorCode',
        align: 'left',
        flex: 1
    }, {
        text: 'Описание ошибки',
        dataIndex: 'errorMessage',
        align: 'left',
        variableRowHeight: true,
        flex: 1
    }],
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        displayMsg: 'Запросы {0} - {1} of {2}',
        emptyMsg: "Нет запросов"
    }
});