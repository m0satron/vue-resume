import { mount } from "@vue/test-utils";
import Menu from './Menu.vue'

describe('Test suite for menu', () => {
  it('renders', () => {
    const wrapper = mount(Menu)
    expect(wrapper.vm).toBeTruthy()
  })
  it('has a title', () => {
    const title = 'testTitle'
    const wrapper = mount(Menu, {
      propsData: { title }
    })
    const foundTitle = wrapper.find('.menu__title').text()
    expect(foundTitle).toEqual(wrapper.vm.$props['title'])
  })
  it('has a subtitle', () => {
    const subTitle = 'testSub'
    const wrapper = mount(Menu, {
      propsData: { subTitle }
    })
    const foundTitle = wrapper.find('.menu__subtitle').text()
    expect(foundTitle).toEqual(wrapper.vm.$props['subTitle'])
  })
  it('has a hidden menu by default', () => {
    const wrapper = mount(Menu)
    expect(wrapper.find('.menu__tab-area').classes()).toContain('menu__tab-area--hidden')
  })
  it('shows menu when clicking on icon', () => {  
    const wrapper = mount(Menu)
    const icon = wrapper.find('.menu__icon')
    icon.trigger('click')
    expect(wrapper.find('.menu__tab-area').classes()).not.toContain('menu__tab-area--hidden')
  })
})
