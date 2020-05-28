/*
* Adding this here as a future reminder that I need a foolproof keyboard / screen reader navigation
for select menus.
* Not sure if they should be arrow functions, since I am not done with my thought-train.
* Definetily needs testing and refactoring, but the main point is:
- multiple adjacent disabled items should not break or confuse the user, 
- disabled items at the beginning or end of list should not be selected, rather the
second to first or second to last should then be selected.
- if for example to items at the end of the list are disabled, then the third to last item should be the nearest available
- etc
*/

const getIndex = key => {
  const currentIndex = this.options.findIndex(this.activeOption)
  let newIndex
  if (key === 'up') newIndex = currentIndex + 1
  if (key === 'down') newIndex = currentIndex -1
  return newIndex
}

const handleKeyUp = () => {
  let availableOption
  const index = getIndex() - 1
  for(let i = index; i >= 0; i-- ){
    if(!this.options[i].disabled) {
      availableOption = i
      break
    }
  }
  return availableOption
}

const handleKeyDown = () => {
  let availableOption
  const index = getIndex() + 1
  for(let i = index; i <= this.options.length-1; i++) {
    if(!this.options.disabled) {
      availableOption = i
      break
    }
  }
}

const moveTo = key => {
  if (key === 'home') {
    const index = this.options.findIndex(option => !option.disabled)
    return (this.activeOption = this.options[index])
  }
  if (key === 'end') {
    const index =
      (this.options.length - 1) - this.options.slice().reverse().findIndex(option => !option.disabled)
    return (this.activeOption = this.options[index])
  }
  const selectedOption = this.options[getIndex(key)]

  if(!selectedOption.disabled) return (this.activeOption = selectedOption)
  if(selectedOption.disabled) {
    let nearestAvailable
    if(key === 'up') {
      nearestAvailable = handleKeyUp()
    }
    if(key === 'down') {
      nearestAvailable = handleKeyDown()
    }
    if(nearestAvailable) this.activeOption = nearestAvailable
  }

}

export default { getIndex, handleKeyUp, handleKeyDown, moveTo  }