import Main from 'src/pages/main/main';

const title = 'The Grand Budapest Hotel';
const genre = 'Drama';
const year = '2014';

const App = (): JSX.Element => (
  <Main title={title} genre={genre} year={year}/>
);


export default App;
