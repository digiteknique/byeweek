"use strict";
var router_1 = require('@angular/router');
var leagues_component_1 = require('./leagues.component');
var dashboard_component_1 = require('./dashboard.component');
var league_detail_component_1 = require('./league-detail.component');
var appRoutes = [
    {
        path: '',
        redirectTo: 'league/1',
        pathMatch: 'full'
    },
    {
        path: 'leagues',
        component: leagues_component_1.LeaguesComponent
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'league/:id',
        component: league_detail_component_1.LeagueDetailComponent
    },
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map