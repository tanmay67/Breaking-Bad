import React, { useContext } from 'react';
import BadContext from '../context/bad/badContext';
import CharItem from './CharItem';
import Spinner from './Spinner';

const Char = () => {
  const badContext = useContext(BadContext);
  const { items } = badContext;

  // const [list, setList] = useState(null);

  // useEffect(() => {
  //   const fun = async () => {
  //     const res = await axios.get(
  //       'https://www.breakingbadapi.com/api/characters'
  //     );
  //     setList(res.data);
  //   };
  //   fun();
  // }, []);
  return (
    <div className="container row m-0 p-0">
      {items !== null ? (
        items.map((item) => (
          <div
            className="col-sm-6 col-md-4 col-lg-3 m-0 p-0"
            key={item.char_id}
          >
            <CharItem item={item} />
          </div>
        ))
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default Char;
