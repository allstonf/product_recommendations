import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue' 

describe('App component', () => {
    let wrapper: any
    it('mounted methods are called', async () => {
        // the following produces a warning
        const deviceId = jest.fn()
        const ipAddress = jest.fn()
        const channel = jest.fn()
        const show = jest.fn()
        const campaign = jest.fn()
        const adUnit = jest.fn()
        wrapper = shallowMount(App, {
            methods: {
                deviceId,
                ipAddress,
                channel,
                show,
                campaign,
                adUnit
            }
        })
        
        await wrapper.vm.$nextTick()
        expect(deviceId).toHaveBeenCalled()                
        expect(ipAddress).toHaveBeenCalled()                
        expect(channel).toHaveBeenCalled()                
        expect(show).toHaveBeenCalled()                
        expect(campaign).toHaveBeenCalled()                
        expect(adUnit).toHaveBeenCalled()     

        // the following works but produces a ts error but tests pass and it still runs
        // const spy1 = jest.spyOn(App.prototype.constructor.options.methods, 'deviceId')
        // const spy2 = jest.spyOn(App.prototype.constructor.options.methods, 'ipAddress')
        // const spy3 = jest.spyOn(App.prototype.constructor.options.methods, 'channel')
        // const spy4 = jest.spyOn(App.prototype.constructor.options.methods, 'show')
        // const spy5 = jest.spyOn(App.prototype.constructor.options.methods, 'campaign')
        // const spy6 = jest.spyOn(App.prototype.constructor.options.methods, 'adUnit')
        // wrapper = shallowMount(App)
        // expect(spy1).toHaveBeenCalled()                
        // expect(spy2).toHaveBeenCalled()                
        // expect(spy3).toHaveBeenCalled()                
        // expect(spy4).toHaveBeenCalled()                
        // expect(spy5).toHaveBeenCalled()                
        // expect(spy6).toHaveBeenCalled()                
    })
})
