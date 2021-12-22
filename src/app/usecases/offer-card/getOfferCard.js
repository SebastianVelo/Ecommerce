import getSalary from "../common/getSalary";

const getPath = (offer) => `/offer/${offer.id}`

const getOfferCard = (offer) => ({
    avatar: {
        src: offer.contractor.avatar,
        alt: offer.contractor.name,
    },
    title: {
        label: offer.title,
        path: getPath(offer)
    },
    salary: getSalary(offer),
    contractor: `🏢 ${offer.contractor.name}`,
    location: `📍 ${offer.location}`,
    type: offer.type,
    tags: [...offer.tags],
});

export default getOfferCard;