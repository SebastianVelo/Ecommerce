import Styles from "../../../tailwind/Styles";
import StyleSheet from "../../../tailwind/StyleSheet";

const card = Styles
    .builder()
    .add("flex space-x-4 w-full py-3 px-3 bg-gradient-to-br from-slate-900 to-black text-white rounded-md")
    .getClassName();

const wrapper = Styles
    .builder()
    .add("flex w-full")
    .add("flex-col justify-start space-y-2")
    .add("sm:justify-between sm:space-y-0")
    .getClassName();

const rowWrapper = Styles
    .builder()
    .add("flex justify-between items-center w-full flex-col")
    .add("sm:flex-row sm:items-stretch");

//Row top
const rowTop = Styles
    .builder()
    .merge(rowWrapper)
    .getClassName();

//Row bottom
const rowBottom = Styles
    .builder()
    .merge(rowWrapper)
    .add("text-sm space-x-2")
    .getClassName();

export default {
    card: StyleSheet(card, {
        image: StyleSheet("rounded-md w-20 h-20 bg-white"),
        wrapper: StyleSheet(wrapper, {
            rowTop: StyleSheet(rowTop, {
                title: StyleSheet("text-xl"),
                salary: StyleSheet("sm:text-lg text-green-300")
            }),
            rowBottom: StyleSheet(rowBottom, {
                spacedRow: StyleSheet("flex items-center justify-end space-x-4"),
                location: StyleSheet("hidden"),
                tags: StyleSheet("hidden sm:flex items-center justify-end space-x-4"),
            })
        })
    })
};