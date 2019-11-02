const to = require('to-case')
module.exports = name => {
  const ComponentName = to.pascal(name)
  const fileName = to.slug(name)

  const template = `
import React from 'react'
import classnames from 'classnames'

import './${fileName}.css'

const ${ComponentName} = ({ className }) => {
  return (
    <div className="classnames('${fileName}', className)">

    </div>
  )
}

export {
  ${ComponentName}
}

export default ${ComponentName}
`
  const cssTemplate = `
.${fileName} {

}
`
  const indexTemplate = `
import { ${ComponentName} } from './${fileName}.js'

export {
  ${ComponentName}
}

export default ${ComponentName}

`
  console.info('js template', template)
  console.info('css template', cssTemplate)
  console.log('index template', indexTemplate)

  return { js: template, css: cssTemplate, index: indexTemplate }
}
