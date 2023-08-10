
import mdHtml from './test.md'

document.write('hello world')

const content = document.createElement('div')
content.className = 'content'
content.innerHTML = mdHtml
document.body.appendChild(content)
