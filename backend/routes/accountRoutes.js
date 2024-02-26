import { authMiddleware } from "../middlewares/authMiddleware";

const accRouter = express.router();

accRouter.route('/transfer').post(authMiddleware);
accRouter.route('/balance').get(authMiddleware, getBalance);

export default accRouter