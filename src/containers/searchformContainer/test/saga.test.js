import { test } from 'tape';
import { imgSaga } from '../saga';

const testSearchformContainerSaga = t => {
  const imgGenerator = imgSaga();

  imgGenerator.next();
  const fetchImg = imgGenerator.next().value.FORK.fn;
  t.equal(fetchImg.name, 'fetchImg', 'must be fetchImg generator');

  // const fetchImgGenerator = fetchImg();
  t.end();
};

test('Test searhformContainer saga', testSearchformContainerSaga);
