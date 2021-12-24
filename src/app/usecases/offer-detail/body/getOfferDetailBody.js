const getLevel = (rating) => {
    const levels = ['nice to have', 'junior', 'regular', 'advanced', 'expert']
    return levels[rating - 1];
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
    title: "Job description",
    data: {
        description: offer.description
    }
});

const getRequirements = (offer) => ({
    title: "Requirements",
    data: {
        items: offer.requirements
    }
});

const getNiceToHave = (offer) => ({
    title: "Nice to have",
    data: {
        items: offer.niceToHave
    }
});

const getOfferDetailBody = (offer) => ({
    techStack: getTechStack(offer),
    description: getDescription(offer),
    requirements: getRequirements(offer),
    niceToHave: getNiceToHave(offer)
});

export default getOfferDetailBody;