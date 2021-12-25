import StyleSheet from "../../../tailwind/StyleSheet";

export default {
    page: StyleSheet("flex flex-col", {
        searchbar: StyleSheet("px-4 py-2 space-y-4 flex flex-col lg:space-y-0 items-start", {
            pagination: StyleSheet("pb-4 flex justify-center w-full")
        }),
        main: StyleSheet("h-full", {
            title: StyleSheet("text-3xl text-primary-light px-4 py-2"),
            total: StyleSheet("text-xl text-white px-4 py-2 text-right"),
            offersList: StyleSheet("space-y-4 px-4 col-span-4"),
        })
    })
}