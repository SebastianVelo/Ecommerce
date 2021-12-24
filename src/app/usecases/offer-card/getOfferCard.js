import getSalary from "../common/getSalary";

const getPath = (offer) => `/offer/${offer.id}`;

const seniorityColors = {
    junior: 'bg-indigo-500',
    mid: 'bg-sky-600',
    senior: 'bg-orange-500',
    expert: 'bg-red-500'
};

const techColors = {
    java: 'bg-red-500',
    angular: 'bg-red-600',
    ruby: 'bg-red-600',
    scala: 'bg-red-700',
    python: 'bg-blue-300 text-black',
    php: 'bg-indigo-600',
    javascript: 'bg-yellow-300 text-black',
    html: 'bg-orange-600',
    r: 'bg-blue-700',
    sql: 'bg-blue-100 text-black',
    react: 'bg-sky-300 text-black'
};

const getSeniorityPillColor = (seniority) => {
    return seniorityColors[seniority.toLowerCase()] || 'bg-primary';
};

const getTechPillColor = (tech) => {
    return 'bg-primary-light text-black'//techColors[tech.toLowerCase()] || 'bg-primary';
};

const getOfferCard = (offer) => ({
    avatar: {
        src: offer.company.avatar,
        alt: offer.company.name,
    },
    title: {
        label: offer.title,
        path: getPath(offer)
    },
    salary: getSalary(offer),
    company: `🏢 ${offer.company.name}`,
    location: `📍 ${offer.location.name}`,
    seniority: {
        label: offer.seniority,
        color: getSeniorityPillColor(offer.seniority)
    },
    tags: [...new Set(offer.tags)].sort().map(tag => ({
        label: tag,
        color: getTechPillColor(tag)
    })),
});

export default getOfferCard;