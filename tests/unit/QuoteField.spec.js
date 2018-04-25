import { shallow } from '@vue/test-utils'
import QuoteField from '@/components/QuoteField.vue'

describe('QuoteField.vue', () => {
    const quote = 'My test quote'

    it('renders quote when props value is passed', () => {
        const wrapper = shallow(QuoteField)
        wrapper.setProps({ value: quote })
        expect(wrapper.text()).toMatch(quote)
    })

    it('emit an input event', () => {
        const wrapper = shallow(QuoteField)
        wrapper.setData({ quote: quote })
        expect(wrapper.emitted().input.length).toBe(1)
        expect(wrapper.emitted().input[0]).toEqual([quote])
    })

    it('change quote data when the value property is modified', () => {
        const wrapper = shallow(QuoteField)
        wrapper.setProps({ value: quote })
        expect(wrapper.vm.quote).toMatch(quote)
    })
})
