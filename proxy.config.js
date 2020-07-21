const proxy = [
  {
    context: '/api',
    target: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSekAMQItXYWim_wM-HY_wHtTOYaj5-Ktf3jmiPvrytq1SDkng/formResponse',
    pathRewrite: {'^/api' : ''}
  }
];
module.exports = proxy;