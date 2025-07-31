pipeline {
    agent any

    stages {
        stage('Clone Repo') {
            steps {
                git url: 'https://github.com/ssagarshiva/nodejs.git', branch: 'jenkins'
            }
        }

        stage('Say Hello') {
            steps {
                echo '👋 Hello, Jenkins Pipeline!'
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
