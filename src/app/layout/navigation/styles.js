import Styles from "../../../tailwind/Styles";
import StyleSheet from "../../../tailwind/StyleSheet";

const nav = Styles
    .builder()
    .add("bg-black text-white")
    .add("px-4 py-2")
    .add("flex flex-col justify-center")
    .add("space-y-2")
    .getClassName();

//Top
const row = Styles
    .builder()
    .add("flex justify-between items-center")
    .getClassName();

export default {
    nav: StyleSheet(nav, {
        top: StyleSheet(row, {
            header: StyleSheet("text-3xl px-2 border-gray-700 hover:font-bold hover:tracking-widest transition-letter-spacing duration-200 ease-in bg-clip-text text-transparent bg-gradient-to-br from-primary-light via-primary to-white"),
            actions: StyleSheet("flex space-x-2 items-center tracking-wider	font-bold", {
                action: StyleSheet("px-4 py-2 rounded-lg hover:bg-primary-light hover:text-black transition-500 transition-all")
            })
        }),
        bottom: StyleSheet(row, {
            sections: StyleSheet("flex space-x-4")
        })
    })
};