import {BrowserRouter, Routes, Route} from 'react-router-dom';
import PrivateRoute from 'src/components/private-route/private-route';
import Main from 'src/pages/main/main';
import Login from 'src/pages/login/login';
import MyList from 'src/pages/mylist/mylist';
import Film from 'src/pages/film/film';
import Review from 'src/pages/review/review';
import Player from 'src/pages/player/player';
import NotFound from 'src/pages/not-found/not-found';

const title = 'The Grand Budapest Hotel';
const genre = 'Drama';
const year = '2014';

const App = (): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route path='/'>
        <Route index element={<Main title={title} genre={genre} year={year}/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/mylist' element={
          <PrivateRoute>
            <MyList />
          </PrivateRoute>
        }
        />
        <Route path='/player/:id' element={<Player />} />
        <Route path='/films/'>
          <Route path='/films/:id' element={<Film />} />
          <Route path='/films/:id/review' element={<Review />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);


export default App;
