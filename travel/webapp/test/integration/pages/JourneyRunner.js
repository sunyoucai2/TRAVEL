sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"travel/test/integration/pages/ZC_RAP100_ATRAVCAIList",
	"travel/test/integration/pages/ZC_RAP100_ATRAVCAIObjectPage"
], function (JourneyRunner, ZC_RAP100_ATRAVCAIList, ZC_RAP100_ATRAVCAIObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('travel') + '/test/flp.html#app-preview',
        pages: {
			onTheZC_RAP100_ATRAVCAIList: ZC_RAP100_ATRAVCAIList,
			onTheZC_RAP100_ATRAVCAIObjectPage: ZC_RAP100_ATRAVCAIObjectPage
        },
        async: true
    });

    return runner;
});

