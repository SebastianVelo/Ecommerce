import StyleSheet from "../../../tailwind/StyleSheet";
import offerCardStyle from "./offerCardStyle";

export default {
    page: StyleSheet("flex flex-col", {
        filterbar: StyleSheet("px-4 py-2 space-y-4 flex flex-col lg:space-y-0 items-start", {
        }),
        main: StyleSheet("h-full w-full", {
            title: StyleSheet("text-xl md:text-3xl text-primary-light px-4 pb-2"),
            paginationWrapper: StyleSheet("flex justify-between flex-col md:flex-row items-center py-3 w-full", {
                pagination: StyleSheet("flex justify-start w-full"),
                total: StyleSheet("text-xl text-white px-4 py-2 text-right w-full"),
            }),
            offersList: StyleSheet("space-y-4 px-4 col-span-4", {
                card: offerCardStyle,
            }),
        })
    })
}