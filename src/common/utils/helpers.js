export function sortOptions(arr) {
  const options = arr.map(item => {
    const { termTaxonomyId, name } = item.node

    return {
      value: termTaxonomyId,
      label: name === 'Uncategorized' ? 'Other' : name
    }
  })

  const i = options.findIndex(o => o.label === "Other")
  const newArray = options.concat(options.splice(i, 1))

  return newArray
}
