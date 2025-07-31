pipeline {
    agent any

    tools {
       nodejs 'Node.js ' // Match the name you gave in step 2
      }

    stages {
        stage('Clone Repo') {
            steps {
                git url: 'https://github.com/ssagarshiva/nodejs.git', branch: 'jenkins'
            }
        }

        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
    }

    post {
        success {
            echo '✅ Pipeline executed successfully!'
        }
        failure {
            echo '❌ Pipeline failed.'
        }
    }
}
