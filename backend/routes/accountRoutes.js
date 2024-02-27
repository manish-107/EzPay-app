import { getBalance, transferAmt } from "../controllers/accountController";
import { authMiddleware } from "../middlewares/authMiddleware";

const accRouter = express.router();

accRouter.route('/transfer').post(authMiddleware, transferAmt);
accRouter.route('/balance').get(authMiddleware, getBalance);

export default accRouter