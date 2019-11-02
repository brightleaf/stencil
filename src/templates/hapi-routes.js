const to = require('to-case')
module.exports = (name, prefix = 'api') => {
  const fileName = to.slug(name)
  const componentName = to.pascal(name)
  const camelName = to.camel(name)

  const template = `
  const getAllHandler = (r,h) => {
    return {}
  }
  const postHandler  = (r,h) => {
    return {}
  }

  const getHandler = (r,h) => {
    return {}
  }
  const putHandler  = (r,h) => {
    return {}
  }
  const deleteHandler = (r,h) => {
    return {}
  }



  module.exports = [
    {
      method: 'GET',
      path: '/${prefix}/${fileName}',
      config: {
        handler: getAllHandler
      }
    },
    {
      method: 'POST',
      path: '/${prefix}/${fileName}',
      config: {
        handler: postHandler
      }
    },
    {
      method: 'GET',
      path: '/${prefix}/${fileName}/{id}',
      config: {
        handler: getHandler
      }
    },
    {
      method: 'PUT',
      path: '/${prefix}/${fileName}/{id}',
      config: {
        handler: putHandler
      }
    },
    {
      method: 'DELETE',
      path: '/${prefix}/${fileName}/{id}',
      config: {
        handler: deleteHandler
      }
    },
    // graphql routes
    {
      method: 'graphql',
      path: '/${camelName}s',
      config: {
        handler: getAllHandler
      }
    },
    {
      method: 'graphql',
      path: '/create${componentName}',
      config: {
        handler: postHandler
      }
    },
    {
      method: 'GET',
      path: '/${componentName}',
      config: {
        handler: getHandler
      }
    },
    {
      method: 'PUT',
      path: '/update${componentName}',
      config: {
        handler: putHandler
      }
    },
    {
      method: 'DELETE',
      path: '/delete${componentName}',
      config: {
        handler: deleteHandler
      }
    },
  ]


`

  console.info('js template', template)

  return { js: template }
}
