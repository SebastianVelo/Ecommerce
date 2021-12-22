export default {
    id: "123456",
    title: "Position",
    salary: {
        min: 10000,
        max: 20000,
        currency: "USD",
    },
    company: {
        name: "Contractor",
        avatar: "https://picsum.photos/640/480",
        employees: 700
    },
    skills: [
        {
            level: 'advanced',
            rating: 3,
            name: 'React'
        },
    ],
    dateCreated: new Date("2021-12-01"),
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lectus dolor, rhoncus non faucibus eget, luctus eu neque. Nunc porta viverra scelerisque. Donec velit nibh, venenatis vitae aliquet quis, consequat nec mauris. Maecenas eget risus odio. Proin pellentesque euismod nibh, sit amet ullamcorper leo consectetur quis. Proin euismod purus vitae enim iaculis commodo. Donec vel urna ut libero viverra eleifend.",
    seniority: 'Mid',
    location: "Location",
    type: "Type",
    tags: ["lang1", "lang", "lang3"],
};
/*
https://api.json-generator.com/templates/2jR5d2mhJJCm/data
JG.repeat(5, 10, {
    id: JG.objectId(),
    title: JG.random('Software Engineer', 'Software Developer', 'Data Engineer', 'BI Analyst', 'DevOps Engineer', 'QA Engineer', 'Team Leader'),
    salary: {
        min: JG.integer(2000, 4500),
        max: JG.integer(5000, 11000),
        currency: JG.random('USD', 'EUR')
    },
    company: {
        name: JG.company(),
        avatar: "https://picsum.photos/640/480",
        employees: JG.integer(40, 80000),
        email() {
            return (
                'jobs@' +
                this.company.name +
                JG.domainZone()
            ).toLowerCase();
        },
    },
    skills: JG.repeat(1, 7, {
        rating: JG.integer(1, 5),
        name: JG.random('React', 'Angular', 'Python', 'Java', 'Scala', 'SQL', 'R')
    }),
    dateCreated: new Date(2021, JG.integer(9, 12), JG.integer(1, 30)),
    description: JG.loremIpsum({ units: 'sentences', count: 2 }),
    seniority: JG.random('Junior', 'Mid', 'Senior', 'Expert'), location: {
        lat: JG.floating(-90, 90, 6),
        long: JG.floating(-180, 180, 6),
    },
    tags() {
        return this.skills.map(s => s.name);
    },
});*/
