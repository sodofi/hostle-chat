# slide-vlogs

## Setting up project in expo
###### npm install expo-cli --global
###### expo init myReactNativeProject
###### cd myReactNativeProject
###### expo start
## Adding project to GitHub
###### open gitHub desktop --> create new repository --> add local path --> publish repository
## Setting up Backend
##### Initialize Aplify Project
###### npm install -g @aws-amplify/cli
###### amplify configure --> region --> username
###### accessKeyId --> secretAccessKey
##### Initialize a new backend
###### amplify init
###### npm install aws-amplify aws-amplify-react-native @react-native-community/netinfo @react-native-async-storage/async-storage
###### add to App.js --> import Amplify from 'aws-amplify' --> import config from './aws-exports' --> Amplify.configure(config)
###### aplify publish --> to deploy everything
##### Initialize GraphQL API
###### amplify add api --> to create a backend API --> graphQL --> API key --> one-to-many relationship
##### Edit Schema
###### ./amplify/backend/api/schema.graphql
###### amplify push --> build all local backend resources and provisions it in the cloud
###### amplify publish --> build all your local backend and frontend resources
###### amplify console api --> open up console
###### amplify status --> gives current status of Amplify project
