sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'travel',
            componentId: 'ZC_RAP100_ATRAVCAIObjectPage',
            contextPath: '/ZC_RAP100_ATRAVCAI'
        },
        CustomPageDefinitions
    );
});