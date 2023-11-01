const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri: process.env.MONGODB_URI ||
    process.env.MONGO_HOST ||
    'mongodb://' + (process.env.IP || 'localhost') + ':' +
    (process.env.MONGO_PORT || '27017') +
    '/mernproject',
  stripe_connect_test_client_id: 'ca_FkyHCg7X8mlvCUdMDao4mMxagUfhIwXb',
  stripe_test_secret_key: 'sk_test_51O7b89IWqX7WdZyuduC9t4Vy8CDNwYfS9Ql4sANkllhULkMHJMsY7HzI6CHWbopmmt69q8qP68nCj0h5SyHLshbh00BCI66We5',
  stripe_test_api_key: 'pk_test_51O7b89IWqX7WdZyuZv6rAsI8O16HRTtmKAwBkaw6KRHKSMVoFs0KwFOG1g9J1R8RPARlijAuPpULk5tfahKiCXJt00bxyHXFuq' 
}

export default config
