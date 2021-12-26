import Styles from "../../../tailwind/Styles";
import StyleSheet from "../../../tailwind/StyleSheet";

const card = Styles
    .builder()
    .add("flex-none flex flex-col space-y-2 w-42 shadow-lg bg-black items-center rounded-md text-center p-2 text-white")
    .getClassName();

const wrapper = Styles
    .builder()
    .add("flex flex-col w-full h-full justify-between h-full space-y-2")
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
    .add("text-sm text-left")
    .getClassName();

export default {
    card: StyleSheet(card, {
        image: StyleSheet("rounded-md w-full h-full bg-white"),
        wrapper: StyleSheet(wrapper, {
            rowTop: StyleSheet(rowTop, {
                title: StyleSheet("text-md"),
                salary: StyleSheet("text-xs text-green-300")
            }),
            rowBottom: StyleSheet(rowBottom, {
                location: StyleSheet("hidden"),
                tags: StyleSheet("hidden"),
                spacedRow: StyleSheet("flex flex-col space-y-2 items-start")
            })
        })
    })
};