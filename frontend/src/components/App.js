import React, { useState, useEffect } from 'react';
import { createObj, readAllObjs, deleteObj, updateObj } from '../api/objsHelper';

const App = () => {
  const [objs, setObjs] = useState(null);
  const [message, setMessage] = useState('');

  const refreshObjs = (alert = false) => {
    readAllObjs(allObjs => {
      setObjs(allObjs);
      if (alert) {
        setMessage('successfully retrieved all objs');
      }
    }, error => {
      setMessage(error);
    });
  };

  const deleteButtonClick = id => {
    deleteObj(id, _ => {
      setMessage('deleted obj')
      refreshObjs();
    }, error => {
      setMessage(error);
    });
  };

  const editButtonClick = (id, oldName) => {
    const name = prompt('change name to what?', oldName);
    if (name !== '') {
      updateObj(id, { name }, _ => {
        setMessage('updated obj');
        refreshObjs();
      }, error => {
        setMessage(error);
      });
    } else {
      setMessage('name cannot be empty for new obj');
    }
  }

  const createInput = event => {
    if (event.key === 'Enter') {
      createObj(event.target.value, _ => {
        event.target.value = '';
        setMessage('created obj');
        refreshObjs();
      }, error => {
        setMessage(error);
      });
    }
  };

  useEffect(() => {
    refreshObjs(true);
  }, []);

  return (
    <div>
      status: {message}
      {objs && (
        <ul>
          {objs.map(obj => (
            <li key={obj._id}>
              <span>{obj.name}</span>
              <button onClick={() => editButtonClick(obj._id, obj.name)}>edit</button>
              <button onClick={() => deleteButtonClick(obj._id)}>delete</button>
            </li>
          ))}
          <li><input onKeyDown={e => createInput(e)} /></li>
        </ul>
      )}
    </div>
  );
};

export default App;
