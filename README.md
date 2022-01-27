## Overview

PerfAnalytics is an ecosystem which collects and criticizes web performance data. The ecosystem consists
of 3 subsystem;

* Reporter (JS Library)
* API
* Dashboard

### API

Developed by Node.js, MongoDB and also mongoose for lightweight database management. 

#### EndPoints

Try the app with this base url [https://performance-analytics-app.herokuapp.com](https://performance-analytics-app.herokuapp.com)

* /dasboard (GET) -> Dashboard app
* /reporter (GET) -> JS library for performance analytics 
* /measures (GET) -> Result of performance analysis. It needs;
  * startDate (Date): Minimum value in the time range
  * endDate (Date): Maximum value in the time range
  * id : Site url id
* /sites (GET) -> All sites
* /test-app (GET) -> test for performance analysis
* /measures (POST) -> send performance measures

### JS Library (Reporter)

Lightweight, zero dependicies, client-side library written in Javascript without any framework and bundles with webpack.
It collects some performance related keys metrics from  browser and send it to API.

#### Usage

Import following scripts into your HTML and that's all.

```html
<script src="https://performance-analytics-app.herokuapp.com/reporter"></script>
```

### Dashboard

Written in Vue.js, axios and chart.js.

## Scripts

1. Install npm packages for all with `npm install:all`
1. Install npm packages for api with `npm install`
1. Install npm packages for dashboard with `npm install:dashboard`
1. Install npm packages for reporter with `npm install:reporter`
1. Start API with `npm start`
1. Build the all app with `npm build`

## Environments

* DB_CONNECTION = MongoDB connection url

## Deployment

* Heroku as free providers is used for automated deployments.
* It is synchronous with Github "master" repo to automated deploy.

* Normally Heroku wait sleep mode, For that reason make you wait nearly 15 second at first request.

