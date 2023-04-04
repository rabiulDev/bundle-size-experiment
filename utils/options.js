export const selectOptions = (data) => {
      let options
      options =
            data?.length > 0 ?
            data.map((el) => {
                  return {
                        label: el.name,
                        value: el.id,
                  }
            }): []
      return options
}
