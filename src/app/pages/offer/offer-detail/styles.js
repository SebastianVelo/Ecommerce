import StyleSheet from "../../../../tailwind/StyleSheet";

export default {
    offerDetail: StyleSheet("col-span-2 lg:p-2 overflow-y-scroll py-2", {
        header: StyleSheet("bg-gradient-to-b from-gray-900 to-indigo-900 text-white lg:p-4 flex space-y-2 flex-col rounded-lg relative", {
            actionsRow: StyleSheet("flex justify-between px-2"),
            detailRow: StyleSheet("flex items-center space-x-4 px-2 py-4 text-xl", {
                avatar: StyleSheet("h-24 w-24 rounded-full"),
                title: StyleSheet("text-3xl"),
                location: StyleSheet("text-xl"),
                salary: StyleSheet("text-xl"),
            }),
            infoCardsRow: StyleSheet("grid grid-cols-2 w-full lg:px-4 lg:absolute lg:-bottom-16 lg:left-0 lg:grid-cols-4 lg:gap-x-4")
        }),
        body: StyleSheet("mt-8 lg:mt-24 space-y-8"),
        footer: StyleSheet("flex items-center w-full justify-center p-4")
    })
}