const v = new Vue({
	el: '.wrap',
	data: {
		output: '0',
		logs: []
	},
	methods: {
		addToExpression(val) {
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
			const result = eval(this.output);
			//чистим логи вычислений, чтобы не нагромождались
			if(this.logs.length === 2) {
				this.logs.splice(0,1)
			}
			this.logs.push(`${this.output}=${result}`);
			this.output = result;
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