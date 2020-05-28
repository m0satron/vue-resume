import { shallowMount } from '@vue/test-utils'
import Contact from './Contact.vue'


describe('test suite for contact field', () => {
  it('renders', () => {
    const wrapper = shallowMount(Contact)
    expect(wrapper.vm).toBeTruthy()
  })
  it('has a phone', () => {
    const phone= "0707123123"
    const wrapper = shallowMount(Contact, {
      propsData: {
        phone
      }
    })
    const foundPhoneNumber = wrapper.find('.contact__phone')
    expect(foundPhoneNumber.attributes().href).toBe(`tel:${phone}`)
    expect(foundPhoneNumber.text()).toBe(`${phone}`)

  })
} )