import apiHandler from '@repo/axios/handler-server';

export const getHello = async () => {
  return await apiHandler.get(`${process.env.API_URL}/`);
};
