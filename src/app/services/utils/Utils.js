class Utils {

    /**-------------------------------------------------- */
    static getSalary(offer) {
        const formatSalary = (offer) => `${offer.salary.min.toLocaleString()} - ${offer.salary.max.toLocaleString()} ${offer.salary.currency}`;
        const undisclosedSalary = () => `Undisclosed Salary`;
        return offer.salary ? formatSalary(offer) : undisclosedSalary();
    }

    static getCreatedDays(offer) {
        const diff = Math.abs(new Date() - offer.dateCreated);
        const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
        return days > 2 ? `${days}d ago` : "New";
    }

    /**-------------------------------------------------- */
    static getCompanyPath(offer) {
        return `/${offer.company.name}/offers`;
    }

    static getOfferDetailPath(offer) {
        return `/offer/${offer.id}`;
    }
    /**-------------------------------------------------- */

    /**-------------------------------------------------- */
    static techColors() {
        return {
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
    }

    static seniorityColors() {
        return {
            junior: 'bg-indigo-500',
            mid: 'bg-sky-600',
            senior: 'bg-orange-500',
            expert: 'bg-red-500'
        };
    }

    static pillColorDefault() {
        return 'bg-primary text-gray-900';
    }

    static getSeniorityColor(seniority) {
        return Utils.seniorityColors()[seniority.toLowerCase()] || Utils.pillColorDefault();
    }

    static getTechColor(tech) {
        return /*Utils.techColors()[tech.toLowerCase()] ||*/ Utils.pillColorDefault();
    }

    /**-------------------------------------------------- */
}

export default Utils;