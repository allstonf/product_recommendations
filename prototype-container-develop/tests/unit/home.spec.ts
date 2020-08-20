import { mount, Wrapper } from '@vue/test-utils'
import HomeView from '@/Views/HomeView.vue'

describe('HomeView component', () => {
    let wrapper: Wrapper<Vue>

    it('Renders siderail', () => {
        wrapper = mount(HomeView)
        expect(wrapper.find('#video').exists()).toBe(true)
    })
})
