import StyleSheet from "../../../tailwind/StyleSheet";

export default {
    page: StyleSheet("flex flex-col", {
        main: StyleSheet("grid grid-cols-4 h-full", {
            offers: StyleSheet("space-y-4 px-4 col-span-4"),
        })
    })
}