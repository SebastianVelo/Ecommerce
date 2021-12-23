import StyleSheet from "../../../../../../../tailwind/StyleSheet"

export default {
    section: StyleSheet("bg-gradient-to-b from-slate-900 to-black divide-y-2 divide-gray-600 text-white shadow-2xl", {
        title: StyleSheet("py-4 px-4 text-2xl"),
        child: StyleSheet("py-4 px-4")
    })
};