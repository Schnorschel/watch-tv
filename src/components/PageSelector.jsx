import React from 'react'

// prettier-ignore
const PageSelector = (props) => {

  const handleFormSubmit = e => {
    e.preventDefault()
  }

  console.log('thisPage: ' + props.thisPage)
  const pageSelectorArray = []

  // for (let i = 1; i <= props.allPages; i++) {
  //   if (i <= 2 || i >= props.allPages - 1 || Math.abs(i - props.thisPage) <= 1) {
  //     if (pageSelectorArray[pageSelectorArray.length - 1] !== '..') {
  //       if (i - parseInt(pageSelectorArray[pageSelectorArray.length - 1]) === 2) {
  //         pageSelectorArray.push((i-1).toString())
  //       } else if (i - parseInt(pageSelectorArray[pageSelectorArray.length - 1]) > 2) {
  //         pageSelectorArray.push('..')
  //       }
  //     }
  //     pageSelectorArray.push(i.toString())
  //   }
  // }

  for (let i = 1; i <= props.allPages; i++) {
    if (i <= 2 || i >= props.allPages - 1 || Math.abs(i - props.thisPage) <= 1) {
      if (pageSelectorArray.length >= 2 && pageSelectorArray[pageSelectorArray.length - 1].pageLabel !== '..') {
        if (i - parseInt(pageSelectorArray[pageSelectorArray.length - 1].pageValue) == 2) {
          pageSelectorArray.push({ pageValue: (i-1), pageLabel: (i-1).toString() })
        } else if (i - parseInt(pageSelectorArray[pageSelectorArray.length - 1].pageValue) > 2) {
          pageSelectorArray.push({ pageValue: -1, pageLabel: '..'})
        }
      }
      pageSelectorArray.push({ pageValue: i, pageLabel: i.toString()})
    }
  }  
  console.log(pageSelectorArray)
  // console.log('length: ' + pageSelectorArray.length)
  // console.log('array 1: ' + (pageSelectorArray[0]).pageValue)
  if (props.thisPage != 1) {
    pageSelectorArray.unshift({ pageValue: parseInt(props.thisPage) -1 , pageLabel: '<'})
  }
  if (props.thisPage != props.allPages) {
    pageSelectorArray.push({ pageValue: parseInt(props.thisPage) + 1, pageLabel: '>'})
  }

  // prettier-ignore
  return (
    <section className="pageSelectorContainer">
     <form onSubmit={handleFormSubmit}>
      {/* {(props.thisPage != 1) ? <button className="pageButton" 
                                       value={parseInt(props.thisPage) - 1}
                                       onClick={e => props.handleNewPage(e.target.value)}
                               ><i class="fas fa-chevron-left"></i></button> : ''} */}
      {pageSelectorArray.map((pageElement, index) => {
        return (pageElement.pageLabel === '..' ? 
                  <span className="ellipsis" key={index}><i className="fas fa-ellipsis-h"></i></span> : 
                  <button key={index} 
                          className={'pageButton' + ((pageElement.pageValue == props.thisPage) ? 
                                                      ' thisPage' : '')} 
                          value={pageElement.pageValue}
                          onClick={e => props.handleNewPage(e.target.value)}>{pageElement.pageLabel}</button>)
                  // >{(pageElement.pageLabel == '<') ? <><i className="fas fa-chevron-left"></i><span className="hideMobile">{' Previous Page'}</span></> : 
                  //   (pageElement.pageLabel == '>') ? <><span className="hideMobile">{'Next Page '}</span><i class="fas fa-chevron-right"></i></> : 
                  //   pageElement.pageLabel}</button>)
      } )}
      {/* {(props.thisPage != props.allPages) ? <button className="pageButton" 
                                                    value={parseInt(props.thisPage) + 1}
                                                    onClick={e => props.handleNewPage(e.target.value)}
                                            ><i class="fas fa-chevron-right"></i></button> : ''} */}
     </form>
    </section>
    )
}

export default PageSelector
