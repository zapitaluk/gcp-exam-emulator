export const exams = [
    {
        id: 'cdl',
        name: 'Cloud Digital Leader',
        questions: [
            {
                id: 1,
                text: "Which Google Cloud service is best suited for storing unstructured data like images and videos?",
                type: "single",
                section: "Infrastructure and Application Modernization",
                options: [
                    "Cloud SQL",
                    "Cloud Spanner",
                    "Cloud Storage",
                    "BigQuery"
                ],
                correctAnswer: ["Cloud Storage"]
            },
            {
                id: 2,
                text: "You want to deploy a containerized application without managing the underlying infrastructure. Which service should you use?",
                type: "single",
                section: "Infrastructure and Application Modernization",
                options: [
                    "Compute Engine",
                    "Cloud Run",
                    "Google Kubernetes Engine (Standard)",
                    "Bare Metal Solution"
                ],
                correctAnswer: ["Cloud Run"]
            },
            {
                id: 3,
                text: "Which of the following are benefits of using cloud computing? (Select two)",
                type: "multi",
                section: "Digital Transformation with Google Cloud",
                options: [
                    "100% uptime guarantee",
                    "Scalability",
                    "Pay-as-you-go pricing",
                    "Physical hardware ownership"
                ],
                correctAnswer: ["Scalability", "Pay-as-you-go pricing"]
            },
            {
                id: 4,
                text: "Which Google Cloud service is a serverless, highly scalable, and cost-effective data warehouse?",
                type: "single",
                section: "Innovating with Data and Google Cloud",
                options: [
                    "Cloud Bigtable",
                    "BigQuery",
                    "Cloud SQL",
                    "Firestore"
                ],
                correctAnswer: ["BigQuery"]
            },
            {
                id: 5,
                text: "What is the primary purpose of Google Cloud Identity and Access Management (IAM)?",
                type: "single",
                section: "Google Cloud Security and Operations",
                options: [
                    "To manage network firewalls",
                    "To define who has access to what resources",
                    "To encrypt data at rest",
                    "To monitor application performance"
                ],
                correctAnswer: ["To define who has access to what resources"]
            },
            {
                id: 6,
                text: "Which service allows you to build, deploy, and manage machine learning models?",
                type: "single",
                section: "Innovating with Data and Google Cloud",
                options: [
                    "Vertex AI",
                    "Dataproc",
                    "Dataflow",
                    "Pub/Sub"
                ],
                correctAnswer: ["Vertex AI"]
            },
            {
                id: 7,
                text: "Which Google Cloud operational tool allows you to view logs from your applications?",
                type: "single",
                section: "Google Cloud Security and Operations",
                options: [
                    "Cloud Trace",
                    "Cloud Logging",
                    "Cloud Profiler",
                    "Cloud Monitoring"
                ],
                correctAnswer: ["Cloud Logging"]
            },
            {
                id: 8,
                text: "What is the difference between CapEx and OpEx in the context of cloud computing?",
                type: "single",
                section: "Digital Transformation with Google Cloud",
                options: [
                    "CapEx is for operational costs, OpEx is for capital investments",
                    "CapEx is an upfront cost, OpEx is a pay-as-you-go cost",
                    "There is no difference",
                    "Cloud computing only uses CapEx"
                ],
                correctAnswer: ["CapEx is an upfront cost, OpEx is a pay-as-you-go cost"]
            }
        ]
    },
    {
        id: 'gail',
        name: 'Generative AI Leader',
        questions: []
    },
    {
        id: 'pde',
        name: 'Professional Data Engineer',
        questions: []
    },
    {
        id: 'cpde',
        name: 'Cloud Professional Data Engineer',
        questions: []
    }
];
