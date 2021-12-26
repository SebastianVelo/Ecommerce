import StyleSheet from "../../../../tailwind/StyleSheet";

export default {
    offerDetail: StyleSheet("col-span-4", {
        header: StyleSheet("bg-gradient-to-tr from-primary-dark via-primary to-primary-light lg:p-4 flex space-y-2 flex-col rounded-md relative shadow-2xl", {
            actionsRow: StyleSheet("flex justify-between px-2 text-3xl"),
            detailRow: StyleSheet("flex flex-col items-center justify-center lg:justify-start lg:flex-row space-y-4 space-x-8 px-2 py-4 text-xl w-full", {
                avatar: StyleSheet("h-16 w-16 md:h-24 md:w-24 rounded-full ring-8 ring-gray-900 ring-opacity-75 ring-offset-4 ring-offset-black"),
                title: StyleSheet("text-3xl font-black"),
                location: StyleSheet("text-2xl"),
                salary: StyleSheet("text-xl font-bold"),
            }),
            infoCardsRow: StyleSheet("grid grid-cols-2 w-full lg:px-4 lg:absolute lg:-bottom-16 lg:left-0 lg:grid-cols-4 lg:gap-x-4 text-white")
        }),
        body: StyleSheet("mt-8 gap-y-4 px-4 grid grid-cols-1 lg:mt-24 lg:gap-x-4"),
        footer: StyleSheet("flex items-center w-full justify-center p-4")
    })
}