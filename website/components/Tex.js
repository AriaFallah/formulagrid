import katex from 'katex'

view Tex {
  const text = view.props.children
  on.mount(() => katex.render(text, view.element()))

  <span>{view.props.children}</span>
}
