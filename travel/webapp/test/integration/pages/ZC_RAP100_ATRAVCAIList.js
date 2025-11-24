sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'travel',
            componentId: 'ZC_RAP100_ATRAVCAIList',
            contextPath: '/ZC_RAP100_ATRAVCAI'
        },
        CustomPageDefinitions
    );
});