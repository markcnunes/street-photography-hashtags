expect.extend({
  toBeDistinct(received) {
    const pass =
      Array.isArray(received) && new Set(received).size === received.length
    if (pass) {
      return {
        message: () => `expected [${received}] array is unique`,
        pass: true
      }
    } else {
      const findDuplicated = (arr: string[]) => {
        return arr.filter((item, index) => arr.indexOf(item) !== index)
      }
      return {
        message: () =>
          `expected [${findDuplicated(received)}] array is not to unique`,
        pass: false
      }
    }
  }
})

export default {}
