import Styles from "../../tailwind/Styles";
import StyleSheet from "../../tailwind/StyleSheet";

const nav = Styles
    .builder()
    .add("bg-black text-white")
    .add("px-4 py-2")
    .add("flex flex-col justify-center")
    .add("space-y-2")
    .getClassName();

//Top
const top = Styles
    .builder()
    .add("flex justify-between items-center")
    .getClassName();

const header = Styles
    .builder()
    .add("text-2xl")
    .getClassName();

const actions = Styles
    .builder()
    .add("flex space-x-2")
    .getClassName();

//Bottom
const bottom = Styles
    .builder()
    .add("flex justify-between items-center")
    .getClassName();

const sections = Styles
    .builder()
    .add("flex space-x-4")
    .getClassName();

export default {
    nav: StyleSheet(nav, {
        top: StyleSheet(top, {
            header: StyleSheet(header),
            actions: StyleSheet(actions)
        }),
        bottom: StyleSheet(bottom, {
            sections: StyleSheet(sections)
        })
    })
};