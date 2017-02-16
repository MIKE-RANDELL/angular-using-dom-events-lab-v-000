function Counter() {
	return {
		template: [
			'<div>',
				'<h3>Counter</h3>',
				'<div>Click anywhere to increment the counter!</div>',
				'<div>Current count: {{ countCtrl.count }}</div>',
			'</div>'
		].join(''),
		require: 'counter',
		controller: function () {
			this.count = 0;
			this.addCount = function() {
				this.count += 1;
			};
		},
		controllerAs: 'countCtrl',

		link: function(scope, element, attrs, ctrl) {
			element.on('click', function() {
				//debugger;
				ctrl.addCount();
				scope.$apply()
			});

			scope.$on('$destroy', function() {
				element.off();
			});
		}
	}
}

angular
	.module('app')
	.directive('counter', Counter);
