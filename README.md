cloudfoundry-deployd
====================

An example of how to deploy deployd to pivotal CF.  Deployd is an API engine that is great for creating API's for mobile and web apps.  Read more here:  http://deployd.com/

This will require a MongoDB service bound to the application.  The manifest points to a service called mongo-deployd (this can be changed to whatever you like).

example: cf create-service mongolab sandbox mongo-deployd

Simply create the service, and perform a cf push.  Once deployed, you can access the dashboard by adding /dashboard to your URL.

Currently deploying using development environment so that keys are not required for dashboard access. 
