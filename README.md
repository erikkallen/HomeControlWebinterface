HomeControlWebinterface
=======================

Webinterface for controlling stuff around my house eventually this will run on my Rasberry Pi

## Prerequisits

- Node.js
- MongoDB
- Yeoman ( npm install -g yeoman )

## Installing

Clone this repository
```git clone git@github.com:erikkallen/HomeControlWebinterface.git```

Change to repository dir
```cd HomeControlWebinterface```

Install npm dependencies
```npm install```

Running a development server ( Make sure mongodb is running )
```grunt serve```

Running a production server

```grunt build && cd dist && NODE_ENV=production node server.js```
