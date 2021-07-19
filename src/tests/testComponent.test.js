import { mount } from '@vue/test-utils'
import TestComponent from '../components/TestComponent'

describe('TestComponent', ()=>{
    test('Content of Test Component', ()=> {
        const wrapper = mount(TestComponent, {
            propsData: {
                message: "Hello From test!"
            }
        })

        expect(wrapper.text()).toEqual(
            'The message is: Hello From test!'
        )
    })
})