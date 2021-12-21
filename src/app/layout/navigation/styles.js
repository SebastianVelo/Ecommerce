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
            header: StyleSheet("text-2xl"),
            actions: StyleSheet("flex space-x-2")
        }),
        bottom: StyleSheet(row, {
            sections: StyleSheet("flex space-x-4")
        })
    })
};