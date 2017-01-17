var adalConfig = {  
  tenant: '54a23889-4ae9-4748-9ef2-8c7d92cbd61f',
  clientId: '74b1fa8c-19d3-4102-8ad1-073fbaeb272c',
  extraQueryParameter: 'nux=1',
  disableRenewal: true,
  endpoints: {
    'https://graph.microsoft.com': 'https://graph.microsoft.com', 
    'https://tryadeconsulting.sharepoint.com': 'https://tryadeconsulting.sharepoint.com'
  }
  // cacheLocation: 'localStorage', // enable this for IE, as sessionStorage does not work for localhost. 
};

module.exports = adalConfig;
