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


  })
  it('has an email', () => {
    const mail= "abcd@example.com"
    const wrapper = shallowMount(Contact, {
      propsData: {
        mail
      }
    })
    const foundMail = wrapper.find('.contact__mail')
    expect(foundMail.attributes().href).toBe(`mailto:${mail}`)


  })
  it('has a github account', () => {
    const gitHub = "m0satron"
    const wrapper = shallowMount(Contact, {
      propsData: {
        gitHub
      }
    })
    const foundGitHub = wrapper.find('.contact__github')
    expect(foundGitHub.attributes().href).toBe(`https://github.com/${gitHub}`)


  })
  it('has a linkedIn account', () => {
    const linkedIn = "msebdani"
    const wrapper = shallowMount(Contact, {
      propsData: {
        linkedIn
      }
    })
    const foundlinkedIn = wrapper.find('.contact__linkedin')
    expect(foundlinkedIn.attributes().href).toBe(`https://linkedin.com/${linkedIn}`)

  })
} )