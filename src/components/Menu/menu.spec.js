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
  it('shows menu when clicking on icon', async () => {
    const wrapper = mount(Menu)
    const icon = wrapper.find('.menu__menu-icon')
    icon.trigger('click')
    await wrapper.$nextTick
    expect(wrapper.find('.menu__tab-area').classes()).not.toContain('menu__tab-area--hidden')
  })
  it('hides hamburger icon when clicked', async () => {
    const wrapper = mount(Menu)
    const icon = wrapper.find('.menu__menu-icon')
    icon.trigger('click')
    await wrapper.$nextTick
    expect(wrapper.find('.menu__menu-icon')).toBeTruthy()
  })
  it('close icon closes menu when clicked', async () => {
    const wrapper = mount(Menu)
    const icon = wrapper.find('.menu__menu-icon')
    icon.trigger('click')
    await wrapper.$nextTick
    expect(wrapper.find('.menu__tab-area').classes()).not.toContain('menu__tab-area--hidden')
    const closeBtn = wrapper.find('.menu__close')
    closeBtn.trigger('click')
    await wrapper.$nextTick
    expect(wrapper.find('.menu__tab-area').classes()).toContain('menu__tab-area--hidden')
  })
  it('emits tabItem when clicked', async () => {

    const wrapper = mount(Menu, {
      propsData: {
        tabItems: ['About', 'Home', 'Something']
      }
    })
    const icon = wrapper.find('.menu__menu-icon')
    icon.trigger('click')
    await wrapper.$nextTick
    const menuItem = wrapper.find('.menu__item')
    menuItem.trigger('click')
    await wrapper.$nextTick
    expect(wrapper.emitted().change).toStrictEqual([["About"]])
  })
})
