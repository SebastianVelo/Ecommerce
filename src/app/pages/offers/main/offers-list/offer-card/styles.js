import Styles from "../../../../../../tailwind/Styles";
import StyleSheet from "../../../../../../tailwind/StyleSheet";

const card = Styles
    .builder()
    .add("flex space-x-4 w-full py-3 px-3 bg-gradient-to-br from-slate-900 to-black text-white rounded-sm")
    .getClassName();

const wrapper = Styles
    .builder()
    .add("flex w-full")
    .add("flex-row justify-start")
    .add("md:flex-col md:justify-between")
    .getClassName();

const rowWrapper = Styles
    .builder()
    .add("flex justify-between items-center sm:items-stretch  w-full flex-col")
    .add("md:flex-row");

//Row top
const rowTop = Styles
    .builder()
    .merge(rowWrapper)
    .getClassName();

//Row bottom
const rowBottom = Styles
    .builder()
    .merge(rowWrapper)
    .add("text-sm hidden sm:flex")
    .getClassName();

export default {
    card: StyleSheet(card, {
        image: StyleSheet("rounded-md w-20 h-20 bg-white"),
        wrapper: StyleSheet(wrapper, {
            rowTop: StyleSheet(rowTop, {
                title: StyleSheet("text-xl"),
                salary: StyleSheet("text-lg text-green-300")
            }),
            rowBottom: StyleSheet(rowBottom, {
                spacedRow: StyleSheet("flex items-center justify-end space-x-4")
            })
        })
    })
};