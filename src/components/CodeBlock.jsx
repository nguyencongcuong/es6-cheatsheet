import React, { useState } from 'react'

import hljs from 'highlight.js'
import MarkdownParser from './MarkdownParser'

function CodeBlock(props) {
  
  hljs.highlightAll() 
  const [text, setText] = useState("")
  fetch(props.link)
    .then(res => res.text())
    .then(text => {
      setText(text)
    })
   
  return (
    <div className="code-block bg-gray-200 rounded-md overflow-hidden">
      <MarkdownParser source={text} />
    </div>
  )
}

export default CodeBlock