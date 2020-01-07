const v = new Vue({
	el: '.wrap',
	data: {
		output: '0'
	},
	methods: {
		addToExpression(ev) {
			const val = ev.target.innerHTML;
			//запрещаем ставить первым символом некоторые операторы
			if(this.output.length === 0 && (val === '%' || val === '*'|| val === '/')) {
				return
			} 
			else if(this.output === '0' && val !== '.') {
				this.output = val
			}
			else {
				this.output += val;
			}
		},
		handleExpression() {
			//eval - "выполняет" строку
			this.output = eval(this.output)
		},
		clear() {
			this.output = '0'
		},
		trim() {
			const trimmedStr = String(this.output).slice(0,-1)
			this.output = trimmedStr
		}
	}
})