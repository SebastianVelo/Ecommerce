import offerCardStyle from "./offerCardStyle";
import StyleSheet from "../../../tailwind/StyleSheet";

export default {
    page: StyleSheet("", {
        main: StyleSheet("grid grid-cols-4 h-full py-2"),
        suggestions: StyleSheet("", {
            offersList: StyleSheet("overflow-scroll space-x-6 flex px-4 py-4", {
                card: offerCardStyle,
            }),
        })
    })
}