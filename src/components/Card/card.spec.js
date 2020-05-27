import { mount, shallowMount } from "@vue/test-utils";
import Card from './Card.vue'

describe('test suite for Card', () => {
  it('renders', () => {
    const wrapper = mount(Card)
    expect(wrapper.vm).toBeTruthy()
  })
  it('has a title', () => {
    const title = 'exampleTitle'
    const wrapper = mount(Card, {
      propsData: { title }
    })
    const foundTitle = wrapper.find('.card__title').text()
    expect(foundTitle).toEqual(wrapper.vm.$props['title'])
  })
  it('can have a list', () => {
    const list = "[Jest, Vue]"
    const wrapper = shallowMount(Card, { 
      propsData: { list }
    })
    const foundList = wrapper.find('.card__list').text()
    expect(foundList).toEqual(wrapper.vm.props['list'])
  })
  it('has description', () => {
    const description = 'this is description'
    const wrapper = mount(Card, {
      propsData: { description }
    })
    const foundDescription = wrapper.find('.card__description').text()
    expect(foundDescription).toEqual(wrapper.vm.$props['description'])
  })
})