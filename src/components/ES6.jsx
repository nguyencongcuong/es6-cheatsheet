import React from 'react'
import ES6Links from "../ES6"
import CodeBlock from './CodeBlock'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

function ES6() {
  
  const CodeBlockList = ES6Links.map((a, i) => 
    <CodeBlock link={a} key={i} />
  )

  return (
    <React.Fragment>
      
      <div className="aspect-w-1 aspect-h-1 sm:aspect-w-2 sm:aspect-h-1 md:aspect-w-3 md:aspect-h-1 bg-yellow-300 mb-8">
        <div className="flex justify-center items-center p-4">
          <h1 className="font-bold text-4xl text-center m-0 ">
            ES6 CheatSheet
          </h1>
        </div>
      </div>

      <ResponsiveMasonry
        columnsCountBreakPoints={{ 640: 1, 1024: 2 }}
      >
        <Masonry gutter="2rem" className="p-4 lg:p-8">
          {CodeBlockList}
        </Masonry>
      </ResponsiveMasonry>
      
    </React.Fragment>
  )
}

export default ES6