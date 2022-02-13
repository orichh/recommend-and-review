import { getAllMovies } from "../database/models";

export const getMovies = (req: any, res: any) => {
  getAllMovies()
    .then((data: any) => {
      res.send(data.rows);
    })
    .catch((error: any) => {
      res.send("error getting movies");
    });
};
