import getSalary from "../common/getSalary";

const getPath = (offer) => `/offer/${offer.id}`

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
    seniority: offer.seniority,
    tags: [...offer.tags],
});

export default getOfferCard;