import { Button } from 'rizzui';
import { getHello } from '../repository/hello';

const RootPage = async ({ params }: { params: { forTest?: boolean } }) => {
  try {
    const response = await getHello();
    console.log({ response });
  } catch (error) {
    console.error(error);
  }

  return <Button>TEST</Button>;
};

export default RootPage;
