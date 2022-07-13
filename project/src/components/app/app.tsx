import MainScreen from '../../pages/main/main';

const title = 'The Grand Budapest Hotel';
const genre = 'Drama';
const year = '2014';

function App(): JSX.Element {
  return (
    <MainScreen title={title} genre={genre} year={year}/>
  );
}

export default App;
