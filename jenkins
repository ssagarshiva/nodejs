pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "my-app-image"
        ECR_REPO = "123456789012.dkr.ecr.us-east-1.amazonaws.com/my-app"
    }

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/your-org/your-repo.git', branch: 'main'
            }
        }

        stage('Build') {
            steps {
                echo 'Building the application...'
                sh 'make build' // or your build command
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                sh 'make test' // or your test command
            }
        }

        stage('Docker Build & Push') {
            steps {
                script {
                    sh """
                    aws ecr get-login-password | docker login --username AWS --password-stdin $ECR_REPO
                    docker build -t $DOCKER_IMAGE .
                    docker tag $DOCKER_IMAGE $ECR_REPO:$BUILD_NUMBER
                    docker push $ECR_REPO:$BUILD_NUMBER
                    """
                }
            }
        }

        stage('Deploy to EKS') {
            steps {
                echo 'Deploying to Kubernetes...'
                sh 'kubectl apply -f k8s/deployment.yaml'
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}
