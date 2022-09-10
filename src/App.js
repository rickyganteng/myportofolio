import React, { Component } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Home from '../src/Page/Home/Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        {/* <Switch> */}
        <Routes>
          <Route path='/' exact element={<Home />} />
          {/* </Switch> */}
        </Routes>
      </BrowserRouter>
    );
  }
}
export default App;
