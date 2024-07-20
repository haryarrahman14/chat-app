import { getHello } from '../repository/hello';

const RootPage = async ({ params }: { params: { forTest?: boolean } }) => {
  try {
    const response = await getHello();
    console.log({ response });
  } catch (error) {
    console.error(error);
  }

  return <p className="text-gray-500">TEST</p>;
};

export default RootPage;
