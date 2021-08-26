<template>
    <div>
        A simple calculator
    </div>

    <div>
        <div>{{result }}</div>
        <div class="grid grid-cols-4 divide-y divide-x gap-3 items-center justify-center">
            <button @click.prevent="trigger(1)">
                1
            </button>
            <button @click.prevent="trigger(2)">
                2
            </button>
            <button @click.prevent="trigger(3)">
                3
            </button>
            <button @click.prevent="trigger(4)">
                4
            </button>
            <button @click.prevent="trigger(5)">
                5
            </button>
            <button @click.prevent="trigger(6)">
                6
            </button>
            <button @click.prevent="trigger(7)">
                7
            </button>
            <button @click.prevent="trigger(8)">
                8
            </button>
            <button @click.prevent="trigger(9)">
                9
            </button>
            <button @click.prevent="trigger(0)">
                0
            </button>

        
            <button @click.prevent="add">Add +</button>
            <button @click.prevent="subtract">Subtract -</button>
            <button @click.prevent="divide">Divide /</button>
            <button @click.prevent="multiply">Multiply *</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            result : 0
        }
    },
    
    methods: {
        trigger (number) {
            this.result = number
        },

        add() {
            console.log('add')
        },

        subtract() {
            console.log('subtract')
        },

        divide() {
            console.log('divide')
        },

        multiply() {
            console.log('multiply')
        } 
    }
}
</script>

