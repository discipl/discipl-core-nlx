require('@babel/register')({
  extends: './.babelrc',
  ignore: [/node_modules\/(?!(discipl-core-baseconnector))/]
})
