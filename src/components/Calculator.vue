<template>
    <div>
        <div class="display">
            <input type='number' v-model.number.trim="operand1" name="operand1"/>
            <input type='number' v-model.number.trim="operand2" name="operand2"/>
            = {{result}}
        </div>

        <div class="keyboard">
            <button
                v-for="operation in operations"
                :key="operation"
                :title="operation"
                :disabled="operand1 === '' || operand2 === ''"
                @click="calculate(operation)"
                :name="operation"
                >
                {{ operation }}
            </button>
        </div>

             <input type="checkbox" id="checkbox" v-model="checked">
             <label for="checkbox">Отобразить экранную клавиатуру</label>

         <div class="screen_keyboard" v-show='checked'>
            <button class="screen_keyboard"
                v-for="key in keys"
                :key="key"
                :title="key"
                @click="print(chosen, key)"
                :name="key">
                {{ key }}
            </button>
        </div>

        <div class="logs">
        <div v-for="(log, id) in logs" v-bind:key="id">{{ log }}</div>
        </div>

        <div v-show="error">Ошибка! {{ error }}</div>
        
        <div class="strange-message">
            <template v-if="result < 0">Получилось отрицательное число</template>
            <template v-else-if="result < 100">Результат в первой сотне</template>
            <template v-else>Получилось слишком большое число</template>
        </div>
<div class="radio_btn">
        <input type="radio" id="first" value="operand1" v-model.number="chosen" class="chosen" checked>
        <label for="first">operand1</label>
        <input type="radio" id="second" value="operand2" v-model.number="chosen" >
        <label for="second">operand2</label>
</div>
    </div>

</template>
 
<script>
 export default {
    name: 'Calculator',
        data() {
            return {
                operations: ["+", "-", "/", "*", "pow", "%"],
                operand1: 0,
                operand2: 0,
                result: 0,
                error: '',
                logs: {},
                keys: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '<-'],
                checked: '',
                chosen: '',
            }
        },

    methods: {
        calculate(operation) {
            const operand1 = this.operand1;
            const operand2 = this.operand2;
            const calcOperations = {
                "+": () => operand1 + operand2,
                "-": () => operand1 - operand2,
                "/": () => operand1 / operand2,
                 "*": () => operand1 * operand2,
                "pow": () => Math.pow(operand1, operand2),
                "%": () => Math.floor(operand1/operand2) 
        };
            this.result = calcOperations[operation]();
    
            const key = Date.now()
            const value = `${this.operand1}${operation}${this.operand2}=${this.result}`
                this.$set(this.logs, key, value)
        },
        print(chosen, key) {
            if (key === '<-') {
                this[chosen] = +String(this[chosen]).slice(0, -1)    
            }
            else {
                this[chosen] = +(this[chosen] += key)
            }
        }
    }
}
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
