import getSalary from "../../common/getSalary";

const getCreatedDays = (offer) => {
    const diff = Math.abs(new Date() - offer.dateCreated);
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return days > 2 ? `${days}d ago` : "New";
}

const getActionsRow = () => ({
    actions: [
        {
            label: "◄",
            path: "/offers"
        },
    ]
});

const getDetailRow = (offer) => ({
    avatar: {
        src: offer.company.avatar,
        alt: offer.company.name
    },
    title: offer.title,
    location: offer.location.name,
    salary: getSalary(offer),
});

const getInfoCardsRow = (offer) => ({
    cards: [
        {
            key: 'Company name',
            value: offer.company.name,
        },
        {
            key: 'Company size',
            value: offer.company.employees,
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