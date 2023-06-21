node {
    stage('Checkout') {
        checkout scm
    }
    stage('Build') {
        docker.image('node:16-alpine').inside {
            sh '''
                node --version
                apk add --update --no-cache zip
                zip example.zip main.js
            '''
        }
    }
    stage('Deploy') {
        docker.image('amazon/aws-cli').inside {
            sh '''
                aws --version
            '''
        }
    }
}
