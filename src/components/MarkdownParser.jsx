import React, { useState } from 'react'
import marked from "marked"
import hljs from 'highlight.js'

function MarkdownParser(props) {
	
	const [text, setText] = useState("")
	
	marked.setOptions({
		pedantic: false,
		gfm: true,
		breaks: true,
		sanitize: false,
		smarttexts: true,
	});

	hljs.initHighlightingOnLoad()
  
  fetch(props.link)
    .then(res => res.text())
    .then(text => {
      setText(text)
    })

	const markdown = () => {
		return {
			__html: marked(text)
		}
	}

  return (
    <section
			className="code-block bg-gray-200 rounded-md overflow-hidden" 
			dangerouslySetInnerHTML={markdown()} 
		/>
  )
	
}

export default MarkdownParser