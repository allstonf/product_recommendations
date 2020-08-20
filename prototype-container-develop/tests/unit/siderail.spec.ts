import { shallowMount, mount } from '@vue/test-utils'
import SideRail from '@/Components/SideRail.vue'

describe('SideRail component', () => {
    let wrapper: any
    jest.useFakeTimers()

    beforeEach(() => {
        wrapper = shallowMount(SideRail)
    })
    afterEach(() => {
        wrapper.destroy()
    })
    it('renders siderail component', () => {
        expect(wrapper.classes('SideRail'))
    })
    it('has a close button', () => {
        const button = wrapper.find('button')
        expect(button.exists()).toBe(true)
    })
    it('can render the modal component', async () => {
        wrapper = mount(SideRail)
        expect(wrapper.find('.content').exists()).toBe(false)
        expect(wrapper.vm.$data.showModal).toBe(false)
        expect(wrapper.vm.$data.active).toBe(false)

        await wrapper.find('.info-button').trigger('click')
        jest.advanceTimersByTime(1000)

        expect(wrapper.vm.$data.showModal).toBe(true)
        expect(wrapper.vm.$data.active).toBe(true)
        expect(wrapper.find('.content').exists()).toBe(true)
    })
    it('can respond to close modal', async () => {
        wrapper = mount(SideRail, {
            data () {
                return {
                    showModal: true,
                    active: true
                }
            }
        })
        expect(wrapper.vm.$data.showModal).toBe(true)
        expect(wrapper.vm.$data.active).toBe(true)
        expect(wrapper.find('.content').exists()).toBe(true)

        await wrapper.find('.modal-close-button').trigger('click')
        jest.advanceTimersByTime(5000)
        await wrapper.vm.$nextTick()

        expect(wrapper.vm.$data.showModal).toBe(false)
        expect(wrapper.vm.$data.active).toBe(false)
        expect(wrapper.find('.content').exists()).toBe(false)
    })
    it('results in error on close event', () => {
        try {
            wrapper.vm.$emit('close')
        } catch (error) {
            expect(error).toBe("Cannot read property 'close' of undefined")
        }
    })
    it('calls close method when button clicked', async () => {
        // produces a ts error but still runs
        // const spy = jest.spyOn(SideRail.prototype.constructor.options.methods, 'close')
        const close = jest.fn()
        wrapper = shallowMount(SideRail, {
            methods: {
                close
            }
        })
        wrapper.find('.close-button').trigger('click')
        await wrapper.vm.$nextTick()
        expect(close).toHaveBeenCalled()
    })
})
