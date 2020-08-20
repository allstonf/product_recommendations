import { shallowMount, Wrapper } from '@vue/test-utils'
import ModalContentComponent from '@/Components/ModalContentComponent.vue'

describe('Modal Content Component', () => {
    let wrapper: Wrapper<Vue>
    beforeEach(() => {
        wrapper = shallowMount(ModalContentComponent)
    })
    afterEach(() => {
        wrapper.destroy()
    })
    it('Holds text', () => {
        expect(wrapper.find('.content').exists()).toBe(true)
    })
})
