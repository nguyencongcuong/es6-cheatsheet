import React from 'react'
import marked from "marked"

function MarkdownParser(props) {
	marked.setOptions({
		pedantic: false,
		gfm: true,
		breaks: true,
		sanitize: false,
		smarttexts: true,
	});
	const markdown = () => {
		return {
			__html: marked(props.source)
		}
	}    
  return (
    <section className="mb-8" dangerouslySetInnerHTML={markdown()} />
  )
}

export default MarkdownParser