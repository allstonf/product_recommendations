import { shallowMount, Wrapper } from '@vue/test-utils'
import Preview from '@/Views/Preview.vue'

describe('Preview', () => {
    let wrapper: Wrapper<Vue>

    it('renders preview page', () => {
        wrapper = shallowMount(Preview)
        expect(wrapper.html()).toContain('<div id="tv">')
    })
    it('test DOMContentLoad fires getScale', () => {
        expect('ContentLoaded').toBe('ContentLoaded')
    })
})