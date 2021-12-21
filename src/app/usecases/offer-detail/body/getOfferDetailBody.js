const getTechStack = (offer) => ({
    title: "Tech stack",
    data: {
        skills: offer.skills
    }
});

const getDescription = (offer) => ({
    title: "Description",
    data: {
        description: offer.description
    }
});

const getOfferDetailBody = (offer) => ({
    techStack: getTechStack(offer),
    description: getDescription(offer),
});

export default getOfferDetailBody;