import Utils from "../../utils/Utils";

class OfferCardService {

    static getAvatar(offer) {
        return {
            src: offer.company.avatar,
            alt: offer.company.name,
        };
    }

    static getTitle(offer) {
        return {
            label: offer.title,
            path: Utils.getOfferDetailPath(offer)
        };
    }

    static getCompany(offer) {
        return {
            label: `🏢 ${offer.company.name}`,
            path: Utils.getCompanyPath(offer)
        }
    }

    static getLocation(offer) {
        return `📍 ${offer.location.name}`;
    }

    static getSeniority(offer) {
        return {
            label: offer.seniority,
            color: Utils.getSeniorityColor(offer.seniority)
        }
    }

    static getTags(offer) {
        return offer.tags.sort().map(tag => ({
            label: tag,
            color: Utils.getTechColor(tag)
        }))
    }

    static get(offer) {
        return {
            avatar: OfferCardService.getAvatar(offer),
            title: OfferCardService.getTitle(offer),
            salary: Utils.getSalary(offer),
            company: OfferCardService.getCompany(offer),
            location: OfferCardService.getLocation(offer),
            seniority: OfferCardService.getSeniority(offer),
            tags: OfferCardService.getTags(offer),
        }
    };
}

export default OfferCardService; 