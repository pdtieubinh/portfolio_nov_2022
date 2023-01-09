export const profile = [
    {
        id: 'WhatsApp',
        info: '+358 414805030',
        link: 'https://res.cloudinary.com/dbweq69kp/image/upload/v1673293300/Certificates/whatsapp_pafsge.png'
    },
    {
        id: 'Email',
        info: 'binh.pham5918@gmail.com',
        link: 'https://res.cloudinary.com/dbweq69kp/image/upload/v1673292728/Certificates/gmail_vzl1gr.png'
    },
    {
        id: 'LinkedIn',
        info: 'https://www.linkedin.com/in/binh-pham-aab6a719a/',
        link: 'https://res.cloudinary.com/dbweq69kp/image/upload/v1673291696/Certificates/linkedin_lfjhlq.jpg',
    },
    {
        id: 'GitHub',
        info: 'https://github.com/pdtieubinh',
        link: 'https://res.cloudinary.com/dbweq69kp/image/upload/v1673291696/Certificates/github_acpvjl.jpg'
    }
]

export const certified = [
    {
        id: 'AWS Certified Cloud Practitioner',
        by: 'Amazon Web Services',
        exam: 'CLF-C01',
        link: 'https://res.cloudinary.com/dbweq69kp/image/upload/v1672685748/Certificates/aws_phg9po.png',
        topic: 'Cloud Computing',
    },
    {
        id: 'Azure Data Fundametals',
        by: 'Microsoft',
        exam: 'DP-900',
        link: 'https://res.cloudinary.com/dbweq69kp/image/upload/v1672685749/Certificates/azdata_a7c0u1.png',
        topic: 'Cloud Computing',
    },
    {
        id: 'Azure Fundamentals',
        by: 'Microsoft',
        exam: 'AZ-900',
        link: 'https://res.cloudinary.com/dbweq69kp/image/upload/v1672685828/Certificates/az_jenb8d.png',
        topic: 'Cloud Computing',
    },
    {
        id: 'Professional Scrum Master I',
        by: 'Scrum.org',
        exam: 'PSM I',
        link: 'https://res.cloudinary.com/dbweq69kp/image/upload/v1672738391/Certificates/psmi_xq2gu9.png',
        topic: 'Scrum & Agile'
    }
]

