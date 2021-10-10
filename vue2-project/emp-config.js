const withVue2 = require('@efox/emp-vue2')
module.exports = withVue2(({config}) => {
  const projectName = 'vue2Project'
  const port = 8008
  config.output.publicPath(`http://localhost:${port}/`)
  config.devServer.port(port)
  config.plugin('mf').tap(args => {
    args[0] = {
      ...args[0],
      ...{
        /**
         * name: 对外暴露项目名,
         */
        name: projectName,
        filename: 'emp.js',
        library: {type: 'var', name: projectName},
        shared: ['vue/dist/vue.esm.js'],
        /**
         * remotes 远程模块
         * remotes: {
         * '引用别名': '远程模块项目名@远程模块的emp.js文件地址',
         * },
         */
        exposes: {
          './Hello': './src/components/Hello',
        },
        remotes: {
          '@v2b': 'vue2Base@http://localhost:8009/emp.js',
        },
      },
    }
    return args
  })

  config.plugin('html').tap(args => {
    args[0] = {
      ...args[0],
      ...{
        title: 'EMP Vue2 Project',
      },
    }
    return args
  })
})
