import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import ChakraUIRenderer from "chakra-ui-markdown-renderer"
import theme from "../lib/markdown-theme"

export default function Markdown({content}){
  return(
    <ReactMarkdown 
      plugins={[remarkGfm]}
      children={content}
      components={ChakraUIRenderer(theme)}
    />
  )
}