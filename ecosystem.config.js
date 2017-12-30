module.exports = {
  apps: [{
    name: 'rob',
    script: './bin/www'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-34-213-64-184.us-west-2.compute.amazonaws.com',
      key: '~/.ssh/USwestUbuntu.pem',
      ref: 'origin/master',
      repo: 'git@github.com:robmclaughliniv/mytestapp.git',
      path: '/home/ubuntu/mytestapp',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
