const getCreatedDays = (offer) => {
    const diff = Math.abs(new Date() - offer.dateCreated);
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return days > 2 ? `${days}d ago` : "New";
}

const formatSalary = (offer) => {
    return `${offer.salary.min.toLocaleString()} - ${offer.salary.max.toLocaleString()} ${offer.salary.currency}`;
}

const undisclosedSalary = () => {
    return `Undisclosed Salary`;
}

const getSalary = (offer) => offer.salary ? formatSalary(offer) : undisclosedSalary();

const getActionsRow = () => ({
    actions: [
        {
            label: "Back",
            type: "button"
        },
        {
            label: "Share",
            type: "button"
        },
    ]
});

const getDetailRow = (offer) => ({
    avatar: {
        src: offer.contractor.avatar,
        alt: offer.contractor.name
    },
    title: offer.title,
    location: offer.location,
    salary: getSalary(offer),
});

const getInfoCardsRow = (offer) => ({
    cards: [
        {
            key: 'Company name',
            value: offer.contractor.name,
        },
        {
            key: 'Company size',
            value: offer.contractor.employees,
        },
        {
            key: 'EXP. lvl',
            value: offer.seniority,
        },
        {
            key: 'Added',
            value: getCreatedDays(offer),
        },
    ]
});

const getOfferDetailHeader = (offer) => ({
    actionsRow: getActionsRow(),
    detailRow: getDetailRow(offer),
    infoCardsRow: getInfoCardsRow(offer),
});

export default getOfferDetailHeader;