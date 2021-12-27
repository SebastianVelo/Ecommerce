import Styles from "../../../tailwind/Styles";
import StyleSheet from "../../../tailwind/StyleSheet";

const card = Styles
    .builder()
    .add("flex-none flex flex-col space-y-2 w-48 shadow-lg bg-gradient-to-b from-slate-900 to-black text-white items-center rounded-sm text-center border border-primary-light")
    .getClassName();

const wrapper = Styles
    .builder()
    .add("flex flex-col w-full h-full justify-between h-full space-y-2 p-2 ")
    .getClassName();

const rowWrapper = Styles
    .builder()
    .add("flex w-full flex-col text-left");

//Row top
const rowTop = Styles
    .builder()
    .merge(rowWrapper)
    .getClassName();

//Row bottom
const rowBottom = Styles
    .builder()
    .add("text-sm")
    .getClassName();

export default {
    card: StyleSheet(card, {
        image: StyleSheet("w-48 h-full bg-white"),
        wrapper: StyleSheet(wrapper, {
            rowTop: StyleSheet(rowTop, {
                title: StyleSheet("text-xl"),
                salary: StyleSheet("text-sm text-green-300")
            }),
            rowBottom: StyleSheet(rowBottom, {
                location: StyleSheet("hidden"),
                tags: StyleSheet("hidden"),
                spacedRow: StyleSheet("flex flex-col space-y-2 items-start")
            })
        })
    })
};