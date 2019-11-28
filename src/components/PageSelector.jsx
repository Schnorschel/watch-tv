import React, { useState, useEffect } from 'react'

// prettier-ignore
const PageSelector = (props) => {

  const pageSelectorArray = []

  for (let i = 1; i <= props.allPages; i++) {
    if (i <= 2 || i >= props.allPages - 1 || Math.abs(i - props.thisPage) <= 1) {
      if (pageSelectorArray[pageSelectorArray.length - 1] !== '..') {
        if (i - parseInt(pageSelectorArray[pageSelectorArray.length - 1]) == 2) {
          pageSelectorArray.push((i-1).toString())
        } else if (i - parseInt(pageSelectorArray[pageSelectorArray.length - 1]) > 2) {
          pageSelectorArray.push('..')
        }
      }
      pageSelectorArray.push(i.toString())
    }
  }
  // prettier-ignore
  return (
    <section className="pageSelectorContainer">
      {pageSelectorArray.map((pageNumber, index) => {
        return (pageNumber === '..' ? <span className="ellipsis">{'...'}</span> : <button className={'pageButton' + (pageNumber === props.thisPage) ? ' thisPage' : ''}>{pageNumber}</button>)
      } )}
    </section>
  )
}

export default PageSelector
