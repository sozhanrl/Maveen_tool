pipeline { 
    agent any 
 
    tools { 
        maven 'M3' 
    } 
 
    stages { 
        stage('Checkout Git') { 
            steps { 
                git branch: 'main', 
                    url: '<your-repository-url>' 
            } 
        } 
 
        stage('Build and Test') { 
            steps { 
                bat 'mvn clean test' 
            } 
        } 
    } 
}