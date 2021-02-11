import "./styles.css";
import Accordion from "./components/Accordion";
import Search from "./components/Search";

const items = [
  {
    title: "What is React?",
    content: "React is a front-end javascript framework"
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among engineers"
  },
  {
    title: "How to use React?",
    content: "Use React by creating components"
  }
];

export default () => {
  return (
    <div>
      {/* <Accordion items={items} /> */}
      <Search />
    </div>
  );
};

// useEffect(() => {
//   const search = async () => {
//     const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
//       params: {
//         action: 'query',
//         list: 'search',
//         origin: '*',
//         format: 'json',
//         srsearch: debouncedTerm,
//       },
//     });

//     setResults(data.query.search);
//   };
//   if (debouncedTerm) {
//     search();
//   }
// }, [debouncedTerm]);
