pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git url: 'https://github.com/your-org/sample-repo.git', branch: 'main'
            }
        }

        stage('Run Tests') {
            steps {
                echo 'Running sample tests...'
                sh './scripts/run-tests.sh' // Replace with your actual test script
            }
        }
    }

    post {
        success {
            echo '✅ Tests passed successfully!'
        }
        failure {
            echo '❌ Tests failed. Check logs for details.'
        }
    }
}
