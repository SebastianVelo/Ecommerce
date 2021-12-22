const formatSalary = (offer) => {
    return `${offer.salary.min.toLocaleString()} - ${offer.salary.max.toLocaleString()} ${offer.salary.currency}`;
}

const undisclosedSalary = () => {
    return `Undisclosed Salary`;
}

const getSalary = (offer) => offer.salary ? formatSalary(offer) : undisclosedSalary();

export default getSalary;