import React from 'react'

// prettier-ignore
const PageSelector = (props) => {

  const handleFormSubmit = e => {
    e.preventDefault()
  }

  console.log('thisPage: ' + props.thisPage)
  const pageSelectorArray = []

  for (let i = 1; i <= props.allPages; i++) {
    if (i <= 2 || i >= props.allPages - 1 || Math.abs(i - props.thisPage) <= 1) {
      if (pageSelectorArray[pageSelectorArray.length - 1] !== '..') {
        if (i - parseInt(pageSelectorArray[pageSelectorArray.length - 1]) === 2) {
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
     <form onSubmit={handleFormSubmit}>
      {(props.thisPage != 1) ? <button className="pageButton" 
                                       value={parseInt(props.thisPage) - 1}
                                       onClick={e => props.handleNewPage(e.target.value)}><i class="fas fa-chevron-left"></i> Previous Page</button> : ''}
      {pageSelectorArray.map((pageNumber, index) => {
        return (pageNumber === '..' ? 
                  <span className="ellipsis" key={index}><i className="fas fa-ellipsis-h"></i></span> : 
                  <button key={index} 
                          className={'pageButton' + ((pageNumber == props.thisPage) ? 
                                                      ' thisPage' : '')} 
                          value={pageNumber}
                          onClick={e => props.handleNewPage(e.target.value)}>{pageNumber}</button>)
      } )}
      {(props.thisPage != props.allPages) ? <button className="pageButton" 
                                       value={parseInt(props.thisPage) + 1}
                                       onClick={e => props.handleNewPage(e.target.value)}>Next Page <i class="fas fa-chevron-right"></i></button> : ''}
     </form>
    </section>
  )
}

export default PageSelector
