class OfferModel {
    offer;

    constructor(offer) {
        this.offer = offer;
    }

    get createdDays() {
        const diff = Math.abs(new Date() - this.offer.dateCreated);
        const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
        return days > 2 ? `${days}d ago` : "New";
    }

    get description() {
        return this.offer.description;
    }

    get skills() {
        return this.offer.skills;
    }

    get seniority() {
        return this.offer.seniority ?? '';
    }

    get idPath() {
        return `/offer/${this.offer.id}`
    }

    get title() {
        return this.offer.title;
    }

    get tags() {
        return this.offer.tags ?? [];
    }

    get contractor() {
        return this.offer.contractor ?? '';
    }

    get location() {
        return this.offer.location ?? '';
    }

    get type() {
        return this.offer.type ?? '';
    }

    formatSalary = () => {
        return `${this.offer.salary.min.toLocaleString()} - ${this.offer.salary.max.toLocaleString()} ${this.offer.salary.currency}`;
    }

    undisclosedSalary = () => {
        return `Undisclosed Salary`;
    }

    get salary() {
        return this.offer.salary ? this.formatSalary() : this.undisclosedSalary();
    }
}

export default OfferModel;