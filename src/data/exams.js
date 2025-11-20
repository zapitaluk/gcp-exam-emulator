export const exams = [
    {
        id: 'cdl',
        name: 'Cloud Digital Leader',
        questions: [
            {
                id: 1,
                text: "Which Google Cloud service is best suited for storing unstructured data like images and videos?",
                type: "single",
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
                options: [
                    "100% uptime guarantee",
                    "Scalability",
                    "Pay-as-you-go pricing",
                    "Physical hardware ownership"
                ],
                correctAnswer: ["Scalability", "Pay-as-you-go pricing"]
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
