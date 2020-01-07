const v = new Vue({
	el: '.wrap',
	data: {
		output: ''
	},
	methods: {
		addToExpression(ev) {
			const val = ev.target.innerHTML;
			this.output += val;
		},
		clear() {
			this.output = ''
		},
		handleExpression() {
			this.output = Number(this.output)
		}
	}
})