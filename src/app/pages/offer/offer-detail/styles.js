import StyleSheet from "../../../../tailwind/StyleSheet";

export default {
    offerDetail: StyleSheet("col-span-3 mb-32", {
        header: StyleSheet("bg-gradient-to-tl from-gray-900 to-blue-900 text-white lg:p-4 flex space-y-2 flex-col rounded-md relative shadow-2xl", {
            actionsRow: StyleSheet("flex justify-between px-2"),
            detailRow: StyleSheet("flex items-center space-x-8 px-2 py-4 text-xl", {
                avatar: StyleSheet("h-24 w-24 rounded-full ring-8 ring-white ring-opacity-20 ring-offset-2 ring-offset-indigo"),
                title: StyleSheet("text-3xl"),
                location: StyleSheet("text-xl"),
                salary: StyleSheet("text-xl"),
            }),
            infoCardsRow: StyleSheet("grid grid-cols-2 w-full lg:px-4 lg:absolute lg:-bottom-16 lg:left-0 lg:grid-cols-4 lg:gap-x-4")
        }),
        body: StyleSheet("mt-8 lg:mt-24 space-y-8 px-4"),
        footer: StyleSheet("flex items-center w-full justify-center p-4")
    })
}