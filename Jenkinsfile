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
        docker.image('amazon/aws-cli').inside('--entrypoint=') {
            withCredentials([usernamePassword(credentialsId: 'aws.deploy.credentials', usernameVariable: 'ACCESS_KEY', passwordVariable: 'SECRET_KEY')]) {
                sh '''
                    aws --version
                    ls -la
                    export AWS_ACCESS_KEY_ID=$ACCESS_KEY
                    export AWS_SECRET_ACCESS_KEY=$SECRET_KEY
                    aws lambda list-functions --region eu-central-1
                '''
            }
        }
    }
}
