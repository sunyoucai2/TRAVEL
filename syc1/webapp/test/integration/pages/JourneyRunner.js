sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"syc1/test/integration/pages/TravelList",
	"syc1/test/integration/pages/TravelObjectPage"
], function (JourneyRunner, TravelList, TravelObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('syc1') + '/test/flp.html#app-preview',
        pages: {
			onTheTravelList: TravelList,
			onTheTravelObjectPage: TravelObjectPage
        },
        async: true
    });

    return runner;
});

