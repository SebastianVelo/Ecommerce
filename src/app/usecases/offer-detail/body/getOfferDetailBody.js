const getLevel = (rating) => {
    const levels = ['nice to have', 'junior', 'regular', 'advanced', 'expert']
    return levels[rating-1];
}

const getTechStack = (offer) => ({
    title: "Tech stack",
    data: {
        skills: offer.skills.map(skill => ({
            ...skill,
            level: getLevel(skill.rating)
        }))
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