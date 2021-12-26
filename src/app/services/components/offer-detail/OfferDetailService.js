import Utils from "../../utils/Utils";

class OfferDetailService {

    static getHeader(offer) {
        const getActionsRow = () => ({
            actions: [
                {
                    label: "◄",
                    path: "/all/offers"
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
            salary: Utils.getSalary(offer),
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
                    value: Utils.getCreatedDays(offer),
                },
            ]
        });
        return {
            actionsRow: getActionsRow(),
            detailRow: getDetailRow(offer),
            infoCardsRow: getInfoCardsRow(offer),
        }
    }

    static getBody(offer) {
        const getLevel = (rating) => {
            const levels = ['nice to have', 'junior', 'regular', 'advanced', 'expert']
            return levels[rating - 1];
        }

        return {
            techStack: {
                title: "Tech stack",
                data: {
                    skills: offer.skills.map(skill => ({
                        ...skill,
                        level: getLevel(skill.rating)
                    }))
                }
            },
            description: {
                title: "Job description",
                data: {
                    description: offer.description
                }
            },
            requirements: {
                title: "Requirements",
                data: {
                    items: offer.requirements
                }
            },
            niceToHave: {
                title: "Nice to have",
                data: {
                    items: offer.niceToHave
                }
            },
            benefits: {
                title: "Benefits",
                data: {
                    items: offer.niceToHave
                }
            },
        }
    }

    static getFooter(offer) {
        return {
            actions: [
                {
                    type: "button",
                    label: "Apply now"
                }
            ]
        };
    }

    static get(offer) {
        return {
            header: OfferDetailService.getHeader(offer),
            body: OfferDetailService.getBody(offer),
            footer: OfferDetailService.getFooter(offer)
        }
    }
}

export default OfferDetailService;