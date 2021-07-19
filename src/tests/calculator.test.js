import { expect, it } from '@jest/globals';
import { mount } from '@vue/test-utils';
import Calculator from '../components/Calculator';

describe('Calculator test', () => {
    it('Test operand1 input value', ()=> {
        const wrapper = mount(Calculator)

        const operand1Input = wrapper.find('input[name=operand1]')
        operand1Input.setValue('1')

        expect(wrapper.vm.operand1).toBe(1)
    })

    it('Test operand2 input value', ()=> {
        const wrapper = mount(Calculator)

        const operand1Input = wrapper.find('input[name=operand2]')
        operand1Input.setValue('2')

        // operand1Input.element.value = '1'
        // operand1Input.trigger('input')

        expect(wrapper.vm.operand2).toBe(2)
    })

}),

describe('Calculator test methods', ()=>{
    it('Test sum operation', ()=> {
        const wrapper = mount(Calculator)

        const operand1Input = wrapper.find('input[name=operand1]')
        operand1Input.setValue('100')


        const operand2Input = wrapper.find('input[name=operand2]')
        operand2Input.setValue('100')

        const sumOperationBtn = wrapper.find('button[name="+"]')
        sumOperationBtn.trigger('click')

        expect(wrapper.vm.result).toBe(200)
    }),

    it('Test divide operation', ()=> {
        const wrapper = mount(Calculator)

        const operand1Input = wrapper.find('input[name=operand1]')
        operand1Input.setValue('4')


        const operand2Input = wrapper.find('input[name=operand2]')
        operand2Input.setValue('2')

        const sumOperationBtn = wrapper.find('button[name="/"]')
        sumOperationBtn.trigger('click')

        expect(wrapper.vm.result).toBe(2)
    }),

    it('Test Sub operation', ()=> {
        const wrapper = mount(Calculator)

        const operand1Input = wrapper.find('input[name=operand1]')
        operand1Input.setValue('4')


        const operand2Input = wrapper.find('input[name=operand2]')
        operand2Input.setValue('2')

        const sumOperationBtn = wrapper.find('button[name="-"]')
        sumOperationBtn.trigger('click')

        expect(wrapper.vm.result).toBe(2)
    }),

    it('Test Mul operation', ()=> {
        const wrapper = mount(Calculator)

        const operand1Input = wrapper.find('input[name=operand1]')
        operand1Input.setValue('4')


        const operand2Input = wrapper.find('input[name=operand2]')
        operand2Input.setValue('2')

        const sumOperationBtn = wrapper.find('button[name="*"]')
        sumOperationBtn.trigger('click')

        expect(wrapper.vm.result).toBe(8)
    }),

    it('Test Pow operation', ()=> {
        const wrapper = mount(Calculator)

        const operand1Input = wrapper.find('input[name=operand1]')
        operand1Input.setValue('2')


        const operand2Input = wrapper.find('input[name=operand2]')
        operand2Input.setValue('2')

        const sumOperationBtn = wrapper.find('button[name="pow"]')
        sumOperationBtn.trigger('click')

        expect(wrapper.vm.result).toBe(4)
    }),

    it('Test Int operation', ()=> {
        const wrapper = mount(Calculator)

        const operand1Input = wrapper.find('input[name=operand1]')
        operand1Input.setValue('5')


        const operand2Input = wrapper.find('input[name=operand2]')
        operand2Input.setValue('2')

        const sumOperationBtn = wrapper.find('button[name="%"]')
        sumOperationBtn.trigger('click')

        expect(wrapper.vm.result).toBe(2)
    })

}),

describe('Calculator test screen keaboard', ()=>{
    it('Test print method', ()=> {
        const wrapper = mount(Calculator)
        const print = jest.fn()
        wrapper.setMethods({
            print: print
        })
        const screenKeyBtn = wrapper.find('button.screen_keyboard')
        screenKeyBtn.trigger('click')
        expect(wrapper.vm.print).toHaveBeenCalled()
    }),
    it('Test printKey', ()=> {
        const wrapper = mount(Calculator);
        const chosenOperand = wrapper.find('input.chosen');
        chosenOperand.setChecked()
        const chosenKey = wrapper.find('button[name="5"]');
        chosenKey.trigger('click');
        const operand1Input = wrapper.find('input[name=operand1]')

        //operand1Input.setValue(5)

        console.dir(wrapper.vm.operand1)
        expect(wrapper.vm.operand1).toBe(5)
    })
     it('Test delKey', ()=> {
        const wrapper = mount(Calculator);
        const chosenOperand = wrapper.find('input.chosen');
        chosenOperand.setChecked()
        const operand1Input = wrapper.find('input[name=operand1]')
        operand1Input.setValue(55)
        const chosenKey = wrapper.find('button[name="<-"]');
        chosenKey.trigger('click');
        // console.dir(wrapper.vm.operand1)
        expect(wrapper.vm.operand1).toBe(5)
    })
    
})     