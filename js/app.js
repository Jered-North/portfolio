angular.module("portfolio", ["ui.router"])

	.config(function($stateProvider, $urlRouterProvider) {

		$stateProvider

			.state('home', {
				url: "/home",
				templateUrl: "templates/home.html"
			})

			.state('art-site', {
				url: "/art-site",
				templateUrl: "templates/art-site.html"
			})

			.state('dev-housing', {
				url: "/dev-housing",
				templateUrl: "templates/devhousing.html"
			})

			$urlRouterProvider.otherwise('/home');
	});