pipeline {
    agent any

    tools {
       nodejs 'Node.js' // Match the name you gave in step 2
      }

    stages {
        stage('Clone Repo') {
            steps {
                git url: 'https://github.com/ssagarshiva/nodejs.git', branch: 'jenkins'
            }
        }

        stage('install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage( 'docker build') {
            steps {
                sh 'docker build -t nodejs-app .'
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
