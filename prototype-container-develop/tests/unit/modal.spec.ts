import { shallowMount, mount, Wrapper } from '@vue/test-utils'
import ModalComponent from '@/Components/ModalComponent.vue'

describe('Modal component', () => {
    let wrapper: Wrapper<Vue>
    beforeEach(() => {
        wrapper = shallowMount(ModalComponent)
    })
    it('Renders modal content component', () => {
        wrapper = mount(ModalComponent)
        expect(wrapper.find('.content').exists()).toBe(true)
    })
    it('emits close when close button clicked', async () => {
        wrapper.find('.modal-close-button').trigger('click')
        await wrapper.vm.$nextTick()

        expect(wrapper.emitted('close')?.length).toBe(1)
    })
})