export const experiences = [
    {
        id: 'ABB',
        position: 'Incoming Data Analytics Intern',
        length: 0,
        rate: 14.5,
        avgRate: 20,
        benefit: 0,
        size: 105600,
        type: 'Internship',
        from: new Date(2023, 0, 12),
        to: new Date(2023, 3, 12),
        link: 'https://res.cloudinary.com/dbweq69kp/image/upload/v1672681478/Portfolio/abb_clmt7p.jpg',
        desc: [
            <p key={1}>To be updated</p>
        ],
        place: 'Helsinki, Finland',
        languages: ['Python'],
        field: 'Data Science'
    },
    {
        id: 'FNZ Group',
        position: 'Graduate Analyst Developer',
        length: 1,
        rate: 19.79,
        avgRate: 20,
        benefit: 1000,
        size: 4000,
        type: 'Full-time',
        from: new Date(2022, 11, 5),
        to: new Date(2023, 0, 9),
        link: 'https://res.cloudinary.com/dbweq69kp/image/upload/v1672681085/Portfolio/fnz_lcxchr.jpg',
        desc: [
            <p key={1}>Complete training on web software development:</p>,
            <p key={2}>- C#, ASP.NET</p>,
            <p key={3}>- Model Control View (MVC)</p>,
            <p key={4}>- SQL Databases, SQL Server Management Studio</p>,
            <p key={5}>- JavaScript, React</p>,
            <p key={6}>- Git, GitLab</p>
        ],
        place: 'Helsinki, Finland',
        languages: ['C#', 'JavaScript', 'SQL'],
        field: 'Software Engineering'
    },
    {
        id: 'Huawei',
        position: 'Information Technology Intern',
        length: 0.5,
        rate: 15,
        avgRate: 20,
        benefit: 500,
        size: 195000,
        type: 'Internship',
        from: new Date(2022, 9, 31),
        to: new Date(2022, 10, 23),
        link: 'https://res.cloudinary.com/dbweq69kp/image/upload/v1672681030/Portfolio/huawei_xykzuz.jpg',
        desc: [
            <p key={1}>Complete training on multiple technological fields:</p>,
            <p key={2}>- 5G and information communication technologies</p>,
            <p key={3}>- Artificial intelligence and machine learning</p>,
            <p key={4}>- Cloud computing services</p>
        ],
        place: 'Helsinki, Finland',
        languages: ['Python'],
        field: 'Information Communication Technologies'
    },
    {
        id: 'Elisa',
        position: 'Software Developer Intern',
        length: 4,
        rate: 17.33,
        avgRate: 20,
        benefit: 330,
        size: 5097,
        type: 'Internship',
        from: new Date(2022, 4, 1),
        to: new Date(2022, 8, 1),
        link: 'https://res.cloudinary.com/dbweq69kp/image/upload/v1672681239/Portfolio/elisa_vgpqhq.jpg',
        desc: [
            <p key={1}>- Designed and implemented a structured database schema to store <b>100+</b> GB of global user data</p>,
            <p key={2}>- Built automated machine learning features to optimise the models and hyper-parameters selection process</p>,
            <p key={3}>- Technology stack: Python, SQL, Pandas, scikit-learn, Azure, Databricks, MLflow, AutoML</p>
        ],
        place: 'Helsinki, Finland',
        languages: ['Python', 'SQL'],
        field: 'Software Engineering'
    },
    {
        id: 'Futurice',
        position: 'Data Specialist Intern',
        length: 3.5,
        rate: 12.86,
        avgRate: 20,
        benefit: 400,
        size: 675,
        type: 'Internship',
        from: new Date(2022, 0, 13),
        to: new Date(2022, 3, 15),
        link: 'https://res.cloudinary.com/dbweq69kp/image/upload/v1672681142/Portfolio/futurice_ep92h7.jpg',
        desc: [
            <p key={1}>- Initiated and built an API validation solution that automates the testing process for the entire team</p>,
            <p key={2}>- The built solution saves over <b>90%</b> of testing time by simplifying testing from writing hundreds of lines of code to calling a single command that achieves even more consistent results</p>,
            <p key={3}>- The automation solution hence saves the team <b>2,000+</b> euros on monthly operational cost</p>,
            <p key={4}>- Technology stack: Python, pytest, AWS S3, Azure, YAML, JSON</p>
        ],
        place: 'Helsinki, Finland',
        languages: ['Python'],
        field: 'Data Science'
    },
    {
        id: 'Aalto University',
        position: 'Teaching Assistant',
        length: 3,
        rate: 12.64,
        avgRate: 20,
        benefit: 0,
        size: 4200,
        type: 'Fixed-term',
        from: new Date(2021, 3, 16),
        to: new Date(2021, 5, 13),
        link: 'https://res.cloudinary.com/dbweq69kp/image/upload/v1672683503/Portfolio/aalto_k83ote.jpg',
        desc: [
            <p key={1}>Course CS-A1153 Databases for Data Science:</p>,
            <p key={2}>- Mentored a class of <b>30</b> BSc. & MSc. students on SQL data management and Python data analytics</p>,
            <p key={3}>- Co-designed and created a project topic for over <b>50</b> students simulating the COVID-19 vaccine distribution process</p>,
            <p key={4}>- Organised exercise feedback sessions that helps improve students' grades by over <b>20%</b></p>,
            <p key={5}>- Technology stack: Python, SQL, Matplotlib, Seaborn</p>
        ],
        place: 'Espoo, Finland',
        languages: ['Python', 'SQL'],
        field: 'Others'
    },
    {
        id: 'Upwork',
        position: 'Game Developer',
        length: 0.8,
        rate: 6.25,
        avgRate: 20,
        benefit: 0,
        size: 2,
        type: 'Fixed-term',
        from: new Date(2021, 1, 1),
        to: new Date(2021, 2, 1),
        link: 'https://res.cloudinary.com/dbweq69kp/image/upload/v1672681325/Portfolio/upwork_gozwxs.jpg',
        desc: [
            <p key={1}>- Analysed requests and consulted clients on structuring game features that ensure attractiveness and technical feasibility</p>,
            <p key={2}>- Established and presented to clients a complete plan for design, development, and tests of the game</p>,
            <p key={3}>- Built and delivered the game from scratch; the contract was rated <b>5</b> stars based on the product quality</p>,
            <p key={4}>- Technology stack: C#, Unity (game engine), Adobe Photoshop</p>
        ],
        place: 'Remote, Ireland',
        languages: ['C#'],
        field: 'Software Engineering'
    },
]

export const educations = [
    {
        id: 'Aalto University',
        degree: 'BSc. Data Science',
        link: 'https://res.cloudinary.com/dbweq69kp/image/upload/v1672683503/Portfolio/aalto_k83ote.jpg'
    },
    {
        id: 'High School for The Gifted - VNU',
        degree: 'High School Diploma, Mathematics',
        link: 'https://res.cloudinary.com/dbweq69kp/image/upload/v1672685481/Portfolio/ptnk_fzgqbj.jpg'
    }
]

export const moocs = [
    {
        id: 'The Web Developer Bootcamp 2021',
        by: 'Udemy',
        instructor: 'Colt Steel',
        link: 'https://res.cloudinary.com/dbweq69kp/image/upload/v1673008491/mooc/udemy_qf5a4m.jpg',
        topic: 'Software Engineering',
        provider: 'Udemy'
    },
    {
        id: 'Google Data Analytics',
        by: 'Google on Coursera',
        instructor: 'Google Analytics team',
        link: 'https://res.cloudinary.com/dbweq69kp/image/upload/v1673008487/mooc/google_njrcuo.jpg',
        topic: 'Data Analytics',
        provider: 'Coursera'
    },
    {
        id: 'Deep Learning Specialisation',
        by: 'DeepLearning.AI on Coursera',
        instructor: 'Adrew Ng.',
        link: 'https://res.cloudinary.com/dbweq69kp/image/upload/v1673008483/mooc/deeplearning_n2hw5m.jpg',
        topic: 'Machine Learning / AI',
        provider: 'Coursera'
    },
    {
        id: 'Machine Learning',
        by: 'Stanford Online on Coursera',
        instructor: 'Andrew Ng.',
        link: 'https://res.cloudinary.com/dbweq69kp/image/upload/v1673008480/mooc/stanford_zuqxxj.jpg',
        topic: 'Machine Learning / AI',
        provider: 'Coursera'
    }
]