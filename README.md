# AWS Pinpoint Plugin for OpenSearch Dashboards

## What
This plugin incorporate AWS Pinpoint into [OpenSearch Dashboards](https://github.com/opensearch-project/OpenSearch-Dashboards) by taking advantage of [aws-amplify](https://docs.amplify.aws/lib/q/platform/js/) module.
This plugin enabled 2 configurations for OpenSearch Dashboards
- awspinpoint_analytics_plugin.enabled with default set to true which allows to switch the plugin on/off
- awspinpoint_analytics_plugin.pinpointPoolId with default set to empty which is the identity pool Id you set up with your AWS account

## How to use
1. Local build and test using docker
- fork [open search dashboard repo](https://github.com/opensearch-project/OpenSearch-Dashboards) to your own repository, and switch to the branch/tag you would like
- run `yarn osd bootstrap` to install dependencies needed to build the plugin, note here you are at the project root directory
- go to plugins folder inside opensearch-dashboards, git pull this plugin repo, note this should be done in plugins folder
- inside plugins folder, run `nvm use && yarn install`
- inside plugins folder, run `yarn build —opensearch-dashboards-version=<version name>`
- update necessary configs inside config/opensearch_dashboards.yml, this yml file will replace the one in the official image for local experiment
- run `docker-compose up -d`, and if you encounter error in docker authentication, please run `docker login`
- go to http://0.0.0.0:5601/app/home#/ and enter credentials to login, and if you already set up Pinpoint Analytics, you will see traffic data started coming in
2. Use zip file in production
- follow step 1 to build the plugin inside the plugin folder
- find the built artifact zipped inside build folder

## Set Up AWS PinPoint 
1. Create AWS account or use existing one
2. In `Services` type and select Pinpoint, click `manage projects` if you already have projects, or enter the project name and click `create a project`
3. In `Configure features`, select `Web app analytics` and hit `configure`. 
4. Follow the steps listed in `To Integrate the AWS Amplify library into your web apps` and hit save

## Releases
