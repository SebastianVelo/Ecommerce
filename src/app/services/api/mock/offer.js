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
JG.repeat(200, 400, {
    id: JG.objectId(),
    title: JG.random('Software Engineer', 'Software Developer', 'Data Engineer', 'BI Analyst', 'DevOps Engineer', 'QA Engineer', 'Team Leader'),
    salary: JG.random({
        min: JG.integer(2000, 4500),
        max: JG.integer(5000, 11000),
        currency: JG.random('USD', 'EUR')
    }, null),
    company: {
        name: JG.company(),
        avatar() {
            return 'https://avatars.dicebear.com/api/' + JG.random('identicon', 'bottts', 'jdenticon', 'gridy') + '/' + this.name + '.svg';
        },
        employees: JG.integer(40, 80000),
        email() {
            return (
                'jobs@' +
                this.name +
                JG.domainZone()
            ).toLowerCase();
        },
    },
    skills: JG.repeat(1, 4, {
        rating: JG.integer(1, 5),
        name: JG.random('React', 'Angular', 'Python', 'Java', 'Scala', 'SQL', 'R', 'Javascript', 'HTML', 'php', 'Ruby')
    }),
    requirements: JG.repeat(1, 6, JG.loremIpsum({ units: 'words', count: JG.integer(2, 10) })),
    niceToHave: JG.repeat(1, 6, JG.loremIpsum({ units: 'words', count: JG.integer(2, 10) })),
    dateCreated: new Date(2021, JG.integer(9, 12), JG.integer(1, 30)),
    description: JG.loremIpsum({ units: 'sentences', count: JG.integer(2, 10) }),
    seniority: JG.random('Junior', 'Mid', 'Senior', 'Expert'), location: {
        name: JG.city(),
        lat: JG.floating(-90, 90, 6),
        long: JG.floating(-180, 180, 6),
    },
    tags() {
        return new Set(this.skills.map(s => s.name));
    },
    type: JG.random('Fully remote')
});

*/
