import offerCardStyle from "./offerCardStyle";
import StyleSheet from "../../../tailwind/StyleSheet";

export default {
    page: StyleSheet("", {
        main: StyleSheet("grid grid-cols-4 h-full py-2"),
        suggestions: StyleSheet("space-y-2 px-4", {
            suggestion: StyleSheet("bg-gradient-to-t from-slate-900 to-black py-2 rounded-md", {
                title: StyleSheet("text-xl md:text-3xl text-primary-light px-4 pb-2"),
                offersList: StyleSheet("overflow-x-scroll space-x-6 flex px-4 py-4", {
                    card: offerCardStyle,
                }),
            })
        })
    })
}